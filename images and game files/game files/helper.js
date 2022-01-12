function initialize() { // I can use functions and files to organize my code
    superman.x = 100;
    superman.y = height / 2;
    gameState = "start"; // or "gameOn" or gameOver"
    // Initialize Kryptonite
    Kryptonite1 = { // I can use objects to group related variables.
        x: random(100, 800),
        y: random(5, height - 5),
        w: 200,
        h: 200
    };
    Kryptonite2 = {
        x: random(100, 800),
        y: random(5, height - 5),
        w: 200,
        h: 200
    };
    KryptoniteSpeed = 10; // I can use a variable to control the rate of an animation
    score = 0;
    Moon = {
        x: 1000,
        y: 0,
        r: 300
    }
}

function drawStartScreen() {
    background(0, 0, 255);
    fill(0)
    quad(0, 200, 200, 300, 200, 800, 0, 800);
    for (var x = 0; x <= 150; x += 30) { // I can use loops to draw patterns
        for (var y = 350; y <= 800; y += 50) {
            fill(255)
            rect(x, y, 25, 25);
        }
    }
    fill(0)
    noStroke();
    rect(250, 400, 200, 800);
    for (var x = 275; x <= 390; x += 30) {
        for (var y = 450; y <= 800; y += 50) {
            fill(255)
            rect(x, y, 50, 25);
        }
    }
    fill(0)
    noStroke();
    rect(500, 300, 250, 700);
    for (var x = 525; x < 720; x += 30) {
        for (var y = 350; y <= 800; y += 50) {
            fill(255)
            rect(x, y, 20, 75);
        }
    }
    fill(0)
    rect(525, 250, 200, 100); //I can draw using shapes
    rect(550, 200, 150, 100);
    rect(625, 100, 10, 100)

    rect(800, 250, 175, 700);
    for (var x = 825; x < 950; x += 30) {
        for (var y = 300; y <= 800; y += 50) {
            for (var y = 300; y <= 800; y += 50) {
                fill(255)
            }
        }
    }
    image(superman.img, superman.x, superman.y); // Superman
    image(Kryptonite.img, Kryptonite.x, Kryptonite.y); // Kryptonite
    stroke(255);
    textSize(60);
    fill("red") //I can draw using colours
    text("SUPERMAN: FORTUNATE SON", 50, height / 2);
}



function gameOn() {
    // Logic
    if (mouseX > 700 && mouseX < 1000 && mouseY > 0 && mouseY < 300) {
        ellipse(Moon.x -= 1, Moon.y, Moon.r); // I can make an animation that will run while the mouse is in a certain area  
    }
    score++;
    moveUFOcopter();
    moverockets();
    checkCollision();
    drawGameOn();
    image(Kryptonite.img, Kryptonite1.x, Kryptonite1.y); // Kryptonite
    image(Kryptonite.img, Kryptonite2.x, Kryptonite2.y);
}

function gameOver() {
    if (frameCount - gameOverTimer < 120) {
        fill(0, 255, 0);
        text("SUPERMAN HAS BEEN KILLED!", width / 12, height / 3);
    } else {
        initialize();
    }

}

function gameOver2() {
    if (frameCount - gameOverTimer < 120) {
        fill(0, 255, 0);
        text("METROPOLIS IS SAVED!", width / 12, height / 3);
    } else {
        initialize();
    }
}
