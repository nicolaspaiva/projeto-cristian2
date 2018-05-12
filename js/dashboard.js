$(document).ready(function(){
    pulseBoia();
});

function pulseBoia(){    
    setInterval(function(){
        $('.oferta').css('background-size', 'auto 100%');
        setTimeout(function(){
            $('.oferta').css('background-size', 'auto 95%');
        }, 1000);        
    }, 3500);
}