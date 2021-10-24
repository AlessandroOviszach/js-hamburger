
const menu_icon = document.querySelector('.fa-bars');
const menu_close = document.querySelector('.fa-times');
const menu = document.querySelector('.hamburger-menu');

menu_icon.addEventListener('click', function() {
    menu.classList.toggle('active');
})

menu_close.addEventListener('click', function() {
    menu.classList.toggle('active');
})