let ang = 0;

function setup(){
  createCanvas(600, 600);
}

function draw(r, g, b){
  loop();
  background(140, 55, 70);
  stroke(r, g, b);
  strokeWeight(2);
  circle(300, 300, 70);
  if (mouseX > 255 && mouseY < 255){
    fill(mouseX - 245, 100, mouseY);
  } else if (mouseY > 255 && mouseX < 255){
    fill(mouseX, 100, mouseY - 245);
  } else if (mouseX > 255  && mouseY > 255){
    fill(mouseX - 245, 100, mouseY - 245);
  } else {
    fill(mouseX, 100, mouseY);
  }
  translate(300, 300);
  branch(50, ang);
  ang += 0.01;
}

function branch(l, ang){
  line(0, 0, 0, -l);
  line(0, height, 0, l);
  line(0, height, 0, -l);
  line(0, 0, height, l);
  line(width, height, 0, -l);
  translate(0, -l);
  //translate(0, l);
  if (l > 4){
    push();
    rotate(ang);
    branch(l * 0.4, ang);
    pop();
    push();
    rotate(-ang);
    branch(l * 0.4, ang);
    pop();
  }
}

function externalDraw(){
  var colorVal = parseInt(document.getElementById("colorPicker").value);
  switch (colorVal){
    case 1:
      draw(200, 0, 50);
      break;
    case 2:
      draw(0, 200, 50);
      break;
    case 3:
      draw(0, 50, 200);
      break;
    default:
      console.log("error");
  }
  noLoop();
}
