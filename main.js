var elementCanvas = document.getElementById('game-canvas');
var ctx = elementCanvas.getContext('2d');

var board = [[null, null, null], [null, null, null], [null, null, null] ];  // Tabuleiro
var boardCopy = [];                                                         // Cópia do Tabuleiro
var lineWidth = elementCanvas.width / 50;                                   // Espessura das linhas
var square = elementCanvas.width / 3;                                       // Tamanho dos quadrados
const div = 3.3333333333333333;
var jogadorVez = true;

function endGame() {
    for (let i = 0; i < 3; i++) 
        for (let j = 0; j < 3; j++) 
            board[i][j] = null;
    copyBoard();
    setTimeout(() => {
        alert('Fim do jogo!');
    }, 100);
    setTimeout(() => {
        drawBoard();
    }, 100);
}

function isEqual(a,b,c) {
    if(a == b && b == c){
        if(a)
            return 0;
        else if(a == false)
            return 1;
    }
}

function testEnd() {
    if (isEqual(boardCopy[0], boardCopy[1], boardCopy[2]) == 0 || isEqual(boardCopy[3], boardCopy[4], boardCopy[5]) == 0 || 
        isEqual(boardCopy[6], boardCopy[7], boardCopy[8]) == 0 || isEqual(boardCopy[0], boardCopy[3], boardCopy[6]) == 0 ||
        isEqual(boardCopy[1], boardCopy[4], boardCopy[7]) == 0 || isEqual(boardCopy[2], boardCopy[5], boardCopy[8]) == 0 || 
        isEqual(boardCopy[0], boardCopy[4], boardCopy[8]) == 0 || isEqual(boardCopy[2], boardCopy[4], boardCopy[6]) == 0) {
        endGame();
    }
    else if (isEqual(boardCopy[0], boardCopy[1], boardCopy[2]) == 1 || isEqual(boardCopy[3], boardCopy[4], boardCopy[5]) == 1||
            isEqual(boardCopy[6], boardCopy[7], boardCopy[8]) == 1 || isEqual(boardCopy[0], boardCopy[3], boardCopy[6]) == 1 ||
            isEqual(boardCopy[1], boardCopy[4], boardCopy[7]) == 1 || isEqual(boardCopy[2], boardCopy[5], boardCopy[8]) == 1 ||
            isEqual(boardCopy[0], boardCopy[4], boardCopy[8]) == 1 || isEqual(boardCopy[2], boardCopy[4], boardCopy[6]) == 1) {
        endGame();
    }
}

function copyBoard() {
    let k = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            boardCopy[k] = board[i][j];
            k++;
        }
    }
}

function drawBoard() {

    ctx.fillStyle = '#234632';
    ctx.fillRect(0, 0, elementCanvas.width, elementCanvas.height);
    ctx.fillStyle = 'black';
    ctx.fillRect(square - (lineWidth/2), (lineWidth/2),lineWidth, elementCanvas.height);
    ctx.fillRect((square) * 2 - (lineWidth/2), (lineWidth/2),lineWidth, elementCanvas.height);
    ctx.fillRect((lineWidth/2), square - (lineWidth/2), elementCanvas.width -lineWidth,lineWidth);
    ctx.fillRect((lineWidth/2), (square) * 2 - (lineWidth/2), elementCanvas.width -lineWidth,lineWidth);

    let x = y = - square;
    for (let i = 0; i < 3; i++) {
        y += square;
        for (let j = 0; j < 3; j++) {
            x += square;
            if (board[i][j])
                drawX(x,y);
            else if(board[i][j] === false)
                drawCircle(x,y);
        }
        x = -square;
    }

}

function drawX(x,y) {
    x += elementCanvas.width * 0.0125;
    y += elementCanvas.height * 0.0125;
    ctx.beginPath();
    ctx.moveTo(x, y+lineWidth/2);
    ctx.lineTo(x+(elementCanvas.width/div), y+(elementCanvas.width/div)+lineWidth/2);
    ctx.lineTo(x+(elementCanvas.width/div)+lineWidth/2, y+(elementCanvas.width/div));
    ctx.lineTo(x+lineWidth/2, y);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(x+(elementCanvas.width/div)-lineWidth/2, y);
    ctx.lineTo(x, y + (elementCanvas.width/div));
    ctx.lineTo(x+lineWidth/2, y+(elementCanvas.width/div)+lineWidth/2);
    ctx.lineTo(x + (elementCanvas.width/div) + lineWidth/2 - lineWidth / 2, y + lineWidth/2);
    ctx.fill();
    ctx.closePath();
}

function drawCircle(x,y) {
    x += 10;
    y += 10;
    ctx.beginPath();
    ctx.arc(x - 10 + square / 2, y - 10 + square / 2, square / 2.2, 50, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = '#234632';
    ctx.arc(x - 10 + square / 2, y - 10 + square / 2, square / 2.4, 50, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.closePath();
    ctx.fillStyle = 'black';
}

function testX(x) {

    if (x < square - (lineWidth/2)) {
        return 0;
    }
    else if (x < (square - (lineWidth/2)) * 2 && x > square + (lineWidth/2)) {
        return 1;
    }
    else if (x > (square + (lineWidth/2)) * 2) {
        return 2;
    }
}

function testY(y) {
    
    if (y < square - (lineWidth/2)) { // Se o clique for no primeiro terço
        return 0;
    }
    else if (y < ((square) * 2) - (lineWidth/2) && y > (square) + (lineWidth/2)) { // Se o clique for no segundo terço
        return 1;
    }
    else if (y > ((square + (lineWidth/2)) * 2) - (lineWidth/2)) { // Se o clique for no terceiro terço
        return 2;
    }
}

elementCanvas.onclick = function (event) {

    var y = testY(event.pageY - elementCanvas.offsetTop);
    var x = testX(event.pageX - elementCanvas.offsetLeft);

    if (x != undefined && y != undefined){
        if (board[y][x] == null) {
            board[y][x] = jogadorVez;
            jogadorVez = !jogadorVez;
        }
        game();
    }
}

function game() {
    copyBoard();
    drawBoard();
    testEnd();
}

game();