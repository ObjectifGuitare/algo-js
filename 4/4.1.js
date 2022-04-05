//**
 * 
 * @param {*} w 
 * @param {*} l 
 * @returns 
 */

function calcSurface(w, l)
{
    return w * l;
}

let w = new Number(prompt("enter width"));
let l = new Number(prompt("enter length"));

console.log(calcSurface(w,l));