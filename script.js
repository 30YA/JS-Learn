"use strict";
// This keyword :
const obj = {
  name: 'siavash',
  age: 20,
  faceList: ["eye","lip"],
  test: function () {
    console.log(this);
    this.faceList.forEach(val => {
      console.log(this);
    })
  }
}
obj.test();






















// let obj = {
//   color:"red",
//   opacity:12,
//   list:[12,13,14,15],
//   testfunc: function () {
//     this.list.forEach(function(val) {
//       console.log(this);
//     })
//   }
// }
// obj.testfunc();