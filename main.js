function setup(){
    c1 = createCanvas(500,500);
    c1.position(800,100);
    v1 = createCapture(VIDEO);
    m = ml5.poseNet(v1, modelLoaded);
    m.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('Model Successfully Loaded.....');
}
nosex = 0;
nosey=0;
r_wristx = 0;
l_wristx = 0;
difference = 0;
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
nosex = results[0].pose.nose.x;
nosey = results[0].pose.nose.y;
console.log('x position of my nose is'+nosex);
console.log('y position of my nose is'+nosey);
r_wristx = results[0].pose.rightWrist.x;
l_wristx = results[0].pose.leftWrist.x;
difference = r_wristx - l_wristx;
console.log('difference ='+ difference)
    }
}

function draw(){
    background('aquamarine');
    fill ('darkmagenta');
    stroke('darkmagenta');
    square(nosex, nosey, difference);


}