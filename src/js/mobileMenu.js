import { MOBILE_WIDTH } from "./constants";
import { lockScroll, unlockScroll } from "./scrollBlocker";

export default function mobileMenu() {
    if (!window.matchMedia(`(max-width: ${MOBILE_WIDTH}px)`).matches) {
        return;
    }
    let menuOpen = false;
    const menu = document.querySelector('.page-header__mobile-menu');
    const innerMenu = document.querySelector('.page-header__mobile-menu-inner')
    const menuOpenBtn = document.querySelector('.page-header__burger')
    

    const openMenu = () => {
        lockScroll(innerMenu);
        document.body.classList.add('mobile-menu-open');
        menuOpen = true;
    }

    const closeMenu = () => {
        unlockScroll();
       
        document.body.classList.remove('mobile-menu-open');
        menuOpen = false;
    }

    menuOpenBtn.addEventListener('click', event => {
        event.preventDefault();

        if (!menuOpen) {
            openMenu();
        } else {
            closeMenu();
        }
    })
    
}