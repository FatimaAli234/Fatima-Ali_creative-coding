
function setup(){
  createCanvas(800,400);
  background(139, 0, 0);//dark red blackground
  
  //box dimensions and position
  let boxX = 150;
  let boxY = 150;
  let boxWidth = 500;
  let boxHeight = 100;
  
  //draw a box
  fill(0);
  rect(boxX,boxY,boxWidth,boxHeight);//draw a rectangle

  //define clipping region(rectangle)
  let ctx = drawingContext;
  ctx.save();
  ctx.beginPath();
  ctx.rect(boxX,boxY,boxWidth,boxHeight);//rectangle clipping region
  ctx.clip();


//draw the text inside the clipping region

 fill(255);
 textSize(64);
 textAlign(CENTER,CENTER);
 text("Love yourself <3",boxX + boxWidth / 2, boxY + boxHeight / 2);

 //reset clipping
  ctx.restore();

 
}

function draw(){
  
}




