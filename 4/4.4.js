let learners = ["Gilles", "Ozcan", "Jamie", "Jason", "Jérémy", "Martin", "Rayane", "Rayhan", "Ricardo", "Steffanie", "Sébastien", "Tanguy", "Thibaud", "Zakaria"];

function randLength()
{
    return Math.floor(Math.random() * learners.length);
}

function checkUnique(stock, i)
{
    let j = 0;
    while(j < i)
        if (stock[j++] == stock[i])
            return false;
    return true;
}

function pickLearner(inputAr, n)
{
    let i = 0;
    let array = [];
    let stock = [];
    if (n === inputAr.length)
        return inputAr;
    if ((n < 1) || (n >= inputAr.length))
        return array;
    while (n)
    {
        stock[i] = randLength();
        if (checkUnique(stock, i))
        {
            array[i] = inputAr[stock[i++]];
            n--;
        }
    }

    return array;
}

console.log(pickLearner(learners, 11));