var walls;
var flowers;
var wolfs;
var flowerCount = 0;
var GameState = 0;
var wolf2;


function preload() {
  wolfImg = loadImage("wolf.removed.png")
  houseImg = loadImage("house.removed.png")
  flower = loadImage("flower-removebg-preview.png")
  girlImg = loadImage("girl-removebg-preview.png")
}



function setup() {
  createCanvas(500, 500)
  walls = new Group()
  flowers = new Group()
  wolfs = new Group()

  reset = createSprite(130,450,50,20)
  reset.visible = false

  wolf = createSprite(430, 70)
  wolf.scale = 0.1
  wolf.velocityX = -4
  wolf.addImage(wolfImg)
  wolfs.add(wolf)


  wolf2 = createSprite(270, 460)
  wolf2.scale = 0.1
  wolf2.velocityX = -4
  wolf2.lifetime = 0;
  wolf2.addImage(wolfImg)
  wolfs.add(wolf2)




  wolf3 = createSprite(50, 200)
  wolf3.scale = 0.1
  wolf3.velocityX = -4
  wolf3.lifetime = 0;
  wolf3.addImage(wolfImg)
  wolfs.add(wolf3)


  house = createSprite(70, 30)
  house.scale = 0.2
  house.addImage(houseImg)

  girl = createSprite(450, 480)
  girl.scale = 0.06;
  girl.addImage(girlImg)

  flower1 = createSprite(450, 250)
  flower1.scale = 0.15
  flower1.addImage(flower)
  flowers.add(flower1)

  flower2 = createSprite(450, 80)
  flower2.scale = 0.15
  flower2.addImage(flower)
  flowers.add(flower2)

  flower3 = createSprite(150, 240)
  flower3.scale = 0.15
  flower3.addImage(flower)
  flowers.add(flower3)

  flower4 = createSprite(295, 410)
  flower4.scale = 0.15
  flower4.addImage(flower)
  flowers.add(flower4)

  flower5 = createSprite(40, 450)
  flower5.scale = 0.15
  flower5.addImage(flower)
  flowers.add(flower5)

  flower6 = createSprite(250, 330)
  flower6.scale = 0.15
  flower6.addImage(flower)
  flowers.add(flower6)


  wall1 = createSprite(5, 250, 20, 500)
  walls.add(wall1)
  wall2 = createSprite(495, 250, 20, 500)
  walls.add(wall2)
  wall3 = createSprite(120, 500, 500, 20)
  walls.add(wall3)
  wall4 = createSprite(330, 5, 500, 20)
  walls.add(wall4)
  wall5 = createSprite(330, 500, 20, 450)
  walls.add(wall5)
  wall6 = createSprite(260, 380, 150, 20)
  walls.add(wall6)
  wall7 = createSprite(180, 495, 20, 80)
  walls.add(wall7)
  wall8 = createSprite(470, 350, 90, 20)
  walls.add(wall8)
  wall9 = createSprite(70, 495, 20, 450)
  walls.add(wall9)
  wall10 = createSprite(140, 280, 150, 20)
  walls.add(wall10)
  wall11 = createSprite(210, 190, 10, 170)
  walls.add(wall11)
  wall12 = createSprite(150, 50, 15, 200)
  walls.add(wall12)
  wall13 = createSprite(390, 150, 200, 20)
  walls.add(wall13)
  wall14 = createSprite(330, 180, 20, 50)
  walls.add(wall14)
  wall15 = createSprite(5, 180, 80, 20)
  walls.add(wall15)
  wall16 = createSprite(360, 350, 50, 20)
  walls.add(wall16)
  wall17 = createSprite(260, 400, 20, 60)
  walls.add(wall17)
  wall18 = createSprite(90, 400, 50, 20)
  walls.add(wall18)
  wall19 = createSprite(20, 330, 20, 20)
  walls.add(wall19)
  wall20 = createSprite(20, 330, 20, 20)
  walls.add(wall20)
  wall21 = createSprite(20, 330, 20, 20)
  walls.add(wall21)
  wall22 = createSprite(20, 480, 20, 20)
  walls.add(wall22)
  wall23 = createSprite(100, 110, 100, 20)
  walls.add(wall23)
  wall24 = createSprite(180, 280, 150, 20)
  walls.add(wall24)
  wall25 = createSprite(350, 200, 60, 20)
  walls.add(wall25)

}





function draw() {
  background(45)
  playerControls()

  console.log(GameState)
  if (GameState == 0) {
    if (girl.collide(flower1)) {
      flowerCount = flowerCount + 1;
      flower1.remove();
    }

    if (girl.collide(flower2)) {
      flowerCount = flowerCount + 1;
      flower2.remove();
    }

    if (girl.collide(flower3)) {
      flowerCount = flowerCount + 1;
      flower3.remove();
    }

    if (girl.collide(flower4)) {
      flowerCount = flowerCount + 1;
      flower4.remove();
    }

    if (girl.collide(flower5)) {
      flowerCount = flowerCount + 1;
      flower5.remove();
    }

    if (girl.collide(flower6)) {
      flowerCount = flowerCount + 1;
      flower6.remove();
    }

    textSize(19)
    text("Flowers:" + flowerCount, 350, 50)

    if (flowerCount == 2) {
      wolf2.lifetime = -1;
      wolf2.visible = true
     console.log(wolf2.velocityX)
    }
    
    if (flowerCount == 4) {
      wolf3.lifetime = -1;
      wolf3.visible = true;
    }
    if (girl.collide(wolfs)) {
      GameState = 1
    }
    if (girl.collide(house)) {
      GameState = 2
    }
    
    if (frameCount >= 50) {
      walls.setVisibleEach(1)
    }

   


    if (wolf2.collide(wall6)) {
      wolf2.velocityX = -4
    }

    if (wolf2.collide(wall7)) {
      wolf2.velocityY = -4
    }


    if (wolf2.collide(wall9)) {
      wolf2.velocityX = 4
    }

    if (wolf2.collide(wall10)) {
      wolf2.velocityX = 4
    }



    if (wolf2.collide(wall18)) {
      wolf2.velocityY = -4
    }

    if (wolf2.collide(wall5)) {
      wolf2.velocityY = -4
    }

    if (wolf2.collide(wall13)) {
      wolf2.velocityX = -4
    }

    if (wolf2.collide(wall11)) {
      wolf2.velocityY = 4
    }
    if (wolf2.collide(wall2)) {
     wolf2.velocityY = 4
    }
    if (wolf2.collide(wall18)) {
      wolf2.velocityY = -4
    }
    if (wolf2.collide(wall24)) {
      wolf2.velocityX = 4
    }
    if (wolf2.collide(wall8)) {
      wolf2.velocityX = -4
    }

    if (wolf2.collide(wall25)) {
      wolf2.velocityX = 4
    }

 



    wolf.bounceOff(house);
    wolf.bounceOff(walls)
    girl.collide(walls)
    wolf.collide(walls);
    wolf2.collide(walls);
    
    wolf3.bounceOff(walls);

    
  }
    drawSprites();
    if(GameState == 2){
      flowers.destroyEach()
      walls.destroyEach()
      wolfs.destroyEach()
      house.remove()
      girl.remove()
      textSize(50)
      reset.visible = true
      text("You Win",150,250)
    }
  

    if (GameState == 1) {
      flowers.destroyEach()
      walls.destroyEach()
      wolfs.destroyEach()
      house.remove()
      girl.remove()
      reset.visible = true
      textSize(50)
      text("GameOver", 150, 250)

      
    }
    if(mousePressedOver(reset)){
      GameState = 0
    }
    
}


  function playerControls() {

    if (keyDown("UP_ARROW")) {
      girl.y = girl.y - 2
    }

    if (keyDown("DOWN_ARROW")) {
      girl.y = girl.y + 2
    }

    if (keyDown("LEFT_ARROW")) {
      girl.x = girl.x - 2
    }

    if (keyDown("RIGHT_ARROW")) {
      girl.x = girl.x + 2
    }

  }


  








