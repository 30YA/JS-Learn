"use strict";
// enumrating object : ------------------------------------
const obj = {name: "sia", age: 20};

for(let keys in obj){
  console.log(keys,obj[keys]);
}

for(let keys of Object.values(obj)){
  console.log(keys);
}

for(let [keys,value] of Object.entries(obj)){
    console.log(`${keys} + ${value}`);
  }