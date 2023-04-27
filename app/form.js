function formClose()
{
	document.getElementById("orderForm").style.display = "none";
	document.getElementById("formRequest").style.display = "none";
	document.getElementById("formRequestButton").style.display = "none";

	document.getElementById("formRequest").innerHTML = '';
	document.getElementById("formButton").style.display = "block";
	document.getElementById("formContainer").style.display = "block";
}


function formOpen()
{

let renderWidthLast = document.getElementById("renderCanvas").style.width;
let renderHeightLast = document.getElementById("renderCanvas").style.height;
let renderCanvasWidthLast = document.getElementById("renderCanvas").width;
let renderCanvasHeightLast = document.getElementById("renderCanvas").height;


let renderWidth = 800;
let renderHeight = 400;


var camera2 = new BABYLON.FreeCamera("camera2", new BABYLON.Vector3(0, 2, -15), window.scene);
camera2.setTarget(BABYLON.Vector3.Zero());

document.getElementById("renderCanvas").style.width = renderWidth + "px";
document.getElementById("renderCanvas").style.height = renderHeight + "px";
document.getElementById("renderCanvas").width = renderWidth;
document.getElementById("renderCanvas").height = renderHeight;


window.engine.resize();


console.log(1111);

BABYLON.Tools.CreateScreenshot(engine, camera2, {width:renderWidth, height:renderHeight}, function (data) {
console.log(data);

document.getElementById("screenShot").src = data;
document.getElementById("orderForm").style.display = "block";
document.getElementById("formRequest").style.display = "none";
document.getElementById("formRequest").innerHTML = '';
document.getElementById("formButton").style.display = "block";


document.getElementById("renderCanvas").style.width = '';
document.getElementById("renderCanvas").style.height = '';
document.getElementById("renderCanvas").width = renderCanvasWidthLast;
document.getElementById("renderCanvas").height = renderCanvasHeightLast;


//let dataURL = data.toDataURL("image/png");
//dataURL.replace(/^data:image\/(png|jpg);base64,/, "");

let fileInput  = document.getElementById("formScreenshot");
fileInput.value = data;





});








}


function formSend()
{
document.getElementById("formButton").style.display = "none";

let post = {
	"element": "barium",
	"formScreenshot": document.getElementById("formScreenshot").value,
	"formEmail" : document.getElementById("formEmail").value,
	"formEmailAdmin": document.getElementById("formEmailAdmin").value,
	"formAddress": document.getElementById("formAddress").value,
	"formNameFirst":document.getElementById("formNameFirst").value,
	"formNameLast": document.getElementById("formNameLast").value,
	"configuration": window.appUIState['linkAdmin'],
	"pdf1": document.getElementById("item_vertical_beam_fundament").innerHTML,
	"pdf2": document.getElementById("item_vertical_beam").innerHTML,
	"pdf3": document.getElementById("item_ringbalk").innerHTML,
	"pdf4": document.getElementById("liggersmm").innerHTML,
	"pdf5": document.getElementById("price").innerHTML


	};

fetch("/backend/app.php", {
  method: "POST",
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify(post)
}).then((response) => response.text()).then((text) => {



formOpenRequest(text);





// fetch('/backend/app.php', {
    // method: 'POST',
    // headers: {
        // 'Accept': 'application/json',
        // 'Content-Type': 'application/json'
    // },
    // body: JSON.stringify({ "id": 78912 })
// })
// .then(response => response.json())
// .then(response => console.log(JSON.stringify(response)))






}

);



//BABYLON.ScreenshotTools.CreateScreenshotWithResizeAsync(engine, camera2, 800, 400).then(function(data) {});
















}

function formOpenRequest(text)
{
document.getElementById("formContainer").style.display = "none";
document.getElementById("formRequest").style.display = "block";
document.getElementById("formRequestButton").style.display = "block";
document.getElementById("formRequest").innerHTML = text;


}

     function urltoFile(url, filename, mimeType){
        return (fetch(url)
            .then(function(res){return res.arrayBuffer();})
            .then(function(buf){return new File([buf], filename,{type:mimeType});})
        );
    }
