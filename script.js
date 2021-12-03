"use strict";
// try and catch && Error handeling : ----------------------------------
const obj = {};
try {
    console.log(obj.test.sia);
} catch (error) {
    console.dir(error);
    alert("siavash");
}
//------------------------------------------
const array = [];
function randomnum() {
    if (array.length == 10) {
        throw new Error("out of range");
    }
    let rand = Math.floor(Math.random() * 10);
    if (array.includes(rand)) {
        console.log("get fuuuuuuuuuuuuuuuuck");
        return randomnum();
    }
    array.push(rand);
    return rand;
}
for (let x = 0; x < 155; x++) {
    console.log(randomnum());
}
console.log(array);