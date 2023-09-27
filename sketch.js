
var forestimg;
var monkeyimg;
var obstacleimg;
var bananaimg;

var monkey;
var forest;
var berry;
var banana;


function preload(){
  forestimg = loadImage("./assets/forest.webp");
  //monkeyimg = loadImage("assets/monkey.webp");
  //bananaimg = loadImage("assets/banana.jpg");
  obstacleimg = loadImage("./assets/PosinousBerry.jpg");
}

function setup() {
  createCanvas(800,400);
  

  monkey = createSprite(160,340,20,20);
  monkey.scale = 0.09;
  //monkey.addImage(monkeyimg);
  
}

function draw() {
  background(forestimg);  
  

  monkey.x = World.mouseX;

  edges = CreateEdgeSprites();
  monkey.collide(edges);

  drawSprites();
}