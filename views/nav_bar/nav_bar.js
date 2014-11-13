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
    backButtonVisibleDep: new Tracker.Dependency,
    set visible(bool) {
      this._visible = bool;
      this.backButtonVisibleDep.changed();
    },
    get visible() {
      this.backButtonVisibleDep.depend();
      return this._visible;
    },
  }

}
Template.NavBar.helpers({
  isBackButtonVisible: function () {
    console.log(Orbit.navBar.backButton.visible);
    return Orbit.navBar.backButton.visible;
  }
});

Template.NavBarTitle.events({
  'click .title': function () {
    console.log("clicked");
  }
})

Template.NavBarTitle.helpers({
  title: function() {
    return Orbit.navBar.title;
  },
});


