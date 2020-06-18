var side1,side2,side3,side4,covering,gameState

var player,pimg,wall
var food, foodimg
var enemy1,e1img
var enemy2,e2img
var enemy3,e3img
var enemy4,e4img
var enemy5,e5img
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall1,wall12,wall13,wall14


function preload(){
foodimg= loadImage("food.png")
e1img = loadImage("ye.png")
e2img = loadImage("re.png")
e3img = loadImage("me.png")
e4img = loadImage("ge.png")
pimg = loadImage("pame.png")
}



function setup() {
  createCanvas(800,400);
  gameState = "start";

  covering = createSprite(400,200,200,100);
  covering.shapeColor = "red"
   side1 = createSprite(400,150,200,5);
  side3 = createSprite(400,250,200,5);
  side2 = createSprite(300,200,5,100);
   side4 = createSprite(500,200,5,100);
   enemy1 = createSprite(225,125,20,20)
  
   enemy2 = createSprite(125,125,20,20) 
   enemy3 = createSprite(400,100,20,20)
   enemy4 = createSprite(775,300,20,20)
  
   enemy1.addImage(e1img)
   enemy2.addImage(e2img)
   enemy3.addImage(e3img)
   enemy4.addImage(e4img)
   enemy1.scale = 0.0175
   enemy2.scale = 0.06275
   enemy3.scale = 0.06275
   enemy4.scale = 0.06275
  
  wall1 = createSprite(75,400,10,700)
  wall2 =createSprite(125,0,10,200)
  wall3 = createSprite(175,400,10,200)
  wall4 = createSprite(225,0,10,200)
  wall5 = createSprite(275,400,10,700)
  wall6 = createSprite(325,0,10,200)
  wall7 = createSprite(375,400,10,200)
  wall8 = createSprite(425,400,10,200)
  wall9 =createSprite(475,0,10,200)
  wall10 = createSprite(525,400,10,700)
  wall11= createSprite(575,0,10,200)
  wall12 = createSprite(625,400,10,700)
  wall13 = createSprite(675,0,10,200)
  wall14 = createSprite(725,400,10,700)
  wall1.shapeColor = "blue";
  wall2.shapeColor = "blue";
  wall3.shapeColor = "blue";
  wall4.shapeColor = "blue";
  wall5.shapeColor = "blue";
  wall6.shapeColor = "blue";
  wall7.shapeColor = "blue";
  wall8.shapeColor = "blue";
  wall9.shapeColor = "blue";
  wall10.shapeColor = "blue";
  wall11.shapeColor = "blue";
  wall12.shapeColor = "blue";
  wall13.shapeColor = "blue";
  wall14.shapeColor = "blue";
  
                                                          
                                                               
  side1.visible = false  
  side2.visible = false
  side3.visible = false
  side4.visible = false
  player = createSprite(35,350 , 50, 50);
  player.addImage(pimg)
  player.scale = 0.01  
  
  food = createSprite(775,50,10,10)
  food.addImage(foodimg)
  food.scale = 0.5
}

function draw() {
  background(0);
  
  if(gameState==="start"){
    textSize(10);
    text("Press Space to start",15,25);

  }
  if(keyWentDown("enter")){
gameState = "play"
player.velocityY = -1

  }
  if(gameState==="play"){
enemy1.velocityY = 1.5
enemy2.velocityY = 1.5
enemy3.velocityY = 1.5
enemy4.velocityY = -1.5
  }
  if(player.isTouching(food)){
    gameState ="end"
    enemy1.destroy();
    enemy2.destroy();
    enemy3.destroy();
    enemy4.destroy();
  }
 if(enemy1.isTouching(covering)){
enemy1.x = 125
enemy1.y = 125


 }
 if(enemy2.isTouching(covering)){
  enemy2.x = 325
  enemy2.y = 125
  
  
   }
   if(enemy3.isTouching(covering)){
    enemy3.x = 775
    enemy3.y = 375
    
    
     }
     if(enemy4.isTouching(covering)){
      enemy4.x = 625
      enemy4.y = 125
      
      
       }
       if(enemy1.x>800||enemy1.x<0||enemy1.y>400||enemy1.y<0){
        enemy1.x = 225
        enemy1.y = 125
       
        
         }
         if(enemy4.x>800||enemy4.x<0||enemy4.y>400||enemy4.y<0){
          enemy4.x = 775
          enemy4.y = 375
          

          
           }
           if(enemy3.x>800||enemy3.x<0||enemy3.y>400||enemy3.y<0){
            enemy3.x = 575
            enemy3.y = 100
           
             }
             if(enemy2.x>800||enemy2.x<0||enemy2.y>400||enemy2.y<0){
              enemy2.x = 125
              enemy2.y = 125
               
              
               }
 if(player.isTouching(side1)||player.isTouching(side2)||player.isTouching(side3)||player.isTouching(side4)){
player.x = 400
player.y = 350
player.velocityY = 0
player.velocityX = 0


 }
  
  if(keyWentDown(LEFT_ARROW)){
player.velocityX = -1 
player.velocityY = 0


  }
  if(keyWentDown(UP_ARROW)){
    player.velocityX = 0
    player.velocityY = -1 
    
    
      }
      if(keyWentDown(RIGHT_ARROW)){
        player.velocityX = 1
        player.velocityY = 0 
        
        
          }
          if(keyWentDown(DOWN_ARROW)){
            player.velocityX = 0
            player.velocityY = 1 
           
            
              }
          if(keyWentDown("space")){
            player.velocityX = 0
            player.velocityY = 0 
            
            
              }
         
  createEdgeSprites();
  
  drawSprites();
}