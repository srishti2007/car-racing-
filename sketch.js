var bullet1, bullet2, bullet3;

var wall1, wall2, wall3;

var thickness, speed, weight;

var line1, line2, line3;

function setup() {

  createCanvas(1600,400);

  bullet1 = createSprite(40, 80, 40, 30);
  bullet1.shapeColor="white";
  bullet1.velocityX=60;

  bullet2 = createSprite(50, 200, 40, 30);
  bullet2.shapeColor="white";
  bullet2.velocityX=50;

  bullet3= createSprite(50, 300, 40, 30);
  bullet3.shapeColor="white";
  bullet3.velocityX=45;
                      
  wall1 = createSprite(1500, 50,50, 130);
  wall1.shapeColor="black";
  wall1.width=random(22, 83);

  wall2 = createSprite(1500, 185, 50, 130);
  wall2.shapeColor="black";
  wall2.width=random(22, 83);

  wall3 = createSprite(1500, 340, 50, 165);
  wall3.shapeColor="black";
  wall3.width=random(22, 83);

  line1 = createSprite(0, 120, 10000, 20);
  line1.shapeColor="white";

  line2 = createSprite(0, 250, 10000, 20);
  line2.shapeColor="white";

  line3 = createSprite(0,390, 10000, 20);
  line3.shapeColor="white";

  }

function draw() { 
  
background(0,255,0); 

weight = random(20, 70);
thickness = random(20, 40);

text("GREEN means safe ", 1300, 20);
text("RED means dangerous ", 1300, 40);

    if (wall1.x -bullet1.x < bullet1.width/2 + wall1.width/2){

    var damage1 = (0.5*weight*60*60)/(thickness*thickness*thickness);

      if ((damage1<10)||(damage1===10)){
          wall1.shapeColor="green";
      }

      if (damage1>10){
      wall1.shapeColor="red";
      }

    bullet1.velocityX=0;
    bullet1.width= 50;
  
    }

    if (wall2.x -bullet2.x < bullet2.width/2 + wall2.width/2){

      var damage2 = (0.5*weight*50*50)/(thickness*thickness*thickness);

        if ((damage2<10)||(damage2===10)){
          wall2.shapeColor="green";
        }

        if (damage2>10){
          wall2.shapeColor="red";
        }

      bullet2.velocityX=0;
      bullet2.width= 0;

    }

    if (wall3.x -bullet3.x < bullet3.width/2 + wall3.width/2){

      var damage3 =  (0.5*weight*45*45)/(thickness*thickness*thickness);
  
          if ((damage3<10)||(damage3===10)){
            wall3.shapeColor="green";
          }
        
          if (damage3>10){
            wall3.shapeColor="red";      
          }
  
      bullet3.velocityX=0;
      bullet3.width= 100;
    }
    
 drawSprites();

}                  