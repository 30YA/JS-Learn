"use strict";
// Try catch : Error handling : ------------------------------------
const obj = {
    name: "sia",
    last: "agh",
    get test(){
        console.log(`${this.name} ${this.last}`);
    },
    set test(value){
        if (typeof value != 'string') {
            throw new Error(" this is fucking wrong");
        }
        const sp = value.split(" ");
        if (sp.length < 2) {
            throw new Error(" siiick");
        }
        this.name = sp[0];
        this.last = sp[1];
    }
}
try {
    obj.test = "siavash";
    obj.test;
} catch (error) {
    console.log(error);
}