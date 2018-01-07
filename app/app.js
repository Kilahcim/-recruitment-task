var send = $('send-btn')
console.log(send);
send.on('click', function (event) {
    event.preventDefault();

    var user =  {
        email: $('#formEmail').val(),
        password: $('#formPassword').val(),
        phone: $('#formPhone').val(),
        picture: $('#formPicture').val()
    }

    $.ajax({
        url: 'https://foodsi-stage.applover.pl',
        datatype: 'json',
        type: 'POST',
        data: user
    }).done(function(response){
        console.log(response);
        content([response]);
    }).fail(function(error){
        console.log(error);
  })
});
