const canvas = document.getElementById('canvas')
const cntx = canvas.getContext('2d')

canvas.width = 580
canvas.height = 400

let score = 0;
let interval

// ball
let radius = 14
let ballx
let bally
let dx
let dy

let htmlScore = document.getElementById("score")

const drawBall = () => {
    // begin draw
    cntx.beginPath()
    // arc(x,y,radius,startAngle,endAngle)
    cntx.arc(ballx,bally,radius,0,Math.PI*2)
    // fill color
    cntx.fillStyle = "red"
    cntx.fill()

    // 10 co-ods away from any wall add a shadow color
    // if (ballx - radius < 10 || ballx + radius > canvas.width - 10 || bally - radius < 10 || bally + radius > canvas.height - 10) {
    //     cntx.filter = 'blur(2px)';
    // } else {
    //     cntx.filter = 'blur(0px)';
    // }
    cntx.fillStyle = "red"
    cntx.fill()
    // end draw
    cntx.closePath();

    // add movement
    ballx += dx;
    bally += dy;
}

const game = () => {
    // remove previous drawings
    // cntx.clearRect(0, 0, canvas.width, canvas.height);
    cntx.fillStyle = 'rgba(255, 255, 255, .2)';
    cntx.fillRect(0, 0, canvas.width, canvas.height);
    // draw ball
    drawBlocks()
    drawBall()
    // draw panel
    drawPaddle()
    movePaddle()
    // movePaddle(event)
    // add collisions
    collisions()
}


let blockHeight = 40
let blockWidth = 80
let blocks = [];
let column = 7;
let row = 3;

//function that draws a block, and adds all appropriate keys
function initialBlocks() {
    blocks.length = 0
    for(let i = 0; i < row; i++){
        for (let j = 0; j < column; j++){
            blocks.push({
                x: j * blockWidth,
                y: i * blockHeight,
                status: 1,
            })
        }
    }

    // console.log(blocks)
}


function drawBlocks(){

    for (let i = 0; i < blocks.length; i++){
        // console.log(blocks[i])
        // console.log(blocks[i].x)
        if (blocks[i].status == 1){
            cntx.beginPath()
            cntx.rect(blocks[i].x + 10, blocks[i].y + 5, blockWidth, blockHeight)
            // fill color
            cntx.fillStyle = "red"
            cntx.strokeStyle = "#fff"
            cntx.lineWidth = 2
            // if (i % 2 === 0) {
            //     cntx.fillStyle = "blue"
            // }
            cntx.fill()
            cntx.stroke()

            // end draw
            cntx.closePath();
        }
        
    }
}

// collisions
const collisions = () => {
    // wall collisions
    // ball hitting left or right wall change direction
    if (ballx - radius < 0 || ballx + radius > canvas.width){
        dx = -dx
    }
    // ball hitting top or bottom wall change direction
    if (bally - radius < 0){ 
        dy = -dy
    }
    // add a further check if at bottom wall end game?
    if (bally + radius >= canvas.height - paddleHeight){
        if (ballx >= paddleX && ballx <= paddleX + paddleWidth){
            dy = -dy
            console.log("paddle hit")
        } 
        // <= 400
        else if (bally + radius >= canvas.height) { {
            //Game Over
            clearInterval(interval)
        }
    }

    }


    // block collisions
    for (let i = 0; i < blocks.length; i++){
        if (blocks[i].status === 1) {
            //check position of ball compared to each block. if ball is touching block then block status goes from 1 to 0 and -directiony
            if (bally >= blocks[i].y && bally <= blocks[i].y + blockHeight){
                if (ballx >= blocks[i].x && ballx <= blocks[i].x + blockWidth){
                    score++
                    htmlScore.innerHTML = score
                    blocks[i].status = 0
                    dy = -dy
                    // console.log(blocks)
                }
            }
        }
    }
}

// paddle's initial position
let right = false
let left = false

let paddleWidth = 150
let paddleHeight = 25
let paddleX = canvas.width / 2 - paddleWidth / 2
let paddleY = canvas.height - paddleHeight

// draw paddle
const drawPaddle = () => {
    if (left) {
        paddleX -= 5
        if (paddleX < 0) {
            paddleX = 0
        }
    }

    if (right) {
        paddleX += 5
        if (paddleX >= canvas.width - paddleWidth) {
            paddleX = canvas.width - paddleWidth
        }
    }

    cntx.beginPath()
    cntx.rect(paddleX, paddleY, paddleWidth, paddleHeight)
    cntx.fillStyle = "blue"
    cntx.fill()
    cntx.closePath();
}

// move paddle
const movePaddle = () => {
    document.addEventListener('keydown', e => {
        if (e.key === 'ArrowLeft') {
            left = true
        }
    })
    document.addEventListener("keyup", e => {
        if(e.key == "ArrowLeft") {
        left = false;
        }
    })

    document.addEventListener('keydown', e => {
        if (e.key === 'ArrowRight') {
            right = true
        }
    })
    document.addEventListener("keyup", e => {
        if(e.key == "ArrowRight") {
        right = false;
        }
    })

}



// game over


// start/restart game

const startGame = () => {
    score = 0
    htmlScore.innerHTML = 0
    initialBlocks()
    interval = setInterval(game, 10);
    ballx = 150;
    bally = 250;
    dx = 1
    dy = 1
    paddleX = canvas.width / 2 - paddleWidth / 2
    paddleY = canvas.height - paddleHeight
}


