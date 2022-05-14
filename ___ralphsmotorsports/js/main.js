/* Start Handle Fake anchors */
$(function () {
  $("body")
    .find(".thumb.card .Read-more")
    .each(function (idx, el) {
      $(el).removeAttr("href");
    });
});
/* End Handle Fake anchors */
