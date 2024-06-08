function setup() {
  createCanvas(800, 400);
  background(0);

  // Custom colors for text
 let colors =[ '#FF5733', '#33FF57','#3357FF','#F333FF' ,
  '#FFD433','#33FFF4','#FF33A8','#A833FF',
  '#FF8F33','#8FFF33','#FF3333','#33FF96'];
  //Randomize font sizes 
  let fontSizes=[30,40,50,60];
  
  // Randomize font styles
  textFont('Georgia');
  textAlign(LEFT, CENTER);
  
  let textString = "BATH SPA UNIVERSITY";
  
  // Calculate total width of the text with random sizes
  let textWidths = [];
  let totalWidth = 0;
  let extraSpacing = 10;  // Additional space between characters

 for (let i = 0;i < textString.length; i++){
    let fontSize = random(fontSizes);
    textSize(fontSize);
    let charWidth = textWidth(textString[i]);
    textWidths.push({ width: charWidth, fontSize: fontSize });
    totalWidth += charWidth + extraSpacing;  // Include extra spacing
  }

  // Positioning variables
  let xStart = (width - totalWidth) / 2;  // Start in the middle of the canvas
  let y = height / 2;
  
  // Glitchy background
  for (let i =0; i < width; i += 10){
    for(let j = 0; j < height; j += 10){
     let r = random(255);
     let g = random(255);
     let b = random(255);
      fill(r, g, b, 100)//transparent colors
      noStroke();
      rect(i,j,10,10);
     
    }
  }

  // Glitchy text
  let xPos = xStart;
  for (let i = 0;i < textString.length; i++){
    fill(random(colors));
    stroke(random(colors));
    strokeWeight(random(1, 5));
    textSize(textWidths[i].fontSize);
    
    // Apply a random offset for a glitch effect
    let xOffset = random(-5, 5);
    let yOffset = random(-5, 5);
    
    text(textString[i], xPos + xOffset, y + yOffset);
    
    // Move x position for next character with extra spacing
    xPos += textWidths[i].width + extraSpacing;
  }
}

function draw() {
  // Empty draw function to keep canvas active
}