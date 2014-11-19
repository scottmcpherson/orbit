//=============================================================================
//  Table View
//=============================================================================
Template.TableView.helpers({
  tableDetailView: function () {
    return Session.get('tableDetail')
  },
})
Template.TableView.rendered = function () {
  console.log(this.data.route);
  var self = this;
  this.autorun(function () {
    if (self.data && self.data.route && typeof Router !== 'undefined') {
      if (Router.current().route.getName() === self.data.route)
        Session.set('tableDetail', true)
      else
        Session.set('tableDetail', false)
    }
  });
}

//=============================================================================
//  Table List View
//=============================================================================
Orbit.TableListView = function (options) {
  options = options || {};
  this.selector = options.selector || '.table-list-view';
}
Orbit.TableListView.prototype = new Orbit.View();

Template.TableListView.created = function () {
  var _tableListView = new Orbit.TableListView();
  if (this.data && this.data.handle)
    Orbit[this.data.handle] = _tableListView;
  _.extend(this.__proto__, {
    _tableListView: _tableListView
  });
};

//=============================================================================
//  Table Detail View
//=============================================================================
Orbit.TableDetailView = function (options) {
  options = options || {};
  this.selector = options.selector || '.table-detail-view';
}
Orbit.TableDetailView.prototype = new Orbit.View();



Template.TableDetailView.helpers({
  template: function () {
    return { template: this.template }
    // console.log(this);
  },
});

Template.TableDetailView.created = function () {
  console.log(this);
  var _tableDetailView = new Orbit.TableDetailView();
  if (this.data && this.data.handle)
    Orbit[this.data.handle] = _tableDetailView;
  _.extend(this.__proto__, {
    _tableDetailView: _tableDetailView
  });
};

Template.TableDetailView.rendered = function () {
  var self = this;
  Meteor.setTimeout(function () {
    self._tableListView.transitionDetailView()
  }, 100)

  console.log('table detail: ', this);
}
//=============================================================================
//  Table List Item
//=============================================================================
// Router.current().route.getName()


// Session.setDefault('selectedTableItem', '');
// Session.setDefault('isTableListView', true);
// Session.setDefault('detailAlreadyVisible', false);

// Template.TableView.events({
//   'click .item': function (e) {
//     Session.set('selectedTableItem', this._id);
//     Session.set('triggerTransition', 'fromList');
//   },
// });
// Template.TableView.helpers({
//   isTableListView: function () {
//     return Session.get('isTableListView');
//   },
//   isTableDetailView: function () {
//     return ! Session.equals('selectedTableItem', '');
//   },
// });

// Template.TableView.destroyed = function () {
//   // console.log("table view destroyed", this);
//   // Session.set('detailAlreadyVisible', false);
// }
// Template.TableView.rendered = function () {
//   // console.log("from detail: ", Session.equals('triggerTransition', 'fromDetail'));
//   console.log('tableView: ', this);
//   this.autorun(function () {
//     if (Session.equals('triggerTransition', 'fromDetail')) {
//       Orbit.tableView.transitionListView();
//       Session.set('triggerTransition', false);
//     }
//   })

// }
// Template.TableDetailView.rendered = function () {
//   this.autorun(function () {
//     var detailView = $('table-detail-view');
//     if (! detailView.hasClass('slide-along-right-to-center') &&
//       Session.equals('triggerTransition', 'fromList')) {
//       // console.log("transit");
//       Orbit.tableView.transitionDetailView();
//       Session.set('triggerTransition', false);
//     } else if (! detailView.hasClass('slide-along-right-to-center')) {
//       // console.log("show");
//       // Orbit.tableView.showDetailView();
//     }
//   });
// }
// // Template.TableView.rendered = function () {

// // }
// Template.TableDetailView.destroyed = function () {
//   Session.set('detailAlreadyVisible', false);
// }