"use strict";
// work with class and style in DOM : ------------------------------------
const main = document.querySelector("main");
main.classList.add("main-color","ahmad");
main.classList.remove("main-color");
console.log(main.classList.contains("main"));
main.classList.toggle("fuck");//if have this class ,remove it but if dont have , add it
console.log(main.classList);

//-------------- getComputedStyle & style-----------
const p = document.getElementById("par");
console.log(p.style);
p.style.backgroundColor = prompt("enter")
const p_style = getComputedStyle(p);
console.log(p_style.padding);

//------------------work with toggle--------------
const p2 = document.getElementById("par")
function getPlace() {
    p2.classList.toggle("sia");
}