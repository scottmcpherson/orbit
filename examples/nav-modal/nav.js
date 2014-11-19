if (Meteor.isClient) {
  Template.TestModal.rendered = function () {
    // modalNav is the name of the hande
    // passed into the NavBar block helper
    // Orbit.modalNav.title.set('Sweet!');
  }
}
