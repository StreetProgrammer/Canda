jQuery(function ($) {
  if ($("nav.breadcrumbParent").length) {
    var breadcrumbListItemsCount = $('ol.breadcrumb li').length;
    var modelTitle = '';
    if ($('.model-details-content.container .model-title').length) {
      $('.model-details-content.container .model-title').hide()
      modelTitle = $('.model-details-content.container .model-title').text()
    }

    var elementToHide = $('.breadcrumb-item.active')
    var new_title = elementToHide.text()
    elementToHide.hide()
    new_title = new_title.split('-').filter(function (item) {
      item = item ? item.replace(/-/g, '') : item
      return item;
    }).join(' ')

    new_title = modelTitle.length === 0 ? new_title.replace(/  +/g, ' - ') : modelTitle;
    new_titleCharCount = new_title.length;
    if (new_titleCharCount > 25 || breadcrumbListItemsCount > 2) {
      var style = '<style>@media screen and (max-width: 620px){.breadcrumbParent {flex-direction: column;}.breadcrumbParent h2 {padding-top: 1.5vw;}}</style>';
      $("nav.breadcrumbParent").prepend(style);
    }
    ttlelement = '<h2>' + new_title + '</h2>';
    $("nav.breadcrumbParent").prepend(ttlelement);
    if ($('.col-sm-9.col-xs-12.model-ttl .model-title').length) {
      $('.col-sm-9.col-xs-12.model-ttl .model-title').hide()
    }

    /* start Capitalize other breadcrumb li elements */
    var oltherListItems = $('ol.breadcrumb li').not(".active");
    oltherListItems.each(function () {
      $(this).css({ "text-transform": "capitalize" });
    })
    /* End */
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
