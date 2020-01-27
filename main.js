var elementCanvas = document.getElementById('game-canvas');
var ctx = elementCanvas.getContext('2d');

var board = [0,1,2,3,4,5,6,7,8];

function drawBoard(params) {
    ctx.fillStyle = 'black';
    ctx.fillRect(elementCanvas.width / 3 - 5, 5, 10, elementCanvas.height);
    ctx.fillRect((elementCanvas.width / 3) * 2 - 5, 5, 10, elementCanvas.height);
    ctx.fillRect(5, elementCanvas.height / 3 - 5, elementCanvas.width - 10, 10);
    ctx.fillRect(5, (elementCanvas.height / 3) * 2 - 5, elementCanvas.width - 10, 10);    
}

function testX(x) {
    if (x < elementCanvas.width / 3 - 5) {
        return 0;
    }
    else if (x < (elementCanvas.width / 3 - 5) * 2 && x > elementCanvas.width / 3 + 5) {
        return 1;
    }
    else if (x > (elementCanvas.width / 3 + 5) * 2) {
        return 2;
    }
}

elementCanvas.onclick = function (event) {

    var y = event.pageY - elementCanvas.offsetTop;
    var x = testX(event.pageX - elementCanvas.offsetLeft);

    if (y < elementCanvas.height / 3 - 5) { // Se o clique for no primeiro terço
        switch (x) {
            case 0:
                console.log(0);
                break;
            case 1:
                console.log(1);
                break;
            case 2:
                console.log(2);
                break;

            default:
                break;
        }
    }
    else if(y < ((elementCanvas.height / 3) * 2) -5 && y > (elementCanvas.height / 3) + 5){ // Se o clique for no segundo terço
        switch (x) {
            case 0:
                console.log(3);
                break;
            case 1:
                console.log(4);
                break;
            case 2:
                console.log(5);
                break;

            default:
                break;
        }
    }
    else if (y > ((elementCanvas.width / 3 + 5) * 2) - 5){ // Se o clique for no terceiro terço
        switch (x) {
            case 0:
                console.log(6);
                break;
            case 1:
                console.log(7);
                break;
            case 2:
                console.log(8);
                break;

            default:
                break;
        }
    }

}

function game() {
    drawBoard();
}

game();