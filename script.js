"use strict";
// rest operator : ------------------------------------

function test() {
    const arr = [...arguments];
    let r = arr.reduce((pre,val) => {return pre += val},0)
    console.log(r);
}
test(5,4,7,3);

function test(...argu) {
    let r = argu.reduce((pre,val) => {return pre + val},0);
    return r;
}
console.log(test(5,4,7,3));