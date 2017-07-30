
'use strict';

$(document).ready(function() {

    $('#fullpage').fullpage({
        sectionsColor:['','#f7f9ff','#b0adb5','#f7f9ff','#b0adb5'],
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

});
