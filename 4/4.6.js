function factorial(a)
{
    if (a < 0)
        return "error";
    if (a == 0)
        return 1;
    if (a > 1)
    {
        a *= factorial(a - 1);
    }
    return a;
}


// function recursive(a)
// {
//     let result = 1;
//     while(a > 1)
//     {
//         result *= a * (a - 1);
//         console.log(result);
//         a -= 2;
//     }
//     return result;
// }


console.log(factorial(-1));
