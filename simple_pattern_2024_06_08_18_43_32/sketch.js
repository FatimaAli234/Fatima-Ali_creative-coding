let currentShape = 0; // Variable to track the current shape of the stars


function setup(){
  createCanvas(800,800);
  background(0);//black background
}


function draw() {
  // Clear the background in draw() to see continuous updates
  background(0);

  // Define the spacing between stars
  let spacing = 50;

  // Loop through the canvas to create the pattern
  for(let x = spacing /2; x < width; x += spacing){
  for(let y = spacing / 2; y < height; y += spacing){
   
      // Calculate distance from mouse to star center
      let d = dist(mouseX, mouseY, x, y);

      // Map distance to star size
      let starSize = map(d, 0, width, spacing / 2, 50);

      // Draw the star with the current shape
      if (currentShape === 0) {
        customDrawStar(x, y, starSize); // Star shape
      } else if (currentShape === 1) {
        customDrawCircle(x, y, starSize); // Circle shape
      } else if (currentShape === 2) {
        customDrawTriangle(x, y, starSize); // Triangle shape
      }
    }
  }
}

function mousePressed() {
  // Cycle through different shapes on mouse click
  currentShape = (currentShape + 1) % 3;
}

function customDrawStar(x, y, size) {
  beginShape();
  for (let i = 0; i < TWO_PI; i += PI / 5) {
    let angle = i + PI / 10;
    let radius = size / 2;
    let x0 = x + cos(angle) * radius;
    let y0 = y + sin(angle) * radius;
    vertex(x0, y0);
    angle += PI / 5;
    radius = size / 4;
    let x1 = x + cos(angle) * radius;
    let y1 = y + sin(angle) * radius;
    vertex(x1, y1);
  }
  endShape(CLOSE);
}

function customDrawCircle(x, y, size) {
  ellipse(x, y, size, size);
}

function customDrawTriangle(x, y, size) {
  let height = size * sqrt(3) / 2; // Height of equilateral triangle
  beginShape();
  vertex(x, y - size / 2); // Top vertex
  vertex(x - size / 2, y + height / 2); // Bottom left vertex
  vertex(x + size / 2, y + height / 2); // Bottom right vertex
  endShape(CLOSE);
}