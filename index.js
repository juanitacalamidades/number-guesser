console.log("Welcome to number guesser");


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


    for(let i = 1; i <= 10; i++){
        let playerGuess = getPlayerGuess();
        let checkWin = checkGuess(playerGuess, computerGuess);
        
        counter++;
        if(checkWin === 'Correct!'){
            victoryMessage = `YOU WIN! You beat the machine in ${counter} attempt${counter === 1 ? '' : 's'}!`;
            console.log(victoryMessage);
            alert(victoryMessage);
            return;
        }else{
            hintMessage = `${checkWin} Keep trying. You've got ${10 - counter} round${10 - counter === 1 ? '' : 's'} left`;
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

