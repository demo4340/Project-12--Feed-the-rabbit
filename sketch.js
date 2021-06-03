var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg;
var  leaves, leavesImg;


function preload(){
  
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leavesImg = loadImage("leaf.png");

}

function setup(){
  
  createCanvas(400,400);
  
  // Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);

}


function draw() {

  background(0);
  
  rabbit.x = World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);


  var r = Math.round(random(1,2));

  if(World.frameCount % 80 === 0){

    if(r === 1){

      Apples();

    }

    else if (r === 2){

      Leaves();

    }

  }

  drawSprites();

}

function Apples(){

  apple = createSprite(Math.round(random(50, 350)), 40, 10, 10);
  apple.addImage("apple", appleImg);
  apple.scale = 0.05;;
  apple.velocityY = 2;
  apple.lifetime = 200;

}

function Leaves(){

  leaves = createSprite(Math.round(random(50, 350)), 40, 10, 10);
  leaves.addImage("apple", leavesImg);
  leaves.scale = 0.1;
  leaves.velocityY = 2;
  leaves.lifetime = 200;

}