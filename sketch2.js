let Fish = [];
let bubbles = [];

class fish {
  constructor(x,y){
    this.body=random(40,70)
    this.body2=random(20,35)
    this.eye=random(10,15)
    this.tail=random(20,30)
    this.loc=createVector(x,y)
    this.vec=createVector(random(1,10),0)
    this.col1=[random(255),random(255),random(255)]
    this.col2=[random(255),random(255),random(255)]
    this.col3=[random(255),random(255),random(255)]
  }
  display(){
    push()
    fill(this.col1)
    ellipse(this.loc.x-this.body/2,this.loc.y,this.tail)
    fill(this.col2)
    ellipse(this.loc.x,this.loc.y,this.body,this.body2)
    fill(this.col3)
    ellipse(this.loc.x+this.body/5,this.loc.y,this.eye)
    pop()
  }
  
  move(){
    this.loc.add(this.vec)
  }
}

class bubble {
  
  constructor(x,y){
    this.size = random(20,40)
    this.Loc=createVector(x,y)
    this.vel=createVector(random(-5,5),random(-10,-2))
  }
  
  display(){
    push()
    stroke(255)
    fill([255,255,255,90])
    ellipse(this.Loc.x,this.Loc.y,this.size)
    pop()
  }
  
  move(){
    this.Loc.add(this.vel)
  }
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0,100,250);
  for(const fish of Fish){
   fish.move();
   fish.display();
 }
    for(const bubble of bubbles){
   bubble.move();
   bubble.display();
 }
  
  if(frameCount%2==0){
     Fish.push(new fish(-50,random(height)));
  }
}

function mouseDragged(){
  bubbles.push(new bubble(mouseX,mouseY));
}