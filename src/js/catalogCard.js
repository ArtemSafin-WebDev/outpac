import { Swiper, Navigation } from 'swiper';
import { MOBILE_WIDTH } from './constants';

Swiper.use([Navigation]);

export default function catalogCard() {
    const elements = Array.from(document.querySelectorAll('.js-catalog-card-gallery'));

    const initializeCatalogCardGallery = element => {
        if (window.matchMedia(`(max-width: ${MOBILE_WIDTH}px)`).matches) {
            return;
        }
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            watchOverflow: true,
            loop: true,
            navigation: {
                nextEl: element.querySelector('.catalog__card-image-gallery-arrow--next'),
                prevEl: element.querySelector('.catalog__card-image-gallery-arrow--prev')
            }
        });
    };

    window.catalogCard = {};

    window.catalogCard.initializeCatalogCardGallery = initializeCatalogCardGallery;

    elements.forEach(element => {
        initializeCatalogCardGallery(element);
    });
}
