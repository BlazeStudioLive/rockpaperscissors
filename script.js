console.log("Hello World");

let humanScore = 0;
let computerScore = 0;
let finalChoice = "";

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

const rockBTN = document.querySelector("#rockbtn");
rockBTN.addEventListener("click", () => {
    humanHand = "rock";
    finalChoice = humanHand;
    playRound();
})

const paperBTN = document.querySelector("#paperbtn");
paperBTN.addEventListener("click", () => {
    humanHand = "paper";
    finalChoice = humanHand;
    playRound();
})

const scissorBTN = document.querySelector("#scissorbtn");
scissorBTN.addEventListener("click", () => {
    humanHand = "scissors";
    finalChoice = humanHand;
    playRound();
})
const container = document.querySelector("#container");


function playRound(humanChoice, computerChoice){
    humanChoice = finalChoice;
    computerChoice = getComputerChoice();
    let result = "Make your selection:";
    if (humanChoice === "rock" && computerChoice === "rock"){
        result = "You both chose rock. SCORE: Human " + humanScore + " vs. Computer: " + computerScore;
        console.log(result);
        console.log("Human: " + humanScore + " vs. Computer: " + computerScore);
    } else if (humanChoice === "rock" && computerChoice === "paper"){
        computerScore ++;
        result = "You chose rock, Computer chose paper - You lose! SCORE: Human " + humanScore + " vs. Computer: " + computerScore;
        console.log(result);
        console.log("Human: " + humanScore + " vs. Computer: " + computerScore);
    } else if (humanChoice === "rock" && computerChoice === "scissors"){
        humanScore ++;
        result = "You chose rock, Computer chose scissors - You win! SCORE: Human " + humanScore + " vs. Computer: " + computerScore;
        console.log(result);
        console.log("Human: " + humanScore + " vs. Computer: " + computerScore);
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        humanScore ++;
        result = "You chose paper, Computer chose rock - You win! SCORE: Human " + humanScore + " vs. Computer: " + computerScore;
        console.log(result);
        console.log("Human: " + humanScore + " vs. Computer: " + computerScore);
    } else if (humanChoice === "paper" && computerChoice === "paper"){
        result = "You both chose paper. SCORE: Human " + humanScore + " vs. Computer: " + computerScore;
        console.log(result);
        console.log("Human: " + humanScore + " vs. Computer: " + computerScore);
    } else if (humanChoice === "paper" && computerChoice === "scissors"){
        computerScore ++;
        result = "You chose paper, Computer chose scissors - You lose! SCORE: Human " + humanScore + " vs. Computer: " + computerScore;
        console.log(result);
        console.log("Human: " + humanScore + " vs. Computer: " + computerScore);
    } else if (humanChoice === "scissors" && computerChoice === "rock"){
        computerScore ++;
        result = "You chose scissors, Computer chose rock - You lose! SCORE: Human " + humanScore + " vs. Computer: " + computerScore;
        console.log(result);
        console.log("Human: " + humanScore + " vs. Computer: " + computerScore);
    } else if (humanChoice === "scissors" && computerChoice === "paper"){
        humanScore ++;
        result = "You chose scissors, Computer chose paper - You win! SCORE: Human " + humanScore + " vs. Computer: " + computerScore;
        console.log(result);
        console.log("Human: " + humanScore + " vs. Computer: " + computerScore);
    } else if (humanChoice === "scissors" && computerChoice === "scissors"){
        result = "You both chose scissors SCORE: Human " + humanScore + " vs. Computer: " + computerScore;
        console.log(result);
        console.log("Human: " + humanScore + " vs. Computer: " + computerScore);
    }

const results = document.createElement("div");
results.textContent = result;
container.appendChild(results);

    if (humanScore === 5){
        container.removeChild(results);
        alert("Human wins")
        console.log("Human wins!!!");
        humanScore = 0;
        computerScore = 0;
        finalChoice = "";
        playRound();
    }
    if (computerScore === 5){
        container.removeChild(results);
        alert("Computer wins")
        console.log("Computer wins");
        humanScore = 0;
        computerScore = 0;
        finalChoice = "";
        playRound();
    }
}