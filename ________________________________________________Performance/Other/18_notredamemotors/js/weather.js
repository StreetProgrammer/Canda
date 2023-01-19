/* Start Weather */
var _plm = _plm || [];
_plm.push(['_btn', 136128]);
_plm.push(['_loc', 'caon0294']);
_plm.push(['location', document.location.host]);
(function (d, e, i) {
  if (d.getElementById(i)) return;
  var px = d.createElement(e);
  px.type = 'text/javascript';
  px.async = true;
  px.id = i;
  px.src =
    ('https:' == d.location.protocol ? 'https:' : 'http:') +
    '//widget.twnmm.com/js/btn/pelm.js?orig=en_ca';
  var s = d.getElementsByTagName('script')[0];

  var py = d.createElement('link');
  py.rel = 'stylesheet';
  py.href =
    ('https:' == d.location.protocol ? 'https:' : 'http:') +
    '//widget.twnmm.com/styles/btn/styles.css';

  s.parentNode.insertBefore(px, s);
  s.parentNode.insertBefore(py, s);
})(document, 'script', 'plmxbtn');
$(document).ready(function () {
  var weather = $('#weather-plugin');
  if ($(window).width() > 749) {
    $('#lg-weather').empty();
    weather.prependTo('#lg-weather');
  }
  if ($(window).width() < 749) {
    $('#sm-weather').empty();
    weather.prependTo('#sm-weather');
  }
  $(window).resize(function () {
    if ($(window).width() > 749) {
      $('#lg-weather').empty();
      weather.prependTo('#lg-weather');
    }
    if ($(window).width() < 749) {
      $('#sm-weather').empty();
      weather.prependTo('#sm-weather');
    }
  });
});
/* End Weather */
