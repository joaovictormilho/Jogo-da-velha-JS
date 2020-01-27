var elementCanvas = document.getElementById('game-canvas');
var ctx = elementCanvas.getContext('2d');

var board = [0,1,2,3,4,5,6,7,8];

function drawBoard(params) {

    ctx.fillStyle = '#357050';
    ctx.fillRect(0, 0, elementCanvas.width, elementCanvas.height);
    ctx.fillStyle = 'white';
    console.log((elementCanvas.width / 3) - 5);
    console.log((elementCanvas.height / 3) + 5);
    ctx.fillRect((elementCanvas.width / 3) - 5, 5, 10, elementCanvas.height - 10);
    ctx.fillRect((elementCanvas.width / 3) * 2 - 5, 5, 10, elementCanvas.height - 10);
    ctx.fillRect(5, (elementCanvas.height / 3) - 5, elementCanvas.width - 10, 10);
    ctx.fillRect(5, (elementCanvas.height / 3) * 2 - 5, elementCanvas.width - 10, 10);    
}



function game() {
    drawBoard();
}

game();