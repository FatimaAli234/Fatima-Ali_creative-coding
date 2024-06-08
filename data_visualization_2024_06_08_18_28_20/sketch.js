
let colorData;

let width= 1000; //base dimension

function setup(){
  createCanvas(1300, 800);
  background('#7469B6');
}
function preload(){
  colorData = loadTable ("songs.csv" , "csv" , "header");
}
function getSum ( total, num){
  return total + num;
}
function draw (){
  strokeWeight(10);
  // get data from the csv file 
  //load data into array
  let colorArray = colorData.getArray();
  
  //converts count column to int
  let count = int(colorData.getColumn('plays'));
  let colorTotal; //get sum of all colors 
  
  colorTotal = count.reduce(getSum) //reduce the array
  noLoop();
  for ( let i = 0; i< colorArray.length; i++){
  //each row in the table is an array 
  let colorName = colorArray[i][0];
  let colorCount = colorArray [i][1];
  
  //color of rectangles from the data
  stroke(colorName);
  fill(colorName);
  
  rect(width, 750, 50, -colorCount*2.5); // rect's position and size 
  width = width- 70; // distance/ spaces between boxes
  
  //text
  fill(255) //white
  noStroke();
  textFont('Helvetica')
    textSize(50)
  text ("The Highest Amount of Played Songs " , 170, 70); // text , x, y
  
  fill('#000000');//black color
		rect(295, 330, 60, 20);
		rect(365, 195, 60, 150);
		rect(575, 330, 60, 20);
		rect(645, 155, 60, 190);
		rect(855, 255, 60, 90);
		rect(995, 315, 60, 30);
				
	//lighter grey boxes
		fill('#444444');
		rect(225, 510, 60, 80);
		rect(295, 510, 60, 80);
		rect(365, 510, 60, 80);
		rect(435, 510, 60, 80);
		rect(505, 510, 60, 80);
		rect(575, 510, 60, 80);
		rect(645, 510, 60, 80);
		rect(715, 510, 60, 80);
		rect(785, 510, 60, 80);
		rect(855, 510, 60, 80);
		rect(925, 510, 60, 80);
		rect(995, 510, 60, 80);
		
	//grey boxes
		fill('#888888');
		rect(225, 590, 60, 145);
		rect(295, 590, 60, 145);
		rect(365, 590, 60, 145);
		rect(435, 590, 60, 145);
		rect(505, 590, 60, 145);
		rect(575, 590, 60, 145);
		rect(645, 590, 60, 145);
		rect(715, 590, 60, 145);
		rect(785, 590, 60, 145);
		rect(855, 590, 60, 145);
		rect(925, 590, 60, 145);
		rect(995, 590, 60, 145);
		
	//light grey boxes
		fill('#CCCCCC');
		rect(225, 690, 60, 65);
		rect(295, 690, 60, 65);
		rect(365, 690, 60, 65);
		rect(435, 690, 60, 65);
		rect(505, 690, 60, 65);
		rect(575, 690, 60, 65);
		rect(645, 690, 60, 65);
		rect(715, 690, 60, 65);
		rect(785, 690, 60, 65);
		rect(855, 690, 60, 65);
		rect(925, 690, 60, 65);
		rect(995, 690, 60, 65);
		
	//thin  rectangles to divide the boxes
		fill('#7469B6');
		rect(295, 170, 620, 5);
		rect(295, 205, 620, 5);
		rect(295, 240, 620, 5);
		rect(295, 275, 620, 5);
		rect(295, 310, 620, 5);
		rect(295, 345, 760, 5);
		rect(295, 380, 760, 5);
		rect(295, 415, 760, 5);
		rect(225, 450, 830, 5);
		rect(225, 485, 830, 5);
		rect(225, 510, 830, 5);
		rect(225, 545, 830, 5);
		rect(225, 585, 830, 5);
		rect(225, 620, 830, 5);
		rect(225, 655, 830, 5);
		rect(225, 690, 830, 5);
		rect(225, 725, 830, 5);
	
		//numbers on top of boxes
	fill('white');
	noStroke();
	textFont ('Bungee');
	textSize (20);
	text ("127", 240, 420);
	text ("165", 310, 325);
	text ("219", 380, 190);
	text ("130", 450, 410);
	text ("133", 520, 400);
	text ("165", 590, 325);
	text("236", 660, 145);
	text("108", 730, 465);	
	text("118", 800, 440);
	text("195", 870, 245);
	text("127", 940, 420);
	text("171", 1010, 310);

}

}