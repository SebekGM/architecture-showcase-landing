import './scss/main.scss';

// MOBILE MENU
const closeMenu = document.getElementById('close-menu');
const openMenu = document.getElementById('open-menu');
const headerMobile = document.getElementById('header-mobile');

closeMenu.addEventListener('click', () => {
    headerMobile.classList.remove('is-visible');
});

openMenu.addEventListener('click', () => {
    headerMobile.classList.add('is-visible');
});