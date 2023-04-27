function setAppStateValue(id, value)
{
window.appState[id] = value;
sceneUpdate();
}


function uiClickDoorType(id)
{
let total = 2;

}


function uiClickDoorMaterial(id)
{
let total = 2;

}


function linkCreate()
{
let obj={};
obj = window.appState;
console.log (window.appState);




let encoded = btoa(JSON.stringify(obj));
//let linkPrefix = "https://freedompix.github.io/3dbuilder_v3/#"
//let linkPrefixAdmin = "https://freedompix.github.io/3dbuilder_v3/admin.html#"

let linkPrefix = "";
let linkPrefixAdmin = "";
//let linkPrefixAdmin = "https://3dvisualcode.github.io/CanopyWebDemo/admin.html#"




window.appUIState['linkAdmin'] = linkPrefixAdmin + encoded;
//document.getElementById('shareLink').value = location.host + "#" + encoded;
document.getElementById('shareLink').value = linkPrefix + encoded;

console.log (window.appUIState['linkAdmin']);

}


function linkParse()
{
  if(window.appConfig){
  let hash =  window.appConfig;
//test
//hash  = 'eyIwIjp7Im9yaWVudGF0aW9uIjowLCJ3YWxsIjpmYWxzZSwicGxhY2UiOlswLDAsMF19LCIxIjp7Im9yaWVudGF0aW9uIjowLCJ3YWxsIjpmYWxzZSwicGxhY2UiOlswLDAsMF19LCIyIjp7Im9yaWVudGF0aW9uIjowLCJ3YWxsIjpmYWxzZSwicGxhY2UiOlswLDAsMF19LCIzIjp7Im9yaWVudGF0aW9uIjowLCJ3YWxsIjpmYWxzZSwicGxhY2UiOlswLDAsMF19LCI0Ijp7Im9yaWVudGF0aW9uIjowLCJ3YWxsIjpmYWxzZSwicGxhY2UiOlswLDAsMF19LCI1Ijp7Im9yaWVudGF0aW9uIjowLCJ3YWxsIjpmYWxzZSwicGxhY2UiOlswLDAsMF19LCI2Ijp7Im9yaWVudGF0aW9uIjowLCJ3YWxsIjpmYWxzZSwicGxhY2UiOlswLDAsMF19LCI3Ijp7Im9yaWVudGF0aW9uIjowLCJ3YWxsIjpmYWxzZSwicGxhY2UiOlswLDAsMF19LCI4Ijp7Im9yaWVudGF0aW9uIjowLCJ3YWxsIjpmYWxzZSwicGxhY2UiOlswLDAsMF19LCI5Ijp7Im9yaWVudGF0aW9uIjowLCJ3YWxsIjpmYWxzZSwicGxhY2UiOlswLDAsMF19LCIxMCI6eyJvcmllbnRhdGlvbiI6MCwid2FsbCI6ZmFsc2UsInBsYWNlIjpbMCwwLDBdfSwiMTEiOnsib3JpZW50YXRpb24iOjAsIndhbGwiOmZhbHNlLCJwbGFjZSI6WzAsMCwwXX0sIjEyIjp7Im9yaWVudGF0aW9uIjowLCJ3YWxsIjpmYWxzZSwicGxhY2UiOlswLDAsMF19LCIxMyI6eyJvcmllbnRhdGlvbiI6MCwid2FsbCI6ZmFsc2UsInBsYWNlIjpbMCwwLDBdfSwiMTQiOnsib3JpZW50YXRpb24iOjAsIndhbGwiOmZhbHNlLCJwbGFjZSI6WzAsMCwwXX0sIjE1Ijp7Im9yaWVudGF0aW9uIjowLCJ3YWxsIjpmYWxzZSwicGxhY2UiOlswLDAsMF19LCIxNiI6eyJvcmllbnRhdGlvbiI6MCwid2FsbCI6ZmFsc2UsInBsYWNlIjpbMCwwLDBdfSwiMTciOnsib3JpZW50YXRpb24iOjAsIndhbGwiOmZhbHNlLCJwbGFjZSI6WzAsMCwwXX0sInJvb2Z0eXBlIjowLCJyb29mY29sb3IiOjEsIndhdGVycGlwZSI6MCwid2lkdGgiOjY1MDAsImRlZXB0aCI6MzAwMCwib3ZlcmhhbmdMZWZ0IjoyMDAsIm92ZXJoYW5nUmlnaHQiOjIwMCwib3ZlcmhhbmdGcm9udCI6MjAwLCJvdmVyaGFuZ0JhY2siOjIwMCwiaG91c2Uxb24iOmZhbHNlLCJob3VzZTJvbiI6ZmFsc2UsImhvdXNlMXdpZHRoIjozMDAwLCJob3VzZTJ3aWR0aCI6MzAwMCwiY29sb3IxIjowLCJjb2xvcjIiOjAsIndhbGxJbnNpZGUiOmZhbHNlLCJob3VzZTF3YWxsMSI6MiwiaG91c2Uxd2FsbDIiOjAsImhvdXNlMXdhbGwzIjoxLCJob3VzZTF3YWxsNCI6MCwiaG91c2Uyd2FsbDEiOjMsImhvdXNlMndhbGwyIjowLCJob3VzZTJ3YWxsMyI6MCwiaG91c2Uyd2FsbDQiOjF9';
//hash =  window.location.hash;
//console.log(hash);
//console.log(atob(hash));

let oxj = JSON.parse(atob(hash));
window.appState = oxj;
//console.log(oxj);
//console.log(666);
}
//console.log(oxj);
//setSizes();

}




function fullScreen()
{
if(window.appState['fullscreen']==false)
{
window.appState['fullscreen']=true;
document.getElementById('builderUI').style.display='none';
document.getElementById('topDiv').style.display='none';
document.getElementById('builderUI').style.display='none';

document.getElementById('renderCanvas').classList.add('renderCanvasFullScreen');
document.getElementById('canvas2d').classList.add('canvas2dFullScreen');
document.getElementById('optionsBox').classList.add('optionsBoxFullScreen');
document.getElementById('iconInfo').classList.add('iconInfoFullScreen');
document.getElementById('iconFullScreen').classList.add('iconFullScreenFullScreen');
document.getElementById('iconZoomIn').classList.add('iconZoomInFullScreen');
document.getElementById('iconZoomOut').classList.add('iconZoomOutFullScreen');



document.getElementById('canvas2Ddiv').classList.add('canvas2dDivFullScreen');

//document.getElementById('renderCanvas').style.width='100vw';
//document.getElementById('renderCanvas').style.left='0px';

//document.getElementById('canvas2d').style.width='100vh';
//document.getElementById('canvas2d').style.height='100vh';

//document.getElementById('canvas2d').style.top='0px';
//document.getElementById('canvas2d').style.left='calc((100vw - (100vh))/2)';

//document.getElementById('optionsBox').style.left='calc((100vw - 864px)/2)';
//document.getElementById('waterMark').style.left='calc((100vw - 864px)/2)';



window.engine.resize();
}
else
{
window.appState['fullscreen']=false;
document.getElementById('builderUI').style.display='block';
document.getElementById('topDiv').style.display='block';
document.getElementById('builderUI').style.display='block';

//document.getElementById('renderCanvas').style.width='calc(100vw - 468px)';
//document.getElementById('renderCanvas').style.left='468px';


//document.getElementById('canvas2d').style.width='calc(100vw - 468px)';
//document.getElementById('canvas2d').style.height='calc(100vw - 468px)';

//document.getElementById('canvas2d').style.top='calc((100vh - (100vw - 468px))/2)';
//document.getElementById('canvas2d').style.left='468px';


//document.getElementById('optionsBox').style.left='calc((100vw + 468px)/2  - 432px )';

//document.getElementById('waterMark').style.left='calc((100vw + 468px)/2  - 432px )';

document.getElementById('renderCanvas').classList.remove('renderCanvasFullScreen');
document.getElementById('canvas2d').classList.remove('canvas2dFullScreen');
document.getElementById('optionsBox').classList.remove('optionsBoxFullScreen');
document.getElementById('iconInfo').classList.remove('iconInfoFullScreen');
document.getElementById('iconFullScreen').classList.remove('iconFullScreenFullScreen');
document.getElementById('iconZoomIn').classList.remove('iconZoomInFullScreen');
document.getElementById('iconZoomOut').classList.remove('iconZoomOutFullScreen');

document.getElementById('canvas2Ddiv').classList.remove('canvas2dDivFullScreen');



window.engine.resize();
}


}



function updateUIinfo()
{
let x = window.appState['width'];
let y = window.appState['deepth'];

let xShift;
let yShift;




if (window.appState['rooftype']==0)
{
xShift = window.appState['overhangLeft']  + window.appState['overhangRight'];
yShift = window.appState['overhangFront'] + window.appState['overhangBack'];
}

if (window.appState['rooftype']==1)
{
xShift = 400;
yShift = 400;
}

//console.log(xShift + ' ' + yShift);

document.getElementById('info1_1').innerHTML = (x + xShift) + ' mm';
document.getElementById('info1_2').innerHTML = (y + yShift) + ' mm';

document.getElementById('info2_1').innerHTML = x + ' mm';
document.getElementById('info2_2').innerHTML = y + ' mm';

if(window.appState['house1on']==false)
{
document.getElementById('info3_1').innerHTML='--';
document.getElementById('info3_2').innerHTML='--';
}
else
{
document.getElementById('info3_1').innerHTML=window.appState['house1width'] + ' mm';
document.getElementById('info3_2').innerHTML = y + ' mm';
}

if(window.appState['house2on']==false)
{
document.getElementById('info4_1').innerHTML='--';
document.getElementById('info4_2').innerHTML='--';
}
else
{
document.getElementById('info4_1').innerHTML=window.appState['house2width'] + ' mm';
document.getElementById('info4_2').innerHTML = y + ' mm';
}


}



function zoomMove(direction, house)
{

if (window.scene !== undefined)
{

let x;
let radiusMax = 0;
let deltaX = window.appState['width'];
if (window.appState['house1on']==true) deltaX = deltaX - window.appState['house1width'];
if (window.appState['house2on']==true) deltaX = deltaX - window.appState['house2width'];

if (window.appState['house1on']==false || window.appState['house2on']==false) deltaX = 4000;


if (house==1)
{
x = (window.appState['width']/-2 + window.appState['house1width']/2) /1000;
radiusMax = Math.max(window.appState['house1width'], window.appState['deepth'])/2000;
}

if (house==2)
{
x = (window.appState['width']/ 2 - window.appState['house2width']/2) /1000;
radiusMax = Math.max(window.appState['house2width'], window.appState['deepth'])/2000;
}

radiusMax = radiusMax + 4;

if (direction=='front')
{
window.scene.getCameraByID('camera1').spinTo("alpha", -Math.PI/2, 200);
window.scene.getCameraByID('camera1').spinTo("beta", Math.PI/2, 200);
window.scene.getCameraByID('camera1').spinTo("target", new BABYLON.Vector3(x, 1.5, 0), 200);
window.scene.getCameraByID('camera1').spinTo("radius", radiusMax, 200);
window.scene.getCameraByID('camera1').lowerRadiusLimit=radiusMax;
}

if (direction=='back')
{
window.scene.getCameraByID('camera1').spinTo("alpha", Math.PI/2, 200);
window.scene.getCameraByID('camera1').spinTo("beta", Math.PI/2, 200);
window.scene.getCameraByID('camera1').spinTo("target", new BABYLON.Vector3(x, 1.5, 0), 200);
window.scene.getCameraByID('camera1').spinTo("radius", radiusMax, 200);
window.scene.getCameraByID('camera1').lowerRadiusLimit=radiusMax;
}

if (direction=='left')
{
//window.scene.getCameraByID('camera1').spinTo("alpha", -Math.PI, 200);

if (house==1) window.scene.getCameraByID('camera1').spinTo("alpha", -Math.PI, 200);
//7000 / (3500 - deltaX)

if (house==2 && deltaX >= 3500) window.scene.getCameraByID('camera1').spinTo("alpha", -Math.PI, 200);
if (house==2 && deltaX == 3000) window.scene.getCameraByID('camera1').spinTo("alpha", -Math.PI/1.26, 200);
if (house==2 && deltaX == 2500) window.scene.getCameraByID('camera1').spinTo("alpha", -Math.PI/1.37, 200);
if (house==2 && deltaX == 2000) window.scene.getCameraByID('camera1').spinTo("alpha", -Math.PI/1.37, 200);
if (house==2 && deltaX == 1500) window.scene.getCameraByID('camera1').spinTo("alpha", -Math.PI/1.50, 200);
if (house==2 && deltaX == 1000) window.scene.getCameraByID('camera1').spinTo("alpha", -Math.PI/1.64, 200);
if (house==2 && deltaX == 500) window.scene.getCameraByID('camera1').spinTo("alpha", -Math.PI/1.85, 200);
if (house==2 && deltaX == 0) window.scene.getCameraByID('camera1').spinTo("alpha", -Math.PI/2, 200);

if (house==2 && deltaX < 3500 && window.appState['house1on']==true && window.appState['house2on']==true)
x = (window.appState['width']/2 - window.appState['house2width']) /1000;




window.scene.getCameraByID('camera1').spinTo("beta", Math.PI/2, 200);
window.scene.getCameraByID('camera1').spinTo("target", new BABYLON.Vector3(x, 1.5, 0), 200);
window.scene.getCameraByID('camera1').spinTo("radius", radiusMax, 200);
window.scene.getCameraByID('camera1').lowerRadiusLimit=radiusMax;
}


if (direction=='right')
{

//window.scene.getCameraByID('camera1').spinTo("alpha", 0, 200);


if (house==2) window.scene.getCameraByID('camera1').spinTo("alpha", 0, 200);
//7000 / (3500 - deltaX)

if (house==1 && deltaX >= 3500) window.scene.getCameraByID('camera1').spinTo("alpha",  0 , 200);
if (house==1 && deltaX == 3000) window.scene.getCameraByID('camera1').spinTo("alpha",  0 - (Math.PI - Math.PI/1.26), 200);
if (house==1 && deltaX == 2500) window.scene.getCameraByID('camera1').spinTo("alpha",  0 - (Math.PI - Math.PI/1.37), 200);
if (house==1 && deltaX == 2000) window.scene.getCameraByID('camera1').spinTo("alpha",  0 - (Math.PI - Math.PI/1.37), 200);
if (house==1 && deltaX == 1500) window.scene.getCameraByID('camera1').spinTo("alpha",  0 - (Math.PI - Math.PI/1.50), 200);
if (house==1 && deltaX == 1000) window.scene.getCameraByID('camera1').spinTo("alpha",  0 - (Math.PI - Math.PI/1.64), 200);
if (house==1 && deltaX == 500) window.scene.getCameraByID('camera1').spinTo("alpha",   0 - (Math.PI - Math.PI/1.85), 200);
if (house==1 && deltaX == 0) window.scene.getCameraByID('camera1').spinTo("alpha", -Math.PI/2, 200);

if (house==1 && deltaX < 3500 && window.appState['house1on']==true && window.appState['house2on']==true)
x = (window.appState['width']/-2 + window.appState['house2width']) /1000;


window.scene.getCameraByID('camera1').spinTo("beta", Math.PI/2, 200);
window.scene.getCameraByID('camera1').spinTo("target", new BABYLON.Vector3(x, 1.5, 0), 200);
window.scene.getCameraByID('camera1').spinTo("radius", radiusMax, 200);
window.scene.getCameraByID('camera1').lowerRadiusLimit=radiusMax;
}


}
}




function switchUI(id){
//  alert(id);



for (i=1; i<=6; i++)
{
  console.log(i);
if (i != id)
{
window.appUIState['uiMenu'+i]=0;

document.getElementById('builderBlock' + i).classList.remove('builderBlockStyleActive');
document.getElementById('builderBlock' + i).classList.add('builderBlockStyleInactive');

document.getElementById('builderBlockText' + i).classList.remove('builderBlockTextActive');
document.getElementById('builderBlockText' + i).classList.add('builderBlockTextInactive');

document.getElementById('builderOptions' + i).style.display='none';

document.getElementById('builderArrow' + i).classList.remove('builderArrowActive');
document.getElementById('builderArrow' + i).classList.add('builderArrowInactive');
}
}



let newstate=window.appUIState['uiMenu'+id];
if(window.appUIState['uiMenu'+id]==1 && id != 0)
{
  document.getElementById('builderBlock' + id).classList.remove('builderBlockStyleActive');
  document.getElementById('builderBlock' + id).classList.add('builderBlockStyleInactive');
newstate=0;

  //document.getElementById('builderBlock' + id).classList.remove('optionHouseCheckboxActive');

  //document.getElementById('builderBlock' + id).classList.add('optionHouseCheckboxInctive');
  document.getElementById('builderBlockText' + id).classList.remove('builderBlockTextActive');
  document.getElementById('builderBlockText' + id).classList.add('builderBlockTextInactive');

  document.getElementById('builderOptions' + id).style.display='none';

  document.getElementById('builderArrow' + id).classList.remove('builderArrowActive');
  document.getElementById('builderArrow' + id).classList.add('builderArrowInactive');


}
else
{
  if (id != 0) {
  document.getElementById('builderBlock' + id).classList.add('builderBlockStyleActive');
  document.getElementById('builderBlock' + id).classList.remove('builderBlockStyleInactive');

  document.getElementById('builderBlockText' + id).classList.add('builderBlockTextActive');
  document.getElementById('builderBlockText' + id).classList.remove('builderBlockTextInactive');

  document.getElementById('builderOptions' + id).style.display='block';


  document.getElementById('builderArrow' + id).classList.add('builderArrowActive');
  document.getElementById('builderArrow' + id).classList.remove('builderArrowInactive');

newstate=1;
 }
}
if (id != 0) window.appUIState['uiMenu'+id]=newstate;

}


function closeLoader()
{
document.getElementById('loader1').style.display='none';
document.getElementById('loader2').style.display='none';
document.getElementById('loaderBG').style.display='none';

}

function switchUIsummary()
{
if (document.getElementById('optionsBox').style.display=='none')
document.getElementById('optionsBox').style.display='block'; else document.getElementById('optionsBox').style.display='none';

}


function buildingType1Select()
{
window.appState['rooftype']=0;
setSizes();
//window.scene.getMeshByName('canopy2').setEnabled(false);
//window.scene.getMeshByName('canopy1').setEnabled(true);

//window.scene.getMeshByName('canopy2').visibility=false;

//document.getElementById('loader1').style.display='none';
//document.getElementById('loader2').style.display='none';


document.getElementById('optionHouse1').classList.remove('optionHouseInactive');
document.getElementById('optionHouse1').classList.add('optionHouseActive');
document.getElementById('optionHouse2').classList.remove('optionHouseActive');
document.getElementById('optionHouse2').classList.add('optionHouseInactive');


document.getElementById('optionHouse1Checkbox').classList.remove('optionHouseCheckboxInctive');
document.getElementById('optionHouse1Checkbox').classList.add('optionHouseCheckboxActive');
document.getElementById('optionHouse2Checkbox').classList.remove('optionHouseCheckboxActive');
document.getElementById('optionHouse2Checkbox').classList.add('optionHouseCheckboxInctive');


document.getElementById('builderOptions2_1').style.display='block';


document.getElementById('builderBlock5').style.display = 'none';
document.getElementById('builderOptions5').style.display = 'none';

//document.getElementById('builderBlockText7').innerHTML = '5. Segmenten';
//document.getElementById('builderBlockText6').innerHTML = '6. Materiaallijst';
//document.getElementById('builderBlockText8').innerHTML = '7. Opslaan + offerte';
document.getElementById('menuOrderbutton').innerHTML = '6. Opslaan + offerte';




}

function buildingType2Select()
{
window.appState['rooftype']=1;
setSizes();
//window.scene.getMeshByName('canopy1').setEnabled(false);
//window.scene.getMeshByName('canopy2').setEnabled(true);

document.getElementById('optionHouse2').classList.remove('optionHouseInactive');
document.getElementById('optionHouse2').classList.add('optionHouseActive');
document.getElementById('optionHouse1').classList.remove('optionHouseActive');
document.getElementById('optionHouse1').classList.add('optionHouseInactive');


document.getElementById('optionHouse2Checkbox').classList.remove('optionHouseCheckboxInctive');
document.getElementById('optionHouse2Checkbox').classList.add('optionHouseCheckboxActive');
document.getElementById('optionHouse1Checkbox').classList.remove('optionHouseCheckboxActive');
document.getElementById('optionHouse1Checkbox').classList.add('optionHouseCheckboxInctive');


document.getElementById('builderBlock5').style.display = 'block';
if (window.appState['uiMenu5']==0) document.getElementById('builderOptions5').style.display = 'none';
else document.getElementById('builderOptions5').style.display = 'block';

//document.getElementById('builderBlockText7').innerHTML = '5. Segmenten';
//document.getElementById('builderBlockText6').innerHTML = '7. Materiaallijst';
//document.getElementById('builderBlockText8').innerHTML = '8. Opslaan + offerte';
document.getElementById('menuOrderbutton').innerHTML = '7. Opslaan + offerte';


document.getElementById('builderOptions2_1').style.display='none';

}

function setPlusWidth(){

let x = window.appState['width'];

if (isInt(x)==false) x = 3000; else x = x * 1 + 500;
document.getElementById('widthInput').value = x;
window.appState['width'] = x;

setSizes();
}

function setMinusWidth()
{

let x = window.appState['width'];

if (isInt(x)==false) x = 3000; else x = x * 1 - 500;
document.getElementById('widthInput').value = x ;
window.appState['width'] = x;

setSizes();
}


function setPlusDeepth(){

let x = window.appState['deepth'];

if (isInt(x)==false) x = 3000; else x = x * 1 + 500;
document.getElementById('deepthInput').value = x;
window.appState['deepth'] = x;

setSizes();
}

function setMinusDeepth()
{
console.log (window.appState['deepth']);
let x = window.appState['deepth'];

if (isInt(x)==false) x = 3000; else x = x * 1 - 500;
document.getElementById('deepthInput').value = x ;
window.appState['deepth'] = x;

setSizes();
}





function setWidthByEnter(){
	    if(event.key === 'Enter') {
let value = document.getElementById('widthInput').value;
value=Math.round(value/500)*500;
document.getElementById('widthInput').value=value;
window.appState['width']=value;
document.getElementById("rangeWidth").value=value;
setSizes();
}
}

function setDeepthByEnter(){
	    if(event.key === 'Enter') {
let value = document.getElementById('deepthInput').value;
value=Math.round(value/500)*500;
document.getElementById('deepthInput').value=value;
window.appState['deepth']=value;
document.getElementById("rangeDeepth").value=value;
setSizes();
}
}


function setValueByEnter(id, stateId, value, defaultValue)
{
if(event.key === 'Enter') {
let x =  document.getElementById(id).value;
if (isInt(x)==false) x = defaultValue;
document.getElementById(id).value = x ;
window.appState[stateId] = x;

setSizes();
}
}



function zoom(direction)
{
if (direction==1) window.scene.getCameraByID('camera1').spinTo("radius", window.scene.getCameraByID('camera1').radius - 2, 200);
if (direction==0) window.scene.getCameraByID('camera1').spinTo("radius", window.scene.getCameraByID('camera1').radius + 2, 200);
}


//overhangs

function uiPlus(id,stateId, value, defaultValue)
{
  let x = window.appState[stateId];

  if (isInt(x)==false) x = defaultValue; else x = x * 1 + value;
  document.getElementById(id).value = x ;
  window.appState[stateId] = x;

  setSizes();

}


function uiPlusMinMax(id, stateId, value, defaultValue, min, max)
{
let x = window.appState[stateId];
if (isInt(x)==false)    x = defaultValue;
if (isInt(x)==true && isInt(value)==true)
{
x = x * 1 + value;
if (x < min) x = min;
if (x > max) x = max;
}

if (x == 4040 && stateId == 'glassWidth') x = 4100;

  document.getElementById(id).value = x ;
  window.appState[stateId] = x;



//  setSizes();
setAppState(true);
}


function isInt(value) {
  return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value));
}

function setAppState(update)
{
//document.getElementById('widthInput').value = x;
//document.getElementById('deepthInput').value = z;
//document.getElementById('widthInput').value = x;
if(update == true) sceneUpdate();
}


function setSizes(){

//ocument.getElementById("myCheck").checked = true;
if (document.getElementById("house1on").checked == false) window.appState['house1on']=false;
if (document.getElementById("house1on").checked == true)  window.appState['house1on']=true;
if (document.getElementById("house2on").checked == false) window.appState['house2on']=false;
if (document.getElementById("house2on").checked == true)  window.appState['house2on']=true;

if (window.appState['house1on']==false) document.getElementById("house1optionsBlock").style.display='none';
if (window.appState['house1on']==true)  document.getElementById("house1optionsBlock").style.display='block';
if (window.appState['house2on']==false) document.getElementById("house2optionsBlock").style.display='none';
if (window.appState['house2on']==true)  document.getElementById("house2optionsBlock").style.display='block';



	let x = window.appState['width'];
	let z = window.appState['deepth'];
  let overhangLeft = window.appState['overhangLeft'];
	let overhangRight = window.appState['overhangRight'];
	let overhangFront = window.appState['overhangFront'];
	let overhangBack = window.appState['overhangBack'];
  let house1width = window.appState['house1width'];
  let house2width = window.appState['house2width'];


	if (isInt(x)==false)x=3000;
	if (isInt(z)==false)z=3000;
	if (isInt(overhangLeft)==false) overhangLeft=200;
  if (isInt(overhangRight)==false) overhangRight=200;
  if (isInt(overhangFront)==false) overhangFront=200;
  if (isInt(overhangBack)==false) overhangBack=200;
  if (isInt(house1width)==false)house1width=2000;
	if (isInt(house2width)==false)house2width=2000;

x=Math.round(x/500)*500;
z=Math.round(z/500)*500;
overhangLeft=Math.round(overhangLeft/50)*50;
overhangRight=Math.round(overhangRight/50)*50;
overhangFront=Math.round(overhangFront/50)*50;
overhangBack=Math.round(overhangBack/50)*50;
house1width=Math.round(house1width/500)*500;
house2width=Math.round(house2width/500)*500;


if(x<3000){x=3000;}
if(x>20000){x=20000;}

if(overhangLeft<0){overhangLeft=0;}
if(overhangRight<0){overhangRight=0;}
if(overhangFront<0){overhangFront=0;}
if(overhangBack<0){overhangBack=0;}

if(z<3000){z=3000;}
if(z>5000){z=5000;}

if(house1width<1500){house1width=1500;}
if(house1width>4000){house1width=4000;}
if(house2width<1500){house2width=1500;}
if(house2width>4000){house2width=4000;}




if(overhangLeft>350){overhangLeft=350;}
if(overhangRight>350){overhangRight=350;}
if(overhangFront>350){overhangFront=350;}
if(overhangBack>350){overhangBack=350;}


if (window.appState['house1on']==true && window.appState['house2on']==true)
{
if (x< house1width + house2width) x =  house1width + house2width;
}

if (window.appState['house1on']==true && window.appState['house2on']==false)
{
if (x< house1width) x =  house1width;
}

if (window.appState['house1on']==false && window.appState['house2on']==true)
{
if (x < house2width) x =  house2width;
}




window.appState['width']=x;
window.appState['deepth']=z;
window.appState['overhangLeft'] =  overhangLeft;
window.appState['overhangRight'] = overhangRight;
window.appState['overhangFront'] = overhangFront;
window.appState['overhangBack'] = overhangBack;

window.appState['house1width'] = house1width;
window.appState['house2width'] = house2width;




document.getElementById('widthInput').value = x;
document.getElementById('deepthInput').value = z;

document.getElementById('house1width').value = house1width;
document.getElementById('house2width').value = house2width;


document.getElementById("rangeWidth").value=x;
document.getElementById("rangeDeepth").value=z;

document.getElementById("overhangLeft").value=overhangLeft;
document.getElementById("overhangRight").value=overhangRight;
document.getElementById("overhangFront").value=overhangFront;
document.getElementById("overhangBack").value=overhangBack;






//buildRound();



}
