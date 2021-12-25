const productName = document.querySelector('.pName');
const productPrice = document.querySelector('.pPrice');

const products = GetSavedProducts();
const product = products.find(item => {
    return item.id === location.hash.substring('1');
})
productName.value = product.title;
productPrice.value = product.price;
// console.log(location.hash.substring('1'));
// console.log(products[2].id);

const reamove = document.getElementById('removebtn');
reamove.addEventListener('click', () => {
    // console.log(product.id);
    location.assign('./index.html');
    removeProducts(product.id);
})
productName.addEventListener('input',(e) => {
    product.title = e.target.value;
    saveItems(products);
})
productPrice.addEventListener('input',(e) => {
    product.price = e.target.value;
    saveItems(products);
})