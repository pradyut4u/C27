const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bob,sling
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    bob = new Bob(200,260);
    sling = new Sling(bob.body,{x:200, y:200});
}
function draw(){
    background(99,111,201)
    Engine.update(engine);
    bob.display()
    sling.display()
}
function mouseDragged(){
    Matter.Body.setPosition(bob.body, {x: mouseX , y: mouseY});
}