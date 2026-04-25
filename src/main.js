import './scss/main.scss';

// MOBILE MENU
const closeMenu = document.getElementById('close-menu');
const openMenu = document.getElementById('open-menu');
const mobileMenuContent = document.getElementById('mobile-menu-content');
const headerMobile = document.getElementById('header-mobile');

closeMenu.addEventListener('click', () => {
    mobileMenuContent.classList.add('hidden');
    openMenu.classList.remove('hidden');

    headerMobile.classList.remove('is-visible');
});

openMenu.addEventListener('click', () => {
    mobileMenuContent.classList.remove('hidden');
    openMenu.classList.add('hidden');

    headerMobile.classList.add('is-visible');
});