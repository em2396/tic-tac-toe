//QuerySelectors Here
var playerOneWins = document.querySelector('#left-wins');
var playerTwoWins = document.querySelector('#right-wins');
var cellOne = document.querySelector('#one');
var cellTwo = document.querySelector('#two');
var cellThree = document.querySelector('#three');
var cellFour = document.querySelector('#four');
var cellFive = document.querySelector('#five');
var cellSix = document.querySelector('#six');
var cellSeven = document.querySelector('#seven');
var cellEight = document.querySelector('#eight');
var cellNine = document.querySelector('#nine');
var whosTurn = document.querySelector('.whos-turn-is-it');
var boardGame = document.querySelector('.board');



//Event Listeners Here
boardGame.addEventListener('click', playerPlays);


//Functions Here

//Create a function createPlayer which creates an object, should be created on window load, need eventListener for load
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
    if (cellClicked === cellOne) {
        cellOne.innerHTML = '';
        cellOne = currentPlayerTurn;
    }
}

// win possibilities 
[1, 2, 3]
[4, 5, 6]
[7, 8, 9]
[1, 4, 7]
[2, 5, 8]
[3, 6, 9]
[1, 5, 9]
[3, 5, 7]
var currentPlayerTurn = 'X';

