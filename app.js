import gameLoop from './utils.js';

const introDiv = document.getElementById('intro');
window.addEventListener('click', () =>{
    if (!introDiv.classList.contains('fade')) introDiv.classList.add('fade');  
});

gameLoop();