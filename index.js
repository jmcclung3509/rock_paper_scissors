let playerSelection = "rock"
let computerSelection= "rock"

function getComputerChoice(){
   let computerChoice = randomChoice()
   
    console.log(computerChoice)
    if (computerChoice == 1){
        computerSelection = "rock"
      
    } else if (computerChoice ==2){
        computerSelection = "scissors"

    } else {
       
        computerSelection ="paper"

    }
    console.log(computerSelection)

}
getComputerChoice()
function randomChoice(){
    let randomIndex = Math.floor((Math.random() *3) +1)
    console.log(randomIndex)
    return randomIndex
}

function game(){
    if (playerSelection == "rock" && computerSelection == "rock"){
        console.log("It's a tie")
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        console.log("Computer Wins")
    }else if (playerSelection =="rock" && computerSelection =="scissors"){
        console.log("Player wins")
    } else if (playerSelection == "paper" && computerSelection =="paper"){
        console.log("It's a tie")
    } else if (playerSelection == "paper" && computerSelection =="scissors") {
        console.log("Computer Wins")
    } else if (playerSelection == "paper" && computerSelection =="rock"){
        console.log( "Player Wins")
    } else if (playerSelection =="scissors" && computerSelection =="scissors"){
        console.log ("It's a tie")
    }else if (playerSelection =="scissors" && computerSelection == "paper"){
        console.log("Player wins")
    }else  {
        console.log("Computer Wins")
    }
}
game()