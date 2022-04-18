"use strict";
import "./style/style.css";
// ===============================================
const userInput = document.querySelector('.username');
const passInput = document.querySelector('.password');
const userAlert = document.querySelector('.useralert');
const passAlert = document.querySelector('.passalert');
const button = document.querySelector('.button');
const succses = document.querySelector('.succses');
// const everythingOK = true;
console.log(userInput,passInput,userAlert,passAlert,button,succses);


button.addEventListener('click',validation)
function validation() {
    userAlert.innerHTML = "";
    passAlert.innerHTML = "";
    // console.log(passInput.value.match(/[abcdefghijklmnopqrstuvwxyz]/));
    if (userInput.value.length === 0) {
        userAlert.innerHTML = "Emty";
    }else if (!userInput.value.includes('@') || !userInput.value.includes('.com')) {
        userAlert.innerHTML = "Pleas Enter Valid Email";
    }
    // ==========================
    if (passInput.value.length === 0) {
        passAlert.innerHTML = "Emty";
    }else if (!passInput.value.match(/[abcdefghijklmnopqrstuvwxyz]/) || !passInput.value.match(/[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/) || !passInput.value.match(/[0123456789]/)) {
        passAlert.innerHTML = "must use upper & lower & number";
    }else if (passInput.value.length < 8) {
        passAlert.innerHTML = "must 8 char";
    }
    inputsia();
}
function inputsia() {
    userInput.addEventListener('input',()=>{
        if (userInput.value.length === 0) {
            userAlert.innerHTML = "Emty";
        }else if (!userInput.value.includes('@') || !userInput.value.includes('.com')) {
            userAlert.innerHTML = "Pleas Enter Valid Email";
        }else{
            userAlert.innerHTML = "";
        }
    })
    passInput.addEventListener('input',()=>{
        if (passInput.value.length === 0) {
            passAlert.innerHTML = "Emty";
        }else if (!passInput.value.match(/[abcdefghijklmnopqrstuvwxyz]/) || !passInput.value.match(/[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/) || !passInput.value.match(/[0123456789]/)) {
            passAlert.innerHTML = "must use upper & lower & number";
        }else if (passInput.value.length < 8) {
            passAlert.innerHTML = "must 8 char";
        }else{
            passAlert.innerHTML = "";
        }
    })
}