// Superman-Fortunate Son
var superman = {};
var Kryptonite = {};
var gameState;
var gameOverTimer;
var Kryptonite1, Kryptonite2, Kryptonite3, Kryptonite4, KryptoniteSpeed;
var score
var Moon
var mouseX
var mouseY
//Preload FUNCTION-Runs and completes before setup()
function preload() {
    superman.img = loadImage("assets/superman-right.png");
    Kryptonite.img = loadImage("assets/Kryptonit.png");

}
// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    createCanvas(1000, 800);
    initialize();
    mouseX = 300
    mouseY = 300
}
// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
    if (gameState == "start") {
        drawStartScreen();
    } else if (gameState == "gameOn") {
        gameOn();
    } else if (gameState == "gameOver") {
        gameOver();
    } else {
        gameOver2();
    }
}
//EVENT FUNCTIONS
function mousePressed() {
    if (gameState == "start") {
        gameState = "gameOn";
    }
}

function keyPressed() {
    if (keyCode == 32) {
        KryptoniteSpeed++
    }
}
