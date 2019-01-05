var Messages = {

  refresh: function() {
    MessagesView.$chats.html(''); // div with all chats
    var roomname = RoomsView.$select.val();
    Parse.readRoom(roomname, (data) => {
      MessagesView.renderRoomMessages(data, roomname);
      FriendsView.initialize();
      RoomsView.renderTab(roomname);
    });
  }

};