// Get the elements from the DOM
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resultText = document.getElementById('result-text');
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');

// Define choices
const choices = ['Rock', 'Paper', 'Scissors'];

// Track scores
let playerScore = 0;
let computerScore = 0;

// Function to generate a random choice for the computer
function computerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(player, computer) {
  if (player === computer) {
    return "It's a tie!";
  }
  if (
    (player === 'Rock' && computer === 'Scissors') ||
    (player === 'Paper' && computer === 'Rock') ||
    (player === 'Scissors' && computer === 'Paper')
  ) {
    playerScore++;
    return "You win!";
  } else {
    computerScore++;
    return "Computer wins!";
  }
}

// Function to add animation and reset it
function resetChoiceAnimations() {
  rockButton.classList.remove('rock-defeated');
  paperButton.classList.remove('paper-defeated');
  scissorsButton.classList.remove('scissors-defeated');
}

// Function to play the game
function playGame(playerChoice) {
  const computerChoiceResult = computerChoice();
  const result = determineWinner(playerChoice, computerChoiceResult);
  
  // Display results
  resultText.textContent = `You chose ${playerChoice}. Computer chose ${computerChoiceResult}. ${result}`;
  
  // Apply animations based on the outcome
  resetChoiceAnimations();
  
  if (playerChoice === 'Rock' && computerChoiceResult === 'Scissors') {
    // Rock wins, no animation
  } else if (playerChoice === 'Paper' && computerChoiceResult === 'Rock') {
    // Paper wins, no animation
  } else if (playerChoice === 'Scissors' && computerChoiceResult === 'Paper') {
    // Scissors wins, no animation
  } else if (playerChoice === 'Rock' && computerChoiceResult === 'Paper') {
    rockButton.classList.add('rock-defeated');
  } else if (playerChoice === 'Paper' && computerChoiceResult === 'Scissors') {
    paperButton.classList.add('paper-defeated');
  } else if (playerChoice === 'Scissors' && computerChoiceResult === 'Rock') {
    scissorsButton.classList.add('scissors-defeated');
  }

  // Update score
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
}

// Add event listeners to the buttons
rockButton.addEventListener('click', () => playGame('Rock'));
paperButton.addEventListener('click', () => playGame('Paper'));
scissorsButton.addEventListener('click', () => playGame('Scissors'));
