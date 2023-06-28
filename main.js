status = "";

function setup(){
    canvas = createCanvas(480,380);
    canvas.center();
}

function draw(){
    image(video,0,0,480,380);
    if(status!=""){  
        objectDetector.detect(video, gotResult);
          for(var i=0; i<objects.length; i++){
          document.getElementById("status").innerHTML = "status: Object Detected";
      fill("#ff0000");
      percent = floor(objects[i].confidence*100);
      text(objects[i].label+" "+percentage+ "%",objects[i].x+15,objects[i].y+15);
      noFill();
      stroke("#ff0000");
      rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);

      if(objects.[i].label == Object_name){
        object_detector.detect(gotResult);
        document.getElementById("object_found").innerHTML= Object_name+"Found";
        var synth = window.SpeechSynthesisUtterance(Object_name+"Found");
        synth.speak(utterThis);
      }
      else{
        document.getElementById("object_found").innerHTML= Object_name+"Not Found";
      }
          }
      }
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("Object_name").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("modelLoaded");
}
