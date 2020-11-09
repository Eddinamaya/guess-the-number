// Read instructions. And remove this line.f

function randomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
}
const secretNumber = randomInt(100)

// function getUserGuess () {
//     return 14
// }

globalThis.getUserGuess = getUserGuess

// uppgift 2

function getUserGuess(){
    const guess = document.getElementById('user-input').value
    return parseInt(guess, 10) 
        
    }

    // uppgift 3

    document.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            const guess = getUserGuess()
            console.log(guess)
        }
    })


