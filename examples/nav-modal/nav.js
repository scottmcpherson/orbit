if (Meteor.isClient) {
  Template.TestModal.rendered = function () {
    // modalNav is the name of the hande
    // passed into the NavBar block helper
    // Orbit.modalNav.title.set('Sweet!');
  }
  var animate = function(view) {
     view.velocity({ translateX: "220px" }).velocity("reverse")
                             .velocity({ translateY: "425px" })
                             .velocity({ translateX: "0px" }).velocity("reverse")
                             .velocity({ translateY: "0px" }).velocity("reverse")
                             .velocity({
                              translateX: "100px",
                              translateY: "100px",
                              rotateZ: "1080deg",
                              scaleX: 2,
                              scaleY: 2,
                              backgroundColor: "#FF3B30"
                             })
                             .velocity({
                              rotateZ: "-1080deg",
                              scaleX: 1,
                              scaleY: 1,
                              backgroundColor: "#007AFF"
                             }, { delay: 1000, duration: 1500 })
                             .velocity({
                              rotateZ: "1080deg",
                              scaleX: 2,
                              scaleY: 2,
                              backgroundColor: "#FF3B30"
                             }, { duration: 1000 })
                             .velocity({
                              rotateZ: "-1080deg",
                              scaleX: 1,
                              scaleY: 1,
                              backgroundColor: "#007AFF"
                             })
                             .velocity({
                              rotateZ: "1080deg",
                              scaleX: 2,
                              scaleY: 2,
                              backgroundColor: "#FF9500"
                             }, { duration: 500 })
                             .velocity({
                              rotateZ: "-1080deg",
                              scaleX: 1,
                              scaleY: 1,
                              backgroundColor: "#007AFF"
                             }, { duration: 1000, loop: true })

  }

  Template.MainContent.events({
    'click .blue-square-one': function (e) {
      animate(Orbit.blueSquare.view());
      Meteor.setTimeout(function(){
        animate(Orbit.blueSquareTwo.view());
      }, 500);
      Meteor.setTimeout(function(){
        animate(Orbit.blueSquareThree.view());
      }, 1000);
    },
  });
}
