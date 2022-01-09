"use strict";
// Promise: multi .then
// khati
function create() {
  return new Promise((resolve,reject) => {
    setTimeout(function () {
      resolve(1)
    }, 1000);

  })
}

create()
  .then(result => {console.log(result); return result * 2})
  .then(result => {console.log(result); return result * 2})
  .then(result => {console.log(result); console.log('----------------------------------------');})

//------------------------------------------------------------------------
// movazi
function create() {
  return new Promise((resolve,reject) => {

    setTimeout(function () {
      resolve(1)
    }, 1000);

  })
}

create()
  .then(result => {console.log(result * 2)})

create()
  .then(result => {console.log(result * 5)})

create()
  .then(result => {console.log(result * 10)})
// function test() {
//   console.log('--siavash--');
// }
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