if (Meteor.isClient) {
  Template.Home.created = function () {
    Orbit.navBar.title = "Home";
  }
  Template.Stars.created = function () {
    Orbit.navBar.title = "Stars";
  }
}

if (Meteor.isServer) {

}
