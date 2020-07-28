
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper = new Paper(200,320,70,70);
	
	dustbin = new Dustbin(600,320,70,70);
	
	ground = new Ground(400,500,800,20);
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	paper.display();
	
	dustbin.display();

	ground.display();



  drawSprites();
 
}



