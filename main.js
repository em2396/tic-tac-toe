//QuerySelectors Here
var leftWins = document.querySelector('#leftWins');
var rightWins = document.querySelector('#rightWins');
var whosTurn = document.querySelector('.whos-turn-is-it');
var playingSection = document.querySelector('#playingSection');
var cellsClasses = document.querySelectorAll('.cells');
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

//Variables Here
var playerWins = false; 
var playerOne = createPlayer('playerOne', 'X');
var playerTwo = createPlayer('playerTwo', 'O');
var currentPlayerTurn = playerOne;
var startOfGameTurn = playerOne;
var cellClicked;
var cellsClickedCount = 0;
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


//Event Listeners Here
window.addEventListener('load', createPlayer);
playingSection.addEventListener('click', function(event) {
    if (event.target.classList.contains('cells')) {
        playerPlays(event);
    }
});

//Functions Here
function createPlayer(playerName, token) {
    return {
        name: playerName,
        token: token,
        wins: 0,
        draws: 0,
        choices: []
    }
};

function playerPlays(event) {
    cellClicked = event.target.closest('.cells');
    cellToAddToken = cellsOneThroughNine[cellClicked.id];
    if (cellToAddToken.innerHTML === '') {
            cellsClickedCount++;
            cellToAddToken.innerHTML = currentPlayerTurn.token;
            currentPlayerTurn.choices.push(cellToAddToken.id);
            checkIfPlayerWon(currentPlayerTurn.choices, winningPossibilities)
            checkIfDraw();
            changeTurns();
            updateBanner();
        } 
    }
    
function changeTurns() {
    if (currentPlayerTurn === playerOne) {
        currentPlayerTurn = playerTwo;
    } else {
        currentPlayerTurn = playerOne;
    }
    return currentPlayerTurn;
}

function checkIfPlayerWon(playerCellChoices, winningsArray) {
    for (var i = 0; i < winningsArray.length; i++) {
        var currentWinningArray = winningsArray[i];
        checkEveryInArray = currentWinningArray.every(function(cells) {
            return playerCellChoices.includes(cells);
        });
        if (checkEveryInArray && currentPlayerTurn.token === 'X') {
            playerOne.wins++;
            leftWins.innerText = playerOne.wins + ' Wins';
            playerWins = true;
            setTimeout(resetBoard, 1500);   
        } else if (checkEveryInArray && currentPlayerTurn.token === 'O') {
            playerTwo.wins++;
            rightWins.innerText = playerTwo.wins + ' Wins';
            playerWins = true;
            setTimeout(resetBoard, 1500);
        } 
    }
}

function updateBanner() {
    if (playerWins === false && cellsClickedCount < 9) {
        whosTurn.innerText = `It's ${currentPlayerTurn.token}'s Turn!`; 
    } else if (playerWins && currentPlayerTurn.token !== 'X') {
        whosTurn.innerText = `X WINS!`;
    } else if (playerWins && currentPlayerTurn.token !== 'O') {
        whosTurn.innerText = 'O WINS!';
    } else {
        whosTurn.innerText = `It's a Draw!`
    }
}

function checkIfDraw() {
    if (cellsClickedCount === 9 && playerWins === false) {
        playerOne.draws++;
        playerTwo.draws++;
        setTimeout(resetBoard, 1500);
    }
}

function resetBoard() {
    cellsClickedCount = 0;
    playerOne.choices = [];
    playerTwo.choices = [];
    playerWins = false; 
    if (startOfGameTurn === playerOne) {
        whosTurn.innerText = 'It\'s O\'s Turn!'; 
        startOfGameTurn = playerTwo;
    } else {
        whosTurn.innerText = 'It\'s X\'s Turn!';
        startOfGameTurn = playerOne;
    }
    currentPlayerTurn = startOfGameTurn;
    for (var i = 0; i < cellsClasses.length; i++) {
        cellsClasses[i].innerText = '';
    }
}