const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
      }
  else {
      console.log('ERROR!  Input must be rock, paper or scissors.');
      };
};

const getComputersChoice = () => {
  let computersChoice = Math.floor(Math.random() * 3);
  switch (computersChoice) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  };
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'Tie game.';
  } else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer wins!';
    } else {
      return 'You win!';
    };
  } else if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer wins!';
    } else {
      return 'You win!';
    };
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer wins!';
    } else {
      return 'You win!';
    };
  } else if (userChoice === 'bomb') {
    return 'You win!';
  };
};

const playGame = () => {
  let userChoice = getUserChoice('bomb');
  let computerChoice = getComputersChoice();
  console.log(userChoice);
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
