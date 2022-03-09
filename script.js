let weapons = ["rock", "paper", "scissors", "lizard", "spock"];
let playerScore = 0;
let computerScore = 0;
let rounds = 0;
let roundWinner;
let playerSelection;

const playerScoreNumber = document.getElementById('playerScore');
const computerScoreNumber = document.getElementById('computerScore');
const scoreMessage = document.getElementById('message');
const overlay = document.getElementById('overlay');
const modal = document.getElementById('modal');
const endgameMsg = document.getElementById('endgameMsg');
const restartBtn = document.getElementById('restartBtn')
const playerWeapons = document.querySelectorAll('.weapon');

restartBtn.addEventListener('click', restartGame);

playerWeapons.forEach(weapon => {
    weapon.addEventListener('click', (e) => {
        playRound(e.currentTarget.id, computerPlay( ));
    });
});

function playRound(playerSelection, computerSelection) {

    console.log(playerSelection);
    console.log(computerSelection);

    if (playerSelection == computerSelection) {
        roundWinner = 'tie';
    } else if (
        (playerSelection == "paper" && computerSelection == "scissors") ||
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "lizard" && computerSelection == "rock") ||
        (playerSelection == "spock" && computerSelection == "lizard") ||
        (playerSelection == "scissors" && computerSelection == "spock") ||
        (playerSelection == "lizard" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "lizard") ||
        (playerSelection == "spock" && computerSelection == "paper") || 
        (playerSelection == "rock" && computerSelection == "spock") ||
        (playerSelection == "scissors" && computerSelection == "rock")) {

        roundWinner = 'computer';
        computerScore++;
        rounds++;
    } else {
        roundWinner = 'player';
        playerScore++;
        rounds++;
    }

    if (roundWinner === 'tie') {
        scoreMessage.textContent = `It's a tie! I chose ${playerSelection} too.`;
    } else if (roundWinner === 'computer') {
        scoreMessage.textContent = `You lose! ${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}.`;
    } else if (roundWinner === 'player') {
        scoreMessage.textContent = `You win! ${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}.`;
    }

    playerScoreNumber.textContent = `${playerScore}`;
    computerScoreNumber.textContent = `${computerScore}`;
    checkVictory();
}

function checkVictory() {
    if (computerScore == 3 || playerScore == 3) {
        gameOver();
    }
}

function setFinalMessage() {
    if (playerScore > computerScore){
        endgameMsg.textContent = "Fine, you win this time."
    } else {
        endgameMsg.textContent = "Awww, looks like you lost."
    }
}

function gameOver() {
    overlay.classList.add('active')
    modal.classList.add('active')
    setFinalMessage();
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreNumber.textContent = '0';
    computerScoreNumber.textContent = '0';
    scoreMessage.textContent = '';
    overlay.classList.remove('active')
    modal.classList.remove('active')
}

function computerPlay() {
    return weapons[Math.floor(Math.random() * weapons.length)];
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

let i = 0;
let j = 0;
let title1 = "ROCK, PAPER, SCISSORS, LIZARD, SPOCK";
let title2 = "CHOOSE YOUR WEAPON";

function typeWriter() {
  if (i < title1.length) {
    document.querySelector("h1").innerHTML += title1.charAt(i);
    i++;
    setTimeout(typeWriter, 75);
}
setTimeout(function typeWriter2() {
    if (j < title2.length) {
        document.querySelector("h2").innerHTML += title2.charAt(j);
        j++;
        setTimeout(typeWriter2, 2000);
    }
}, 3200);
}

typeWriter();