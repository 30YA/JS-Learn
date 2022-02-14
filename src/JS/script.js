"use strict";
// modular programming (import,export) : ------------------------------------------------
class human{
    constructor(){
        this.name = 'siavash';
    }
    run(){
        console.log(this.name);
    }
}
const human1 = new human();
human1.run();