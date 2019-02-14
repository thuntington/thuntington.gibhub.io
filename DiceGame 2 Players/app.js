/* VARIABLES */

var scores, roundScore, activePlayer, gamePlaying;

function init() {
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.getElementById("dice-1").style.display = 'none';

    /* Reset Scores and Player Names*/

    document.getElementById('score-0').textContent = "0";
    document.getElementById('score-1').textContent = "0";
    document.getElementById('current-0').textContent = "0";
    document.getElementById('current-1').textContent = "0";

    document.getElementById('name-0').textContent = "Player 1";
    document.getElementById('name-1').textContent = "Player 2";

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}

init();

document.getElementById('btn-newG').addEventListener('click', init);

document.getElementById('btn-roll').addEventListener('click', function (){

    if(gamePlaying) {
        var dice1 = Math.floor(Math.random() * 6) + 1;

        console.log(dice1);

        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-1').src = 'images/dice'+dice1+'.png';


        //update score and dice values 
        if(dice1 !== 1){
            roundScore += dice1;
            document.querySelector('#current-'+activePlayer).textContent = roundScore;
        } else {
            nextPlayer();

        }
    }

}); // ? is a compare operator

function nextPlayer() {
    if (activePlayer === 0){   //can also be activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
    roundScore = 0; 

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.getElementById('dice-1').style.display = 'none';
}


document.querySelector('#btn-hold').addEventListener('click', function (){
    if(gamePlaying) {
        scores[activePlayer] += roundScore; //adds current score to player using array [activePlayer]

        document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];

        var input = document.querySelector('.final-score').value;
        var winningScore;

        if(input) {
            winningScore = input;
        } else {
            winningScore = 100;
        }
    
        if(scores[activePlayer] >= winningScore) {
            
            document.querySelector('#name-'+activePlayer).textContent = 'Winner!';
            document.getElementById('dice-1').style.display = 'none';

            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
           
            gamePlaying = false;
        } else {
            nextPlayer();
        }            
    }
});


