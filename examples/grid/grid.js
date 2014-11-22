if (Meteor.isClient) {
  Template.Grid.rendered = function () {
    // var el = document.getElementById('container');
    // var hammertime = new Hammer(el);
    // hammertime.on('pan', function(ev) {
    //     console.log(ev);
    // });
  }


  Template.Grid.events({
    'swiperight #container': function () {
      console.log("swipe right");
    },
    'swipeleft #container': function () {
      console.log("swipe left");
    },
    'movestart #container': function () {
      console.log("movestart");
    }
  })
}