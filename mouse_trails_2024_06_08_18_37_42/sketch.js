let trails = [];

function setup() {
  createCanvas(800, 400);
  background(0);
}

function draw() {
  background(0, 20); // Slightly transparent background to create fading effect
  
  // Add new trail element at the mouse position
  let trailColor = color(random(255),random(255),random(255));
  let trail = {x: mouseX, y:mouseY, color: trailColor};
 
  trails.push(trail);
  
  // Draw all trail elements as stars
  noStroke();
  for(let i = 0; i < trails.length;i ++){
    fill(trails[i].color);
    drawStar(trails[i].x, trails[i].y,5,10,5);
  }
  
  // Limit the length of the trail array to avoid performance issues
  if (trails.length > 100) {
    trails.shift();
  }
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveCanvas('mouse_trails', 'png');
  }
}

// function to draw a star at position(x,y)
function drawStar(x,y,radius1, radius2,npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
