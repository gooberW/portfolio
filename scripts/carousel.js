const carousel = document.querySelector('.carousel');
let isDown = false, startX, startScroll;

carousel.addEventListener('pointerdown', (e) => {
    if (e.pointerType !== 'mouse') return;
    isDown = true;
    startX = e.clientX;
    startScroll = carousel.scrollLeft;
    carousel.classList.add('dragging');
});

window.addEventListener('pointermove', (e) => {
    if (!isDown) return;
    carousel.scrollLeft = startScroll - (e.clientX - startX);
});

window.addEventListener('pointerup', () => {
    if (!isDown) return;
    isDown = false;
    carousel.classList.remove('dragging');
});