let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const compGenChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const rendomIdx = Math.floor(Math.random() * 3);
    return options[rendomIdx];
}

const drowGame = () => {
    console.log("Game was drow");
    msg.innerHTML = "Game was draw. Play again!";
    msg.style.backgroundColor = "#081b31";
}
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
     userScore++
     userScorePara.innerHTML = userScore;
        msg.innerHTML = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++
        compScorePara.innerHTML = compScore;
        msg.innerHTML = `You loss. ${compChoice} beats your ${userChoice}`;;
        msg.style.backgroundColor = "red";
    }

}



const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    const compChoice = compGenChoice();
    console.log("com choice =", compChoice);

    if (userChoice === compChoice) {
        drowGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}



choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    })
})