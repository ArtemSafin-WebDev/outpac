export default function filters() {
    const catalogFilters = document.querySelector('.js-catalog-filters');

    if (catalogFilters) {
        const btn = catalogFilters.querySelector('.catalog__filters-btn');
        const dropdown = catalogFilters.querySelector('.catalog__filters-dropdown');

        btn.addEventListener('click', event => {
            event.preventDefault();
            btn.classList.toggle('active');
            dropdown.classList.toggle('active');
        });


        document.addEventListener('click', event => {
            if (event.target.matches('.js-catalog-filters') || event.target.closest('.js-catalog-filters')) return;
            btn.classList.remove('active');
            dropdown.classList.remove('active');
        })
    }
}