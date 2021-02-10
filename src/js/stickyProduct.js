import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function stickyProduct() {
    ScrollTrigger.matchMedia({
        '(min-width: 641px)': () => {
            ScrollTrigger.create({
                trigger: '.js-sticky-product-sidebar',
                start: 'bottom bottom',
                endTrigger: '.js-sticky-product-images',
                end: 'bottom bottom',
                pin: true,
                pinSpacing: true
            });
        }
    });
}
