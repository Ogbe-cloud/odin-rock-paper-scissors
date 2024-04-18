
/**function getComputerChoice(){
	let computer = Math.random();
	console.log(computer)
	let computerChoice;
	if (computer < 0.45){
          computerChoice = 'rock';
		  console.log(computerChoice);
	}else if((computer > 0.45) && computer < 0.75){
		computerChoice = 'paper';
		console.log(computerChoice);
	}else{
		computerChoice = 'scissors';
		console.log(computerChoice);
	}
	return computerChoice;

}
getComputerChoice();

function playRound(playerSelection, computerSelection){
     if(playerSelection === 'rock' && computerSelection === 'rock'){
		return 'It is a tie';
	 }else if(playerSelection === 'paper' && computerSelection === 'rock'){
		return 'You win';
	 }else if(playerSelection === 'scissors' && computerSelection === 'rock'){
		return 'You lose';
	 }else if(playerSelection === 'rock' && computerSelection === 'paper'){
		return 'You lose';
	 }else if(playerSelection === 'paper' && computerSelection === 'paper'){
		return 'tie';
	 }else if(playerSelection === 'scissors' && computerSelection === 'paper'){
		return 'You win';
	 }else if(playerSelection === 'rock' && computerSelection === 'scissors'){
		return'You win';
	 }else if(playerSelection === 'paper' && computerSelection === 'scissors'){
		return'You lose';
	 }else if(playerSelection === 'scissors' && computerSelection === 'scissors'){
		return'You tie';
	 }
	 
}
const computerSelection = getComputerChoice();

console.log(playRound('scissors', computerSelection));
*/



let computerScore = 0;
let playerScore = 0;



let result = document.querySelector('.winner');

function getComputerChoice() {
    let computer = Math.random();
    let computerChoice;
    if (computer < 0.45) {
        computerChoice = 'rock';
    } else if (computer >= 0.45 && computer < 0.75) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'It is a tie';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        return 'You win';
    } else {
        computerScore++;
        return 'You lose';
    }
}

function updateScoreDisplay() {
    result.textContent = `Player Score: ${playerScore}, Computer Score: ${computerScore}`;
    if (playerScore === 5) {
        alert('You win the game! 🏆');
		playerScore = 0;
    } else if (computerScore === 5) {
        alert('Computer wins the game! 🏆');
		computerScore = 0;
    }
}

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

rock.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'rock';
    const roundResult = playRound(playerSelection, computerSelection);
    result.textContent = roundResult;
    updateScoreDisplay();
});

paper.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'paper';
    const roundResult = playRound(playerSelection, computerSelection);
    result.textContent = roundResult;
    updateScoreDisplay();
});

scissors.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'scissors';
    const roundResult = playRound(playerSelection, computerSelection);
    result.textContent = roundResult;
    updateScoreDisplay();
});
 
