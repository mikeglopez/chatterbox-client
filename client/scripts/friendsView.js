var FriendsView = {

  initialize: function() {
    $('.username').on('click', Friends.toggleStatus);
    for (var key in Friends.friendList) {
      Friends.toggleStatus(key);
    }
  }

};

// look through friendsList object
// toggleStatus