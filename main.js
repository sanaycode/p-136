objects = [];
status = "";
object_wanted="";
function start(){
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
    object_wanted=document.getElementById("object_input").value;
}
function modelLoaded(){
    console.log("Model Loaded!");
    status="true";
}
function setup(){
    canvas = createCanvas(380, 380);
    canvas.position(580, 350);
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}
function draw(){
    image(video, 0, 0, 380, 380);
}