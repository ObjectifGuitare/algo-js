let min = new Number(prompt("minmal value pls"));
let max = new Number(prompt("max value pls"));

if (min > max)
{
    console.log("sure bye")
    throw new Error();
}

let current = new Number(prompt("current value pls"));

if ((current >= min) && (current <= max))
    console.log("current is, in fact, in the fourchette de min et max");
else
    console.log("current est un chiffre random désolé");