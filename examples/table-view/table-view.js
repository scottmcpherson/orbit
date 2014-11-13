tableViewData = new Mongo.Collection(null);

var rowNames = [
  { name: "One"},
  { name: "Two"},
  { name: "Three"},
  { name: "Four"},
  { name: "Five"},
  { name: "Six"},
  { name: "Seven"},
  { name: "Eight"},
  { name: "Nine"},
  { name: "Ten"},
  { name: "Eleven"},
];
if (Meteor.isClient) {
  Meteor.startup(function () {
    _.each(rowNames, function (r) {
      tableViewData.insert({
        name: r.name
      })
    });
  })
  Template.GenericTable.helpers({
    rows: function () {
      return tableViewData.find();
    },
  });
  Template.DetailView.rendered = function () {
    Orbit.navBar.backButton.isVisible = true;
  }
}

if (Meteor.isServer) {

}
