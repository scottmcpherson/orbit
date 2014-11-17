/*****************************************************************************/
/* Stars: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Stars.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Stars.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* Stars: Lifecycle Hooks */
/*****************************************************************************/
Template.Stars.created = function () {
};

Template.Stars.rendered = function () {
  Orbit.navBar.title = "Stars";
};

Template.Stars.destroyed = function () {
};