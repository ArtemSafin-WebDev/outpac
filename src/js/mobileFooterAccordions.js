import { MOBILE_WIDTH } from './constants';
import gsap from 'gsap';

export default function mobileFooterAccordions() {
    if (!window.matchMedia(`(max-width: ${MOBILE_WIDTH}px)`).matches) {
        return;
    }

    const SPEED = 0.5;

    const openAccordion = element => {
        gsap.to(element, {
            height: 'auto',
            duration: SPEED
        });
    };
    const closeAccordion = element => {
        gsap.to(element, {
            height: 0,
            duration: SPEED
        });
    };

    const elements = Array.from(document.querySelectorAll('.page-footer__accordion'));

    elements.forEach(element => {
        const btn = element.querySelector('.page-footer__accordion-btn');
        const content = element.querySelector('.page-footer__accordion-content');

        btn.addEventListener('click', event => {
            event.preventDefault();

            if (element.classList.contains('active')) {
                closeAccordion(content);
            } else {
                openAccordion(content);
            }
            element.classList.toggle('active');
        });
    });
}
