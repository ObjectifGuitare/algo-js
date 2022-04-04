let age = prompt("type your age");

while ((age < 1) || (age > 119))
    age = prompt("Enter a valid age !")
if (age >= 18)
    console.log("You are an adult");
else
    console.log("You are not yet an adult");