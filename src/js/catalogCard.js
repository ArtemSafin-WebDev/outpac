import { Swiper, Navigation } from 'swiper';

Swiper.use([Navigation]);

export default function catalogCard() {
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
