console.log("welcome to number guesser");

// 1- Create a blank HTML file with a <script> tag that links an external .js file.
// 2- Create the function generateRandomNumber — returns a random integer between 1 and 100.
// 3-Create the function getPlayerGuess — shows a prompt to the user, returns their input as an integer, and repeats the prompt if the input is not a valid number.
// 4-Create the function checkGuess(playerGuess, correctNumber) — returns a string indicating whether the guess is too low, too high, or correct.
// 5-Create the function game that:
//           5.1 -> Calls generateRandomNumber and stores the result.
//           5.2 -> Initializes an attempt counter at 0.
//           5.3 -> Starts a loop that repeats while the player has not guessed correctly and has not exceeded 10 attempts.
//           5.4 -> On each iteration: asks for a guess using getPlayerGuess, increments the counter, and uses checkGuess to give the player feedback.
//           5.5 -> Once the loop exits, prints to the console whether the player won or lost.
//           5.7 -> Prints the number of attempts used.



function generateRandomNumber () {
    const randomNumber = Math.floor(Math.random() * 100) + 1; //between 1 and 100
    console.log(randomNumber);
    return randomNumber;
}

generateRandomNumber();