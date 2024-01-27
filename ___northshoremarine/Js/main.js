/* Menu */
$(document).ready(function () {
  $(".navbar-toggle").on("click", function () {
    $(this).toggleClass("active");
  });
});

/* Active State Menu */
$(document).ready(function () {
  var url = window.location.pathname;
  $('ul.nav a[href="' + url + '"]')
    .parent()
    .addClass("active");
  $("ul.nav a")
    .filter(function () {
      return this.href == url;
    })
    .parent()
    .addClass("active");
});

/* Sticky Menu on Scroll */
$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 48) {
      $("#comp_1700502788190").addClass("sticky-nav");
    } else {
      $("#comp_1700502788190").removeClass("sticky-nav");
    }
  });
});

/* Slide to top */
$(document).ready(function () {
  $("a[href='#top']").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      "slow"
    );
    return false;
  });
});

/* Web Site Only */

// /* Hide breadcrumb in VDP */
$(document).ready(function () {
  if (
    $("#seamaster_vdp").length ||
    $(".blog-VDP").length ||
    $(".blog-srp").length
  ) {
    $(".breadcrumbParent").remove();
  }
});

// update global 404
$(function () {
  if ($("img[alt='Error:404 Page Not Found']").length) {
    console.log("404");
    var content = `<div class="_404-container">
                        <div>
                            <p>404 PAGE NOT FOUND. CHECKOUT OUR INVENTORY OR <a href="/Contact-Us/">CONTACT US</a></p>
                        </div>
                    </div>`;

    $("#CenterDiv").html(content);
  }
});

/* Change SRP when no data - update empty inventory */
function changeSRPLable() {
  if ($(".seamaster-srp").length) {
    if ($(".no-ads-box").length) {
      $(".no-ads-box .row-custom").remove();
    }
  }
}

$(document).ajaxComplete(function () {
  changeSRPLable();
});

$(document).ready(function () {
  changeSRPLable();
});

$(function () {
  $("#mc-embedded-subscribe-form").on("submit", function (e) {
    console.log({ e });
    e.preventDefault();
    // /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        e.currentTarget[0].value
      )
    ) {
      console.log(e.currentTarget[0].value);
      location.href = "/Newsletter-Sign-Up?email=" + e.currentTarget[0].value;
    } else {
      alert("Please enter a valid E-mail");
    }
  });
});

$(function () {
  if (
    window.location.href.indexOf("email") != -1 &&
    window.location.href.indexOf("Newsletter-Sign-Up") != -1
  ) {
    var emailParam = window.location.href.slice(
      window.location.href.indexOf("?") + 1
    );
    var str1 = emailParam.slice(0, emailParam.indexOf("="));
    var val = emailParam.slice(emailParam.indexOf("=") + 1);
    val = val.replaceAll("%20", " ");
    var selector = str1.charAt(0) + str1.slice(1);

    $("#" + selector).attr("value", val);
    $("#" + selector).attr("style", "background-color: #d6d6d6 !important");
  }
});

$(function () {
  if ($("._follow-us-container").find("script").length === 0) {
    $("._follow-us-container").append(
      '<script src="https://snapwidget.com/js/snapwidget.js"></script>'
    );
  }
  if ($("._follow-us-container").find("iframe").length === 0) {
    $("._follow-us-container").append(
      '<iframe src="https://snapwidget.com/embed/1054182" class="snapwidget-widget" allowtransparency="true" frameborder="0" scrolling="no" style="border:none; overflow:hidden;"></iframe>'
    );
  }
});

/* Testimonial content */

$(function () {
  if ($("#testimonial-list").length) {
    var Testimonials = [
      {
        name: "shaun ram",
        review: "The staff there is amazing. Always go the extra mile",
        stars: 5,
        date: "a month ago",
      },
      {
        name: "Bernhard Koppe",
        review: "",
        stars: 5,
        date: "2 months ago",
      },
      {
        name: "G Lau",
        review:
          "Great service. Friendly staff. Cares about customers past and present. Greg and his crew are genuine. Will always use them for my boating needs. Gerald",
        stars: 5,
        date: "3 months ago",
      },
      {
        name: "Valerie Blomme",
        review: "Staff is super helpful! thanks",
        stars: 5,
        date: "5 months ago",
      },
      {
        name: "Christopher Smith",
        review: "",
        stars: 5,
        date: "5 months ago",
      },
      {
        name: "Will S",
        review:
          "Great workmanship, and very helpful staff! We are new boat owners and North Shore Marine was very thorough in explaining their services. Would definitely come back again for my future!",
        stars: 5,
        date: "5 months ago",
      },
      {
        name: "Cheekeye the-dog",
        review: "Great business Very very very very very busy but very good",
        stars: 5,
        date: "6 months ago",
      },
      {
        name: "AmandaE",
        review: "Great staff!",
        stars: 5,
        date: "6 months ago",
      },
      {
        name: "Austin Markey",
        review:
          "Shaun is the best. Now this is my new shop for my 420 sea ray sedan",
        stars: 5,
        date: "7 months ago",
      },
      {
        name: "Summer Muzyka",
        review: "",
        stars: 5,
        date: "10 months ago",
      },
      {
        name: "Canpac Marine",
        review: "",
        stars: 5,
        date: "a year ago",
      },
      {
        name: "Bob Lapp",
        review:
          "I brought in a Merc 3.0 that had a frustrating stalling problem. I had taken the boat into another well known shop and they could not find the problem. North Shore Marine took the boat out for a test in the water until the problem occurred again. They recommended working on the carb as the likely problem. We eventually had to rebuild the carb. This was not a cheap job but they were in close contact throughout the job and discussed options with me. I would highly recommend this company as they will get to the bottom of your problem and fix it with no surprises.",
        stars: 5,
        date: "a year ago",
      },
      {
        name: "Max H",
        review: "Very knowledgeable staff",
        stars: 5,
        date: "a year ago",
      },
      {
        name: "Carl Jarrett",
        review:
          "I had both of my stern drive bellow replaced by North Shore Marine. High quality service and ended up coming in below original estimates. Very happy with the work and the cost. They answered all my newbie boater questions and helped me out. Much appreciated, thank you.",
        stars: 5,
        date: "a year ago",
      },
      {
        name: "Hesam Navidi",
        review: "",
        stars: 5,
        date: "2 years ago",
      },
      {
        name: "J M",
        review:
          "Bought a refurbished Generator from them.   Was a very clean unit at a great price, ran amazing.",
        stars: 5,
        date: "2 years ago",
      },
      {
        name: "Derek Dodds",
        review: "Great service",
        stars: 5,
        date: "2 years ago",
      },
      {
        name: "Pete Arduini",
        review: "",
        stars: 5,
        date: "2 years ago",
      },
      {
        name: "German Villarreal",
        review: "",
        stars: 5,
        date: "2 years ago",
      },
      {
        name: "DJJMC",
        review: "Great prices and quality workmanship",
        stars: 5,
        date: "2 years ago",
      },
      {
        name: "Westcoaster",
        review:
          "Friendly and  knowledgeable.  Took the time to sort us out with a new (small 30hp) engine and did a water trial.",
        stars: 5,
        date: "3 years ago",
      },
      {
        name: "Kasra Roghanian",
        review: "These guy are awesome and always helped me out",
        stars: 5,
        date: "3 years ago",
      },
      {
        name: "Hartland Ross",
        review:
          "I had an issue with my fuel gauge not working and I called and talked to Jordan the electrician and not only did he offer to fit me in when they were super busy but he gave me directions to try to diagnose the issue myself and although I ended up getting his help to confirm what I had done, he only charged me for a quick diagnostic vs the over $500 another shop wanted just to look at it. Jordan behind the counter then found the same gauge and ordered it in quickly for me. I just installed it myself and am back in business! Team Jordan was amazing. Thanks so much guys. I highly recommend giving them a call!",
        stars: 5,
        date: "3 years ago",
      },
      {
        name: "Admiral B.",
        review:
          "I have contacted Greg many times in a pinch. And he's always helped. I appreciate that. Thanks NSM Ltd.",
        stars: 5,
        date: "3 years ago",
      },
    ];

    var ulInner = "";
    for (let i = 0; i < Testimonials.length; i++) {
      ulInner +=
        "\
      <li class='testimonial testimonial-1'> \
    <div class='testimonial-rating'>\
    <div class='testimonial-overall-rating'>\
    <div class='rating-value'>\
    <span aria-hidden='true' class='fa fa-fw fa-star rate1'>&nbsp;</span>\
    <span aria-hidden='true' class='fa fa-fw fa-star rate2'>&nbsp;</span>\
    <span aria-hidden='true' class='fa fa-fw fa-star rate3'>&nbsp;</span>\
    <span aria-hidden='true' class='fa fa-fw fa-star rate4'>&nbsp;</span>\
    <span aria-hidden='true' class='fa fa-fw fa-star rate5'>&nbsp;</span></div> </div>\
    <div class='testimonial-date'>" +
        Testimonials[i].date +
        "</div> </div>\
    <div class='testimonial-content'>\
    <div class='testimonial-comment'>\
    <p>" +
        Testimonials[i].review +
        "</p> </div>\
    <div class='testimonial-attribution'>\
    <div class='attribution-details'>\
    <span class='attribution-first-name'>" +
        Testimonials[i].name +
        "</span>\
    <span class='attribution-last-name'>&nbsp;</span>\
    <span class='attribution-city'>&nbsp;</span>\
    <span class='attribution-state'>&nbsp;</span></div>\
    </div> </div> </div> </li>";
    }

    $("#testimonial-list").html(ulInner);
  }
});

$(document).ready(function () {
  if ($(".seamaster-srp").length && $("#page_66660").length) {
    var mainDiv = $("#CenterDiv");
    var content =
      '<div class="build-your-boat-btns"><a id="build-your-boat" href="https://www.rossiterboats.com/build-your-boat/" target="_blank">Build Your Rossiter Boat</a></div>';
    mainDiv.prepend(content);
  }
});

// var theLanguage = $('html').attr('lang');
// // Diferent language
// if (theLanguage == 'fr') {
//   $('.finacning-link').attr('href', '/fr/Get-Financed');

//   $('.finacning-link').attr('target', '_self');
// } else {
//   $('.finacning-link').attr('href', '/Get-Financed');

//   $('.finacning-link').attr('target', '_self');
// }

// /* Slider Content */
// $(document).ready(function () {
//   var content =
//     '\
//   <div id="inner_content">\
//       <a href="/New-Inventory">\
//           <span>New Inventory</span>\
//           <span>Shop Here &nbsp; <i class="far fa-long-arrow-right">&nbsp;</i></span>\
//       </a>\
//       <a href="/Pre-Owned">\
//           <span>Pre-Owned</span>\
//           <span>Shop Here &nbsp; <i class="far fa-long-arrow-right">&nbsp;</i></span>\
//       </a>\
//       <a href="/Shop">\
//           <span>Shop Online</span>\
//           <span>Shop Here &nbsp; <i class="far fa-long-arrow-right">&nbsp;</i></span>\
//       </a>\
//   </div>\
//   ';

//   var target = $('#comp_1695457074806');
//   target.append(content);
// });
