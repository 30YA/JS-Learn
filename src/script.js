"use strict";
import "./style/style.css";
import "./style/custome.css";
// import picture from "./img/sia.jpg";
// document.querySelector(".imgg").src = picture;
// const siavashh = "my name is sia";
// console.log(siavashh);
const product = document.querySelector('.product');
function sia(product) {
    let introPosition = product.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.1;
    if (introPosition < screenPosition) {
        product.classList.add('product-show');
    }
}
window.addEventListener('scroll',() => {
    sia(product);
});