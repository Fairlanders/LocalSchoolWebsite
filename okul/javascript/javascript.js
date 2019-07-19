

$(window).scroll(function () {
  if ($(window).scrollTop() >= 100) { // this refers to window
    document.getElementById("navbar").style.background = "#00ACC8";
  } else {
    document.getElementById("navbar").style.background = "transparent";
  }
});



var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-120px";
  }
  prevScrollpos = currentScrollPos;
};


/* global jQuery, PhotoSwipe, PhotoSwipeUI_Default, console */

(function ($) {

  // Init empty gallery array
  var container = [];

  // Loop over gallery items and push it to the array
  $('#gallery').find('figure').each(function () {
    var $link = $(this).find('a'),
      item = {
        src: $link.attr('href'),
        w: $link.data('width'),
        h: $link.data('height'),
        title: $link.data('caption')
      };
    container.push(item);
  });

  // Define click event on gallery item
  $('.gallery-anchor').click(function (event) {

    // Prevent location change
    event.preventDefault();

    // Define object and gallery options
    var $pswp = $('.pswp')[0],
      options = {
        index: $(this).parent('figure').index(),
        bgOpacity: 0.85,
        showHideOpacity: true
      };

    // Initialize PhotoSwipe
    var gallery = new PhotoSwipe($pswp, PhotoSwipeUI_Default, container, options);
    gallery.init();
  });

}(jQuery));

function makeVisible() {
  $(".marked").toggleClass("hidden");
  if (!($(".marked").hasClass("hidden"))) {
    $(".btn").text("Daha Az");

  } else {
    $(".btn").text("Daha Fazla");
  }
}

$(document).ready(function () {
  $('#nav-icon2').click(function () {
    $(this).toggleClass('open');
  });
});

function openNav() {
  $("nav").toggleClass("navResponsive")
}

function closeNav() {
  $('#nav-icon2').toggleClass('open')
  $("nav").toggleClass("navResponsive")
}

$(window).scroll(function () {
  $("#first-div").css("opacity", 1 - $(window).scrollTop() / 900);
});

const targets = document.querySelectorAll('img');

const lazyLoad = target => {
  const io = new IntersectionObserver((entries, observer) => {
    console.log(entries)
    entries.forEach(entry => {

      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute('data-lazy');

        img.setAttribute('src', src);

        observer.disconnect();
      }
    });
  });

  io.observe(target)
};

targets.forEach(lazyLoad);