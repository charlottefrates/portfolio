
'use strict';

$(document).ready(function() {

    $('#fullpage').fullpage({
        sectionsColor:['','#f7f9ff','#b0adb5','#f7f9ff','#b0adb5'],
        anchors: ['home', 'portfolio', 'about','skills', 'contact'],
        menu: '#navigation'
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
