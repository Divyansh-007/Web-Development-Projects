var ball = document.getElementById('ball');
var rod1 = document.getElementById('player1');
var rod2 = document.getElementById('player2');


const storeName = "PPName";
const storeScore = "PPMaxScore";
const rod1Name = "Player 1";
const rod2Name = "Player 2";


let score,
    maxScore,
    movement,
    rod,
    ballSpeedX = 2,
    ballSpeedY = 2;

let gameOn = false;

let fieldWidth = document.getElementById('field').offsetWidth;
let fieldHeight = document.getElementById('field').offsetHeight;

(function () {
    rod = localStorage.getItem(storeName);
    maxScore = localStorage.getItem(storeScore);

    if (rod === "null" || maxScore === "null") {
        alert("This is the first time you are playing this game. LET'S START");
        maxScore = 0;
        rod = "Player 1"
    } else {
        alert(rod + " has maximum score of " + maxScore * 100);
    }

    resetBoard(rod);
})();



function resetBoard(rodName) {
    rod1.style.left = "47%";
    rod2.style.left = "47%";
    ball.style.left = "51%";


    // Lossing player gets the ball
    if (rodName === rod2Name) {
        ball.style.top = (rod1.offsetTop + rod1.offsetHeight) + 'px';
        ballSpeedY = 2;
    } else if (rodName === rod1Name) {
        ball.style.top = (rod2.offsetTop - rod2.offsetHeight + 8) + 'px';
        ballSpeedY = -2;
    }

    score = 0;
    gameOn = false;

}



function storeWin(rod, score) {

    if (score > maxScore) {
        maxScore = score;
        localStorage.setItem(storeName, rod);
        localStorage.setItem(storeScore, maxScore);
    }

    clearInterval(movement);
    resetBoard(rod);

    alert(rod + " wins with a score of " + (score * 100) + ". Max score is: " + (maxScore * 100));

}


window.addEventListener('keypress',function(event){
    let rodSpeed = 20;
    let rodRect = rod1.getBoundingClientRect();

    if((event.key === 'A' || event.key === 'a') && rod1.offsetLeft > 205){
        rod1.style.left = (rodRect.x) - rodSpeed + 'px';
        rod2.style.left = (rodRect.x) - rodSpeed + 'px';
    }else if((event.key === 'D' || event.key === 'd') && rod1.offsetLeft < 1022){
        rod1.style.left = (rodRect.x) + rodSpeed + 'px';
        rod2.style.left = (rodRect.x) + rodSpeed + 'px';
    }


    if(event.key === 'Enter'){
        if(!gameOn){
            gameOn = true;

            let ballRect = ball.getBoundingClientRect();
            let ballX = ballRect.x;
            let ballY = ballRect.y;
            let ballDia = ballRect.width;
            let rod1Width = rod1.offsetWidth;
            let rod2Width = rod2.offsetWidth;

            movement = setInterval(function(){
                ballX = ballX + ballSpeedX;
                ballY = ballY + ballSpeedY;
                let rod1X = rod1.getBoundingClientRect().x;
                let rod2X = rod2.getBoundingClientRect().x;

                ball.style.left = ballX + 'px';
                ball.style.top = ballY + 'px';

                if(ball.offsetLeft < 201 || ball.offsetLeft > 1147){
                    ballSpeedX = -ballSpeedX;
                }

                // if(ball.offsetTop < 145 || ball.offsetTop > 525){
                //     ballSpeedY = -ballSpeedY;
                // }

                let ballPos = ballX + ballDia / 2;

                if(ball.offsetTop <= 176){  // rod 1
                    ballSpeedY = -ballSpeedY;
                    score++;

                    //game ends
                    if((ballPos < rod1X) || (ballPos > (rod1X + rod1Width))){
                        storeWin(rod2Name,score);
                    }
                }else if(ball.offsetTop >= 494){  // rod 2
                    ballSpeedY = -ballSpeedY;
                    score++;

                    // game ends
                    if ((ballPos < rod2X) || (ballPos > (rod2X + rod2Width))) {
                       storeWin(rod1Name, score);
                    }
                }
            },10);
        }
    }
});