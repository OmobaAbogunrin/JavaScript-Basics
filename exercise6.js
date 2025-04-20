/*
Exercise 6: Grade Checker
Instruction:
Ask user to enter a score (0–100)
Use if...else to show:
70–100: "Excellent"
50–69: "Good"
Below 50: "Needs Improvement"
*/

// Ask the user to enter a score
let score = parseInt(prompt("Enter your score (between 0 and 100):"));

// Check if the input is a valid number within the range
if (isNaN(score) || score < 0 || score > 100) {
    console.log("Please enter a valid score between 0 and 100.");
} else {
    // Use if...else statements to determine the grade
    if (score >= 70) {
        console.log("Excellent");
    } else if (score >= 50) {
        console.log("Good");
    } else {
        console.log("Needs Improvement");
    }
}
