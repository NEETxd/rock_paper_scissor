
/* ##################### */
/* # RANDOM CHOISE FUNCTION # */
/* ##################### */

function getComputerChoice() {
    let compChoice = Math.floor(Math.random()*3) + 1;
    let choice;
    if (compChoice == 1) {
        choice = "Rock";
    } else if (compChoice === 2) {
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
const playerSelection = "scissor";
const computerSelection = getComputerChoice();
// playRound(playerSelection,computerSelection);

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
        return computerWinRound
    }else if (playerChoice == "ROCK" && compChoice1 =="SCISSOR") {
        return playerWinRound
    //if player selects paper
    }else if (playerChoice == "PAPER" && compChoice1 =="PAPER") {
        return draw
    }else if (playerChoice == "PAPER" && compChoice1 =="ROCK") {
        return playerWinRound
    }else if (playerChoice == "PAPER" && compChoice1 =="SCISSOR") {
        return computerWinRound
    //if selects scissor    
    }else if (playerChoice == "SCISSOR" && compChoice1 =="SCISSOR") {
        return draw
    }else if (playerChoice == "SCISSOR" && compChoice1 =="ROCK") {
        return computerWinRound
    }else if (playerChoice == "SCISSOR" && compChoice1 =="PAPER") {
        return playerWinRound
    }else {
        return 'I dunno what happened, check your brain and code, man'
    }
    
    
  }     
   




/* ##################### */
/* # 5 Games of Rock-Paper-Scissor # */
/* ##################### */
let playerWin = "Player wins the game! Congratulations!"
let computerWin = "Computer wins the game! Congratulations!"
let playerScore = 0;
let computerScore = 0;
let draws = 0;

//Create new function game()
function game() {
    let result1;

//call playRound() function 5 times
for (let i = 0; i < 5; i++) {
    let playerSelectedFive = prompt('Choose one : Paper or Scissor or Rock?', 'Paper');
   result1 = playRound(playerSelectedFive, computerSelection);
    //keep score of each wins/loses
    console.log(result1);
    gameScore(result1);
    console.log("Your score is " + playerScore);
    console.log("The computer's score is " + computerScore);

    if(i==4) {
        if (playerScore > computerScore) {
           return console.log(playerWin);
    } else if (computerScore > playerScore) {
      return   console.log(computerWin);
    }else {
        return console.log(draw)
    }
}
}
}

function gameScore(result) {

    if (result === playerWinRound) {
        playerScore++;
      } else if (result === draw) {
        draws++;
      } else {
        computerScore++;
      }
}
    //report who is winner
