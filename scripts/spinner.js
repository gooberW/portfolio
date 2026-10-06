framesDir = 'frames/';
frameCount = 4;

window.addEventListener('load', () => {
    fillSpinner(frameCount);
});

function fillSpinner(frameCount) {
    const spinner = document.getElementById('spin');
    
    for (let i = 1; i <= frameCount; i++) {
        const frameDiv = document.createElement('div');
        frameDiv.classList.add('spin-frame');
        frameDiv.innerHTML = `<img src="${framesDir}frame${i}.png" alt="Frame ${i}" draggable="false">`;
        spinner.appendChild(frameDiv);
    }

    const firstFrame = spinner.querySelector('.spin-frame');
    firstFrame.classList.add('active');
}

