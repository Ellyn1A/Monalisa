
  function draw() {
  background('#256683');
  fill('#607D8B');
  stroke(100);
  strokeWeight(4);
  circle(200, 200, 300);
  fill('white');  
  stroke('#B5401B');
  strokeWeight(1);
  circle(150, 150, 60);
  circle(250, 150, 60);
  stroke('#154E7B');  
  strokeWeight(4);
  line(150, 270, 250, 235);
  fill('#C4124D');
  stroke('#9C27B0');
  strokeWeight(1);
  triangle(200, 180, 170, 220, 220, 220);
  strokeWeight(4);
  line(123,115,178,113);
  line(225,116,279,106);
  stroke(0);
  strokeWeight(1);
  circle(150, 150, 10);
  circle(250, 150, 10);


olhoX = map(mouseX, 0, 400, 130, 170);
olhoY = map(mouseY, 0, 400, 130, 170);

circle(olhoX, olhoY, 10);
circle(olhoX + 100, olhoY, 10);
    function setup() {
  createCanvas(400, 400);
}
let olhoX;
let olhoY;


   
    if(mouseIsPressed){
        console.log(mouseX,mouseY);
    }
}
  function setup() {
  createCanvas(400, 400);
}
let olhoX;
let olhoY;

function draw() {
  background("#7A22FFDB");
  fill("#428F2CE8");
  circle(200, 200, 300);
  fill("rgb(209,41,41)");
  circle(150, 150, 60);
  circle(250, 150, 60);
  line(150, 270, 250, 235);
  fill("#127ACC");
  triangle(200, 180, 170, 220, 220, 220);
  line(123, 115, 178, 113);
  line(225, 116, 279, 106);
 
  olhoX = map(mouseX, 0, 400, 130, 170);
  olhoY = map(mouseY, 0, 400, 130, 170);

  circle(olhoX, olhoY, 10);
  circle(olhoX + 100, olhoY, 10);
  if (mouseIsPressed) {
    console.log(mouseX, mouseY);
  }
}
