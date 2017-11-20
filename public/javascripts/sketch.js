// Demonstration of multiple force acting on 
// bodies (Mover class)
// Bodies experience gravity continuously
// Bodies experience fluid resistance when in "water"

// Five moving bodies
var weeks = [];
const canvasX = 640;
const canvasY = 740;
// Liquid
var liquid;

function setup() {
  createCanvas(canvasX, (1668 / 22) * 25);
  calculateWeeks(1668);
}

function draw() {
  background(127);
  fill(0)
  showWeeks();
  // new Week(10, 10).createWeek();
  // rect(10, 10, 20, 10);
  // rect(40, 10, 20, 10);
  // rect(70, 10, 20, 10);
  // rect(100, 10, 20, 10);
  // rect(130, 10, 20, 10);
  // rect(160, 10, 20, 10);
  // rect(190, 10, 20, 10);
  // rect(220, 10, 20, 10);
  // Draw water
  
}


// Restart all the Mover objects randomly
function reset() {
 
}

  
function showWeeks() {
  weeks.forEach((e) => (e.createWeek()));
}  

class Week {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 10;  
  }
  
  createWeek() {
    rect(this.x, this.y, this.width, this.height)
  }

}

function calculateWeeks(length) {
  let x = 10;
  let y = 10;
  const WEEK_CANVAS_SPACE_PX = 30;
  for(let i = 0; i < length; i++) {
    if (i % (width/WEEK_CANVAS_SPACE_PX).toPrecision(2) === 0) {
      y = y + 20;
      x = 10;
    }
    weeks.push(new Week(x,y))
    x = x + 30;
  }
}
