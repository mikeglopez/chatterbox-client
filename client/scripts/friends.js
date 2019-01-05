var Friends = {

  friendList: {},

  toggleStatus: function(friendName) {
    // $(this).css('background-color', 'lightblue');

    // highlight all messages currently on screen from user
    if (typeof friendName !== 'string') {
      friendName = $( this ).text();
    }
    Friends.friendList[friendName] = true;
    $('div.username:contains(' + friendName + ')').parent().css('background-color', 'lightblue');

    // highlights all messages from users with name 'me'
    //$("div.username:contains('me')").css('background-color', 'lightblue')

    // store user in friendList for future reference on other reloads (may be separate method to be used in refresh() and here)
  }

};