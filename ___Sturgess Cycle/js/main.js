$(document).ready(function () {

  $('.toggle-hours li').on("click", function () {
    $('.toggle-hours .current').removeClass('current');
    $(this).addClass('current');
    $('.opening-hours .hours .active').removeClass('active');
    var target = $(this).attr("target")
    $(this).parent().parent().children(".hours").children(target).addClass('active');
    // $(target).addClass('active');
  });
});

$(document).ready(function () {
  $('#up-down').on('click', function () {
    var spanClass = $(".bottom-fixed .controller span").attr('class');
    var spanNewClass
    var border
    if (spanClass === 'down') {
      spanNewClass = 'up'
      border = true;
    } else {
      spanNewClass = 'down'
      border = false;
    }
    $(".bottom-fixed .content").slideToggle("slow", function () {
      $(".bottom-fixed .controller span").removeClass();
      $(".bottom-fixed .controller span").addClass(spanNewClass);
      if (border) {
        $(".bottom-fixed .controller").css('border-top', '5px solid var(--main-color)');
      } else {
        $(".bottom-fixed .controller").css('border-top', '0');
      }
    });
  });
});


// for open siteMenu on hover
$(document).ready(function () {
  $("#navbar-51261 .dropdown").hover(
    function () {
      $(this).addClass("open");
    },
    function () {
      $(this).removeClass("open");
    }
  );
});


$(document).ready(function () {
  $('body').find('i').text('');
});



if ($('.our-price-div').length) {
  var el = $('.our-price-div')
  var html = el.html()
  el.css('color', 'var(--secondary-color)')
  var html = html.replace("Dealer Price", "Price");
  var html = html.replace("CAD", "");
  var html = html.replace("USD", "");
  el.html(html)
  el.append('<p style="color: #000; margin: 0; padding: 10px 0px; font-size: 14px;  ">Pricing excludes licensing and tax</p>')
  console.log(el.next());
  if (el.next()[0].classList.contains("excludes")) {
    el.next().hide();
  }
}

if ($('.request-quote-btn').length) {
  var el = $('.request-quote-btn')
  var html = el.html()
  var html = html.replace("Get a Quote", "Contact Us");
  var html = html.replace("Request a Quote", "Contact Us")
  el.html(html)
  el.removeClass('request-quote-btn')
}

if ($('.model-actions .actions-list').length) {
  var el = $('.model-actions .actions-list')
  var children = el.children();
  var elementsToAdd = [];
  for (let i = 0; i < children.length; i++) {
    if (i > 2) {
      console.log(children[i]);
      elementsToAdd.push(children[i].children[0])
      $(children[i]).hide()
    }
  }

  for (let i = 0; i < elementsToAdd.length; i++) {
    $(elementsToAdd[i]).removeClass('hidden-xs');
    $(elementsToAdd[i]).removeClass('model-action-btn');
    if ($(elementsToAdd[i]).prop("tagName") !== 'DIV') {
      $(elementsToAdd[i]).addClass('rt-action-btn');
    } else {
      $(elementsToAdd[i].children[0]).addClass('rt-action-btn')
      $(elementsToAdd[i].children[0]).removeClass('model-action-btn')
    }

    elementsToAdd[i]['outerHTML'].replace('class="model-action-btn"', "");
    $('.right-cta-buttons').append(elementsToAdd[i]['outerHTML']);
  }

  var preOwned = '<a class="rt-action-btn" target="_blank" rel="nofollow" href="/Pre-Owned-Demo"><span class="glyphicon glyphicon-tags">&nbsp;</span> View Pre-Owned</a>'
  $('.right-cta-buttons').append(preOwned)

  $('.finacning-link').attr("href", "/Email-Us");
  $('.right-cta-buttons').append('<style>.right-cta-buttons .open>.dropdown-menu{display:flex}.rt-action-btn .glyphicon{float: none;}</style>')

}


$(document).ready(function () {

  var $sticky = $('#model-right-content');
  var $stickyrStopper = $('#FooterDiv');
  if (!!$sticky.offset()) { // make sure ".sticky" element exists

    var generalSidebarHeight = $sticky.innerHeight();
    var stickyTop = $sticky.offset().top;
    var stickOffset = 0;
    var stickyStopperPosition = $stickyrStopper.offset().top;
    var stopPoint = stickyStopperPosition
    var diff = stopPoint + stickOffset;

    $(window).scroll(function () { // scroll event
      if ($(window).width() >= 975) {
        var windowTop = $(window).scrollTop(); // returns number
        if (stopPoint < windowTop) {
          $sticky.css({ position: 'fixed', top: '70px', right: '2%' });
        } else if (stickyTop < windowTop + stickOffset) {
          $sticky.css({ position: 'fixed', top: '70px', right: '2%' });
        } else {
          $sticky.css({ position: 'relative', top: 'initial', right: '0' });
        }
      } else {
        $sticky.css({ position: 'relative', top: 'initial', right: '0' });
      }
    });

  }
});


// SRP handle content
function handleSRPContent() {
  if ($('.ESCAdsResponse').length) {
    $(".price").each(function () {
      var html = $(this).html()
      $(this)[0].style.cssText = `color: var(--secondary-color)`
      var html = html.replace("Our Price", "Price");
      var html = html.replace("$ ", " $");
      var html = html.replace("CAD", "");
      var html = html.replace("USD", "");
      $(this).html(html)
    });

    $(".col-sm-6.cta-btns.flex-container").each(function () {
      var html = $(this).html()
      var html = html.replace("Request a Quote", "Contact Us")
      $(this).html(html)
    });
  }
}
handleSRPContent();
$(document).ajaxComplete(function (event, request, settings) {
  handleSRPContent();
});



