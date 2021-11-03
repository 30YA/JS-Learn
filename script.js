"use strict";
function timer(a) {
    console.log(a);
    console.log(new Date());
}
// -------------------------------------------------
// ------------------setTimeout---------------------
// -------------------------------------------------
// let timerid = setTimeout(timer,2000,"siavash");
// clearTimeout(timerid);
// ------------------------
// let timerid = setTimeout((a) => {
//     a = "sia";
//     console.log(a);
//     console.log(new Date());
// }, 2000);
// -------------------------------------------------
// ------------------setInterval--------------------
// -------------------------------------------------
// let interval = setInterval(timer,2000,"amir");
// clearInterval(interval);
// ------------------------
// let interval = setInterval((a) => {
//     a = "sia";
//     console.log(a);
//     console.log(new Date()); 
// }, 2000);
// setTimeout(() => {
//     clearInterval(interval);
// }, 6000);
// -------------------------------------------------
// ---------------Nested setTimeout-----------------
// -------------------------------------------------
// setTimeout(function run() {
//     console.log("siavash");
//     setTimeout(run,1000);
// },1000);