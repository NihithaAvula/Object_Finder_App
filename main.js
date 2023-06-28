status = "";

function setup(){
    canvas = createCanvas(480,380);
    canvas.center();
}

function draw(){
    image(video,0,0,480,380);
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("Object_name").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("modelLoaded");
}
