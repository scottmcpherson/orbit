/*****************************************************************************/
/* TableList: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.TableList.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.TableList.helpers({
  rows: function () {
    return tableViewData.find();
  },
});

/*****************************************************************************/
/* TableList: Lifecycle Hooks */
/*****************************************************************************/
Template.TableList.created = function () {
};

Template.TableList.rendered = function () {
  // Orbit.navBar.title = "Numbered Rows";
  // Orbit.navBar.backButton.isBackButtonVisible = false;
};

Template.TableList.destroyed = function () {
};