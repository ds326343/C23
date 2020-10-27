
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies



var engine;
var world;
var object;
var box1; 
function setup() {
  createCanvas(400,400);

engine = Engine.create();
world = engine.world;

box1= new Box(200,300,50,50);
box2 = new Box(240,100,50,80);
ground = new ground(200,390,400,20)

}

function draw() {
  background(2);  


  Engine.update(engine);
  ground.display()

  box1.display();
  box2.display();
  
}



