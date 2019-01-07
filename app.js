

var scores, roundScore, activePlayer, dice, gamePlaying, lastScore;
lastScore = 0;


dice = Math.floor(Math.random() * 6) + 1;

init();



document.querySelector('.btn-roll').addEventListener('click',function() {
   if (gamePlaying){
    var dice  = Math.floor(Math.random() * 6) + 1;

    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    if (dice == lastScore){
        nextPlayer();
    }
    if (dice !==1){
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        lastScore +=dice;
    } else {
       nextPlayer();
    }
   }
   
   

})

document.querySelector('.btn-hold').addEventListener('click',function(){
   if (gamePlaying){
    scores[activePlayer] += roundScore;

    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
   if (scores[activePlayer] >= 20){
       gamePlaying = false;
       document.querySelector('#name-' + activePlayer).textContent = 'Winner!!';
       document.querySelector('.dice').style.display = 'none';
       document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
       document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
   } 
   else{
   nextPlayer();
   }
}
})  

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}
