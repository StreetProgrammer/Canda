var homeShopeOnline = {};
$(function () {
  homeShopeOnline.PageBaseURL = '';
  homeShopeOnline.homePgParentID = 'page_51041';
  homeShopeOnline.IsHome = false;
  homeShopeOnline.mainTabsListClass = 'main-tabs';
  homeShopeOnline.mainFiltersListClass = 'main-filters';
  homeShopeOnline.MobileCollapsibleID = 'home-banner-accordion';

  homeShopeOnline.homeRSCAdComponent = {
      href: "/Shop-Online",
      el: "comp_1633682142936"
    },
    homeShopeOnline.homeRSCAdEl = [{
        tabLinkTxt: 'Dirt Bike',
        id: "Dirt-Bike",
        filter: "?filters[lastFilter]=model&modernFilter=true&isStaticFilter=true&filters[categoryId]=6103&filters[model]=DIRT BIKE&filters[page]=1",
        href: "/Shop-Online",
        inner: [{
            tabLinkTxt: 'Accessories',
            id: "dirt-bike",
            filter: "?filters[lastFilter]=model&modernFilter=true&isStaticFilter=true&filters[categoryId]=6103&filters[model]=DIRT%20BIKE&filters[page]=1",
          },
          {
            tabLinkTxt: 'Helmets',
            id: "dirt-bike",
            filter: "?filters[lastFilter]=model&modernFilter=true&isStaticFilter=true&filters[categoryId]=11453&filters[model]=DIRT%20BIKE&filters[page]=1",
          },
          {
            tabLinkTxt: 'Parts',
            id: "dirt-bike",
            filter: "?filters[lastFilter]=model&modernFilter=true&isStaticFilter=true&filters[categoryId]=11164&filters[model]=DIRT%20BIKE&filters[page]=1",
          },
          {
            tabLinkTxt: 'Tires',
            id: "dirt-bike",
            filter: "?filters[lastFilter]=model&modernFilter=true&isStaticFilter=true&filters[categoryId]=11454&filters[model]=DIRT%20BIKE&filters[page]=1",
          },
          {
            tabLinkTxt: 'Riding Gear',
            id: "dirt-bike",
            filter: "?filters[lastFilter]=model&modernFilter=true&isStaticFilter=true&filters[categoryId]=11224&filters[model]=DIRT%20BIKE&filters[page]=1",
          },
          {
            tabLinkTxt: 'Parts Finder',
            id: "dirt-bike",
            filter: "?filters[lastFilter]=model&modernFilter=true&isStaticFilter=true&filters[categoryId]=11224&filters[model]=DIRT%20BIKE&filters[page]=1",
          },
        ]
      },
      {
        tabLinkTxt: 'ATV/UTV',
        id: "ATV-UTV",
        filter: "?filters[lastFilter]=model&modernFilter=true&isStaticFilter=true&filters[categoryId]=6103&filters[model]=ATV/UTV&filters[page]=1",
        href: "/Shop-Online",
        inner: [{
            tabLinkTxt: 'Accessories',
            id: "dirt-bike",
            filter: "?filters[lastFilter]=model&modernFilter=true&isStaticFilter=true&filters[categoryId]=6103&filters[model]=ATV/UTV&filters[page]=1",
          },
          {
            tabLinkTxt: 'Helmets',
            id: "dirt-bike",
            filter: "?filters[lastFilter]=model&modernFilter=true&isStaticFilter=true&filters[categoryId]=11453&filters[model]=ATV/UTV&filters[page]=1",
          },
          {
            tabLinkTxt: 'Parts',
            id: "dirt-bike",
            filter: "?filters[lastFilter]=model&modernFilter=true&isStaticFilter=true&filters[categoryId]=11164&filters[model]=ATV/UTV&filters[page]=1",
          },
          {
            tabLinkTxt: 'Tires',
            id: "dirt-bike",
            filter: "?filters[lastFilter]=model&modernFilter=true&isStaticFilter=true&filters[categoryId]=11454&filters[model]=ATV/UTV&filters[page]=1",
          },
          {
            tabLinkTxt: 'Riding Gear',
            id: "dirt-bike",
            filter: "?filters[lastFilter]=model&modernFilter=true&isStaticFilter=true&filters[categoryId]=11224&filters[model]=ATV/UTV&filters[page]=1",
          },
          {
            tabLinkTxt: 'Parts Finder',
            id: "dirt-bike",
            filter: "?filters[lastFilter]=model&modernFilter=true&isStaticFilter=true&filters[categoryId]=11224&filters[model]=ATV/UTV&filters[page]=1",
          },
        ]
      },
      {
        tabLinkTxt: 'MOTORCYCLE',
        id: "MOTORCYCLE",
        filter: "?filters[lastFilter]=model&modernFilter=true&isStaticFilter=true&filters[categoryId]=6103&filters[model]=MOTORCYCLE&filters[page]=1",
        href: "/Shop-Online",
        inner: [{
            tabLinkTxt: 'Accessories',
            id: "dirt-bike",
            filter: "?filters[lastFilter]=model&modernFilter=true&isStaticFilter=true&filters[categoryId]=6103&filters[model]=MOTORCYCLE&filters[page]=1",
          },
          {
            tabLinkTxt: 'Helmets',
            id: "dirt-bike",
            filter: "?filters[lastFilter]=model&modernFilter=true&isStaticFilter=true&filters[categoryId]=11453&filters[model]=MOTORCYCLE&filters[page]=1",
          },
          {
            tabLinkTxt: 'Parts',
            id: "dirt-bike",
            filter: "?filters[lastFilter]=model&modernFilter=true&isStaticFilter=true&filters[categoryId]=11164&filters[model]=MOTORCYCLE&filters[page]=1",
          },
          {
            tabLinkTxt: 'Tires',
            id: "dirt-bike",
            filter: "?filters[lastFilter]=model&modernFilter=true&isStaticFilter=true&filters[categoryId]=11454&filters[model]=MOTORCYCLE&filters[page]=1",
          },
          {
            tabLinkTxt: 'Riding Gear',
            id: "dirt-bike",
            filter: "?filters[lastFilter]=model&modernFilter=true&isStaticFilter=true&filters[categoryId]=11224&filters[model]=MOTORCYCLE&filters[page]=1",
          },
          {
            tabLinkTxt: 'Parts Finder',
            id: "dirt-bike",
            filter: "?filters[lastFilter]=model&modernFilter=true&isStaticFilter=true&filters[categoryId]=11224&filters[model]=MOTORCYCLE&filters[page]=1",
          },
        ]
      },
      {
        tabLinkTxt: 'MARINE',
        id: "MARINE",
        filter: "?filters[lastFilter]=categoryId&modernFilter=true&isStaticFilter=true&filters[categoryId]=6103&filters[model]=MARINE&filters[page]=1",
        inner: [{
            tabLinkTxt: 'Accessories',
            id: "dirt-bike",
            filter: "?filters[lastFilter]=categoryId&modernFilter=true&isStaticFilter=true&filters[categoryId]=11164&filters[model]=MARINE&filters[page]=1",
          },
          {
            tabLinkTxt: 'Anchors & Docking',
            id: "dirt-bike",
            filter: "?filters[lastFilter]=categoryId&modernFilter=true&isStaticFilter=true&filters[categoryId]=11164&filters[model]=MARINE&filters[page]=1",
          },
          {
            tabLinkTxt: 'Watersports',
            id: "dirt-bike",
            filter: "?filters[lastFilter]=categoryId&modernFilter=true&isStaticFilter=true&filters[categoryId]=11164&filters[model]=MARINE&filters[page]=1",
          },
          {
            tabLinkTxt: 'Parts',
            id: "dirt-bike",
            filter: "?filters[lastFilter]=categoryId&modernFilter=true&isStaticFilter=true&filters[categoryId]=11164&filters[model]=MARINE&filters[page]=1",
          },
          {
            tabLinkTxt: 'Safety & PFDs',
            id: "dirt-bike",
            filter: "?filters[lastFilter]=categoryId&modernFilter=true&isStaticFilter=true&filters[categoryId]=11164&filters[model]=MARINE&filters[page]=1",
          },
        ]
      },
      {
        tabLinkTxt: 'Snowmobile',
        id: "Snowmobile",
        filter: "?filters[lastFilter]=model&modernFilter=true&isStaticFilter=true&filters[categoryId]=6103&filters[model]=SNOWMOBILE&filters[page]=1",
        inner: [{
            tabLinkTxt: 'Accessories',
            id: "Accessories",
            filter: "?filters[lastFilter]=model&modernFilter=true&isStaticFilter=true&filters[categoryId]=6103&filters[model]=SNOWMOBILE&filters[page]=1",
          },
          {
            tabLinkTxt: 'Helmets',
            id: "Helmets",
            filter: "?filters[lastFilter]=model&modernFilter=true&isStaticFilter=true&filters[categoryId]=11453&filters[model]=SNOWMOBILE&filters[page]=1",
          },
          {
            tabLinkTxt: 'Parts',
            id: "Parts",
            filter: "?filters[lastFilter]=model&modernFilter=true&isStaticFilter=true&filters[categoryId]=11164&filters[model]=SNOWMOBILE&filters[page]=1",
          },
          {
            tabLinkTxt: 'Riding Gear',
            id: "Riding-Gear",
            filter: "?filters[lastFilter]=model&modernFilter=true&isStaticFilter=true&filters[categoryId]=11224&filters[model]=SNOWMOBILE&filters[page]=1",
          },
          {
            tabLinkTxt: 'Tracks',
            id: "Tracks",
            filter: "?filters[lastFilter]=model&modernFilter=true&isStaticFilter=true&filters[categoryId]=6339&filters[model]=SNOWMOBILE&filters[page]=1",
          },
        ]
      },
      {
        tabLinkTxt: 'Casual',
        id: "Casual",
        filter: "?filters[lastFilter]=model&modernFilter=true&isStaticFilter=true&filters[categoryId]=11460&filters[model]=CASUAL&filters[page]=1",
        inner: [{
            tabLinkTxt: "Men's",
            id: "dirt-bike",
            filter: "?filters[lastFilter]=model&modernFilter=true&isStaticFilter=true&filters[categoryId]=11460&filters[model]=CASUAL&filters[page]=1",
          },
          {
            tabLinkTxt: "Women's",
            id: "dirt-bike",
            filter: "?filters[lastFilter]=model&modernFilter=true&isStaticFilter=true&filters[categoryId]=11461&filters[model]=CASUAL&filters[page]=1",
          },
          {
            tabLinkTxt: 'Youth',
            id: "dirt-bike",
            filter: "?filters[lastFilter]=model&modernFilter=true&isStaticFilter=true&filters[categoryId]=11315&filters[model]=CASUAL&filters[page]=1",
          }
        ]
      },
      {
        tabLinkTxt: 'Closeout',
        id: "Closeout",
        filter: "?filters[lastFilter]=model&modernFilter=true&isStaticFilter=true&filters[categoryId]=11158&filters[model]=CLOSEOUT&filters[page]=1",
        inner: [{
            tabLinkTxt: "Snowmobile",
            id: "dirt-bike",
            filter: "?filters[lastFilter]=model&modernFilter=true&isStaticFilter=true&filters[categoryId]=11158&filters[model]=CLOSEOUT&filters[page]=1",
          },
          {
            tabLinkTxt: "Casual",
            id: "Casual",
            filter: "?filters[lastFilter]=model&modernFilter=true&isStaticFilter=true&filters[categoryId]=6378&filters[model]=CLOSEOUT&filters[page]=1",
          },
          {
            tabLinkTxt: 'ATV/UTV',
            id: "ATV-UTV",
            filter: "?filters[lastFilter]=model&modernFilter=true&isStaticFilter=true&filters[categoryId]=6340&filters[model]=CLOSEOUT&filters[page]=1",
          },
          {
            tabLinkTxt: 'Dirt Bike',
            id: "dirt-bike",
            filter: "?filters[lastFilter]=model&modernFilter=true&isStaticFilter=true&filters[categoryId]=11462&filters[model]=CLOSEOUT&filters[page]=1",
          },
          {
            tabLinkTxt: 'Motorcycle',
            id: "dirt-bike",
            filter: "?filters[lastFilter]=model&modernFilter=true&isStaticFilter=true&filters[categoryId]=11157,6&filters[model]=CLOSEOUT&filters[page]=1",
          },
          {
            tabLinkTxt: 'Marine',
            id: "dirt-bike",
            filter: "?filters[lastFilter]=model&modernFilter=true&isStaticFilter=true&filters[categoryId]=11463&filters[model]=CLOSEOUT&filters[page]=1",
          }
        ]
      },
      /*{
        tabLinkTxt: 'SNOWMOBILE',
        id: "dirt-bike",
        filter: "?filters[lastFilter]=categoryId&modernFilter=true&isStaticFilter=true&filters[categoryId]=11164&filters[page]=1",
      },
      {
        tabLinkTxt: 'CLEARANCE',
        id: "dirt-bike",
        filter: "?filters[lastFilter]=categoryId&modernFilter=true&isStaticFilter=true&filters[categoryId]=11164&filters[page]=1",
      },*/
    ];

  // initialize function
  homeShopeOnline.init = function () {
    this.IsHome = this.checkIfHome();
    if (this.IsHome) {
      this.removeSRPBoxes();
    }
    this.DrawMobileCollapsible();
    this.appendMainFilters();
    this.changeSRPBtnTXT();
  }

  // check if we are in home page
  homeShopeOnline.checkIfHome = function () {
    if ($('#' + this.homePgParentID).length) {
      return true;
    }
    return false;
  }

  // change a text "Buy Now" to "Add To Cart"
  homeShopeOnline.changeSRPBtnTXT = function () {
    $('.main-btn.add-to-cart-product.add-to-cart-btn.add-to-cart').each(function () {
      var html = $(this).html();
      html = html.replace("Buy Now", "Add To Cart");
      $(this).html(html)
    });
  }

  // remove some boxes to match design from 10 to 8 box in this status
  homeShopeOnline.removeSRPBoxes = function () {
    var self = this;
    // $(document).ajaxComplete(function () {

    const el = $('#' + self.homeRSCAdComponent.el);
    const boxes = el.find('#products');
    boxes.last().children().last().remove();
    if (boxes.find(".item.grid-group-item").length > 8) {
      boxes.find(".item.grid-group-item:nth-last-child(-n+2)").remove();
    }
    boxes.append($(`<div class="col-xs-12 more">
                          <a class="hidden-xs" href="${self.homeRSCAdComponent.href}">
                            See More  
                          </a>
                        </div>`));


    $('.main-btn.add-to-cart-product.add-to-cart-btn.add-to-cart').each(function () {
      var html = $(this).html();
      html = html.replace("Buy Now", "Add To Cart");
      $(this).html(html)
    });

    $('.thumbnail-container a.pushstate').each(function () {
      var href = $(this).attr('href');
      href = href.replace("Home/", "Shop-Online/");
      $(this).attr('href', href);
    });

    $('a.model-title-link.pushstate').each(function () {
      var href = $(this).attr('href');
      href = href.replace("Home/", "Shop-Online/");
      $(this).attr('href', href);
    });
    // });
  }

  homeShopeOnline.appendMainFilters = function () {
    var self = this;
    if ($('.parts-vdp').length) {
      var mainTabsList = $('.' + self.mainTabsListClass).parent();
      mainTabsList.css({
        "display": "none"
      });
      $('.breadcrumbParent').attr('style', 'display: flex !important');
      return;
    }
    var mainTabsList = $('.' + self.mainTabsListClass);
    var mainFiltersList = $('.' + self.mainFiltersListClass);

    for (let i = 0; i < self.homeRSCAdEl.length; i++) {
      mainTabsList.append($('<li class="' + (i == 0 ? 'active' : '') + '"><a href="#" id="' + self.homeRSCAdEl[i].id + '">' + self.homeRSCAdEl[i].tabLinkTxt + '</a></li>')
        .on('click', 'a', function (e) {
          e.preventDefault();
          // var backBtn = $('.model-action-btn.back-btn');
          // if (backBtn.length) {
          //   backBtn.trigger("click");
          // }
          // remove active class from all li
          mainTabsList.children('li').removeClass("active");
          // add active class to parent
          $(this).parent().addClass('active');
          var x = self.returnPageSlug() + self.homeRSCAdEl[i].filter;
          loadContent(x);
          self.removeSRPBoxes();
          // if (self.IsHome) {
          mainFiltersList.html('');
          for (let j = 0; j < self.homeRSCAdEl[i].inner.length; j++) {
            mainFiltersList.append($('<li class="' + (j == 0 ? 'active' : '') + '"><a href="#" id="' + self.homeRSCAdEl[i].inner[j].id + '">' + self.homeRSCAdEl[i].inner[j].tabLinkTxt + '</a></li>')
              .on('click', 'a', function (e) {
                e.preventDefault();
                // remove active class from all li
                mainFiltersList.children('li').removeClass("active");
                // add active class to parent
                $(this).parent().addClass('active');
                var x = self.returnPageSlug() + self.homeRSCAdEl[i].inner[j].filter;
                loadContent(x);
                self.removeSRPBoxes();
              }));
          }
          // add search icon to "Parts Finder"
          if ($('.main-filters li:last-child').text().includes('Parts Finder')) {
            $('.main-filters li:last-child').find('a').append('<i class="fas fa-search mx-2" style="font-size: 80%;"></i>');
          }
          // }

        }));

      if (i === 0) {
        for (let j = 0; j < self.homeRSCAdEl[0].inner.length; j++) {
          mainFiltersList.append($('<li class="' + (j == 0 ? 'active' : '') + '"><a href="#" id="' + self.homeRSCAdEl[0].inner[j].id + '">' + self.homeRSCAdEl[0].inner[j].tabLinkTxt + '</a></li>')
            .on('click', 'a', function (e) {
              e.preventDefault();
              var x = self.returnPageSlug() + self.homeRSCAdEl[0].inner[j].filter;
              loadContent(x);
              self.removeSRPBoxes();
            }));
          // add search icon to "Parts Finder"
          if ($('.main-filters li:last-child').text().includes('Parts Finder')) {
            $('.main-filters li:last-child').find('a').append('<i class="fas fa-search mx-2" style="font-size: 80%;"></i>');
          }
        }
      }
    }
  }

  homeShopeOnline.returnPageSlug = function () {
    if (!homeShopeOnline.PageBaseURL.length === 0) {
      return homeShopeOnline.PageBaseURL
    }
    var allURL = window.location.href;
    var domainName = window.location.hostname;
    var currentPage = allURL.replace(domainName, '');
    var currentPage = currentPage.replace('https', '');
    var currentPage = currentPage.replace('http', '');
    var currentPage = currentPage.replace(/\//g, '');
    var currentPage = currentPage.replace(/:/g, '');
    if (currentPage.includes('?')) {
      var currentPage = currentPage.slice(0, currentPage.indexOf('?'))
    }

    currentPage = currentPage.length === 0 ? 'Home' : currentPage;
    homeShopeOnline.PageBaseURL = domainName + '/' + currentPage;
    return homeShopeOnline.PageBaseURL;
  }
  homeShopeOnline.DrawMobileCollapsible = function () {
    var self = this;
    var MobileCollapsible = $('#' + self.MobileCollapsibleID);
    if (MobileCollapsible) {
      MobileCollapsible.html('');
      for (let i = 0; i < self.homeRSCAdEl.length; i++) {
        MobileCollapsible.append($('<div class="panel panel-default">\
										<div class="panel-heading b-btn btn-block upper">\
                      <span aria-expanded="true" class="panel-title collapsed" data-parent="#home-banner-accordion" data-toggle="collapse" href="#' + self.homeRSCAdEl[i].id + '">\
                        <a class="upper" href="#">' + self.homeRSCAdEl[i].tabLinkTxt + '</a>\
                     </span>\
                    </div>\
										<div class="panel-collapse collapse" id="' + self.homeRSCAdEl[i].id + '">\
											<div class="panel-body">\
												<ul class="links">\
												</ul>\
											</div>\
										</div>\
									</div>\
        '));

        for (let j = 0; j < self.homeRSCAdEl[i].inner.length; j++) {
          console.log("self.homeRSCAdEl[i].id => ", self.homeRSCAdEl[i].id);
          MobileCollapsible.find('#' + self.homeRSCAdEl[i].id + ' ul.links').append($('<li><a href="/Shop-Online' + self.homeRSCAdEl[i].inner[j].filter + '/">' + self.homeRSCAdEl[i].inner[j].tabLinkTxt + '</a></li>'));
        }
      }

    }
  }
  homeShopeOnline.init();
  homeShopeOnline.returnPageSlug();

});

$(document).ajaxComplete(function () {
  if ($('.parts-vdp').length) {
    var ListParent = $('.' + homeShopeOnline.mainTabsListClass).parent();
    ListParent.css({
      "display": "none"
    });
    $('.breadcrumbParent').attr('style', 'display: flex !important');
    return;
  }
  homeShopeOnline.changeSRPBtnTXT();
  if (homeShopeOnline.IsHome) {
    homeShopeOnline.removeSRPBoxes();
  }
});

/*Added by Abdallah to activate first section and apply its filter*/
$(function () {
  // $('.main-tabs> li:nth-child(2) a').click();
});