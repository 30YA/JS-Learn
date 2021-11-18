"use strict";
// Getter & Setter : ------------------------------------
const obj = {
    name: "sia",
    last: "agh",
    get test(){
        console.log(`${this.name} ${this.last}`);
    },
    set test(value){
        const sp = value.split(" ");
        this.name = sp[0];
        this.last = sp[1];
    }
}
obj.test = "ali rin";
obj.test;