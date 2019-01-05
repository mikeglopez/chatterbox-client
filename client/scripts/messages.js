var Messages = {

  refresh: function() {
    MessagesView.$chats.html(''); // div with all chats
    var roomname = RoomsView.$select.val();
    Parse.readAll((data) => {
      MessagesView.renderRoomMessages(data, roomname);
    });
  }

};