"use strict";
// oop: static method/fields
class animal {
  static price = 58;
  constructor(value) {
    this.name = 'siavash';
    this.lastname = value;
    this.age = 28;
  }
  walk() {
    console.log('--- walking ---');
  }
  print() {
    console.log(animal.price);
  }
}

class Rabit extends animal{
  constructor(value1,value2) {
    super(value1);
    this.secendname = value2;
  }
  walk() {
    //call walk methode in animal
    super.walk();
    console.log('--- Jump ---');
  }
}
const Rabit1 = new Rabit('aghazadeh','30YA');
console.log(Rabit1);
Rabit1.print()


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