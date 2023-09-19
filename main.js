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
[1, 2, 3],
[4, 5, 6],
[7, 8, 9],
[1, 4, 7],
[2, 5, 8],
[3, 6, 9],
[1, 5, 9],
[3, 5, 7],
];
var currentPlayerTurn = 'X';
var playerOneChoices = [];
var playerTwoChoices = [];
var playerOne = createPlayer(1, 'X');
var playerTwo = createPlayer(2, 'O');
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

//this function changes betwen X and O when clicking on cells
function playerPlays(event) {
    // console.log('hello')
    //event.target is <td id='one'></td> so the cell clicked.id is one
    // console.log(event.target);
    cellClicked = event.target.closest('.cells');
    var cellToAddToken = cellsOneThroughNine[cellClicked.id];
    // console.log(cellToAddToken)
    // console.log(cellToAddToken[i], cellClicked.id, '<this is id', cellClicked.value, "value");
    //    console.log(cellsOneThroughNine[cellClicked.id]);
        if (cellToAddToken.innerHTML === '') {
            cellToAddToken.innerHTML = currentPlayerTurn;
            changeTurns(currentPlayerTurn);
        }
    }
    // checkIfPlayerWon(playerCellChoices, winningPossibilities)

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
        if (!playerCellChoices.includes(winningsArray[i])) {
            return false;
        } else {
            return true;
        }
    }
}



