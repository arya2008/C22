const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,50,ground_options);
    World.add(world,ground);
    ball=Bodies.circle(200,100,10,{restitution:0.8})
    console.log(ground);
    World.add(world,ball)
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,50);
    circle(ball.position.x,ball.position.y,50)
}