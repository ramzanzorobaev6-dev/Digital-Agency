//--- Бургер меню

const toggle = document.getElementById('burger-toggle');
const links = document.querySelectorAll('.navigation__link');

links.forEach(link => {
    link.addEventListener('click', () => {
        toggle.checked = false;
    });
});