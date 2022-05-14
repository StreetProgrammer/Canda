$(document).ready(function () {
  if ($('.light2021').length) {
    console.log('Fonud');
    var productsCount = $('#products .item.list-group-item');
    console.log('productsCount => ', productsCount.length);

    if (productsCount.length === 0) {
      var products = $('#products');
      var filters = $('#filters');
      filters.css("display", "none");
      products.css("width", "100%");
      var newHtml = '<h1 class="text-center bold upper">No inventory at this time, please check back as we are continually adding items as they become available.  <a href="/showroom">Click here to view our Showroom Catalogues.</a></h1>'
      products.html(newHtml);
    }
  }
});