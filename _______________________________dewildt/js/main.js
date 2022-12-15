// global scripts

/*handle phone numbers anchor href attr*/
$(document).ready(function () {
  var tel_1 = 'tel:8886567570';
  $('body').find('a.tel-1').attr('href', tel_1);
  var tel_2 = 'tel:8886568680';
  $('body').find('a.tel-2').attr('href', tel_2);
  var tel_3 = 'tel:8442916330';
  $('body').find('a.tel-3').attr('href', tel_3);
  var tel_4 = 'tel:9055736559';
  $('body').find('a.tel-4').attr('href', tel_4);
  var tel_5 = 'tel:7059150800';
  $('body').find('a.tel-5').attr('href', tel_5);
  var tel_6 = 'tel:7056160770';
  $('body').find('a.tel-6').attr('href', tel_6);
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

/* remove spaces from i tags */
$(document).ready(function () {
  $('body').find('i').text('');
});

/* website scripts */

$(document).ready(function () {
  if ($('#normal_vdp').length) {
    var locationsLabel = $("[name='locations-label']");

    if (locationsLabel.length) {
      var flag = locationsLabel
        .next()
        .text()
        .replace(/(\r\n|\n|\r)/gm, '')
        .trim()
        .toLowerCase();

      var locations = {
        hamilton:
          '<div class="_location-content">\
            <p>\
            <b>Hamilton</b></p>\
            <p>450 Lake Ave N,<br> Hamilton,<abbr title="Ontario">ON</abbr> L8E 3C2</p>\
            <p>\
            <b>Toll Free:</b>\
            <a class="tel-1" href="tel:8886567570">(888) 656-7570</a></p>\
            <p>\
            <b>Phone:</b>\
            <a class="tel-4" href="tel:9055736559">(905) 573-6559</a></p></div>',
        innisfil:
          '<div class="_location-content">\
        <p>\
        <b>Innisfil</b></p>\
        <p>1982 Commerce Park Dr.<br> Innisfil,<abbr title="Ontario">ON</abbr> L9S 4A3</p>\
        <p>\
        <b>Toll Free:</b>\
        <a class="tel-2" href="tel:8886568680">(888) 656-8680</a></p>\
        <p>\
        <b>Phone:</b>\
        <a class="tel-5" href="tel:7059150800">(905) 573-6559</a></p>\
        </div>',
        peterborough:
          '<div class="_location-content">\
        <p>\
        <b>Peterborough</b></p>\
        <p>1300 Highway 7 East.<br> Peterborough,<abbr title="Ontario">ON</abbr> K9J 0G6</p>\
        <p>\
        <b>Toll Free:</b>\
        <a class="tel-3" href="tel:8442916330">(844) 291-6330</a></p>\
        <p>\
        <b>Phone:</b>\
        <a class="tel-6" href="tel:7056160770">(705) 616-0770</a></p>\
        </div>',
      };

      console.log(locations[flag]);
    }

    var CTABox = $('.CTA-box');
    var rightctabuttons = $('.right-cta-buttons.visible-xs');
    $(locations[flag]).insertBefore(CTABox);
    $(locations[flag]).insertBefore(rightctabuttons);
  }
});

function changeSRPLocationLocation() {
  if ($('.light2021').length) {
    $( "#products .item" ).each(function( index ) {
      
      var locationDiv = $( this ).find('.location-div');
      if (locationDiv.length) {
        locationDiv.appendTo($( this ).find('.cta-btns.flex-container'));
      }
    });
  }
}
$(document).ready(function () {
    changeSRPLocationLocation();
});