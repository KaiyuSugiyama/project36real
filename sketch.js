// const Engine = Matter.Engine;
// const World = Matter.World;
// const Bodies = Matter.Bodies;
// var engine, world;

var dog,sadDog,happyDog;
var foodStock;
var addFood;
var feed;
var FoodObj;
var addFoods;
var foodS = 0;
function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  // engine = Engine.create();
  // world = engine.world;
  // Engine.run(engine);
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
  foodObj = new Food(323,32,32,23);

  feed = createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood = createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

}

function draw() {
  background(46,139,87);
  drawSprites();
  foodObj.display();
}

function feedDog() {
  dog.addImage(happyDog);

  
    foodObj.updateFoodStock(foodObj.getFoodStock()-1);
 
}

function addFoods() {
    console.log("1 getFoodStock:" + foodObj.getFoodStock())
    foodObj.updateFoodStock(foodObj.getFoodStock()+1);
    console.log("2 getFoodStock:" + foodObj.getFoodStock())
}
