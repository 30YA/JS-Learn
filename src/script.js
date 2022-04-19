"use strict";
import "./style/style.css";
// ===============================================
const userInput = document.querySelector(".username");
const passInput = document.querySelector(".password");
const userAlert = document.querySelector(".useralert");
const passAlert = document.querySelector(".passalert");
const button = document.querySelector(".button");
const succses = document.querySelector(".succses");
// const everythingOK = true;
console.log(userInput, passInput, userAlert, passAlert, button, succses);

button.addEventListener("click", validation);
function validation() {
  userAlert.innerHTML = "";
  passAlert.innerHTML = "";
  userinputFN();
  passinputFN();
  // ==========================
  addINPUTListener();
}
function addINPUTListener() {
  userInput.addEventListener("input", () => {userinputFN();});
  passInput.addEventListener("input", () => {passinputFN();});
}
function userinputFN() {
  if (userInput.value.length === 0) {
    userAlert.innerHTML = "Emty";
  } else if (
    !userInput.value.includes("@") ||
    !userInput.value.includes(".com")
  ) {
    userAlert.innerHTML = "Pleas Enter Valid Email";
  } else {
    userAlert.innerHTML = "";
  }
}
function passinputFN() {
  if (passInput.value.length === 0) {
    passAlert.innerHTML = "Emty";
  } else if (
    !passInput.value.match(/[a-z]/) ||
    !passInput.value.match(/[A-Z]/) ||
    !passInput.value.match(/[0-9]/)
  ) {
    passAlert.innerHTML = "must use upper & lower & number";
  } else if (passInput.value.length < 8) {
    passAlert.innerHTML = "must 8 char";
  } else {
    passAlert.innerHTML = "";
  }
}