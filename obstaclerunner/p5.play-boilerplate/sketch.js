const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
const Constraint=Matter.Constraint;

var player1;
var scene;

function setup() {
  createCanvas(displayWidth,displayHeight);
  player=createSprite(400, 200, 50, 50);
  scene=creteSprite(200,200,200,200);

 scene.velocityX=-10;
 scene.velocityY=0;
}

function draw() {
  background("blue"); 


  if (scene.x<400) {
    scene.x=scene.width/2
  }
  drawSprites();
}
