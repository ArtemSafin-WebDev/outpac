export default function navDropdown() {
    const items = Array.from(document.querySelectorAll('.js-nav-dropdown-link'));
    const pageHeader = document.querySelector('.page-header');

    if (!pageHeader) return;

    items.forEach(item => {
        item.addEventListener('mouseenter', () => {
            

            pageHeader.classList.add('catalog-menu-open');

            const links = Array.from(document.querySelectorAll('.page-header__nav-link'));
            const link = item.querySelector('.page-header__nav-link');
            links.forEach(link => link.classList.remove('active'));
            link.classList.add('active');

            const dropdowns = Array.from(document.querySelectorAll('.page-header__nav-dropdown'));
            const dropdown = item.querySelector('.page-header__nav-dropdown');

            dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
            dropdown.classList.add('active');
        });


        item.addEventListener('mouseleave', () => {
            pageHeader.classList.remove('catalog-menu-open');
            const link = item.querySelector('.page-header__nav-link');
            link.classList.remove('active');
            const dropdown = item.querySelector('.page-header__nav-dropdown');
            dropdown.classList.remove('active');
        })
    });
}
