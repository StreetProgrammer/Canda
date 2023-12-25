

// Satrt handle Website Menu
$(document).ready(function () {
  setTimeout(() => {
    reportWindowSize()
  }, 300);
  window.addEventListener('resize', reportWindowSize);

});


function reportWindowSize() {

  if (window.innerWidth <= 767) {
    var bodyRect = document.body.getBoundingClientRect(),
      element = $('.links .sm')[0],
      elemRect = element.getBoundingClientRect(),
      offset = elemRect.bottom - bodyRect.top + 2;

    $("#WebsiteMenu").detach().appendTo(".sm-menu");
    $("#WebsiteMenu").css({ "position": "fixed", "top": offset, "right": "4vw", "z-index": 9999 })

    const hamburger = document.querySelector("#burger");
    const navLinks = document.querySelector("#WebsiteMenu");
    hamburger.removeEventListener("click", function () {

    });
    if (hamburger.getAttribute('listener') !== 'true') {
      hamburger.addEventListener("click", (e) => {
        e.stopPropagation();
        e.preventDefault();
        console.log("cliced");
        navLinks.classList.toggle("open");
      });
    }

    $(window).on("click", function (event) {
      if (!event.target.matches('#burger') && !event.target.matches('#WebsiteMenu li a')) {
        navLinks.classList.remove("open");
      }
    });

  } else {
    $("#WebsiteMenu").detach().appendTo($(".main-header .links .lg .bottom"));
    $("#WebsiteMenu").removeAttr("style")
  }
}

$(document).ready(function () {

  $('body').on('click', '.with-sub > a', function (e) {
    e.preventDefault();
    if ($(this).parent().hasClass('opend')) {
      $(this).parent().toggleClass('opend');
    } else {
      $(".with-sub").each(function (index, element) {
        $(this).removeClass("opend");
      })
      $(this).parent().toggleClass('opend');
    }
  })
});

// Satrt handle Website Menu






































/* start handle form btn `text` */
$(document).ready(function () {
  if ($('#Buttons .btn.btn-primary').length) {
    $('.btn.btn-primary').attr('value', 'submit a request');
  }
});
/* end handle form btn `text` */

$(document).ready(function () {
  $('body').find('#copyright #year').text(new Date().getFullYear());
});


$(document).ready(function () {
  $('body').find('i').text('');
  $('body').find('span.bar').text('');
});