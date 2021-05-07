


let portal = document.getElementById('portal');
let stars = document.getElementById('stars');
let rick = document.getElementById('rick');
let text = document.getElementById('text');
let expl = document.getElementById('expl');
let mountains = document.getElementById('mountains');
let header = document.querySelector('header');

window.addEventListener('scroll', function (){
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    portal.style.top = value * 1.05 + 'px';
    mountains.style.top = value * 0.5 + 'px';
    rick.style.top = value * 0 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1 + 'px';
    expl.style.marginTop = value * 1 + 'px';
    header.style.top = value * 0.5 + 'px';
});


$(document).ready(function() {
    $('a.myLinkModal').click( function(event){
        event.preventDefault();
        $('#myOverlay').fadeIn(297, function(){
            $('#myModal')
                .css('display', 'block')
                .animate({opacity: 1}, 198);
        });
    });

    $('#myModal__close, #myOverlay').click( function(){
        $('#myModal').animate({opacity: 0}, 198,
            function(){
                $(this).css('display', 'none');
                $('#myOverlay').fadeOut(297);
            });
    });
});