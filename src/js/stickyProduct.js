import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function stickyProduct() {
    ScrollTrigger.matchMedia({
        '(min-width: 641px)': () => {

        }
    })
}