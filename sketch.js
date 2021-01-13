
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
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	//Create a Ground
	ground = Bodies.rectangle(width/2, height-35, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	boxPosition=width/2+100;
 	boxY=610;
	
	box_options = {
		isStatic: true,
		density: 1
	}

 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , box_options );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+40, 200,20 , box_options );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , box_options );
 	World.add(world, boxRightBody);

	paper = new Paper(50,50,20);
	Engine.run(engine);  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  paper.display();
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(paper.body,paper.body.position,{x:50,y:-80});
	}
}


