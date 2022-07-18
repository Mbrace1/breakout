//need to make every block an object in the drawBlocks function
//write control function
//determine size of elements e.g. blocks, ball



//variable variable variables...
//let blockWidth
//let blockHeight
//let score
//let status
let blocks = [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]]


function startGame() {
    score = 0
    controls()
    setInterval(game, 16.7)
}

//function that draws a block, and adds all appropriate keys
function drawBlocks(){
    for (let i = 0; i < blocks.length; i++){
        for (let j = 0; j < blocks[i].length; j++){
            block x position = j * 20
            block y positon = i * 20
            blockWidth = 20
            blockHeight = 10
            {x, y, status}
        }
    }
}

function controls(){
    element.addEventListener(left arrow press down, paddle moves left)
    element.addEventListener(right arrow press down, paddle moves right)
}


function game() {
    //clear canvas and redraw all elements in correct positions
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawBlocks()
    drawBall()
    drawPaddle()

    //ball hitting left and right wall
     if (ballx position - radius <= wall on left side){
        -directionx
     }
     else if (ballx position + radius >= wall on right side){
        -directionx
     }

     //checking if ball hits paddle
     if (bally position + radius <= 0){
        if (ballx position >= paddlex position && ballx position <= paddlex position + paddleWidth){
            -directiony
        } else {
            gameOver()
        }
     }

     //if ball hits a block
     for (let i = 0; i < blocks.length; i++){
        for (let j = 0; j < blocks[i].length; j++){
            //check position of ball compared to each block. if ball is touching block then block status goes from 1 to 0 and -directiony
            if (bally == blocks[i][j].y){
                if (ballx >= blocks[i][j].x && ballx <= blocks[i][j].x + blockLength){
                    score++
                    blocks[i][j].status = 0
                    -directiony
                    break
                }
        }
     }

    }
//

}