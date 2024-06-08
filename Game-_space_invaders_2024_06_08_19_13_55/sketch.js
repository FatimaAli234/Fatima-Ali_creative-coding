//space invaders

//player
var p1X = 300; // p1 for player 1
var p1Y = 475;
var pWidth = 50;
var pHeight = 30;
var pSpeed = 5;

//rocket
var r1X = p1X; // r1 for rockets 1
var r1Y = p1Y;
var r1Position = 0; // keep track of where rocket currently is
var rWidth = 7;
var rHeight = 20;
var rSpeed = 5;
var fire = false;

//boss alien
var b1X = 300; //boss alien
var b1Y = 100;
var b1Width = 100;
var b1Height = 30;
var bSpeed = 5;
var bDirection = 1;
var br1X = b1X; //boss rocket
var br1Y = b1Y;
var br1Position = 1; //keep track of where the rocket is

//aliens
var row = 1;
var currentRow = row;
var rowDistance = 5;
var aDistance = 0;
var aSpeed = 0.7;
var aDirection = 1;
var aWidth = 40;
var aHeight = 40;
//row 1
var a1X = 50;
var a1Y = 150;

var a2X = 110;
var a2Y = 150;
var a3X = 170;
var a3Y = 150;
var a4X = 230;
var a4Y = 150;
var a5X = 290;
var a5Y = 150;
var a6X = 350;
var a6Y = 150;
var a7X = 410;
var a7Y = 150;
var a8X = 470;
var a8Y = 150;
var a9X = 530;
var a9Y = 150;
//Row 2
var a10X = 50;
var a10Y = 210;
var a11X = 110;
var a11Y = 210;
var a12X = 170;
var a12Y = 210;
var a13X = 230;
var a13Y = 210;
var a14X = 290;
var a14Y = 210;
var a15X = 350;
var a15Y = 210;
var a16X = 410;
var a16Y = 210;
var a17X = 470;
var a17Y = 210;
var a18X = 530;
var a18Y = 210;

//counters
var score = 0;
var stage = 0; //which function should be running rightnow
//stage 0 = splash
//stage1 = game
//stage2 = win
//stage3 = lose
var totalTime;
var splashTime;
var gameTime;
var timeLimit = 60;
var lives = 3; //lives for player

//multimedia
var playerImage;
var alienImage;
var meteorImage;
var bossImage;
var bossLife = 20;

//sounds
var fireSound;
var explosionSound;
var backgroundMusic;

//meteors
var m1X = 100; //m1 for meteo 1
var m1Y = 400;
var m1Size = 50; //square
var m2X = 300; //m1 for meteo 2
var m2Y = 400;
var m2Size = 50; //square


function setup() {
  createCanvas(600, 500);

  //set modes
  rectMode(CENTER);
  textAlign(CENTER);
  imageMode(CENTER);

  backgroundMusic.play();
}



function draw() {
 
  //start clock
  totalTime = millis();
  // Transition to stage 1 if mouse is pressed
  if (mouseIsPressed && stage == 0) {
    stage = 1;
  }

  // Run different functions based on the current stage
 if (stage == 0) {
    splash();
  } if (stage == 1) {
    game();
  }  if (stage == 2) {
    win();
  } if (stage == 3) {
    lose();
  }
}
function splash() {
  //start clock
  splashTime = totalTime;
  background(0); // black background

  // appearance of the world
  stroke(0, 255, 0); // green
  noFill();
  strokeWeight(3);
  rect(width / 2, height / 2, width, height);
  noStroke();
  //words for splash
  fill(0, 255, 0);
  textSize(40);
  text("SPACE INVADERS", width / 2, 100);

  textSize(40);
  text("HOW TO PLAY", width / 2, 250);
  textSize(15);
  text("PRESS LEFT ARROW AND RIGHT ARROW TO MOVE", width / 2, 290);
  text("PRESS s TO FIRE ROCKETS", width / 2, 320);
  text("DESTROY ALL ALIENS TO WIN", width / 2, 350);
  text("CLICK THE SCREEN TO BEGIN", width / 2, 450);


}


function win() {
  background(0, 255, 0);

  // appearance of the world
  stroke(0); //black
  noFill();
  strokeWeight(10);
  rect(width / 2, height / 2, width, height);
  noStroke();

  //words for win
  fill(0);
  textSize(40);
  text("VICTORY", width / 2, 200);

  textSize(20);
  text("Refresh to play again", width / 2, 280);

  // Check if mouse is pressed
  if (mouseIsPressed && stage == 2) {
    // Reset the game
    resetGame();
  }
}

function resetGame() {
  // Reset all game variables to their initial state
  p1X = 300;
  p1Y = 475;
  r1X = p1X;
  r1Y = p1Y;
  r1Position = 0;
  score = 0;
  splashTime = millis(); // Reset the splash time
  gameTime = 0;
  stage = 0;
    
  
}

function lose() {
  background(255, 0, 0); //red

  // appearance of the world
  stroke(0); //black
  noFill();
  strokeWeight(10);
  rect(width / 2, height / 2, width, height);
  noStroke();

  //words for lose
  fill(0);
  textSize(40);
  text("GAME OVER", width / 2, 200);

  textSize(20);
  text("Refresh to play again", width / 2, 280);

  
}

function game() {
  //call looping through functions
  keyPressed();
  keyTyped();
  background(0); // black background

  // appearance of the world
  stroke(0, 255, 0); // green
  noFill();
  strokeWeight(3);
  rect(width / 2, height / 2, width, height);
  noStroke();
  fill(0, 255, 0); // green
  rect(width / 2, 25, width, 50); // banner

  // draw player
  noStroke();
  fill(0, 0, 255); // blue
  image(playerImage, p1X, p1Y, pWidth, pHeight);

  // draw aliens
  fill(255); // white color

  // call the rockets function
  rockets();

  //aliens
  aliens();

  //meteors
  meteors();

  //boss alien
  boss();

  //gametime
  splashTime = splashTime;
  gameTime = int((totalTime - splashTime) / 1000); //display game time in seconds

  //status bar
  //lives
  fill(0); // black
  textSize(20);
  text("LIVES:", 50, 25);
  textSize(15);
  text(lives, 110, 25);
  //score
  textSize(20);
  text("Score:", 50, 45);
  text(score, 100, 45);
  //timer
  fill(0); // black
  textSize(20);
  text("Time:", 510, 35);

  text(timeLimit - gameTime, 570, 35); //display countdown timer

  //exiting stages
 

    if (gameTime >= timeLimit) {
      stage = 3; // Transition to game over if time limit is reached
    }

    if (lives <= 0) {
      stage = 3; // Transition to game over if lives are exhausted
    }
  

  // Check for win condition
  if (score >= 21) {
    stage = 2; // Transition to win stage if score reaches the required amount
  }   
   

} //close draw



function aliens() {
  
 
  //row1
  image(alienImage, a1X, a1Y, aWidth, aHeight);
  image(alienImage, a2X, a2Y, aWidth, aHeight);
  image(alienImage, a3X, a3Y, aWidth, aHeight);
  image(alienImage, a4X, a4Y, aWidth, aHeight);
  image(alienImage, a5X, a5Y, aWidth, aHeight);
  image(alienImage, a6X, a6Y, aWidth, aHeight);
  image(alienImage, a7X, a7Y, aWidth, aHeight);
  image(alienImage, a8X, a8Y, aWidth, aHeight);
  image(alienImage, a9X, a9Y, aWidth, aHeight);
  //row2
  image(alienImage, a10X, a10Y, aWidth, aHeight);
  image(alienImage, a11X, a11Y, aWidth, aHeight);
  image(alienImage, a12X, a12Y, aWidth, aHeight);
  image(alienImage, a13X, a13Y, aWidth, aHeight);
  image(alienImage, a14X, a14Y, aWidth, aHeight);
  image(alienImage, a15X, a15Y, aWidth, aHeight);
  image(alienImage, a16X, a16Y, aWidth, aHeight);
  image(alienImage, a17X, a17Y, aWidth, aHeight);
  image(alienImage, a18X, a18Y, aWidth, aHeight);

 
//close left edge

//collision with alien1
if (
  r1X >= a1X - aWidth / 2 &&
  r1X <= a1X + aWidth / 2 &&
  r1Y >= a1Y - aHeight / 2 &&
  r1Y <= a1Y + aHeight / 2
) {
  //collision between rocket and alien
  explosionSound.play();
  score = score + 1; //add points
  a1X = -1000; //send alien off screen
  r1Position = 2; //send rocket back to player
}

//collision with alien2
if (
  r1X >= a2X - aWidth / 2 &&
  r1X <= a2X + aWidth / 2 &&
  r1Y >= a2Y - aHeight / 2 &&
  r1Y <= a2Y + aHeight / 2
) {
  //collision between rocket and alien
  explosionSound.play();
  score = score + 1; //add points
  a2X = -1000; //send alien off screen
  r1Position = 2; //send rocket back to player
}

//collision with alien3
if (
  r1X >= a3X - aWidth / 2 &&
  r1X <= a3X + aWidth / 2 &&
  r1Y >= a3Y - aHeight / 2 &&
  r1Y <= a3Y + aHeight / 2
) {
  //collision between rocket and alien
  explosionSound.play();
  score = score + 1; //add points
  a3X = -1000; //send alien off screen
  r1Position = 2; //send rocket back to player
}
//collision with alien4
if (
  r1X >= a4X - aWidth / 2 &&
  r1X <= a4X + aWidth / 2 &&
  r1Y >= a4Y - aHeight / 2 &&
  r1Y <= a4Y + aHeight / 2
) {
  //collision between rocket and alien
  explosionSound.play();
  score = score + 1; //add points
  a4X = -1000; //send alien off screen
  r1Position = 2; //send rocket back to player
}
//collision with alien5
if (
  r1X >= a5X - aWidth / 2 &&
  r1X <= a5X + aWidth / 2 &&
  r1Y >= a5Y - aHeight / 2 &&
  r1Y <= a5Y + aHeight / 2
) {
  //collision between rocket and alien
  explosionSound.play();
  score = score + 1; //add points
  a5X = -1000; //send alien off screen
  r1Position = 2; //send rocket back to player
}

//collision with alien6
if (
  r1X >= a6X - aWidth / 2 &&
  r1X <= a6X + aWidth / 2 &&
  r1Y >= a6Y - aHeight / 2 &&
  r1Y <= a6Y + aHeight / 2
) {
  //collision between rocket and alien
  explosionSound.play();
  score = score + 1; //add points
  a6X = -1000; //send alien off screen
  r1Position = 2; //send rocket back to player
}

//collision with alien7
if (
  r1X >= a7X - aWidth / 2 &&
  r1X <= a7X + aWidth / 2 &&
  r1Y >= a7Y - aHeight / 2 &&
  r1Y <= a7Y + aHeight / 2
) {
  //collision between rocket and alien
  explosionSound.play();
  score = score + 1; //add points
  a7X = -1000; //send alien off screen
  r1Position = 2; //send rocket back to player
}

//collision with alien8
if (
  r1X >= a8X - aWidth / 2 &&
  r1X <= a8X + aWidth / 2 &&
  r1Y >= a8Y - aHeight / 2 &&
  r1Y <= a8Y + aHeight / 2
) {
  //collision between rocket and alien
  explosionSound.play();
  score = score + 1; //add points
  a8X = -1000; //send alien off screen
  r1Position = 2; //send rocket back to player
}

//collision with alien9
if (
  r1X >= a9X - aWidth / 2 &&
  r1X <= a9X + aWidth / 2 &&
  r1Y >= a9Y - aHeight / 2 &&
  r1Y <= a9Y + aHeight / 2
) {
  //collision between rocket and alien
  explosionSound.play();
  score = score + 1; //add points
  a9X = -1000; //send alien off screen
  r1Position = 2; //send rocket back to player
}

//collision with alien10
if (
  r1X >= a10X - aWidth / 2 &&
  r1X <= a10X + aWidth / 2 &&
  r1Y >= a10Y - aHeight / 2 &&
  r1Y <= a10Y + aHeight / 2
) {
  //collision between rocket and alien
  explosionSound.play();
  score = score + 1; //add points
  a10X = -1000; //send alien off screen
  r1Position = 2; //send rocket back to player
}

//collision with alien11
if (
  r1X >= a11X - aWidth / 2 &&
  r1X <= a11X + aWidth / 2 &&
  r1Y >= a11Y - aHeight / 2 &&
  r1Y <= a11Y + aHeight / 2
) {
  //collision between rocket and alien
  explosionSound.play();
  score = score + 1; //add points
  a11X = -1000; //send alien off screen
  r1Position = 2; //send rocket back to player
}

//collision with alien12
if (
  r1X >= a12X - aWidth / 2 &&
  r1X <= a12X + aWidth / 2 &&
  r1Y >= a12Y - aHeight / 2 &&
  r1Y <= a12Y + aHeight / 2
) {
  //collision between rocket and alien
  explosionSound.play();
  score = score + 1; //add points
  a12X = -1000; //send alien off screen
  r1Position = 2; //send rocket back to player
}

//collision with alien13
if (
  r1X >= a13X - aWidth / 2 &&
  r1X <= a13X + aWidth / 2 &&
  r1Y >= a13Y - aHeight / 2 &&
  r1Y <= a13Y + aHeight / 2
) {
  //collision between rocket and alien
  explosionSound.play();
  score = score + 1; //add points
  a13X = -1000; //send alien off screen
  r1Position = 2; //send rocket back to player
}

//collision with alien14
if (
  r1X >= a14X - aWidth / 2 &&
  r1X <= a14X + aWidth / 2 &&
  r1Y >= a14Y - aHeight / 2 &&
  r1Y <= a14Y + aHeight / 2
) {
  //collision between rocket and alien
  explosionSound.play();
  score = score + 1; //add points
  a14X = -1000; //send alien off screen
  r1Position = 2; //send rocket back to player
}

//collision with alien15
if (
  r1X >= a15X - aWidth / 2 &&
  r1X <= a15X + aWidth / 2 &&
  r1Y >= a15Y - aHeight / 2 &&
  r1Y <= a15Y + aHeight / 2
) {
  //collision between rocket and alien
  explosionSound.play();
  score = score + 1; //add points
  a15X = -1000; //send alien off screen
  r1Position = 2; //send rocket back to player
}

//collision with alien16
if (
  r1X >= a16X - aWidth / 2 &&
  r1X <= a16X + aWidth / 2 &&
  r1Y >= a16Y - aHeight / 2 &&
  r1Y <= a16Y + aHeight / 2
) {
  //collision between rocket and alien
  explosionSound.play();
  score = score + 1; //add points
  a16X = -1000; //send alien off screen
  r1Position = 2; //send rocket back to player
}

//collision with alien17
if (
  r1X >= a17X - aWidth / 2 &&
  r1X <= a17X + aWidth / 2 &&
  r1Y >= a17Y - aHeight / 2 &&
  r1Y <= a17Y + aHeight / 2
) {
  //collision between rocket and alien
  explosionSound.play();
  score = score + 1; //add points
  a17X = -1000; //send alien off screen
  r1Position = 2; //send rocket back to player
}

//collision with alien18
if (
  r1X >= a18X - aWidth / 2 &&
  r1X <= a18X + aWidth / 2 &&
  r1Y >= a18Y - aHeight / 2 &&
  r1Y <= a18Y + aHeight / 2
) {
  //collision between rocket and alien
  explosionSound.play();
  score = score + 1; //add points
  a18X = -1000; //send alien off screen
  r1Position = 2; //send rocket back to player
}

}//close aliens



function boss() {
  //draw boss
  image(bossImage, b1X, b1Y, b1Width, b1Height);
  //print health
  textSize(20);
  fill(255, 255, 255);
  text(bossLife, b1X, b1Y - 20);
  //make boss move back and forth
  b1X = b1X + bSpeed * bDirection;
  //if he hits either wall he bounces
  if (b1X >= width) {
    bDirection = bDirection * -1;
  } //close > w

  if (b1X <= 0) {
    //hit left wall
    bDirection = bDirection * -1; //change direction
  } //close <0

  //collision with rockets
  if (
    r1X >= b1X - b1Width / 2 &&
    r1X <= b1X + b1Width / 2 &&
    r1Y >= b1Y - b1Width / 2 &&
    r1Y <= b1Y + b1Height / 2
  ) {
    //rocket hit boss
    if (bossLife >= 10) {
      //boss is not dead
      score = score + 1; // gain point
      bossLife = bossLife - 10; //boss loses life
      explosionSound.play();
      r1Position = 2;
    } //close hit
    else {
      score = score + 1; //get point
      explosionSound.play();
      bSpeed = 0; //stop moving
      b1X = -1000; //move off screen
      r1Position = 2; //send rocket back to P1
    } //close else no more boss
  } //close collision with boss

  //boss rockets
  //position 1= in motion after firing
  //position2 = reset back to boss

  //draw boss rocket
  fill(255, 255, 255);
  rect(br1X, br1Y, rWidth, rHeight);

  //firing boss rocket
  if (br1Position == 1) {
    //firing position
    br1X = br1X; //stop following the boss
    br1Y = br1Y + rSpeed; //fire rocket down

    //return when exceed
    if (br1Y >= height) {
      br1Position = 2;
    } //close exceed height
  } //close fire
  else {
    br1Y = b1Y;
    br1X = b1X;
  } //close else not firing

  //send rocket back on #2 command
  if (br1Position == 2) {
    br1Y = b1Y;
    br1X = b1X;
    br1Position = 1; //rest to fire again
  } //close reset command

  //rockets collision with player1
  if (
    br1X >= p1X - pWidth / 2 &&
    br1X <= p1X + pWidth / 2 &&
    br1Y >= p1Y - pHeight / 2 &&
    br1Y <= p1Y + pHeight / 2
  ) {
    //boss rocket hit player
    lives = lives - 1;
    p1X = width / 2; //set player back to middle
    br1Position = 2; //send  rocket home
  }
} //close boss

function rockets() {
  //rocket position
  //0 = with player 1 ready to be fired
  //1 = in motion after firing
  //2 = collision with object, return to p1

  //draw rocket
  fill(26, 175, 255); // light blue
  rect(r1X, r1Y, rWidth, rHeight);

  //keep track and fire rockets
  if (fire == true && r1Position == 0) {
    r1Position = 1;
  }

  //fire rockets code
  if (r1Position == 1) {
    r1X = r1X;
    r1Y = r1Y - rSpeed; // move vertically

    //if exceeds window or misses
    if (r1Y <= 0) {
      r1Position = 2; // reload
    } // close exceed so send back
  } else {
    //when you are not firing, the rocket should be with p1
    r1Y = p1Y;
    r1X = p1X;
    r1Position = 0; // reset position
  }
  //reload else not firing

  if (r1Position == 2) {
    r1Y = p1Y;
    r1X = p1X;
    r1Position = 0;
  } //return home on 2
}

function meteors() {
  // draw meteors
  image(meteorImage, m1X, m1Y, m1Size, m1Size);
  image(meteorImage, m2X, m2Y, m2Size, m2Size);

  // rocket collision with meteor 1
  if (
    r1X >= m1X - m1Size / 2 &&
    r1X <= m1X + m1Size / 2 &&
    r1Y >= m1Y - m1Size / 2 &&
    r1Y <= m1Y + m1Size / 2
  ) {
    // rocket hit meteor
    if (m1Size >= 20) {
      // meteor is still there
      m1Size = m1Size - 10; // make meteor smaller
      r1Position = 2; // send rocket back to player
    } else {
      m1X = -1000; // move off screen
      r1Position = 2; // send rocket back to player
    }
  }

  // rocket collision with meteor 2
  if (
    r1X >= m2X - m2Size / 2 &&
    r1X <= m2X + m2Size / 2 &&
    r1Y >= m2Y - m2Size / 2 &&
    r1Y <= m2Y + m2Size / 2
  ) {
    // rocket hit meteor
    if (m2Size >= 20) {
      // meteor is still there
      m2Size = m2Size - 10; // make meteor smaller
      r1Position = 2; // send rocket back to player
    } else {
      m2X = -1000; // move off screen
      r1Position = 2; // send rocket back to player
    }
  }

  // boss rocket collision with meteor 1
  if (
    br1X >= m1X - m1Size / 2 &&
    br1X <= m1X + m1Size / 2 &&
    br1Y >= m1Y - m1Size / 2 &&
    br1Y <= m1Y + m1Size / 2
  ) {
    // rocket hit meteor
    if (m1Size >= 20) {
      // meteor is still there
      m1Size = m1Size - 10; // make meteor smaller
      br1Position = 2; // send rocket back to player
    } else {
      m1X = -1000; // move off screen
      br1Position = 2; // send rocket back to player
    }
  }

  // boss rocket collision with meteor 2
  if (
    br1X >= m2X - m2Size / 2 &&
    br1X <= m2X + m2Size / 2 &&
    br1Y >= m2Y - m2Size / 2 &&
    br1Y <= m2Y + m2Size / 2
  ) {
    // rocket hit meteor
    if (m2Size >= 20) {
      // meteor is still there
      m2Size = m2Size - 10; // make meteor smaller
      br1Position = 2; // send rocket back to player
    } else {
      m2X = -1000; // move off screen
      br1Position = 2; // send rocket back to player
    }
  }
} //close meteors

function keyPressed() {
  if (keyCode == LEFT_ARROW && keyIsPressed) {
    p1X = p1X - pSpeed;
  } //close left pressed

  if (keyCode == RIGHT_ARROW && keyIsPressed) {
    p1X = p1X + pSpeed;
  }
}

function keyTyped() {
  if (key == "s" && keyIsPressed) {
    fire = true; // fire rocket on key press
    fireSound.play();
  } else {
    fire = false; // if not s
  }
}

function preload() {
  //images
  playerImage = loadImage("spaceship.png");
  alienImage = loadImage("alien.jpg");
  meteorImage = loadImage("rotationY1.png");
  bossImage = loadImage("boss.jpeg");

  //sounds
  fireSound = loadSound("pew.wav");
  explosionSound = loadSound("explosion13.wav");
  backgroundMusic = loadSound("Retro Ver.mp3");
}
