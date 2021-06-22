let blockImg;
let block1;
let block2;
let clack;
let count = 0;
let digits = 5;
let counDiv = 0;
const timeSteps= 10;
let button;

function preload(){
 
  blockImg = loadImage('block.png');
  clack = loadSound('clack.wav');  
}


function setup() {
  clear();
  createCanvas(windowWidth, 200);
  
  
  block1 = new Block(100,20,1,0,0);
  const m2 = Math.pow(100,digits-1);
  block2 = new Block(200,150,m2,0.1/timeSteps,20);
  countDiv = createDiv(count);
  countDiv.style('font-size','72pt');
 

}


function draw() {
 clear();
  background(155);
 

for (let i = 0; i < timeSteps; i++){
  if (  block1.collide(block2) ){
    const v1 = block1.bounce(block2);
    const v2 = block2.bounce(block1);
    block1.v = v1;
    block2.v = v2;
    clack.play();
    count++;
  }
 if( block1.hitWall()){
   block1.reverse();
   //clack.play();
   count++;
 }
  block1.update();
  block2.update();
  
}
  block1.show();
  block2.show();
 countDiv.html(nf(count,digits));
 
}
