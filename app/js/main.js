/*global $:false */

var adjustDocLayout = function () {
  var windowWidth = $(window).width();
  console.log(windowWidth);
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
};

$(document).ready(function () {
  adjustDocLayout();
});

$(window).resize(function() {
  adjustDocLayout();
});
