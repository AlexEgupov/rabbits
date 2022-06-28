'use strict';

const squareBody = document.querySelector('.square-body');
const blockBtn = document.querySelectorAll('.block-btn');
const blocks = document.querySelectorAll('.block');

squareBody.addEventListener('click', (e) => {
    let block = e.target.closest('.block');
    let right = block.nextElementSibling;
    let left = block.previousElementSibling;
    let up;
    let down;

    if (e.target.getAttribute('src') == 'img/arrow-left.svg') {
        squareBody.insertBefore(block, left);
        console.log('left');
    } else if (e.target.getAttribute('src') == 'img/arrow-right.svg') {
        squareBody.insertBefore(block, right.nextSibling);
        console.log('right');
    } else if (e.target.getAttribute('src') == 'img/arrow-up.svg') {
        console.log('up');
    } else if (e.target.getAttribute('src') == 'img/arrow-down.svg') {
        console.log('down');
    }
});
