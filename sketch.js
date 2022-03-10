var backgroundimg,BOMBimg,Bulletsimg,Playersimg,Youimg, Zombiesimg 
var background, player, BOMB, Zombies, Enemy
function preload(){
backgroundimg=loadImage("Background.png")
BOMBimg=loadImage("BOMB.jpg")
Bulletsimg=loadImage("Bullets.png")
Playersimg=loadImage("Players.jpg")
Youimg=loadImage("You.jpg")
Zombiesimg=loadImage("Zombies.jpg")
} 
 function setup(){
     createCanvas(600,600)
     background=createSprite(0,0,600,600)
     background.addImage(backgroundimg)
     player=createSprite(400,200,20,50)
     player.addImage("Playersimg")
     BOMB= new Group()
     Zombies= new Group()
     EnemyG= new Group()
     
 }
 function draw(){
     background.velocityX=-3
     if(background.x<0){
         background.x=background.width  
     }
     player.y=World.mouseY
     if (keyDown("space")) { createBullet(); }
     drawSprites()
 }
 function createBullet(){
     var bullet=createSprite(100,100,60,10)
     bullet.addImage(Bulletsimg)
     bullet.x=360
     bullet.y=player.y
     bullet.velocityX=-4
     bullet.lifetime=100
     bullet.scale=0.3
 }
 function enemy(){
     var EnemyS= createSprite(0,Math.round(random(20, 370)), 10, 10);
     EnemyS.addImage(Playersimg)
     EnemyS.scale=0.3 
     EnemyS.lifetime=150
     EnemyS.velocityX=3
 }
 function BOMBS(){
     var BOMBV= createSprite(0,Math.round(random(20, 370)), 10, 10)
     BOMBV.addImage(BOMB)
     BOMBV.scale=0.3
     BOMBV.lifetime=150
     BOMBV.velocityX=3
 }
 function Zombies(){
     var Zomby= createSprite(0,Math.round(random(20, 370)), 10, 10)
     Zomby.addImage(Zomby)
     Zomby.scale=0.3
     Zomby.lifetime=150
     Zomby.velocityX=3
 }