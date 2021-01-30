const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var hexagon,ground,ground1,ground2,sling;
var block11;
var backgroundImg;


function setup(){
    var canvas = createCanvas(1200,650);
    engine = Engine.create();
    world = engine.world;
 hexagon=new polygon(200,400,40,40);
 sling=new Chain(hexagon.body,{x:150,y:350});
 ground=new Ground(600,630,140000,20);
 ground1=new Ground(500,500,300,30);
 ground2=new Ground(800,300,210,30);

 block11=new box(395,450,30,30,"purple");
 block12=new box(425,450,30,30,"purple");
 block13=new box(455,450,30,30,"purple");
 block14=new box(485,450,30,30,"purple");
 block15=new box(515,450,30,30,"purple");
 block16=new box(545,450,30,30,"purple");
 block17=new box(575,450,30,30,"purple");
 block18=new box(605,450,30,30,"purple");
 
 block21=new box(410,420,30,30,"lightblue");
 block22=new box(440,420,30,30,"lightblue");
 block23=new box(470,420,30,30,"lightblue");
 block24=new box(500,420,30,30,"lightblue");
 block25=new box(530,420,30,30,"lightblue");
 block26=new box(560,420,30,30,"lightblue");
 block27=new box(590,420,30,30,"lightblue");

 block31=new box(425,390,30,30,"yellow");
 block32=new box(455,390,30,30,"yellow");
 block33=new box(485,390,30,30,"yellow");
 block34=new box(515,390,30,30,"yellow");
 block35=new box(545,390,30,30,"yellow");
 block36=new box(575,390,30,30,"yellow");

 block41=new box(440,360,30,30,"blue");
 block42=new box(470,360,30,30,"blue");
 block43=new box(500,360,30,30,"blue");
 block44=new box(530,360,30,30,"blue");
 block45=new box(560,360,30,30,"blue");

 block51=new box(455,340,30,30,"grey");
 block52=new box(485,340,30,30,"grey");
 block53=new box(515,340,30,30,"grey");
 block54=new box(545,340,30,30,"grey");

 block61=new box(470,310,30,30,"green");
 block62=new box(500,310,30,30,"green");
 block63=new box(530,310,30,30,"green");

 block71=new box(500,280,30,30,"white");

 block111=new box(725,260,30,30,"darkgreen");
 block112=new box(755,260,30,30,"darkgreen");
 block113=new box(785,260,30,30,"darkgreen");
 block114=new box(815,260,30,30,"darkgreen");
 block115=new box(845,260,30,30,"darkgreen");
 block116=new box(875,260,30,30,"darkgreen");

 block121=new box(740,230,30,30,"lightpurple");
 block122=new box(770,230,30,30,"lightpurple");
 block123=new box(800,230,30,30,"lightpurple");
 block124=new box(830,230,30,30,"lightpurple");
 block125=new box(860,230,30,30,"lightpurple");

 block131=new box(755,200,30,30,"blue");
 block132=new box(785,200,30,30,"blue");
 block133=new box(815,200,30,30,"blue");
 block134=new box(845,200,30,30,"blue");

 block141=new box(770,170,30,30,"purple");
 block142=new box(800,170,30,30,"purple");
 block143=new box(830,170,30,30,"purple");
 
 block151=new box(800,140,30,30,"black");
 score=0;
 
}


function keyPressed(){
    if(key==' '){
        setTimeout(xyz,50); 
    }
}


function mouseRealeased(){
    
}
function xyz(){
    sling.fly();
}

function draw(){
    if(backgroundImg){
        background(b1);
    }
    Engine.update(engine);


    

    strokeWeight(4);
    hexagon.display();
    sling.display();
    ground.display();
    ground1.display();
    ground2.display();

    block11.display();
    block12.display();
    block13.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();

    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();

    block31.display();
    block32.display();
    block33.display();
    block34.display();
    block35.display();
    block36.display();

    block41.display();
    block42.display();
    block43.display();
    block44.display();
    block45.display();

    block51.display();
    block52.display();
    block53.display();
    block54.display();

    block61.display();
    block62.display();
    block63.display();

    block71.display();

    block111.display();
    block112.display();
    block113.display();
    block114.display();
    block115.display();
    block116.display();

    block121.display();
    block122.display();
    block123.display();
    block124.display();
    block125.display();

    block131.display();
    block132.display();
    block133.display();
    block134.display();

    block141.display();
    block142.display();
    block143.display();

    block151.display();

    push();
    stroke("lightGreen");
    text("Score: "+score,750,40);
    text("Press A to get another chance to play",20,40)
    pop();

   block11.Score();
   block12.Score();
   block13.Score();
   block14.Score();
   block15.Score();
   block16.Score();
   block18.Score();

   block21.Score();
   block22.Score();
   block23.Score();
   block24.Score();
   block25.Score();
   block26.Score();
   block27.Score();

   block31.Score();
   block32.Score();
   block33.Score();
   block34.Score();
   block35.Score();
   block36.Score();

   block41.Score();
   block42.Score();
   block43.Score();
   block44.Score();
   block45.Score();

   block51.Score();
   block52.Score();
   block53.Score();
   block54.Score();

   block61.Score();
   block62.Score();
   block63.Score();

   block71.Score();
 
   block111.Score();
   block112.Score();
   block115.Score();
   block113.Score();
   block114.Score();
   block116.Score();

   block121.Score();
   block122.Score();
   block125.Score();
   block123.Score();
   block124.Score();

   block131.Score();
   block132.Score();
   block133.Score();
   block134.Score();

   block141.Score();
   block142.Score();
   block143.Score();

   block151.Score();
   
    getTime();
   
}

async function getTime(){

    var worldtime=await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata");
    var worldTimejson=await worldtime.json();
    //var b1="Blue";
    var datetime=worldTimejson.datetime;
    var hours=datetime.slice(11,13);
   // console.log(hours);
    if(hours>=06&&hours<=18){
        b1="lightBlue";
    }else{
        b1="darkBlue";
    }
    backgroundImg=loadImage(b1);
    //console.log(backgroundImg);
}

function mouseDragged(){
    hexagon.body.position.x=mouseX;
    hexagon.body.position.y=mouseY
}

    /**/
    

    function keyReleased(){
        if(key=='a'){
          Matter.Body.setPosition(hexagon.body,{x:140,y:560});
          sling.attach(hexagon.body);
        }
      }