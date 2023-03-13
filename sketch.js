var rato;
var ratoImg;
var ratoGroup;
var back;
var cozinheiro;
var cozinheiroImg;
var tomate;
var tomateImg;
var cozinheiro2; 
var cozinheiro2Img;
var ratoSujo;

function preload(){
  
ratoImg = loadImage("assets/rato.png");
back = loadImage("assets/back.png");
cozinheiroImg = loadImage("assets/cozinheiro.png");
tomateImg = loadImage("assets/tomate.png");
cozinheiro2Img = loadAnimation("assets/cozinheiro2.png","assets/cozinheiro3.png", "assets/cozinheiro4.png", "assets/cozinheiro5.png");
ratoSujo = loadImage("assets/ratoSujo.png");
}

function setup() {

  
  createCanvas(600,400);

  cozinheiro = createSprite(150,300);
  cozinheiro.addImage(cozinheiroImg);

  cozinheiro2 =  createSprite(150,300);
  cozinheiro2.addAnimation("cook", cozinheiro2Img);
  cozinheiro2.visible = false;

  cozinheiro2.scale = 3.5;
  cozinheiro.scale = 3.5;

  //tomate = createSprite(200,300);
  //tomate.addImage(tomateImg);
  //tomate.scale = 3.5;

  ratoGroup = new Group();
}

function draw() {
  background(back); 

if(keyDown(RIGHT)){

cozinheiro.x += 2;
}

if(keyDown(LEFT)){

cozinheiro.x -= 2;
}

if(keyDown(UP_ARROW)){

  cozinheiro.y -= 2;
  }

  if(keyDown(DOWN_ARROW)){

    cozinheiro.y += 2;
    }

/*if(keyWentDown("space")){

cozinheiro2.changeAnimation("cook", cozinheiro2Img);
cozinheiro2.visible =  true;
}
else if(keyWentUp("space")){

  cozinheiro.addImage(cozinheiroImg);
}*/

if(ratoGroup.isTouching(cozinheiro)){

  cozinheiro2.changeAnimation("cook", cozinheiro2Img);
  rato.changeImage(ratoSujo);
}

criarRatos();

drawSprites();

}

function criarRatos(){

  if(frameCount % 100 === 0){

  rato = createSprite(Math.round(random(200,550)), 450, 10, 10);
  rato.addImage(ratoImg);
  rato.changeImage(ratoSujo);
  rato.scale = 2.5;
  rato.velocityX = -1;
  ratoGroup.add(rato);
}
}