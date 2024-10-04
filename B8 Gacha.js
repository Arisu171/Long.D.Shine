let randomNumber = null;
let difficultyLevel = null;

function startGame() {
    const difficulty = parseInt(document.getElementById('difficulty').value);

    if (isNaN(difficulty)) {
        document.getElementById('gameSection').style.display = 'none';
        document.getElementById('message').textContent = 'You chưa chọn level!!';
        return;
    } else if (difficulty < 1) {
        document.getElementById('gameSection').style.display = 'none';
        document.getElementById('message').textContent = 'Bạn sợ à ?';
        return;
    } else if (difficulty > 9) {
        document.getElementById('gameSection').style.display = 'none';
        document.getElementById('message').textContent = 'Căng z bruh, tem tém thôi !!';
        return;
    }

    difficultyLevel = difficulty;
    randomNumber = Math.floor(Math.random() * (difficulty + 1));

    document.getElementById('gameSection').style.display = 'block';
    document.getElementById('maxNumber').textContent = difficulty;
    document.getElementById('message').textContent = 'Gacha Go';

    generateNumberOptions(difficulty);
    document.addEventListener('keydown', handleKeyPress);
}

function generateNumberOptions(maxNumber) {
    const numberOptions = document.getElementById('numberOptions');
    numberOptions.innerHTML = '';

    for (let i = 0; i <= maxNumber; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.onclick = function () {
            checkGuess(i);
        };
        numberOptions.appendChild(button);
    }
}

function handleKeyPress(event) {
    const userGuess = parseInt(event.key);

    if (!isNaN(userGuess) && userGuess >= 0 && userGuess <= difficultyLevel) {
        checkGuess(userGuess);
    } else {
        document.getElementById('message').textContent = `Chọn đáp án từ 0 đến ${difficultyLevel}.`;
    }
}

function checkGuess(userGuess) {
    if (userGuess === randomNumber) {
        document.getElementById('message').innerHTML = `<p>Siuuuuuu!!</p><p>True Answer is ${randomNumber}</p>`;
        // document.getElementById('trueanswer').textContent = `True Answer is ${randomNumber}`;
        document.removeEventListener('keydown', handleKeyPress);
    } else {
        randomNumber = Math.floor(Math.random() * (difficultyLevel + 1));
        document.getElementById('message').textContent = `Again 0 - ${difficultyLevel}.`;
    }
}
