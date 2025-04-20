/*
Exercise 5: Multiplication Table Generator
Instruction:
Ask the user to enter a number
Use a for loop to print the multiplication table from 1 to 12
Use console.log() (not alert)
*/

// Ask the user to enter a number
let number = parseInt(prompt("Enter a number to generate its multiplication table:"));

// Check if the input is a valid number
if (isNaN(number)) {
    console.log("Please enter a valid number.");
} else {
    console.log(`Multiplication Table for ${number}:`);

    // Use a for loop to print the multiplication table from 1 to 12

    for (let i = 1; i <= 12; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

