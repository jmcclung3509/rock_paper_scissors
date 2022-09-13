
//show selection per round
let playerChoiceContainer = document.querySelector(".player_selection")
let computerChoiceContainer = document.querySelector(".computer_selection")
//  object image link
let scissorImg = "fa fa-scissors"
let paperImg = "fa fa-toilet-paper"
let rockImg = "./images/rock_image.png"
//object image containers to show object picked each round
// let playerImg= document.getElementById("player_image")
// let computerImg = document.getElementById("computer_image")
let playerImgContainer= document.querySelector(".player_image_container")
let computerImgContainer = document.querySelector(".computer_image_container")
//show score after each round
let playerScoreContainer = document.querySelector(".player_score")
let computerScoreContainer = document.querySelector(".computer_score")
// shows round
let roundContainer = document.querySelector(".round_count")
// displays text on winner of round and winner of game
let winnerContainer = document.querySelector(".winner_container")
let gameWinnerContainer = document.querySelector(".game_winner_container")
//selection of players object 
let scissorElement = document.getElementById("scissor")
let paperElement = document.getElementById("paper")
let rockElement = document.getElementById("the_rock")
//playagain buuton
let goButton = document.getElementById("go")



//starting values

let computerObject = "rock"
let playerScore = 0
let computerScore = 0
let round = ""
let computerSelection = ""
let playerSelection = ""
let isGameOver = false


//reset values
function reset(){
    isGameOver == false
    round = 0
    gameWinnerContainer.innerHTML='<p></p>'
    roundContainer.textContent = ""
    playerScore = 0
    computerScore = 0
    playerScoreContainer.textContent = playerScore
    computerScoreContainer.textContent = computerScore
    winnerContainer.innerHTML = ""
    computerImgContainer.innerHTML=""
    playerImgContainer.innerHTML = ""
  if (goButton.classList.contains("show")){
      goButton.classList.remove("show")
      goButton.classList.add("hide")
  }
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
    if (round>=0 && isGameOver == false){
    playerImgContainer.innerHTML = ""
    computerImgContainer.innerHTML = ""
    playerSelection = "scissors"
    computerSelection = getComputerChoice()
   playRound(playerSelection, computerSelection)
} else {

}})
paperElement.addEventListener("click", function (){
    if (round>=0 && isGameOver == false){
    playerImgContainer.innerHTML = ""
    computerImgContainer.innerHTML = ""
    playerSelection = "paper"
    computerSelection = getComputerChoice()
   playRound(playerSelection, computerSelection)
} else {

}})
rockElement.addEventListener("click", function (){
    if (round>=0 && isGameOver == false){
    playerImgContainer.innerHTML = ""
    computerImgContainer.innerHTML = ""
    console.log("click")
    playerSelection = "rock"
    
    playerSelectionImg = ""
    computerSelection = getComputerChoice()
   playRound(playerSelection, computerSelection)
} else {

}})



function playRound(playerSelection, computerSelection){
    console.log(round)
if (isGameOver == false){

    round ++
 
//  computerChoiceContainer.textContent = computerSelection
//  playerChoiceContainer.textContent=playerSelection
 roundContainer.innerText = round


 if (playerSelection == "rock" && computerSelection == "rock"){
        computerScore++
        playerScore++
        getScore()
        winnerContainer.innerHTML = '<p class ="winner_text">Tie Round</br><span>Rock & Rock</span></p>'  
        getPlayerImage(playerSelection)
      getComputerImage(computerSelection)

    } else if (playerSelection == "rock" && computerSelection == "paper"){
        computerScore++
        getScore()
        winnerContainer.innerHTML = '<p class = "winner_text">Computer wins this round! </br> <span> Paper beats Rock!</span></p>'
        getPlayerImage(playerSelection)
        getComputerImage(computerSelection)

    }else if (playerSelection =="rock" && computerSelection =="scissors"){
        playerScore ++
        getScore()
        winnerContainer.innerHTML=  '<p class = "winner_text"> Player wins this round! </br> <span> Rock beats Scissors</span></p>' 
        getPlayerImage(playerSelection)
        getComputerImage(computerSelection)

    } else if (playerSelection == "paper" && computerSelection =="paper"){
        computerScore++ 
         playerScore++
        getScore()
        winnerContainer.innerHTML = '<p class ="winner_text">Tie Round</br><span>Paper & Paper</span></p>'
        getPlayerImage(playerSelection)
      getComputerImage(computerSelection)

    } else if (playerSelection == "paper" && computerSelection =="scissors") {
        computerScore++
        getScore()
        winnerContainer.innerHTML = '<p class = "winner_text"> Computer wins this round! </br> <span>Scissors beat Paper!</span></p>'
        getPlayerImage(playerSelection)
        getComputerImage(computerSelection)

    } else if (playerSelection == "paper" && computerSelection =="rock"){
        playerScore ++
     getScore()
       winnerContainer.innerHTML = '<p class = "winner_text">Player wins this round! </br> <span>Paper beats Rock!</span></p>'
       getPlayerImage(playerSelection)
       getComputerImage(computerSelection)

    } else if (playerSelection =="scissors" && computerSelection =="scissors"){
        computerScore++ 
        playerScore++
        getScore()
        winnerContainer.innerHTML = '<p class ="winner_text">Tie Round</br><span>Scissors & Scissors</span></p>'
        getPlayerImage(playerSelection)
        getComputerImage(computerSelection)

    }else if (playerSelection =="scissors" && computerSelection == "paper"){
        playerScore ++
        getScore()
        winnerContainer.innerHTML = '<p class = "winner_text"> Player wins this round!</br> <span> Scissors beats Paper!</span></p>'
        getPlayerImage(playerSelection)
        getComputerImage(computerSelection)
    }else  {
      computerScore++
      getScore()
      winnerContainer.innerHTML = '<p class = "winner_text">Computer wins this round!</br>  <span> Rock beats Scissors!</span></p>'
      getPlayerImage(playerSelection)
      getComputerImage(computerSelection)
    }

    
} else if (isGameOver == true){
    reset()

   
} 
}




function game() {
  for (let i=0; i< 10; i++){
if (isGameOver == false){
    roundContainer.textContent = `Round ${round}`
} else {
    winnerContainer.textContent = ""
    getScore()
}
}}

function getPlayerImage(playerSelection) {
    console.log(playerSelection)
    if (playerSelection == "scissors") {
        playerImgContainer.innerHTML = '<iframe src="https://giphy.com/embed/ujH30A5YftV0Z0gvs0"  style= frameBorder="0" class="scissor_gif" ></iframe>' 
        // '<img class = "scissors_gif" src = "./images/scissors.gif" alt = "scissors gif" />'   
    } else if (playerSelection =="paper"){
        playerImgContainer.innerHTML = '<img class = "paper_gif" src = "./images/1391-paper-waste-lineal.gif" alt = "paper GIF">'
    } else if (playerSelection =="rock") {
        playerImgContainer.innerHTML = '<iframe src="https://giphy.com/embed/xUOxf34uHq8VolxF7y" style="frameBorder="0" class="rock-gif"></iframe>'
    }
}
function getComputerImage(computerSelection){
        if (computerSelection == "scissors") {
            computerImgContainer.innerHTML = '<iframe src="https://giphy.com/embed/ujH30A5YftV0Z0gvs0" style= frameBorder="0" class="scissor_gif" ></iframe>' 
        } else if (computerSelection =="paper"){
            computerImgContainer.innerHTML = '<img class = "paper_gif" src = "./images/1391-paper-waste-lineal.gif" alt = "paper GIF">'
        } else if (computerSelection == "rock"){
            computerImgContainer.innerHTML = '<iframe src="https://giphy.com/embed/14smAwp2uHM3Di" style="frameBorder="0" class="rock-gif"></iframe>'
        }
    }

function getScore(){

    if (playerScore < 5 && computerScore < 5){
        computerScoreContainer.textContent = computerScore
        playerScoreContainer.textContent = playerScore
       game()
    } else if ( playerScore === 5 || computerScore === 5) {
        isGameOver == true
        computerScoreContainer.textContent = computerScore
        playerScoreContainer.textContent = playerScore
        winnerContainer.textContent = ""
        gameOver(playerScore, computerScore)
        if (goButton.classList.contains("hide")){
            goButton.classList.remove("hide")
            goButton.classList.add("show")
        }
   
  
       

    }
}
function gameOver(playerScore, computerScore) {
    roundContainer.textContent = "Game Over"
    winnerContainer.innerHTML = '<p></p>'
    if (Number(playerScore) > Number(computerScore)){
        console.log("player wins")
        gameWinnerContainer.innerHTML = `<h2> PLAYER WINS GAME </h2> `
        // winnerContainer.innerHTML = `<h3>PLAYER WINS GAME! </h3> </br> <h5>${playerScore} vs ${computerScore}</h5>`
    } else if (Number(computerScore) > Number(playerScore)){

        console.log ("Computer Wins")
        gameWinnerContainer.innerHTML = `<h2> COMPUTER WINS GAME</h2> `
        // winnerContainer.innerHTML= `<h3>COMPUTER WINS GAME! </h3> </br> <h5>${computerScore} vs. ${playerScore}</h5>`

    } else {
        console.log("Tie")
        gameWinnerContainer.innerHTML = "<h2>TIE GAME!</h2>"
    }
}

