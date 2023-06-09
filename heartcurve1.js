const heart = [];
let a = 0;
let selectedDrawFunction;
let showHeart = false; // Variable to track if the heart should be displayed
let showButton = false; // Variable to track if the button should be displayed
let button;


const equationDrawPairs = [
  { equation: "Mirano's? Can we get pizza and ....", solution: "garlic knots", drawFunction: draw1 },
  { equation: "Hey we should _ _ _ _ _ there", solution: "throw", drawFunction: draw1 },
  { equation: "Baby Bug _ _ _", solution: "Boo", drawFunction: draw1 },
  { equation: "Beautiful, _ _ _ _ _ _ _ _ _, Belong to me", solution: "brilliant", drawFunction: draw1 },
  { equation: " _ _ _ _ walk", solution: "plug", drawFunction: draw1 },
  { equation: " Our sloth son's name?", solution: "larry", drawFunction: draw1 },

  { equation: "What did u say to me before you fist kissed me? I’m going to _ _ _ _ _ _ _ _ _ _ you", solution: "bodypillow", drawFunction: draw2 },
  { equation: "How many cats do I have", solution: "4", drawFunction: draw2 },
  { equation: "What did we play when we first met ", solution: "pong", drawFunction: draw2 },
  { equation: "_ _ _ _ _ enius", solution: "shord", drawFunction: draw2 },
  { equation: "What’s my highschool called ", solution: "mayo", drawFunction: draw2 },
  { equation: "What is the name of the restaurant we went to in madrid ", solution: "amazonico", drawFunction: draw2 },
  

  { equation: "Exactly how many days older am I to you", solution: "137", drawFunction: draw1 },
  { equation: "What’s my favorite video game", solution: "tekken", drawFunction: draw2 },
  { equation: "Best bar in downtown providence?", solution: "blake's", drawFunction: draw2 },
  { equation: "What's my favorite drug", solution: "weed", drawFunction: draw4 },
  { equation: "Which animal do i say you look like when our faces are really close", solution: "fish", drawFunction: draw1 },
  { equation: "130 E ______nd st", solution: "62" , drawFunction: draw4 },

  { equation: "What color do i look best in ", solution: "white", drawFunction: draw4 },
  { equation: "What part of your face is most kissable", solution: "nose", drawFunction: draw4 },
  { equation: "What’s my favorite position", solution: "missionary", drawFunction: draw4 },
  { equation: "How many tattoos do i have", solution: "2", drawFunction: draw4 },
  { equation: " _ _ _ _ _ _ _ _ _ tea house", solution: "pakistani", drawFunction: draw4 },
  { equation: "Short term stay with ALL the amenities", solution: "sonder", drawFunction: draw4 },
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  button = createButton('Click for a SURPRISE');
  button.position(20, 20); // Adjust the button position as needed
  button.style('background-color', '#F063A4');
  button.style('border', 'none');
  button.style('font-size', '16px');
  button.mousePressed(showMessage);
  
  // Select a random equation and its associated draw function
  const randomPair = random(equationDrawPairs);
  const equation = randomPair.equation;
  const solution = randomPair.solution;
  selectedDrawFunction = randomPair.drawFunction;

  // Prompt the user to solve the equation
  const userSolution = prompt(`Answer the question or Fill in the blanks: ${equation}  ?`);
  if (userSolution.toLowerCase() == solution.toLowerCase()) {
    showHeart = true; // Display the heart if the solution is correct
    showButton = true; 
  }


  
}




function draw() {
  if (showHeart) {
    selectedDrawFunction();

  } else {
    // Display a message to the user
    background(0);
    fill(255);
    textSize(24);
    textAlign(CENTER, CENTER);
    text("Try again!", width / 2, height / 2);

    button.hide();
  }
}

function showMessage() {
  window.location.href = 'love.html';
}


function draw1() {
  background(0);
  translate(width / 2, height / 2);

  // Draw heart shape
  stroke(255);
  strokeWeight(2);
  fill(150, 0, 100);
  beginShape();
  for (let v of heart) {
    vertex(v.x, v.y);
  }
  endShape();

  const r = height / 40;
  const x = r * 16 * pow(sin(a), 3);
  const y = -r * (13 * cos(a) - 5 * cos(2 * a) - 2 * cos(3 * a) - cos(4 * a));
  heart.push(createVector(x, y));

  // Draw pink box with white border and text
  const boxWidth = 280;
  const boxHeight = 80;
  const boxX = -boxWidth / 2;
  const boxY = 50;

  stroke(255);
  strokeWeight(2);
  fill('#F063A4');
  rect(boxX, boxY, boxWidth, boxHeight);

  noStroke();
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(12);
  const textX = boxX + boxWidth / 2;
  const textY = boxY + boxHeight / 2;
  const equationText = "Generated by the equations:\n" +
    "r = height/40\n" +
    "x = r * 16 * pow(sin(a), 3)\n" +
    "y = -r*(13 * cos(a) - 5*cos(2*a) - 2*cos(3*a)- cos(4*a))";
  text(equationText, textX, textY);

  // So that it stops
  if (a > TWO_PI) {
    noLoop();
  }

  a += 0.1;
}


function draw2() {
  //hc2
  background(0);
  translate(width/2, height/2);
  
    noStroke(255);
  strokeWeight(2);
  scale(-1);
  fill('#F063A4');
  rotate(-PI/18);
  beginShape();
  for (let v of heart) {
    vertex(v.x, v.y);
  }
  endShape();
  rotate(PI/9);
  beginShape();
  for (let v of heart) {
    vertex(-v.x, v.y);
  }
  endShape();

  
 
  if (a > PI/3) // added this constraint to eliminate weird tail at bottom of curve
  {const r = 40 * (1-abs(a))*(1+2*abs(a)) ;
  const x = r* cos(a/2)*sin(a);
  const y = -r* sin(a);
  heart.push(createVector(x, y));}
  
  const boxWidth = 280;
  const boxHeight = 80;
  const boxX = -boxWidth / 2;
  const boxY = 50;
  scale(-1);
  rotate(-PI/18)
  stroke(255);
  strokeWeight(2);
  fill('#F063A4');
  rect(boxX, boxY, boxWidth, boxHeight);

 
  noStroke();
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(12);
  
  const textX = boxX + boxWidth / 2;
  const textY = boxY + boxHeight / 2;
  const equationText = "Generated by the equations:\n" +
    "r = 40 * (1-abs(a))*(1+2*abs(a))\n" +
    "x = r * cos(a/2)*sin(a)\n" +
    "y = -r* sin(a)";
  
  text(equationText, textX, textY);
 

  // So that it stops
  if (a > PI) {
    noLoop();
  }
  a += 0.01;

  
  }





function draw4() {
  background(237, 34, 93);
  translate(width / 2, height / 2);

  beginShape();
  for (let v of heart) {
    vertex(v.x, v.y);
  }
  endShape();

  r = 15;
  x =  1.2 * r * pow(sin(a), 3);
  y = -1.5 * (13 * cos(a) - 5 * 2 * cos(2 * a) - cos(3 * a) - cos(4 * a));
  heart.push(createVector(x, y));

  
  if (a > TWO_PI) {
    noLoop();
  }
  a += 0.01;
  const boxWidth = 500;
  const boxHeight = 100;
  const boxX = -boxWidth / 2;
  const boxY = height / 2 - boxHeight;
  
  noStroke();
  fill(255);
  rect(boxX, boxY, boxWidth, boxHeight);

    fill(0);
  textAlign(CENTER, CENTER);
  textSize(12);
  const textX = boxX + boxWidth / 2;
  const textY = boxY + boxHeight / 2;
  const equationText = "Generated by the equations:\n" +
    "r = 15\n" +
    "x = 1.2 * r * pow(sin(a), 3)\n" +
    "y = -1.5 * (13 * cos(a) - 5 * 2 * cos(2 * a) - cos(3 * a) - cos(4 * a))";

  text(equationText, textX, textY);
  
}
