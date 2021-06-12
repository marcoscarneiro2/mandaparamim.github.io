import card from './scripts/card.js';
import dolar from './scripts/dolar.js';
import menu from './scripts/menu.js';
card();
dolar();
menu();
const carrousel = document.querySelector(".glider")

new Glider(carrousel, {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    scrollLock: true,
    duration: .3,
    autoplay: true,
    dots: document.querySelector('.dots'),
    arrows: {
        prev: document.querySelector('.glider-prev'),
        next: document.querySelector('.glider-next')
    },
})