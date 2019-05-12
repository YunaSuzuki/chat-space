$(function(){
  function buildHTML(message){

    var date = new Date();
    var y = date.getFullYear();
    var m = ("00" + (date.getMonth()+1)).slice(-2);
    var d = ("00" + date.getDate()).slice(-2);
    var hour = date.getHours();
    var minute = date.getMinutes();
    var result = y + "/" + m + "/" + d + "  " + hour + ":" + minute;


  if(message.image.url == null){
    var image = '';
  } else{
    var image_url = message.image.url;
    var image = `<img class="lower-message__image" src="${image_url}", alt="${image_url}">`
  }


    var html = `<div class="message">
      <div class="upper-message">
        <div class="upper-message__user-name">
        </div>
        ${message.user_name}
        <div class="upper-message__date">
        ${result}
        </div>
      </div>
      <div class="lower-message">
        <p class="lower-message__content">
        ${message.content}
        </p>
        ${image}
      </div>
      </div>`;
      return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      console.log(data);
      var html = buildHTML(data);
      $('.messages').append(html)
      $('.form__message').val('')
      $('form')[0].reset();
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
    })
    .fail(function(){
      alert('error')
    })
    .always(function(data){
      $('.form__submit').prop('disabled', false)
    })
  })
})
