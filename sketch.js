var box1,box2;


function setup(){
createCanvas(600,600);
box1 = createSprite(300,300,100,50);
box1.shapeColor ="blue";
box2 = createSprite(100,300,50,50);
box2.shapeColor ="red";
box1.debug = true;
box2.debug = true;
}

function draw(){
background("black");

box2.x = mouseX;
box2.y = mouseY;

if(touch(box1,box2)){
  box1.x = random(0,600);
  box1.y = random(0,600);
}

  drawSprites();
  

}


