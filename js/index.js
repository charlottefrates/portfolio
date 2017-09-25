'use strict';

var str = "Charlotte Frates"
var splitstr = str.split('');
var timeInterval = 150;
var i = 0;
/* ================================= RESPONSIVE NAVIGATION =================================*/

$('.handle').on('click', function(event) {
     $('nav ul').toggleClass('showing');
});

$('.show-list').click(function() {
     $('.wrapper').addClass('list-mode');
});

$('.hide-list').click(function() {
     $('.wrapper').removeClass('list-mode');
});


/* ================================= RESPONSIVE NAVIGATION =================================*/

$('.handle').on('click', function(event) {
     $('.navigator').toggleClass('showing');
});


$(document).ready(function() {


     $('#fullpage').fullpage({
          sectionsColor: ['#f9f9f7', '#f9f9f7', '#e3ecf5', '#f9f9f7', '#e3ecf5'],
          anchors: ['home', 'portfolio', 'about', 'skills', 'contact'],
          menu: '#menu',
          easing: 'easeInCirc',
          resize: false,
          scrollingSpeed: 1000,

          onLeave: function(index, nextIndex, direction) {
               $('#quote').removeClass('animated pulse');
               $('#1').removeClass('animated bounce');
               $('#2').removeClass('animated shake');
               $('#3').removeClass('animated shake');
               $('#4').removeClass('animated shake');
               $('#5').removeClass('animated rubberBand');
               $('#6').removeClass('animated rubberBand');
               $('#7').removeClass('animated rubberBand');
               $('#8').removeClass('animated pulse');
          },
          afterLoad: function(anchorLink, index) {
               var loadedSection = $(this);
               if (anchorLink == 'about') {
                    $('.entrance').addClass('animated fadeIn');
                    $('#quote').addClass('animated pulse');
               }
               if (anchorLink == 'skills') {
                    $('#1').addClass('animated bounce');
                    $('#2').addClass('animated shake');
                    $('#3').addClass('animated shake');
                    $('#4').addClass('animated shake');
                    $('#5').addClass('animated rubberBand');
                    $('#6').addClass('animated rubberBand');
                    $('#7').addClass('animated rubberBand');
                    $('#8').addClass('animated pulse');

               }

          },
          afterRender: function() {
               $('#quote').addClass('animated pulse');
               $('#1').addClass('animated bounce');
               $('#2').addClass('animated shake');
               $('#3').addClass('animated shake');
               $('#4').addClass('animated shake');
               $('#5').addClass('animated rubberBand');
               $('#6').addClass('animated rubberBand');
               $('#7').addClass('animated rubberBand');
               $('#8').addClass('animated pulse');
          }

     });

     type();


});

/*============================================
Name Typing Animation
==============================================*/
function type() {
     if (i < splitstr.length) {
          $('.text').append(splitstr[i]);
          i++;
          setTimeout(function() {
               type();
          }, timeInterval);
     } else {

     }
}

/*============================================
Pyramid Hover effects
==============================================*/

$('#1').hover(
     function() {
          $('#atomtext').removeClass('hidden');
          $('#sublimetext').removeClass('hidden');
          $('#github').removeClass('hidden');
     },
     function() {
          $('#atomtext').addClass('hidden');
          $('#sublimetext').addClass('hidden');
          $('#github').addClass('hidden');
     }
);

$('#2').hover(
     function() {
          $('#javascript').removeClass('hidden');
          $('#html').removeClass('hidden');
          $('#css').removeClass('hidden');
     },
     function() {
          $('#javascript').addClass('hidden');
          $('#html').addClass('hidden');
          $('#css').addClass('hidden');
     }
);

$('#3').hover(
     function() {
          $('#jquery').removeClass('hidden');
          $('#bootstrap').removeClass('hidden');
     },
     function() {
          $('#jquery').addClass('hidden');
          $('#bootstrap').addClass('hidden');
     }
);

$('#4').hover(
     function() {
          $('#javascript2').removeClass('hidden');
     },
     function() {
          $('#javascript2').addClass('hidden');
     }
);

$('#5').hover(
     function() {
          $('#react').removeClass('hidden');
          $('#redux').removeClass('hidden');
          $('#node').removeClass('hidden');
          $('#mocha').removeClass('hidden');
          $('#travis').removeClass('hidden');
     },
     function() {
          $('#react').addClass('hidden');
          $('#redux').addClass('hidden');
          $('#node').addClass('hidden');
          $('#mocha').addClass('hidden');
          $('#travis').addClass('hidden');
     }
);

$('#6').hover(
     function() {
          $('#mongo').removeClass('hidden');
          $('#mongoose').removeClass('hidden');
     },
     function() {
          $('#mongo').addClass('hidden');
          $('#mongoose').addClass('hidden');
     }
);

$('#7').hover(
     function() {
          $('#npm').removeClass('hidden');
     },
     function() {
          $('#npm').addClass('hidden');
     }
);

$('#8').hover(
     function() {
          $('#heroku').removeClass('hidden');
          $('#netlify').removeClass('hidden');
     },
     function() {
          $('#heroku').addClass('hidden');
          $('#netlify').addClass('hidden');
     }
);
