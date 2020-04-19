var fixedRect;
var movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 80,50);
  movingRect=createSprite(200,200,50,50);
  fixedRect.shapeColor="red"
  movingRect.shapeColor="red"
  fixedRect.velocityX=-5;
  movingRect.velocityX=5;
}

function draw() {
  background(0);  
  //movingRect.x=mouseX;
  //movingRect.y=mouseY;
  if(fixedRect.x-movingRect.x<=fixedRect.width/2+movingRect.width/2 &&
    movingRect.x-fixedRect.x<=fixedRect.width/2+movingRect.width/2){
      fixedRect.velocityX=fixedRect.velocityX*-1
      movingRect.velocityX=movingRect.velocityX*-1
    }
    /*
    fixedRect.y-movingRect.y<=fixedRect.height/2+movingRect.height/2 &&
    movingRect.y-fixedRect.y<=fixedRect.height/2+movingRect.height/2){
      fixedRect.shapeColor="blue"
      movingRect.shapeColor="blue"
    } else{
      fixedRect.shapeColor="red"
      movingRect.shapeColor="red"
  }*/
  drawSprites();
}