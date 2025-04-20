/*
Exercise 2: Basic Calculator
Instruction:
Ask for two numbers and an operator (+, -, *, /)
Use if...else to calculate result
Show the result with alert()
*/

// Ask the user for two numbers and an operator
let number1 = prompt("Enter the first number:");
let number2 = prompt("Enter the second number:");
let operator = prompt("Enter an operator (+, -, *, /):");

// Convert the inputs to numbers
number1 = Number(number1);
number2 = Number(number2);

// Check if the inputs are valid numbers
if (isNaN(number1) || isNaN(number2)) {
    alert("Please enter valid numbers!");
} else {
    // Perform the calculation based on the operator
    let result;
    if (operator === "+") {
        result = number1 + number2;
        alert(`The result is: ${result}`);
    } else if (operator === "-") {
        result = number1 - number2;
        alert(`The result is: ${result}`);
    } else if (operator === "*") {
        result = number1 * number2;
        alert(`The result is: ${result}`);
    } else if (operator === "/") {
        // Check for division by zero
        if (number2 !== 0) {
            result = number1 / number2;
            alert(`The result is: ${result}`);
        } else {
            alert("Division by zero is not allowed!");
        }
    } else {
        alert("Invalid operator! Please enter one of the following: +, -, *, /.");
    }
}
