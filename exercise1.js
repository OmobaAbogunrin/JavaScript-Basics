/*
Exercise 1: Even or Odd Checker
Instruction:
Ask the user to enter a number
Use % to check if the number is even or odd
Show the result with alert()
*/

// Ask the user to enter a number
let number = prompt("Enter a number:");

// Convert the input to a number (in case the user enters it as a string)
number = Number(number);

// Check if the number is even or odd
if (isNaN(number)) {
    alert("Please enter a valid number!");
} else if (number % 2 === 0) {
    alert("The number is even.");
} else {
    alert("The number is odd.");
}
