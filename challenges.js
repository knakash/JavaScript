var scores, roundscores, activePlayer, gamePlaying;

init();

//dice = Math.floor(Math.random() * 6) + 1;
//console.log(dice);

//document.querySelector('#current-' + activePlayer).textContent = dice;

//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//var x = document.querySelector('#score-0').textContent;
//console.log(x);

var prevDice;

document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying) {
        //1.Random number generator
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
    
        //2. Display the result
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';
    
        //3. update the round score if the user rolled number was not 1.
        /*
            if(dice === 6 && prevDice === 6 ){
                console.log('double sixes');
                scores[activePlayer] = 0;
                document.querySelector('#score-' + activePlayer).textContent = '0';
                nextPlayer();
            }else if(dice !== 1){
        //Add score
        roundscores +=dice;
        document.querySelector('#current-' + activePlayer).textContent = roundscores;
        }else{
            //Next player
            nextPlayer();
        }
        prevDice = dice;
        */
        if(dice1 !== 1 && dice2 !== 1){
        //Add score
        roundscores += dice1 + dice2;
        document.querySelector('#current-' + activePlayer).textContent = roundscores;
        }else{
        //Next player
        nextPlayer();
        }
    }
    
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
         //Add current score to Global scores
        scores[activePlayer] += roundscores;
        //alternative
        //scores[activePlayer] = scores[activePlayer] + roundscores;
    
        //Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        
        var input = document.querySelector('.final-score').value;
        var winningScore;
        
        //Undefined, 0, null or "" are CORECED to false
        //Anything else is CORECED to ture
        if(input) {
            var winnigScore = input;
        } else {
            winnigScore = 20;
        }
    
        //check if player won the game
        if(scores[activePlayer] >= winnigScore){
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
            } else{
             //Next player
            nextPlayer();
        
        }
        
    }
   
    
});

function nextPlayer(){
        //Next player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundscores = 0;
        
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';
        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active'); 
}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    scores = [0, 0];
    activePlayer = 0;
    roundscores = 0;
    gamePlaying = true;
    
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    
    
}

















