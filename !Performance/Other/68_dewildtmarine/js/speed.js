$(function () {
  /*Delete slider component in mobile*/
  if ($(window).width() < 700) {
    $('#comp_1669245649752').remove();
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
});

function loadScripts() {
  if (!$('#HowlongatCurrentResidenceYearsScript').length) {
    $(
      '<script id="HowlongatCurrentResidenceYearsScript">\
          $("#HowlongatCurrentResidenceYears").change(function () {\
            if ($("#HowlongatCurrentResidenceYears").val() < 2 && $("#HowlongatCurrentResidenceMonths").val() < 24) {\
                $("#HowlongatPreviousResidenceYears, #HowlongatPreviousResidenceMonths").addClass("required");\
                $(".Prev-star").removeClass("hidden");\
                $(".Prev-sec").removeClass("hidden");\
            } else {\
                $("#HowlongatPreviousResidenceYears, #HowlongatPreviousResidenceMonths").removeClass("required");\
                $(".Prev-star").addClass("hidden");\
                $(".Prev-sec").addClass("hidden");\
            }\
        });\
      </script>'
    ).appendTo('head');
  }

  if (!$('#_client_data_script').length) {
    $(
      '<script id="_client_data_script" async src="https://resource.kenect.com/api/v1/widget/client-data/ZTvt1jW5C8E3XVpFSOwN" type="text/javascript"></script>'
    ).appendTo('head');
  }

  if (!$('#_mms_script').length) {
    $(
      '<script id="_mms_script" type="text/javascript" src="//cdn.rlets.com/capture_static/mms/mms.js" async="async"></>'
    ).appendTo('head');
  }

  if ($('._follow-us-container').find('script').length === 0) {
    $('._follow-us-container').append(
      '<script src="https://snapwidget.com/js/snapwidget.js"></script>'
    );
  }

  if ($('._follow-us-container').find('iframe').length === 0) {
    $('._follow-us-container').append(
      '<iframe allowtransparency="true" class="snapwidget-widget" data-src="https://snapwidget.com/embed/716415" id="iFrameResizer0" scrolling="no" title="null #1"> </iframe>'
    );
  }
}
