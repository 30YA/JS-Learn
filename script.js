"use strict";
// work with Elements-Geography & scroll in DOM : ------------------------------------
const p = document.getElementById("par");
const circle = document.querySelector(".circle");
console.log(p.clientWidth);
console.log(p.scrollHeight);
function goto() {
    circle.style.top = p.offsetTop + "px";
}
console.log(document.body.offsetWidth);
/*
clientWidth
clientHeight
offsetWidth
offsetHeight
scrollHeight
scrollTop
offsetTop
offsetLeft
clientTop(border)
clientLeft(border)
*/
function scrolltoo() {
    // window.scrollTo(0,0);
    // window.scrollBy(0,10);
    // example3.scrollBy(0,5);
    // window.example2.scrollIntoView(true);
    // window.example2.scrollIntoView(false);
    // let num = prompt("enter :");
    // window['example'+num].scrollIntoView(false);
}