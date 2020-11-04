// Read instructions. And remove this line.f

function randomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
}
const secretNumber = randomInt(100)

function getUserGuess () {
    return 14
}

globalThis.getUserGuess = getUserGuess