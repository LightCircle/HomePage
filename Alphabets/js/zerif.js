/* ================================
 ===  BACKGROUND SLIDER        ====
 ================================= */
$.vegas('slideshow', {
  delay: 7000,
  backgrounds: [
    {src: 'images/backgrounds/bg1.jpg', fade: 1000},
    {src: 'images/backgrounds/bg2.jpg', fade: 1000},
    {src: 'images/backgrounds/bg3.jpg', fade: 1000}
  ]
});


/* =================================
 LOADER
 =================================== */
// makes sure the whole site is loaded
jQuery(window).load(function () {
  // will first fade out the loading animation
  jQuery(".status").fadeOut();
  // will fade out the whole DIV that covers the website.
  jQuery(".preloader").delay(100).fadeOut("slow");
})


/* =================================
 ===  Bootstrap Fix              ====
 =================================== */
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style')
  msViewportStyle.appendChild(
    document.createTextNode(
      '@-ms-viewport{width:auto!important}'
    )
  )
  document.querySelector('head').appendChild(msViewportStyle)
}

/* =================================
 ===  STICKY NAV                 ====
 =================================== */

$(document).ready(function () {
  $('.main-nav-list').onePageNav({
    scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
    scrollOffset: 75, //Height of Navigation Bar
    filter: ':not(.external)'
  });

  // Sticky Header - http://jqueryfordesigners.com/fixed-floating-elements/         
  var top = $('#main-nav').offset().top - parseFloat($('#main-nav').css('margin-top').replace(/auto/, 0));

  $(window).scroll(function (event) {
    // what the y position of the scroll is
    var y = $(this).scrollTop();

    // whether that's below the form
    if (y >= top) {
      // if so, ad the fixed class
      $('#main-nav').addClass('fixed');
    } else {
      // otherwise remove it
      $('#main-nav').removeClass('fixed');
    }
  });

});


/*=================================
 ===  OWL CROUSEL               ====
 ===================================*/
$(document).ready(function () {
  var owl = $("#client-feedbacks");
  owl.owlCarousel({
    items: 3, //10 items above 1000px browser width
    itemsDesktop: [1000, 2], //5 items between 1000px and 901px
    itemsDesktopSmall: [900, 1], // betweem 900px and 601px
    itemsTablet: [600, 1], //2 items between 600 and 0
    itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
  });
});


/*=================================
 ===  SMOOTH SCROLL             ====
 =================================== */
var scrollAnimationTime = 1200,
  scrollAnimation = 'easeInOutExpo';
$('a.scrollto').bind('click.smoothscroll', function (event) {
  event.preventDefault();
  var target = this.hash;
  $('html, body').stop().animate({
    'scrollTop': $(target).offset().top
  }, scrollAnimationTime, scrollAnimation, function () {
    window.location.hash = target;
  });
});


/* ================================
 ===  PROJECT LOADING           ====
 ================================= */

jQuery(document).ready(function ($) {
  $('.more').on('click', function (event) {
    event.preventDefault();

    var href = $(this).attr('href') + ' .single-project',
      portfolioList = $('#portfolio-list'),
      content = $('#loaded-content');

    portfolioList.animate({'marginLeft': '-120%'}, {duration: 400, queue: false});
    portfolioList.fadeOut(400);
    setTimeout(function () {
      $('#loader').show();
    }, 400);
    setTimeout(function () {
      content.load(href, function () {
        $('#loaded-content meta').remove();
        $('#loader').hide();
        content.fadeIn(600);
        $('#back-button').fadeIn(600);
      });
    }, 800);

  });

  $('#back-button').on('click', function (event) {
    event.preventDefault();

    var portfolioList = $('#portfolio-list')
    content = $('#loaded-content');

    content.fadeOut(400);
    $('#back-button').fadeOut(400);
    setTimeout(function () {
      portfolioList.animate({'marginLeft': '0'}, {duration: 400, queue: false});
      portfolioList.fadeIn(600);
    }, 800);
  });
});

/* ================================
 ===  PARALLAX                  ====
 ================================= */
$(document).ready(function () {
  var $window = $(window);
  $('div[data-type="background"], header[data-type="background"], section[data-type="background"]').each(function () {
    var $bgobj = $(this);
    $(window).scroll(function () {
      var yPos = -($window.scrollTop() / $bgobj.data('speed'));
      var coords = '50% ' + yPos + 'px';
      $bgobj.css({
        backgroundPosition: coords
      });
    });
  });
});

/* ================================
 ===  KNOB                      ====
 ================================= */
$(function () {
  $(".skill1").knob({
    'max': 100,
    'width': 64,
    'readOnly': true,
    'inputColor': ' #FFFFFF ',
    'bgColor': ' #222222 ',
    'fgColor': ' #e96656 '
  });
  $(".skill2").knob({
    'max': 100,
    'width': 64,
    'readOnly': true,
    'inputColor': ' #FFFFFF ',
    'bgColor': ' #222222 ',
    'fgColor': ' #34d293 '
  });
  $(".skill3").knob({
    'max': 100,
    'width': 64,
    'readOnly': true,
    'inputColor': ' #FFFFFF ',
    'bgColor': ' #222222 ',
    'fgColor': ' #3ab0e2 '
  });
  $(".skill4").knob({
    'max': 100,
    'width': 64,
    'readOnly': true,
    'inputColor': ' #FFFFFF ',
    'bgColor': ' #222222 ',
    'fgColor': ' #E7AC44 '
  });
});

$(function () {
  $(".gb_send").click(function () {
    var name = $.trim($("#gb_name").val());
    var company = $.trim($("#gb_company").val());
    var phone = $.trim($("#gb_phone").val());
    var qqormail = $.trim($("#gb_qqormail").val());
    if (name == "" || company == "" || phone == "" || qqormail == "") {
      alert("请正确填写您的信息");
      return false;
    }
    var data = {
      data: {
        name: name
        , company: company
        , phone: phone
        , qqormail: qqormail
      }
    };
    $.ajax({
      url: "/gb_send",
      type: "POST",
      data: JSON.stringify(data),
      dataType: "json",
      contentType: "application/json",
      processData: false,
      success: function (result) {
        alert("提交成功，我们会尽快与您取得联系。");
      },
      error: function (err) {
        alert("提交失败");
      }
    });
    return false;
  });

});





