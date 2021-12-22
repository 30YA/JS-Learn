"use strict";
//------------------------------------
function GetSavedProducts() {
    return localStorage.getItem('products') ?
    JSON.parse(localStorage.getItem('products')) :
    [
      {id: uuidv4(), title: "booke1", ava: false},
      {id: uuidv4(), title: "booke2", ava: true},
      {id: uuidv4(), title: "booke3", ava: false},
      {id: uuidv4(), title: "booke4", ava: false},
    ];
}
function saveItems(products) {
    localStorage.setItem('products',JSON.stringify(products));
}
function addProducts(value) {
    document.querySelector('.products').textContent = '';
    const items = {
      id: `${uuidv4()}`,
      title:`${value}`,
      ava: true
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
      const pTag = document.createElement('p');
      const RMbutton = document.createElement('input');

      checkbox.setAttribute('type','checkbox');
      divTag.appendChild(checkbox);

      pTag.textContent = items.title;
      pTag.classList.add('par');
      divTag.appendChild(pTag);

      RMbutton.setAttribute('type','button');
      RMbutton.setAttribute('value','Reamove');
      RMbutton.classList.add('button');
      RMbutton.addEventListener('click', item => {
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
    const pTag = document.createElement('p');
    const RMbutton = document.createElement('input');

    checkbox.setAttribute('type','checkbox');
    divTag.appendChild(checkbox);

    pTag.textContent = items.title;
    pTag.classList.add('par');
    divTag.appendChild(pTag);

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