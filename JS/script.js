"use strict";
// oop : class & inheritance

class animal {
  //class fields :
  lastname = 'aghazadeh';
  //cunstructor :
  constructor() {
    this.name = 'siavash';
    this.age = 28;
  }
  //methodes :
  running() {
    console.log(this.lastname);
    console.log('---run---');
  }
}
const animal1 = new animal();
console.log(animal1);
setTimeout(animal1.running.bind(animal1),1000)
//-------------------------------inheritance---------------------
class Rabit extends animal{
  color = 'red';
  walk() {
    return '--- Jump ---';
  }
}
const Rabit1 = new Rabit();
console.log(Rabit1);



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
