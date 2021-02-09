import { MOBILE_WIDTH } from './constants';
import { lockScroll, unlockScroll } from './scrollBlocker';

export default function cartDropdown() {
    if (!window.matchMedia(`(max-width: ${MOBILE_WIDTH}px)`).matches) {
        return;
    }

    const btn = document.querySelector('.js-open-cart');
    const pageHeaderCart = document.querySelector('.page-header__cart')
    const dropdown = document.querySelector('.page-header__cart-dropdown');
    const closeCart = document.querySelector('.js-cart-close')

    if (!pageHeaderCart || !btn || !dropdown || !closeCart) return;
    let dropdownOpen = false;

    const openDropdown = () => {
        pageHeaderCart.classList.add('active');
        lockScroll(dropdown);
        dropdownOpen = true;
    }
    const closeDropdown = () => {
        pageHeaderCart.classList.remove('active');
        unlockScroll();
        dropdownOpen = false;
    }

    btn.addEventListener('click', event => {
        event.preventDefault();
        openDropdown();
    })

    closeCart.addEventListener('click', event => {
        event.preventDefault();
        closeDropdown();
    })
}
