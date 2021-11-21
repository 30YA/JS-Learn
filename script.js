"use strict";
// filter of products project : ------------------------------------

const inp = document.getElementById("txt");
const myDiv = document.getElementById("myDiv");
let txtvalue = '';
const products = [
    {title: 'javascript course'},
    {title: 'React Js course'},
    {title: 'Html & css course'},
    {title: 'Flex & Grid course'},
]
function filterProducts(pro,txv) {
    myDiv.innerHTML = "";
    const filter = pro.filter(item => {
        return item.title.toLowerCase().includes(txv.toLowerCase());
    })
    filter.forEach(element => {
        const p = document.createElement("p");
        p.classList = "par";
        p.textContent = element.title;
        myDiv.prepend(p);
    });
}
inp.addEventListener("input", (val) => {
    txtvalue = val.target.value;
    filterProducts(products,txtvalue);
})
filterProducts(products,txtvalue);