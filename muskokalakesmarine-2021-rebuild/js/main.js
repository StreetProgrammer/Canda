

/* Add Fav Icon */
$(function () {
  function changeFavicon() {
    $('head').append('<link type="image/x-icon" rel="shortcut icon" href="/site-uploads/1001329/Images/new/favicon.ico">')
  }
  changeFavicon();
});

$(document).ready(function () {
  $('body').find('i').text('');
});

/*handle phone numbers anchor href attr*/
$(document).ready(function () {
  var tel_1 = 'tel:+7057324383';
  $('body').find('a.tel-1').attr('href', tel_1);
});

$(document).ready(function () {
  var target = $("#displayImg");
  $("div.tiler img")
    .mouseenter(function () {
      var src = $(this).attr('src')
      if (target.length) {
        target.empty();
        target.css({ "background-image": "url(" + src + ")", "box-shadow": "1px 1px 5px #1a1a1a" })
      }
    })
    .mouseleave(function () {
      console.log("Exist mouseleave =>");
      target.empty();
      target.css({ "background-image": "", "box-shadow": "" })
    });
});
