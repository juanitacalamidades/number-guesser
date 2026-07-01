let counter;
let victoryMessage;
let hintMessage;
let defeatMessage;


function generateRandomNumber () {
    const randomNumber = Math.floor(Math.random() * 100) + 1; //between 1 and 100
    return randomNumber;
}


function getPlayerGuess(){
    let guess;
    let promptMessage = 'Enter your guess (1–100):';
    do {
        const input = prompt(promptMessage);
        guess = input === null ? NaN : Number(input);
        promptMessage = 'Please enter a whole number between 1 and 100.';
    }while (isNaN(guess) || guess < 1 || guess > 100);
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

    alert(
        'Welcome! Guess a number between 1 and 100. You have 10 attempts.\n\n' +
        'Tip: open the developer console to see game logs.\n' +
        '  macOS:   Cmd + Option + I\n' +
        '  Windows: F12  or  Ctrl + Shift + I'
    );
    counter = 0;

    let computerGuess = generateRandomNumber();


    for(let i = 1; i <= 10; i++){
        let playerGuess = getPlayerGuess();
        let checkWin = checkGuess(playerGuess, computerGuess);

        counter++;
        if(checkWin === 'Correct!'){
            victoryMessage = `YOU WIN! The number was ${computerGuess}. You guessed it in ${counter} attempt${counter === 1 ? '' : 's'}!`;
            console.log(victoryMessage);
            alert(victoryMessage);
            return;
        }else{
            if(counter === 10){
                defeatMessage = `GAME OVER. The number was ${computerGuess} — better luck next time!`;
                console.log(defeatMessage);
                alert(defeatMessage);
            }else{
                hintMessage = `${checkWin} Keep trying. You've got ${10 - counter} round${10 - counter === 1 ? '' : 's'} left.`;
                console.log(hintMessage);
                alert(hintMessage);
            }
        }
    }
}

game();

