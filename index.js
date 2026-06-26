console.log("Welcome to number guesser");

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


let counter;
let victoryMessage;
let hintMessage;
let defeatMessage;


function generateRandomNumber () {
    const randomNumber = Math.floor(Math.random() * 100) + 1; //between 1 and 100
    // console.log(randomNumber);
    return randomNumber;
}


function getPlayerGuess(){
    let guess;
    let promptMessage = 'Enter your guess:';
    do {
        const input = prompt(promptMessage);
        guess = Number(input);
        promptMessage = 'Your life depends on this: ENTER A VALID NUMBER!';
    }while (isNaN(guess) || guess < 1 || guess > 100);
    // console.log(guess);
    return guess; 
}

function checkGuess(playerGuess, correctNumber) {
    if (playerGuess < correctNumber) {
        return `${playerGuess} is too low!`;
    } else if (playerGuess > correctNumber) {
        return `${playerGuess} is too high!`;
    } else {
        return "Correct!";
    }
}


function game(){

    alert('Hello player! This is your chance to beat the machine. Make a guess of a number between 1 and 100');
    counter = 0;

    let computerGuess = generateRandomNumber();
    // console.log(`computer guess: ${computerGuess}`)

    for(let i = 1; i <= 10; i++){
        let playerGuess = getPlayerGuess();

        // console.log(`player guess: ${playerGuess}`)
        // console.log(`computer guess: ${computerGuess}`)

        let checkWin = checkGuess(playerGuess, computerGuess);
        
        counter++;
        if(checkWin === 'Correct!'){
            victoryMessage = `YOU WIN! You beat the machine in ${counter} attempt${counter === 1 ? '' : 's'}!`;
            console.log(victoryMessage);
            alert(victoryMessage);
            return;
        }else{
            hintMessage = `${checkWin} Keep trying. You've got ${10 - counter} rounds left`;
            console.log(hintMessage);
            if(counter == 10){
                defeatMessage = `GAME OVER. You missed your chances. The number was ${computerGuess}`;
                console.log(defeatMessage);
                alert(defeatMessage);
            }else{
                alert(hintMessage);
            }
        }
    }
}

game();

