const prompt = require('prompt');
const spots = {
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9',
};


prompt.start();


const makeBoard = () => {
  console.log(`${spots['1']}|${spots['2']}|${spots['3']}`);
  console.log('-----');
  console.log(`${spots['4']}|${spots['5']}|${spots['6']}`);
  console.log('-----');
  console.log(`${spots['7']}|${spots['8']}|${spots['9']}`);
};

const playerMove = (player) => {
  makeBoard();
  var playerString = `Player ${player}'s move`;

  //prompts a player to choose a spot on the board
  console.log('Please choose a number between 1 - 9.');
  prompt.get(playerString, (err, results) => {
    if (err) { return console.log(err); }

    //spot the user has chosen
    const spot = results[playerString];

    if (spots[spot] === 'X' || spots[spot] === 'O') {
      //if the spot is already taken, ask the user to choose again
      console.log('Spot is already taken! please try again.');
      return playerMove(player);
    } else {
      //let the player make their move
      spots[spot] = player;

      //if a win has occurred, finish the game and let the player know they won!
      if (checkWin()) {
        return console.log(`Player ${player} has won!!!`);
      }


      //keep playing if player has not yet won
      player === 'X' ? playerMove('O') : playerMove('X');
    }

  });
};

const checkWin = () => {
  if (spots['1'] === spots['2'] && spots['2'] === spots['3']) {
    return true;
  } else if (spots['4'] === spots['5'] && spots['5'] === spots['6']) {
    return true;
  } else if (spots['7'] === spots['8'] && spots['8'] === spots['9']) {
    return true;
  } else if (spots['1'] === spots['4'] && spots['4'] === spots['7']) {
    return true;
  } else if (spots['2'] === spots['5'] && spots['5'] === spots['8']) {
    return true;
  } else if (spots['3'] === spots['6'] && spots['6'] === spots['9']) {
    return true;
  } else if (spots['1'] === spots['5'] && spots['5'] === spots['9']) {
    return true;
  } else if (spots['3'] === spots['5'] && spots['5'] === spots['7']) {
    return true;
  }

  return false;
};


playerMove('X');