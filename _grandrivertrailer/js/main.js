// global scripts

/*handle phone numbers anchor href attr*/
$(document).ready(function () {
  var tel_1 = 'tel:9059812211';
  $('body').find('a.tel-1').attr('href', tel_1);
  var tel_2 = 'Tel:+1-519-755-9383';
  $('body').find('a.tel-2').attr('href', tel_2);
});

/* slide to top */
$(document).ready(function () {
  $("a[href='#top']").on('click', function (e) {
    e.preventDefault();
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      'slow'
    );
    return false;
  });
});

// remove spaces from i tags
$(document).ready(function () {
  $('body').find('i').text('');
});

/* Start Handle Fake anchors */
$(function () {
  $('[data-href]').on('click', function (e) {
    var target = $(this).attr('target') || undefined;
    if (!e.target.matches('a')) {
      console.log('target => ', target);
      var href = $(this).data('href');
      if (target === 'blank') {
        window.open(href, target);
      } else {
        window.location = href;
      }
    }
  });
});
/* End Handle Fake anchors */

// Website Scripts

/* Start auto count */
$('.__count').each(function () {
  $(this)
    .prop('Counter', 0)
    .animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
          $(this).text(Math.ceil(now));
        },
      }
    );
});
/* End auto count */

/* Start activate animations */
function reveal() {
  const elements = [
    {
      selector: '._main_section .animate__animated',
      animationClasses: 'animate__zoomIn',
    },
    {
      selector: '#comp_1685382782177',
      animationClasses: 'animate__animated animate__zoomIn',
    },
    {
      selector: '._home_categories_container .categories.animate__animated',
      animationClasses: 'animate__zoomIn',
    },
    {
      selector: '._home_welcome h1',
      animationClasses: 'animate__animated animate__bounceInLeft',
    },
    {
      selector: '._home_welcome a',
      animationClasses: 'animate__animated animate__bounceInRight',
    },
    {
      selector: '._offer_container h1',
      animationClasses: 'animate__bounceInRight',
    },
    {
      selector: '._offer_container ._actions a.left',
      animationClasses: 'animate__bounceInLeft',
    },
    {
      selector: '._offer_container ._actions a.right',
      animationClasses: 'animate__bounceInRight',
    },
  ];

  var reveals = [];
  for (let i = 0; i < elements.length; i++) {
    var ele = document.querySelector(elements[i].selector);

    var x = {
      ele,
      classes: elements[i].animationClasses,
    };
    reveals.push(x);
  }

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].ele.getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      $(reveals[i].ele).addClass(reveals[i].classes);
    } else {
      $(reveals[i].ele).removeClass(reveals[i].classes);
    }
  }
}

window.addEventListener('scroll', reveal);
/* End activate animations */

function changeHomeSubmitTitle() {
  if ($('#page_62861').length) {
    if ($('#comp_1685382782177').length) {
      var el = $('#comp_1685382782177 input.btn.btn-primary');
      el.attr('value', 'I am interested in a trailer');
    }

    if ($('#comp_1685384982661').length) {
      var el = $('#comp_1685384982661 input.btn.btn-primary');
      el.attr('value', 'I am interested in a trailer');
    }
  }
}

$(document).ready(function () {
  changeHomeSubmitTitle();
});

$(document).ready(function () {
  if ($('.CTA-box')) {
    $('.CTA-box').prepend(
      '<a class="rt-action-btn get-financed-new" data-target="#financingModal" data-toggle="modal" data-whatever="" href="#" title="Financing" type="button"><span class="glyphicon glyphicon-usd">&nbsp;</span>Financing</a>'
    );
    // $(
    //   '<a class="rt-action-btn" title="Open Loan Financing" target="_blank" \
    //     href="https://creditonline.dealertrack.ca/Web/Default.aspx?Token=e51925b5-d649-4135-bb34-4d6e3f3dbdf1&Lang=en"\
    //     >\
    //     <span class="glyphicon glyphicon-usd">&nbsp;</span>Open Loan Financing \
    //   </a>\
    //   <a class="rt-action-btn" title="Commercial Leasing" target="_blank"\
    //     href="https://leaseline.com/application-form-agent-default-mike-ellebracht-grandriver/"\
    //     >\
    //     <span class="glyphicon glyphicon-usd">&nbsp;</span>Commercial Leasing\
    //   </a>\
    // '
    // ).insertBefore('.rt-action-btn.trade-btn');
  }
});
