var cat, mouse;
var bg;
var catImage, mouseImage;
var diedCat, sadMouse;

function preload() {
  catImage=loadAnimation("Cat1.png","Cat2.png");
  mouseImage=loadAnimation("mouseRun2.png","mouseRun3.png")
  bg=loadImage("road.png")
  obstacle1=loadImage("obstacles1.png");
  obstacle2=loadImage("obstacles2.png");
  obstacle3=loadImage("obstacles3.png");
  obstacle4=loadImage("obstacles4.png");
  obstacle5=loadImage("obstacles5.png");
  obstacle6=loadImage("obstacles6.png");

  diedCat=loadAnimation("catDiedCat.png")
  sadMouse=loadAnimation("MouseSad.png")
 
}

function setup() {
  createCanvas(1500,700);
  back=createSprite(750,300,1800,600)
  back.addImage(bg)
  back.velocityX=-3
  back.scale=2
  back.x=back.width/2
  
  cat=createSprite(150, 450, 50, 50);
  cat.addAnimation("catRunning",catImage)

  mouse=createSprite(750,500,50,50)
  mouse.addAnimation("mouseRunning", mouseImage)

  ground=createSprite(750,600,1500,10)
  ground.visible=false

  obstacleGroup=new Group()
}

function draw() {
  background(0);
  if(back.x<700){
    back.x=900
  }

  if(keyIsDown( UP_ARROW)){
    cat.velocityY=-8;
  }
  cat.velocityY=cat.velocityY+0.5
  obstacles();
  cat.collide(ground)

  if (obstacleGroup.isTouching(cat)){
    back.velocityX=0;
    obstacleGroup.setVelocityXEach(0);
    cat.changeAnimation("DEADTOM",diedCat)
    mouse.changeAnimation("SADMOUSE",sadMouse)
  }

  drawSprites();
}

function obstacles(){
  if(frameCount%350 === 0){
    var obstacle=createSprite(1500,500,50,50)
    obstacle.velocityX=-3
    obstacle.scale=0.7
    var rand=Math.round(random(1,6))
    switch(rand){
      case 1:obstacle.addImage(obstacle1)
      break
      case 2:obstacle.addImage(obstacle2)
      break
      case 3:obstacle.addImage(obstacle3)
      break
      case 4:obstacle.addImage(obstacle4)
      break
      case 5:obstacle.addImage(obstacle5)
      break
      case 6:obstacle.addImage(obstacle6)
      break
    }
    obstacleGroup.add(obstacle)
  }
}