"use strict";
//------------------------------------
function GetSavedProducts() {
    return localStorage.getItem('products') ?
    JSON.parse(localStorage.getItem('products')) :
    [
      {title: "booke1", ava: false},
      {title: "booke2", ava: true},
      {title: "booke3", ava: false},
      {title: "booke4", ava: false},
    ];
}
function saveItems(products) {
    localStorage.setItem('products',JSON.stringify(products));
}
function addProducts(value) {
    document.querySelector('.products').textContent = '';
    const items = {title:`${value}`, ava: true};
    //Error handeling
    if (items.title !== '') {
      products.push(items);
      saveItems(products);
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
function renderProducts(products,filterVal,checkbox) {
    let filteredItem = products.filter( item => {
      return item.title.toLowerCase().includes(filterVal.inputVal.toLowerCase());
    })
    if (checkbox == true) {
      filteredItem = filteredItem.filter( item => {
        return item.ava == true;
      })
    }
    creatProductDOM(filteredItem)
  }
function creatProductDOM(filteredItem) {
    document.querySelector('.products').innerHTML = '';
    filteredItem.forEach((items) => {
      const pTag = document.createElement('p');
      pTag.classList.add('par');
      pTag.textContent = items.title;
      document.querySelector('.products').append(pTag);
    }) 
}