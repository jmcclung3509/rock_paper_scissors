let playersInputField = document.getElementById("playerInput")
let playerChoiceContainer = document.querySelector(".player_selection")
let computerChoiceContainer = document.querySelector(".computer_selection")
let playerScoreContainer = document.querySelector(".player_score")
let computerScoreContainer = document.querySelector(".computer_score")
let roundContainer = document.querySelector(".round_container")
let winnerContainer = document.querySelector(".winner")
let scissorElement = document.getElementById("scissor")
let paperElement = document.getElementById("paper")
let rockElement = document.getElementById("the_rock")
let goButton = document.getElementById("go")

//starting values

let computerObject = "rock"
let playerScore = 0
let computerScore = 0
let round = 0
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

function randomChoice(){
    let randomIndex = Math.floor((Math.random() *3) +1)
 
    return randomIndex
}
scissorElement.addEventListener("click", function (){
    console.log("click")
    playerSelection = "scissor"
    computerSelection = getComputerChoice()
   playRound(playerSelection, computerSelection)
})


// function getPlayerChoice(){




//     if (playerSelection ==  "scissors"){
//         console.log(playerSelection)
//         round ++

//      return playerSelection

//     } else if (playerSelection =="rock") {
//         round ++
//         console.log(playerSelection)
//         return playerSelection
//     }else if ( playerSelection == "paper"){
//         round ++
//         console.log(playerSelection)
//         return playerSelection
// //     } else {
// //   alert("Please enter a valid selection")
// }

// }

// playerSelection = getPlayerChoice()
// computerSelection = getComputerChoice()

function playRound(playerSelection, computerSelection){
    round ++

    // game()

//    playerSelecgit tion = getPlayerChoice()
//  computerSelection = getComputerChoice()
 console.log(playerSelection, computerSelection)
 
 
 computerChoiceContainer.textContent = computerSelection
 playerChoiceContainer.textContent=playerSelection
 roundContainer.innerText = round
    // playerSelection = getPlayerChoice()

    
   
    console.log(round)
    if (playerSelection == "") {
        alert ("Please pick an object")
    

 }else if (playerSelection == "rock" && computerSelection == "rock"){
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

    roundContainer.textContent = round
  
}else{

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
    playerSelection = ""
    if (round < 5){
        computerScoreContainer.textContent = computerScore
        playerScoreContainer.textContent = playerScore
       game()
    } else if (round <= 5) {
        roundContainer.textContent = "Game Over"
        if (playerScore > computerScore){
            console.log("Player Wins")
            winnerContainer.textContent = `PLAYER WINS GAME! ${playerScore} vs ${computerScore}`
        } else if (computerScore > playerScore){
            console.log ("Computer Wins")
            winnerContainer.textContent = `COMPUTER WINS GAME! ${computerScore} vs. ${playerScore}`

        } else {
            console.log("Tie")
            winnerContainer.textContent = "TIE GAME!"
        }

    }

}
