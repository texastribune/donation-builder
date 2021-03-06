$(document).ready(function() {
  // remove class if javascript is enabled
  $("body").removeClass("no-js");

  // to pop out videos so they play in the browser for users with js
  $('.video').magnificPopup({
    type: 'iframe',
    iframe: {
      markup: '<div class="mfp-iframe-scaler">'+
                  '<div class="mfp-close"></div>'+
                  '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                '</div>',
      patterns: {
        youtube: {
          index: 'youtube.com/',
          id: 'v=',
          src: '//www.youtube.com/embed/%id%?autoplay=1&controls=2&enablejsapi=1&modestbranding=1&rel=0&showinfo=0'
        }
      },
      srcAction: 'iframe_src'
    }
  });
});
