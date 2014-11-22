TableDetailController = RouteController.extend({
  layoutTemplate: 'TableLayout',
  waitOn: function () {
  },

  data: function () {
  },

  onBeforeAction: function() {
    // Session.set('selectedTableItem', this.params._id);
    this.next();
  },

  action: function () {
    this.render();
  }
});