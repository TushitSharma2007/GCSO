var fixedRect, movingRect;
var speed,weight ;

function setup() {
  createCanvas(600,400);
  fixedRect = createSprite(590, 200, 50, 390);
  fixedRect.shapeColor = "gray";
  //fixedRect.debug = true;
  movingRect = createSprite(0,200,40,30);
  movingRect.shapeColor = "white";
  //movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  speed = random(55,90);
  weight = random(400,1500);
  movingRect.velocityX = speed;
 // movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

 if (isTouching() ){
   movingRect.velocityX = 0;
            
  var deformation =0.5*weight*speed*speed*22500;
  if(deformation>180){
    movingRect.shapeColor = color(255,0,0);
  }
  if(deformation<180 && deformation>100){
    movingRect.shapeColor = color(230,230,0)
  }
  if(deformation<100){
    movingRect.shapeColor = color(0,255,0);
  }
 }
 
  drawSprites();
}
function isTouching(){
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
 return true;
}
else{
  return false;
}
}