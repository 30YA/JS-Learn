"use strict";
// filter of products project : ------------------------------------
const box = document.querySelector(".center .box");
const spans = document.querySelectorAll(".center .box2 .heading span");
const main = document.querySelector("body .main");
document.addEventListener('scroll',function (event) {
    let scrollOffset = window.pageYOffset;
    if (scrollOffset <= 500) {
        let p = 1 + (scrollOffset / 500 );
        box.style.transform = `scale(${p})`;
        box.style.opacity = 1;
        spans[0].style.transform = `translate(0,0)`
        spans[1].style.transform = `translate(0,0)`
    }
    if (scrollOffset > 450 && scrollOffset <= 550) {
        let op = 1 - (scrollOffset / 500);
        box.style.opacity = op;
    }
    else if (scrollOffset >= 500) {
        let ychanger = scrollOffset - 550;
        spans[0].style.transform = `translate(0,-${ychanger}px)`
        spans[1].style.transform = `translate(0,${ychanger}px)`
    }
    else if (scrollOffset >= 550) {
        main.style.transform = `translate(0,-100px)`
    }
})