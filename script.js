// GUESS THAT NUMBER
// Message to be used throughout the project/file
const enterNumText = `Please enter a number greater than zero`;
// For starting, restarting, and ending the game
let restartGame = true;
// For storing the range of the number to be guessed
let rangeNum;
// For storing the number that the user will attempt to guess
let randomNum;
// For storing the number of attempts the user has left
let attempts;
// For storing the user's guess
let guess;
// For storing the user's response to play again or not play again
let playAgain;

// Starting alert message
alert(`Welcome to the GUESS THAT NUMBER ! Please click OK to start the game`)

// Game restarts as long as restartGame has a value of true
while(restartGame){

    // Asks the user to enter a number to set the upper bound for the random number that will be created. Also, using parseInt to attempt to convert the users response to a number value
   rangeNum = prompt(`Please enter a maximum number for the range:`)
   rangeNum = parseInt(rangeNum)

   // Verifies the users entry for a range number is a number greater than one
    while (rangeNum <= 1 || !rangeNum){
       rangeNum = prompt(`Please enter a number greater than 1`)
        rangeNum = parseInt(rangeNum)
    }
    randomNum = Math.floor(Math.random() * rangeNum) + 1

    // alert(randomNum) This will show the answer

    attempts = parseInt( prompt(`Please enter a number of attempts allowed`))

    while (attempts < 1 || !attempts || attempts >= rangeNum ){
        attempts = prompt(`Please enter a number from 1 to ${rangeNum - 1} `)
         attempts = parseInt(attempts)
     }

     guess = prompt (`Please enter a guess from 1-${rangeNum}. You have ${attempts} attempt(s) left.`)

     while (true){

        guess = parseInt(guess)

        while(!guess || guess < 1 || guess > rangeNum){
            guess = prompt (`Please enter a guess from 1-${rangeNum}`)
            guess = parseInt(guess)
        }
            attempts--;

            if (guess === randomNum){
                alert(`CONGRATULATIONS, YOU GUESSED THE CORRECT NUMBER: ${randomNum}`)
                break;
            } else if (attempts === 0){
                alert (`Sorry, but you have run out of attempts :( \nThe number was ${randomNum}`)
                break;
            } else if (guess < randomNum){
                guess = prompt (`Too low. You have ${attempts} attempt(s) left`)
            } else if (guess > randomNum){
                guess = prompt(`Too high. You have ${attempts} attempt(s) left `)
            }
     }
     playAgain = prompt(`Would you like to play again? Y for Yes. N for No`)
     while(true){
        if(playAgain.toUpperCase() === `N`){
        alert(`Thanks for playing`)
        restartGame = false
    break;
} else if (playAgain.toUpperCase() === `Y`){
    break
} else{
    playAgain = prompt(`Please enter either Y or N:`)
}
    break
}
    break;
}