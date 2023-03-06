// start, play, pause and reset
let start = document.querySelector('.start-btn')
let play = document.querySelector('.play-btn')
let pause = document.querySelector('.pause-btn')
let reset = document.querySelector('.reset-btn')

let min = document.querySelector('.min')
let sec = document.querySelector('.sec')

start.addEventListener('click', startGame)
play.addEventListener('click', playGame)
pause.addEventListener('click', pauseGame)
reset.addEventListener('click', resetGame)

function startGame() {
    setInterval(updateCountdown, 1000)
    pause.style.display = 'block'
    start.style.display = 'none'
}

function playGame() {
    play.style.display = 'none'
    pause.style.display = 'block'
}

function pauseGame() {
    play.style.display = 'block'
    pause.style.display = 'none'
}

function resetGame() {
    // home reset
    homeCount = 0
    homeScoreZero.style.display = 'inline'
    homeScore.textContent = homeCount
    homeArrow.style.color = 'darkgrey'

    // visitor reset
    visitorCount = 0
    visitorScoreZero.style.display = 'inline'
    visitorScore.textContent = visitorCount
    visitorArrow.style.color = 'darkgrey'

    // reset timer and button
    min.textContent = '00'
    sec.textContent = '00'
    start.style.display = 'block'
    play.style.display = 'none'
    pause.style.display = 'none'
}

// scoring
let homeCount = 0
let homeScoreZero = document.querySelector('.home-score-zero')
let homeScore = document.querySelector('.home-score-one')

let homeAddOne = document.getElementById('home-add-one')
let homeAddTwo = document.getElementById('home-add-two')
let homeAddThree = document.getElementById('home-add-three')

homeAddOne.addEventListener('click', homePlusOne)
homeAddTwo.addEventListener('click', homePlusTwo)
homeAddThree.addEventListener('click', homePlusThree)

let visitorCount = 0
let visitorScoreZero = document.querySelector('.visitor-score-zero')
let visitorScore = document.querySelector('.visitor-score-one')

let visitorAddOne = document.getElementById('visitor-add-one')
let visitorAddTwo = document.getElementById('visitor-add-two')
let visitorAddThree = document.getElementById('visitor-add-three')

visitorAddOne.addEventListener('click', visitorPlusOne)
visitorAddTwo.addEventListener('click', visitorPlusTwo)
visitorAddThree.addEventListener('click', visitorPlusThree)

// bonus
let homeBonus = document.querySelector('.home-bonus')
let homeArrow = document.querySelector('.home-arrow')

let visitorBonus = document.querySelector('.visitor-bonus')
let visitorArrow = document.querySelector('.visitor-arrow')

homeBonus.addEventListener('click', bonusHomeColor)

visitorBonus.addEventListener('click', bonusVisitorColor)

// hideZero
function hideZero() {
    if (homeCount >= 10) {
        homeScoreZero.style.display = 'none'
    }
}

function hideZeroTwo() {
    if (visitorCount >= 10) {
        visitorScoreZero.style.display = 'none'
    }
}

// functions
// home
function homePlusOne() {
    homeCount += 1
    homeScore.textContent = homeCount
    hideZero()
}

function homePlusTwo() {
    homeCount += 2
    homeScore.textContent = homeCount
    hideZero()
}

function homePlusThree() {
    homeCount += 3
    homeScore.textContent = homeCount
    hideZero()
}

function bonusHomeColor() {
    if(homeArrow.style.color === 'red') {
        homeArrow.style.color = 'darkgrey'
    } else {
        homeArrow.style.color = 'red'
    }
}

// visitor
function visitorPlusOne() {
    visitorCount += 1
    visitorScore.textContent = visitorCount
    hideZeroTwo()
}

function visitorPlusTwo() {
    visitorCount += 2
    visitorScore.textContent = visitorCount
    hideZeroTwo()
}

function visitorPlusThree() {
    visitorCount += 3
    visitorScore.textContent = visitorCount
    hideZeroTwo()
}

function bonusVisitorColor() {
    if(visitorArrow.style.color === 'red') {
        visitorArrow.style.color = 'darkgrey'
    } else {
        visitorArrow.style.color = 'red'
    }
}

// timer
const startingMinutes = 12
let time = startingMinutes * 60

const timerEl = document.querySelector('.timer')

function updateCountdown() {
    const minutes = Math.floor(time / 60)
    let seconds = time % 60

    seconds = seconds < 10 ? '0' + seconds : seconds

    timerEl.innerHTML = 
    `
    <span class='min'>${minutes}</span>
    <span class='colon'>:</span>
    <span class='sec'>${seconds}</span>
    `
    time--
}
