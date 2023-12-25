jQuery(function ($) {
  if ($("nav.breadcrumbParent").length) {
    var elementToHide = $('.breadcrumb-item.active')
    var new_title = elementToHide.text()
    elementToHide.hide()
    new_title = new_title.split('-').filter(function (item) {
      item = item ? item.replace(/-/g, '') : item
      return item;
    }).join(' ')

    console.log(new_title);
    // new_title = new_title.replace("/\s\s\s/g,", " - ")
    new_title = new_title.replace(/  +/g, ' - ');
    ttlelement = '<h2>' + new_title + '</h2>';
    $("nav.breadcrumbParent").prepend(ttlelement);
    if ($('.col-sm-9.col-xs-12.model-ttl .model-title').length) {
      $('.col-sm-9.col-xs-12.model-ttl .model-title').hide()
    }
  }
});

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


jQuery(function ($) {
  if ($("div.col-lg-8.col-md-10.col-sm-10.col-xs-7.text-left.descColumnResponsive").length) {

    $('div.col-lg-8.col-md-10.col-sm-10.col-xs-7.text-left.descColumnResponsive').each(function () {
      console.log($(this).text());
      var text = $(this).text().replace(/\s/g, '')
      if (text === 'N/A') {
        $(this).parent().hide()
      }
    });
  }
});
