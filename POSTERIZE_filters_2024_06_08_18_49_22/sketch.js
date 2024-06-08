
var img;

function preload() {

img = loadImage("sun.jpg");

}



function setup () {

createCanvas (500, 600);

background(0);

}



function draw() {

background(0);

image(img, 0, 0);

var v = map(mouseX, 0, width, 4, 30);

filter(POSTERIZE, v);

noStroke();
fill(255,0,0,50)
rect(0,0,width,height)
}








