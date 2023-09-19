//QuerySelectors Here
var playerOneWins = document.querySelector('#left-wins');
var playerTwoWins = document.querySelector('#right-wins');
var cellsOneThroughNine = {
    cellOne: document.querySelector('#one'),
    cellTwo: document.querySelector('#two'),
    cellThree: document.querySelector('#three'),
    cellFour: document.querySelector('#four'),
    cellFive: document.querySelector('#five'),
    cellSix: document.querySelector('#six'),
    cellSeven: document.querySelector('#seven'),
    cellEight: document.querySelector('#eight'),
    cellNine: document.querySelector('#nine')
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


//Event Listeners Here
boardGame.addEventListener('click', playerPlays);


//Functions Here
function createPlayer(playerNumber, token) {
    return {
        id: playerNumber,
        token: token,
        wins: 0,
        losses: 0,
        draws: 0,

    }
};

createPlayer(1, 'X');
createPlayer(2, 'O');

//function player turn
//what needs to happen before that?

function playerPlays(event) {
    var cellClicked = event.target.closest('table');
    var cellToAddToken = Object.keys(cellsOneThroughNine);
    for (var i = 0; i < cellToAddToken.length; i++){
        if (cellClicked === cellToAddToken[i] && !cellClicked.value) {
            cellToAddToken[i].innerHTML = '';
            cellToAddToken += currentPlayerTurn;
        }
    }
}



