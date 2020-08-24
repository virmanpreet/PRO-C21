var bullet;
var wall,thickness;
var speed , weight;
function setup() {
  createCanvas(1600,400);
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);
  bullet = createSprite(50,200,70,50);
  bullet.shapeColor = ("255,255,255");
  bullet.velocityX = speed;
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
background(20);

if(hasCollided(bullet, wall)) 
{
  bullet.velocityX = 0;
  var damage=0.5 * weight * speed * speed/(thickness *thickness *thickness);
}
  if(damage>10)
  {
wall.shapeColor = color("green");
}
if(damage<10)
{
wall.shapeColor = color("red");
}




drawSprites();
}

function hasCollided(bullet,wall)
{
bulletrightedge=bullet.x + bullet.width;
wallleftedge=wall.x;
if (bulletrightedge>=wallleftedge)
{
return true;
}
return false;
}











