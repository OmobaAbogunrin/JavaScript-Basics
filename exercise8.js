/*
Exercise 8: FizzBuzz Challenge
Instruction:
Use a for loop to go through numbers from 1 to 15.
For each number:
If it's divisible by 3, log "Fizz"
If it's divisible by 5, log "Buzz"
If it's divisible by both 3 and 5, log "FizzBuzz"
Otherwise, log the number itself
Use console.log() to print the output.
Hint: Use the modulo operator % to check for divisibility.
*/

// Use a for loop to go through numbers from 1 to 15
for (let i = 1; i <= 15; i++) {
    // Check for divisibility by both 3 and 5 first
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } 
    // Check for divisibility by 3
    else if (i % 3 === 0) {
        console.log("Fizz");
    } 
    // Check for divisibility by 5
    else if (i % 5 === 0) {
        console.log("Buzz");
    } 
    // If not divisible by either, log the number itself
    else {
        console.log(i);
    }
}
