const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine;
var world;

var ground, platform, platform2;
var blocks0,blocks01,blocks02,blocks03,blocks04,blocks05,blocks06,blocks1,blocks2,blocks3,blocks4,blocks5,blocks6,blocks7,blocks8,blocks9,blocks10,blocks11,blocks12,blocks13,blocks14,blocks15,bullet;
var blockString;
var score = 0;
var backgroundCol = "black"

function setup() {
  var canvas = createCanvas(1200,700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,700,1200,20);
  
  platform = new Ground(490+30,510-50,240,20)
  platform2 = new Ground(490+460,510-200,120,20)

  blocks01 = new Box(490+430,470-200,30,30);
  blocks02 = new Box(490+460,470-200,30,30);
  blocks03 = new Box(490+490,470-200,30,30);
  blocks04 = new Box(490+445,470-230,30,30);
  blocks05 = new Box(490+475,470-230,30,30);
  blocks06 = new Box(490+460,470-250,30,30);

  blocks0 = new Box(400+30,500-50,30,30);
  blocks1 = new Box(430+30,500-50,30,30);
  blocks2 = new Box(460+30,500-50,30,30);
  blocks3 = new Box(490+30,500-50,30,30);
  blocks4 = new Box(520+30,500-50,30,30);
  blocks5 = new Box(550+30,500-50,30,30);
  blocks6 = new Box(580+30,500-50,30,30);

  blocks7 = new Box(430+30,470-50,30,30);
  blocks8 = new Box(460+30,470-50,30,30);
  blocks9 = new Box(490+30,470-50,30,30);
  blocks10 = new Box(520+30,470-50,30,30);
  blocks11 = new Box(550+30,470-50,30,30);

  blocks12 = new Box(460+30,440-50,30,30);
  blocks13 = new Box(490+30,440-50,30,30);
  blocks14 = new Box(520+30,440-50,30,30);

  blocks15 = new Box(490+30,410-50,30,30);

  bullet = new Box2(150,500,40,40);

  blockString = new String(bullet.body,{x:150, y:500});

  timeZone();

}

function draw() {
  background(backgroundCol);
  Engine.update(engine);

  textSize(20);
  text("Score: "+ score,1050,25)

  blocks0.score();
  blocks1.score();
  blocks2.score();
  blocks3.score();
  blocks4.score();
  blocks5.score();
  blocks6.score();
  blocks7.score();
  blocks8.score();
  blocks9.score();
  blocks10.score();
  blocks11.score();
  blocks12.score();
  blocks13.score();
  blocks14.score();
  blocks15.score();
  blocks01.score();
  blocks02.score();
  blocks03.score();
  blocks04.score();
  blocks05.score();
  blocks06.score();

  blocks0.display();
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  blocks6.display();
  blocks7.display();
  blocks8.display();
  blocks9.display();
  blocks10.display();
  blocks11.display();
  blocks12.display();
  blocks13.display();
  blocks14.display();
  blocks15.display();
  blocks01.display();
  blocks02.display();
  blocks03.display();
  blocks04.display();
  blocks05.display();
  blocks06.display();

  blockString.display();
  
  
  ground.display();
  platform.display();
  platform2.display();
  bullet.display();
}

function mouseDragged(){
  Matter.Body.setPosition(bullet.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  blockString.fly();
}

function keyPressed(){
  if(keyCode===32){
      blockString.attach(bullet.body);
  }
}

async function timeZone(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/America/New_York");
  var responseJSON = await response.json();
  console.log(responseJSON);

  var dt = responseJSON.datetime;
  var hour = dt.slice(11, 13);

  if(hour>=06&&hour<=18){
      backgroundCol = "blue"
  } else {
      backgroundCol = "black"
  }

}