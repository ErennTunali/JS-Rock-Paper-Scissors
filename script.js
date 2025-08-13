function getComputerChoice(){
    let randomChoice = Math.random()
    let choice;
    if (randomChoice < 0.33){
        choice = "Rock";
    }
    else if (randomChoice < 0.66){
        choice = "Paper";

    }
    else if (randomChoice < 1){
        choice = "Scissors";
    }
    console.log(choice)


}
getComputerChoice();