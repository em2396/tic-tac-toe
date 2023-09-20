//QuerySelectors Here
var playerOneWins = document.querySelector('#left-wins');
var playerTwoWins = document.querySelector('#right-wins');
var cellsOneThroughNine = {
    one: document.querySelector('#one'),
    two: document.querySelector('#two'),
    three: document.querySelector('#three'),
    four: document.querySelector('#four'),
    five: document.querySelector('#five'),
    six: document.querySelector('#six'),
    seven: document.querySelector('#seven'),
    eight: document.querySelector('#eight'),
    nine: document.querySelector('#nine')
}
var whosTurn = document.querySelector('.whos-turn-is-it')
var boardGame = document.querySelector('.board')

//Variables Here
var winningPossibilities = [
['one', 'two', 'three'],
['four', 'five', 'six'],
['seven', 'eight', 'nine'],
['one', 'four', 'seven'],
['two', 'five', 'eight'],
['three', 'six', 'nine'],
['one', 'five', 'nine'],
['three', 'five', 'seven'],
];
var currentPlayerTurn = 'X';
var playerOneChoices = [];
var playerTwoChoices = [];
var playerOne = createPlayer(1, 'X');
var playerTwo = createPlayer(2, 'O');
var playerOneWins = 0;
var playerTwoWins = 0;
var cellClicked;


//Event Listeners Here
window.addEventListener('load', createPlayer);
boardGame.addEventListener('click', playerPlays);

//Functions Here
function createPlayer(playerNumber, token) {
    return {
        name: playerNumber,
        token: token,
        wins: 0,
        losses: 0,
        draws: 0,

    }
};

function playerPlays(event) {
    cellClicked = event.target.closest('.cells');
    var cellToAddToken = cellsOneThroughNine[cellClicked.id];
        if (cellToAddToken.innerHTML === '' && currentPlayerTurn === 'X') {
            cellToAddToken.innerHTML = currentPlayerTurn;
            playerOneChoices.push(cellToAddToken.id);
            checkIfPlayerWon(playerOneChoices, winningPossibilities)
            changeTurns(currentPlayerTurn);
        } else if (cellToAddToken.innerHTML === '' && currentPlayerTurn === 'O') {
            cellToAddToken.innerHTML = currentPlayerTurn;
            playerTwoChoices.push(cellToAddToken.id);
            checkIfPlayerWon(playerTwoChoices, winningPossibilities)
            changeTurns(currentPlayerTurn);
        }
    }
    

//this function is working
function changeTurns(player) {
    if (player === 'X') {
        currentPlayerTurn = 'O';
    } else {
        currentPlayerTurn = 'X';
    }
    return currentPlayerTurn;
}

function checkIfPlayerWon(playerCellChoices, winningsArray) {
    for (var i = 0; i < winningsArray.length; i++) {
        var currentWinningArray = winningsArray[i];
        var checkEveryInArray = currentWinningArray.every(function(cells) {
            return playerCellChoices.includes(cells);
        })
        if (checkEveryInArray && currentPlayerTurn === 'X') {
            playerOneWins++;
            alert('Player One Wins!')
            return playerOneWins;
        } else if (checkEveryInArray && currentPlayerTurn === 'O') {
            playerTwoWins++;
            alert('Player Two Wins');
            return playerTwoWins;
        }
    }
    return 'still playing'
}


// console.log(winner, 'current winning possibility being checked');
// console.log(playerCellChoices) this is logging expected results;
// console.log(winningsArray[i]); this is only logging the first array in winningsArray

//could i do:
//winningCombos {
//     possOne: 1,2,3
//     possTwo: 4,5,6
//     possThree: 7,8,9
// }

//