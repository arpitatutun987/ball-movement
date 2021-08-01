var ball;

function setup(){
  createCanvas(400,400);

  ball = createSprite(200,200,20,20);
  ball.shapeColor = "brown";

}

function draw(){
  background("lightblue");

  drawSprites();
}