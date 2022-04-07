/**
 * calculate the surface of a rectangle
 * @param {integer} w - width of rectangle
 * @param {integer} l - length of the rectangle
 * @returns {integer} - multi of w and l
 */

function calcSurface(w, l)
{
    return w * l;
}

let w = new Number(prompt("enter width"));
let l = new Number(prompt("enter length"));

console.log(calcSurface(w,l));