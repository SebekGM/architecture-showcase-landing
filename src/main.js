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


// FORM
const form = document.getElementById('contact-form');
const inputName = document.getElementById('input-name');
const inputLastname = document.getElementById('input-lastname');
const inputEmail = document.getElementById('input-email');
const inputPhone = document.getElementById('input-phone');
const inputMessage = document.getElementById('input-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameValue = inputName.value;
    const lastnameValue = inputLastname.value;
    const emailValue = inputEmail.value;
    const phoneValue = inputPhone.value;
    const messageValue = inputMessage.value;

    console.log(`Nowa wiadomość od: ${nameValue} ${lastnameValue}`);
    console.log(`Adres email: ${emailValue}`);
    console.log(`Numer telefonu: ${phoneValue}`);
    console.log(`----------------------------------------------`);
    console.log(`Treść wiadomości:`);
    console.log(messageValue);
})