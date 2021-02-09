import polyfills from './polyfills';
import './lazyload';
import detectTouch from './detectTouch';
import homeSlider from './homeSlider';
import navDropdown from './navDropdown';
import customSelects from './customSelects';
import filters from './filters';
import catalogCard from './catalogCard';
import fixedHeader from './fixedHeader';
import tableOfSizes from './tableOfSizes';
import phoneMask from './phoneMask';
import validation from './validation';
import mobileFooterAccordions from './mobileFooterAccordions';
import mobileMenu from './mobileMenu';
import cartDropdown from './cartDropdown';

document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
    homeSlider();
    navDropdown();  
    customSelects();
    filters();
    catalogCard();
    fixedHeader();
    tableOfSizes();
    phoneMask();
    validation();
    mobileFooterAccordions();
    mobileMenu();
    cartDropdown();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    setTimeout(() => document.body.classList.add('animatable'), 300)
})
