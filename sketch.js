var bird;  // Declare object

function setup() {
  createCanvas(800, 400);
  // Create object
  bird = new Flappy(50,50);

  obs = new Array(100)
  
  obs.push(new Obstacle(80))

  setInterval( ()=> { obs.push(new Obstacle(random(0,200))) } , 2000  )
}  

function draw() {
  var time = 1;

  handleKey(32, ()=> bird.jump() )

  background("grey");

  bird.move();
  bird.display();
  
  obs.forEach( x => { x. move(); x.display()} )
}

function handleKey(key, run) {
    if(keyIsPressed === true)
        if (keyCode === key)
            run()
 }

// Jitter class
function Flappy(xpos, ypos) {
  this.x = xpos;
  this.y = ypos;
  this.diameter = random(10, 30);
  this.speed_x = 0;
  this.speed_y = -30;
  this.acceleration_y = 15
  this.time = 0.1;

  this.move = function() {
    old_pos = this.y
    old_speed = this.speed_y
    acceleration_y = this.acceleration_y
    time = this.time
    
    this.speed_y = old_speed + acceleration_y * time
    this.y = old_pos + old_speed*time + acceleration_y*time/2
  
  };

  this.jump = function () {
      this.speed_y = -40
  }

  this.display = function() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}

// Jitter class
function Obstacle(gap_location) {
  this.gap_location = gap_location
  this.location = 800
  this.width = 50

  this.move = function() {
    this.location = this.location - 2;
  };
  
  this.display = function() {
    fill('white')
    stroke('none')
    rect(this.location, 0, this.width, this.gap_location);
    rect(this.location, this.gap_location+150, this.width, 200);
  };
}

// rect (x , y  ,width, height)