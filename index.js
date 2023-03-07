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
    pause_clock
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
    start.style.display = 'block'
    play.style.display = 'none'
    pause.style.display = 'none'

    // possesion
    homeArrowPoss.style.color = 'darkgrey'
    visitorArrowPoss.style.color = 'darkgrey'

    // period
    periodNumber = 0
    period.textContent = periodNumber

    // fouls
    homeNumber = 0
    homeFouls.textContent = homeNumber
    homeFouls.style.pointerEvents = 'auto'
    visitorNumber = 0
    visitorFouls.textContent = visitorNumber
    visitorFouls.style.pointerEvents = 'auto'
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
    if (homeArrow.style.color === 'red') {
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
    if (visitorArrow.style.color === 'red') {
        visitorArrow.style.color = 'darkgrey'
    } else {
        visitorArrow.style.color = 'red'
    }
}

// timer
let timerEl = document.querySelector('.timer')
let time_limit = 12




// possession
let homeArrowPoss = document.querySelector('.home-arrow-poss')
let visitorArrowPoss = document.querySelector('.visitor-arrow-poss')

homeArrowPoss.addEventListener('click', homePoss)
visitorArrowPoss.addEventListener('click', visitorPoss)

function homePoss() {
    homeArrowPoss.style.color = 'red'
    visitorArrowPoss.style.color = 'darkgrey'
}

function visitorPoss() {
    homeArrowPoss.style.color = 'darkgrey'
    visitorArrowPoss.style.color = 'red'
}

// period
let period = document.querySelector('.period-number')
periodNumber = 0

period.addEventListener('click', () => {
    periodNumber += 1

    period.textContent = periodNumber

    if (periodNumber >= 4) {
        return periodNumber = 0
    }
})

// fouls
let homeFouls = document.querySelector('.home-fouls-num')
let visitorFouls = document.querySelector('.visitor-fouls-num')

homeNumber = 0
visitorNumber = 0

homeFouls.addEventListener('click', () => {
    homeNumber += 1

    homeFouls.textContent = homeNumber

    if (homeNumber >= 72) {
        homeFouls.style.pointerEvents = 'none'
    }
})

visitorFouls.addEventListener('click', () => {
    visitorNumber += 1

    visitorFouls.textContent = visitorNumber

    if (visitorNumber >= 72) {
        visitorFouls.style.pointerEvents = 'none'
    }
})
