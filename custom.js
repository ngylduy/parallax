 'use strict';
$(window).load(function () {
 
   
    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene);
   
         
    
}); 



$(document).ready(function () {
    
    // HOME TYPED JS
    var typelement = $('.element');
    if (typelement.length) {
        typelement.each(function () {
            $(this).typed({
                strings: [$(this).data('text1'), $(this).data('text2'), $(this).data('text3')]
                , loop: $(this).data('loop') ? $(this).data('loop') : false
                , backDelay: $(this).data('backdelay') ? $(this).data('backdelay') : 2000
                , typeSpeed: 10
            , });
        });
    }
    
    
    var wind = $(window)
    function footsize() {
        if ($('footer').height() < wind.height()) {
            $('body').css({
                "padding-bottom": $('footer').height() + "px"
            });
             
        }
       
    }
 
  
    
    if ($('.home').length) {
        function centerInit() {
            var hometext = $('.home')
            hometext.css({
                "height": wind.height() + 70 + "px"
            });
        }
        centerInit();
        wind.resize(centerInit);
    }
     
  
    
}); 

