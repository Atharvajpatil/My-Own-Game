const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ball;
var blower;
var blowerMouth;
var button;
var catcher
var catcher1;
var catcher2;
 var instruction

function setup() {
  var canvas = createCanvas(500, 500);

  engine = Engine.create();
  world = engine.world;

  ball = new Ball(width / 2 + 150, height / 2 - 80, 50, 50);
 
  blowerMouth = new BlowerMouth(width / 2 + 150, height / 2 + 150, 100, 90);
 
catcher = new Catcher(70,150,10,180)
catcher1 = new Catcher(120,245,110,10)
catcher2 = new Catcher(180,210,10,80);

  button = createButton("Click to Blow");
  button.position(width / 2+80,450);
  button.class("blowButton");

instruction = createButton("Make The Ball Reach the Container");
instruction.position(width/2-200,450);
instruction.class("information");

  button.mousePressed(blow);

  

}

function draw() {
  background("gray");
  Engine.update(engine);

  
  ball.show();
  blowerMouth.show();
  catcher.show();
  catcher1.show();
  catcher2.show();
}

function blow() {

  Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:-0.05, y:-0.06});


}

