
function setup (){

    createCanvas(windowWidth,windowHeight);
    background(0,0,255);
}



function draw () { 
   //background(255,0,0);
   translate (width/2,height/2);

   const x = sin(frameCount * 0.06)  * width * 0.4
   const y = cos(frameCount * 0.06)  * height * 0.4
   const d = min(width,height) *0.2;

noStroke()

//const r= map(sin(frameCount*0.051), -1,1,0,255)
//const g= map(sin(frameCount*0.059), -1,1,0,255)
//const b= map(sin(frameCount*0.049), -1,1,0,255)
//const r= random
//const g= map(sin(frameCount*0.053), -1,1,0,255)
//const b= map(sin(frameCount*0.053), -1,1,0,255)



//fill(r,g,b)

fill(50*(frameCount%8))

   ellipse(x ,y ,d);


}


function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}

