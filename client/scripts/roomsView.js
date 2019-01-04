var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  renderRoom: function(room) {
    RoomsView.$select.append(`<option value="${room}">${room}</option>`);
  }

};
