
const dice = document.getElementById('dice');
const image = document.getElementById('image');

function roll() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    image.src = `./img/${randomNumber}.png`;
}

dice.addEventListener('click', roll);
