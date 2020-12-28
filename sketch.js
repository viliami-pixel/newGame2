var knight,knightImg,inviGround;
var PLAY=1,END=0,WIN= 2,gameState=PLAY;
var bg,bgimg;
var coinsGroup,coinImg,coinCount=0;
var enemeyGroup, enemyImg1,enemyImg2,enemyImg3,enemyImg4;
var sound;
function preload(){

knightImg=loadAnimation("k1.png","k2.png","k3.png","k4.png","k5.png","k6.png","k7.png","k8.png","k9.png","k10.png","k11.png");
bgimg= loadImage("bg.jpg");
enemyImg1=loadImage("enemy1.png");
enemyImg2 =loadImage("enemy2.png");
enemyImg3=loadImage("enemy3.png");
coinImg=loadImage("gold coin.png");
 sound=loadSound("sound.mp3");
 
}

function setup(){
createCanvas(600,250);

bg=createSprite(300,100,900,200);
bg.addImage(bgimg);
bg.scale=1
bg.velocityX=-4;

knight= createSprite(150,150,20,60);
knight.addAnimation("knight",knightImg);
knight.debug=true;
knight.setCollider("rectangle",0,0,40,40);
inviGround=createSprite(150,240,100,5);
inviGround.visible=false;

enemyGroup = new Group();
coinsGroup = new Group();

}
function draw(){

    background(0);
    sound.play();
if(gameState===PLAY) {
   if(bg.x<100){
        bg.x=bg.width/2;
    }

    if(keyDown("space")) {
        knight.velocityY=-12;
    }
    knight.velocityY +=0.8;

    knight.collide(inviGround);
    spawnAlien();
    spawnCoin();
    if(knight.isTouching(coinsGroup)) {
        coinCount+=1;
        coinsGroup.destroyEach();
    } 
    if(knight.isTouching(enemyGroup)) {
        gameState=END;
    }

    if(coinCount>=5){
        gameState=WIN;
    }
    drawSprites();

} else if(gameState===END){
    enemyGroup.destroyEach();
    coinsGroup.destroyEach();
    bg.destroy();
    knight.destroy();
    textSize(34);
    fill("red");
    stroke("white");
    strokeWeight(1);
    text("GAME OVER",170,120);
    }
    else if(gameState===WIN){
    enemyGroup.destroyEach();
    coinsGroup.destroyEach();
    knight.destroy();
    bg.destroy();
    textSize(34);
    fill("red");
    stroke("white");
    strokeWeight(1);
    text("YOU WON!",180,80);
    textSize(12);
    text("You have enough Gold, this X-Mas",180,120);
    textSize(40);
    text("Merry X-Mas",150,180);
    }
    
    drawSprites();
    drawSprites();
    drawSprites();
    drawSprites();
    drawSprites();
    drawSprites();
    drawSprites();
    drawSprites();
    drawSprites();
    drawSprites();
    drawSprites();
    drawSprites();
    drawSprites();
    drawSprites();
    drawSprites();
    drawSprites();
    drawSprites();
    drawSprites();
    drawSprites();
    drawSprites();
    drawSprites();
    drawSprites();
    drawSprites();
    drawSprites();
    drawSprites();
}

function spawnAlien () {
 
    if(frameCount%200===0) { 
     alien=createSprite(600,Math.round(random(100,300)),20,20);

     var rand= Math.round(random(1,3));
         switch(rand){

            case 1 : alien.addImage(enemyImg1);
                     break;
            case 2 : alien.addImage(enemyImg2);
                     break;
            case 3 : alien.addImage(enemyImg3);
                     break;
         }
     
    alien.velocityX=-2;
    alien.lifetime=300;
    alien.scale=0.2;
   enemyGroup.add(alien);
    }  
   }

   function spawnCoin () {
 
    if(frameCount%120===0) { 
     coin=createSprite(600,Math.round(random(100,300)),20,20);
     coin.addImage(coinImg); 
    coin.velocityX=-8;
    coin.lifetime=300;
    coin.scale=0.1;
   coinsGroup.add(coin);
    }  
   }