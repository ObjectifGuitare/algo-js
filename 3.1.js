let array = [100, 101, 102];
let result = 0;
let i = 0;

for (let n of array)
    result += array[i++];

console.log(result);