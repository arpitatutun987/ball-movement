var ball,database,position;

function setup(){
  database = firebase.database();
  createCanvas(400,400);

  ball = createSprite(200,200,20,20);
  ball.shapeColor = "brown";

  var ballPosition = database.ref('ball/position');
  ballPosition.on("value",readPosition,showError);

}

function draw(){
  background("lightblue");

  if(keyDown(LEFT_ARROW)){
    writePosition(-1,0)
  }

  if(keyDown(RIGHT_ARROW)){
    writePosition(1,0)
  }

  if(keyDown(UP_ARROW)){
    writePosition(0,-1)
  }

  if(keyDown(DOWN_ARROW)){
    writePosition(0,1)
  }

  drawSprites();
}

function writePosition(x,y){
  database.ref('ball/position').set({
    'x': position.x+x,
    'y' : position.y+y
  })
}

function readPosition(data){
  position = data.val();
  ball.x = position.x;
  ball.y = position.y;

}

function showError(){

console.log("error")
}