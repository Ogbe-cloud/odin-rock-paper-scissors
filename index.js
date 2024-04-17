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


