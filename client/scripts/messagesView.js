var MessagesView = {

  $chats: $('#chats'),

  initialize: function(data, roomname) {
    MessagesView.renderRoomMessages(data, roomname);
  },

  renderRoomMessages: function(data, roomname = null) {
    // loop over results array
    for (var i = 0; i < data.results.length; i++) {
      // if current element has props: username, text, roomname
      if (data.results[i].hasOwnProperty('username') && data.results[i].hasOwnProperty('text') && data.results[i].hasOwnProperty('roomname')) {
        // // only render messages that are for the current room
        // if (data.results[i].roomname === roomname) {
        // create message object
        message = {
          username: data.results[i].username,
          text: MessagesView.escapeHTMLencode(data.results[i].text),
          roomname: data.results[i].roomname
        };
        MessagesView.renderMessage(message);
      // }
      }
    }
  },

  renderMessage: function(message) {
    var html = MessageView.render(message);
    MessagesView.$chats.append(html);
  },

  // shamelessly stolen from https://sanzon.wordpress.com/2008/05/01/neat-little-html-encoding-trick-in-javascript/
  escapeHTMLencode: function(text) {
    var div = document.createElement('div');
    var insecureText = document.createTextNode(text);
    div.appendChild(insecureText);
    return div.innerHTML;
  }

};




/*
    App.fetch(function() {
      var html;
      for (var i = 0; i < this.data.length; i++) {
        html += MessageView.render(this.data[i]);
      }
      //$("#movies").append(html);
      MessagesView.$chats.append(html);
    });
    /*
      get all posts from parse
      for each post..
        run it through templater
        append to variable
        append variable to $chats
*/