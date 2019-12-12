//Enemies array
let enemiesArray = [];
let enemiesImg = new Image();

class Enemies {
  constructor() {
    this.image = Math.round((Math.random() * 12));
    this.color = "red";
    this.width = 70;
    this.height = 80;
    this.x = Math.floor(Math.random() * (gameBoard.width - this.width));
    this.y = 0;
    this.speedY = 1+ Math.floor(Math.random() * 6); //random speed Y
    // this.speedY = 6;
  }

  //Draw Enemy
  drawEnemies() {
    if (this.image === 1){
      enemiesImg.src = 'pocket-morty.png';
    }
    else if (this.image === 2){
      enemiesImg.src = 'evil-morty.png';
    }
    else if (this.image === 3){
      enemiesImg.src = 'wizard-morty.png';
    }
    else if (this.image === 4){
      enemiesImg.src = 'spooky-morty.png';
    }
    else if (this.image === 5){
      enemiesImg.src = 'punk-morty.png';
    }
    else if (this.image === 6){
      enemiesImg.src = 'renegade-morty.png';
    }
    else if (this.image === 7){
      enemiesImg.src = 'animatronic-morty.png';
    }
    else if (this.image === 8){
      enemiesImg.src = 'spliced-morty.png';
    }
    else if (this.image === 9){
      enemiesImg.src = 'pizza-morty.png';
    }
    else if (this.image === 10){
      enemiesImg.src = 'dracula-morty.png';
    }
    else if (this.image === 11){
      enemiesImg.src = 'ghost-morty.png';
    }
    else if (this.image === 12){
      enemiesImg.src = 'angry-morty.png';
    }
    this.y += this.speedY;
    ctx.drawImage(enemiesImg, this.x, this.y, this.width, this.height);
  }

  //Sides of the enemy
  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.height;
  }
  left() {
    return this.x;
  }
  right() {
    return this.x + this.width;
  }

  crashWith() {
    return !((this.bottom() < bullet.top()) && (this.left() < bullet.right()) && (this.right() > bullet.left()));
}
}

// Creating Random Enemies
//Add new enemy to our enemies array after 4 seconds (our game is running 60 FPS because of request animation frame)
const addNewEnemiesToEnemiesArray = () => {
  if (frames % 120 === 0) {
    enemiesArray.push(new Enemies());
  }
};
// Loop the array and draw a new enemy for each array element
const createNewEnemies = () =>
  enemiesArray.forEach(element => element.drawEnemies());

