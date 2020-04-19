const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var ground;
var ball;
var logConstraint;
var string;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
var ball_options={
    restitution:1.0
}


    ground = Bodies.rectangle(200,100,200,20,ground_options);
    World.add(world,ground);
ball = Bodies.circle(200,300,20,ball_options);
World.add(world,ball);
    console.log(ground);

    
    string = new String(ball,ground);

    text("Press space to move the pendulum",200,50);
text("Press enter to stop the pendulum ",200,70);
}

function draw(){
    background(200);
    Engine.update(engine);
    rectMode(CENTER);



    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);
    string.display();
    //logConstraint.display();
    text("Press space to move the pendulum",200,10);
text("Press esc to stop the pendulum ",200,50);
drawSprites();
}

function keyPressed(){
    if(keyCode===32){
       ball.position.x = mouseX;
       ball.position.y = mouseY;
    }

}


function stopBall(){
    if(keyCode===27){
        ball.position.x = 200;
        ball.position.y = 300;
        
    }
}