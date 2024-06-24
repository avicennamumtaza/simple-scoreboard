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
                if (parseInt(blueScore.innerText) == selectedValue) {
                    // console.log('tttttttttttttttttttttttt')
                    blueScore.style.color = 'green'
                }
            } else if (button.id == 'rplus') {
                plusScore(redScore);
                if (parseInt(redScore.innerText) == selectedValue) {
                    // console.log('tttttttttttttttttttttttt')
                    redScore.style.color = 'green'
                }
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
    redScore.style.color = '#000'
    blueScore.style.color = '#000'
}

const reset = document.querySelector('#finish');
reset.addEventListener('click', (e) => {
    nullScore(blueScore, redScore);
})

// const changeBg = (color) => {
//     return new Promise((resolve, reject) => {
//         const loadTime = Math.random();
//         setTimeout(() => {
//             if (loadTime < 0.7) {
//                 resolve(color);
//             }
//             reject('Request timeout.');
//         }, 2000);
//     })
// }

// changeBg('red')
//     .then((data) => {
//         console.log(`Background change to ${data}`);
//         document.body.style.backgroundColor = data;
//         changeBg('yellow')
//             .then((data) => {
//                 console.log(`Background change to ${data}`);
//                 document.body.style.backgroundColor = data;
//                 changeBg('green')
//                     .then((data) => {
//                         console.log(`Background change to ${data}`);
//                         document.body.style.backgroundColor = data;
//                         changeBg('blue')
//                             .then((data) => {
//                                 console.log(`Background change to ${data}`);
//                                 document.body.style.backgroundColor = data;
//                             })
//                     })
//             })
//     })
//     .catch((err) => {
//         console.log(`Error: ${err}`);
//     });

document.body.style.transition = 'background-color 1s ease';
const changeBg2 = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    })
}

changeBg2('red', 1000)
    .then(() => changeBg2('yellow', 1500))
    .then(() => changeBg2('green', 2000))
    .then(() => changeBg2('blue', 2500))
    .then(() => changeBg2('violet', 3000))
    .then(() => changeBg2('black', 3500))
    .catch(() => console.log('ERROR!!!'));