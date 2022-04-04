let array = [100, 2, 596, 4, 5, 199, 6];

let min = array[0];
let max = array[0];

for (let n of array)
{
    if (min > n)
        min = n;
    if (max < n)
        max = n;
}

console.log("min: " + min + "\n" + "max: " + max);