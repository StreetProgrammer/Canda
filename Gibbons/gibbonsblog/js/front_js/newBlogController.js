function handleRunOrNot() {
    var pagePathName = window.location.pathname;
    if (pagePathName === '/') {
        return true;
    }
    if (pagePathName === '/blog/') {
        return true;
    }
    if (pagePathName.includes("-ln")) {
        return true;
    }
    return false
}
var run_or_not = handleRunOrNot();


posts = [
    {
        title: 'HUNTING SEASON SERIES',
        url: '/Hunting-season-series/',
        img: '/site-uploads/1001204/Images/Untitled-7.jpg',
        iframe: ''
    },
    {
        title: 'Traffic Jams Solved',
        url: '/Winter-is-coming-for-your-boat/',
        img: '/site-uploads/1001204/Images/Untitled-7.jpgxx_2.jpg',
        iframe: ''
    },
    {
        title: 'Discover Hamburger Heaven',
        url: '/Make-boating-a-fun-activity-this-fal/',
        img: '/site-uploads/1001204/Images/Untitled-7.jpgww_3.jpg',
        iframe: ''
    },
    {
        title: 'Sport Jet fuel lift pump install',
        url: '/Sport-jet-fuel-lift-pump-install/',
        img: '',
        iframe: 'https://www.youtube.com/embed/27Mh6oh8Jgc'
    },
    {
        title: 'Coyote Otter 40 jet. All new jet boat!',
        url: '/New-low-cost-jet/',
        img: '',
        iframe: 'https://www.youtube.com/embed/0niR5C8ZTl8'
    },
    {
        title: 'Kingfisher, Coyote and GMT present River Rendez Vous 2019',
        url: '/2nd-annual-river-rendez-vous/',
        img: '',
        iframe: 'https://www.youtube.com/embed/iQHvnVMXfQs'
    },
    {
        title: 'Optimax 200 Sportjet spare parts kit',
        url: '/Sport-jet-adventure-kit/',
        img: '',
        iframe: 'https://www.youtube.com/embed/TD1ErwMXaXM'
    },
    {
        title: 'All new Jet boat and Engine. Coyote 180R w/ Indmar EcoBoost',
        url: '/All-new-jet-boat-and-engine/',
        img: '',
        iframe: 'https://www.youtube.com/embed/_4nvPzlMOqQ'
    },
    {
        title: 'No livewell? no problem, Pelican livewell cooler',
        url: '/30qt-livewell-elite-cooler/',
        img: '',
        iframe: 'https://www.youtube.com/embed/iUVCTWGlDMY'
    },
    {
        title: 'New coyote jet boat w/Indmar 2.3L Ecoboost turbo July 2019',
        url: '/Introducing-the-new-jet-boat-and-engine-packages/',
        img: '',
        iframe: 'https://www.youtube.com/embed/ydmvNHc_Oeg'
    },
    {
        title: 'Kingfisher 3425 GFX 2019 walkthrough',
        url: '/Kingfisher-3425-gfx-2019-walkthrough/',
        img: '',
        iframe: 'https://www.youtube.com/embed/pp86iY_mdmg'
    },
    {
        title: 'New welded aluminum boat brand made in Canada.',
        url: '/Canadian-made-coyote-otter-boat:-the-water-test/',
        img: '',
        iframe: 'https://www.youtube.com/embed/rRLchZb90cA'
    },
    {
        title: 'Kingfisher 2725 & 2825 Offshore',
        url: '/Kingfisher-2725-&-2825-Offshore/',
        img: '',
        iframe: 'https://www.youtube.com/embed/amVj-czDaoo'
    },
    {
        title: 'Kingfisher 1875 Falcon on the water delivery NSR',
        url: '/Kingfisher-1875-falcon-on-the-water-delivery-nsr/',
        img: '',
        iframe: 'https://www.youtube.com/embed/qB452tSw57U'
    },
    {
        title: "GMT Father's Day blog 2019",
        url: '/Gmt-fathers-day-specials-for-the-month-of-june/',
        img: '',
        iframe: 'https://www.youtube.com/embed/BRvu3Q6C5WE'
    },
    {
        title: 'Kingfisher 2025 Escape Hard Top 2019',
        url: '/Kingfisher-2025-escape-ht-tour/',
        img: '',
        iframe: 'https://www.youtube.com/embed/zqM2-xsmO-c'
    },
    {
        title: 'Boating safety required equipment.',
        url: '/Boating-safety-required-equipment/',
        img: '',
        iframe: 'https://www.youtube.com/embed/6VRMEOWIy30'
    },
    {
        title: 'kingfisher 2025F short walkaround',
        url: '/Kingfisher-2025-falcon-walk-around/',
        img: '',
        iframe: 'https://www.youtube.com/embed/00yTbMRgERs'
    },
    {
        title: "River's open Kingfisher jet boats",
        url: '/Rivers-open-kingfisher-jet-boats/',
        img: '',
        iframe: 'https://www.youtube.com/embed/nCkbkTp7daA'
    },
    {
        title: "Kingfisher 1825 vs 2025 Falcon",
        url: '/Kingfisher-1825-vs-2025-falcon/',
        img: '',
        iframe: 'https://www.youtube.com/embed/psLo1uHGnGs'
    },
    {
        title: 'Spring is here. Are you ready? Kingfisher boats',
        url: '/Get-in-the-water-book-your-boats-annual-check-up/',
        img: '',
        iframe: 'https://www.youtube.com/embed/Z7cSag6qyD0'
    },
    {
        title: 'Can Am Outlander 850 XT custom red rims',
        url: '/Can-am-outlander-850-xt-custom-red-rims/',
        img: '',
        iframe: 'https://www.youtube.com/embed/ZA_-bwllceM'
    },
    {
        title: 'Defender accessories removable winch',
        url: '/Practical-&-Versatile:-Defender-XT-HD8-Accessories/',
        img: '',
        iframe: 'https://www.youtube.com/embed/2bzwF2oAOYc'
    },
    {
        title: 'Can Am Defender X mr Max Cab',
        url: '/2019-defender-max-xmr-cab-version/',
        img: '',
        iframe: 'https://www.youtube.com/embed/8pVhPkjDLR0'
    },
    {
        title: 'Boat show success 2019 and Kingfisher Offshore',
        url: '/Comparing-kingfisher-offshore-boats-at-the-edmonton-boat-show/',
        img: '',
        iframe: 'https://www.youtube.com/embed/CsPKG_N9AZ4'
    },
    {
        title: 'New Boat to Gibbons Motor Toys',
        url: '/New-boat-to-gibbons-motor-toys/',
        img: '',
        iframe: 'https://www.youtube.com/embed/Q7xg7iBo6Ng'
    },
    {
        title: 'Edmonton Boat show on March 14th',
        url: '/Behind-the-scenes-look-at-our-29th-edmonton-boat-show/',
        img: '',
        iframe: 'https://www.youtube.com/embed/kc0mTza2lb8'
    },
    {
        title: 'Can Am Maverick sport X mr',
        url: '/Can-am-maverick-sport-x-mr/',
        img: '',
        iframe: 'https://www.youtube.com/embed/IxM5HwK66fM'
    },
    {
        title: "Edmonton Boat and Sportsmen's show",
        url: '/Edmonton-boat-and-sportsmens-show/',
        img: '',
        iframe: 'https://www.youtube.com/embed/jDv8XHgUPr8'
    },
    {
        title: 'Can Am Outlander 6X6 max 2019',
        url: '/Can-am-outlander-6x6-max-2019/',
        img: '',
        iframe: 'https://www.youtube.com/embed/I88FWSKnXOE'
    },
    {
        title: 'Outlander ATV accessories',
        url: '/Outlander-atv-accessories/',
        img: '',
        iframe: 'https://www.youtube.com/embed/ut7el0p6YII'
    },
    {
        title: 'Can Am Outlander 450 DPS Max',
        url: '/Can-am-outlander-450-dps-max/',
        img: '',
        iframe: 'https://www.youtube.com/embed/HmYnmQ7oKH8'
    },
    {
        title: 'Kingfisher 3425 rigging and accessories',
        url: '/Behind-the-scenes-look-at-the-3425-gfx-boat-rigging/',
        img: '',
        iframe: 'https://www.youtube.com/embed/_Jo61X5c1sY'
    },
    {
        title: 'Kingfisher 1825 Warrior multi species fishing boat',
        url: '/Kingfisher-1825-warrior-multi-species-fishing-boat/',
        img: '',
        iframe: 'https://www.youtube.com/embed/2ypuFvxsCGI'
    },
    {
        title: 'Can Am Defender XTP Cab',
        url: '/Can-am-defender-xtp-cab/',
        img: '',
        iframe: 'https://www.youtube.com/embed/4EWdn_qLgXM'
    },
    {
        title: 'Ski Doo must have accessories GMT',
        url: '/Ski-doo-must-have-accessories-gmt/',
        img: '',
        iframe: 'https://www.youtube.com/embed/tJL_F5GLPAc'
    },
    {
        title: 'Kingfisher 3425 arrived, sneak peak 2019',
        url: '/Kingfisher-3425-arrived,-sneak-peak-2019/',
        img: '',
        iframe: 'https://www.youtube.com/embed/bNcpq8jIY14'
    },
]

$(document).ready(function () {
    if ($(".col-xl-8.col-lg-8.col-md-6.col-12.content-area").length) {
        var pathname = window.location.pathname; // Returns path only (/path/example.html)
        var url = window.location.href;     // Returns full URL (https://example.com/path/example.html)
        var origin = window.location.origin;   // Returns base URL (https://example.com)

        var newElement = '<div class="related-post"><h3>You May Also Like</h3><div id="brandSlider" class="ms-PAUSE related-posts-container" ><ul class="slider__content">'

        var chossenPosts = []
        while (chossenPosts.length < 3) {
            var index = Math.floor(Math.random() * (posts.length + 1));
            if (posts[index].url !== pathname) {
                chossenPosts.push(posts[index]);
                var imgOrIframe = posts[index].img.length === 0
                    ? '<iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" frameborder="0"  src="' + posts[index].iframe + '" ></iframe>'
                    : '<img src="' + posts[index].img + '" alt="">'
                newElement += '<li class="slider__item"><a class="slider__link" href="' + posts[index].url + '"> ' + imgOrIframe + ' <span>' + posts[index].title.substring(0, 10) + ' ...</span></a></li>'

            }
        }
        newElement += '</ul></div></div>'

        $(".col-xl-8.col-lg-8.col-md-6.col-12.content-area").append(newElement)
        console.log('chossenPosts => ', chossenPosts);


    }
});

if (run_or_not === true) {

    $(document).ready(function () {
        var PostsContainer = $('#CenterDiv')
        var allPosts = PostsContainer.children().not('#html_1577893921156')
        allPosts.detach();
        console.log(allPosts.length);
        var size = 3;
        var arrayOfPostsArrays = [];
        for (var i = 0; i < allPosts.length; i += size) {
            arrayOfPostsArrays.push(allPosts.slice(i, i + size));
        }

        var newPostsContainer = $('.content-area .row');
        newPostsContainer.html(arrayOfPostsArrays[0])

        var nowShow = arrayOfPostsArrays[0];
        prpareNumericPaginate(0)
        $("[target=Prev]").addClass('unClickable')

        $(".paginate .paginateBtn").on("click", function () {
            var nowIndex = arrayOfPostsArrays.indexOf(nowShow)
            if ($(this).attr('target') === 'Prev' && nowIndex > 0) {
                nowShow = arrayOfPostsArrays[nowIndex - 1]
                $("[target=Next]").removeClass('unClickable')
            } else if ($(this).attr('target') === 'Next' && nowIndex < arrayOfPostsArrays.length - 1) {
                nowShow = arrayOfPostsArrays[nowIndex + 1]
                $("[target=Prev]").removeClass('unClickable')
            }
            newPostsContainer.html(nowShow)
            nowIndex = arrayOfPostsArrays.indexOf(nowShow)
            if (nowIndex === 0) {
                $("[target=Prev]").addClass('unClickable')
            }
            if (nowIndex === arrayOfPostsArrays.length - 1) {
                $("[target=Next]").addClass('unClickable')
            }

            prpareNumericPaginate(nowIndex)
            $('html, body').animate({
                scrollTop: $(".content-area").offset().top - 100
            }, 1000);
        });

        $("body").on("click", "span[role=paginator]", function () {
            console.log('displayed value', parseInt($(this).html()));
            console.log('array Length', parseInt(arrayOfPostsArrays.length));
            nowShow = arrayOfPostsArrays[parseInt($(this).html()) - 1]
            newPostsContainer.html(nowShow)
            if (parseInt($(this).html()) === 1) {
                $("[target=Prev]").addClass('unClickable')
                $("[target=Next]").removeClass('unClickable')
            }
            else if (parseInt($(this).html()) === arrayOfPostsArrays.length) {
                $("[target=Next]").addClass('unClickable')
                $("[target=Prev]").removeClass('unClickable')
            } else {
                $("[target=Prev]").removeClass('unClickable')
                $("[target=Next]").removeClass('unClickable')
            }
            prpareNumericPaginate(parseInt($(this).html()) - 1)
            $('html, body').animate({
                scrollTop: $(".content-area").offset().top - 100
            }, 1000);
        })

        function prpareNumericPaginate(nowindex) {
            console.log('nowindex', nowindex);
            var numericPaginateContent = ''
            if (nowindex === 0 || nowindex === 1 || nowindex === 2) {
                var leftSpans = ['<span role="paginator">1</span>', '<span role="paginator">2</span>', '<span role="paginator">3</span>']
                leftSpans[nowindex] = leftSpans[nowindex].substring(0, 5) + ' class="active" ' + leftSpans[nowindex].substring(5)
                console.log('leftSpans[nowindex] => ', leftSpans[nowindex]);
                numericPaginateContent = leftSpans.join('') + '<span>...</span><span role="paginator">' + (arrayOfPostsArrays.length) + '</span>'
            } else if (nowindex === arrayOfPostsArrays.length - 3 || nowindex === arrayOfPostsArrays.length - 2 || nowindex === arrayOfPostsArrays.length - 1) {

                var rightSpans = ['<span role="paginator">' + (arrayOfPostsArrays.length - 2) + '</span>', '<span role="paginator">' + (arrayOfPostsArrays.length - 1) + '</span>', '<span role="paginator">' + (arrayOfPostsArrays.length) + '</span>']
                console.log('rightSpans[(arrayOfPostsArrays.length + 1) - nowindex] =>', nowindex - (arrayOfPostsArrays.length) + 3);
                rightSpans[nowindex - (arrayOfPostsArrays.length) + 3] = rightSpans[nowindex - (arrayOfPostsArrays.length) + 3].substring(0, 5) + ' class="active" ' + rightSpans[nowindex - (arrayOfPostsArrays.length) + 3].substring(5)
                numericPaginateContent = '<span role="paginator">1</span><span>...</span>' + rightSpans.join('')
            } else {
                numericPaginateContent = '<span role="paginator">1</span><span>...</span><span role="paginator">' + (nowindex) + '</span><span class="active"  role="paginator">' + (nowindex + 1) + '</span><span role="paginator">' + (nowindex + 2) + '</span><span>...</span><span  role="paginator">' + (arrayOfPostsArrays.length) + '</span>'
            }
            $('.numericPaginate').html(numericPaginateContent)
        }

        if ($('.comments-area').length) {
            $('.comments-area').remove();
        }

    });

}


function waitForElementToDisplay(selector, time) {
    var url = window.location.href;
    var origin = window.location.origin;
    // console.log(url, origin);
    if (url === origin + '/') {
        return;
    }
    if (document.getElementById(selector)) {
        console.log("Elements Found => ", document.getElementById(selector));
        element = document.getElementById(selector)
        setTimeout(() => {
            console.log(selector + ' created');
            $('#' + selector).multislider({
                interval: 2000,
                duration: 250,
                pauseAbove: 767
            });
            $('#' + selector).multislider('unPause')
        }, 2000);
        return;
    }
    else {
        console.log('Waiting!!');
        setTimeout(function () {
            waitForElementToDisplay(selector, time);
        }, time);
    }
}

waitForElementToDisplay('brandSlider', 500);

(function ($) { window.fnames = new Array(); window.ftypes = new Array(); fnames[0] = 'EMAIL'; ftypes[0] = 'email'; fnames[1] = 'FNAME'; ftypes[1] = 'text'; }(jQuery));
//var $mcj = jQuery.noConflict(true);


console.log('run_or_not => ', run_or_not);