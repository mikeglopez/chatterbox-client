var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    // taken shamelessly from https://html-online.com/articles/get-url-parameters-javascript/
    var getUrlVars = function () {
      var vars = {};
      var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
      });
      return vars;
    };

    var message = {};
    message.username = getUrlVars().username;
    message.text = $('input[name=message]').val(); // pick up here
    message.roomname = $('#rooms option:selected').text();

    Parse.create(message, function() {
      console.log('message sent successfully');
    });
    Messages.refresh();
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};

/*
{
  username: 'shawndrost',
  text: 'trololo',
  roomname: '4chan'
};
*/