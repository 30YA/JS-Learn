"use strict";
// cloning objects : ------------------------------------
// with for loop
const obj1 = {
  name: "siavash",
  age: 24
}
const obj2 = {};
for(const key in obj1){
  obj2[key] = obj1[key];
}
obj2.age = 40
console.log(obj1);
console.log(obj2);
console.log("--------- with for in loop");

// with Assign ---------------------
const obj3 = Object.assign({},obj1);
obj3.age = 12;
console.log(obj1);
console.log(obj3);
console.log("--------- with object.assigne");

// with spread Operator ------------
const obj4 = {...obj1};
obj4.age = 12;
console.log(obj1);
console.log(obj4);
console.log("--------- with spread operator");