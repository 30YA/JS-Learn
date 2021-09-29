"use strict"
//---------------------------------------------1------------------
/*let fun = (question, yes, no) => 
confirm(question) ? 
yes() : no();

fun(
    "do you agree ?",
    () => alert("you agreed."),
    () => alert("fuck")
)*/
//---------------------------------------------2------------------
/*let sia = prompt("Enter cebab :");
let arr = sia.split("")
let result = arr.map((value,index) => {
    if (value == "-") {
        arr.splice(index,1);
        arr[index] = arr[index].toUpperCase();
    }
})
arr = arr.join("");
console.log(arr);*/
//---------------------------------------------3------------------
/*let array = [5, 3, 8, 1];
function filterRange (arr,a,b) {
    return arr.filter( item => item >= a && item <= b);
}
console.log(filterRange(array,1,6))
alert(array);*/
//---------------------------------------------4------------------
/*let array = [2 , 1 , -11 , 5]
array.sort((item1,item2) => item2 - item1)
console.log(array)
// a - b == +  -> (b,a)
// a - b == -  -> (a,b)
// a - b == 0  -> (a,b)
//----------------------
// b - a == +  -> (a,b)
// b - a == -  -> (b,a)
// b - a == 0  -> (b,a)*/
//---------------------------------------------5------------------
/*const arr = ["HTML", "JavaScript", "CSS"];
let sorted = (array) => array.sort();
console.log(`arr    : ${arr}`);
console.log(`sorted : ${sorted(arr)}`);*/
//---------------------------------------------6------------------
//---------------------------------------------7------------------
/*const john = {name: "john", age: 25};
const Pete = {name: "Pete", age: 30};
const Mary = {name: "Mary", age: 28};

let user = [john,Pete,Mary];

let name1 = user.reduce((acc,cur) => acc.concat(cur.name) ,[])
console.log(name1);*/
//---------------------------------------------8------------------
/*const john = {name: "john", age: 25};
const Pete = {name: "Pete", age: 30};
const Mary = {name: "Mary", age: 28};

let arr = [Pete, john, Mary];

function sortByAge (array) {
    return array.sort((a,b) => a.age - b.age)
};

sortByAge(arr);
alert(arr[0].name);
alert(arr[1].name);
alert(arr[2].name);*/
//---------------------------------------------9------------------
/*let arr = [1, 2, 3];
function shuffle (array){
    array.sort(() => Math.random() - 0.5 )
}
shuffle(arr);
console.log(arr);*/
//---------------------------------------------10-----------------
/*const users = [
    {id: "sia",age: 15,family: "agha"},
    {id: "ali",age: 25,family: "agha"},
    {id: "moji",age: 20,family: "agha"},
]
function groupByid(array){
    return array.reduce((acc,cur) => {
        acc[cur.id] = cur;
        return acc;
    } ,{})
}
let userByid = groupByid(users);
console.log(userByid)*/
//---------------------------------------------11-----------------
//اعداد اول
/*function isPrime(Num,array){
    for (let p = 10 ** (Num - 1); p < 10 ** Num ; p++) {
        let c = 0;
        for (let x = 1; x <= p; x++) {
            if (p % x == 0) {
                c++;
            }
        }
        if (c <= 2) {
            array.push(p);
        }
    }
}
let arr = []
let sum = 0;
isPrime(+prompt("enter a num"),arr);
for (let i = 0; i < arr.length; i++) {
    sum = arr[i] % 10;
    arr[i] - sum;
}*/
//------------------------------------------------