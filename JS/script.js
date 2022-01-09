"use strict";
// Promise.all

function create() {
  return Promise.all([
    new Promise((resolve,reject) => {setTimeout(() => {console.log(1); resolve()}, 100);}),
    new Promise((resolve,reject) => {setTimeout(() => {console.log(2); resolve()}, 2000);}),
    new Promise((resolve,reject) => {setTimeout(() => {console.log(3); resolve()}, 100);})
  ])
}

create()
  .then(result => test(), error => alert('oops'))

function test() {
  console.log('--siavash--');
}
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