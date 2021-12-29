noseX=0;
noseY=0;
function preload()
{
    nose=loadImage('https://i.postimg.cc/pVDFwxqt/Clown-nose.png');
}
function setup()
{
    canvas=createCanvas(350,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(350,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log("Posenet model initialized");
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x-15;
        noseY=results[0].pose.nose.y-15;
        console.log("Nose x = "+noseX);
        console.log("Nose y = "+noseY);
    }
}
function draw()
{
    image(video,0,0,350,300);
    fill(255,0,0);
    stroke(255,0,0);
    image(nose,noseX,noseY,30,30);
}
function take_snapshot()
{
    save("myImage.png");
}