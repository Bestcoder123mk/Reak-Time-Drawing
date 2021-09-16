noseX=0;
noseY=0;
leftwristX=0;
rightwristX=0;
difference=0;
function draw(){
    background("#FFFF00");
    fill("#00FFFF");
    stroke("#f1e740")
    square(noseX,noseY,difference);
    document.getElementById("square_side").innerHTML="Width and height of the square wil be "+difference+"PX";
}
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500);
    canvas.position(560,150);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotPoses);
}
function modelLoaded(){
    console.log("PoseNet Initialised");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("Nose X ="+noseX+" Nose Y ="+noseY);
        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        console.log("Left Wrist X ="+leftwristX+"Right Wrist X ="+rightwristX);
        difference=floor(leftwristX-rightwristX);
    }
}
