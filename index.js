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
    // drawpaddle()
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
    for(let i = 0; i < row; i++){
        for (let j = 0; j < column; j++){
            blocks.push({
                blockX: j * blockWidth,
                blockY: i * blockHeight,
                status: 1,
            })
        }
    }

    console.log(blocks)
}


function drawBlocks(){

    for (let i = 0; i < blocks.length; i++){
        console.log(blocks[i])
        console.log(blocks[i].blockX)
        if (blocks[i].status == 1){
            cntx.beginPath()

            // cntx.rect(x,y,width,height)
            // cntx.rect(0,0,20,10)
            // cntx.strokeStyle = 'blue';
            cntx.rect(blocks[i].blockX + 10, blocks[i].blockY, blockWidth, blockHeight)
            // fill color
            cntx.fillStyle = "red"
            cntx.strokeStyle = "#fff"
            cntx.lineWidth = 2
            if (i % 2 === 0) {
                cntx.fillStyle = "blue"
            }
            cntx.fill()
            cntx.stroke()
            // cntx.blocks.addAtribute("")

            // end draw
            cntx.closePath();
        }
        
    }
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


const startGame = () => {
    initialBlocks()

    setInterval(game, 10);
}

startGame()