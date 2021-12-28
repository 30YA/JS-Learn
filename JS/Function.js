"use strict";
//------------------------------------
let filterVal = {
  inputVal: ''
};
function GetSavedProducts() {
    return localStorage.getItem('products') ?
    JSON.parse(localStorage.getItem('products')) :
    [];
}
function saveItems(products) {
    localStorage.setItem('products',JSON.stringify(products));
}
function addProducts(value) {
    document.querySelector('.products').textContent = '';
    const id = uuidv4();
    const time = moment().valueOf();
    const items = {
      id: id,
      title:`${value}`,
      ava: true,
      price: '',
      updated: time,
      created: time
    };
    //Error handeling
    if (items.title !== '') {
      products.push(items);
      saveItems(products);
    }else{
      throw new Error('you Did not enter value');
    }
    //add new products to DOM : 
    creatProductDOM(products)
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
    document.querySelector('.products').innerHTML = '';
    filteredItem.forEach((items) => {
      const divTag = document.createElement('div');
    const checkbox = document.createElement('input');
    const aTag = document.createElement('a');
    const RMbutton = document.createElement('input');

    checkbox.setAttribute('type','checkbox');
    checkbox.checked = !items.ava;
    checkbox.addEventListener('change',(e) => {
      existOrNot(items,e);
    })
    divTag.appendChild(checkbox);

    aTag.textContent = items.title;
    aTag.classList.add('par');
    aTag.setAttribute('href','./edit-product.html');
    divTag.appendChild(aTag);

    RMbutton.setAttribute('type','button');
    RMbutton.setAttribute('value','Reamove');
    RMbutton.classList.add('button');
    RMbutton.addEventListener('click', () => {
      removeProducts(items.id);
    })
    divTag.appendChild(RMbutton);

    document.querySelector('.products').append(divTag);
    })
  }
function creatProductDOM(products) {
  products.forEach((items) => {
    const divTag = document.createElement('div');
    const checkbox = document.createElement('input');
    const aTag = document.createElement('a');
    const RMbutton = document.createElement('input');

    checkbox.setAttribute('type','checkbox');
    checkbox.checked = !items.ava;
    checkbox.addEventListener('change',(e) => {
      existOrNot(items,e);
    })
    divTag.appendChild(checkbox);

    aTag.textContent = items.title;
    aTag.classList.add('par');
    aTag.setAttribute('href',`./edit-product.html#${items.id}`);
    divTag.appendChild(aTag);

    RMbutton.setAttribute('type','button');
    RMbutton.setAttribute('value','Reamove');
    RMbutton.classList.add('button');
    RMbutton.addEventListener('click', () => {
      removeProducts(items.id);
    })
    divTag.appendChild(RMbutton);

    document.querySelector('.products').append(divTag);
  })
}
// Reamove products --------------------------
function removeProducts(id) {
  const productIndex = products.findIndex( item => {
    return item.id === id;
  })
  products.splice(productIndex,1);
  saveItems(products);
  renderProducts(products,filterVal,checkbox);
}
// exist products --------------------------
function existOrNot(check,e) {
  check.ava = !e.target.checked;
  saveItems(products);
  renderProducts(products,filterVal,checkbox);
}