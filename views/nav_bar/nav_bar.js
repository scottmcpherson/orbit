Orbit.NavBar = function (options) {
  options = options || {};
  this.title = new ReactiveVar(options.title || 'title');
  this.selector = options.selector || '.nav-bar';
  this.backButton = {};
  this.backButton.isVisible = new ReactiveVar(options.isBackButtonVisible || false);
  this.backButton.text = new ReactiveVar(options.backButtonText || "Back");
}
Orbit.NavBar.prototype = new Orbit.View();



//  Nav Bar
//==========
Template.NavBar.helpers({
  isBackButtonVisible: function () {
    return false;
    // return Orbit.navBar.backButton.visible;
  }
});
Template.NavBar.created = function () {

  var _navBar = new Orbit.NavBar({title: 'test', selector: ''});
  if (this.data && this.data.handle)
    Orbit[this.data.handle] = _navBar;
  _.extend(this.__proto__, {
    _navBar: _navBar
  });
  // console.log(this.firstNode);
}
Template.NavBar.rendered = function () {
  // console.log(this.firstNode);
}

//  Nav Bar Title
//================
Template.NavBarTitle.helpers({

  title: function() {
    // console.log("title: ", Template.instance()._navBar.title.get());
    return Template.instance()._navBar.title.get();
  },
});
Template.NavBarTitle.created = function () {
  // console.log(Template.instance());
  if (this.data && this.data.title)
    Template.instance()._navBar.title.set(this.data.title);
  // Template.instance()._navBar.animateTitle();
}

//  Other Stuff
//==============
Template.MenuButton.events({
  'click .menu-button': function (e) {
    console.log(Template.instance());
    Template.instance()._navBar.toggleSideMenu();
  },
});
Template.BackButton.events({
  'click .back.button': function (e) {
    if (typeof Template.instance()._tableDetailView !== 'undefined')
      Template.instance()._tableListView.transition();
      Template.instance()._tableDetailView.transition(function() {
        Session.set('tableDetail', false);
        history.back();
      });
  },
});
Template.BackButton.helpers({
  backButtonText: function () {
    return Template.instance()._navBar.backButton.text.get();
  }
});



Template.NavBarItem.events({
  'click .nav-bar-item': function () {
    var self = this;

    if (this.modal && ! Orbit._modal)
      Orbit.modal.create(self);

    if (this.action && this.action === 'dismisModal') {
      Template.instance()._modalView.closeModal();
    }

  },
  'click .dismis-modal': function () {
    // console.log(Template.instance());
    // Orbit.modal.dismisModal();
  }
});

