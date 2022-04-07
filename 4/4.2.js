/**
 * a function named `rand10()` that returns a random integer between 1 and 10.
 * @returns a random number between one and 10
 */ 
function rand10()
{
    return Math.floor(Math.random() * 10 + 1);
}

console.log(rand10());