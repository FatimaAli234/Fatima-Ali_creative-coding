let stars = [];
let planets = [];

function setup() {
  createCanvas(600,600);
  background(6,4,82);
  smooth();


for(let i = 0; i< 100; i++){
  stars.push(new Star());

}

  for(let i = 0; i< 5; i++){

  planets.push(new Planet());
}
}
function draw() {
  background(6, 4, 82); // Maintain the background color

  // Draw the stars
  for (let i = 0; i < stars.length; i++) {
    stars[i].show();
    stars[i].update();
  }

  // Draw the planets
  for (let i = 0; i < planets.length; i++) {
    planets[i].show();
    planets[i].update();
  }

  
  //moon
  noStroke();
  fill(232,232,218);
  ellipse(300,775,700,700);
  
  
  //craters
  fill(113,113,112,100);
  ellipse(170,575,190,140);
  ellipse(255,550,90,90,70);
  ellipse(455,522,100,85);
  
  //alien body
  fill(255,255,255);//white body
  ellipse(300,200,325,210);
  
  //antennae
  rect(220,50,25,100);
  ellipse(234,40,40,40);
  //second antennae
  rect(330,50,25,100);
  ellipse(342,40,40,40);
  
  //alien eyes
  fill(255,0,0);//red eyecolor
  ellipse(260, 170, 50, 50);
  ellipse(340, 175, 50, 50);
  fill(250, 250, 250);
  ellipse(270, 165, 10, 10);
  ellipse(350, 165, 10, 10);
  
  fill(255,255,255);//alien arms to white
  //left ear
  triangle(120, 200, 100, 100, 175, 250);
  //right ear
  triangle(480, 200, 500, 100, 425, 250);
  
  //body
  stroke(2);
  fill(139, 0, 0);
  rect(212, 290, 175, 20);
  fill(0);
  rect(212,310,175,100);
  
  stroke(255, 176, 5);
  strokeWeight(3);
  ellipse(350, 340, 30, 30);
  noStroke();
  fill(21, 0, 198);
  ellipse(350, 340, 3, 3);
  ellipse(343, 338, 3, 3);
  ellipse(353, 332, 3, 3);
  fill(255, 0, 21);
  ellipse(348,331, 3, 3);
  ellipse(350, 350, 3, 3);
  ellipse(357, 340, 3, 3);
  stroke(255, 255, 0);
  strokeWeight(3);
  line(334, 356, 365, 325);
 

  noStroke();
  fill(0);
  beginShape();
  vertex(212, 420);
  vertex(387, 420);
  vertex(367,520)
  vertex(232, 520);
  endShape()
  stroke(2);
  strokeWeight(1);
  line(298, 460, 300, 519);
 

  noStroke();
  fill(139, 0, 0);
  rect(212, 400, 175, 20);
  fill(0, 44, 90);
  rect(275, 397, 50, 28);

  //sleeves
  fill(0);
  push();
  rotate(0.7);
  ellipse(540, 3, 115, 42);
  pop();
  
  push();
  rotate(-0.7);
  ellipse(-79, 391, 115, 42);
  pop();
   
 
  
 // Alien hands
  fill(255, 255, 255); // Change alien hands color to white
  ellipse(160, 375, 40, 40);
  ellipse(440, 375, 40, 40);
  
  push();
  rotate(-0.7);
  ellipse(-135, 391, 50, 20);
  pop();

 push();
  rotate(-0.5);
  ellipse(-60, 395, 50, 20);
  pop();
  
  ellipse(160, 390, 20, 50);
  
  push();
  rotate(0.7);
  ellipse(590,3,50,20);
  pop();

  push();
  rotate(0.5);
  ellipse(580, 108, 50, 20);
  pop();
 

  ellipse(437, 383, 20, 50);

  // UFO bottom lights
  fill(156, 72, 147);
  ellipse(258, 510, 90, 50);
  ellipse(342, 510, 90, 50);
}

// Define class for drawing stars
class Star {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(1, 5);
    this.speed = random(1, 3);
  }
  
  show() {
    noStroke();
    fill(255);
    ellipse(this.x, this.y, this.size);
  }
  
  update() {
    // Move stars
    this.x -= this.speed;
    // Reset star position if it goes off screen
    if (this.x < -this.size) {
      this.x = width + this.size;
      this.y = random(height);
    }
  }
}

// Define class for drawing planets
class Planet {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(30, 60);
    this.speed = random(0.5, 1.5);
    this.color = color(random(100, 255), random(100, 255), random(100, 255));
  }

  show() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.size);
  }

  update() {
    // Move planets
    this.x -= this.speed;
    // Reset planet position if it goes off screen
    if (this.x < -this.size) {
      this.x = width + this.size;
      this.y = random(height);
    }
  }
}