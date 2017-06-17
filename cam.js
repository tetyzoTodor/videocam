var video = document.getElementById("video");
video.addEventListener("touchstart",capteaza) ;
//......................................................

function on_cam_success(stream)
{
video.srcObject = stream;
}

function on_cam_error(err)
{
alert("error" + err.message);
}
//....................................................
var constraints = {audio: true,video: true};

navigator.mediaDevices.getUserMedia(constraints)
.then(on_cam_success)
.catch(on_cam_error);

//................................................
function capteaza()

{
	 var c = document.getElementById("canvas");
	 c.width = video.width;
	 c.height =video.height;
	 
	 var ctx = c.Getcontext("2d");
	 ctx.drawImage(video,0,0,640,480);
	 //...................................................
}	 