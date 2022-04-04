let n = new Number(prompt("enter a number"));
let x = 0;

while (n)
{
    x += new Number(prompt("enter a new number (there is " + n + " time(s) remaining)"));
    n--;
}

console.log(x);