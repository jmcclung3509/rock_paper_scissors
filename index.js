let playersInputField = document.getElementById("playerInput")
let playerChoiceContainer = document.querySelector(".player_choice")
let computerChoiceContainer = document.querySelector(".computer_choice")
let playerScoreContainer = document.querySelector(".player_score")
let computerScoreContainer = document.querySelector(".computer_score")
let roundContainer = document.querySelector(".round_container")
let winnerContainer = document.querySelector(".winner")

let computerObject = "rock"
let playerScore = 0
let computerScore = 0
let round = 0
let computerSelection = ""
let playerSelection = ""

function start(){
  
    round = 0
    computerChoiceContainer.textContent = 0
    playerChoiceContainer.textContent = 0
    roundContainer.textContent = 0
    // game()
}

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
//  let computerSelection = getComputerChoice()


getComputerChoice()
function randomChoice(){
    let randomIndex = Math.floor((Math.random() *3) +1)
 
    return randomIndex
}

function getPlayerChoice(){

     playerSelection =  playersInputField.value.toLowerCase().trim()


    if (playerSelection ==  "scissors"){
        console.log(playerSelection)

     return playerSelection

    } else if (playerSelection =="rock") {
        console.log(playerSelection)
        return playerSelection
    }else if ( playerSelection == "paper"){
        console.log(playerSelection)
        return playerSelection
    } else {
  alert("Please enter a valid selection")
}

}



function playRound(playerSelection, computerSelection){
    // round ++
  
    // game()
   playerSelection = getPlayerChoice()
 computerSelection = getComputerChoice()
 
 computerChoiceContainer.textContent = computerSelection
 playerChoiceContainer.textContent=playerSelection
 roundContainer.innerText = round
 round ++
 roundContainer.innerText = round
    // playerSelection = getPlayerChoice()

    
   
    console.log(round)

    if (playerSelection == "rock" && computerSelection == "rock"){
        computerScore++ && playerScore++
        getScore()
        return "It's a tie"
      
   

    } else if (playerSelection == "rock" && computerSelection == "paper"){
        computerScore++
        getScore()
        return "Computer Wins!  Paper beats Rock!"


    }else if (playerSelection =="rock" && computerSelection =="scissors"){
    
        playerScore ++
        getScore()
        return "Player Wins! Rock beats Scissors"
    } else if (playerSelection == "paper" && computerSelection =="paper"){
        computerScore++ && playerScore++
        getScore()
        return "It'a a tie!"
    } else if (playerSelection == "paper" && computerSelection =="scissors") {
        computerScore++
        getScore()
        return "Computer Wins! Scissors beat Paper!"
    } else if (playerSelection == "paper" && computerSelection =="rock"){
        playerScore ++
     getScore()
        return "Player Wins! Paper beats Rock!"
    } else if (playerSelection =="scissors" && computerSelection =="scissors"){
        computerScore++ && playerScore++
        getScore()
      return  "It's a tie"
    }else if (playerSelection =="scissors" && computerSelection == "paper"){
        playerScore ++
        getScore()
        return "Player Wins! Scissors beats Paper!"
    }else  {
      computerScore++
      getScore()
        return "Computer wins! Rock beats Scissors!"
    }

}



function game() {
  for (let i=0; i< 5; i++){

 
if (i <5){
    
    // playerSelection = ""
    roundContainer.textContent = round
  
  
  
}else{
    // } else {
        // roundContainer.innerText = "Game Over"
        if (playerScore > computerScore){
            console.log("Player Wins")
        } else if (computerScore > playerScore){
            console.log ("Computer Wins")
        } else {
            console.log("Tie")
        }
 
        getScore()
    }

}
}
function getScore(){
    // playerSelection = ""
    if (round < 5){
        computerScoreContainer.textContent = computerScore
        playerScoreContainer.textContent = playerScore
       game()
    } else if (round == 5) {
        roundContainer.textContent = "Game Over"
        if (playerScore > computerScore){
            console.log("Player Wins")
            winnerContainer.textContent = "PLAYER WINS GAME!"
        } else if (computerScore > playerScore){
            console.log ("Computer Wins")
            winnerContainer.textContent = "COMPUTER WINS GAME!"
        } else {
            console.log("Tie")
            winnerContainer.textContent = "TIE GAME!"
        }

    }

}
