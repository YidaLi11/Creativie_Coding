let circs =[];

class circ{
  constructor(x,y){
    this.loc=createVector(x,y);
    this.vec=createVector(random(-5,5),random(-5,5));
    this.size=random(40,70);
    this.col=[random(255),random(255),random(255)];
    this.size2=random(10,25);
    this.col2=[random(255),random(255),random(255)];
  }
  
  move(){
    this.loc.add(this.vec);
    this.loc.x = lerp(this.loc.x,mouseX,0.015);
    this.loc.y = lerp(this.loc.y,mouseY,0.015);
  
    this.vec.x *= 0.992;
    this.vec.y *= 0.992;
    
  }
  display(){
    noStroke();
    fill(this.col);
    ellipse(this.loc.x,this.loc.y,this.size);
    fill(this.col2);
    ellipse(this.loc.x,this.loc.y,this.size2);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(245, 222, 179,50);
   for(const circ of circs){
   circ.move();
   circ.display();
 }
   if(frameCount%25 ==0){
  circs.push(new circ(random(windowWidth),random(windowHeight)));
    circs[circ];
  
}
}

function mouseDragged(){
  if(frameCount%5 ==0){
  circs.push(new circ(mouseX,mouseY));
    circs[circ];
  }
}