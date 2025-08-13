function getComputerChoice(){
    let randomChoice = Math.random()
    let choice;
    if (randomChoice < 0.33){
        choice = "rock";
    }
    else if (randomChoice < 0.66){
        choice = "paper";

    }
    else if (randomChoice < 1){
        choice = "scissors";
    }
    return choice;


}

function getHumanChoice(){
    let humanChoice = prompt("Choose: ");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;



}
function playRound(human, computer){
    if(human == "rock" && computer == "rock"){
        console.log("Draw");
    }
    else if(human == "rock" && computer == "paper"){
        console.log("You lose");
        computerScore ++;
    }
    else if (human == "rock" && computer == "scissors"){
        console.log("you win");
        humanScore ++;
    }
    else if (human == "paper" && computer == "paper"){
        console.log("draw");
    }
    else if (human == "paper" && computer == "rock"){
        console.log("you win");
        humanScore++;
    }
    else if (human == "paper" && computer == "scissors"){
        console.log("you lose");
        computerScore++;
    }
    else if (human == "scissors" && computer == "scissors"){
        console.log("draw");
    }
    else if (human == "scissors" && computer == "rock"){
        console.log("you lose");
        computerScore++;
    }
    else if (human == "scissors" && computer == "paper"){
        console.log("you win");
        humanScore++;
    }
    


}

function playGame(){
    
    for (let i = 0; i < 5; i++){
        let humanPick = getHumanChoice();
        let computerPick = getComputerChoice();
        playRound(humanPick, computerPick);

        
    }
    console.log(`Human score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);




}
let humanScore = 0;
let computerScore = 0;
playGame();
if (humanScore > computerScore){
    console.log("You win");

}
else if (humanScore < computerScore){
    console.log("You lose");
}
else{
    console.log("Draw")
}







