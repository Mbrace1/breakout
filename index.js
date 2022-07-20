const canvas = document.getElementById('canvas')
const cntx = canvas.getContext('2d')

canvas.width = 580
canvas.height = 400

// ball
let radius = 14
let ballx = 150;
let bally = 250;
let dx = 1;
let dy = 1;

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

    cntx.beginPath()
    cntx.fillStyle = "red"
    cntx.fill()
    // end draw
    cntx.closePath();

    // add movement
    ballx += dx;
    bally += dy;
}

const draw = () => {
    // remove previous drawings
    // cntx.clearRect(0, 0, canvas.width, canvas.height);
    cntx.fillStyle = 'rgba(255, 255, 255, .2)';
    cntx.fillRect(0, 0, canvas.width, canvas.height);
    // draw ball
    drawBall()
    // draw panel
    drawPaddle()
    movePaddle()
    // movePaddle(event)
    // add collisions
    collisions()
}


// collisions
const collisions = () => {
    // ball hitting left or right wall change direction
    if (ballx - radius < 0 || ballx + radius > canvas.width){
        dx = -dx
    }
    // ball hitting top or bottom wall change direction
    if (bally - radius < 0 || bally + radius > canvas.height){ 
        dy = -dy
    }
    // add a further check if at bottom wall end game?
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
        document.addEventListener("keyup", e => {
            if(e.key == "ArrowLeft") {
            left = false;
            }
        })
    })

    document.addEventListener('keydown', e => {
        if (e.key === 'ArrowRight') {
            right = true
        }
        document.addEventListener("keyup", e => {
            if(e.key == "ArrowRight") {
            right = false;
            }
        })
    })

}

setInterval(draw, 10);
