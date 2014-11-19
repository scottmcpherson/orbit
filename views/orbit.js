// Orbit Name Space
Orbit = {};

Orbit.views = [];

// Orbit.Animation = function () {

// }
// Orbit.Animation.prototype = {
//   animate: function () {
//     console.log("animate stuff");
//   }
// }






Orbit.animate = function(selector, transition, add, cb) {

  if (add)
    $(selector).addClass(transition);
  else
    $(selector).removeClass(transition);

  if (_.isFunction(cb))
    Orbit.transitionEnd(selector, function () { cb(); });

};
Orbit.transitionEnd = function(selector, cb) {
  $(selector).one('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd',
    function() {
     cb();
  });
};
Orbit.helpers = {
  isIronRouter: function () {
    // console.log("is IR: ", (typeof Iron !== 'undefined' && _.isObject(Iron)));
    return (typeof Iron !== 'undefined' && _.isObject(Iron));
  }
}

_.each(Orbit.helpers, function (helper, key) {
  Template.registerHelper(key, helper);
});

Meteor.startup(function () {
  _.extend(Blaze.TemplateInstance.prototype, {
    logInstance: function () {
      console.log("logging instance: ", this);
    }
  })
});