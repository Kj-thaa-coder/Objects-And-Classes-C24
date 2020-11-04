const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine, world, bodies, rect2

function setup() {
  createCanvas(1200,400);
  engine = Engine.create()
  world = engine.world
  
  box1 = new Box(700,320,70,70);
  box2 = new Box(920,320,70,70);
  box3 = new Box(700,240,70,70);
  box4 = new Box(920,240,70,70);
  box5 = new Box(810,170,70,70)
  ground = new Ground(600,390,1200,20)
  pig1 = new Pig(810,320)
  pig2 = new Pig(810,240)
  log1 = new Log(810,260,320,PI/2)
  log2 = new Log(810,190,320,PI/2)
  log3 = new Log(700,100,150,PI/6)
  log4 = new Log(920,100,150,PI/-6)
  
}

function draw() {
  Engine.update(engine)
  background(255,255,255);  
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
ground.display();
pig1.display();
pig2.display();
log1.display();
log2.display();
log3.display();
log4.display();
}