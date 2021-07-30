
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render

var B1,B2,B3
var R1,R2,R3
var world

function setup() {
	createCanvas(800, 700);
    rectMode(CENTER)


	engine = Engine.create();
	world = engine.world;
    
	roof=new Roof(400,250,175,20)
	B1=new Bob(320,575,40)
	B2=new Bob(360,575,40)
	B3=new Bob(400,575,40)
	//Create the Bodies Here.
    R1=new Rope(B1.body,roof.body,-80,0)
	R2=new Rope(B2.body,roof.body,-40,0)
	R3=new Rope(B3.body,roof.body,0,0)
    
    
	Engine.run(engine);
  
}

function keyPressed(){
if(keyCode== UP_ARROW){
Matter.Body.applyForce(B1.body,B1.body.position,{x:-50,y:-45})
}
}
function draw() {
  rectMode(CENTER);
  background("white");
   roof.display()
   B1.display()
   B2.display()
   B3.display()
   R1.display()
   R2.display()
   R3.display()
 
}



