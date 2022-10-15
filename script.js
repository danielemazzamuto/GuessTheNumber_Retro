'use strict';


const againButton = document.querySelector('.again');
const checkButton = document.querySelector('.check');
let score = 20;

const displayMessage = message => {
    document.querySelector('.message').innerHTML = message;
}
const displayScore = message => {
    document.querySelector('.score').textContent = message;
}

// generate a number between 1 and 20
let randNumber = Math.floor(Math.random() * 20) + 1;

checkButton.addEventListener('click', function () {
    const input = Number(document.querySelector('.guess').value);
    if (input <= 20 && input >= 1) {
        if (input < randNumber) {
            displayMessage('📉 Too low!');
            score--;
            displayScore(score);
        } else if (input > randNumber) {
            displayMessage('📈 Too high!');
            score--;
            displayScore(score);
        } else if (input === randNumber) {
            displayMessage('🏆 Correct number!');
            document.querySelector('.number').innerHTML = input;
            document.querySelector('body').style.background = 'green';
            document.querySelector('.highscore').innerHTML = score;
        }
    } else {
        alert('Please type in a number between 1 and 20');
    }

})


// function to reset the game
const resetGame = function () {
    // generate a number between 1 and 20
    randNumber = Math.floor(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.number').innerHTML = "?";
    document.querySelector('body').style.background = '#222';
    document.querySelector('body').style.color = '#eee';
    displayMessage('Start guessing...');
    displayScore(score);
    document.querySelector('.guess').value = "";
}

//reset game
againButton.addEventListener('click', resetGame);


