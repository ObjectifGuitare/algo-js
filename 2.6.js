let day = prompt("type a number between 1 and 7");

while((day < 1) || (day > 7))
    day = prompt("type a number BETWEEN ONE AND SEVEN");

switch(day)
{
    case "1" :
        console.log("Monday");
        break;
    case "2" :
        console.log("Salı");
        break;
    case "3" :
        console.log("Mercoledì");
        break;
    case "4" :
        console.log("木曜日");
        break;
    case "5" :
        console.log("금요일");
        break;
    case "6" :
        console.log("šeštadienis");
        break;
    case "7" :
        console.log("zondag");
        break;
}