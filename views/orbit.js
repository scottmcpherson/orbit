Orbit = {};
Orbit.views = [];
Orbit.animate = function(selector, transition, add, cb) {
  console.log('this', this);

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
    console.log("is IR: ", (typeof Iron !== 'undefined' && _.isObject(Iron)));
    return (typeof Iron !== 'undefined' && _.isObject(Iron));
  }
}

_.each(Orbit.helpers, function (helper, key) {
  Template.registerHelper(key, helper);
});