var menuButton = document.querySelector('.open');
var closeButton = document.querySelector('.close');
var mobileMenu = document.querySelector('.mobile-menu');

menuButton.addEventListener('click', function () {
    mobileMenu.style.display = 'block';
});

closeButton.addEventListener('click', function () {
    mobileMenu.style.display = 'none';
});