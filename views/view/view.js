
Template.View.created = function () {
  console.log("created", this);
  var selector = (this.data.selector) ? '.' + this.data.selector : '';
  console.log(selector);
  _view = new Orbit.View({ selector: selector });
  if (this.data && this.data.handle)
    Orbit[this.data.handle] = _view;
  _.extend(this.__proto__, {
    _view: _view
  });

}
Template.View.rendered = function () {
  console.log(this);
}