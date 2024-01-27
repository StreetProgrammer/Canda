jQuery(function ($) {
  /* Start for add custom breadcrumb Link */
  function returnPageSlug() {
    console.log("window.location.href => ", window.location.href);
    var allURL = window.location.href;
    var domainName = window.location.hostname;
    var currentPage = allURL.replace(domainName, "");
    var currentPage = currentPage.replace("https", "");
    var currentPage = currentPage.replace("http", "");
    var currentPage = currentPage.replace(/\//g, "");
    var currentPage = currentPage.replace(/:/g, "");
    if (currentPage.includes("?")) {
      var currentPage = currentPage.slice(0, currentPage.indexOf("?"));
    }
    console.log("currentPage => ", currentPage);
    return currentPage;
  }

  var pagesNeedCustomBreadcrumb = [
    // {
    //   target: {
    //     name: 'BOAT & PWC LIFTS',
    //     url: '/Boat-&-PWC-Lifts'
    //   },
    //   pages: [
    //     'Naylor-Dock-Products-'
    //   ]
    // }
  ];
  /* End It Here*/
  if ($("nav.breadcrumbParent").length) {
    var breadcrumbListItemsCount = $("ol.breadcrumb li").length;

    /*Related to add custom breadcrumb*/
    if (pagesNeedCustomBreadcrumb && pagesNeedCustomBreadcrumb.length !== 0) {
      var currentPageURL = returnPageSlug();
      for (let i = 0; i < pagesNeedCustomBreadcrumb.length; i++) {
        console.log(pagesNeedCustomBreadcrumb[i]);
        if (pagesNeedCustomBreadcrumb[i].pages.includes(currentPageURL)) {
          console.log("found");
          var el =
            '<li class="breadcrumb-item" style="text-transform: capitalize;"><a href="' +
            pagesNeedCustomBreadcrumb[i].target.url +
            '">' +
            pagesNeedCustomBreadcrumb[i].target.name +
            "</a></li>";
          $(el).insertBefore($(".breadcrumb-item.active"));
          breadcrumbListItemsCount++;
        }
      }
    }
    /* End It Here*/

    var modelTitle = "";
    if ($(".model-details-content.container .model-title").length) {
      $(".model-details-content.container .model-title").hide();
      modelTitle = $(".model-details-content.container .model-title").text();
    }

    var elementToHide = $(".breadcrumb-item.active");
    var new_title = elementToHide.text();
    console.log("new_title => ", new_title);
    elementToHide.hide();
    new_title = new_title
      .split("-")
      .filter(function (item) {
        item = item ? item.replace(/-/g, "") : item;
        return item;
      })
      .join(" ");

    new_title =
      modelTitle.length === 0 ? new_title.replace(/  +/g, " - ") : modelTitle;
    /* handle get breadcrumb text from DOM Element */
    var customTitleExist = document.getElementById("_custome_breadcrumb_title");
    if (customTitleExist) {
      console.log(customTitleExist.innerText);
      customTitleExist.style.display = "none";
      new_title = customTitleExist.innerText;
    }
    console.log("customTitleExist => ", customTitleExist);
    new_titleCharCount = new_title.length;
    if (new_titleCharCount > 25 || breadcrumbListItemsCount > 2 || 1 === 1) {
      var style =
        "<style>@media screen and (max-width: 620px){.breadcrumbParent {flex-direction: column;}.breadcrumbParent h2 {padding-top: 1.5vw;}}</style>";
      $("nav.breadcrumbParent").prepend(style);
    }
    ttlelement = "<h1>" + new_title + "</h1>";
    $("nav.breadcrumbParent").prepend(ttlelement);
    if ($(".col-sm-9.col-xs-12.model-ttl .model-title").length) {
      $(".col-sm-9.col-xs-12.model-ttl .model-title").hide();
    }

    /* start Capitalize other breadcrumb li elements */
    var oltherListItems = $("ol.breadcrumb li").not(".active");
    oltherListItems.each(function () {
      $(this).css({ "text-transform": "capitalize" });
    });
    /* End */
  }
});

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

jQuery(function ($) {
  if (
    $(
      "div.col-lg-8.col-md-10.col-sm-10.col-xs-7.text-left.descColumnResponsive"
    ).length
  ) {
    $(
      "div.col-lg-8.col-md-10.col-sm-10.col-xs-7.text-left.descColumnResponsive"
    ).each(function () {
      console.log($(this).text());
      var text = $(this).text().replace(/\s/g, "");
      if (text === "N/A") {
        $(this).parent().hide();
      }
    });
  }
});
