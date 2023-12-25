(function () {
  var nav = $('#nav_61192'),
    navParent = $('#HeaderDiv'),
    phone = $('.phoneDesktop'),
    map = $('.mapDesktop'),
    navbar = $('#navbar-61192');
  search = $('#searchModal');
  (stickyOffset = nav.offset().top), (padding = nav.height());
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
        var dropdownpositionPrefix = $('.navbar.navbar-default').innerHeight();
        // centerDiv.css({ "margin-top": padding })
        var styleTag =
          '<style id="styleTag"> .handleModals{top: ' +
          dropdownpositionPrefix +
          'px !important}</style>';
        $('body').append(styleTag);
        if (!navbar.hasClass('handleModals')) navbar.addClass('handleModals');
        if (!search.hasClass('handleModals')) search.addClass('handleModals');
      }
    } else {
      nav.removeClass('sticky-nav');
      phone.removeClass('phoneDesktopScroll');
      if (window.innerWidth <= 767) {
        var centerDiv = $('#CenterDiv');
        centerDiv.css({ 'margin-top': 0 });
      }
      map.removeClass('map-divScroll');
      navParent.removeAttr('style');
      $('body').remove($('#styleTag'));
      navbar.removeClass('handleModals');
      search.removeClass('handleModals');
    }
  });

  if ($('#detailsParentDiv').size() > 0) {
    $('.video-image').parent().hide();
  }
})();

$(function () {
  if ($("img[alt='Error:404 Page Not Found']").length) {
    console.log('404');
    var content = `<div class="_404-container">
                        <div>
                            <p>404 PAGE NOT FOUND. CHECKOUT OUR INVENTORY OR <a href="/Contact-Us/">CONTACT US</a></p>

                            <div class="row-custom f_hor-c mt-1 f_ver-c f-dir">
                                <button class="mr-2 btn-custom btn-red mt-4 bg-red text-secondary font-size-sm font-bold p-2 pl-4 pr-4" onclick="location.href='/Pleasure/'">PLEASURE</button>
                                <button class="btn-custom btn-transparent mt-4 text-gray font-size-sm font-bold p-2 pl-4 pr-4" onclick="location.href='/New-Commercial/'">COMMERCIAL</button>
                            </div>
                        </div>
                    </div>`;

    $('#CenterDiv').html(content);
  }
});

if (document.getElementById('searchbox')) {
  document
    .getElementById('searchbox')
    .addEventListener('keyup', function (event) {
      event.preventDefault();
      if (event.keyCode === 13) {
        document.getElementById('searchbtn').click();
      }
    });
}

function srch(page_name = 'Inventory') {
  //var e = document.getElementById("pagedd");
  //var dest= e.options[e.selectedIndex].value;
  var valuee = document.getElementById('searchbox').value;
  if (valuee != '') {
    if (page_name == 'Inventory') {
      window.location = '/Search-Inventory/search/'.concat(valuee);
    } else if (page_name == 'parts') {
      window.location = '/Search-parts/search/'.concat(valuee);
    } else if (page_name == 'InStock') {
      window.location = '/Search-InStock/search/'.concat(valuee);
    }
  } else {
    document.getElementById('searchbox').placeholder = 'This field is required';
    var sheet = window.document.styleSheets[0];
    sheet.insertRule(
      'input#searchbox::-webkit-input-placeholder {color: red !important}',
      sheet.cssRules.length
    );
    sheet.insertRule(
      'input#searchbox::-moz-placeholder {color:#909; opacity:1;}',
      sheet.cssRules.length
    );
    sheet.insertRule(
      'input#searchbox:-moz-placeholder {color:#909; opacity:1;}',
      sheet.cssRules.length
    );
  }
}
