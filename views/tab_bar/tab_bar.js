Session.setDefault('tabContentTemplate', 'default');
Template.TabBar.helpers({
  tabContentTemplate: function () {
    // console.log(Template.instance());
    return { template: Session.get('tabContentTemplate') };
  }
});
Template.TabBarItem.events({
  'click .tab-item': function (e) {
    var tabItem = $(e.target);
    $('.tab-item').removeClass('active');
    Session.set('tabContentTemplate', this.template);

    if (! tabItem.hasClass('active'))
      tabItem.addClass('active');
  }
});
Template.TabBar.rendered = function () {
  // console.log("TabBar: ", this);
}

var count = 0;
var more = false;
var template;

Template.TabBarItem.rendered = function () {
  // if using default tab, try to set some tab content
  if (Session.equals('tabContentTemplate', 'default') && Blaze.isTemplate(Template[this.data.template]))
    Session.set('tabContentTemplate', this.data.template);
}