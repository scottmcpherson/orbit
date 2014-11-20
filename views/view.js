Orbit.View = function (options) {
  options = options || {};
  this.selector = options.selector || '.view'
};
// Useful down the road
Orbit.View.prototype = {
  view: function () {
    if (! this.selector)
      return console.error('No View Exist. Selector was not set');
    return $(this.selector);
  }
};