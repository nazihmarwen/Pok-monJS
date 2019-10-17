var pikachu = new Pokemon({
    name: "Pikachu",
    imageUrl: "./resources/images/pikachu.png",
    x: 100,
    y: 100,
    speed: 5
});

// var canvas = document.getElementById('gameboard'); // Old way
var canvas = document.querySelector('#gameboard'); // New way
var ctx = canvas.getContext("2d");

var pikachuImg = new Image();
pikachuImg.src = pikachu.imageUrl;
pikachuImg.onload = function() {
    ctx.drawImage(pikachuImg, 0, pikachu.sy, 64, 64, pikachu.x, pikachu.y, 64, 64);
};

var keysDirection = {
    "ArrowRight": pikachu.directions['RIGHT'],
    "ArrowLeft": pikachu.directions['LEFT'],
    "ArrowUp": pikachu.directions['UP'],
    "ArrowDown": pikachu.directions['DOWN']
};

var startTime = 0;
var mustBeAnimated = false;

function animation(time) {

    if (time - startTime > 50) {
        startTime = time;
        mustBeAnimated = true;
    }

    window.requestAnimationFrame(animation);
}

window.requestAnimationFrame(animation);

document.onkeydown = function (event) {

    
    if (keysDirection[event.key] === undefined) {
        return;
    }

    if (!mustBeAnimated) {
        return;
    }

    pikachu.sy = keysDirection[event.key];
    var keyDirectionMapping = {
        "ArrowRight": 'RIGHT',
        "ArrowLeft": 'LEFT',
        "ArrowUp": 'UP',
        "ArrowDown": 'DOWN'
    };
    pikachu.move(keyDirectionMapping[event.key]);
    ctx.clearRect(0, 0, 800, 600);
    ctx.drawImage(pikachuImg, pikachu.sx, pikachu.sy, 64, 64, pikachu.x, pikachu.y, 64, 64);
    mustBeAnimated = false;
}