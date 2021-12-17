"use strict";
// : ----------------------------------
let products = [];
const form = document.querySelector(".myForm");
form.addEventListener('submit', (event) => {
  event.preventDefault();
  let inputValue = event.target.input1.value;
  event.target.input1.value = '';
  addtoBody(inputValue);
  saveLocal(inputValue);
})
function addtoBody(value) {
  const pTag = document.createElement('p');
  pTag.textContent = value;
  pTag.classList = "par";
  document.querySelector('.products').append(pTag);
}
console.log();
//------------------------------------------------------------------------------------
function saveLocal(value) {
  const savedP = localStorage.getItem('pTags')?
  JSON.parse(localStorage.getItem('pTags')) : 
  [];
  savedP.push(value);
  localStorage.setItem('pTags',JSON.stringify(savedP));
}
window.addEventListener('load',loadLocal);
function loadLocal() {
  const savedP = localStorage.getItem('pTags')?
  JSON.parse(localStorage.getItem('pTags')) : 
  [];
  savedP.forEach( item => {
    const pTag = document.createElement('p');
    pTag.textContent = item
    pTag.classList.add("par");
    document.querySelector('.products').append(pTag);
  })
}
//------------------------------------------------------------------------------------
const searchBox = document.getElementById('search')
let searchText = '';
function filterItem(products,searchText) {
  const filteredItem = products.filter( item => {
    return item.textContent.toLowerCase().includes(searchText.toLowerCase());
  })
  document.querySelector('.siavash').innerHTML = '';
  filteredItem.forEach(e => {
    const pTag = document.createElement('p');
    pTag.textContent = e.textContent
    pTag.classList.add("par");
    document.querySelector('.siavash').append(pTag);
  });
}
searchBox.addEventListener('input', (item) => {
  products = [...document.querySelector('.products').children];
  searchText = item.target.value;
  filterItem(products,searchText);
})
//--------------------------------------------------------------------------------------
