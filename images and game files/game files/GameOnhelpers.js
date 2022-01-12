function moveUFOcopter() {
    // Move Superman up or down
    if (mouseIsPressed) { // I can make an animation that will run while the mouse button is held down.
        superman.y -= 5;
    } else {
        superman.y += 5;
    }
}

function moverockets() {
    //Increase speed of kryptonite manually
    if (keyIsPressed) { // I can toggle an animation on a mouse or key event
        KryptoniteSpeed++
    }

    // Speed up kryptonite every 100 points
    if (score % 100 === 0) {
        KryptoniteSpeed += 20;
    }
    // Move kryptonite & Teleport to right side if off the left side // I can make an animation that repeats
    Kryptonite1.x -= KryptoniteSpeed;
    image(Kryptonite.img, Kryptonite.x, Kryptonite.y); // Kryptonite
    if (Kryptonite1.x + Kryptonite1.w < 0) {
        Kryptonite1.x = width
        Kryptonite1.y = random(50, height - 150);
    }
    Kryptonite2.x -= KryptoniteSpeed;
    image(Kryptonite.img, Kryptonite.x, Kryptonite.y)
    if (Kryptonite2.x + Kryptonite2.w < 0) {
        Kryptonite2.x = width
        Kryptonite2.y = random(50, height - 150);
    }
}

function checkCollision() {
   
    // Check for collision with ceiling and floor 
    if (score >= 6500) {
        fill(0, 255, 0);
        text("METROPOLIS IS SAVED!", width / 12, height / 3);
        gameState = "gameOver2";
        gameOverTimer = frameCount;
    }
    if (superman.y < -100 || superman.y > height) {
        gameState = "gameOver";
        gameOverTimer = frameCount;
    }
    //  Check for collision with the kryptonite
    if (superman.x > Kryptonite1.x && superman.x < Kryptonite1.x + Kryptonite1.w &&
        superman.y > Kryptonite1.y && superman.y < Kryptonite1.y + Kryptonite1.h) {
        gameState = "gameOver";
        gameOverTimer = frameCount;
    }
    if (superman.x > Kryptonite2.x && superman.x < Kryptonite2.x + Kryptonite2.w &&
        superman.y > Kryptonite2.y && superman.y < Kryptonite2.y + Kryptonite2.h) {
        gameState = "gameOver";
        gameOverTimer = frameCount;
    }

 console.log(gameState);

}


function drawGameOn() {
    background("Navy");
    fill(255, 212, 212)
    ellipse(900, 100, 500, 500)
    fill("Black")
    rect(0, 200, 200, 600)
    triangle(0, 200, 100, 0, 200, 200)
    fill(237, 218, 118)
    ellipse(300, 200, 195, 500)
    fill("Gold")
    ellipse(300, 250, 175, 500)
    fill(237, 218, 118)
    ellipse(300, 310, 175, 500)
    fill("Gold")
    ellipse(300, 325, 175, 500)
    fill("Black")
    rect(200, 150, 200, 6000)
    rect(500, 200, 250, 7000)
    rect(510, 100, 100, 8000)
    triangle(470, 100, 650, 100, 560, 15)
    rect(775, 400, 550, 9000)
    triangle(775, 400, 1000, 655, 1000, 250)


    for (var x = 0; x < 200; x = x + 10) {
        fill(223, 185, 30)
        rect(x, 230, 10, 10)

    }

    for (var x = 0; x < 200; x = x + 10) {
        fill(223, 185, 30)
        rect(x, 330, 10, 10)

    }

    for (var x = 0; x < 200; x = x + 10) {
        fill(223, 185, 30)
        rect(x, 430, 10, 10)

    }

    for (var x = 0; x < 200; x = x + 10) {
        fill(223, 185, 30)
        rect(x, 530, 10, 10)
    }

    for (var x = 0; x < 200; x = x + 10) {
        fill(223, 185, 30)
        rect(x, 240, 10, 90)
    }

    for (var x = 525; x < 700; x = x + 70) {
        fill(223, 185, 30)
        rect(x, 240, 60, 90)
    }

    for (var x = 525; x < 700; x = x + 70) {
        fill(223, 185, 30)
        rect(x, 350, 60, 90)
    }

    for (var x = 525; x < 700; x = x + 70) {
        fill(223, 185, 30)
        rect(x, 460, 60, 90)
    }

    for (var x = 525; x < 700; x = x + 70) {
        fill(223, 185, 30)
        rect(x, 570, 60, 90)
    }

    for (var x = 300; x < 350; x = x + 70) {
        fill(223, 185, 30)
        ellipse(x, 270, 110, 100, 110, 30)
    }

    for (var x = 300; x < 350; x = x + 70) {
        fill(223, 185, 30)
        ellipse(x, 470, 110, 100, 110, 30)
    }

    for (var x = 1000; x < 1050; x = x + 70) {
        fill(223, 185, 30)
        ellipse(x, 470, 210, 200, 110, 30)
    }



    rect(0, height + 50, width, 50); // Floor
    image(superman.img, superman.x, superman.y); // Superman
    fill("red");
    text("Score: " + score, width / 2, height - 700); // Score text
}
