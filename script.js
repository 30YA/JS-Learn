"use strict";
const array = [12,85,50,1];
array.forEach(function(value) {
    console.log(value);
});
const f = array.filter(function(value) {
    return value <= 20;
})
const m = array.map(function(val) {
    return val + 2
})
const e = array.every(function(val) {
    return val >= 1;
})
const s = array.some(function(val) {
    return val > 60;
})
const i = array.indexOf(85);
console.log();