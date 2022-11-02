
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
/* # RANDOM CHOISE FUNCTION # */
/* ##################### */