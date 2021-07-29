//let mobilenet;
let video;
//let label = '';
//var label_info;
/*
// when model is ready make predictions
function modelReady() {
    console.log('Model is ready!!!');
    mobilenet.predict(gotResults);
}

function gotResults(error, results) {
	if (error) {
        console.error(error);
    } else {
        label = results[0].className;
        // loop the inference by calling itself
        mobilenet.predict(gotResults);
		//extra information about each object class
        if (label == "acoustic guitar") {
           label_info = "An acoustic guitar is a musical instrument in the guitar family, \n through the air. Originally just called a guitar.";
        }
		else {
			label_info = "discription is unavailable"
		}
    }
}

const speech = new SpeechSynthesisUtterance();
speech.volume = 1;
speech.rate = 1.15;
speech.pitch = 10;


(function() {
	var f = function(){
//		console.log(label);
		speech.text = label;
		speechSynthesis.speak(speech);
		
	};
	window.setInterval(f, 500);
	f();
	var t = function(){
//		console.log(label);
		speech.text = label_info;
		speechSynthesis.speak(speech);
		
	};
	window.setInterval(t, 520);
	t();
})();
*/

// setup function
function setup() {
    createCanvas(640, 500);
    // ml5 to create video capture
    var constraints = {
		audio: false,
		video: {
			facingMode: "environment"
		}
	};
	video = createCapture(constraints);
    video.hide();
    background(100);
    // load the MobileNet and apply it on video feed
    //mobilenet = ml5.imageClassifier('MobileNet', video, modelReady);
}


function draw() {
    background(38,134,198);
    // show video 
    image(video, 10, 10, 620, 480);
    fill(255);
    //textSize(25);
    // show prediction label 
    //text(label, 10, height - 200);
    //textSize(18);
	//text("Info :", 10, height - 170),text(label_info, 65, height - 170);
}
