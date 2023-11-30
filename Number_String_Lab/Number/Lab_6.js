function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}
let randomNumber = getRandomNumber(1, 5);
console.log((randomNumber).toFixed(0));
