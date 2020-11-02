var bullet,wall;
var speed,weight;
var thickness;

function setup() {
  createCanvas(1600,400);

  bullet = createSprite(0,200,90,30);
  bullet.shapeColor = 'white';

  thickness = random(22,83)

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = (80,80,80);

  speed = random(223,321);
  weight = random(30,52);
  
}

function draw() {
  background("purple"); 

  bullet.velocityX = speed;
  
  if(Collide(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness)
    if(damage > 10){
      wall.shapeColor = 'red';
      
    }
    if(damage < 10){
      wall.shapeColor = 'green';
    }
  }

  drawSprites();
}
