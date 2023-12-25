$(document).ready(function () {
  $('body').find('i').text('');
});

/* slide to top */
$(document).ready(function () {
  $("a[href='#top']").on('click', function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
});

/*handle phone numbers anchor href attr*/
$(document).ready(function () {
  var tel_1 = 'tel:+15196880605';
  $('body').find('a.tel-1').attr('href', tel_1);

  var tel_2 = 'tel:+15196883377';
  $('body').find('a.tel-2').attr('href', tel_2);
});

function handleTheming() {
  console.log("window.location.href => ", window.location.href);
  targetModules = ["Massey-Ferguson", "Fendt", "Challenger"]
  var config = {
    "normal": '',
    "Massey-Ferguson": '#FF0800',
    "Fendt": '#4B8B3B',
    "Challenger": '#DEA731',
    "Chassis": '#43464B'
  }
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
      var currentPage = currentPage.slice(0, currentPage.indexOf('?'))
    }
  }
  console.log("currentPage From main.js => ", currentPage);
  if (targetModules.includes(currentPage)) {
    document.documentElement.style.setProperty('--main-color', config[currentPage]);
  } else {
    document.documentElement.style.setProperty('--main-color', config['normal']);
  }

}

$(document).ready(function () {
  handleTheming()
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

