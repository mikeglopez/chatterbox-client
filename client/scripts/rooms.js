var Rooms = {
  add: function() {
    var newRoom = prompt('What do you want to call your room?');
    if (newRoom !== null) {
      RoomsView.renderRoom(newRoom);
    }
    // search += 'username=' + (prompt('What is your name?') || 'anonymous');
  }
};