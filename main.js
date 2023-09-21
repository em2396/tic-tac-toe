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
var whosTurn = document.querySelector('.whos-turn-is-it');
var boardGame = document.querySelector('.board');
var playingSection = document.querySelector('#playing-section');

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
            resetBoard();
        } else if (checkEveryInArray && currentPlayerTurn === 'O') {
            playerTwoWins++;
            resetBoard();
        }
    }
}

function resetBoard() {
    if (whosTurn.innerText === 'It\'s X\'s Turn!') {
        whosTurn.innerText = 'It\'s O\'s Turn!'
        currentPlayerTurn = 'O'; 
    } else {
        whosTurn.innerText = 'It\'s X\'s Turn!';
        currentPlayerTurn = 'X';
    }
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
      incrementScore()
}

