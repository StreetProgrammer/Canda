$(function () {
  var tabPanels = [
    $('#panelFacebook'),
    $('#panelInstagram'),
    $('#panelWeather'),
    $('#panelPartslookup'),
    $('#panelJoskin'),
    $('#panelSchuitemaker'),
    $('#panelHerculanor'),
    $('#panelFAE'),
    $('#panelHCWH'),
    $('#panelTwitter'),
  ];
  $.each(tabPanels, function (index, panel) {
    panel.hover(
      function () {
        panel.stop().animate({
          right: 0,
        });
      },
      function () {
        panel.stop().animate({
          right: '-100%',
        });
      }
    );
  });
});

$(function () {
  var nav = $('#nav_56992'),
    navParent = $('#HeaderDiv'),
    stickyOffset = nav.offset().top,
    padding = nav.height();
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= stickyOffset) {
      nav.addClass('sticky-nav');
      navParent.css({
        paddingTop: padding + 'px',
      });
    } else {
      nav.removeClass('sticky-nav');
      navParent.removeAttr('style');
    }
  });
  var myButton = document.getElementById('scroll-up');
  myButton.onclick = function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
});
