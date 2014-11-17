Orbit = {};
Orbit.views = [];
Orbit.animate = function(selector, transition, add) {
  console.log("selector: ", selector);
  console.log("transition: ", transition);
  if (add)
    $(selector).addClass(transition);
  else
    $(selector).removeClass(transition);
};
Orbit.transitionEnd = function(selector, cb) {
  $(selector).one('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd',
    function() {
     cb();
  });
};
Orbit.helpers = {
  isIronRouter: function () {
    console.log("is IR: ", (typeof Iron !== 'undefined' && _.isObject(Iron)));
    return (typeof Iron !== 'undefined' && _.isObject(Iron));
  }
}

_.each(Orbit.helpers, function (helper, key) {
  Template.registerHelper(key, helper);
});