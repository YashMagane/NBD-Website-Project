const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');

const previous = document.querySelector('#previous');
const next = document.querySelector('#next');

let counter = 1;
const size = images[0].clientWidth;

slides.style.tranform = 'translateX(' + (-size * counter) + 'px)';

next.addEventListener('click' ,()=>{
    if (counter >= images.length - 1) return;
    slides.style.transition = "transform 0.4s ease-in-out"
    counter++;
    slides.style.tranform = 'translateX(' + (-size * counter) + 'px)';



});

previous.addEventListener('click' ,()=>{
    if (counter <= 0) return;
    slides.style.transition = "transform 0.4s ease-in-out"
    counter--;
    slides.style.tranform = 'translateX(' + (-size * counter) + 'px)';



});

slides.addEventListener('transitionend', ()=>{
    if (images[counter].id === 'last'){

        slides.style.tranform = "none";
        counter = images.length -2;
        slides.style.tranform = 'translateX(' + (-size * counter) + 'px)';

    }



});

slides.addEventListener('transitionend', ()=>{
    if (images[counter].id === 'first'){

        slides.style.tranform = "none";
        counter = images.length -counter;
        slides.style.tranform = 'translateX(' + (-size * counter) + 'px)';

    }



});