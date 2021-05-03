
var dog;
var happyDog;
var database;
var foodS=0;
var foodStock;
var assign;

function preload()
{
  dogImage=loadImage("dogImg.png");
  happyDog=loadImage("dogImg1.png");
}

function setup() {
  createCanvas(500,500);
  database=firebase.database();
  dog=createSprite(200,150,20,20);
  dog.addImage(dogImage);
  foodStock=database.ref("food");
  foodStock.on("value",function(data){
    assign=data.val();
  });
  
}


function draw() { 
  background(46,139,87) ;

  if(keyWentDown(UP_ARROW))
  {
    foodS=foodS+2;
    writeStock(foodS);
    dog.addImage(happyDog);
  }

  drawSprites();
  

}

function writeStock(data)
{
  database.ref("/").set({
    food:data,

  })
}





