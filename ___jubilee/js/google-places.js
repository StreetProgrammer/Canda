/* https://github.com/peledies/google-places */
(function ($) {
  if ($('#page_46252').length) $('.reviews-msg-container').html("")
  $.googlePlaces = function (element, options) {

    var defaults = {
      placeId: 'ChIJ25OezF73BFMRt5oPgIeAhZY' // placeId provided by google api documentation
      , render: ['reviews']
      , min_rating: 4
      , max_rows: 0
      , rotateTime: false
    };

    var plugin = this;

    plugin.settings = {}

    var $element = $(element),
      element = element;

    plugin.init = function () {
      plugin.settings = $.extend({}, defaults, options);
      $element.html("<div id='carousel-reviews' class='carousel slide' data-ride='carousel'><div id='map-plug' class='carousel-inner' role='listbox'></div></div>"); // create a plug for google to load data into
      initialize_place(function (place) {
        plugin.place_data = place;
        // render specified sections
        if (plugin.settings.render.indexOf('reviews') > -1) {
          renderReviews(plugin.place_data.reviews);
          if (!!plugin.settings.rotateTime) {
            initRotation();
          }
        }
      });
    }

    var initialize_place = function (c) {
      var map = new google.maps.Map(document.getElementById('map-plug'));

      var request = {
        placeId: plugin.settings.placeId
      };

      var service = new google.maps.places.PlacesService(map);

      service.getDetails(request, function (place, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          c(place);
        }
      });
    }

    var sort_by_date = function (ray) {
      ray.sort(function (a, b) {
        var keyA = new Date(a.time),
          keyB = new Date(b.time);
        // Compare the 2 dates
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
      });
      return ray;
    }

    var filter_minimum_rating = function (reviews) {
      for (var i = reviews.length - 1; i >= 0; i--) {
        if (reviews[i].rating < plugin.settings.min_rating) {
          reviews.splice(i, 1);
        }
      }
      return reviews;
    }

    var renderReviews = function (reviews) {

      reviews = sort_by_date(reviews);
      reviews = filter_minimum_rating(reviews);
      var html = "";
      var row_count = (plugin.settings.max_rows > 0) ? plugin.settings.max_rows - 1 : reviews.length - 1;
      // make sure the row_count is not greater than available records
      row_count = (row_count > reviews.length - 1) ? reviews.length - 1 : row_count;
      for (var i = row_count; i >= 0; i--) {
        var stars = renderStars(reviews[i].rating);
        var date = convertTime(reviews[i].time);
        if ($('#page_46147').length) {
          if (i == row_count) {
            html = html + "<div class='item active'><div class='review-meta'><span class='review-author'>" + reviews[i].author_name + "</span><span class='review-sep'>, </span><span class='review-date'>" + date + "</span></div>" + stars + "<p class='review-text'>" + reviews[i].text + "</p></div>"
          }
          else {
            html = html + "<div class='item'><div class='review-meta'><span class='review-author'>" + reviews[i].author_name + "</span><span class='review-sep'>, </span><span class='review-date'>" + date + "</span></div>" + stars + "<p class='review-text'>" + reviews[i].text + "</p></div>"

          }
        } if ($('#page_46252').length) {
          html = html + '<div class="col-md-12 reviews-msg"> <div class="icon"><i class="fas fa-quote-left p-4"><span class="hidden">&nbsp;</span></i></div><p>' + data + '</p><div class="review-info d-flex flex-row"><div class="col-md-8 text-left mt-4"><i class="fas fa-star"><span class="hidden">&nbsp;</span></i><i class="fas fa-star"><span class="hidden">&nbsp;</span></i><i class="fas fa-star"><span class="hidden">&nbsp;</span></i><i class="fas fa-star"><spanclass="hidden">&nbsp;</span class=></i><i class="fas fa-star"><span class="hidden">&nbsp;</span class=></i> <i class="fab fa-google pl-2 google-icon"><span class="hidden">&nbsp;</span></i></div><div class="col-md-4 text-right client"><h5>' + reviews[i].author_name + '</h5><p>' + date + '</p></div></div></div>'
        }

      };

      if ($('#page_46147').length) {

        $element.append(html);
      } if ($('#page_46252').length) {
        console.log('append content');
        $('.reviews-msg-container').append(html)
      }
    }

    var initRotation = function () {
      var $reviewEls = $element.children('.item');
      var currentIdx = $reviewEls.length > 0 ? 0 : false;
      $reviewEls.hide();
      if (currentIdx !== false) {
        $($reviewEls[currentIdx]).show();
        setInterval(function () {
          if (++currentIdx >= $reviewEls.length) {
            currentIdx = 0;
          }
          $reviewEls.hide();
          $($reviewEls[currentIdx]).fadeIn('slow');
        }, plugin.settings.rotateTime);
      }
    }

    var renderStars = function (rating) {
      var stars = "<div class='review-stars'><ul>";

      // fill in gold stars
      for (var i = 0; i < rating; i++) {
        stars = stars + "<li><i class='star'></i></li>";
      };

      // fill in empty stars
      if (rating < 5) {
        for (var i = 0; i < (5 - rating); i++) {
          stars = stars + "<li><i class='star inactive'></i></li>";
        };
      }
      stars = stars + "</ul></div>";
      return stars;
    }

    var convertTime = function (UNIX_timestamp) {
      var a = new Date(UNIX_timestamp * 1000);
      var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      var time = months[a.getMonth()] + ' ' + a.getDate() + ', ' + a.getFullYear();
      return time;
    }

    plugin.init();

  }

  $.fn.googlePlaces = function (options) {

    return this.each(function () {
      if (undefined == $(this).data('googlePlaces')) {
        var plugin = new $.googlePlaces(this, options);
        $(this).data('googlePlaces', plugin);
      }
    });

  }

})(jQuery);

jQuery(document).ready(function ($) {
  $("#google-reviews").googlePlaces({ placeId: 'ChIJ25OezF73BFMRt5oPgIeAhZY' })
});
