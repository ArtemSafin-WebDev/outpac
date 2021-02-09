export default function navDropdown() {
    const items = Array.from(document.querySelectorAll('.js-nav-dropdown-link'));
    const pageHeader = document.querySelector('.page-header');
    const dropdown = document.querySelector('.page-header__nav-dropdown');
    const pageHeaderNav = document.querySelector('.page-header__nav');
    const categoriesLayers = Array.from(document.querySelectorAll('.page-header__nav-dropdown-categories-layer'));
    const simpleNavItems = Array.from(document.querySelectorAll('.page-header__nav-list-item:not(.js-nav-dropdown-link)'));
    const backLinks = Array.from(document.querySelectorAll('.js-nav-dropdown-back'))

    if (!pageHeader || !dropdown) return;

    items.forEach(item => {
        item.addEventListener('mouseenter', () => {
            pageHeader.classList.add('catalog-menu-open');
            const links = Array.from(document.querySelectorAll('.page-header__nav-link'));
            const link = item.querySelector('.page-header__nav-link');

            links.forEach(link => link.classList.remove('active'));
            link.classList.add('active');
            dropdown.classList.add('active');

            const category = link.getAttribute('data-category');

            categoriesLayers.forEach(layer => layer.classList.remove('active'));
            const activeLayer = categoriesLayers.find(layer => layer.getAttribute('data-category') === category);

            if (!activeLayer) {
                console.warn('No active layer found for category', category);
                return;
            }

            activeLayer.classList.add('active');
        });

        

        const closeDropdown = () => {
            pageHeader.classList.remove('catalog-menu-open');
            const link = item.querySelector('.page-header__nav-link');
            link.classList.remove('active');
            dropdown.classList.remove('active');
            categoriesLayers.forEach(layer => layer.classList.remove('active'));
        };

        pageHeaderNav.addEventListener('mouseleave', closeDropdown);

        simpleNavItems.forEach(item => {
            item.addEventListener('mouseenter', closeDropdown);
        });

        backLinks.forEach(link => {
            link.addEventListener('click', event => {
                event.preventDefault();
                closeDropdown();
            })
        })
    });
}
