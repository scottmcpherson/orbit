/*****************************************************************************/
/* Client App Namespace  */
/*****************************************************************************/
_.extend(App, {
});

App.helpers = {
};

_.each(App.helpers, function (helper, key) {
  Handlebars.registerHelper(key, helper);
});


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
  { name: "Twelve"},
  { name: "Thirteen"},
  { name: "Fourteen"},
];

Meteor.startup(function () {
  _.each(rowNames, function (r) {
    tableViewData.insert({
      name: r.name
    })
  });
})