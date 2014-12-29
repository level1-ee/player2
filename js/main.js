/**
 * Fadein-fadeout loop
 */

(function($) {
    var default_config = {
        fadeIn: 3000,
        stay: 3000,
        fadeOut: 3000
    };

    function fade(index, $elements, config) {
        $elements.eq(index)
          .fadeIn(config.fadeIn)
          .delay(config.stay)
          .fadeOut(config.fadeOut, function() {
              fade((index + 1) % $elements.length, $elements, config);
          });
    }

    $.fn.fadeLoop = function(config) {
        fade(0, this, $.extend({}, default_config, config));
        return this;
    };

}(jQuery));

jQuery(document).ready(function($) {

  // $('.hero-block__list > li').fadeLoop({fadeIn: 500, stay: 2000, fadeOut: 1200});






  $('.js-open-video').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade'
  });

// slidr.create('quotes-slider', {
//   after: function(e) {  },
//   before: function(e) {  },
//   breadcrumbs: true,
//   controls: 'border',
//   direction: 'horizontal',
//   fade: true,
//   keyboard: true,
//   overflow: true,
//   pause: false,
//   theme: '#fff',
//   timing: { 'cube': '0.5s ease-in' },
//   touch: true,
//   transition: 'cube'
// }).start();




  $("#quotes-slider").owlCarousel({

      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem: true,
      autoHeight: true,
      navigationText: ["Eelmine","Järgmine"]

      // "singleItem:true" is a shortcut for:
      // items : 1,
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false

  });



slidr.create("hero-block-list", {
  transition: "cube",
  controls: "none"
}).add("v", ["one", "two", "three", "four", "five", "one"]).auto(1200, "up")



/* particlesJS('dom-id', params);
/* @dom-id : set the html tag id [string, optional, default value : particles-js]
/* @params: set the params [object, optional, default values : check particles.js] */

/* config dom id (optional) + config particles params */
particlesJS('particles-js', {
  particles: {
    color: '#FF2842',
    shape: 'circle', // "circle", "edge" or "triangle"
    opacity: .5,
    size: 1.5,
    size_random: false,
    nb: 150,
    line_linked: {
      enable_auto: true,
      distance: 100,
      color: '#0D64FF',
      opacity: 1,
      width: 1,
      condensed_mode: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    },
    anim: {
      enable: true,
      speed: 0.2
    }
  },
  interactivity: {
    enable: true,
    mouse: {
      distance: 280
    },
    detect_on: 'window', // "canvas" or "window"
    mode: 'grab',
    line_linked: {
      opacity: .5
    },
    events: {
      onclick: {
        enable: true,
        mode: 'push', // "push" or "remove" (particles)
        nb: 1
      }
    }
  },
  /* Retina Display Support */
  retina_detect: true
});

});

$(".js-scroll-nav").click(function(e) {
    e.preventDefault();

    var scrollDest = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(scrollDest).offset().top
    }, 1000);
});