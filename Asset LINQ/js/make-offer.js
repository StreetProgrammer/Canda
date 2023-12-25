$(function () {
  let offer_HTML = `<div class="make-offer-box"><a type="button" id="offer-btn">Make Offer</a><input id="offer-value" type="text" placeholder="Enter amount"></input></div>`;
  function detectMob() {
    const toMatch = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i,
    ];

    return toMatch.some((toMatchItem) => {
      return navigator.userAgent.match(toMatchItem);
    });
  }
  if ($('.stock-num').length) {
    var LotNumber = $('.stock-num').text().split('#')[1].trim();
    LotNumber = '<p><b>Lot Number: </b> ' + LotNumber + '</p>';
    $('.stock-num').empty();
  }

  if ($('.locations-list').length) {
    var location = $('.locations-list').find('a').text().trim();
    location = '<p><b>Location: </b> ' + location + '</p>';
    $('.locations-list').empty();
  }

  var content = '<div>' + LotNumber + location + '</div>';

  if (detectMob()) {
    $('.right-cta-buttons.visible-xs').prepend(offer_HTML);
    $('.right-cta-buttons.visible-xs').prepend(content);
  } else {
    $('.CTA-box').prepend(offer_HTML);
    $('.CTA-box').prepend(content);
  }

  $('#offer-btn').click(function () {
    let offer_value = $('#offer-value').val();
    if (offer_value > 0) {
      $('#right-form').modal('show');
      $('#right-form #comment').val('My Offer is: ' + offer_value);
    } else {
      alert('Please enter a valid number');
    }
  });
});
