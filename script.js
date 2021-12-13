"use strict";
// work with local Storage & Session Storage : ----------------------------------
localStorage.setItem("name","siavash aghazadeh");
const obj = {
  name: "siavash",
  age: 22
}
localStorage.setItem("obj", JSON.stringify(obj));
console.log(JSON.parse(localStorage.getItem("obj")));
localStorage.removeItem("name");
localStorage.clear();