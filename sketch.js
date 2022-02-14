let capture;
let posenet;
let noseX,noseY;
let reyeX,reyeY;
let singlePose;

function setup(){

createCanvas(1200,800);
capture = createCapture(VIDEO);
capture.hide();
posenet = ml5.poseNet(capture,modelLoaded);
posenet.on('pose',receivedPoses)


}

function receivedPoses(poses){
   console.log(poses);
   if(poses.length>0){
       singlePose = poses[0].pose;
       noseX = singlePose.nose.x;
       noseY = singlePose.nose.y;
   }

    console.log(noseX+" "+noseY);
}

function modelLoaded(){
    console.log("model has loaded");
}

function draw(){

// background(200);
image(capture,0,0);
fill(255,0,0);
ellipse(noseX,noseY,10);
// ellipse(noseX,noseY,30);
 


}