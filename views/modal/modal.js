var _modalView;

Orbit.modal = {
  create: function (data) {
    var parentView = document.getElementById('container');
    // Need to figure out a way to prevent multiple instance of this
    // being created for the same view
    blazeView = Blaze.renderWithData(Template._Modal, data, parentView);
    console.log('create: ', blazeView);
    // If Orbit.ModalView has been created
    if (_.isObject(_modalView))
      _modalView._blazeView = blazeView;
  },
}

Orbit.ModalView = function (options) {
  options = options || {};
  this._blazeView = options._blazeViewiew || null;
  this.selector = options.selector || '.modal-view';
}
Orbit.ModalView.prototype = new Orbit.View();

_.extend(Orbit.ModalView.prototype, {
  slideUp: function () {
    console.log('transition up:', this);
  }
});

Template._Modal.helpers({
  template: function () {
    return {
      template: Session.get('modalTemplate')
    };
  },
});
Template._Modal.created = function () {
  console.log("created", this);
  _modalView = new Orbit.ModalView();
  if (this.data && this.data.handle)
    Orbit[this.data.handle] = _modalView;
  _.extend(this.__proto__, {
    _modalView: _modalView
  });
}
Template._Modal.rendered = function () {
  console.log("rendered modal: ", this);
  $(this.firstNode).addClass('slide-up');
  // this._modalView.slideUp();
  // this.firstNode.addClass('slide-up');
  // $('.modal-view').addClass('');
};