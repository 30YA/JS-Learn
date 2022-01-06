"use strict";
// async-await
const products = [
  {id: 1, name: 'book1'},
  {id: 2, name: 'book2'},
  {id: 3, name: 'book3'},
]
function getProduct() {
    const sia = products.map(item => {
      return `id = ${item.id} , name = ${item.name}`;
    })
    console.log(sia);
}

function creatProduct() {
  return new Promise((resolve,reject) => {
    
    setTimeout(() => {
      products.push({
        id: 4,
        name: 'book4'
      });
      
      const error = false;
      if (!error) {
        resolve();
      }else{
        reject('Errrrrrrrror');
      }
    }, 3000);

  })
}

async function getData() {
  await creatProduct()
  getProduct();
}
getData();


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