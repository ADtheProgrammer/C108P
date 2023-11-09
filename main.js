var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start() {
    recognition.start();
}


camera = document.getElementById("camera");
Webcam.set({
    width: 500,
    height: 400,
    image_format: 'jpeg',
    jpeg_quality: 90
});



function speak() {


    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    setTimeout()

}

setTimeout(function () {
    var Img_id = "selfie1";
    take_snapshot();
    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

}, 5000);

function take_snapshot()
{
    console.log(img_id);
    Webcam.snap(function (data_uri) {
        if (Img_id == "selfiel") {
            document.getElementById("result").innerHTML = '<img id="selfiel" src="'+data_uri+'"/>';
        }
        if (img_id == "selfie2") {
            document.getElementById("result").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>';
        }
        if (img_id == "selfie3") {
            document.getElementById("result").innerHTML = '<img id="selfie3" src="'+data_uri+'"/>';
        }
    });
}
