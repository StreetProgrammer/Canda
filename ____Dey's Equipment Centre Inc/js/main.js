$(document).ready(function () {
  $('body').find('i').text('');
});

/* slide to top */
$(document).ready(function () {
  $("a[href='#top']").on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0,
      },
      'slow'
    );
    return false;
  });
});

$('.goto-Agco-apply-link').on('click', function (e) {
  e.preventDefault();
  $('html,body').animate({
      scrollTop: $('#Agco-apply-link').offset().top - 200,
    },
    'slow'
  );
});

/*handle phone numbers anchor href attr*/
$(document).ready(function () {
  var tel_1 = 'tel:+15196880605';
  $('body').find('a.tel-1').attr('href', tel_1);

  var tel_2 = 'tel:+15196883377';
  $('body').find('a.tel-2').attr('href', tel_2);
});

function handleTheming() {
  console.log('window.location.href => ', window.location.href);
  targetModules = ['Massey-Ferguson', 'Fendt', 'Challenger', 'Chassis', 'Gehl', 'Gleaner', 'White-Planters', 'Sunflower',
    'Manitou', 'Precision-Planting', 'Trimble', 'Kinze', 'Macdon%20Draper%20Heads', 'Harvestec-Corn-Heads', 'Wood’s-Equipment',
    'Alo-Quicke%20Loaders', 'Horst-Wagons', 'HLA-Attachments', 'Ontario-Ag-Equipment', 'JBM', 'MK-Martin', 'AMI-Attachments',
    'Aulari', 'Market-Farm-Equipment', 'Weberlane', 'Harco-Ag', 'Montag'
  ];
  var config = {
    "normal": '',
    "Massey-Ferguson": '#FF0800',
    "Fendt": '#4B8B3B',
    "Challenger": '#DEA731',
    "Chassis": '#43464B',
    "Gehl": '#000000',
    "Gleaner": '#43464b',
    "White-Planters": '#FF0800',
    "Sunflower": '#FF0800',
    "Manitou": '#FF0800',
    "Precision-Planting": '#4B8B3B',
    "Trimble": '#2477D2',
    "Kinze": '#2477D2',
    "Macdon%20Draper%20Heads": '#000000',
    "Harvestec-Corn-Heads": '#000000',
    "Wood’s-Equipment": '#FF0800',
    "Alo-Quicke%20Loaders": '#43464b',
    "Horst-Wagons": '#000000',
    " HLA-Attachments": '#000000',
    "Ontario-Ag-Equipment": '#4B8B3B',
    "JBM": '#43464b',
    "MK-Martin": '#43464b',
    "AMI-Attachments": '#43464B',
    "Aulari": '#43464B',
    "Market-Farm-Equipment": '#43464B',
    "Weberlane": '#43464B',
    "Harco-Ag": '#43464B',
    "Montag": '#2477D2',
  };
  if ($('.manufacturer .descColumnResponsive').text().trim().length !== 0) {
    var currentPage = $('.manufacturer .descColumnResponsive').text().trim();
    currentPage = currentPage.replace(' ', '-');
  } else {
    var allURL = window.location.href;
    var domainName = window.location.hostname;
    var currentPage = allURL.replace(domainName, '');
    var currentPage = currentPage.replace('https', '');
    var currentPage = currentPage.replace('http', '');
    var currentPage = currentPage.replace(/\//g, '');
    var currentPage = currentPage.replace(/:/g, '');
    if (currentPage.includes('?')) {
      var currentPage = currentPage.slice(0, currentPage.indexOf('?'));
    }
  }
  console.log('currentPage From main.js => ', currentPage);
  if (targetModules.includes(currentPage)) {
    document.documentElement.style.setProperty(
      '--main-color',
      config[currentPage]
    );
  } else {
    document.documentElement.style.setProperty(
      '--main-color',
      config['normal']
    );
  }
}

$(document).ready(function () {
  handleTheming();

  // var colors = [
  //   '#E26714',
  //   '#2477D2',
  //   '#FF0800',
  //   '#4B8B3B',
  //   'rgb(67 70 75)',
  //   '#000000',
  // ];

  // var toggler_container = $(`<div id="color-toggler" style="position: fixed;
  // z-index: 100000;
  // top: 0;
  // right: 0;
  // display: flex;
  // flex-direction: column;
  // padding: 0.25vw;"> </div>`);
  // $('body').append(toggler_container);
  // for (let i = 0; i < colors.length; i++) {
  //   toggler_container.append(
  //     `<a style="color:${colors[i]}; cursor:pointer;" color="${colors[i]}"><i class="fas fa-scrubber"></i></a>`
  //   );
  // }
  // toggler_container.on('click', 'a', function () {
  //   var color = $(this).attr('color');
  //   console.log(color);
  //   document.documentElement.style.setProperty('--main-color', color);
  // });
});


/* Start handle SRP buttons */

/* if ($('.cta-btns').length) {
//   var quote = $('.main-btn.quote.lightboxs');
//   var quoteHtml = quote.html();
//   quoteHtml = quoteHtml.replace("Get a quote", "Quote");
//   quote.html(quoteHtml);
} */

/* End handle SRP buttons */

/* handle VDP to Change Get Financed btn attrs(href - target)
 *  Work with list light 2109 - Details View => normal
 */
/*
$(document).ready(function () {
  $(".get-financed").each(function () {
    var visibilityClass = $(this).attr("class").includes("hidden-xs") ? "hidden-xs" : "visible-xs";
    $(this).removeAttr('target');
    $(this).attr('href', '/Financing/');
  });
}); */

/* Start Start Handle slider inner content */

$(document).ready(function () {
  // check if we are in home (target page which contain the Slider)
  if ($('#page_50119')) {
    var $slider_inner_wrapper = $('#comp_1636484567613 .carousel.slide');
    console.log('slider_inner_wrapper => ', $slider_inner_wrapper);
    $slider_inner_wrapper.append(`
                          <div class="content">
                            <h1>Dey’s</h1>
                          
                            <h3>EQUIPMENT CENTRE INC.</h3>
                          
                            <p>Your Ag Solutions Specialists</p>
                          
                            <div class="btns"><a href="/page/display/?siteId=1001341&pageId=51053">New Equipment</a> <a
                                href="/page/display/?siteId=1001341&pageId=50969">Used Equipment</a></div>
                          </div>
                          `);
  }
});

/* End Start Handle slider inner content */