// start with variables to track user score.
let userScore = 0;
let compScore = 0;

//accessing all choices.
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector('#msg');

const compChoice = document.querySelector('.compChoice');
const userScorePara = document.querySelector('#userScore');
const compScorePara = document.querySelector('#compScore');

//generate computer choice
const genCompChose = () => {
    const options = ['rock', 'scissors', 'paper'];
    //rock, paper, scissors (should)
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

//display computer choice
const displayCompChoice = (compChose) => {
    compChoice.innerText = `Computer chose ${compChose}`
}

const drawGame = () => {
    msg.innerText = 'Game was draw'
    msg.style.backgroundColor = '#23395b'
}

const showWinner = (userWin, userChoice, compChose) => {
    if (userWin == true) {
        userScore++
        userScorePara.innerText = userScore;
        msg.innerText = `You win. Your ${userChoice} beats ${compChose}`;
        msg.style.backgroundColor = '#59c9a5'

    } else {
        compScore++
        compScorePara.innerText = compScore;
        msg.innerText = `Computer win. ${compChose} beats your ${userChoice}`
        msg.style.backgroundColor = '#d81e5b'
    }
}
//generates computers choice randomly and then compare whether player wins or computer
const playgame = (userChoice) => {
    //generate computer choice
    const compChose = genCompChose();

    displayCompChoice(compChose)

    if (userChoice === compChose) {
        //Draw Game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === 'rock') {
            //paper, scissors
            userWin = compChose === 'paper' ? false : true
        } else if (userChoice === 'paper') {
            //scissors, rock
            userWin = compChose === 'scissors' ? false : true
        } else if (userChoice === 'scissors') {
            //rock, paper
            userWin = compChose === 'rock' ? false : true
        }
        showWinner(userWin, userChoice, compChose)
    }
};

//tracks clicking events
choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute('id');
        // console.log(`${userChoice} was clicked`)
        playgame(userChoice);
    });
});