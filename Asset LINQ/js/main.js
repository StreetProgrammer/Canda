// append custom content to ADS Page [SRP & VDP]
$(document).ready(function () {
  //   if ($('[ppanel="ESC Ads"]').length) {
  //     var target = null;
  //     if ($('.CTA-box').length) {
  //       target = $('.CTA-box');
  //     }
  //     if ($('.stock-num').length) {
  //       var LotNumber = $('.stock-num').text().split('#')[1].trim();
  //       LotNumber = '<p><b>Lot Number: </b> ' + LotNumber + '</p>';
  //       console.log(LotNumber);
  //     }
  //     if ($('.locations-list').length) {
  //       var location = $('.locations-list').find('a').text().trim();
  //       location = '<p><b>Location: </b> ' + location + '</p>';
  //       console.log(location);
  //     }
  //     var content = '<div>' + LotNumber + location + '</div>';
  //     $('.CTA-box').prepend(content);
  // ('All prices do NOT include freight, PDI, Tire Recycle, manufacture surcharges, or GST. We do try our best to keep prices accurate, but mistakes do happen, if there is a discrepancy between in-store and online prices, in-store prices will be used');
  // centerDiv.append(
  //   '<div class="container container-90"> <p class="col-sm-12">' +
  //     txt +
  //     '</p></div>'
  // );
  //   }
});

var myButton = document.getElementById('scroll-up');
myButton.onclick = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

(function () {
  var nav = $('#nav_62980'),
    navParent = $('#HeaderDiv'),
    phone = $('.phoneDesktop'),
    map = $('.mapDesktop'),
    stickyOffset = nav.offset().top,
    padding = nav.height();
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= stickyOffset) {
      nav.addClass('sticky-nav');
      phone.addClass('phoneDesktopScroll');
      map.addClass('map-divScroll');
      navParent.css({
        paddingTop: padding + 'px',
      });
      if (window.innerWidth <= 767) {
        var centerDiv = $('#CenterDiv');
        centerDiv.css({ 'margin-top': padding });
      }
    } else {
      nav.removeClass('sticky-nav');
      phone.removeClass('phoneDesktopScroll');
      if (window.innerWidth <= 767) {
        var centerDiv = $('#CenterDiv');
        centerDiv.css({ 'margin-top': padding });
      }
      map.removeClass('map-divScroll');
      navParent.removeAttr('style');
    }
  });
})();
