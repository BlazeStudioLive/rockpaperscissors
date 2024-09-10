console.log("Hello World");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice (choice){
   answer = Math.floor(Math.random() * 3);
   if (answer === 0) {
    computerHand = "rock";
   } else if (answer === 1){
    computerHand = "paper";
   } else {
    computerHand = "scissors";
   }
   return computerHand;
}

function getHumanChoice (){
    let choice = prompt("Rock, Paper, or Scissors?");
    if (choice.toLowerCase() === "rock"){
        humanHand = "rock";
    } else if (choice.toLowerCase() === "paper"){
        humanHand = "paper";
    } else if (choice.toLowerCase() === "scissors"){
        humanHand = "scissors";
    } else {
        humanHand = alert("I think you mistyped - try again!");
        getHumanChoice();
    }
    return humanHand;
}

function playRound(humanChoice, computerChoice){
//    humanChoice = getHumanChoice();
//    computerChoice = getComputerChoice();
    let result = "nothing happened";
    if (humanChoice === "rock" && computerChoice === "rock"){
        result = "You both chose rock";
        confirm(result);
        console.log(result);
    } else if (humanChoice === "rock" && computerChoice === "paper"){
        result = "Computer chose paper - You lose!";
        computerScore ++;
        confirm(result);
        console.log(result);
    } else if (humanChoice === "rock" && computerChoice === "scissors"){
        result = "Computer chose scissors - You win!";
        humanScore ++;
        confirm(result);
        console.log(result);
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        result = "Computer chose rock - You win!"
        humanScore ++;
        confirm(result);
        console.log(result);
    } else if (humanChoice === "paper" && computerChoice === "paper"){
        result = "You both chose paper";
        confirm(result);
        console.log(result);
    } else if (humanChoice === "paper" && computerChoice === "scissors"){
        result = "Computer chose scissors - You lose!";
        computerScore ++;
        confirm(result);
        console.log(result);
    } else if (humanChoice === "scissors" && computerChoice === "rock"){
        result = "Computer chose rock - You lose!";
        computerScore ++;
        confirm(result);
        console.log(result);
    } else if (humanChoice === "scissors" && computerChoice === "paper"){
        result = "Computer chose paper - You win!";
        humanScore ++;
        confirm(result);
        console.log(result);
    } else if (humanChoice === "scissors" && computerChoice === "scissors"){
        result = "You both chose scissors";
        confirm(result);
        console.log(result);
    }
    return result;
    console.log(result);
}

function playGame(){
    humanScore = 0;
    computerScore = 0;
    for (i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore === computerScore){
        console.log("Best out of 5 - it's a tie!");
    } else if (humanScore > computerScore){
        console.log("You win best out of 5!");
    } else if (humanScore < computerScore){
        console.log("You lose best out of 5");
    }
}

playGame();

//console.log(getComputerChoice(3));
//console.log(getHumanChoice());
//console.log(playRound(humanSelection, computerSelection));
console.log(humanScore);
console.log(computerScore);
//console.log(playGame());