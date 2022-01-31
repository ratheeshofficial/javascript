'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
const currentScore0El = document.querySelector('#current--0')
const currentScore1El = document.querySelector('#current--1')

const switchUser = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0
    currentscore = 0
    activePlayer = activePlayer === 0 ? 1 : 0
    player0El.classList.toggle('player--active')
    player1El.classList.toggle('player--active')
}
// starting conditions
score0El.textContent = 0
score1El.textContent = 0
diceEl.classList.add('hidden')

let scores = [0,0]
let currentscore = 0;
let activePlayer = 0;
let playing = true;

btnRoll.addEventListener('click',function(){
    if(playing){
        // Generating Random dice roll
        let dice = Math.trunc(Math.random() * 6 + 1)
        
        // Display Dice
        diceEl.classList.remove('hidden')
        diceEl.src = `img/dice-${dice}.png`

        // Checked for rolled 1
        if(dice !== 1){
            currentscore = currentscore + dice
            // currentScore0El.textContent = currentscore 
            document.getElementById(`current--${activePlayer}`).textContent = currentscore
        }else{
            // switch to new player
            switchUser()
        }
    }
})

btnHold.addEventListener('click',function(){
    if(playing){
        scores[activePlayer] += currentscore 
        // scores[1] = scores[1] + currentscore
        console.log(scores[activePlayer])
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
    
        if(scores[activePlayer] >= 10){
            playing = false
            // console.log("match win")
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
            diceEl.classList.add('hidden')
        }else{
            switchUser()
        }
    }
})

btnNew.addEventListener('click',function(){
    scores = [0,0]
    currentscore = 0;
    activePlayer = 0;
    playing = true;

    currentScore0El.textContent = 0;
    currentScore1El.textContent = 0;
    score0El.textContent = 0
    score1El.textContent = 0

    player0El.classList.add('player--active')
    player1El.classList.remove('player--active')

    player0El.classList.remove('player--winner')
    player1El.classList.remove('player--winner')
    diceEl.classList.add('hidden')

})
