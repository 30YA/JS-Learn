"use strict";
// work with Attribute : ------------------------------------
const test = document.querySelector("table.table-class");
console.log(test);
console.log(test.id);
console.log(test.className);
console.log(test.getAttribute('id'));
test.setAttribute("id","table-10")
console.log(test.hasAttribute("class"));
test.removeAttribute("class");