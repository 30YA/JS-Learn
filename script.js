"use strict";
// : ----------------------------------
let products = GetSavedProducts();

products.forEach((items) => {
  const pTag = document.createElement('p');
  pTag.classList.add('par');
  pTag.textContent = items.title;
  document.querySelector('.products').append(pTag);
})
const form = document.querySelector('.myForm');
form.addEventListener('submit',(e) => {
  e.preventDefault();
  let inputValue = e.target.input1.value;
  e.target.input1.value = '';
  //add Products To DOM :
  addProducts(inputValue);
})
// -------------------------------------------------------
//checkbox
//--------------------------------------------------------
const checkbox = document.querySelector('.check');
checkbox.addEventListener('change', (e) => {
  renderProducts(products,filterVal,e.target.checked);
})
// -------------------------------------------------------
//search
//--------------------------------------------------------
let filterVal = {
  inputVal: ''
};
const search = document.getElementById('search');
search.addEventListener('input',(e) => {
  filterVal.inputVal = e.target.value;
  renderProducts(products,filterVal);
})
renderProducts(products,filterVal,checkbox);