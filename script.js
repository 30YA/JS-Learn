"use strict";
// Factory function: ------------------------------------
function creatCircle(redius,redius2) {
  return {
    redius: redius,
    redius2,
    move: function () {
      console.log("move circle");
    },
    move2(){
      console.log("move2 circle");
    }
  }
}
console.log(creatCircle(1,5));
let circle2 = creatCircle(4,7);

// Constructor function: -------------------------------

function Circle(redius) {
  this.redius = redius;
  this.move = function () {
    console.log("move circle");
  }
}
let circle3 = new Circle(8);
console.log(circle3);