
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(400,400); 
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
  
}


function draw() {
background(220);
   ground.x=ground.width/2;
 
  if(keyDown("space")&& monkey.y >= 130){
    monkey.velocityY=-12;
  }
  monkey.velocityY=monkey.velocityY + 0.8;
  monkey.collide(ground);
  
var survivalTime=0;
stroke("white");  
  textSize(20);
  fill("white");
 
  text("score:"+ score,500,50);
  stroke("black");  
  textSize(20);
  fill("black");
 
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+ survivalTime,100,50);
  
  drawSprites();
 banana(); 
 obstales(); 
}

function banana(){
   if (frameCount % 86 === 0) {
   var  banana = createSprite(600,100,40,10);
    banana.y = Math.round(random(100,120));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
}
}

function obstales(){
   if (frameCount % 100 === 0) {
   var  obstacles = createSprite(40,327,40,10);
    obstacles.x = Math.round(random(320,400));
    obstacles.addImage(obstacleImage);
    obstacles.scale = 0.1;
    obstacles.velocityX = -3;
    
   }}