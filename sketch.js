var seaImg,shipImg1
var sea , ship 

function preload(){
seaImg = loadImage ("sea.png");
shipImg1 = loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png");
}


function setup(){
  createCanvas(400,400);
  sea=createSprite(400,200)
  sea.addImage(seaImg)
  sea. velocityX=-4
  sea.scale = 0.2
  ship  = createSprite(130,200,30,30)
  ship.addAnimation(shipImg1)
}

function draw() {
  background("blue");
 

if (sea.x< 0){
sea.x = sea.width/8

}
drawSprites();
}

