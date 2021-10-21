"use strict";
// destructure in objects :
const obj = {
    name: "siavash",
    age: 19,
    username: "30YA",
    address: {
        street: "valfajr",
        city: "karaj"
    },
    marks: {
        math: 15,
        history: 20
    }
}
const {name,age,address:{street}} = obj;
const {city} = obj.address
console.log(street);

// destructure in array :
const arr = [
    "sia",
    24,
    "agh"
];
const [name1,age1,family1] = arr;
console.log(age1);