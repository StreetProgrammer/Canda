/*For Weather Widget*/
if ($(window).width() > 700) {
  !(function (d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (!d.getElementById(id)) {
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://weatherwidget.io/js/widget.min.js';
      fjs.parentNode.insertBefore(js, fjs);
    }
  })(document, 'script', 'weatherwidget-io-js');

  // (function (d, s, id) {
  //   var js,
  //     fjs = d.getElementsByTagName(s)[0];
  //   if (d.getElementById(id)) return;
  //   js = d.createElement(s);
  //   js.id = id;
  //   js.src = '//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5';
  //   fjs.parentNode.insertBefore(js, fjs);
  // })(document, 'script', 'facebook-jssdk');
}
