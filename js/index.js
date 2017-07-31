
'use strict';

var str = "Charlotte Frates"
var splitstr = str.split('');
var timeInterval = 150;
var i = 0;


$(document).ready(function() {

    $('#fullpage').fullpage({
        sectionsColor:['#f9f9f7','#f7f9ff','#e3ecf5','#f9f9f7','#e3ecf5'],
        anchors: ['home', 'portfolio', 'about','skills', 'contact'],
        menu: '#navigation',
        onLeave: function(index, nextIndex, direction){
            $('.animation').removeClass('animated zoomInRight');
            $('.animation').removeClass('animated zoomInRight');
            $('#quote').removeClass('animated pulse');
        },
        afterLoad:function(anchorLink, index){
		var loadedSection = $(this);
    		if(anchorLink == 'contact'){
    			$('.animation').addClass('animated zoomInRight');
    		}
            if(anchorLink == 'about'){
    			$('.entrance').addClass('animated fadeIn');
                $('#quote').addClass('animated pulse');
    		}
        },
        afterRender: function(){
            $('.animation').addClass('animated zoomInRight');
            $('.animation').addClass('animated zoomInRight');
            $('#quote').addClass('animated pulse');
        }
    });

    /*============================================
    Skills
    ==============================================*/
    jQuery('.skillbar').each(function(){
     jQuery(this).find('.skillbar-bar').animate({
          width:jQuery(this).attr('data-percent')
     },2000);
    });


    type();

});

function type(){
  if(i<splitstr.length){
    $('.text').append(splitstr[i]);
    i++;
    setTimeout(function () {
      type();
    }, timeInterval);
  }else{

  }
}
