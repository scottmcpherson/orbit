Session.setDefault('tabContentTemplate', 'default');
Template.TabBar.helpers({
  tabContentTemplate: function () {
    return { template: Session.get('tabContentTemplate') };
  },
  isIronRouter: function () {
    console.log("isIron: ", (typeof Iron !== 'undefined' && _.isObject(Iron)));
    return (typeof Iron !== 'undefined' && _.isObject(Iron));
  },
});
Template.TabBarItem.events({
  'click .tab-bar-item': function (e) {
    var tmpl = this.template || this.route;
    Session.set('tabContentTemplate', tmpl);
  }
});
Template.TabBarItem.helpers({
  isActive: function () {
    var tmpl = this.template || this.route;
    if ((typeof this.template !== 'undefined' ||
      typeof this.route !== 'undefined') &&
      Session.equals('tabContentTemplate', tmpl)) {
      return 'active';
    }
    return '';
  }
});
Template.TabBarItem.rendered = function () {
  var self = this;
  console.log(self);
  // if tab content template has not been set, try to set it
  if (Session.equals('tabContentTemplate', 'default') &&
    Blaze.isTemplate(Template[this.data.template])) {
    Session.set('tabContentTemplate', this.data.template);
  }
  if (typeof Iron !== 'undefined' && _.isObject(Iron) && self.data.route)
    Session.set('tabContentTemplate', Router.current().options.route.getName());
}
