$('.next').click(function(){
  var activeImage = $('.images img.active');
  var activeCircle = $('.circle i.active')

  $('.images img').removeClass('active');
  $('.circle i').removeClass('active');

  var nextImage = activeImage.next('img');
  var nextCircle = activeCircle.next('i');

  if (nextImage.length != 0)
  {
    nextImage.addClass('active');
    nextCircle.addClass('active')
  }
  else {
    $('.images img').first().addClass('active');
    $('.circle i').first().addClass('active');
  }

});

$('.prev').click(function(){
  var activeImage = $('.images img.active');
  var activeCircle = $('.circle i.active');

  $('.images img').removeClass('active');
  $('.circle i').removeClass('active');

  var prevImage = activeImage.prev('img');
  var prevCircle = activeCircle.prev('i');

  if (prevImage.length != 0)
  {
    prevImage.addClass('active');
    prevCircle.addClass('active');
  }
  else {
    $('.images img').last().addClass('active');
    $('.circle i').last().addClass('active');
  }

});
