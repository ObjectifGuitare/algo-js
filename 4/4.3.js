/**
 * multiRand
 * @returns array
 */

function rand10()
{
    return Math.floor(Math.random() * 10 + 1);
}


function multiRand(n)
{
    let i = 0;
    let array = [];
    while (n--)
        array[i++] = rand10();
    return array;
}

let prompted = new Number(prompt("enter a number"));

console.log(multiRand(prompted));