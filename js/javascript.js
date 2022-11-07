/* ##################### */
/* # RANDOM CHOICE FUNCTION # */
/* ##################### */

function getComputerChoice() {
    let compChoice = Math.floor(Math.random()*3);
    let choice;
    if (compChoice == 0) {
        choice = "Rock";
    } else if (compChoice === 1) {
        choice = "Paper";
    } else {
        choice = "Scissor";
    }
    return choice
}   


/* ##################### */
/* #ONE ROUND OF ROCK-PAPER-SCISSOR # */
/* ##################### */

let playerWinRound = "Player wins this round!";
let computerWinRound = "Computer wins this round!";
let draw = "Draw!";
//This function will play one round of  ROCK-PAPER-SCISSOR with computer
function playRound(playerSelection, computerSelection) {
    // let result;
    // let commentators;
    //make both parameters case-insensitive 
    let playerChoice = playerSelection.toUpperCase(); // become ROCK OR PAPER OR SCISSOR
    let compChoice1 = computerSelection.toUpperCase(); // become ROCK OR PAPER OR SCISSOR
    // conditions 
    //if player selects rock
    if (playerChoice == "ROCK" && compChoice1 =="ROCK") {
        return draw
    } else if (playerChoice == "ROCK" && compChoice1 =="PAPER") {
        computerScore++
        return computerWinRound
    }else if (playerChoice == "ROCK" && compChoice1 =="SCISSOR") {
        playerScore++;
        return playerWinRound
    //if player selects paper
    }else if (playerChoice == "PAPER" && compChoice1 =="PAPER") {
        return draw
    }else if (playerChoice == "PAPER" && compChoice1 =="ROCK") {
        playerScore++;
        return playerWinRound
    }else if (playerChoice == "PAPER" && compChoice1 =="SCISSOR") {
        computerScore++
        return computerWinRound
    //if selects scissor    
    }else if (playerChoice == "SCISSOR" && compChoice1 =="SCISSOR") {
        return draw
    }else if (playerChoice == "SCISSOR" && compChoice1 =="ROCK") {
        computerScore++
        return computerWinRound
    }else if (playerChoice == "SCISSOR" && compChoice1 =="PAPER") {
        playerScore++;
        return playerWinRound
    }else {
        return 'I dunno what happened, check your brain and code, man'
    }
    
    
}     
   

/* ##################### */
/* # 5 Games of Rock-Paper-Scissor # */
/* ##################### */

let gameWinner
let playerScore = 0;
let computerScore = 0;
let roundPlayed = 1;
//Create new function game()
function game() {
//call playRound() function 5 times :
    for (let i = 0; i < 5; i++) {
        //asking for player choice
        let playerSelectedFive = prompt('Choose one : Paper or Scissor or Rock?', 'Paper');
        // calling 5 times function that randomize choice to get diffrent result every step
        let compChoiceCallEveryTime = getComputerChoice();
        // calling function with those choices into console
        console.log(playRound(playerSelectedFive, compChoiceCallEveryTime))
        //keep score of each wins/loses
        console.log("Your score is " + playerScore);
        console.log("The computer's score is " + computerScore);
        console.log("Round:" + roundPlayed);
        roundPlayed++;
    }
    // after 5 games decide the winner :
    if ( playerScore > computerScore ) {

        gameWinner = "You win!";
        } else if ( computerScore > playerScore ) {
        gameWinner = "Computer wins!";
        } else {
        gameWinner = "Its a Tie!"
        }
    return console.log("The winner of Bo5 is : " + gameWinner)
}