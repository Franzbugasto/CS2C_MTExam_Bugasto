// Declare the favorite number
const favNumber = 7; // Replace with the actual favorite number

let guess = null; // Initialize guess

while (guess !== favNumber) {
    // Prompt user for a guess and convert it to a number
    guess = Number(prompt("Guess the favorite number:"));
    // Check the guess
    if (guess < favNumber) {
        console.log("Too low, try again.");
    } else if (guess > favNumber) {
        console.log("Too high, try again.");
    } else {
        console.log("Correct! You guessed the favorite number.");
    }
}
