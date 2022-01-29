// console.log(document.querySelector('.message').textContent)
// document.querySelector('.number').textContent = 23;
// document.querySelector('.score').textContent = 10;
let secretNumber = Math.trunc(Math.random()*20 + 1);
console.log(secretNumber)
let score = 20;
let highscore = Number(document.querySelector('.highscore').textContent)
console.log(highscore)

document.querySelector('.check').addEventListener('click', function(){
   let val =  Number( document.querySelector('.guess').value)
   console.log(val, typeof val)
   if(!val){
        console.log("No Entered")
   }else if(val === secretNumber){
        document.querySelector('.number').textContent = secretNumber
        document.querySelector('.message').textContent = "Correct Answer"
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'
        if(score > highscore){
            highscore = score
            // console.log(highscore)
            document.querySelector('.highscore').textContent = highscore
        }
   }else if(val > secretNumber){
       if(score > 1){
            document.querySelector('.message').textContent = "Too High"
            score--;
            console.log(score)
            document.querySelector('.score').textContent = score;
       }else{
            document.querySelector('.message').textContent = "You Lost Game"
            document.querySelector('.score').textContent = score - 1;
       }
   }else if(val < secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = "Too Low"
            score--;
            document.querySelector('.score').textContent = score
        }else{
            document.querySelector('.message').textContent = "You Lost Game"  
            document.querySelector('.score').textContent = score - 1;
        }
   }
})

document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    document.querySelector('.number').textContent = "?"
    document.querySelector('.score').textContent = score;
    secretNumber = Math.trunc(Math.random()*20 + 1);
    document.querySelector('.guess').value = ""
    document.querySelector('.message').textContent = "Start guessing..."
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
})
