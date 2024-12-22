'use strict';

const box = document.querySelector('.box');

const newHeight = 100;
const newWidth = 400;

// В операторе nullish coalescing (??) "ложными" значениями считаются только null и undefined

function changeParams(elem, h, w) {
    elem.style.height = `${h ?? 200}px`; 
    elem.style.width = `${w ?? 200}px`;
    elem.innerHTML = (h ?? 200) * (w ?? 200);
}

changeParams(box, newHeight, newWidth);

let userName; // undefined
let userKey; // undefined

            // error
console.log(userName && userKey ?? 'User');
