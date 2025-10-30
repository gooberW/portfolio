document.addEventListener('DOMContentLoaded', () => {
  const projectCols = document.querySelectorAll('.projects .row');

  projectCols.forEach((col, index) => {
    col.style.animationDelay = `${index * 0.3}s`;
    col.style.animationPlayState = 'running';
  });
});
