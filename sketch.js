const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon, holder;
var slingshot;

var a;
var circles=[];
function setup() {
  var canvas = createCanvas(1200,800);
  engine = Engine.create();
    world = engine.world;
  stroke(255)
  
 // camera=new Camera(width/2,height/2,0.5);
  //camera.on();
  //a=height;
  //circles.push(width/2)

  box1=new Box(800,200,50,50);
  box2=new Box(800,200,50,50);
  box3=new Box(800,200,50,50);

  box6=new Box(750,200,50,50);
  box7=new Box(750,200,50,50);

  box8=new Box(700,200,50,50); 
  
  box9=new Box(850,200,50,50);
  box10=new Box(850,200,50,50);

  box11=new Box(900,200,50,50)
 
  ground=new Ground(800,400,300,20)

  box12=new Box(1100,200,50,50)
  box13=new Box(1100,200,50,50)

  box14=new Box(1150,200,50,50)

  box15=new Box(1050,200,50,50)

  ground1=new Ground(1100,250,155,20)

  polygon=new Polygon(200,400)

  holder=new Holder(450,300,25,25)

  slingshot=new Chain(polygon.body,holder.body)
}

function draw() {
  //camera.zoom=camera.zoom+1

  Engine.update(engine);

  background(0);  
  
  
  //a=a-1;
  //camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}
 
  
  /*for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 */

 drawSprites();
 box1.display();
 box2.display();
 box3.display();

 box6.display();
 box7.display();

 box8.display()

 box9.display()
 box10.display()

 box11.display()

 box12.display()
 box13.display()

 box14.display()

 box15.display()

 ground.display()
 ground1.display()

 polygon.display()

 slingshot.display()

 holder.display()
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


/*function mouseReleased(){
  slingshot.fly();
}
*/
/*function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} 
*/