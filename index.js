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
    if (ballx - radius < 10 || ballx + radius > canvas.width - 10 || bally - radius < 10 || bally + radius > canvas.height - 10) {
        cntx.shadowColor = 'red';
        cntx.shadowBlur = 15;
    } else {
        cntx.shadowColor = '#fff';
    }
    // end draw
    cntx.closePath();

    // add movement
    ballx += dx;
    bally += dy;
}

const draw = () => {
    // remove previous drawings
    cntx.clearRect(0, 0, canvas.width, canvas.height);
    // draw ball
    drawBall()
    // add collisions
    collisions()
}


// collisions
const collisions = () => {
    // ball hitting left or right wall change direction
    if (ballx + dx - radius < 0 || ballx + dx + radius > canvas.width){
        dx = -dx
    }
    // ball hitting top or bottom wall change direction
    if (bally + dx - radius < 0 || bally + dx + radius > canvas.height){ 
        dy = -dy
    }
    // add a further check if at bottom wall end game?
}



setInterval(draw, 10);