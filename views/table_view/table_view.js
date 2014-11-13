Session.setDefault('selectedTableItem', '');
Session.setDefault('detailAlreadyVisible', false);
Template.TableView.events({
  'click .item': function (e) {
    Session.set('selectedTableItem', this.data._id);
  },
});
Template.TableView.helpers({
  isTableListView: function () {
    return true;
  },
  isTableDetailView: function () {
    return ! Session.equals('selectedTableItem', '');
  },
});

Template.TableView.rendered = function () {
}
Template.TableDetailView.rendered = function () {
  if (! Session.get('detailAlreadyVisible')) {
    Meteor.setTimeout(function() {
      $('.table-detail').attr("class", "content has-header table-detail transition center");
      Session.set('detailAlreadyVisible', true);
    }, 100);
  } else {
    $('.table-detail').attr("class", "content has-header table-detail center");
  }
  Orbit.navBar.backButton.visible = true;

}
Template.TableDetailView.destroyed = function () {
  Session.set('detailAlreadyVisible', false);
}