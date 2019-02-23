let imgArray = new Array();

imgArray[0] = new Image();
imgArray.src = 'assets/rock.png';

imgArray[1] = new Image();
imgArray.src = 'assets/paper.png';

imgArray[2] = new Image();
imgArray.src = 'assets/scissors.png';

function display(userChoice, compChoice){
    let userPlace = document.getElementById('userPlace')
    let compPlace = document.getElementById('compPlace')
    
    userPlace.setAttribute('src', imgArray[userChoice].src);
    compPlace.setAttribute('src', imgArray[compChoice].src);
}

function randNum(){
   return Math.floor(Math.random() * 3);
}

function checkResult(userChoice){
    let result = document.getElementById("result")
    console.log(result)
    let compChoice = randNum()
    
    display(userChoice, compChoice)
    
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
