var bow, background1 ,backgroundImage ,bowImage , redBalloonImage,arrow


function preload(){
 //load your images here 
 backgroundImage=loadImage("background0.png");
 bowImage=loadImage("bow0.png") 
 redBalloonImage=loadImage("red_balloon0.png")
  pinkBalloonImage=loadImage("pink_balloon0.png")
  blueBalloonImage=loadImage("blue_balloon0.png")
  greenBalloonImage=loadImage("green_balloon0.png")
  arrowImage=loadImage("arrow0.png")
}

function setup() {
  createCanvas(600, 600);
  
  //add code here
  
  background1 = createSprite(0,0,600,600)
  background1.addImage(backgroundImage)
  background1.scale=3
  background1.velocityX=-5
  
  bow = createSprite(500,300,10,10)
  bow.addImage(bowImage)
  
  
  for(var i=60;i<390;i=i+60){
    redBalloon=createSprite(50,i,5,5)
    redBalloon.addImage(redBalloonImage)
    redBalloon.scale=0.1
  }
  for(var i=100;i<390;i=i+60){
    pinkBalloon=createSprite(100,i,5,5)
    pinkBalloon.addImage(pinkBalloonImage)
    
  }
  for(var i=160;i<390;i=i+60){
    greenBalloon=createSprite(150,i,5,5)
    greenBalloon.addImage(greenBalloonImage)
    greenBalloon.scale=0.1
  }
  for(var i=200;i<320;i=i+60){
    blueBalloon=createSprite(200,i,5,5)
    blueBalloon.addImage(blueBalloonImage)
    blueBalloon.scale=0.1
  }
}

function draw(){
  background("black");
   bow.y=mouseY 
  //add code here
  if (background1.x < 0) {
  background1.x = background1.width / 2;
  }
  if(keyDown("space")){
    var arrow=createSprite(490,200,20,20)
    arrow.addImage(arrowImage)
    arrow.scale= 0.4
    arrow.velocityX=-5
    arrow.y=bow.y
  }
 
  drawSprites();
}

