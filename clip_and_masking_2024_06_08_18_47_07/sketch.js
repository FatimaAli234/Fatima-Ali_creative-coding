let img1,img2;


function preload(){
  img1 = loadImage("sun.jpg");
  img2 = loadImage("sun.jpg");

}

function setup(){
  createCanvas(800,400);
  background(139, 69, 19);//black background
  
  img1.resize(200,200);
  let cnv7 = createGraphics(200,200);
  cnv7.background(0);//set the sub-canvas background to black
  cnv7.beginShape();
  drawStar(cnv7, 100, 100, 50, 100, 5);
  //star shape
  cnv7.endShape(CLOSE);
  cnv7.canvas.getContext("2d").clip();
  cnv7.image(img1, 0, 0);
  image(cnv7, 150, 100);

  img2.resize(200, 200);
  let maskImg = createGraphics(200,200);
  maskImg.background(0);
  //black background(transparent)
   maskImg.fill(255);//white fill(visible area)
  maskImg.noStroke();
  //star shape
  drawStar(maskImg, 100, 100, 50, 100, 5);
  img2.mask(maskImg);
  image(img2, 450, 100);
}
  
function draw(){
  
}


//function to draw a star shape
function drawStar(pg, x, y, radius1, radius2, npoints){
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  pg.beginShape();
   for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x +cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    pg.vertex(sx,sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    pg.vertex(sx,sy);
  }
  pg.endShape(CLOSE);
}








