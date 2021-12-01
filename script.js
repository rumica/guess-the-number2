let againBtn = document.querySelector('.again')
let secretNumber = document.querySelector('.secret-number')
let guessInput = document.querySelector('.guess-input')
let checkBtn = document.querySelector('.check')
let message = document.querySelector('.message')
let scoreNumber = document.querySelector('.score-number')
let highScore = document.querySelector('.highscore')
let body = document.querySelector('body')


let num = Math.floor(Math.random() * 100);
console.log(num)

againBtn.addEventListener('click', newgame)

function newgame (){
    message.innerHTML = 'Guess now!'
    guessInput.value = '';
    secretNumber.innerHTML = '?'
    scoreNumber.innerHTML = 20;
    body.style.backgroundColor = '#77529e'
    againBtn.style.display = 'none'
    num = Math.floor(Math.random() * 100)
    console.log(num)
}

checkBtn.addEventListener('click', clickButton)

function clickButton (){
    if(guessInput.value > num){
        scoreNumber.innerHTML--
        if(scoreNumber.innerHTML > 0){
            message.innerHTML = 'Sorry, you guessed too high :('
        } else {
            message.innerHTML = 'You loose! :('
            body.style.backgroundColor = '#DE4646'
        }
    } else if(guessInput.value < num){
        scoreNumber.innerHTML--
        if(scoreNumber.innerHTML > 0){
            message.innerHTML = 'Sorry, you guessed too low :('
        } else {
            message.innerHTML = 'You loose! :('
            body.style.backgroundColor = '#DE4646'
            againBtn.style.display = 'block';
        }
    } /* else if(!guessInput){
        message.innerHTML = `Enter a number..`
    } */ else {
        message.innerHTML = `Correct!`
        secretNumber.innerHTML = `🎉${num}🎉`
        body.style.backgroundColor = '#82BB87'
        againBtn.style.display = 'block';
    }
}


