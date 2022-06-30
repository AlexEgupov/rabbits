'use strict';

const squareBody = document.querySelector('.square-body');
const resetBtn = document.querySelector('.btn-reset');

let blocks = document.querySelectorAll('.block');
let nodes = Array.prototype.slice.call(squareBody.children);


squareBody.addEventListener('click', (e) => {

    blocks = document.querySelectorAll('.block');
    let block = e.target.closest('.block');
    let right = block.nextElementSibling;
    let left = block.previousElementSibling;
    let nextBlockId = nodes.indexOf(right);
    let prevBlockId = nodes.indexOf(left);
    let currBlockId = nodes.indexOf(block);

    const checkBlock = (next, nextId, x = 1) => {
        if (nextId < 0 || nextId > 24) {
            return;
        } else if (x == 1) {
            squareBody.insertBefore(block, next);
        } else if (x == 2) {
            squareBody.insertBefore(block, next.nextSibling);
        }

        blocks = document.querySelectorAll('.block');
        nodes = Array.prototype.slice.call(squareBody.children);
    };

    if (e.target.getAttribute('src') == 'img/arrow-left.svg') {
        checkBlock(left, prevBlockId);
    } else if (e.target.getAttribute('src') == 'img/arrow-right.svg') {
        checkBlock(right, nextBlockId, 2);
    } else if (e.target.getAttribute('src') == 'img/arrow-up.svg') {
        checkBlock(blocks[currBlockId - 5], currBlockId - 5);
    } else if (e.target.getAttribute('src') == 'img/arrow-down.svg') {
        currBlockId = nodes.indexOf(block);
        checkBlock(blocks[currBlockId + 5], currBlockId + 5, 2);
    }

});

const sort = () => {

    var itemsArray = [];
    let reset = blocks[0].parentNode;

    for (var i = 0; i < blocks.length; i++) {
        itemsArray.push(reset.removeChild(blocks[i]));
    }

    itemsArray.sort(function (nodeA, nodeB) {
        var textA = nodeA.querySelector('.block-number').textContent;
        var textB = nodeB.querySelector('.block-number').textContent;
        var numberA = parseInt(textA);
        var numberB = parseInt(textB);
        if (numberA < numberB) { return -1; }
        if (numberA > numberB) { return 1; }
        return 0;
    })
        .forEach(function (node) {
            reset.appendChild(node);
        });
};

resetBtn.addEventListener('click', sort);
