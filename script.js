"use strict";
// : ----------------------------------
const products = [
  {title: "booke1", ava: false},
  {title: "booke2", ava: true},
  {title: "booke3", ava: false},
  {title: "booke4", ava: false},
]
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
  addProducts(inputValue);
})
//add Products To DOM :
function addProducts(value) {
  document.querySelector('.products').textContent = '';
  const items = {title:`${value}`, ava: true};
  //Error handeling
  if (items.title !== '') {
    products.push(items);
  }else{
    throw new Error('you Did not enter value');
  }
  //add new products to DOM : 
  products.forEach((items) => {
    const pTag = document.createElement('p');
    pTag.classList.add('par');
    pTag.textContent = items.title;
    document.querySelector('.products').append(pTag);
  })
}
// -------------------------------------------------------
//search
//--------------------------------------------------------
let filterVal = {
  inputVal: '',
  checkbox: true
};
const search = document.getElementById('search');
search.addEventListener('input',(e) => {
  filterVal.inputVal = e.target.value;
  renderProducts(products,filterVal);
})
function renderProducts(products,filterVal,checkbox) {
  let filteredItem = products.filter( item => {
    return item.title.toLowerCase().includes(filterVal.inputVal.toLowerCase());
  })
  if (checkbox == true) {
    filteredItem = filteredItem.filter( item => {
      return item.ava == true;
    })
  }
  document.querySelector('.products').innerHTML = '';
  filteredItem.forEach((items) => {
    const pTag = document.createElement('p');
    pTag.classList.add('par');
    pTag.textContent = items.title;
    document.querySelector('.products').append(pTag);
  })
}
// -------------------------------------------------------
//checkbox
//--------------------------------------------------------
const checkbox = document.querySelector('.check');
checkbox.addEventListener('change', (e) => {
  renderProducts(products,filterVal,e.target.checked);
})