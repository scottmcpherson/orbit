Orbit.tableView = {
  transitionListView: function () {
    Orbit.animate('.table-list-view', 'slide-along-center-to-left', false);
    Orbit.animate('.table-list-view', 'sliding', true);
    Orbit.transitionEnd('.table-list-view', function() {
      $('.table-list-view').removeClass('sliding')
    });
    Orbit.animate('.table-detail-view', 'slide-along-right-to-center', false);
    Orbit.animate('.table-detail-view', 'sliding', true)
    Orbit.transitionEnd('.table-detail-view', function() {
      $('.table-detail-view').removeClass('sliding')
    });
  },
  transitionDetailView: function () {
    Orbit.animate('.table-list-view', 'slide-along-center-to-left transit-transform sliding', true);
    Orbit.transitionEnd('.table-list-view', function() {
      $('.table-list-view').removeClass('sliding')
    });
    Orbit.animate('.table-detail-view', 'slide-along-right-to-center transit-transform sliding', true);
    Orbit.transitionEnd('.table-detail-view', function() {
      $('.table-detail-view').removeClass('sliding')
    });
  },
  showDetailView: function () {
    Orbit.animate('.table-list-view', 'slide-along-center-to-left', true);
    Orbit.animate('.table-detail-view', 'slide-along-right-to-center', true);
  }
}

Session.setDefault('selectedTableItem', '');
Session.setDefault('isTableListView', true);
Session.setDefault('detailAlreadyVisible', false);

Template.TableView.events({
  'click .item': function (e) {
    Session.set('selectedTableItem', this._id);
    Session.set('triggerTransition', 'fromList');
  },
});
Template.TableView.helpers({
  isTableListView: function () {
    return Session.get('isTableListView');
  },
  isTableDetailView: function () {
    return ! Session.equals('selectedTableItem', '');
  },
});

Template.TableView.destroyed = function () {
  console.log("table view destroyed", this);
  // Session.set('detailAlreadyVisible', false);
}
Template.TableView.rendered = function () {
  console.log("from detail: ", Session.equals('triggerTransition', 'fromDetail'));
  this.autorun(function () {
    if (Session.equals('triggerTransition', 'fromDetail')) {
      Orbit.tableView.transitionListView();
    }
  })

}
Template.TableDetailView.rendered = function () {
  this.autorun(function () {
    var detailView = $('table-detail-view');
    if (! detailView.hasClass('slide-along-right-to-center') &&
      Session.equals('triggerTransition', 'fromList')) {
      Orbit.tableView.transitionDetailView();
      Session.set('triggerTransition', false);
    } else if (! detailView.hasClass('slide-along-right-to-center')) {
      Orbit.tableView.showDetailView();
    }
  });
}
// Template.TableView.rendered = function () {

// }
Template.TableDetailView.destroyed = function () {
  Session.set('detailAlreadyVisible', false);
}