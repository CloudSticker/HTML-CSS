


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