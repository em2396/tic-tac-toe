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
var whosTurn = document.querySelector('.whos-turn-is-it')



//Event Listeners Here



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

function playerTurn() {
    if (whosTurn === 'It\'s X\'s turn!') {
        //
    }
}