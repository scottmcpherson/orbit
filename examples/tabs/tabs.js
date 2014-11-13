if (Meteor.isClient) {
  console.log(Template.Bar);

  Template.One.created = function () {
    Orbit.navBar.title = "One";
  }
  Template.Two.created = function () {
    Orbit.navBar.title = "Two";
  }
  Template.Three.created = function () {
    Orbit.navBar.title = "Three";
  }
  Template.Four.created = function () {
    Orbit.navBar.title = "Four";
  }
  Template.Five.created = function () {
    Orbit.navBar.title = "Five";
  }
}

if (Meteor.isServer) {

}
