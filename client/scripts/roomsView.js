var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', Rooms.add);
  },

  renderRoom: function(room) {
    RoomsView.$select.append(`<option value="${room}">${room}</option>`);
  }

};
