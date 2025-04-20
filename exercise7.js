/*
Exercise 7: Guess the Number Game
Instruction:
Generate a random number between 1 and 5
Ask the user to guess
Tell them if they got it right or wrong using alert()
*/

// Generate a random number between 1 and 5
let randomNumber = Math.floor(Math.random() * 5) + 1;

// Ask the user to guess the number
let userGuess = parseInt(prompt("Guess a number between 1 and 5:"));

// Check if the user's guess matches the random number
if (userGuess === randomNumber) {
    alert("Congratulations! You guessed it right.");
} else {
    alert(`Sorry, that's wrong. The correct number was ${randomNumber}.`);
}
