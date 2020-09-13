var wood, Wood_image, Steve, Steve_image,edges,Zombie,Zombie_group,Zombie_image;
var gameState, play, end;
var BG, BG_image;
var Spider,Spider_image;
var Ded, Ded_image;

function preload(){
    Wood_image = loadImage("Wood.png");
    Steve_image = loadImage("Steve.png");
    Zombie_image = loadImage("Zombie.png");
    BG_image = loadImage("BG.png");
    Spider_image = loadImage("Spider.png");
    Ded_image = loadImage("Ded.png");
}

function setup(){
    createCanvas(1200,570);

    BG = createSprite(600,285);
    BG.addImage(BG_image,"BG.png");
    BG.scale = 3;

    wood = createSprite(200,200);
    wood.addImage(Wood_image,"Wood.png");

    Steve = createSprite(300,200);
    Steve.addImage(Steve_image,"Steve.png");
    Steve.scale = 0.5;

    Zombie = createSprite(1200,285);
        Zombie.addImage(Zombie_image,"Zombie.png");
        Zombie.y = random(100,500);
        Zombie.velocityX = random(-10,-4);
        Zombie.scale = 0.5;

        Spider = createSprite(1200,285);
        Spider.addImage(Spider_image,"Spider.png");
        Spider.y = random(100,500);
        Spider.velocityX = random(-12,-5);
        Spider.scale = 0.3;

        Ded = createSprite(600,285);
        Ded.addImage(Ded_image,"Ded.png");
        Ded.scale = 4;
        Ded.visible = false;

    play = 1;
    end = 0;
    gameState = play;
    

    edges = createEdgeSprites();
}

function draw(){
    background(360);

    if(keyDown("up")){
  Steve.y = Steve.y-5;
    }

    if(keyDown("down")){
        Steve.y = Steve.y+5;
    }

    if(keyDown("left")){
        Steve.x = Steve.x-5;
    }

    if(keyDown("right")){
        Steve.x = Steve.x+5;
    }

    if(Zombie.isTouching(Steve)){
        Zombie.x = 1200;
        Zombie.y = random(100,500);
    }

    if(Spider.isTouching(Steve)){
        Spider.x = 1200;
        Spider.y = random(100,500);
    }

    if(Zombie.x < 0 || Spider.x < 0){
        Zombie.destroy();
        Spider.destroy();
        Steve.destroy();
        BG.destroy();
        wood.destroy();
        Ded.visible = true;
    }

    Steve.collide(edges);

    drawSprites();
}

