
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	bob1=new bob(390,300,62);
	bob2=new bob(bob1.x+60,300,62);
	bob3=new bob(bob2.x+60,300,62);
	bob4=new bob(bob1.x-60,300,62);
	bob5=new bob(bob4.x-60,300,62);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
}



