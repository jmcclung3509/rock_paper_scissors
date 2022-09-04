function getComputerChoice(){
   let computerChoice = randomChoice()
   
    console.log(computerChoice)
    if (computerChoice == 1){
        console.log("Rock")
    } else if (computerChoice ==2){
        console.log("Scissors")
    } else {
        console.log("Paper")
    }

}
function randomChoice(){
    let randomIndex = Math.floor((Math.random() *3) +1)
    console.log(randomIndex)
    return randomIndex
}
getComputerChoice()