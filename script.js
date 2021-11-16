"use strict";
// BoundingClient & ElementFromPoint in DOM : ------------------------------------
const p = document.getElementById("par");
const b = p.getBoundingClientRect();
console.log(b);
document.onmousemove = function () {
    const hoverElem = document.elementFromPoint(event.pageX,event.pageY);
    if (hoverElem.tagName !== "BODY") {
        console.log(hoverElem);
    }
}