const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
const Constraint=Matter.Constraint;

var player1;
var scene;

function preload(){
  sceneImage=loadImage("images/scene2.jpg");
   playerrunner1=loadImage("images/run1.png");
   playerrunner2=loadImage("images/run2.png");
   playerrunner3=loadImage("images/run3.png");
   playerrunner4=loadImage("images/run4.png");
   playerrunner5=loadImage("images/run5.png");
   playerrunner6=loadImage("images/run6.png");

}
function setup() {
  createCanvas(800,800);
  scene=createSprite(200,200,800,800);
scene.x=scene.width/2
player1=createSprite(100, 500, 50, 50);

player1.addImage(playerrunner1);
scene.addImage(sceneImage);

 scene.velocityX=-10;
scene.display();

scene.scale=5
player1.scale=0.75

}

function draw() {
 background("white");

  if (scene.x<0) {
    scene.x=scene.width/2
  }
  spawnObstacles()

  drawSprites();


}
function spawnObstacles() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var obstacles = createSprite(400,320,40,10);
    obstacles.y =randomNumber(280,320);
    //obstacles.setAnimation("cloud");
    obstacles.scale = 0.5;
    obstacles.velocityX = -3;
    
     //assign lifetime to the variable
     obstacles.lifetime = 134;
    
  
    //add each cloud to the group
    ObstacleGroup.add(obstacles);
  }}