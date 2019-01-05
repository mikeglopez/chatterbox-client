var Friends = {

  friendList: {},

  toggleStatus: function() {
    $(this).css('background-color', 'lightblue');
    // highlight all messages currently on screen from user
    // store user in friendList for future reference on other reloads (may be separate method to be used in refresh() and here)
  }

};