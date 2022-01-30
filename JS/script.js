"use strict";
// fetch (Get Data): ------------------------------------------------
function getData() {
  fetch('https://jsonplaceholder.typicode.com/users',{method: "GET"})
    .then(respons => {
      return respons.json();
    })
    .then(data => console.log(data));
}
getData();
// fetch (POST Data): ------------------------------------------------
function postData() {
  const userData = {
    id:123,
    name: 'siavash',
    last: 'agh',
    email: 'siavash.agh1380@gmail.com'
  }
  fetch('https://jsonplaceholder.typicode.com/users',{
    method: "POST",
    body: JSON.stringify(userData),
    headers: {"content-Type": "application/json"},
  })
  .then(respons => {
    return respons.json();
  })
  .then(data => console.log(data));
}
postData();

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