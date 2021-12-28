const productName = document.querySelector('.pName');
const productPrice = document.querySelector('.pPrice');
const calender = document.querySelector('.calender');

const products = GetSavedProducts();
const product = products.find(item => {
    return item.id === location.hash.substring('1');
})
productName.value = product.title;
productPrice.value = product.price;
calender.textContent = `اخرین ویرایش : ${moment(product.updated).locale('fa').fromNow()}`

const reamove = document.getElementById('removebtn');
reamove.addEventListener('click', () => {
    location.assign('./index.html');
    removeProducts(product.id);
})
productName.addEventListener('input',(e) => {
    product.title = e.target.value;
    product.updated = moment().valueOf();
    calender.textContent = `اخرین ویرایش : ${moment(product.updated).locale('fa').fromNow()}`
    saveItems(products);
})
productPrice.addEventListener('input',(e) => {
    product.price = e.target.value;
    product.updated = moment().valueOf();
    calender.textContent = `اخرین ویرایش : ${moment(product.updated).locale('fa').format("dddd, DD , MMMM , YYYY - h:mm:ss")}`
    saveItems(products);
})