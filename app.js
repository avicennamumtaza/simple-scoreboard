const dropdownItems = document.querySelectorAll('.dropdown-item');
const maxScoreButton = document.querySelector('#maxscore');
const redButton = document.querySelector('#rplus');
const blueButton = document.querySelector('#bplus');
const redScore = document.querySelector('#r');
const blueScore = document.querySelector('#b');
let selectedValue = null;

dropdownItems.forEach(item => {
    item.addEventListener('click', function (event) {
        event.preventDefault();
        selectedValue = this.getAttribute('value');
        maxScoreButton.textContent = `Max ${selectedValue} `;
        console.log(`Selected max score: ${selectedValue}`);
    });
});

plusClick(blueButton);
plusClick(redButton);

function plusClick(button) {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        if (!selectedValue) {
            if (button.id == 'bplus') {
                plusScore(blueScore);
            } else if (button.id == 'rplus') {
                plusScore(redScore);
            }
        } else {
            if (selectedValue == parseInt(blueScore.innerText) || selectedValue == parseInt(redScore.innerText)) {
                alert('The game is finish');
            } else if (button.id == 'bplus') {
                plusScore(blueScore);
            } else if (button.id == 'rplus') {
                plusScore(redScore);
            }
        }
    })
}

function plusScore(score) {
    const currentScore = parseInt(score.innerText);
    score.innerText = currentScore + 1;
}

function nullScore(a, b) {
    a.innerText = parseInt(a.innerText) * 0;
    b.innerText = parseInt(b.innerText) * 0;
}

const reset = document.querySelector('#finish');
reset.addEventListener('click', (e) => {
    nullScore(blueScore, redScore);
})