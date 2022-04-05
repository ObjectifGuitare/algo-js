/**
 * 
 * 
 */

let A = [-2, 2];
let B = [2, -2];

function calcDistance(A, B)
{
    return Math.sqrt(Math.pow((B[1] - A[1]), 2) + Math.pow((A[0] - B[0]), 2));
}

console.log(calcDistance(A, B));