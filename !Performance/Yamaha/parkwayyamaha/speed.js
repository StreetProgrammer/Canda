$(function () {
  /*Delete slider component in mobile*/
  if ($(window).width() < 700) {
    $('.slide').remove();
    $('.hidden-xs').remove();
    $('.desktop-only').remove();
  }

  /* load weatehr widget  */
  const userInteractionEvents = [
    'mouseover',
    'keydown',
    'touchmove',
    'touchstart',
  ];
  userInteractionEvents.forEach(function (event) {
    window.addEventListener(event, triggerScriptLoader, {
      passive: true,
    });
  });

  function triggerScriptLoader() {
    loadScripts();
    userInteractionEvents.forEach(function (event) {
      window.removeEventListener(event, triggerScriptLoader, {
        passive: true,
      });
    });
  }
  function loadScripts() {
    if ($('#main_js').length === 0) {
      $(
        `<script id="main_js" src="/site-uploads/1001260/frontjs/main.js"></script>`
      ).insertAfter('#panelWeather');
    }

    if ($('#site-script-1').length === 0) {
      $('head').append(
        $(
          '<script id="site-script-1" async src="https://bit.ly/34RSLFU" type="text/javascript"></script>'
        )
      );
    }

    if ($(window).width() > 700) {
      (function _(a, b, c, d, e) {
        var f = window.console;
        f &&
          Math.floor(new Date().getTime() / 1e3) - b > 7 * 24 * 60 * 60 &&
          f.warn('The Facebook JSSDK is more than 7 days old.');
        if (window[c]) return;
        if (!window.JSON) return;
        var g = (window[c] = {
          __buffer: {
            replay: function () {
              var a = this,
                b = function (d) {
                  var b = window[c];
                  a.calls[d][0].split('.').forEach(function (a) {
                    return (b = b[a]);
                  });
                  b.apply(null, a.calls[d][1]);
                };
              for (var d = 0; d < this.calls.length; d++) b(d);
              this.calls = [];
            },
            calls: [],
            opts: null,
          },
          getUserID: function () {
            return '';
          },
          getAuthResponse: function () {
            return null;
          },
          getAccessToken: function () {
            return null;
          },
          init: function (a) {
            g.__buffer.opts = a;
          },
        });
        for (var b = 0; b < d.length; b++) {
          f = d[b];
          if (f in g) continue;
          var h = f.split('.'),
            i = h.pop(),
            j = g;
          for (var k = 0; k < h.length; k++) j = j[h[k]] || (j[h[k]] = {});
          j[i] = (function (a) {
            if (a === 'init') return;
            return function () {
              g.__buffer.calls.push([a, Array.prototype.slice.call(arguments)]);
            };
          })(f);
        }
        k = document.createElement('script');
        k.src = a;
        k.async = !0;
        e && (k.crossOrigin = 'anonymous');
        h = document.getElementsByTagName('script')[0];
        h.parentNode && h.parentNode.insertBefore(k, h);
      })(
        'https://connect.facebook.net/en_US/sdk.js?hash=5f275a2ffd19a15f3e0ba19f3dffbf07',
        1665525811,
        'FB',
        [
          'AppEvents.EventNames',
          'AppEvents.ParameterNames',
          'AppEvents.activateApp',
          'AppEvents.clearAppVersion',
          'AppEvents.clearUserID',
          'AppEvents.getAppVersion',
          'AppEvents.getUserID',
          'AppEvents.logEvent',
          'AppEvents.logPageView',
          'AppEvents.logPurchase',
          'AppEvents.setAppVersion',
          'AppEvents.setUserID',
          'AppEvents.updateUserProperties',
          'Canvas.Plugin.showPluginElement',
          'Canvas.Plugin.hidePluginElement',
          'Canvas.Prefetcher.addStaticResource',
          'Canvas.Prefetcher.setCollectionMode',
          'Canvas.getPageInfo',
          'Canvas.scrollTo',
          'Canvas.setAutoGrow',
          'Canvas.setDoneLoading',
          'Canvas.setSize',
          'Canvas.setUrlHandler',
          'Canvas.startTimer',
          'Canvas.stopTimer',
          'Event.subscribe',
          'Event.unsubscribe',
          'XFBML.parse',
          'addFriend',
          'api',
          'getAccessToken',
          'getAuthResponse',
          'getLoginStatus',
          'getUserID',
          'init',
          'login',
          'logout',
          'publish',
          'share',
          'ui',
        ],
        true
      );
      $().insertAfter('#fb-root');
      // '<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v15.0&appId=714297722278460&autoLogAppEvents=1" nonce="C6Cb0bSY"></script>'
    }
  }
});
