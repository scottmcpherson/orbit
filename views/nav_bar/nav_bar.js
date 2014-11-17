Orbit.navBar = {
  _title: 'Title',
  titleDep: new Tracker.Dependency,
  set title(t) {
    this._title = t;
    this.titleDep.changed();
  },
  get title() {
    this.titleDep.depend();
    return this._title;
  },

  backButton: {
    _visible: false,
    _text: 'Back',
    backButtonVisibleDep: new Tracker.Dependency,
    backButtonTextDep: new Tracker.Dependency,

    set visible(bool) {
      this._visible = bool;
      this.backButtonVisibleDep.changed();
    },
    get visible() {
      this.backButtonVisibleDep.depend();
      return this._visible;
    },

    set text(text) {
      this._text = text;
      this.backButtonTextDep.changed();
    },
    get text() {
      this.backButtonTextDep.depend();
      return this._text;
    },
  },

  openSideMenu: function () {
    var container = $('#container');
    container.addClass('menu-open open');
  },

  closeSideMenu: function () {
    var container = $('#container');
    container.removeClass('menu-open');
    Orbit.transitionEnd('#container', function () {
      container.removeClass('open');
    })
  },

  toggleSideMenu: function () {
    var container = $('#container');
    if (! container.hasClass('menu-open'))
      this.openSideMenu();
    else
      this.closeSideMenu();
  },

}



Template.NavBar.helpers({
  isBackButtonVisible: function () {
    return Orbit.navBar.backButton.visible;
  }
});
Template.NavBar.events({
  'click': function (e, temp) {
    console.log("clicked: ", temp);
  }
});
Template.NavBar.created = function () {
  console.log("created: ", this);

}
Template.NavBar.rendered = function () {
  console.log("rendered: ", this);
}



Template.MenuButton.events({
  'click .menu-button': function (e) {
    console.log("clicked");
    Orbit.navBar.toggleSideMenu();
  },
});
Template.BackButton.events({
  'click .back.button': function (e) {
    Session.set('triggerTransition', 'fromDetail');
    window.history.back();
  },
});
Template.BackButton.helpers({
  backButtonText: function () {
    return Orbit.navBar.backButton.text;
  }
});



Template.NavBarTitle.helpers({
  title: function() {
    return Orbit.navBar.title;
  },
});

Template.NavBarItem.events({
  'click .nav-bar-item': function () {
    var self = this;

    if (this.modal)
      Orbit.modal.showModal(self);

  },
  'click .dismis-modal': function () {
    Orbit.modal.dismisModal();
  }
});

