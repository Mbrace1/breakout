const canvas = document.getElementById('canvas')
const cntx = canvas.getContext('2d')

canvas.width = 1200
canvas.height = 600

// ball
let radius = 14
let x = 150;
let y = 250;
let dx = .05;
let dy = -.05;

const drawBall = () => {
    // begin draw
    cntx.beginPath()
    // arc(x,y,radius,startAngle,endAngle)
    cntx.arc(x,y,radius,0,Math.PI*2)
    // fill color
    cntx.fillStyle = "red"
    cntx.fill()
    // end draw
    cntx.closePath();

    // add movement
    x += dx;
    y += dy;
}

const draw = () => {
    // remove previous drawings
    cntx.clearRect(0, 0, canvas.width, canvas.height);
    // draw ball
    drawBall()
}


setInterval(draw, 10);