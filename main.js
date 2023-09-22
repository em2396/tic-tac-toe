//QuerySelectors Here
var leftWins = document.querySelector('#leftWins');
var rightWins = document.querySelector('#rightWins');
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
var whosTurn = document.querySelector('.whos-turn-is-it');
var boardGame = document.querySelector('.board');
var playingSection = document.querySelector('#playingSection');

//Variables Here
var currentPlayerTurn = 'X';
var startOfGameTurn = 'X';
var playerOne = createPlayer(1, 'X');
var playerTwo = createPlayer(2, 'O');
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
function createPlayer(playerNumber, token) {
    return {
        name: playerNumber,
        token: token,
        wins: 0,
        losses: 0,
        draws: 0,
        choices: []

    }
};

function playerPlays(event) {
    cellClicked = event.target.closest('.cells');
    var cellToAddToken = cellsOneThroughNine[cellClicked.id];
        if (cellToAddToken.innerHTML === '' && currentPlayerTurn === 'X') {
            cellsClickedCount++;
            cellToAddToken.innerHTML = currentPlayerTurn;
            playerOne.choices.push(cellToAddToken.id);
            checkIfPlayerWon(playerOne.choices, winningPossibilities)
            changeTurns(currentPlayerTurn);
        } else if (cellToAddToken.innerHTML === '' && currentPlayerTurn === 'O') {
            cellsClickedCount++;
            cellToAddToken.innerHTML = currentPlayerTurn;
            playerTwo.choices.push(cellToAddToken.id);
            checkIfPlayerWon(playerTwo.choices, winningPossibilities)
            changeTurns(currentPlayerTurn);
        }
    }
    
function changeTurns(currentPlayer) {
    if (currentPlayer === 'X') {
        currentPlayerTurn = 'O';
        whosTurn.innerText = 'It\'s O\'s Turn!';
    } else {
        currentPlayerTurn = 'X';
        whosTurn.innerText = 'It\'s X\'s Turn!';
    }
    return currentPlayerTurn;
}

function checkIfPlayerWon(playerCellChoices, winningsArray) {
    for (var i = 0; i < winningsArray.length; i++) {
        var currentWinningArray = winningsArray[i];
        var checkEveryInArray = currentWinningArray.every(function(cells) {
            return playerCellChoices.includes(cells);
        });
        if (checkEveryInArray && currentPlayerTurn === 'X') {
            playerOne.wins++;
            leftWins.innerText = playerOne.wins + ' Wins';
            playerTwo.losses++;
            playerOne.choices = [];
            playerTwo.choices = [];
            setTimeout(resetBoard, 1000);   
        } else if (checkEveryInArray && currentPlayerTurn === 'O') {
            playerTwo.wins++;
            rightWins.innerText = playerTwo.wins + ' Wins';
            playerOne.losses++;
            playerOne.choices = [];
            playerTwo.choices = [];
            setTimeout(resetBoard, 1000);
        } 
    }
    checkIfDraw();
}

function checkIfDraw() {
    if (cellsClickedCount === 9) {
        console.log('..........')
        playerOne.choices = [];
        playerTwo.choices = [];
        playerOne.draws++;
        playerTwo.draws++;
        setTimeout(resetBoard, 1000);
    }
}

function resetBoard() {
    if (startOfGameTurn === 'X') {
        whosTurn.innerText = 'It\'s O\'s Turn!'; 
        startOfGameTurn = 'O';
    } else {
        whosTurn.innerText = 'It\'s X\'s Turn!';
        startOfGameTurn = 'X';
    }
    currentPlayerTurn = startOfGameTurn;
    boardGame.innerHTML = '';
    boardGame.innerHTML = 
    `<tr class="row-one">
        <td class="cells" id="one"></td>
        <td class="cells" id="two"></td>
        <td class="cells" id="three"></td>
      </tr>
      <tr>
        <td class="cells" id="four"></td>
        <td class="cells" id="five"></td>
        <td class="cells" id="six"></td>
      </tr>
      <tr>
        <td class="cells" id="seven"></td>
        <td class="cells" id="eight"></td>
        <td class="cells" id="nine"></td>
      </tr>`
      console.log('exiting reset function', currentPlayerTurn)
}

//Get h1 to update every time a player plays may need to create a new function ..
//increment the score of the winner ..
//change cursor back to mouse when space is full
//create a draw scenario
//refactor code
//make CSS look better
//choose a font