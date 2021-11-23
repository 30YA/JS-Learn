"use strict";
// number counter : ------------------------------------

const btn = document.querySelectorAll('.btn');
const num = document.querySelector('.par span');
btn.forEach(val => {
    val.addEventListener('click',item => {
        if (val.classList.contains("positive")) {
            num.textContent++;
        }else if (val.classList.contains("negative")) {
            num.textContent--;
        }else{
            num.textContent = 0;
        }
    })
})