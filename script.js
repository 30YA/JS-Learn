"use strict";
// work with DOM node : ------------------------------------

let test = document.querySelector('table');
console.log(test.nodeName);
console.log(test.tagName);
console.log(test.innerHTML = "<p>siavash</p>");
console.log(test.outerHTML = "<aside>sia</aside>");
console.log(test.outerHTML);
console.log(test.textContent);
test.hidden = false;

// const obj_test = {
//     name: "siavash",
//     age: 20,
//     city: "Karaj" 
// }
// function showUser(object) {
//     for(const key in object){
//         console.log(key,object[key]);
//     }
// }
// showUser(obj);
//---------------------------------------------------------