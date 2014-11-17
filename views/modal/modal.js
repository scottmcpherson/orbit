Orbit.modal = {
  _modalView: {},
  container: function () {
    return document.getElementById('container');
  },
  dismisModal: function () {
    var self = this;
    console.log(self._modalView);
    Orbit.animate('.modal-view', 'slide-up', false, function () {
      Blaze.remove(self._modalView);
    });
  },
  showModal: function (data) {
    var self = this;
    this._modalView = Blaze.renderWithData(Template._Modal, data, self.container());
  }
}

Template._Modal.helpers({
  template: function () {
    return {
      template: Session.get('modalTemplate')
    };
  },
});

Template._Modal.rendered = function () {
  console.log("rendered modal: ", this.firstNode.className);
  $(this.firstNode).addClass('slide-up');
  // this.firstNode.addClass('slide-up');
  // $('.modal-view').addClass('');
};