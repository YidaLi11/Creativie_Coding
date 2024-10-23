let vid;
let Vscale = 9;
let song;
let count = 0;

function preload(){
  song = loadSound('sound.m4a')
} 

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  rectMode(CENTER);
  vid = createCapture(VIDEO, {flipped:true});
  vid.size(width/Vscale,height/Vscale);
  vid.hide();
}


function draw() {
  background(255);
  noStroke();
  vid.loadPixels();
  for(x=0;x<vid.width;x++){
    for(y=0;y<vid.height;y++){
      
      let index = (x+y*vid.width)*4;
      
      let r = vid.pixels[index];
      let g = vid.pixels[index+1];
      let b = vid.pixels[index+2];
      let bright = (r+g+b)/3
      
      let index2 = ((x-1)+y*vid.width)*4;
      
      let r2 = vid.pixels[index2];
      let g2 = vid.pixels[index2+1];
      let b2 = vid.pixels[index2+2];
      let bright2 = (r2+g2+b2)/3
      
      if (bright<150){
      fill(r,r,r)
      ellipse(x*Vscale,y*Vscale,10,10);
      }
      
      if (bright>150 && bright<200){
      fill(b,r,g)
      ellipse(x*Vscale,y*Vscale,10,10);
      }
      
       if (bright > 200){
      fill(g,b,r)
      ellipse(x*Vscale,y*Vscale,10,10);
      }
      
      if(abs(bright-bright2)>20){
        fill(255)
        ellipse(x*Vscale,y*Vscale,10,10)
      }
      
    }
  }
  
  vid.updatePixels();
  
}

function mousePressed(){
  if(count%2==0){
    song.play();
  }else{
    song.pause();
  }
  count += 1;
}