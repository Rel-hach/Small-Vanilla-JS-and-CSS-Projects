'use strict'

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const cercle = document.querySelectorAll('.cercle');
const progress = document.querySelector('.progress-line-blue');

let w = Number (progress.style.width);

let enableButton = (button) => {
    button.style.backgroundColor = 'rgb(44, 157, 194)';
    button.style.cursor = 'pointer'; 
    button.disabled = false; // because it is not a class
    // button.classList.remove('disabled'); 
}

let disableButton = (button) => {
    button.style.backgroundColor = 'lightgray';
    button.disabled = true;
    button.style.cursor = 'not-allowed';
}

prevButton.addEventListener('click', () => {
    
    cercle[w / 33].style.borderColor = 'rgb(209, 204, 204)';
    
    if (w >= 33) w -= 33;

    progress.style.width = w + '%';

    if (w < 99)
        enableButton(nextButton);

    if (w === 0)
        disableButton(prevButton);
});

nextButton.addEventListener('click', () => {
    
    if (w < 99) w += 33;
    
    cercle[w / 33].style.borderColor = 'rgb(22, 105, 248)';
    progress.style.width = w + '%';
    
    if (w > 0)
        enableButton(prevButton);
    
    if (w === 99)
        disableButton(nextButton);
});