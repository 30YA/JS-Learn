"use strict";
// work with creatElement $$ Document Fragment : ------------------------------------
const main1 = document.querySelector("main");
const newElementt = document.createTextNode("Hellow body");
const newElement = document.createElement("table");
newElement.id = "table-5";
newElement.className = "table";
newElement.innerHTML = "<h1>siavash</h1>";
// main1.append(newElement);
// main1.prepend(newElement);
// main1.after(newElement);
main1.before(newElement);
newElement.remove();
let newElement2 = newElement.cloneNode(true)
let newElement3 = newElement.cloneNode(false)
console.log(newElement2,newElement3);

//----------------------Fragment-----------------------------
const frag = document.createDocumentFragment();
frag.append(document.createElement("div"));
frag.append(document.createTextNode("Hellow Mother"));
document.body.append(frag);

//---------------------------------------------------
function makeList(where) {
  if (!(where in main1)) {
    return alert("siavash");
  }
  const newElement = document.createElement("table");
  newElement.id = "table-5";
  newElement.className = "table";
  main1[where](newElement);
}
function getPlace() {
  const userr = prompt("where :");
  makeList(userr);
}
