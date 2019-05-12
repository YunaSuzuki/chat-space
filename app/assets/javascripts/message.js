$(function(){
  function buildHTML(message){

    var image;
    var image_url = message.image.url;
    var image_tag = `<img class="lower-message__image" src="${image_url}", alt="${image_url}">`;


  (message.image.url == null) ? (image = '') : (image = image_tag)


    var html = `<div class="message">
      <div class="upper-message">
        <div class="upper-message__user-name">
          ${message.user_name}
        </div>
        <div class="upper-message__date">
          ${message.created_at}
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
