const hamburgerIcon = document.getElementById('hamburguer-icon');
const hamburgerMenu = document.getElementById('hamburguer');

hamburgerIcon.addEventListener('click', () => {
    hamburgerIcon.classList.toggle('open');
    hamburgerMenu.classList.toggle('open');
});