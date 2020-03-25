var sun,mercury,venus,earth,mars,jupiter,saturn;


function setup() {
  createCanvas(800,400);
  sun = createSprite(400, 200, 50, 50);
  mercury  = createSprite(200,200,0,0);
  venus = createSprite(200,100,0,0);
  earth = createSprite(300,150,0,0);
  mars = createSprite(400,170,0,0);
  jupiter = createSprite(250,0,25);
  saturn = createSprite(370,90,10)

sun.visible = false;
mercury.visible = false; 
venus.visible = false;
earth.visible = false;
mars.visible = false;
jupiter.visible = false;
saturn.visible = false;

sun.velocityX = -3;
mercury.velocityX = 3;


}

function draw() {
  background(255,255,255);  
  drawSprites();
  strokeWeight(2);
  stroke("orange");
  ellipse(mercury.position.x,mercury.position.y,40,);
  ellipse(sun.position.x,sun.position.y,50);
  ellipse(venus.position.x,venus.position.y,20);
  ellipse(earth.position.x,earth.position.y,15);
  ellipse(mars.position.x,mars.position.y,13);
  ellipse(jupiter.position.x,jupiter.position.y,25);
  ellipse(saturn.position.x,saturn.position.y,23);
 

}