function randNum(){
   return Math.floor(Math.random() * 3);
}

function checkResult(userChoice){
    let document.getElementById("result")
    let compChoice = randNum()
    
    if (userChoice == compChoice){
        result.innerHTML = "You tied"
    }
    else if ((userChoice == 0 && compChoice == 1) || (userChoice == 1 && compChoice == 2) || (userChoice == 2 && compChoice == 0)) {
        result.innerHTML = "You Lost to the Computer"
    }
    else if (userChoice == 1 && compChoice == 0) {
        result.innerHTML = "You won against the Computer"
    }
}
