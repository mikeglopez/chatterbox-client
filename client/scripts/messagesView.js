var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  renderMessage: function(message) {
    var html = MessageView.render(message);
    MessagesView.$chats.append(html);
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