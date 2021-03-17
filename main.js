
Webcam.attach('#camera')
camera = document.getElementById("camera")
Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
png_quality:90
});
function snapshot(){
Webcam.snap(function(data_url){
document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_url+'"/>';
});
}