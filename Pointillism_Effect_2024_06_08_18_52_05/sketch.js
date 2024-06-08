
var img, x, y;

function preload() {

img = loadImage("sunlight.jpg");

}



function setup() {

createCanvas (500, 600);

background(0);

noStroke();

}



function draw() {

x = random(width);

y = random(height);

var c = img.get(x, y);

fill(c[0], c[1], c[2], 10);

  //star 
  drawStar(x, y, 20,50,5);
}

//function to draw a star

function drawStar(x, y, radius1, radius2, npoints){
  let angle = TWO_PI / npoints ;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle){
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
