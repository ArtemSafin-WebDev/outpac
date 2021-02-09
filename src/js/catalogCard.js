import { Swiper, Navigation } from 'swiper';
import { MOBILE_WIDTH } from './constants';

Swiper.use([Navigation]);



export default function catalogCard() {
    if (window.matchMedia(`(max-width: ${MOBILE_WIDTH}px)`).matches) {
        return;
    }
    const elements = Array.from(document.querySelectorAll('.js-catalog-card-gallery'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            watchOverflow: true,
            loop: true,
            navigation: {
                nextEl: element.querySelector('.catalog__card-image-gallery-arrow--next'),
                prevEl: element.querySelector('.catalog__card-image-gallery-arrow--prev')
            }
        });
    });
}
