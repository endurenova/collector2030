jQuery(document).ready(function () {
  var pointSize = $('.ufo-pointer').width() / 10;
  $('body').mousemove(function (e) {
    $('.ufo-pointer').css('top', e.pageY + pointSize);
    $('.ufo-pointer').css('left', e.pageX + pointSize);
    $('.ufo-pointer').fadeIn();
  });
  $('body').on('mouseleave', function () {
    $('.ufo-pointer').fadeOut();
  });
});
