console.log('hi');
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'|| userInput === 'bomb'){
    return userInput;
  }else{
    console.log('Error!');
  }
};

console.log(getUserChoice('Paper')); // should print 'paper'
//console.log(getUserChoice('fork')); // should print 'Error!' and `undefined`


console.log('----------------------------');

const getComputerChoice = () => {
  // Generate a random number between 0 and 2 (inclusive)
  const randomNumber = Math.floor(Math.random() * 3);

  // Map the number to a choice using a conditional statement
  switch (randomNumber) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
};


console.log(getComputerChoice());

console.log('----------------------------');

const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice){
    return "It's a tie!";
    }else if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }else if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }else if(userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }else if(userChoice === 'bomb'){
        return 'You won!';
    }
};

console.log(determineWinner(getUserChoice('paper'),getComputerChoice()));


console.log('---------------------------');

const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw:' + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
};

console.log(playGame());
