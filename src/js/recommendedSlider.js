
import { Swiper, Navigation } from 'swiper';
import { MOBILE_WIDTH } from './constants';

Swiper.use([Navigation]);

export default function recommendedSlider() {
    if (window.matchMedia(`(max-width: ${MOBILE_WIDTH}px)`).matches) {
        return;
    }
    const elements = Array.from(document.querySelectorAll('.js-recommended-gallery'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            watchOverflow: true,
            loop: true,
            navigation: {
                nextEl: element.querySelector('.recommended__products-card-gallery-arrow--next'),
                prevEl: element.querySelector('.recommended__products-card-gallery-arrow--prev')
            }
        });
    });
}