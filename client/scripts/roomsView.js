var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  $tabs: $('#tabs'),
  tabStorage: {},

  initialize: function(data) {
    RoomsView.$button.on('click', Rooms.add);
    // data[1] === {objectId: "KZJbj0EGOb", username: "shawndrost", roomname: "4chan", text: "howdy", createdAt: "2019-01-05T00:53:14.711Z", …}
    // need to put new method here
    RoomsView.renderRoomDropdown(data);
    RoomsView.renderTab($('#rooms option:selected').text());
    RoomsView.$select.on('change', Messages.refresh);
  },

  renderTab: function(roomname) {
    if (!RoomsView.tabStorage.hasOwnProperty(roomname)) {
      RoomsView.$tabs.append(`<button class="tablinks">${roomname}</button>`);
      RoomsView.tabStorage[roomname] = true;
    }
  },

  // $(this).text()
  renderRoomDropdown: function(data) {
    html = "";
    roomnames = {};
    // for loop over each message
    for (var i = 0; i < data.results.length; i++) {
      // if it has roomname
      if (data.results[i].hasOwnProperty('roomname')) {
        // if it doesn't already exist
        if (!(roomnames.hasOwnProperty(data.results[i].roomname))) {
          // storage
          // html += `<option value="${data[key]}">${data[key]}</option>`;
          RoomsView.renderRoom(data.results[i].roomname);
          // add to roomnames holder obj
          roomnames[data.results[i].roomname] = true;
        }
      }
    }
    // append storage to options - render room
  },

  renderRoom: function(room) {
    RoomsView.$select.append(`<option value="${room}">${room}</option>`);
  }

};
