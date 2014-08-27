/*global $:false */

var adjustDocLayout = function () {
  imagesLoaded('.doc-article', function () {
    var windowWidth = $(window).width();
    if (windowWidth > 780) {
      var contentsHeight = $('.doc-contents').height();
      var articleHeight = $('.doc-article').height();
      if (contentsHeight > articleHeight) {
        $('.doc-article').height(contentsHeight - 20);
      } else {
        $('.doc-contents').height(articleHeight + 20);
      }
    } else {
      $('.doc-contents').css({'height': '100%'});
      $('.doc-article').css({'height': '100%'});
    }
  });
};

$(document).ready(function () {
  adjustDocLayout();
  $('.nav-download-form').on('submit', function (event) {
    console.log('click');
    ga('send', 'event', 'download', 'click');  // value is a number.
    window.location = 'https://s3.amazonaws.com/kite-installer/Kitematic.zip';
    event.preventDefault();
    return false;
  });

  $('.splash-download-button').on('click', function (event) {
    console.log('splash click');
    ga('send', 'event', 'download', 'click');  // value is a number.
    window.location = 'https://s3.amazonaws.com/kite-installer/Kitematic.zip';
    event.preventDefault();
    return false;
  });
});

$(window).resize(function() {
  adjustDocLayout();
});
