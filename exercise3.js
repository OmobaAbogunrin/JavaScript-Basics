/*
Exercise 3: Voting Eligibility Checker Instruction: 
Ask for user's age 
If age is 18 or above, show “Eligible” Else, show “Not eligible”
*/

// Ask the user for their Age
let userAge = (prompt("Please input your Age:"));

// Convert the input to a number (in case the user enters it as a string)
userAge = Number(userAge);

// Perform the check for age eligibility
if (userAge >=18) {
    alert("You are Eligible to vote!");
    
} else {
    alert("You are not eligible to vote yet!");
}
