let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', function () {
    menu.classList.toggle('active');
});