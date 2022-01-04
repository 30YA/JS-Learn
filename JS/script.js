"use strict";
// oop : __proto__ & prototype & (privet , public)
const animal = {
  run: true,
  walk(){
    console.log('palasht');
  }
}
const shir = {
  __proto__: animal,
  jump: true
}
// console.log(shir);
//-----------------------------------
function testFunc() {
  console.log('ahmagh');
}
function cat() {
  this.name = "catty";
  let lastname = "ali"
}
cat.prototype = animal;
cat.prototype.testFunc = testFunc;

const cat1 = new cat();
console.log(cat1);




//--------------------------------------
// let products = GetSavedProducts();
// creatProductDOM(products);

// const form = document.querySelector('.myForm');
// form.addEventListener('submit',(e) => {
//   e.preventDefault();
//   let inputValue = e.target.input1.value;
//   e.target.input1.value = '';
//   //add Products To DOM :
//   addProducts(inputValue);
// })
// -------------------------------------------------------
//checkbox
//--------------------------------------------------------
// const checkbox = document.querySelector('.check');
// checkbox.addEventListener('change', (e) => {
//   renderProducts(products,filterVal,e.target.checked);
// })
// -------------------------------------------------------
//search
//--------------------------------------------------------
// const search = document.getElementById('search');
// search.addEventListener('input',(e) => {
//   filterVal.inputVal = e.target.value;
//   renderProducts(products,filterVal);
// })
// -------------------------------------------------------
// const select = document.getElementById('select');
// select.addEventListener('change',(e) => {
//   filterVal.selectVal = e.target.value;
//   renderProducts(products,filterVal);
// });
//---------------------------------------------------------
