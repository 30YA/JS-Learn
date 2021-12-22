"use strict";
// Remove Items with their id in product's array
// make uuid: ----------------------------------
function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}
//--------------------------------------
let products = GetSavedProducts();
creatProductDOM(products);

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
// renderProducts(products,filterVal,checkbox);

// -------------------------------------------------------
// remove items
//--------------------------------------------------------
