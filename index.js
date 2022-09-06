let playersInputField = document.getElementById("playerInput")
let playerChoiceContainer = document.querySelector(".player_selection")
let computerChoiceContainer = document.querySelector(".computer_selection")
let playerScoreContainer = document.querySelector(".player_score")
let computerScoreContainer = document.querySelector(".computer_score")
let roundContainer = document.querySelector(".round_count")
let winnerContainer = document.querySelector(".winner")
let scissorElement = document.getElementById("scissor")
let paperElement = document.getElementById("paper")
let rockElement = document.getElementById("the_rock")
let goButton = document.getElementById("go")
let roundWinner = document.querySelector(".round_winner")


//starting values

let computerObject = "rock"
let playerScore = 0
let computerScore = 0
let round = ""
let computerSelection = ""
let playerSelection = ""


//reset values
function reset(){
  
    round = 0
    computerChoiceContainer.textContent = 0
    playerChoiceContainer.textContent = 0
    roundContainer.textContent = 0
    playerScore = 0
    computerScore = 0
    playerScoreContainer.textContent = playerScore
    computerScoreContainer.textContent = computerScore
    goButton.textContent = "Go!"
    // game()
}
//get computer choice
function getComputerChoice(){
   let computerChoice = randomChoice()
   
    console.log(computerChoice)
    if (computerChoice == 1){
        computerObject = "rock"
      
    } else if (computerChoice ==2){
        computerObject = "scissors"

    } else {
        computerObject ="paper"

    }
 
    return computerObject

}

function randomChoice(){
    let randomIndex = Math.floor((Math.random() *3) +1)
 
    return randomIndex
}

//get player choice
scissorElement.addEventListener("click", function (){
    console.log("click")
    playerSelection = "scissor"
    computerSelection = getComputerChoice()
   playRound(playerSelection, computerSelection)
})
paperElement.addEventListener("click", function (){
    console.log("click")
    playerSelection = "paper"
    computerSelection = getComputerChoice()
   playRound(playerSelection, computerSelection)
})
rockElement.addEventListener("click", function (){
    console.log("click")
    playerSelection = "rock"
    computerSelection = getComputerChoice()
   playRound(playerSelection, computerSelection)
})



function playRound(playerSelection, computerSelection){
    console.log(round)
if (round < 5){

    round ++

 console.log(playerSelection, computerSelection)
 
 
 computerChoiceContainer.textContent = computerSelection
 playerChoiceContainer.textContent=playerSelection
 roundContainer.innerText = round

    
   
    console.log(round)
    if (playerSelection == "") {
        alert ("Please pick an object")
    

 }else if (playerSelection == "rock" && computerSelection == "rock"){
        computerScore++ && playerScore++
        getScore()
        winnerContainer.textContent = "It's a tie"
      
   

    } else if (playerSelection == "rock" && computerSelection == "paper"){
        computerScore++
        getScore()
        winnerContainer.textContent = "Computer wins this round!  Paper beats Rock!"


    }else if (playerSelection =="rock" && computerSelection =="scissors"){
    
        playerScore ++
        getScore()
        winnerContainer.textContent =  "Player wins this round! Rock beats Scissors"
    } else if (playerSelection == "paper" && computerSelection =="paper"){
        computerScore++ && playerScore++
        getScore()
        winnerContainer.textContent = "It'a a tie!"
    } else if (playerSelection == "paper" && computerSelection =="scissors") {
        computerScore++
        getScore()
        winnerContainer.textContent = "Computer wins this round! Scissors beat Paper!"
    } else if (playerSelection == "paper" && computerSelection =="rock"){
        playerScore ++
     getScore()
        return "Player wins this round! Paper beats Rock!"
    } else if (playerSelection =="scissors" && computerSelection =="scissors"){
        computerScore++ && playerScore++
        getScore()
        winnerContainer.textContent =  "It's a tie"
    }else if (playerSelection =="scissors" && computerSelection == "paper"){
        playerScore ++
        getScore()
        winnerContainer.textContent = "Player wins this round! Scissors beats Paper!"
    }else  {
      computerScore++
      getScore()
      winnerContainer.textContent = "Computer wins this round! Rock beats Scissors!"
    }

    
} else if (round = 5){
    reset()
} 
}




function game() {
  for (let i=0; i< 5; i++){
if (i <5){

    roundContainer.textContent = `Round ${round}`

} else {
    getScore()
}
}
}
function getScore(){
    // playerSelection = ""

    if (round <= 5){

        computerScoreContainer.textContent = computerScore
        playerScoreContainer.textContent = playerScore
       game()
    } else if (round > 5) {
        console.log("round 5")
        roundContainer.textContent = "Game Over"
        goButton.textContent = "Play Again"
        if (playerScore > computerScore){
          
            winnerContainer.textContent = `PLAYER WINS GAME! ${playerScore} vs ${computerScore}`
        } else if (computerScore > playerScore){
            console.log ("Computer Wins")
            winnerContainer.innerText = `COMPUTER WINS GAME! ${computerScore} vs. ${playerScore}`

        } else {
            console.log("Tie")
            winnerContainer.textContent = "TIE GAME!"
        }

    }
}


