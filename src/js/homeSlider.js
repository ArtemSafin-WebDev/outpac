import { Swiper, Navigation, EffectFade, Pagination } from 'swiper';

Swiper.use([Navigation, EffectFade, Pagination]);

export default function homeSlider() {
    const elements = Array.from(document.querySelectorAll('.js-home-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            effect: 'fade',
            watchOverflow: true,
            touchStartPreventDefault: false,
            fadeEffect: {
                crossFade: true
            },
            pagination: {
                el: element.querySelector('.home__slider-pagination'),
                type: 'bullets',
                clickable: true
            }
        });
    });
}
