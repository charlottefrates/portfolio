
'use strict';
$(document).ready(function() {

    $('#fullpage').fullpage({
        anchors: ['home', 'portfolio', 'about','skills', 'contact'],
        menu: '#navigation'
    });
    /*============================================
    Skills
    ==============================================*/
    jQuery('.skillbar').each(function(){
     jQuery(this).find('.skillbar-bar').animate({
          width:jQuery(this).attr('data-percent')
     },8000);
    });

});
