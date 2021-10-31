"use strict";
function onchange1(){
    console.log(event.target.value);
    console.log(`changed ...`);
}
function fooking(){
    console.log(event.ctrlKey);
    if (event.ctrlKey) {
        alert(`salam sooton`)
    }
    else(
        alert(`siki girikh`)
    )
}
function over() {
    console.log(event);
    event.target.innerHTML="siavash"
}
function keydown1() {
    console.log(event);
}