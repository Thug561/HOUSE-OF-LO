//project team:
//Product manager: Otto Vullers
//Product manager: Rostyslav
//Programmer: Vladimir Adel
//twitter.com/neuromodern
//instagram.com/neuromodern
var modelsLoadingStatuses=[];
var modelsLoaded=false;


var ArchetypeUI = class {};



function openUIblock(id)
{
}

function closeUIblock(id)
{
}





ArchetypeUI.load3DModelByPath=function(importModelFilePath,importModelFileName, importedNewName) {

console.log('Start loading ' + importedNewName + ' ' + importModelFilePath+importModelFileName);
var sceneTemp = window.scene;

var arr2=BABYLON.SceneLoader.ImportMesh("", importModelFilePath, importModelFileName, sceneTemp, function (importedMeshes) {
//if (importedNewName!="")
//{
importedMeshes[0].name = importedNewName;
importedMeshes[0].id   = importedNewName;
window.modelsLoadingStatuses[importedNewName]=true;
//}


// LOGING AND CYCLE ALL CHILD MESHES
//for(var i = 0; i < importedMeshes.length; i++){  console.log(importedMeshes[i].name+''); }




//var newTempModel = importedMeshes[0].clone(importedNewName);
//importedMeshes[0].dispose();











if(importedNewName=='canopy1')
{
//bump
window.scene.getMaterialByName('Wood_Material').bumpTexture = new  BABYLON.Texture("models/texture_wood_normal.jpg", scene);
window.scene.getMaterialByName('Wood_Material').bumpTexture.wAng = window.scene.getMaterialByName('Wood_Material').albedoTexture.wAng;
window.scene.getMaterialByName('Wood_Material').bumpTexture.uOffset = window.scene.getMaterialByName('Wood_Material').albedoTexture.uOffset;
window.scene.getMaterialByName('Wood_Material').bumpTexture.vOffset = window.scene.getMaterialByName('Wood_Material').albedoTexture.vOffset;

window.scene.getMaterialByName('Wood_Material').metallic  = 0.8;
window.scene.getMaterialByName('Wood_Material').roughness = 0.55;

//newX
window.scene.getMaterialByName('Wood_Material').clone('wood_dark_0');
window.scene.getMaterialByName('wood_dark_0').albedoTexture  = new  BABYLON.Texture("models/canopy1/wood_texture_dark_0.jpg", window.scene);
window.scene.getMaterialByName('wood_dark_0').albedoTexture.wAng = window.scene.getMaterialByName('Wood_Material').albedoTexture.wAng;

window.scene.getMaterialByName('wood_dark_0').bumpTexture = new  BABYLON.Texture("models/texture_wood_normal.jpg", scene);
window.scene.getMaterialByName('wood_dark_0').bumpTexture.wAng = window.scene.getMaterialByName('Wood_Material').albedoTexture.wAng;
window.scene.getMaterialByName('wood_dark_0').bumpTexture.uOffset = window.scene.getMaterialByName('Wood_Material').albedoTexture.uOffset;
window.scene.getMaterialByName('wood_dark_0').bumpTexture.vOffset = window.scene.getMaterialByName('Wood_Material').albedoTexture.vOffset;

window.scene.getMaterialByName('wood_dark_0').clone('wood_dark_1');
window.scene.getMaterialByName('wood_dark_1').albedoTexture.wAng = 0;
window.scene.getMaterialByName('wood_dark_1').bumpTexture.wAng = 0;

//rotated
window.scene.getMaterialByName('Wood_Material').clone('Wood_Material_1');
window.scene.getMaterialByName('Wood_Material_1').albedoTexture.wAng = 0;
window.scene.getMaterialByName('Wood_Material_1').bumpTexture.wAng = 0;




importedMeshes[0].position=new BABYLON.Vector3(2, 0, 0);
//newTempModel.scaling=new BABYLON.Vector3(1, 2, 1);
//newTempModel.applyFog = false;
window.modelsLoadingStatuses['canopy1']=true;
window.scene.getMeshByName('canopy1').setEnabled(false);






window.scene.getMaterialByName('Wood_Material').clone('wood_shifted_0');
window.scene.getMaterialByName('Wood_Material').clone('wood_shifted_1');
window.scene.getMaterialByName('Wood_Material').clone('wood_shifted_2');
window.scene.getMaterialByName('Wood_Material').clone('wood_shifted_3');
window.scene.getMaterialByName('Wood_Material').clone('wood_shifted_4');
window.scene.getMaterialByName('Wood_Material').clone('wood_shifted_5');

window.scene.getMaterialByName('wood_shifted_0').albedoTexture.vOffset = 0.2;
window.scene.getMaterialByName('wood_shifted_0').bumpTexture.vOffset = 0.2;
window.scene.getMaterialByName('wood_shifted_0').albedoTexture.uOffset = 0.2;
window.scene.getMaterialByName('wood_shifted_0').bumpTexture.uOffset = 0.2;




window.scene.getMaterialByName('wood_shifted_1').albedoTexture.vOffset = 0.4;
window.scene.getMaterialByName('wood_shifted_1').bumpTexture.vOffset = 0.4;
window.scene.getMaterialByName('wood_shifted_1').albedoTexture.uOffset = 0.4;
window.scene.getMaterialByName('wood_shifted_1').bumpTexture.uOffset = 0.4;



window.scene.getMaterialByName('wood_shifted_2').albedoTexture.vOffset = 0.6;
window.scene.getMaterialByName('wood_shifted_2').bumpTexture.vOffset = 0.6;
window.scene.getMaterialByName('wood_shifted_2').albedoTexture.uOffset = 0.6;
window.scene.getMaterialByName('wood_shifted_2').bumpTexture.uOffset = 0.6;


window.scene.getMaterialByName('wood_shifted_3').albedoTexture.vOffset = 0.8;
window.scene.getMaterialByName('wood_shifted_3').bumpTexture.vOffset = 0.8;
window.scene.getMaterialByName('wood_shifted_3').albedoTexture.uOffset = 0.8;
window.scene.getMaterialByName('wood_shifted_3').bumpTexture.uOffset = 0.8;


window.scene.getMaterialByName('wood_shifted_4').albedoTexture.vOffset = 0.5;
window.scene.getMaterialByName('wood_shifted_4').bumpTexture.vOffset = 0.5;
window.scene.getMaterialByName('wood_shifted_4').albedoTexture.uOffset = 0.5;
window.scene.getMaterialByName('wood_shifted_4').bumpTexture.uOffset = 0.5;


window.scene.getMaterialByName('wood_shifted_5').albedoTexture.vOffset = 0.1;
window.scene.getMaterialByName('wood_shifted_5').bumpTexture.vOffset = 0.1;


}


if(importedNewName=='zhaluzi')
{

}


if(importedNewName=='canopy2')
{
importedMeshes[0].position=new BABYLON.Vector3(-1, 1.7, 0);
importedMeshes[0].scaling=new BABYLON.Vector3(0.01, 0.01, 0.01);
window.scene.getMeshByName('canopy2').setEnabled(false);
//newTempModel.applyFog = false;
window.modelsLoadingStatuses['canopy2']=true;
}


console.log(importedNewName + ' loaded.');




if (
window.modelsLoaded==false &&


window.modelsLoadingStatuses['pipe_vertical_back']==true  &&
window.modelsLoadingStatuses['keeper_back']==true  &&

window.modelsLoadingStatuses['pipe_vertical']==true  &&
window.modelsLoadingStatuses['pipe_horisontal']==true  &&
window.modelsLoadingStatuses['keeper']==true  &&
window.modelsLoadingStatuses['holder_small']==true  &&
window.modelsLoadingStatuses['holder_big']==true  &&
window.modelsLoadingStatuses['end_right']==true  &&
window.modelsLoadingStatuses['end_left']==true  &&


window.modelsLoadingStatuses['zhaluzi']==true  &&
window.modelsLoadingStatuses['window_1']==true  &&
window.modelsLoadingStatuses['window_glass_1']==true  &&
window.modelsLoadingStatuses['window_2']==true  &&
window.modelsLoadingStatuses['window_glass_2']==true  &&

window.modelsLoadingStatuses['door2m']==true  &&
window.modelsLoadingStatuses['door2m_glass']==true  &&

window.modelsLoadingStatuses['door3m']==true  &&
window.modelsLoadingStatuses['door3m_glass']==true  &&

window.modelsLoadingStatuses['door4m']==true  &&
window.modelsLoadingStatuses['door4m_glass']==true  &&



window.modelsLoadingStatuses['door_single']==true  &&
window.modelsLoadingStatuses['door_double']==true  &&
window.modelsLoadingStatuses['window']==true  &&


window.modelsLoadingStatuses['wall_big']==true  &&
window.modelsLoadingStatuses['wall_big_carcas']==true  &&

window.modelsLoadingStatuses['wall_trap_0']==true  &&
window.modelsLoadingStatuses['wall_trap_0_carcas']==true  &&
window.modelsLoadingStatuses['wall_small_0']==true  &&
window.modelsLoadingStatuses['wall_small_carcas_0']==true  &&

window.modelsLoadingStatuses['wall_roof_carcas_1']==true  &&
window.modelsLoadingStatuses['wall_roof_carcas_2']==true  &&
window.modelsLoadingStatuses['wall_roof_carcas_3']==true  &&
window.modelsLoadingStatuses['wall_roof_carcas_4']==true  &&
window.modelsLoadingStatuses['wall_roof_carcas_5']==true  &&

window.modelsLoadingStatuses['wall_roof_1']==true  &&
window.modelsLoadingStatuses['wall_roof_2']==true  &&
window.modelsLoadingStatuses['wall_roof_3']==true  &&
window.modelsLoadingStatuses['wall_roof_4']==true  &&
window.modelsLoadingStatuses['wall_roof_5']==true  &&


window.modelsLoadingStatuses['1roof_tile_0']==true  &&
window.modelsLoadingStatuses['2roof_tile_0']==true  &&
window.modelsLoadingStatuses['3roof_tile_0']==true  &&
window.modelsLoadingStatuses['4roof_tile_0']==true  &&
window.modelsLoadingStatuses['5roof_tile_0']==true  &&

window.modelsLoadingStatuses['1roof_tile1_0']==true  &&
window.modelsLoadingStatuses['2roof_tile1_0']==true  &&
window.modelsLoadingStatuses['3roof_tile1_0']==true  &&
window.modelsLoadingStatuses['4roof_tile1_0']==true  &&
window.modelsLoadingStatuses['5roof_tile1_0']==true  &&

window.modelsLoadingStatuses['1roof_tile1_0_start']==true  &&
window.modelsLoadingStatuses['2roof_tile1_0_start']==true  &&
window.modelsLoadingStatuses['3roof_tile1_0_start']==true  &&
window.modelsLoadingStatuses['4roof_tile1_0_start']==true  &&
window.modelsLoadingStatuses['5roof_tile1_0_start']==true  &&

window.modelsLoadingStatuses['1roof_tile1_0_end']==true  &&
window.modelsLoadingStatuses['2roof_tile1_0_end']==true  &&
window.modelsLoadingStatuses['3roof_tile1_0_end']==true  &&
window.modelsLoadingStatuses['4roof_tile1_0_end']==true  &&
window.modelsLoadingStatuses['5roof_tile1_0_end']==true  &&


window.modelsLoadingStatuses['1roof_tile2_0']==true  &&
window.modelsLoadingStatuses['2roof_tile2_0']==true  &&
window.modelsLoadingStatuses['3roof_tile2_0']==true  &&
window.modelsLoadingStatuses['4roof_tile2_0']==true  &&
window.modelsLoadingStatuses['5roof_tile2_0']==true  &&

window.modelsLoadingStatuses['roof_ridge_1_0']==true  &&
window.modelsLoadingStatuses['roof_ridge_2_0']==true  &&
window.modelsLoadingStatuses['roof_ridge_3_0']==true  &&
window.modelsLoadingStatuses['roof_ridge_4_0']==true  &&
window.modelsLoadingStatuses['roof_ridge_5_0']==true  &&



window.modelsLoadingStatuses['1roof_side_left']==true  &&
window.modelsLoadingStatuses['2roof_side_left']==true  &&
window.modelsLoadingStatuses['3roof_side_left']==true  &&
window.modelsLoadingStatuses['4roof_side_left']==true  &&
window.modelsLoadingStatuses['5roof_side_left']==true  &&

window.modelsLoadingStatuses['1roof_side_left_small']==true  &&
window.modelsLoadingStatuses['2roof_side_left_small']==true  &&
window.modelsLoadingStatuses['3roof_side_left_small']==true  &&
window.modelsLoadingStatuses['4roof_side_left_small']==true  &&
window.modelsLoadingStatuses['5roof_side_left_small']==true  &&

window.modelsLoadingStatuses['1roof_side_left_3']==true  &&
window.modelsLoadingStatuses['2roof_side_left_3']==true  &&
window.modelsLoadingStatuses['3roof_side_left_3']==true  &&
window.modelsLoadingStatuses['4roof_side_left_3']==true  &&
window.modelsLoadingStatuses['5roof_side_left_3']==true  &&



window.modelsLoadingStatuses['1roof_bulk_0']==true &&
window.modelsLoadingStatuses['2roof_bulk_0']==true &&
window.modelsLoadingStatuses['3roof_bulk_0']==true &&
window.modelsLoadingStatuses['4roof_bulk_0']==true &&
window.modelsLoadingStatuses['5roof_bulk_0']==true &&

window.modelsLoadingStatuses['1roof_wood']==true &&
window.modelsLoadingStatuses['2roof_wood']==true &&
window.modelsLoadingStatuses['3roof_wood']==true &&
window.modelsLoadingStatuses['4roof_wood']==true &&
window.modelsLoadingStatuses['5roof_wood']==true &&


window.modelsLoadingStatuses['1meter_balk']==true  &&
window.modelsLoadingStatuses['canopy1']==true  &&
window.modelsLoadingStatuses['balk_0']==true &&
window.modelsLoadingStatuses['balk_small_0']==true)
{



waterpipeCreate();



//window.scene.getMeshByName('canopy2').setEnabled(false);
//window.scene.getMeshByName('Object1259.004_primitive0').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('canopy1').setEnabled(false);
window.scene.getMeshByName('wall_small_0').setEnabled(false);
window.scene.getMeshByName('wall_small_carcas_0').setEnabled(false);
window.scene.getMeshByName('wall_big').setEnabled(false);
window.scene.getMeshByName('wall_big_carcas').setEnabled(false);

window.scene.getMeshByName('hdrSkyBox').setEnabled(false);


//materials
window.scene.getMeshByName('zhaluzi').material=window.scene.getMaterialByName('Wood_Material');


window.scene.getMeshByName('balk_small_0').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('balk_0').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('1meter_balk').material=window.scene.getMaterialByName('Wood_Material');

window.scene.getMeshByName('wall_small_0').material=window.scene.getMaterialByName('wood_dark_0');

window.scene.getMeshByName('wall_small_carcas_0').material=window.scene.getMaterialByName('Wood_Material');

window.scene.getMeshByName('wall_big').material=window.scene.getMaterialByName('wood_dark_0');
window.scene.getMeshByName('wall_big_carcas').material=window.scene.getMaterialByName('Wood_Material');



//CREATING BALK ROOF CARKAS
for (let i=0; i<=20; i++)
{
window.scene.getMeshByName('1meter_balk').clone('liggerDeepth_' + i);


window.scene.getMeshByName('liggerDeepth_' + i).rotation=new BABYLON.Vector3(0, 0 , 0);
window.scene.getMeshByName('liggerDeepth_' + i).position.y=2.42;
//window.scene.getMeshByName('flat_roof_bulk_' + i).scaling.x=4.1;
window.scene.getMeshByName('liggerDeepth_' + i).scaling.z=0.33;
//window.scene.getMeshByName('flat_roof_bulk_' + i).position.y=2.42;

}



//CREATING BALK ROOF CARKAS




//window.scene.getMeshByName('wall_small_0').makeGeometryUnique();
//window.scene.getMeshByName('wall_small_0').scaling.z=-1;
//window.scene.getMeshByName('wall_small_0').flipFaces();



window.scene.getMeshByName('wall_trap_0').material=window.scene.getMaterialByName('wood_dark_0');
window.scene.getMeshByName('wall_trap_0_carcas').material=window.scene.getMaterialByName('Wood_Material');

window.scene.getMeshByName('wall_roof_carcas_1').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_roof_carcas_2').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_roof_carcas_3').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_roof_carcas_4').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_roof_carcas_5').material=window.scene.getMaterialByName('Wood_Material');


window.scene.getMeshByName('wall_roof_1').material=window.scene.getMaterialByName('wood_dark_1');
window.scene.getMeshByName('wall_roof_2').material=window.scene.getMaterialByName('wood_dark_1');
window.scene.getMeshByName('wall_roof_3').material=window.scene.getMaterialByName('wood_dark_1');
window.scene.getMeshByName('wall_roof_4').material=window.scene.getMaterialByName('wood_dark_1');
window.scene.getMeshByName('wall_roof_5').material=window.scene.getMaterialByName('wood_dark_1');







//cloning TRIANGLE WALLS
for (let i=1; i<=5; i++)
{
window.scene.getMeshByName('wall_roof_' + i).clone('wall_roof_clone_' + i);
window.scene.getMeshByName('wall_roof_clone_' + i).makeGeometryUnique();
window.scene.getMeshByName('wall_roof_clone_' + i).scaling.x=-1;
window.scene.getMeshByName('wall_roof_clone_' + i).flipFaces();
window.scene.getMeshByName('wall_roof_carcas_' + i ).clone('wall_roof_carcas_clone_' + i );

window.scene.getMeshByName('wall_roof_clone_' + i).clone('wall_roof_inside_' + i);
window.scene.getMeshByName('wall_roof_' + i).clone('wall_roof_clone_inside_' + i);

}
//WALLS


window.scene.getMeshByName('wall_trap_0').clone('wall_trap_1');
window.scene.getMeshByName('wall_trap_1').makeGeometryUnique();
window.scene.getMeshByName('wall_trap_1').scaling.x=-1;
window.scene.getMeshByName('wall_trap_1').position.x=-1;
window.scene.getMeshByName('wall_trap_1').flipFaces();
window.scene.getMeshByName('wall_trap_1').clone('wall_trap_0_inside');
window.scene.getMeshByName('wall_trap_0').clone('wall_trap_1_inside');
window.scene.getMeshByName('wall_trap_0_carcas').clone('wall_trap_1_carcas');


window.scene.getMeshByName('wall_trap_1').position.z = 0.5;
window.scene.getMeshByName('wall_trap_0').position.z = 0.5;
window.scene.getMeshByName('wall_trap_0_inside').position.z = 0.5;
window.scene.getMeshByName('wall_trap_1_inside').position.z = 0.5;
window.scene.getMeshByName('wall_trap_0_carcas').position.z = 0.5;
window.scene.getMeshByName('wall_trap_1_carcas').position.z = 0.5;


///


//roof wood roof side
for (let i=1; i<=5; i++)
{
//roof wood material
window.scene.getMeshByName(i + 'roof_wood').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName(i + 'roof_side_left').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName(i + 'roof_side_left_3').material=window.scene.getMaterialByName('Wood_Material_1');



window.scene.getMeshByName(i + 'roof_side_left').clone(i + 'roof_side_right');
window.scene.getMeshByName(i + 'roof_side_right').makeGeometryUnique();
window.scene.getMeshByName(i + 'roof_side_left').scaling.x=-1;
window.scene.getMeshByName(i + 'roof_side_left').position.x=-1;
window.scene.getMeshByName(i + 'roof_side_left').flipFaces();


window.scene.getMeshByName(i + 'roof_side_left_small').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName(i + 'roof_side_left_small').clone(i + 'roof_side_right_small');
window.scene.getMeshByName(i + 'roof_side_right_small').makeGeometryUnique();
window.scene.getMeshByName(i + 'roof_side_left_small').scaling.x=-1;
window.scene.getMeshByName(i + 'roof_side_left_small').position.x=-1;
window.scene.getMeshByName(i + 'roof_side_left_small').flipFaces();


window.scene.getMeshByName(i + 'roof_side_left_3').material=window.scene.getMaterialByName('Wood_Material_1');
window.scene.getMeshByName(i + 'roof_side_left_3').clone(i + 'roof_side_right_3');
window.scene.getMeshByName(i + 'roof_side_right_3').makeGeometryUnique();
window.scene.getMeshByName(i + 'roof_side_right_3').scaling.x = 1.8;
window.scene.getMeshByName(i + 'roof_side_left_3').scaling.x  =-1.8;
window.scene.getMeshByName(i + 'roof_side_left_3').position.x=-1;
window.scene.getMeshByName(i + 'roof_side_left_3').flipFaces();


}

//middle roof
for (let i=1; i<=5; i++)
{
window.scene.getMeshByName(i + 'roof_bulk_0').material=window.scene.getMaterialByName('Wood_Material');

for(let ii=1; ii<=41; ii++)
{
  window.scene.getMeshByName(i + 'roof_bulk_0').clone(i + 'roof_bulk_' + ii);

if(ii%2==0) window.scene.getMeshByName(i + 'roof_bulk_' + ii).material=window.scene.getMaterialByName('wood_shifted_0');
if(ii%3==0) window.scene.getMeshByName(i + 'roof_bulk_' + ii).material=window.scene.getMaterialByName('wood_shifted_1');
if(ii%4==0) window.scene.getMeshByName(i + 'roof_bulk_' + ii).material=window.scene.getMaterialByName('wood_shifted_2');





}

}




//small wall
//need to disable 0

for (let i=1; i<=9; i++)
{
window.scene.getMeshByName('wall_small_carcas_0').clone('wall_small_carcas_'+i);
window.scene.getMeshByName('wall_small_0').clone('wall_small_'+i);


window.scene.getMeshByName('wall_small_0').clone('wall_small_inside_'+i);
window.scene.getMeshByName('wall_small_inside_'+i).makeGeometryUnique();
window.scene.getMeshByName('wall_small_inside_'+i).scaling.z=-1;
window.scene.getMeshByName('wall_small_inside_'+i).bakeCurrentTransformIntoVertices();
}

createHouses();





//parts 1m
window.scene.getMeshByName('1meter_balk').clone('1meter_balk_vertical_left');
window.scene.getMeshByName('1meter_balk').clone('1meter_balk_vertical_right');
window.scene.getMeshByName('1meter_balk_vertical_left' ).rotation=new BABYLON.Vector3(0, Math.PI/-2 , 0);
window.scene.getMeshByName('1meter_balk_vertical_right').rotation=new BABYLON.Vector3(0, Math.PI/-2 , 0);


//DUMMY ROOF2
// flatRoof1_front

window.scene.getMeshByName('1meter_balk').clone('roof2_bulk_front');
window.scene.getMeshByName('1meter_balk').clone('roof2_bulk_back');
window.scene.getMeshByName('roof2_bulk_front').scaling.z  = 0.1 ;
window.scene.getMeshByName('roof2_bulk_back').scaling.z  = 0.1 ;
//window.scene.getMeshByName('roof2_bulk_front' ).rotation=new BABYLON.Vector3(0, Math.PI/-2 , 0);
//window.scene.getMeshByName('roof2_bulk_back').rotation=new BABYLON.Vector3(0, Math.PI/-2 , 0);

//flatroof1




window.scene.getMeshByName('1meter_balk').clone('flatRoof1_front');
window.scene.getMeshByName('1meter_balk').clone('flatRoof1_back');
window.scene.getMeshByName('1meter_balk').clone('flatRoof1_left');
window.scene.getMeshByName('1meter_balk').clone('flatRoof1_right');
window.scene.getMeshByName('flatRoof1_left' ).rotation=new BABYLON.Vector3(0, Math.PI/-2 , 0);
window.scene.getMeshByName('flatRoof1_right').rotation=new BABYLON.Vector3(0, Math.PI/-2 , 0);
window.scene.getMeshByName('flatRoof1_left').scaling.z  = 0.1 ;
window.scene.getMeshByName('flatRoof1_right').scaling.z = 0.1 ;
window.scene.getMeshByName('flatRoof1_front').scaling.z  = 0.1 ;
window.scene.getMeshByName('flatRoof1_back').scaling.z = 0.1 ;


//flatroof2
window.scene.getMeshByName('1meter_balk').clone('flatRoof2_front');
window.scene.getMeshByName('1meter_balk').clone('flatRoof2_back');
window.scene.getMeshByName('1meter_balk').clone('flatRoof2_left');
window.scene.getMeshByName('1meter_balk').clone('flatRoof2_right');
window.scene.getMeshByName('flatRoof2_left' ).rotation=new BABYLON.Vector3(0, Math.PI/-2 , 0);
window.scene.getMeshByName('flatRoof2_right').rotation=new BABYLON.Vector3(0, Math.PI/-2 , 0);
window.scene.getMeshByName('flatRoof2_left').scaling.z  = 0.1 ;
window.scene.getMeshByName('flatRoof2_right').scaling.z = 0.1 ;
window.scene.getMeshByName('flatRoof2_front').scaling.z  = 0.1 ;
window.scene.getMeshByName('flatRoof2_back').scaling.z = 0.1 ;

window.scene.getMeshByName('flatRoof2_front').material=window.scene.getMaterialByName('wood_shifted_0');
window.scene.getMeshByName('flatRoof2_back').material =window.scene.getMaterialByName('wood_shifted_0');
window.scene.getMeshByName('flatRoof2_left').material =window.scene.getMaterialByName('wood_shifted_0');
window.scene.getMeshByName('flatRoof2_right').material =window.scene.getMaterialByName('wood_shifted_0');

window.scene.getMeshByName('flatRoof1_front').material=window.scene.getMaterialByName('wood_shifted_1');
window.scene.getMeshByName('flatRoof1_back').material =window.scene.getMaterialByName('wood_shifted_1');
window.scene.getMeshByName('flatRoof1_left').material =window.scene.getMaterialByName('wood_shifted_1');
window.scene.getMeshByName('flatRoof1_right').material =window.scene.getMaterialByName('wood_shifted_1');





//flat roof 15mm array
for(let i=0; i<=26;i++){
window.scene.getMeshByName('1meter_balk').clone('flat_roof_15mm' + i);
window.scene.getMeshByName('flat_roof_15mm' + i).rotation=new BABYLON.Vector3(0, 0, 0);
window.scene.getMeshByName('flat_roof_15mm' + i).scaling.y=0.1;
window.scene.getMeshByName('flat_roof_15mm' + i).scaling.z=1.33;
window.scene.getMeshByName('flat_roof_15mm' + i).position.y=2.47;

window.scene.getMeshByName('flat_roof_15mm' + i).material=window.scene.getMaterialByName('wood_shifted_3');
if(i%2==0) window.scene.getMeshByName('flat_roof_15mm' + i).material=window.scene.getMaterialByName('wood_shifted_0');
if(i%3==0) window.scene.getMeshByName('flat_roof_15mm' + i).material=window.scene.getMaterialByName('wood_shifted_1');
if(i%4==0) window.scene.getMeshByName('flat_roof_15mm' + i).material=window.scene.getMaterialByName('wood_shifted_2');

}

//flat roof mid bulk
for(let i=0; i<=41; i++)
{
window.scene.getMeshByName('1meter_balk').clone('flat_roof_bulk_'+i);

if(i%2==0) window.scene.getMeshByName('flat_roof_bulk_' + i ).material=window.scene.getMaterialByName('wood_shifted_0');
if(i%3==0) window.scene.getMeshByName('flat_roof_bulk_' + i ).material=window.scene.getMaterialByName('wood_shifted_1');
if(i%4==0) window.scene.getMeshByName('flat_roof_bulk_' + i ).material=window.scene.getMaterialByName('wood_shifted_2');


window.scene.getMeshByName('flat_roof_bulk_' + i ).rotation=new BABYLON.Vector3(0, Math.PI/-2 , 0);
window.scene.getMeshByName('flat_roof_bulk_' + i).scaling.x=4.1;
window.scene.getMeshByName('flat_roof_bulk_' + i).scaling.z=0.33;
window.scene.getMeshByName('flat_roof_bulk_' + i).position.y=2.42;
}

window.scene.getMeshByName('1meter_balk').clone('flat_roof_x1_bulk');
window.scene.getMeshByName('1meter_balk').clone('flat_roof_x2_bulk');
window.scene.getMeshByName('1meter_balk').clone('angle_roof_x_bulk');
window.scene.getMeshByName('flat_roof_x1_bulk').scaling.z=0.33;
window.scene.getMeshByName('flat_roof_x2_bulk').scaling.z=0.33;
window.scene.getMeshByName('angle_roof_x_bulk').scaling.z=0.33;

window.scene.getMeshByName('flat_roof_x1_bulk').position.y=2.42;
window.scene.getMeshByName('flat_roof_x2_bulk').position.y=2.42;

window.scene.getMeshByName('angle_roof_x_bulk').position.y=2.42;
window.scene.getMeshByName('angle_roof_x_bulk').position.z=-0.46;
///


//disable source 1m balk
window.scene.getMeshByName('1meter_balk').setEnabled(false);



//console.log(window.scene.getMaterialByName('Wood_Material').albedoTexture.uScale);
//console.log(window.scene.getMaterialByName('Wood_Material'));


//balk 7 section back
for(let i=1; i<=9;i++){
window.scene.getMeshByName('balk_0').clone('balk_front_' + i);
window.scene.getMeshByName('balk_front_' + i).position=new BABYLON.Vector3(-3 + i * 2, 0, 1,5);

//
window.scene.getMeshByName('balk_small_0').clone('balk_small_front_left_' + i);
window.scene.getMeshByName('balk_small_0').clone('balk_small_front_right_' + i);
window.scene.getMeshByName('balk_small_front_left_' + i).position=new BABYLON.Vector3(-3 + i * 2, 0, 1,5);
window.scene.getMeshByName('balk_small_front_left_' + i).rotation=new BABYLON.Vector3(0, Math.PI/2, 0);
window.scene.getMeshByName('balk_small_front_right_' + i).position=new BABYLON.Vector3(-3 + i * 2, 0, 1,5);
window.scene.getMeshByName('balk_small_front_right_' + i).rotation=new BABYLON.Vector3(0, Math.PI/-2 , 0);


//
window.scene.getMeshByName('1meter_balk').clone('1meter_balk_front_' + i);
window.scene.getMeshByName('1meter_balk').clone('1meter_balk_back_' + i);
window.scene.getMeshByName('1meter_balk').clone('1meter_balk_roof_' + i);



}

//balk 7 section front
for(let i=1; i<=9;i++){
window.scene.getMeshByName('balk_0').clone('balk_back_' + i);
window.scene.getMeshByName('balk_back_' + i).position=new BABYLON.Vector3(-3 + i * 2, 0, -1,5);

window.scene.getMeshByName('balk_0').clone('balk_roof_' + i);
window.scene.getMeshByName('balk_roof_' + i).position=new BABYLON.Vector3(-3 + i * 2, 0, -1,5);
window.scene.getMeshByName('balk_roof_' + i).scaling=new BABYLON.Vector3(1, 0.755, 1);


///
window.scene.getMeshByName('balk_small_0').clone('balk_small_back_left_' + i);
window.scene.getMeshByName('balk_small_0').clone('balk_small_back_right_' + i);
window.scene.getMeshByName('balk_small_back_left_' + i).position=new BABYLON.Vector3(-3 + i * 2, 0, -1,5);
window.scene.getMeshByName('balk_small_back_left_' + i).rotation=new BABYLON.Vector3(0, Math.PI/2, 0);
window.scene.getMeshByName('balk_small_back_right_' + i).position=new BABYLON.Vector3(-3 + i * 2, 0, -1,5);
window.scene.getMeshByName('balk_small_back_right_' + i).rotation=new BABYLON.Vector3(0, Math.PI/-2 , 0);

}




//balk center
window.scene.getMeshByName('balk_0').clone('balk_center_0');
window.scene.getMeshByName('balk_0').clone('balk_center_1');



//window.scene.getMeshByName('balk_0').clone('1meter_balk_center_house1');
//window.scene.getMeshByName('balk_0').clone('1meter_balk_vertical_house2');

window.scene.getMeshByName('balk_0').clone('balk_center_house1');
window.scene.getMeshByName('balk_0').clone('balk_center_house2');










for(let i=0; i<=1;i++){
window.scene.getMeshByName('balk_small_0').clone('balk_small_center_left_' + i);
window.scene.getMeshByName('balk_small_0').clone('balk_small_center_right_' + i);
window.scene.getMeshByName('balk_small_center_left_' + i).position.y=0.05;
window.scene.getMeshByName('balk_small_center_right_' + i).position.y=0.05;

window.scene.getMeshByName('balk_small_center_right_' + i).rotation=new BABYLON.Vector3(0, 0 , 0);
window.scene.getMeshByName('balk_small_center_left_' + i).rotation=new BABYLON.Vector3(0, Math.PI/1, 0);
}






window.scene.getMeshByName('balk_small_0').setEnabled(false);
window.scene.getMeshByName('balk_0').setEnabled(false);

window.scene.getMeshByName('roof_ridge_1_0').material=window.scene.getMaterialByName('roofGam');
window.scene.getMeshByName('roof_ridge_2_0').material=window.scene.getMaterialByName('roofGam');
window.scene.getMeshByName('roof_ridge_3_0').material=window.scene.getMaterialByName('roofGam');
window.scene.getMeshByName('roof_ridge_4_0').material=window.scene.getMaterialByName('roofGam');
window.scene.getMeshByName('roof_ridge_5_0').material=window.scene.getMaterialByName('roofGam');

for(let roofNum=1;roofNum<=5;roofNum++)
{
//window.scene.getMeshByName(roofNum +'roof_tile_0').material=window.scene.getMaterialByName('RoofTileMaterial');
//window.scene.getMeshByName(roofNum +'roof_tile1_0').material=window.scene.getMaterialByName('RoofTileMaterial');
//window.scene.getMeshByName(roofNum +'roof_tile2_0').material=window.scene.getMaterialByName('RoofTileMaterial');


window.scene.getMeshByName(roofNum +'roof_tile_0').material=window.scene.getMaterialByName('roofMaterial1');
window.scene.getMeshByName(roofNum +'roof_tile1_0').material=window.scene.getMaterialByName('roofMaterial1');
window.scene.getMeshByName(roofNum +'roof_tile2_0').material=window.scene.getMaterialByName('roofMaterial1');

window.scene.getMeshByName(roofNum +'roof_tile1_0_end').material=window.scene.getMaterialByName('roofMaterial1');
window.scene.getMeshByName(roofNum +'roof_tile1_0_start').material=window.scene.getMaterialByName('roofMaterial1');


window.scene.getMeshByName(roofNum +'roof_tile_0').scaling.x=1.01;
for (let i=1; i<=81; i++)
{
window.scene.getMeshByName(roofNum +'roof_tile_0').clone(roofNum+'roof_tile_' + i);
window.scene.getMeshByName(roofNum +'roof_tile1_0').clone(roofNum+'roof_tile1_' + i);
window.scene.getMeshByName(roofNum +'roof_tile2_0').clone(roofNum+'roof_tile2_' + i);

if(roofNum==1) window.scene.getMeshByName('roof_ridge_1_0').clone('roof_ridge_1_' + i);
if(roofNum==2) window.scene.getMeshByName('roof_ridge_2_0').clone('roof_ridge_2_' + i);
if(roofNum==3) window.scene.getMeshByName('roof_ridge_3_0').clone('roof_ridge_3_' + i);
if(roofNum==4) window.scene.getMeshByName('roof_ridge_4_0').clone('roof_ridge_4_' + i);
if(roofNum==5) window.scene.getMeshByName('roof_ridge_5_0').clone('roof_ridge_5_' + i);


//window.scene.getMeshByName('1roof_tile_' + i).position=new BABYLON.Vector3(-3 + i * 0.25, 0, 0);
}


}

//var plane = BABYLON.MeshBuilder.CreatePlane("roofPlane", {height:2, width: 1, sideOrientation: BABYLON.Mesh.DOUBLESIDE});


spaceCreating();
elementsCreating();

linkParse();
buildRound();

createXR();

//var box =  BABYLON.MeshBuilder.CreateBox("box", {height: 1, width: 0.75, depth: 0.25});

closeLoader();
window.modelsLoaded=true;
}



//applyFog = false;

//



//window.modelsLoadingStatuses[importedNewName]=true;

});

};

var createXR = async function () {
  const xr = await scene.createDefaultXRExperienceAsync({
uiOptions: {sessionMode: 'immersive-ar'}
});




}

ArchetypeUI.prototype.setXYZMeshPosition=function(meshName, newX, newY, newZ) {
parent.scene.getMeshByID(meshName).position.x = newX;
};

window.addEventListener('DOMContentLoaded', function(){

document.getElementById("rangeWidth").onchange=(function(){document.getElementById('widthInput').value=this.value;window.appState['width']=this.value;  setSizes();  });
document.getElementById("rangeDeepth").onchange=(function(){document.getElementById('deepthInput').value=this.value;window.appState['deepth']=this.value;  setSizes();  });
document.getElementById('widthInput').value=5000;
document.getElementById('deepthInput').value=3000;
document.getElementById("rangeWidth").value=5000;
document.getElementById("rangeDeepth").value=3000;

document.getElementById("spaceInnerWall").checked = false;
document.getElementById("wallInside").checked =false;
//document.getElementById("wallInside").prop("checked",false);
document.getElementById("house1on").checked =false;
//document.getElementById("house1on").prop("checked",false);
document.getElementById("house2on").checked =false;
//document.getElementById("house2on").prop("checked",false);
document.getElementById("waterpipe").checked =false;

var canvas = document.getElementById('renderCanvas');
window.engine = new BABYLON.Engine(canvas, true, { });
var createScene = function(){
var scene = new BABYLON.Scene(window.engine);

if (window.appState['debug']!=true){
window.el = document.querySelector('.tabs1');
window.instance = M.Tabs.init(el, {});
window.instance.select('house1_1');

window.el2 = document.querySelector('.tabs2');
window.instance2 = M.Tabs.init(el2, {});
window.instance2.select('house2_1');

window.instance.updateTabIndicator();
window.instance2.updateTabIndicator();


}

//debugLayer
if (window.appState['debug']==true)
{
scene.debugLayer.show();
document.getElementById('builderUI').style.display='none';
document.getElementById('topDiv').style.display='none';
document.getElementById('builderUI').style.top='600px';
}


//var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, -5,-25), scene);
var camera = new BABYLON.ArcRotateCamera("camera1", -1.57, 1.07, 11, BABYLON.Vector3.Zero(), scene);
camera.setTarget(new BABYLON.Vector3(0, 1.5, 0));
camera.fov=0.8;

camera.attachControl(canvas, false);

camera.lowerRadiusLimit=7;
//camera.wheelDeltaPercentage = 7;
camera.wheelPrecision = 55;


//scene.clearColor = new BABYLON.Color3(0.95, 0.95, 0.95);
scene.clearColor = new BABYLON.Color4(0.95, 0.95, 0.95, 0);
//scene.clearColor = new BABYLON.Color4(0.0, 0.0, 0.0, 0.0);
scene.autoClear = false;

//var light1 = new BABYLON.HemisphericLight('light_sky', new BABYLON.Vector3(-0.1,1,0.3), scene);
//var light1 = new BABYLON.HemisphericLight('light_sky', new BABYLON.Vector3(0,4,4), scene);
//light1.intensity=0.4;




var light2 = new BABYLON.PointLight("light_point_2", new BABYLON.Vector3(10, 3, 0), scene);
light2.intensity=20;
light2.diffuse=new BABYLON.Color3(1,1,1);

var light4 = new BABYLON.PointLight("light_point_4", new BABYLON.Vector3(-10, 3, 0), scene);
light4.intensity=20;
light4.diffuse=new BABYLON.Color3(1,1,1);





var light3 = new BABYLON.PointLight("light_point_3", new BABYLON.Vector3(0, 3, -5), scene);
light3.intensity=70;
light3.diffuse=new BABYLON.Color3(1,1,1);



var light5 = new BABYLON.PointLight("light_point_5", new BABYLON.Vector3(0, 3, 5), scene);
light5.intensity=70;
light5.diffuse=new BABYLON.Color3(1,1,1);


// var light4 = new BABYLON.PointLight("light_point_neon", new BABYLON.Vector3(-10, -20, 0), scene);
// light4.intensity=400;
// light4.diffuse=new BABYLON.Color3(0,0.5,1);

// var light5 = new BABYLON.PointLight("light_point_green", new BABYLON.Vector3(-10, -10, 50), scene);
// light5.intensity=400;
// light5.diffuse=new BABYLON.Color3(0,1,0);



//scene.createDefaultEnvironment();
//var hdrTexture = BABYLON.CubeTexture.CreateFromPrefilteredData("models/environmentSpecular.env", scene);
//scene.environmentTexture = hdrTexture;

///
var myMaterial = new BABYLON.PBRMaterial("material_wood_0", scene);
myMaterial.albedoColor = new BABYLON.Color3(1.0, 1.0, 1.0);//Bordeaux Color RGB (95,2,31)
//myMaterial.reflectivityColor = new BABYLON.Color3(0.003, 0.003, 0.003);

myMaterial.metallic = 1;
myMaterial.roughness = 0.85;
//texture
myMaterial.albedoTexture  = new  BABYLON.Texture("models/texture_wood.jpg", scene);
myMaterial.albedoTexture.uScale = 1;
myMaterial.albedoTexture.vScale = 1;
myMaterial.albedoTexture.wAng = 1.5707963705062866;
//bump
myMaterial.bumpTexture = new  BABYLON.Texture("models/texture_wood_normal.jpg", scene);
myMaterial.bumpTexture.uScale = 1;
myMaterial.bumpTexture.vScale = 1;
myMaterial.bumpTexture.wAng = 1.5707963705062866;

myMaterial.backFaceCulling = false;
myMaterial.twoSidedLighting.backFaceCulling = true;


myMaterial.environmentIntensity = 1;

//material 1 ROOF
var roofMaterial1 = new BABYLON.PBRMaterial("roofMaterial1", scene);
var roofMaterial2 = new BABYLON.PBRMaterial("roofMaterial2", scene);
var roofMaterial3 = new BABYLON.PBRMaterial("roofMaterial3", scene);
var roofMaterial4 = new BABYLON.PBRMaterial("roofMaterial4", scene);
var roofMaterial5 = new BABYLON.PBRMaterial("roofMaterial5", scene);


//идфсл
roofMaterial1.albedoTexture  = new  BABYLON.Texture("models/roof_texture/Black_BaseColor.png", scene);
//roofMaterial4.albedoTexture  = new  BABYLON.Texture("models/roof_texture/Black_BaseColor.png", scene);
//roofMaterial2.albedoColor = new BABYLON.Color3(0.3,0.3,0.3);
//roofMaterial5.albedoColor = new BABYLON.Color3(0.3,0.3,0.3);

//gray
roofMaterial3.albedoTexture  = new  BABYLON.Texture("models/roof_texture/Gray_BaseColor.png", scene);

//red
roofMaterial2.albedoTexture  = new  BABYLON.Texture("models/roof_texture/Red_BaseColor.png", scene);
//roofMaterial5.albedoTexture  = new  BABYLON.Texture("models/roof_texture/Red_BaseColor.png", scene);


roofMaterial1.albedoColor = new BABYLON.Color3(0.3, 0.3, 0.3);
roofMaterial2.albedoColor = new BABYLON.Color3(0.7,0.20,0.10);
//roofMaterial5.albedoColor = new BABYLON.Color3(0.7,0.20,0.10);
roofMaterial3.albedoColor = new BABYLON.Color3(0.3, 0.3, 0.3);
roofMaterial4.albedoColor = new BABYLON.Color3(0.1, 0.1, 0.1);
//roofMaterial5.albedoColor = new BABYLON.Color3(1.0, 0.16, 0.0);
roofMaterial5.albedoColor = new BABYLON.Color3(0.95, 0.53, 0.28);
roofMaterial5.albedoColor = new BABYLON.Color3(0.893288887972507, 0.2474041117391939, 0.060778176913320416);



//1, 208 , 165
var roofBumpTexture = new  BABYLON.Texture("models/roof_texture/roof_normal.jpg", scene);
roofMaterial1.bumpTexture = roofBumpTexture;
roofMaterial2.bumpTexture = roofBumpTexture;
//roofMaterial3.bumpTexture = roofBumpTexture;
//roofMaterial4.bumpTexture = roofBumpTexture;
//roofMaterial5.bumpTexture = roofBumpTexture;

var roofLightmapTexture = new  BABYLON.Texture("models/roof_texture/roof_lightmap.jpg", scene);
roofMaterial1.lightmapTexture = roofLightmapTexture;
roofMaterial2.lightmapTexture = roofLightmapTexture;
//roofMaterial3.lightmapTexture = roofLightmapTexture;
//roofMaterial4.lightmapTexture = roofLightmapTexture;
//roofMaterial5.lightmapTexture = roofLightmapTexture;



roofMaterial1.useLightmapAsShadowmap = true;
roofMaterial2.useLightmapAsShadowmap = true;
//roofMaterial3.useLightmapAsShadowmap = true;
//roofMaterial4.useLightmapAsShadowmap = true;
//roofMaterial5.useLightmapAsShadowmap = true;

var coatBump = new BABYLON.Texture("models/roof_texture/RoofNormal.png", scene);

//roofMaterial4.clearCoat = new BABYLON.PBRClearCoatConfiguration(roofMaterial4);
//roofMaterial5.clearCoat = new BABYLON.PBRClearCoatConfiguration();


roofMaterial4.clearCoat.isEnabled = true;
roofMaterial5.clearCoat.isEnabled = true;

roofMaterial4.bumpTexture = coatBump;
roofMaterial5.bumpTexture = coatBump;

roofMaterial4.clearCoat.bumpTexture = coatBump;
roofMaterial5.clearCoat.bumpTexture = coatBump;

roofMaterial4.clearCoat.texture = coatBump;
roofMaterial5.clearCoat.texture = coatBump;


//var clearCoat = new BABYLON.PBRClearCoatConfiguration();
//clearCoat.bumpTexture = coatBump;
//clearCoat.bumpTexture = coatBump;
//clearCoat.texture = coatBump;

//roofMaterial4.clearCoat = clearCoat;
//roofMaterial4.clearCoat = clearCoat;

roofMaterial4.clearCoat.intensity = 0.9;
roofMaterial5.clearCoat.intensity = 0.9;

roofMaterial4.clearCoat.roughness = 0.26;
roofMaterial5.clearCoat.roughness = 0.26;
roofMaterial4.clearCoat.indexOfRefraction = 1.4;
roofMaterial5.clearCoat.indexOfRefraction = 1.4;






//roofMaterial1.bumpTexture = new  BABYLON.Texture("models/roof_texture/roof_normal.jpg", scene);
//roofMaterial2.bumpTexture = new  BABYLON.Texture("models/roof_texture/roof_normal.jpg", scene);
//roofMaterial3.bumpTexture = new  BABYLON.Texture("models/roof_texture/roof_normal.jpg", scene);
//roofMaterial4.bumpTexture = new  BABYLON.Texture("models/roof_texture/roof_normal.jpg", scene);
//roofMaterial5.bumpTexture = new  BABYLON.Texture("models/roof_texture/roof_normal.jpg", scene);






////////

//roofMaterial1.roughness = 0.85;
//roofMaterial2.roughness = 0.85;
//roofMaterial3.roughness = 0.85;
//roofMaterial4.roughness = 0.35;
//roofMaterial5.roughness = 0.35;


//roofMaterial1.metallic = 0.85;
//roofMaterial2.metallic = 0.85;
//roofMaterial3.metallic = 0.85;
//roofMaterial4.metallic = 0.65;
//roofMaterial5.metallic = 0.65;


roofMaterial1.roughness = 0.7;
roofMaterial2.roughness = 0.7;
roofMaterial3.roughness = 0.7;
roofMaterial4.roughness = 0.26;
roofMaterial5.roughness = 0.26;


roofMaterial1.metallic = 0.1;
roofMaterial2.metallic = 0.1;
roofMaterial3.metallic = 0.1;
roofMaterial4.metallic = 0.0;
roofMaterial5.metallic = 0.0;


roofMaterial1.backFaceCulling = false;
roofMaterial2.backFaceCulling = false;
roofMaterial3.backFaceCulling = false;
roofMaterial4.backFaceCulling = false;
roofMaterial5.backFaceCulling = false;








//env

var envTexture = new BABYLON.CubeTexture("models/environmentSpecular.env", scene);
//var envTexture = new BABYLON.CubeTexture("models/country.env", scene);


var hdrSkybox = BABYLON.Mesh.CreateBox("hdrSkyBox", 1000.0, scene);



var hdrSkyboxMaterial = new BABYLON.PBRMaterial("skyBox", scene);
hdrSkyboxMaterial.backFaceCulling = false;
hdrSkyboxMaterial.reflectionTexture = envTexture.clone();
hdrSkyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
hdrSkyboxMaterial.microSurface = 0.7;
hdrSkyboxMaterial.alpha = 0.3;
hdrSkyboxMaterial.disableLighting = true;
hdrSkybox.material = hdrSkyboxMaterial;
scene.environmentTexture = envTexture;
//scene.environmentIntensity = 0.55;


///////ground


var groundPlane = BABYLON.MeshBuilder.CreateBox("groundPlane", {height: 0.03, width: 1, depth: 1});
groundPlane.position.y=-0.03;
var groundMaterial = new BABYLON.PBRMaterial("groundMaterial", scene);

groundPlane.visibility=0.3;
groundPlane.visibility=1;
 //var myTexture  = new BABYLON.Texture("textures/texture.jpg", scene);

//myMaterial.albedoColor = new BABYLON.Color3(0,0,0);
//myMaterial.reflectivityColor=new BABYLON.Color3(1,1,1);

groundMaterial.albedoTexture  = new  BABYLON.Texture("models/tiles.jpg", scene);

groundMaterial.albedoColor = new BABYLON.Color3(0.9,0.9,0.5);//Bordeaux Color RGB (95,2,31)
//groundMaterial.reflectivityColor = new BABYLON.Color3(0.003, 0.003, 0.003);
//myMaterial.albedoTexture  = new BABYLON.Texture("textures/wall_pattern.jpg", scene);
//myMaterial.emissiveTexture = new BABYLON.Texture("textures/wall_pattern_light.jpg", scene);
//myMaterial.emissiveColor = new BABYLON.Color3(	0.64, 0.29, 0.18);

// myMaterial.bumpTexture = new BABYLON.Texture("textures/6.jpg", scene);
//myMaterial.diffuseTexture  = new BABYLON.Texture("textures/texture.jpg", scene);
 //myMaterial.emissiveTexture = new BABYLON.Texture("textures/texture.jpg", scene);
 //myMaterial.emissiveColor = new BABYLON.Color3.White();

groundMaterial.metallic = 0.3;
groundMaterial.roughness = 0.65;
groundMaterial.roughness = 0.65;


groundPlane.material = scene.getMaterialByName('groundMaterial');

groundPlane.material.bumpTexture = new  BABYLON.Texture("models/tiles_normal_map.jpg", scene);


//textures & roof


var roofBorder1 = BABYLON.MeshBuilder.CreateBox("roofBorder1", {height: 0.10, width: 1, depth: 1});
var roofBorder2 = BABYLON.MeshBuilder.CreateBox("roofBorder2", {height: 0.10, width: 1, depth: 1});
var roofBorder3 = BABYLON.MeshBuilder.CreateBox("roofBorder3", {height: 0.10, width: 1, depth: 1});
var roofBorder4 = BABYLON.MeshBuilder.CreateBox("roofBorder4", {height: 0.10, width: 1, depth: 1});

roofBorder1.scaling.z=0.05;
roofBorder2.scaling.z=0.05;
roofBorder3.scaling.x=0.05;
roofBorder4.scaling.x=0.05;



var roofPlane = BABYLON.MeshBuilder.CreateBox("roofPlane", {height: 0.01, width: 1, depth: 1});

var roofNew = new BABYLON.PBRMaterial("RoofTileMaterial_2", scene);
roofNew.albedoColor = new BABYLON.Color3(0.019607843831181526, 0.019607843831181526, 0.019607843831181526);//Bordeaux Color RGB (95,2,31)
roofNew.roughness = 0.85;


scene.getMaterialByName('RoofTileMaterial_2').clone('RoofTileMaterialFlat');
scene.getMaterialByName('RoofTileMaterial_2').clone('RoofTrimMaterial');

roofBorder1.material=scene.getMaterialByName('RoofTrimMaterial');
roofBorder2.material=scene.getMaterialByName('RoofTrimMaterial');
roofBorder3.material=scene.getMaterialByName('RoofTrimMaterial');
roofBorder4.material=scene.getMaterialByName('RoofTrimMaterial');


roofPlane.material=scene.getMaterialByName('RoofTileMaterialFlat');

scene.getMaterialByName('RoofTileMaterialFlat').albedoTexture =  new  BABYLON.Texture("models/roof_texture.jpg", scene);
scene.getMaterialByName('RoofTileMaterialFlat').bumpTexture = new  BABYLON.Texture("models/roof_texture_normal_map.jpg", scene);
scene.getMaterialByName('RoofTileMaterialFlat').metallic=0.8;
scene.getMaterialByName('RoofTileMaterialFlat').roughness=0.8;
scene.getMaterialByName('RoofTileMaterialFlat').albedoColor = new BABYLON.Color3(0.0,0.0,0.0);
/////




ArchetypeUI.load3DModelByPath("./models/canopy1/", "scene.gltf", "canopy1");
//ArchetypeUI.load3DModelByPath("./models/canopy2/", "scene.gltf", "canopy2");

ArchetypeUI.load3DModelByPath("./models/converted/", "balk_244mm.obj", "balk_0");
ArchetypeUI.load3DModelByPath("./models/converted/", "balk_100mm.obj", "1meter_balk");
ArchetypeUI.load3DModelByPath("./models/converted/", "balk_corner.obj", "balk_small_0");




//ArchetypeUI.load3DModelByPath("./models/converted/", "roof_080420223.obj", "1roof_left");

// ArchetypeUI.load3DModelByPath("./models/roof/day2/collect/resized/", "1.obj", "1roof_tile_0");
// ArchetypeUI.load3DModelByPath("./models/roof/day2/collect/resized/", "2.obj", "2roof_tile_0");
// ArchetypeUI.load3DModelByPath("./models/roof/day2/collect/resized/", "3.obj", "3roof_tile_0");
// ArchetypeUI.load3DModelByPath("./models/roof/day2/collect/resized/", "4.obj", "4roof_tile_0");
// ArchetypeUI.load3DModelByPath("./models/roof/day2/collect/resized/", "5.obj", "5roof_tile_0");

ArchetypeUI.load3DModelByPath("./models/roof_part3/", "roof_tile_3_1.obj", "1roof_tile_0");
ArchetypeUI.load3DModelByPath("./models/roof_part3/", "roof_tile_3_2.obj", "2roof_tile_0");
ArchetypeUI.load3DModelByPath("./models/roof_part3/", "roof_tile_3_3.obj", "3roof_tile_0");
ArchetypeUI.load3DModelByPath("./models/roof_part3/", "roof_tile_3_4.obj", "4roof_tile_0");
ArchetypeUI.load3DModelByPath("./models/roof_part3/", "roof_tile_3_5.obj", "5roof_tile_0");

ArchetypeUI.load3DModelByPath("./models/roof_tile_new/tile2/", "1.obj", "1roof_tile2_0");
ArchetypeUI.load3DModelByPath("./models/roof_tile_new/tile2/", "2.obj", "2roof_tile2_0");
ArchetypeUI.load3DModelByPath("./models/roof_tile_new/tile2/", "3.obj", "3roof_tile2_0");
ArchetypeUI.load3DModelByPath("./models/roof_tile_new/tile2/", "4.obj", "4roof_tile2_0");
ArchetypeUI.load3DModelByPath("./models/roof_tile_new/tile2/", "5.obj", "5roof_tile2_0");


//
ArchetypeUI.load3DModelByPath("./models/roof_tile_new/tile1/", "tile-01-1.obj", "1roof_tile1_0");
ArchetypeUI.load3DModelByPath("./models/roof_tile_new/tile1/", "tile-01-2.obj", "2roof_tile1_0");
ArchetypeUI.load3DModelByPath("./models/roof_tile_new/tile1/", "tile-01-3.obj", "3roof_tile1_0");
ArchetypeUI.load3DModelByPath("./models/roof_tile_new/tile1/", "tile-01-4.obj", "4roof_tile1_0");
ArchetypeUI.load3DModelByPath("./models/roof_tile_new/tile1/", "tile-01-5.obj", "5roof_tile1_0");

//ArchetypeUI.load3DModelByPath("./models/roof_part1/", "roof_tile_1_1_end.obj", "1roof_tile1_0_end");
//ArchetypeUI.load3DModelByPath("./models/roof_part1/", "roof_tile_1_2_end.obj", "2roof_tile1_0_end");
//ArchetypeUI.load3DModelByPath("./models/roof_part1/", "roof_tile_1_3_end.obj", "3roof_tile1_0_end");
//ArchetypeUI.load3DModelByPath("./models/roof_part1/", "roof_tile_1_4_end.obj", "4roof_tile1_0_end");
//ArchetypeUI.load3DModelByPath("./models/roof_part1/", "roof_tile_1_5_end.obj", "5roof_tile1_0_end");

ArchetypeUI.load3DModelByPath("./models/roof_tile_new/tile1-end/", "tile-01-1-side2.obj", "1roof_tile1_0_end");
ArchetypeUI.load3DModelByPath("./models/roof_tile_new/tile1-end/", "tile-01-2-side2.obj", "2roof_tile1_0_end");
ArchetypeUI.load3DModelByPath("./models/roof_tile_new/tile1-end/", "tile-01-3-side2.obj", "3roof_tile1_0_end");
ArchetypeUI.load3DModelByPath("./models/roof_tile_new/tile1-end/", "tile-01-4-side2.obj", "4roof_tile1_0_end");
ArchetypeUI.load3DModelByPath("./models/roof_tile_new/tile1-end/", "tile-01-5-side2.obj", "5roof_tile1_0_end");

ArchetypeUI.load3DModelByPath("./models/roof_tile_new/tile1-start/", "tile-01-1-side1.obj", "1roof_tile1_0_start");
ArchetypeUI.load3DModelByPath("./models/roof_tile_new/tile1-start/", "tile-01-2-side1.obj", "2roof_tile1_0_start");
ArchetypeUI.load3DModelByPath("./models/roof_tile_new/tile1-start/", "tile-01-3-side1.obj", "3roof_tile1_0_start");
ArchetypeUI.load3DModelByPath("./models/roof_tile_new/tile1-start/", "tile-01-4-side1.obj", "4roof_tile1_0_start");
ArchetypeUI.load3DModelByPath("./models/roof_tile_new/tile1-start/", "tile-01-5-side1.obj", "5roof_tile1_0_start");


//ArchetypeUI.load3DModelByPath("./models/roof_part1/", "roof_tile_1_1_start.obj", "1roof_tile1_0_start");
//ArchetypeUI.load3DModelByPath("./models/roof_part1/", "roof_tile_1_2_start.obj", "2roof_tile1_0_start");
//ArchetypeUI.load3DModelByPath("./models/roof_part1/", "roof_tile_1_3_start.obj", "3roof_tile1_0_start");
//ArchetypeUI.load3DModelByPath("./models/roof_part1/", "roof_tile_1_4_start.obj", "4roof_tile1_0_start");
//ArchetypeUI.load3DModelByPath("./models/roof_part1/", "roof_tile_1_5_start.obj", "5roof_tile1_0_start");



//ArchetypeUI.load3DModelByPath("./models/roof_part1/", "ridge_1.obj", "roof_ridge_1_0");
ArchetypeUI.load3DModelByPath("./models/roof_tile_new/stripe/", "1.obj", "roof_ridge_1_0");
ArchetypeUI.load3DModelByPath("./models/roof_tile_new/stripe/", "2.obj", "roof_ridge_2_0");
ArchetypeUI.load3DModelByPath("./models/roof_tile_new/stripe/", "3.obj", "roof_ridge_3_0");
ArchetypeUI.load3DModelByPath("./models/roof_tile_new/stripe/", "4.obj", "roof_ridge_4_0");
ArchetypeUI.load3DModelByPath("./models/roof_tile_new/stripe/", "5.obj", "roof_ridge_5_0");


var roofGam = new BABYLON.PBRMaterial("roofGam", window.scene);
roofGam.albedoColor = new BABYLON.Color3(0.1,0.1,0.1)
roofGam.metallic=0.3;
roofGam.roughness=0.5;
roofGam.backFaceCulling = false;




//ArchetypeUI.load3DModelByPath("./models/roof_part1/", "ridge_1_start.obj", "ridge_1_start");
//ArchetypeUI.load3DModelByPath("./models/roof_part1/", "ridge_1_end.obj"  , "ridge_1_end");






//ROOF side
ArchetypeUI.load3DModelByPath("./models/roof_side/", "1.obj", "1roof_side_left");
ArchetypeUI.load3DModelByPath("./models/roof_side/", "2.obj", "2roof_side_left");
ArchetypeUI.load3DModelByPath("./models/roof_side/", "3.obj", "3roof_side_left");
ArchetypeUI.load3DModelByPath("./models/roof_side/", "4.obj", "4roof_side_left");
ArchetypeUI.load3DModelByPath("./models/roof_side/", "5.obj", "5roof_side_left");

ArchetypeUI.load3DModelByPath("./models/roof_side/", "1_small.obj", "1roof_side_left_small");
ArchetypeUI.load3DModelByPath("./models/roof_side/", "2_small.obj", "2roof_side_left_small");
ArchetypeUI.load3DModelByPath("./models/roof_side/", "3_small.obj", "3roof_side_left_small");
ArchetypeUI.load3DModelByPath("./models/roof_side/", "4_small.obj", "4roof_side_left_small");
ArchetypeUI.load3DModelByPath("./models/roof_side/", "5_small.obj", "5roof_side_left_small");

ArchetypeUI.load3DModelByPath("./models/roof_tile_new/beam/", "1.obj", "1roof_side_left_3");
ArchetypeUI.load3DModelByPath("./models/roof_tile_new/beam/", "2.obj", "2roof_side_left_3");
ArchetypeUI.load3DModelByPath("./models/roof_tile_new/beam/", "3.obj", "3roof_side_left_3");
ArchetypeUI.load3DModelByPath("./models/roof_tile_new/beam/", "4.obj", "4roof_side_left_3");
ArchetypeUI.load3DModelByPath("./models/roof_tile_new/beam/", "5.obj", "5roof_side_left_3");



//roof bulk
ArchetypeUI.load3DModelByPath("./models/roof_bulk/", "m1.obj", "1roof_bulk_0");
ArchetypeUI.load3DModelByPath("./models/roof_bulk/", "m2.obj", "2roof_bulk_0");
ArchetypeUI.load3DModelByPath("./models/roof_bulk/", "m3.obj", "3roof_bulk_0");
ArchetypeUI.load3DModelByPath("./models/roof_bulk/", "m4.obj", "4roof_bulk_0");
ArchetypeUI.load3DModelByPath("./models/roof_bulk/", "m5.obj", "5roof_bulk_0");


///roof wood
ArchetypeUI.load3DModelByPath("./models/roof_wood/", "1.obj", "1roof_wood");
ArchetypeUI.load3DModelByPath("./models/roof_wood/", "2.obj", "2roof_wood");
ArchetypeUI.load3DModelByPath("./models/roof_wood/", "3.obj", "3roof_wood");
ArchetypeUI.load3DModelByPath("./models/roof_wood/", "4.obj", "4roof_wood");
ArchetypeUI.load3DModelByPath("./models/roof_wood/", "5.obj", "5roof_wood");

//walls 2.775
ArchetypeUI.load3DModelByPath("./models/wall_small/", "wall_small.obj", "wall_small_0");
ArchetypeUI.load3DModelByPath("./models/wall_small/", "wall_small_carcas.obj", "wall_small_carcas_0");
ArchetypeUI.load3DModelByPath("./models/wall_trap/", "wall_trap.obj", "wall_trap_0");
ArchetypeUI.load3DModelByPath("./models/wall_trap/", "wall_trap_carcas.obj", "wall_trap_0_carcas");


ArchetypeUI.load3DModelByPath("./models/wall_triangle/", "wall_roof_1.obj", "wall_roof_1");
ArchetypeUI.load3DModelByPath("./models/wall_triangle/", "wall_roof_1_carcas.obj", "wall_roof_carcas_1");
ArchetypeUI.load3DModelByPath("./models/wall_triangle/", "wall_roof_2.obj", "wall_roof_2");
ArchetypeUI.load3DModelByPath("./models/wall_triangle/", "wall_roof_2_carcas.obj", "wall_roof_carcas_2");
ArchetypeUI.load3DModelByPath("./models/wall_triangle/", "wall_roof_3.obj", "wall_roof_3");
ArchetypeUI.load3DModelByPath("./models/wall_triangle/", "wall_roof_3_carcas.obj", "wall_roof_carcas_3");
ArchetypeUI.load3DModelByPath("./models/wall_triangle/", "wall_roof_4.obj", "wall_roof_4");
ArchetypeUI.load3DModelByPath("./models/wall_triangle/", "wall_roof_4_carcas.obj", "wall_roof_carcas_4");
ArchetypeUI.load3DModelByPath("./models/wall_triangle/", "wall_roof_5.obj", "wall_roof_5");
ArchetypeUI.load3DModelByPath("./models/wall_triangle/", "wall_roof_5_carcas.obj", "wall_roof_carcas_5");


//scene.glb
ArchetypeUI.load3DModelByPath("./models/elements_house/", "zhaluzi.obj", "zhaluzi");

ArchetypeUI.load3DModelByPath("./models/element_space/", "window_2.obj", "window_2");
ArchetypeUI.load3DModelByPath("./models/element_space/", "window_glass_2.obj", "window_glass_2");

ArchetypeUI.load3DModelByPath("./models/element_space/", "window_1.obj", "window_1");
ArchetypeUI.load3DModelByPath("./models/element_space/", "window_glass_1.obj", "window_glass_1");

//ArchetypeUI.load3DModelByPath("./models/element_space/", "door2m.obj", "door2m");
//ArchetypeUI.load3DModelByPath("./models/element_space/", "door2m_glass.obj", "door2m_glass");

//ArchetypeUI.load3DModelByPath("./models/element_space/", "door_2.obj", "door2m");
//ArchetypeUI.load3DModelByPath("./models/element_space/", "door_2_glass.obj", "door2m_glass");

ArchetypeUI.load3DModelByPath("./models/element_space/new/", "door2m.obj", "door2m");
ArchetypeUI.load3DModelByPath("./models/element_space/new/", "door2m_glass.obj", "door2m_glass");

ArchetypeUI.load3DModelByPath("./models/element_space/new/", "door3m.obj", "door3m");
ArchetypeUI.load3DModelByPath("./models/element_space/new/", "door3m_glass.obj", "door3m_glass");

ArchetypeUI.load3DModelByPath("./models/element_space/new/", "door4m.obj", "door4m");
ArchetypeUI.load3DModelByPath("./models/element_space/new/", "door4m_glass.obj", "door4m_glass");




//wall big
ArchetypeUI.load3DModelByPath("./models/elements_house/", "wall_big.obj", "wall_big");
ArchetypeUI.load3DModelByPath("./models/elements_house/", "wall_big_carcas.obj", "wall_big_carcas");



ArchetypeUI.load3DModelByPath("./models/elements_house/", "door_single.glb", "door_single");
ArchetypeUI.load3DModelByPath("./models/elements_house/", "door_double.glb", "door_double");
ArchetypeUI.load3DModelByPath("./models/elements_house/", "window.obj", "window");



ArchetypeUI.load3DModelByPath("./models/waterpipe/", "end_left.obj", "end_left");
ArchetypeUI.load3DModelByPath("./models/waterpipe/", "end_right.obj", "end_right");
ArchetypeUI.load3DModelByPath("./models/waterpipe/", "holder_big.obj", "holder_big");
ArchetypeUI.load3DModelByPath("./models/waterpipe/", "holder_small.obj", "holder_small");
ArchetypeUI.load3DModelByPath("./models/waterpipe/", "keeper.obj", "keeper");
ArchetypeUI.load3DModelByPath("./models/waterpipe/", "pipe_horisontal.obj", "pipe_horisontal");
ArchetypeUI.load3DModelByPath("./models/waterpipe/", "pipe_vertical.obj", "pipe_vertical");

ArchetypeUI.load3DModelByPath("./models/waterpipe/", "pipe_vertical_back.obj", "pipe_vertical_back");
ArchetypeUI.load3DModelByPath("./models/waterpipe/", "keeper_back.obj", "keeper_back");





//importedMeshes[0].clone(importedNewName);
//scene.getMeshByName('barkk').clone('bark_0');



//canvas.addEventListener("pointerdown", onPointerDown, false);
//canvas.addEventListener("pointerup", onPointerUp, false);



return scene;
};

window.scene = createScene();


//ArchetypeUI.load3DModelByPath("./models/canopy1/", "scene.gltf", "canopy3");
//ArchetypeUI.load3DModelByPath("./models/canopy1/", "scene.gltf", "canopy2");

window.engine.runRenderLoop(function(){
window.scene.render();
});

window.addEventListener('resize', function(){

window.engine.resize();
});

});
function setColor()
{
if (window.appState['color1']==0)
{
  for(let i=0;i<=17;i++)
  {
    window.scene.getMeshByName('sec_' + i + '_wall').material=window.scene.getMaterialByName('wood_dark_0');
  }


window.scene.getMeshByName('wall_roof_1').material=window.scene.getMaterialByName('wood_dark_1');
window.scene.getMeshByName('wall_roof_2').material=window.scene.getMaterialByName('wood_dark_1');
window.scene.getMeshByName('wall_roof_3').material=window.scene.getMaterialByName('wood_dark_1');
window.scene.getMeshByName('wall_roof_4').material=window.scene.getMaterialByName('wood_dark_1');
window.scene.getMeshByName('wall_roof_5').material=window.scene.getMaterialByName('wood_dark_1');

window.scene.getMeshByName('wall_roof_clone_1').material=window.scene.getMaterialByName('wood_dark_1');
window.scene.getMeshByName('wall_roof_clone_2').material=window.scene.getMaterialByName('wood_dark_1');
window.scene.getMeshByName('wall_roof_clone_3').material=window.scene.getMaterialByName('wood_dark_1');
window.scene.getMeshByName('wall_roof_clone_4').material=window.scene.getMaterialByName('wood_dark_1');
window.scene.getMeshByName('wall_roof_clone_5').material=window.scene.getMaterialByName('wood_dark_1');

window.scene.getMeshByName('wall_trap_0').material=window.scene.getMaterialByName('wood_dark_0');
window.scene.getMeshByName('wall_trap_1').material=window.scene.getMaterialByName('wood_dark_0');

window.scene.getMeshByName('house1_trap').material=window.scene.getMaterialByName('wood_dark_0');

window.scene.getMeshByName('wall_house1_front').material=window.scene.getMaterialByName('wood_dark_0');
window.scene.getMeshByName('wall_house1_back').material=window.scene.getMaterialByName('wood_dark_0');
window.scene.getMeshByName('wall_house1_left').material=window.scene.getMaterialByName('wood_dark_0');
window.scene.getMeshByName('wall_house1_right').material=window.scene.getMaterialByName('wood_dark_0');

window.scene.getMeshByName('house2_trap').material=window.scene.getMaterialByName('wood_dark_0');

window.scene.getMeshByName('wall_house2_front').material=window.scene.getMaterialByName('wood_dark_0');
window.scene.getMeshByName('wall_house2_back').material=window.scene.getMaterialByName('wood_dark_0');
window.scene.getMeshByName('wall_house2_left').material=window.scene.getMaterialByName('wood_dark_0');
window.scene.getMeshByName('wall_house2_right').material=window.scene.getMaterialByName('wood_dark_0');


for (let i=1; i<=9; i++)
{
window.scene.getMeshByName('wall_small_'  + i).material=window.scene.getMaterialByName('wood_dark_0');
}

for(let i=1;i<=5;i++)
{
window.scene.getMeshByName('house1_wall_roof_' + i ).material=window.scene.getMaterialByName('wood_dark_1');
window.scene.getMeshByName('house2_wall_roof_' + i ).material=window.scene.getMaterialByName('wood_dark_1');
}


}






if (window.appState['color1']==1)
{

  for(let i=0;i<=17;i++)
  {
    window.scene.getMeshByName('sec_' + i + '_wall').material=window.scene.getMaterialByName('Wood_Material');
  }

window.scene.getMeshByName('wall_roof_1').material=window.scene.getMaterialByName('Wood_Material_1');
window.scene.getMeshByName('wall_roof_2').material=window.scene.getMaterialByName('Wood_Material_1');
window.scene.getMeshByName('wall_roof_3').material=window.scene.getMaterialByName('Wood_Material_1');
window.scene.getMeshByName('wall_roof_4').material=window.scene.getMaterialByName('Wood_Material_1');
window.scene.getMeshByName('wall_roof_5').material=window.scene.getMaterialByName('Wood_Material_1');

window.scene.getMeshByName('wall_roof_clone_1').material=window.scene.getMaterialByName('Wood_Material_1');
window.scene.getMeshByName('wall_roof_clone_2').material=window.scene.getMaterialByName('Wood_Material_1');
window.scene.getMeshByName('wall_roof_clone_3').material=window.scene.getMaterialByName('Wood_Material_1');
window.scene.getMeshByName('wall_roof_clone_4').material=window.scene.getMaterialByName('Wood_Material_1');
window.scene.getMeshByName('wall_roof_clone_5').material=window.scene.getMaterialByName('Wood_Material_1');

window.scene.getMeshByName('wall_trap_0').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_trap_1').material=window.scene.getMaterialByName('Wood_Material');

window.scene.getMeshByName('house1_trap').material=window.scene.getMaterialByName('Wood_Material');

window.scene.getMeshByName('wall_house1_front').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_house1_back').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_house1_left').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_house1_right').material=window.scene.getMaterialByName('Wood_Material');

window.scene.getMeshByName('house2_trap').material=window.scene.getMaterialByName('Wood_Material');

window.scene.getMeshByName('wall_house2_front').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_house2_back').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_house2_left').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_house2_right').material=window.scene.getMaterialByName('Wood_Material');







for (let i=1; i<=9; i++)
{
window.scene.getMeshByName('wall_small_'  + i).material=window.scene.getMaterialByName('Wood_Material');
}

for(let i=1;i<=5;i++)
{
window.scene.getMeshByName('house1_wall_roof_' + i ).material=window.scene.getMaterialByName('Wood_Material_1');
window.scene.getMeshByName('house2_wall_roof_' + i ).material=window.scene.getMaterialByName('Wood_Material_1');

}



}


///2




if (window.appState['color2']==0)
{
  for(let i=0;i<=17;i++)
  {
    window.scene.getMeshByName('sec_' + i + '_wall2').material=window.scene.getMaterialByName('wood_dark_0');
  }


window.scene.getMeshByName('wall_trap_0_inside').material=window.scene.getMaterialByName('wood_dark_0');
window.scene.getMeshByName('wall_trap_1_inside').material=window.scene.getMaterialByName('wood_dark_0');

window.scene.getMeshByName('house1_trap_inside').material=window.scene.getMaterialByName('wood_dark_0');
window.scene.getMeshByName('house2_trap_inside').material=window.scene.getMaterialByName('wood_dark_0');


window.scene.getMeshByName('wall_house1_front_inside').material=window.scene.getMaterialByName('wood_dark_0');
window.scene.getMeshByName('wall_house1_back_inside').material=window.scene.getMaterialByName('wood_dark_0');
window.scene.getMeshByName('wall_house1_left_inside').material=window.scene.getMaterialByName('wood_dark_0');
window.scene.getMeshByName('wall_house1_right_inside').material=window.scene.getMaterialByName('wood_dark_0');

window.scene.getMeshByName('wall_house2_front_inside').material=window.scene.getMaterialByName('wood_dark_0');
window.scene.getMeshByName('wall_house2_back_inside').material=window.scene.getMaterialByName('wood_dark_0');
window.scene.getMeshByName('wall_house2_left_inside').material=window.scene.getMaterialByName('wood_dark_0');
window.scene.getMeshByName('wall_house2_right_inside').material=window.scene.getMaterialByName('wood_dark_0');



for (let i=1; i<=9; i++)
{
  window.scene.getMeshByName('wall_small_inside_' + i).material=window.scene.getMaterialByName('wood_dark_0');
}

for(let i=1;i<=5;i++)
{
window.scene.getMeshByName('house1_wall_roof_inside_' + i ).material=window.scene.getMaterialByName('wood_dark_1');
window.scene.getMeshByName('house2_wall_roof_inside_' + i ).material=window.scene.getMaterialByName('wood_dark_1');

window.scene.getMeshByName('wall_roof_inside_' + i ).material=window.scene.getMaterialByName('wood_dark_1');
window.scene.getMeshByName('wall_roof_clone_inside_' + i ).material=window.scene.getMaterialByName('wood_dark_1');


}


}

if (window.appState['color2']==1)
{

  for(let i=0;i<=17;i++)
  {
    window.scene.getMeshByName('sec_' + i + '_wall2').material=window.scene.getMaterialByName('Wood_Material');
  }


window.scene.getMeshByName('wall_trap_0_inside').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_trap_1_inside').material=window.scene.getMaterialByName('Wood_Material');

window.scene.getMeshByName('house1_trap_inside').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('house2_trap_inside').material=window.scene.getMaterialByName('Wood_Material');


window.scene.getMeshByName('wall_house1_front_inside').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_house1_back_inside').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_house1_left_inside').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_house1_right_inside').material=window.scene.getMaterialByName('Wood_Material');

window.scene.getMeshByName('wall_house2_front_inside').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_house2_back_inside').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_house2_left_inside').material=window.scene.getMaterialByName('Wood_Material');
window.scene.getMeshByName('wall_house2_right_inside').material=window.scene.getMaterialByName('Wood_Material');


for (let i=1; i<=9; i++)
{
  window.scene.getMeshByName('wall_small_inside_' + i).material=window.scene.getMaterialByName('Wood_Material');
}

for(let i=1;i<=5;i++)
{
window.scene.getMeshByName('house1_wall_roof_inside_' + i ).material=window.scene.getMaterialByName('Wood_Material_1');
window.scene.getMeshByName('house2_wall_roof_inside_' + i ).material=window.scene.getMaterialByName('Wood_Material_1');


window.scene.getMeshByName('wall_roof_inside_' + i ).material=window.scene.getMaterialByName('Wood_Material_1');
window.scene.getMeshByName('wall_roof_clone_inside_' + i ).material=window.scene.getMaterialByName('Wood_Material_1');


}



}


//buildRound();
}











function setWallsInside()
{
  if (document.getElementById("wallInside").checked == false)
{
window.appState['wallInside']=false;
document.getElementById('color2optionsDiv').style.display='none';
}

  if (document.getElementById("wallInside").checked == true)
{
window.appState['wallInside']=true;
document.getElementById('color2optionsDiv').style.display='block';
}

buildRound();


}


function color1_1Select()
{
  document.getElementById('optionColor1_1').classList.add('optionColorActive');
  document.getElementById('optionColor1_1').classList.remove('optionColorInactive');

  document.getElementById('optionColor1_2').classList.add('optionColorInactive');
  document.getElementById('optionColor1_2').classList.remove('optionColorActive');

  document.getElementById('color1_1Checkbox').classList.add('optionColorCheckboxActive');
  document.getElementById('color1_1Checkbox').classList.remove('optionColorCheckboxInative');

  document.getElementById('color1_2Checkbox').classList.add('optionColorCheckboxInative');
  document.getElementById('color1_2Checkbox').classList.remove('optionColorCheckboxActive');

window.appState['color1']=0;
setColor();
buildRound();
}


function color1_2Select()
{
  document.getElementById('optionColor1_2').classList.add('optionColorActive');
  document.getElementById('optionColor1_2').classList.remove('optionColorInactive');

  document.getElementById('optionColor1_1').classList.add('optionColorInactive');
  document.getElementById('optionColor1_1').classList.remove('optionColorActive');

  document.getElementById('color1_2Checkbox').classList.add('optionColorCheckboxActive');
  document.getElementById('color1_2Checkbox').classList.remove('optionColorCheckboxInative');

  document.getElementById('color1_1Checkbox').classList.add('optionColorCheckboxInative');
  document.getElementById('color1_1Checkbox').classList.remove('optionColorCheckboxActive');

window.appState['color1']=1;
setColor();
buildRound();
}


function color2_1Select()
{
  document.getElementById('optionColor2_1').classList.add('optionColorActive');
  document.getElementById('optionColor2_1').classList.remove('optionColorInactive');

  document.getElementById('optionColor2_2').classList.add('optionColorInactive');
  document.getElementById('optionColor2_2').classList.remove('optionColorActive');

  document.getElementById('color2_1Checkbox').classList.add('optionColorCheckboxActive');
  document.getElementById('color2_1Checkbox').classList.remove('optionColorCheckboxInative');

  document.getElementById('color2_2Checkbox').classList.add('optionColorCheckboxInative');
  document.getElementById('color2_2Checkbox').classList.remove('optionColorCheckboxActive');

window.appState['color2']=0;
setColor();
buildRound();
}


function color2_2Select()
{
  document.getElementById('optionColor2_2').classList.add('optionColorActive');
  document.getElementById('optionColor2_2').classList.remove('optionColorInactive');

  document.getElementById('optionColor2_1').classList.add('optionColorInactive');
  document.getElementById('optionColor2_1').classList.remove('optionColorActive');

  document.getElementById('color2_2Checkbox').classList.add('optionColorCheckboxActive');
  document.getElementById('color2_2Checkbox').classList.remove('optionColorCheckboxInative');

  document.getElementById('color2_1Checkbox').classList.add('optionColorCheckboxInative');
  document.getElementById('color2_1Checkbox').classList.remove('optionColorCheckboxActive');

window.appState['color2']=1;
setColor();
buildRound();
}
window.appState=[];

window.appState['fullscreen']=false;

window.appState['widthLast']=null;
window.appState['deepthLast']=null;

window.appState['width']=5000;
//window.appState['width']=4000;
window.appState['deepth']=3000;


window.appState['sectionsNumber']=0;


window.appState['uiSpaceID'] = false;
window.appState['uiSpaceUIEnabled'] = false;

window.appState['rooftype']=0;
//window.appState['rooftype']=1;
//window.appState['rooftype']=1;


window.appState['roofcolor']=1;
window.appState['waterpipe']=0;

window.appState['uiMenu1']=0;
window.appState['uiMenu2']=0;
window.appState['uiMenu3']=0;
window.appState['uiMenu4']=0;
window.appState['uiMenu5']=0;
window.appState['uiMenu6']=0;
window.appState['uiMenu7']=0;
window.appState['uiMenu8']=0;
window.appState['uiMenu9']=0;

window.appState['overhangLeft']=200;
window.appState['overhangRight']=200;
window.appState['overhangFront']=200;
window.appState['overhangBack']=200;


window.appState['currentDragMesh']='';

window.appState['house1on']=false;
window.appState['house2on']=false;

window.appState['house1width']=3000;
window.appState['house2width']=3000;


window.appState['color1']=0;
window.appState['color2']=0;
window.appState['wallInside']=false;

///
//window.appState['rooftype']=1;
//window.appState['waterpipe']=1;
//window.appState['width']=5500;




function buildRound()
{

var x = window.appState['width'];
var z = window.appState['deepth'];

var zBack=z/2;


/////

var quantity=Math.floor(x/4000)+2;
if (x % 4000 ==0) quantity = x/4000+1;
//console.log(x % 3500);
if (x<4000)     quantity = 2;
var sectionWidth=x/(quantity-1);

window.scene.getMeshByName("balk_center_house1").setEnabled(false);
window.scene.getMeshByName("balk_center_house2").setEnabled(false);


if (window.appState['house1on']==true && window.appState['house2on']==false)
{
let middleX = x - window.appState['house1width'];
quantity=Math.floor(middleX/4000) + 2;
if (middleX % 4000 ==0) quantity = middleX/4000 + 1;
if (middleX<4000)  quantity = 2;
sectionWidth= middleX/(quantity - 1);
// add store roof_bulk
quantity = quantity + 1;
}

if (window.appState['house1on']==false && window.appState['house2on']==true)
{
  let middleX = x - window.appState['house2width'];
  quantity=Math.floor(middleX/4000) + 2;
  if (middleX % 4000 ==0) quantity = middleX/4000 + 1;
  if (middleX<4000)  quantity = 2;
  sectionWidth= middleX/(quantity - 1);
  // add store roof_bulk
  quantity = quantity + 1;

}

if (window.appState['house1on']==true && window.appState['house2on']==true)
{

  let middleX = x - window.appState['house1width'] - window.appState['house2width'];
  quantity=Math.floor(middleX/4000) + 2;
  if (middleX % 4000 ==0) quantity = middleX/4000 + 1;
  if (middleX<4000)  quantity = 2;
  sectionWidth= middleX/(quantity - 1);
  // add store roof_bulk
  quantity = quantity + 2;

}


////



//alert(sectionWidth + ' x '+ quantity);
var xStart=(x/2)*-0.001;

//if(quantity>7) quantity=7;

//no more six
var shiftZ;
if(window.appState['rooftype']==1) shiftZ=1; else shiftZ=0;


//roof BALK

//window.scene.getMeshByName('1meter_balk_vertical_left').position=new BABYLON.Vector3(-0.075 + xStart, 1.7+0.075, (zBack)*0.001);
//window.scene.getMeshByName('1meter_balk_vertical_right').position=new BABYLON.Vector3(-0.075 + xStart -(sectionWidth*0.001)/1+ quantity * (sectionWidth*0.001), 1.7+0.075, (zBack)*0.001);
window.scene.getMeshByName('1meter_balk_vertical_left').position=new BABYLON.Vector3(xStart,  2.2+0.075, (zBack*-1)*0.001);
window.scene.getMeshByName('1meter_balk_vertical_right').position=new BABYLON.Vector3(xStart *-1,  2.2+0.075, (zBack*-1)*0.001);
window.scene.getMeshByName('1meter_balk_vertical_left').scaling.x  = z * 0.001 - shiftZ;
window.scene.getMeshByName('1meter_balk_vertical_right').scaling.x = z * 0.001 - shiftZ;







let roofBalkShift=0.08;
let roofFlatShiftLeft=window.appState['overhangLeft']*0.001 + roofBalkShift;
let roofFlatShiftRight=window.appState['overhangRight']*0.001  + roofBalkShift;
let roofFlatShiftFront=window.appState['overhangFront']*0.001  + roofBalkShift;
let roofFlatShiftBack=window.appState['overhangBack']*0.001  + roofBalkShift;










if (window.appState['house1on']==false && window.appState['house2on']==false)
{

for(let i = 1; i<=quantity; i++)
{
window.scene.getMeshByName('balk_front_' + i).position=new BABYLON.Vector3(xStart -(sectionWidth*0.001)/1+ i * (sectionWidth*0.001), 0, (zBack*-1)*0.001 +  0.075);
if (window.appState['rooftype']==1)
window.scene.getMeshByName('balk_back_' + i).position= new BABYLON.Vector3(xStart -(sectionWidth*0.001)/1+ i * (sectionWidth*0.001), 0, (zBack)*0.001-shiftZ - 0.075);
if (window.appState['rooftype']==0)
window.scene.getMeshByName('balk_back_' + i).position= new BABYLON.Vector3(xStart -(sectionWidth*0.001)/1+ i * (sectionWidth*0.001), 0, (zBack)*0.001-shiftZ - 0.075);

//small vertiсal balks
window.scene.getMeshByName('balk_roof_' + i).position= new BABYLON.Vector3(xStart -(sectionWidth*0.001)/1+ i * (sectionWidth*0.001), 0, (zBack*1)*0.001  - 0.075);


//
let smallYshift=0.05;
let fringeXOffset=0;
//if (i==1) fringeXOffset = -0.075;
//if (i==quantity-1) fringeXOffset = 0.075;

window.scene.getMeshByName('balk_small_back_left_' + i).position=new BABYLON.Vector3(fringeXOffset + xStart -(sectionWidth*0.001)/1+ i * (sectionWidth*0.001), 0+smallYshift, (zBack)*0.001-shiftZ - 0.075);
window.scene.getMeshByName('balk_small_back_left_' + i).rotation=new BABYLON.Vector3(0, Math.PI/2, 0);
window.scene.getMeshByName('balk_small_back_right_' + i).position=new BABYLON.Vector3(fringeXOffset + xStart -(sectionWidth*0.001)/1+ i * (sectionWidth*0.001), 0+smallYshift, (zBack)*0.001-shiftZ - 0.075);
window.scene.getMeshByName('balk_small_back_right_' + i).rotation=new BABYLON.Vector3(0, Math.PI/-2 , 0);

window.scene.getMeshByName('balk_small_front_left_' + i).position=new BABYLON.Vector3(fringeXOffset + xStart -(sectionWidth*0.001)/1+ i * (sectionWidth*0.001), 0+smallYshift, (zBack*-1)*0.001 + 0.075);
window.scene.getMeshByName('balk_small_front_left_' + i).rotation=new BABYLON.Vector3(0, Math.PI/2, 0);
window.scene.getMeshByName('balk_small_front_right_' + i).position=new BABYLON.Vector3(fringeXOffset + xStart -(sectionWidth*0.001)/1+ i * (sectionWidth*0.001), 0+smallYshift, (zBack*-1)*0.001 + 0.075);
window.scene.getMeshByName('balk_small_front_right_' + i).rotation=new BABYLON.Vector3(0, Math.PI/-2 , 0);
//




// horisontal barks for roof
window.scene.getMeshByName('1meter_balk_front_' + i).position=new BABYLON.Vector3(fringeXOffset + -0.075 + xStart -(sectionWidth*0.001)/1+ i * (sectionWidth*0.001), 2.2+0.075, (zBack*-1)*0.001 + 0.075);
window.scene.getMeshByName('1meter_balk_back_' + i).position= new BABYLON.Vector3(fringeXOffset + -0.075 + xStart -(sectionWidth*0.001)/1+ i * (sectionWidth*0.001), 2.2+0.075, (zBack)*0.001-shiftZ - 0.075);
window.scene.getMeshByName('1meter_balk_roof_' + i).position= new BABYLON.Vector3(fringeXOffset + -0.075 + xStart -(sectionWidth*0.001)/1+ i * (sectionWidth*0.001), 1.66+0.075, (zBack)*0.001 - 0.075);

let xShiftScale = 0.15;
window.scene.getMeshByName('1meter_balk_front_' + i).scaling.x = sectionWidth * 0.001  + 0.15;
window.scene.getMeshByName('1meter_balk_back_' + i).scaling.x  = sectionWidth * 0.001  + 0.15;
window.scene.getMeshByName('1meter_balk_roof_' + i).scaling.x  = sectionWidth * 0.001  + 0.15;

//back roof wall
window.scene.getMeshByName('wall_small_carcas_' + i).position=new BABYLON.Vector3(0.075-fringeXOffset + xStart -(sectionWidth*0.001)/1+ i * (sectionWidth*0.001), 0, (zBack*1)*0.001 - 0.075);
window.scene.getMeshByName('wall_small_'  + i).position=new BABYLON.Vector3(0.075-fringeXOffset + xStart -(sectionWidth*0.001)/1+ i * (sectionWidth*0.001), 0, (zBack*1)*0.001 - 0.075);

window.scene.getMeshByName('wall_small_carcas_'  + i).scaling.x=((sectionWidth-150)/1000)/2.775;
window.scene.getMeshByName('wall_small_'  + i).scaling.x=((sectionWidth-150)/1000)/2.775;

window.scene.getMeshByName('wall_small_inside_'  + i).position=new BABYLON.Vector3(0.075-fringeXOffset + xStart -(sectionWidth*0.001)/1+ i * (sectionWidth*0.001), 0, (zBack*1)*0.001 - 0.075);
window.scene.getMeshByName('wall_small_inside_'  + i).scaling.x=((sectionWidth-150)/1000)/2.775;

}
}


///////////














if (window.appState['house1on']==true || window.appState['house2on']==true)
{
let currentSectionWidth = sectionWidth;
let currentXposition;
let firstSectionWidth;
let lastSectionWidth;

if (window.appState['house1on'] == true)
firstSectionWidth = window.appState['house1width'];
else firstSectionWidth = currentSectionWidth;



//if ()

for(let i = 1; i<=quantity; i++)
{


if (i == 1)
{
currentXposition = xStart;
}

if (i > 1 && i < quantity)
{
if (window.appState['house1on'] == true)  currentXposition = xStart  + (firstSectionWidth*0.001) + ((i - 2) * (currentSectionWidth*0.001));
if (window.appState['house1on'] == false) currentXposition = xStart  + (firstSectionWidth*0.001) + ((i - 2) * (currentSectionWidth*0.001));

}

if (i == quantity)
{
currentXposition = xStart * -1;
}



window.scene.getMeshByName('balk_front_' + i).position=
new BABYLON.Vector3(currentXposition, 0, (zBack*-1)*0.001 +  0.075);
if (window.appState['rooftype']==1)
window.scene.getMeshByName('balk_back_' + i).position= new BABYLON.Vector3(currentXposition, 0, (zBack)*0.001-shiftZ - 0.075);
if (window.appState['rooftype']==0)
window.scene.getMeshByName('balk_back_' + i).position= new BABYLON.Vector3(currentXposition, 0, (zBack)*0.001-shiftZ - 0.075);

//small vertiсal balks
window.scene.getMeshByName('balk_roof_' + i).position= new BABYLON.Vector3(currentXposition, 0, (zBack*1)*0.001  - 0.075);


//
let smallYshift=0.05;
let fringeXOffset=0;
//if (i==1) fringeXOffset = -0.075;
//if (i==quantity-1) fringeXOffset = 0.075;

window.scene.getMeshByName('balk_small_back_left_' + i).position=new BABYLON.Vector3(fringeXOffset + currentXposition, 0+smallYshift, (zBack)*0.001-shiftZ - 0.075);
window.scene.getMeshByName('balk_small_back_left_' + i).rotation=new BABYLON.Vector3(0, Math.PI/2, 0);
window.scene.getMeshByName('balk_small_back_right_' + i).position=new BABYLON.Vector3(fringeXOffset + currentXposition, 0+smallYshift, (zBack)*0.001-shiftZ - 0.075);
window.scene.getMeshByName('balk_small_back_right_' + i).rotation=new BABYLON.Vector3(0, Math.PI/-2 , 0);

window.scene.getMeshByName('balk_small_front_left_' + i).position=new BABYLON.Vector3(fringeXOffset + currentXposition, 0+smallYshift, (zBack*-1)*0.001 + 0.075);
window.scene.getMeshByName('balk_small_front_left_' + i).rotation=new BABYLON.Vector3(0, Math.PI/2, 0);
window.scene.getMeshByName('balk_small_front_right_' + i).position=new BABYLON.Vector3(fringeXOffset + currentXposition, 0+smallYshift, (zBack*-1)*0.001 + 0.075);
window.scene.getMeshByName('balk_small_front_right_' + i).rotation=new BABYLON.Vector3(0, Math.PI/-2 , 0);
//


// horisontal barks for roof
window.scene.getMeshByName('1meter_balk_front_' + i).position=new BABYLON.Vector3(fringeXOffset + -0.075 + currentXposition, 2.2+0.075, (zBack*-1)*0.001 + 0.075);
window.scene.getMeshByName('1meter_balk_back_' + i).position= new BABYLON.Vector3(fringeXOffset + -0.075 + currentXposition, 2.2+0.075, (zBack)*0.001-shiftZ - 0.075);
window.scene.getMeshByName('1meter_balk_roof_' + i).position= new BABYLON.Vector3(fringeXOffset + -0.075 + currentXposition, 1.66+0.075, (zBack)*0.001 - 0.075);

let  tempCurrentSectionWidth = currentSectionWidth;
if (window.appState['house1on'] == true && i == 1)         tempCurrentSectionWidth = window.appState['house1width'];
if (window.appState['house2on'] == true && i == quantity-1)  tempCurrentSectionWidth = window.appState['house2width'];


window.scene.getMeshByName('1meter_balk_front_' + i).scaling.x = tempCurrentSectionWidth * 0.001  + 0.15;
window.scene.getMeshByName('1meter_balk_back_' + i).scaling.x  = tempCurrentSectionWidth * 0.001  + 0.15;
window.scene.getMeshByName('1meter_balk_roof_' + i).scaling.x  = tempCurrentSectionWidth * 0.001  + 0.15;


if (window.appState['house2on'] == true && i == quantity-1)  tempCurrentSectionWidth = window.appState['house2width'];
//back roof wall
window.scene.getMeshByName('wall_small_carcas_' + i).position=new BABYLON.Vector3(0.075-fringeXOffset + currentXposition, 0, (zBack*1)*0.001 - 0.075);
window.scene.getMeshByName('wall_small_'  + i).position=new BABYLON.Vector3(0.075-fringeXOffset + currentXposition, 0, (zBack*1)*0.001 - 0.075);

window.scene.getMeshByName('wall_small_carcas_'  + i).scaling.x=((tempCurrentSectionWidth-150)/1000)/2.775;
window.scene.getMeshByName('wall_small_'  + i).scaling.x=((tempCurrentSectionWidth-150)/1000)/2.775;

window.scene.getMeshByName('wall_small_inside_'  + i).position=new BABYLON.Vector3(0.075-fringeXOffset + currentXposition, 0, (zBack*1)*0.001 - 0.075);
window.scene.getMeshByName('wall_small_inside_'  + i).scaling.x=((tempCurrentSectionWidth-150)/1000)/2.775;


}



}











































for(let i = 1; i<=9; i++)
{

  let currentSectionWidth = sectionWidth;


  if (window.appState['house1on'] == true && i == 1)  currentSectionWidth = window.appState['house1width'];
  if (window.appState['house2on'] == true && i == quantity-1)  currentSectionWidth = window.appState['house2width'];




  //roof
  if(i>0 && i<quantity){
  window.scene.getMeshByName('1meter_balk_front_' + i).setEnabled(true);
  window.scene.getMeshByName('1meter_balk_back_' + i).setEnabled(true);
  window.scene.getMeshByName('1meter_balk_roof_' + i).setEnabled(true);

  window.scene.getMeshByName('wall_small_carcas_' + i).setEnabled(true);
  window.scene.getMeshByName('wall_small_' + i).setEnabled(true);
  window.scene.getMeshByName('wall_small_inside_' + i).setEnabled(true);

  }

  //roof
  if(i>0 && i>quantity-1){
  window.scene.getMeshByName('1meter_balk_front_' + i).setEnabled(false);
  window.scene.getMeshByName('1meter_balk_back_' + i).setEnabled(false);
  window.scene.getMeshByName('1meter_balk_roof_' + i).setEnabled(false);

  window.scene.getMeshByName('wall_small_carcas_' + i).setEnabled(false);
  window.scene.getMeshByName('wall_small_' + i).setEnabled(false);
  window.scene.getMeshByName('wall_small_inside_' + i).setEnabled(false);


  }


if (i>quantity){
window.scene.getMeshByName('balk_back_' + i).setEnabled(false);
window.scene.getMeshByName('balk_front_' + i).setEnabled(false);
window.scene.getMeshByName('balk_roof_' + i).setEnabled(false);
window.scene.getMeshByName('balk_small_back_right_' + i).setEnabled(false);
window.scene.getMeshByName('balk_small_back_left_' + i).setEnabled(false);
window.scene.getMeshByName('balk_small_front_right_' + i).setEnabled(false);
window.scene.getMeshByName('balk_small_front_left_' + i).setEnabled(false);




}
else
{
window.scene.getMeshByName('balk_back_' + i).setEnabled(true);
window.scene.getMeshByName('balk_front_' + i).setEnabled(true);
window.scene.getMeshByName('balk_roof_' + i).setEnabled(true);
window.scene.getMeshByName('balk_small_back_right_' + i).setEnabled(true);
window.scene.getMeshByName('balk_small_back_left_' + i).setEnabled(true);
window.scene.getMeshByName('balk_small_front_right_' + i).setEnabled(true);
window.scene.getMeshByName('balk_small_front_left_' + i).setEnabled(true);





if (i==1)
{
window.scene.getMeshByName('balk_small_front_right_' + i).rotation=new BABYLON.Vector3(0, 0 , 0);
window.scene.getMeshByName('balk_small_back_right_' + i).rotation=new BABYLON.Vector3(0, Math.PI , 0);

if(window.appState['rooftype']==1)
{
let currentSectionWidthTEMP = sectionWidth;
if (window.appState['house1on'] == true) currentSectionWidthTEMP = window.appState['house1width'];

let xScale = 0.17;
  window.scene.getMeshByName('1meter_balk_front_' + i).scaling.x = currentSectionWidthTEMP * 0.001  + 0.15 + xScale;
  window.scene.getMeshByName('1meter_balk_roof_' + i).scaling.x  = currentSectionWidthTEMP * 0.001  + 0.15 + xScale;

  window.scene.getMeshByName('1meter_balk_front_' + i).position.x = -0.075 + xStart  - xScale;
  window.scene.getMeshByName('1meter_balk_roof_' + i).position.x  = -0.075 + xStart  - xScale;
}

}

if (i==quantity)
{
//console.log(quantity + ' quantity' );
window.appState['sectionsNumber']=quantity-1;
console.log('Number of sections: ' + window.appState['sectionsNumber']);
//sectionWidth


window.scene.getMeshByName('balk_small_front_left_' + i).rotation=new BABYLON.Vector3(0, 0  , 0);
window.scene.getMeshByName('balk_small_back_left_' + i).rotation=new BABYLON.Vector3(0, Math.PI, 0);
//if roof type ==1





if(window.appState['rooftype']==1)
{
let currentSectionWidthTEMP = sectionWidth;


if (i>2)
{
if (window.appState['house2on'] == true) currentSectionWidthTEMP = window.appState['house2width'];
let xScale = 0.17;
window.scene.getMeshByName('1meter_balk_front_' + (i-1)).scaling.x = currentSectionWidthTEMP * 0.001  + 0.15 + xScale;
window.scene.getMeshByName('1meter_balk_roof_' + (i-1)).scaling.x  = currentSectionWidthTEMP * 0.001  + 0.15 + xScale;
}

// if BALK Is SINGLE

if (i==2)
{
currentSectionWidthTEMP = x;

window.scene.getMeshByName('1meter_balk_front_' + (i-1)).scaling.x = currentSectionWidthTEMP * 0.001  + 0.15 + 0.4;
window.scene.getMeshByName('1meter_balk_roof_' + (i-1)).scaling.x  = currentSectionWidthTEMP * 0.001  + 0.15 + 0.4;
}

}





}

}




}





if (window.appState['rooftype']==1)
{
  //enaabling waalls roof2
window.scene.getMeshByName('wall_trap_0_carcas').setEnabled(true);
window.scene.getMeshByName('wall_trap_1_carcas').setEnabled(true);
window.scene.getMeshByName('wall_trap_0').setEnabled(true);
window.scene.getMeshByName('wall_trap_1').setEnabled(true);
//if wall 2 sided
window.scene.getMeshByName('wall_trap_0_inside').setEnabled(true);
window.scene.getMeshByName('wall_trap_1_inside').setEnabled(true);


//wall side flangs
window.scene.getMeshByName('wall_trap_0').position.x = (x/1000)/-2 ;
window.scene.getMeshByName('wall_trap_1').position.x = (x/1000)/ 2 ;

window.scene.getMeshByName('wall_trap_0_carcas').position.x = (x/1000)/-2 ;
window.scene.getMeshByName('wall_trap_1_carcas').position.x = (x/1000)/ 2 ;

window.scene.getMeshByName('wall_trap_0_inside').position.x = (x/1000)/-2 - 0.01;
window.scene.getMeshByName('wall_trap_1_inside').position.x = (x/1000)/ 2 + 0.01;



window.scene.getMeshByName('wall_trap_0').position.z = (z/1000)/ 2 - 1;
window.scene.getMeshByName('wall_trap_1').position.z = (z/1000)/ 2 - 1;
window.scene.getMeshByName('wall_trap_0_carcas').position.z = (z/1000)/ 2 - 1;
window.scene.getMeshByName('wall_trap_1_carcas').position.z = (z/1000)/ 2 - 1;
window.scene.getMeshByName('wall_trap_0_inside').position.z = (z/1000)/ 2 - 1;
window.scene.getMeshByName('wall_trap_1_inside').position.z = (z/1000)/ 2 - 1;


//if wall 2 sided




//roof central bulk
window.scene.getMeshByName('angle_roof_x_bulk').setEnabled(true);
window.scene.getMeshByName('angle_roof_x_bulk').scaling.x=x*0.001 + 0.5;
window.scene.getMeshByName('angle_roof_x_bulk').position.x= (x/1000)/-2 - 0.25;

if (z==3000)window.scene.getMeshByName('angle_roof_x_bulk').position.y=2.9;
if (z==3500)window.scene.getMeshByName('angle_roof_x_bulk').position.y=3.04;
if (z==4000)window.scene.getMeshByName('angle_roof_x_bulk').position.y=3.18;
if (z==4500)window.scene.getMeshByName('angle_roof_x_bulk').position.y=3.33;
if (z==5000)window.scene.getMeshByName('angle_roof_x_bulk').position.y=3.47;




//disabling flatRoof

window.scene.getMeshByName("balk_center_0").setEnabled(false);
window.scene.getMeshByName("balk_center_1").setEnabled(false);
window.scene.getMeshByName("balk_center_house1").setEnabled(false);
window.scene.getMeshByName("balk_center_house2").setEnabled(false);





window.scene.getMeshByName("balk_small_center_left_0").setEnabled(false);
window.scene.getMeshByName("balk_small_center_right_0").setEnabled(false);
window.scene.getMeshByName("balk_small_center_left_1").setEnabled(false);
window.scene.getMeshByName("balk_small_center_right_1").setEnabled(false);



 window.scene.getMeshByName("roofPlane").setEnabled(false);
 for(let i=1; i<=2;i++)
 {
 window.scene.getMeshByName('flatRoof' + i + '_left').setEnabled(false);
 window.scene.getMeshByName('flatRoof' + i + '_right').setEnabled(false);
 window.scene.getMeshByName('flatRoof' + i + '_front').setEnabled(false);
 window.scene.getMeshByName('flatRoof' + i + '_back').setEnabled(false);
 }

 window.scene.getMeshByName('roofBorder1').setEnabled(false);
 window.scene.getMeshByName('roofBorder2').setEnabled(false);
 window.scene.getMeshByName('roofBorder3').setEnabled(false);
 window.scene.getMeshByName('roofBorder4').setEnabled(false);


//for (let i=0; i<=41; i++)
// {
// window.scene.getMeshByName('flat_roof_bulk_' + i).setEnabled(false);
// }

for(let i=0; i<=26;i++){
  window.scene.getMeshByName('flat_roof_15mm' + i).setEnabled(false);
}

  window.scene.getMeshByName('flat_roof_x1_bulk').setEnabled(false);
  window.scene.getMeshByName('flat_roof_x2_bulk').setEnabled(false);
// disabling end


for (let i=0; i<=41; i++)
{
window.scene.getMeshByName('flat_roof_bulk_' + i).position.x=xStart + i * 0.50;

window.scene.getMeshByName('flat_roof_bulk_' + i).position.z=(z/1000)/-2 + 0.10;
window.scene.getMeshByName('flat_roof_bulk_' + i).scaling.x= z/1000 - 1.1;
if (x<(i*500)) window.scene.getMeshByName('flat_roof_bulk_' + i).setEnabled(false);
else window.scene.getMeshByName('flat_roof_bulk_' + i).setEnabled(true);
}



//roof  sideflangs
for (let i=1; i<=5; i++)
{

  let flangsShiftX = 0.02;
//big

window.scene.getMeshByName(i + 'roof_side_left').position.x  = (x/-2) * 0.001 - 0.15 + flangsShiftX;
window.scene.getMeshByName(i + 'roof_side_right').position.x = (x/2)  * 0.001 + 0.15 - flangsShiftX;
window.scene.getMeshByName(i + 'roof_side_right').position.y =1.7;
window.scene.getMeshByName(i + 'roof_side_left').position.y =1.7;

//small
window.scene.getMeshByName(i + 'roof_side_left_small' ).position.x = (x/-2) * 0.001 - 0.15 + flangsShiftX;
window.scene.getMeshByName(i + 'roof_side_right_small').position.x = (x/2)  * 0.001 + 0.15 - flangsShiftX;
window.scene.getMeshByName(i + 'roof_side_right_small').position.y = 1.7;
window.scene.getMeshByName(i + 'roof_side_left_small' ).position.y = 1.7;

//3
let xShift3 = 0.15;
let yShift3 = 0.01;
window.scene.getMeshByName(i + 'roof_side_left_3' ).position.x = (x/-2) * 0.001 - 0.10 - xShift3;
window.scene.getMeshByName(i + 'roof_side_right_3').position.x = (x/2)  * 0.001 + 0.10 + xShift3;
//window.scene.getMeshByName(i + 'roof_side_right_3').position.y = 1.7;
//window.scene.getMeshByName(i + 'roof_side_left_3' ).position.y = 1.7;
window.scene.getMeshByName(i + 'roof_side_right_3').position.y = 2.35 + (i*0.075) + yShift3;// 0.7;
window.scene.getMeshByName(i + 'roof_side_left_3' ).position.y = 2.35 + (i*0.075) + yShift3; //0.7;

//window.scene.getMeshByName(i + 'roof_side_right_3').position.z = 0.5;
//window.scene.getMeshByName(i + 'roof_side_left_3' ).position.z = 0.5;


}

//roof_wood
for (let i=1; i<=5; i++)
{
window.scene.getMeshByName(i + 'roof_wood').scaling.x=x*0.001+0.5;
window.scene.getMeshByName(i + 'roof_wood').position.x  = (x/2) * 0.001 + 0.25;
window.scene.getMeshByName(i + 'roof_wood').position.y=2.35 + (i*0.075);
}

//roof wall
for (let i=1; i<=5; i++)
{
window.scene.getMeshByName('wall_roof_' + i).position.x = (x/-2000);
window.scene.getMeshByName('wall_roof_' + i).position.y = 2.35;
window.scene.getMeshByName('wall_roof_' + i).position.z = (z/2000)-1.05;

window.scene.getMeshByName('wall_roof_inside_' + i).position.x = (x/-2000);
window.scene.getMeshByName('wall_roof_inside_' + i).position.y = 2.35;
window.scene.getMeshByName('wall_roof_inside_' + i).position.z = (z/2000)-1.05;

//
window.scene.getMeshByName('wall_roof_clone_' + i).position.x = (x/2000);
window.scene.getMeshByName('wall_roof_clone_' + i).position.y = 2.35;
window.scene.getMeshByName('wall_roof_clone_' + i).position.z = (z/2000)-1.05;

window.scene.getMeshByName('wall_roof_clone_inside_' + i).position.x = (x/2000) ;
window.scene.getMeshByName('wall_roof_clone_inside_' + i).position.y = 2.35;
window.scene.getMeshByName('wall_roof_clone_inside_' + i).position.z = (z/2000)-1.05;
//
window.scene.getMeshByName('wall_roof_carcas_' + i ).position.x = (x/-2000);
window.scene.getMeshByName('wall_roof_carcas_' + i ).position.y = 2.35;
window.scene.getMeshByName('wall_roof_carcas_' + i ).position.z = (z/2000)-1.05;

window.scene.getMeshByName('wall_roof_carcas_clone_' + i ).position.x = (x/2000)+0.035;
window.scene.getMeshByName('wall_roof_carcas_clone_' + i ).position.y = 2.35;
window.scene.getMeshByName('wall_roof_carcas_clone_' + i ).position.z = (z/2000)-1.05;




}




for(let roofNum=1;roofNum<=5;roofNum++)
 {

let roofStatus = false;

if ((z==3000 && roofNum==1)||(z==3500 && roofNum==2)||(z==4000 && roofNum==3)||(z==4500 && roofNum==4)||(z==5000 && roofNum==5)) roofStatus = true;

//roof walls enabling
window.scene.getMeshByName('wall_roof_' + roofNum).setEnabled(roofStatus);
window.scene.getMeshByName('wall_roof_' + roofNum).setEnabled(roofStatus);
window.scene.getMeshByName('wall_roof_' + roofNum).setEnabled(roofStatus);

window.scene.getMeshByName('wall_roof_carcas_' + roofNum ).setEnabled(roofStatus);
window.scene.getMeshByName('wall_roof_carcas_' + roofNum ).setEnabled(roofStatus);
window.scene.getMeshByName('wall_roof_carcas_' + roofNum ).setEnabled(roofStatus);

window.scene.getMeshByName('wall_roof_clone_' + roofNum).setEnabled(roofStatus);
window.scene.getMeshByName('wall_roof_clone_' + roofNum).setEnabled(roofStatus);
window.scene.getMeshByName('wall_roof_clone_' + roofNum).setEnabled(roofStatus);

window.scene.getMeshByName('wall_roof_carcas_clone_' + roofNum ).setEnabled(roofStatus);
window.scene.getMeshByName('wall_roof_carcas_clone_' + roofNum ).setEnabled(roofStatus);
window.scene.getMeshByName('wall_roof_carcas_clone_' + roofNum ).setEnabled(roofStatus);




window.scene.getMeshByName('house1_wall_roof_' + roofNum ).setEnabled(roofStatus);
window.scene.getMeshByName('house1_wall_roof_inside_' + roofNum ).setEnabled(roofStatus);
window.scene.getMeshByName('house1_wall_roof_carcas_' + roofNum ).setEnabled(roofStatus);

window.scene.getMeshByName('wall_roof_inside_' + roofNum).setEnabled(roofStatus);
window.scene.getMeshByName('wall_roof_clone_inside_' + roofNum).setEnabled(roofStatus);

window.scene.getMeshByName('wall_roof_inside_' + roofNum).setEnabled(roofStatus);
window.scene.getMeshByName('wall_roof_clone_inside_' + roofNum).setEnabled(roofStatus);

if (window.appState['rooftype'] == 0)
{
  window.scene.getMeshByName('wall_roof_inside_' + roofNum).setEnabled(false);
  window.scene.getMeshByName('wall_roof_clone_inside_' + roofNum).setEnabled(false);
}

window.scene.getMeshByName('house2_wall_roof_' + roofNum ).setEnabled(roofStatus);
window.scene.getMeshByName('house2_wall_roof_inside_' + roofNum ).setEnabled(roofStatus);
window.scene.getMeshByName('house2_wall_roof_carcas_' + roofNum ).setEnabled(roofStatus);













window.scene.getMeshByName(roofNum + 'roof_side_left').setEnabled(roofStatus);
window.scene.getMeshByName(roofNum + 'roof_side_right').setEnabled(roofStatus);
window.scene.getMeshByName(roofNum + 'roof_wood').setEnabled(roofStatus);



window.scene.getMeshByName(roofNum + 'roof_side_left').setEnabled(roofStatus);
window.scene.getMeshByName(roofNum + 'roof_side_right').setEnabled(roofStatus);

window.scene.getMeshByName(roofNum + 'roof_side_left_small').setEnabled(roofStatus);
window.scene.getMeshByName(roofNum + 'roof_side_right_small').setEnabled(roofStatus);

window.scene.getMeshByName(roofNum + 'roof_side_left_3').setEnabled(false);
window.scene.getMeshByName(roofNum + 'roof_side_right_3').setEnabled(false);

window.scene.getMeshByName(roofNum + 'roof_wood').setEnabled(roofStatus);











//middle ROOF
for (let i=0; i<=41; i++)
{
window.scene.getMeshByName(roofNum + 'roof_bulk_' + i).position.x=xStart + i * 0.50;
window.scene.getMeshByName(roofNum + 'roof_bulk_' + i).position.y=1.7;
window.scene.getMeshByName(roofNum + 'roof_bulk_' + i).position.z=0;
//window.scene.getMeshByName(roofNum + 'roof_bulk_' + i).position=new BABYLON.Vector3(xStart + i * 0.50, 0.5, -0.5);
//


if (x<(i*500)) window.scene.getMeshByName(roofNum + 'roof_bulk_' + i).setEnabled(false);
 else window.scene.getMeshByName(roofNum + 'roof_bulk_' + i).setEnabled(true);

if (z==3000 ){if(roofNum!=1){window.scene.getMeshByName(roofNum + 'roof_bulk_' + i).setEnabled(false);  }}
if (z==3500 ){if(roofNum!=2){window.scene.getMeshByName(roofNum + 'roof_bulk_' + i).setEnabled(false);  }}
if (z==4000 ){if(roofNum!=3){window.scene.getMeshByName(roofNum + 'roof_bulk_' + i).setEnabled(false);  }}
if (z==4500 ){if(roofNum!=4){window.scene.getMeshByName(roofNum + 'roof_bulk_' + i).setEnabled(false);  }}
if (z==5000 ){if(roofNum!=5){window.scene.getMeshByName(roofNum + 'roof_bulk_' + i).setEnabled(false);  }}



}





// roof TILE
for (let i=0; i<=81; i++)
{
window.scene.getMeshByName(roofNum + 'roof_tile_' + i).setEnabled(false);
window.scene.getMeshByName(roofNum + 'roof_tile1_' + i).setEnabled(false);
window.scene.getMeshByName(roofNum + 'roof_tile2_' + i).setEnabled(false);
window.scene.getMeshByName('roof_ridge_' + roofNum + '_' + i).setEnabled(false); //roof_ridge_1_

//window.scene.getMeshByName('roof_ridge_1_' + i).setEnabled(false);
}

window.scene.getMeshByName(roofNum + 'roof_tile1_0_start').setEnabled(false);
window.scene.getMeshByName(roofNum + 'roof_tile1_0_end').setEnabled(false);

//window.scene.getMeshByName('ridge_1_start').setEnabled(false);
//window.scene.getMeshByName('ridge_1_end').setEnabled(false);


 for (let i=0; i<=81; i++)
 {


window.scene.getMeshByName(roofNum + 'roof_tile_'  + i).position=new BABYLON.Vector3(xStart + i * 0.25, 0.55 - 0.07 , -0.47);
window.scene.getMeshByName(roofNum + 'roof_tile1_' + i).position=new BABYLON.Vector3(xStart + i * 0.25, 0.55 - 0.07 , -0.47);
window.scene.getMeshByName(roofNum + 'roof_tile2_' + i).position=new BABYLON.Vector3(xStart + i * 0.25, 0.55 - 0.07 , -0.47);

if (roofNum == 3 || roofNum == 4 || roofNum == 5)
{
window.scene.getMeshByName(roofNum + 'roof_tile2_' + i).position.y=  0.55 - 0.07 + 0.05;
window.scene.getMeshByName(roofNum + 'roof_tile1_' + i).position.y=  0.55 - 0.07 + 0.05;
window.scene.getMeshByName(roofNum + 'roof_tile_' + i).position.y=  0.55 - 0.07 + 0.05;
}

if ( roofNum == 5 )
{
//window.scene.getMeshByName(roofNum + 'roof_tile2_' + i).position.y=  0.55 - 0.07 + 0.09;
window.scene.getMeshByName(roofNum + 'roof_tile1_' + i).position.y=  0.54;//+ -0.099; //4 5
window.scene.getMeshByName(roofNum + 'roof_tile_' + i).position.y=  0.55 - 0.07 + 0.099; //THRD 0
window.scene.getMeshByName(roofNum + 'roof_tile2_' + i).position.y=  0.55 - 0.07 + 0.065; //FST sec

}

if ( roofNum == 4 )
{
//window.scene.getMeshByName(roofNum + 'roof_tile2_' + i).position.y=  0.55 - 0.07 + 0.09;
window.scene.getMeshByName(roofNum + 'roof_tile1_' + i).position.y=  0.55 - 0.07 + 0.07;

window.scene.getMeshByName(roofNum + 'roof_tile2_' + i).position.y=  0.55 - 0.07 + 0.070;//FST sec
}

if ( roofNum == 3 )
{
//window.scene.getMeshByName(roofNum + 'roof_tile2_' + i).position.y=  0.55 - 0.07 + 0.09;

}

if ( roofNum == 2 )
{
  window.scene.getMeshByName(roofNum + 'roof_tile1_' + i).position.y=  0.55 - 0.07 + 0.02;
window.scene.getMeshByName(roofNum + 'roof_tile2_' + i).position.y=  0.55 - 0.07 + 0.02;
}




window.scene.getMeshByName(roofNum + 'roof_tile2_' + i).position.y = 2.35 + (roofNum*0.075) - 1.75 - 0.16;
window.scene.getMeshByName(roofNum + 'roof_tile1_' + i).position.y = 2.35 + (roofNum*0.075) - 1.75 - 0.175;
window.scene.getMeshByName(roofNum + 'roof_tile_' + i).position.y  = 2.35 + (roofNum*0.075) - 1.75 - 0.175;

let xShiftTile1 = 0.125/2;
xShiftTile1 = 0.08;
xShiftTile1 = 0.125/2 + 0.0075;
//желобок
if(window.appState['roofcolor'] == 4 || window.appState['roofcolor'] == 5 )
{
if ((roofNum == 1 && z == 3000) ||(roofNum == 2 && z == 3500) ||(roofNum == 3 && z == 4000) ||(roofNum == 4 && z == 4500) ||(roofNum == 5 && z == 5000))
{

let yShiftRidge = 0.03;
window.scene.getMeshByName('roof_ridge_' + roofNum + '_' + i).position   = new BABYLON.Vector3(xStart + i * 0.25 - xShiftTile1, 0.55 - 0.07 , -0.47);
//window.scene.getMeshByName('roof_ridge_' + roofNum + '_' + i).position.y = 0.450 + (0.354 * 0) - yShiftRidge;
window.scene.getMeshByName('roof_ridge_' + roofNum + '_' + i).position.y = 2.35 + (roofNum*0.075) - 1.75 - 0.175;



window.scene.getMeshByName('roof_ridge_' + roofNum + '_' + i).setEnabled(true);
if (x<(i*250-250)) window.scene.getMeshByName('roof_ridge_' + roofNum + '_' + i).setEnabled(false);

}
}



window.scene.getMeshByName(roofNum + 'roof_tile1_' + i).position.x = window.scene.getMeshByName(roofNum + 'roof_tile1_' + i).position.x - xShiftTile1;


if (window.appState['roofcolor'] == 4 || window.appState['roofcolor'] == 5 & i==1)
{
if ((roofNum == 1 && z == 3000) ||(roofNum == 2 && z == 3500) ||(roofNum == 3 && z == 4000) ||(roofNum == 4 && z == 4500) ||(roofNum == 5 && z == 5000))
{

window.scene.getMeshByName(roofNum + 'roof_tile1_0_end').position=new BABYLON.Vector3(xStart + i * 0.25, 0.55 - 0.07 , -0.47);
window.scene.getMeshByName(roofNum + 'roof_tile1_0_start').position=new BABYLON.Vector3(xStart + i * 0.25, 0.55 - 0.07 , -0.47);

window.scene.getMeshByName(roofNum + 'roof_tile1_0_end').position.y  = 2.35 + (roofNum*0.075) - 1.75 - 0.175;
window.scene.getMeshByName(roofNum + 'roof_tile1_0_start').position.y  = 2.35 + (roofNum*0.075) - 1.75 - 0.175;

window.scene.getMeshByName(roofNum + 'roof_tile1_0_end').position.x  = x/2000 + 0.25 + 0.125 - xShiftTile1 - 0.025;
window.scene.getMeshByName(roofNum + 'roof_tile1_0_start').position.x  = x/-2000 - xShiftTile1 ;

window.scene.getMeshByName(roofNum + 'roof_tile1_0_end').scaling.x    = 0.8;
window.scene.getMeshByName(roofNum + 'roof_tile1_0_start').scaling.x  = 0.8;
window.scene.getMeshByName('roof_ridge_' + roofNum + '_0').scaling.x  = 0.8;



window.scene.getMeshByName(roofNum + 'roof_tile1_0').setEnabled(false);
window.scene.getMeshByName(roofNum + 'roof_tile1_0_end').setEnabled(true);
window.scene.getMeshByName(roofNum + 'roof_tile1_0_start').setEnabled(true);

}

if ((window.appState['roofcolor'] == 1 || window.appState['roofcolor'] == 2 || window.appState['roofcolor'] == 3) & i==1)
{
if ((roofNum == 1 && z == 3000) ||(roofNum == 2 && z == 3500) ||(roofNum == 3 && z == 4000) ||(roofNum == 4 && z == 4500) ||(roofNum == 5 && z == 5000))
{
}

}





//let shiftY = 0.01;
//if (z==3000) window.scene.getMeshByName('roof_ridge_1_' + i).position.y = 0.49 - shiftY;// + ((roofNum -1 ) * 0.20);
//if (z==3500) window.scene.getMeshByName('roof_ridge_1_' + i).position.y = 0.62 - shiftY;// + ((roofNum -1 ) * 0.20);
//if (z==4000) window.scene.getMeshByName('roof_ridge_1_' + i).position.y = 0.78 - shiftY;
//if (z==4500) window.scene.getMeshByName('roof_ridge_1_' + i).position.y = 0.92 - shiftY;
//if (z==5000) window.scene.getMeshByName('roof_ridge_1_' + i).position.y = 1.07 - shiftY;



//window.scene.getMeshByName('roof_ridge_1_' + i).scaling.z=2;
//window.scene.getMeshByName('roof_ridge_1_' + i).scaling.y=2;

//window.scene.getMeshByName('ridge_1_start').position = window.scene.getMeshByName('roof_ridge_1_' + i).position;
//window.scene.getMeshByName('ridge_1_end'  ).position = window.scene.getMeshByName('roof_ridge_1_' + i).position;


//window.scene.getMeshByName('ridge_1_start').setEnabled(true);
//window.scene.getMeshByName('ridge_1_end').setEnabled(true);
}




if (window.appState['roofcolor']==4 || window.appState['roofcolor']==5)
{

 if (x<(i*250-250)) window.scene.getMeshByName(roofNum + 'roof_tile1_' + i).setEnabled(false);
 else window.scene.getMeshByName(roofNum + 'roof_tile1_' + i).setEnabled(true);

 if (z==3000 ){if(roofNum!=1){   window.scene.getMeshByName(roofNum + 'roof_tile1_' + i).setEnabled(false); }}
 if (z==3500 ){if(roofNum!=2){window.scene.getMeshByName(roofNum + 'roof_tile1_' + i).setEnabled(false);  }}
 if (z==4000 ){if(roofNum!=3){window.scene.getMeshByName(roofNum + 'roof_tile1_' + i).setEnabled(false);  }}
 if (z==4500 ){if(roofNum!=4){window.scene.getMeshByName(roofNum + 'roof_tile1_' + i).setEnabled(false);  }}
 if (z==5000 ){if(roofNum!=5){window.scene.getMeshByName(roofNum + 'roof_tile1_' + i).setEnabled(false);  }}
}



if (window.appState['roofcolor']==3)
{


 if (x<(i*250-250)) window.scene.getMeshByName(roofNum + 'roof_tile_' + i).setEnabled(false);
 else window.scene.getMeshByName(roofNum + 'roof_tile_' + i).setEnabled(true);

 if (z==3000 ){if(roofNum!=1){   window.scene.getMeshByName(roofNum + 'roof_tile_' + i).setEnabled(false); }}
 if (z==3500 ){if(roofNum!=2){window.scene.getMeshByName(roofNum + 'roof_tile_' + i).setEnabled(false);  }}
 if (z==4000 ){if(roofNum!=3){window.scene.getMeshByName(roofNum + 'roof_tile_' + i).setEnabled(false);  }}
 if (z==4500 ){if(roofNum!=4){window.scene.getMeshByName(roofNum + 'roof_tile_' + i).setEnabled(false);  }}
 if (z==5000 ){if(roofNum!=5){window.scene.getMeshByName(roofNum + 'roof_tile_' + i).setEnabled(false);  }}

}


if (window.appState['roofcolor']==1 || window.appState['roofcolor']==2)
{
 if (x<(i*250-250)) window.scene.getMeshByName(roofNum + 'roof_tile2_' + i).setEnabled(false);
 else window.scene.getMeshByName(roofNum + 'roof_tile2_' + i).setEnabled(true);

 if (z==3000 ){if(roofNum!=1){   window.scene.getMeshByName(roofNum + 'roof_tile2_' + i).setEnabled(false); }}
 if (z==3500 ){if(roofNum!=2){window.scene.getMeshByName(roofNum + 'roof_tile2_' + i).setEnabled(false);  }}
 if (z==4000 ){if(roofNum!=3){window.scene.getMeshByName(roofNum + 'roof_tile2_' + i).setEnabled(false);  }}
 if (z==4500 ){if(roofNum!=4){window.scene.getMeshByName(roofNum + 'roof_tile2_' + i).setEnabled(false);  }}
 if (z==5000 ){if(roofNum!=5){window.scene.getMeshByName(roofNum + 'roof_tile2_' + i).setEnabled(false);  }}
}

// disabling side wood roof
if ((roofNum == 1 && z == 3000) || (roofNum == 2 && z == 3500) || (roofNum == 3 && z == 4000) || (roofNum == 4 && z == 4500) || (roofNum == 5 && z == 5000))
{
let sideRoof3 = true;
if (window.appState['roofcolor']==3)
{
  window.scene.getMeshByName(roofNum + 'roof_side_left').setEnabled(false);
  window.scene.getMeshByName(roofNum + 'roof_side_right').setEnabled(false);

  window.scene.getMeshByName(roofNum + 'roof_side_left_small').setEnabled(true);
  window.scene.getMeshByName(roofNum + 'roof_side_right_small').setEnabled(true);

  window.scene.getMeshByName(roofNum + 'roof_side_left_3').setEnabled(sideRoof3);
  window.scene.getMeshByName(roofNum + 'roof_side_right_3').setEnabled(sideRoof3);
}

if (window.appState['roofcolor']==1 || window.appState['roofcolor']==2)
{
  window.scene.getMeshByName(roofNum + 'roof_side_left').setEnabled(true);
  window.scene.getMeshByName(roofNum + 'roof_side_right').setEnabled(true);

  window.scene.getMeshByName(roofNum + 'roof_side_left_small').setEnabled(false);
  window.scene.getMeshByName(roofNum + 'roof_side_right_small').setEnabled(false);


  window.scene.getMeshByName(roofNum + 'roof_side_left_3').setEnabled(sideRoof3);
  window.scene.getMeshByName(roofNum + 'roof_side_right_3').setEnabled(sideRoof3);


}

if (window.appState['roofcolor']==4 || window.appState['roofcolor']==5)
{
  window.scene.getMeshByName(roofNum + 'roof_side_left').setEnabled(false);
  window.scene.getMeshByName(roofNum + 'roof_side_right').setEnabled(false);

  window.scene.getMeshByName(roofNum + 'roof_side_left_small').setEnabled(false);
  window.scene.getMeshByName(roofNum + 'roof_side_right_small').setEnabled(false);

  window.scene.getMeshByName(roofNum + 'roof_side_left_3').setEnabled(true);
  window.scene.getMeshByName(roofNum + 'roof_side_right_3').setEnabled(true);


}

}
else
{
  window.scene.getMeshByName(roofNum + 'roof_side_left').setEnabled(false);
  window.scene.getMeshByName(roofNum + 'roof_side_right').setEnabled(false);

  window.scene.getMeshByName(roofNum + 'roof_side_left_small').setEnabled(false);
  window.scene.getMeshByName(roofNum + 'roof_side_right_small').setEnabled(false);

  window.scene.getMeshByName(roofNum + 'roof_side_left_3').setEnabled(false);
  window.scene.getMeshByName(roofNum + 'roof_side_right_3').setEnabled(false);


}

window.scene.getMeshByName(roofNum + 'roof_tile_'  + i).scaling.x = 1;
window.scene.getMeshByName(roofNum + 'roof_tile2_'  + i).scaling.x = 1;

if (i == 0 || i == (x/250 + 1))
{
let lastXshift = 0;
let lastXscale = 0;
if (i == (x/250 + 1))  {lastXshift = 0.025; lastXscale = 0.02;}


window.scene.getMeshByName(roofNum + 'roof_tile_'  + i).position.x = xStart + i * 0.25 - lastXshift;
window.scene.getMeshByName(roofNum + 'roof_tile_'  + i).scaling.x = 0.93 - lastXscale;

window.scene.getMeshByName(roofNum + 'roof_tile2_'  + i).position.x = xStart + i * 0.25 - lastXshift;
window.scene.getMeshByName(roofNum + 'roof_tile2_'  + i).scaling.x = 0.93 - lastXscale;
//if (i == (x/250 + 2)) window.scene.getMeshByName(roofNum + 'roof_tile2_'  + i).scaling.x = 0.85;
///666
}



 }













} //end roof5

}

if (window.appState['rooftype']==0)
{
  window.scene.getMeshByName('flat_roof_x1_bulk').setEnabled(true);
  window.scene.getMeshByName('flat_roof_x2_bulk').setEnabled(true);


//central balk
if (z == 5000 || z == 4500)
{
  window.scene.getMeshByName("balk_center_0").setEnabled(true);
  window.scene.getMeshByName("balk_center_1").setEnabled(true);

  window.scene.getMeshByName("balk_center_house1").setEnabled(window.appState['house1on']);
  window.scene.getMeshByName("balk_center_house2").setEnabled(window.appState['house2on']);

  window.scene.getMeshByName("balk_center_house1").position.x=(x/1000)/-2 + window.appState['house1width']/1000 ;
  window.scene.getMeshByName("balk_center_house2").position.x=(x/1000)/ 2 - window.appState['house2width']/1000 ;




  window.scene.getMeshByName("balk_small_center_left_0").setEnabled(true);
  window.scene.getMeshByName("balk_small_center_right_0").setEnabled(true);
  window.scene.getMeshByName("balk_small_center_left_1").setEnabled(true);
  window.scene.getMeshByName("balk_small_center_right_1").setEnabled(true);




  window.scene.getMeshByName("balk_center_0").position.x=(x/1000)/2;
  window.scene.getMeshByName("balk_center_1").position.x=(x/1000)/-2;

 window.scene.getMeshByName('balk_small_center_left_0').position.x = (x/1000)/2;
window.scene.getMeshByName('balk_small_center_right_0').position.x = (x/1000)/2;

window.scene.getMeshByName('balk_small_center_left_1').position.x = (x/1000)/-2;
window.scene.getMeshByName('balk_small_center_right_1').position.x = (x/1000)/-2;


}
else
{
  window.scene.getMeshByName("balk_center_0").setEnabled(false);
  window.scene.getMeshByName("balk_center_1").setEnabled(false);

  window.scene.getMeshByName("balk_small_center_left_0").setEnabled(false);
  window.scene.getMeshByName("balk_small_center_right_0").setEnabled(false);

  window.scene.getMeshByName("balk_small_center_left_1").setEnabled(false);
  window.scene.getMeshByName("balk_small_center_right_1").setEnabled(false);


}

let tempXshiftroof = 0.01;
window.scene.getMeshByName('flat_roof_x1_bulk').scaling.x=  roofFlatShiftLeft + roofFlatShiftRight + x/1000 - tempXshiftroof*2;
window.scene.getMeshByName('flat_roof_x2_bulk').scaling.x=  roofFlatShiftLeft + roofFlatShiftRight + x/1000 - tempXshiftroof*2;
window.scene.getMeshByName('flat_roof_x1_bulk').position.x =(x/1000)/-2 - roofFlatShiftLeft + tempXshiftroof;
window.scene.getMeshByName('flat_roof_x2_bulk').position.x =(x/1000)/-2 - roofFlatShiftLeft + tempXshiftroof;
window.scene.getMeshByName('flat_roof_x1_bulk').position.z =(z/1000)/-2 + 0.00075;
window.scene.getMeshByName('flat_roof_x2_bulk').position.z =(z/1000)/2  - 0.00075;




//ROFF FLAT 2
for(let i=1; i<=2;i++)
{
let multiply=1;
if (i==1) multiply=1.0;
if (i==2) multiply=0.95;

let offset=1;
if (i==1) offset=0;
if (i==2) offset=0;

window.scene.getMeshByName('flatRoof' + i + '_left').position=
new BABYLON.Vector3(xStart-roofFlatShiftLeft * multiply,  2.2 + 0.075 + 0.15/i, (zBack*-1)*0.001 - roofFlatShiftFront * multiply + 0.075 + offset);
window.scene.getMeshByName('flatRoof' + i + '_right').position=
new BABYLON.Vector3(xStart *-1 + roofFlatShiftRight * multiply,  2.2 + 0.075 + 0.15/i, (zBack*-1)*0.001 - roofFlatShiftFront * multiply + 0.075 + offset);


window.scene.getMeshByName('flatRoof' + i + '_front').position=new BABYLON.Vector3(xStart-roofFlatShiftLeft * multiply,  2.2 + 0.075 + 0.15/i, (zBack*-1)*0.001 - roofFlatShiftFront * multiply + 0.075 + offset);
window.scene.getMeshByName('flatRoof' + i + '_back').position =new BABYLON.Vector3(xStart-roofFlatShiftLeft * multiply,  2.2 + 0.075 + 0.15/i, (zBack)*0.001 + roofFlatShiftBack * multiply - 0.075 - offset);


window.scene.getMeshByName('flatRoof' + i + '_front').scaling.x  = x * 0.001 + roofFlatShiftLeft * multiply + roofFlatShiftRight * multiply;
window.scene.getMeshByName('flatRoof' + i + '_back').scaling.x = x * 0.001 + roofFlatShiftLeft * multiply + roofFlatShiftRight * multiply;

window.scene.getMeshByName('flatRoof' + i + '_left').scaling.x  = z * 0.001 - shiftZ + roofFlatShiftFront * multiply + roofFlatShiftBack * multiply - 0.15;
window.scene.getMeshByName('flatRoof' + i + '_right').scaling.x = z * 0.001 - shiftZ + roofFlatShiftFront * multiply + roofFlatShiftBack * multiply - 0.15;
}

//BORDERS




let roofFlatShiftLeftBorder = roofFlatShiftLeft + 0.06 - 0.035;
let roofFlatShiftRightBorder = roofFlatShiftRight + 0.06 - 0.035;
let roofFlatShiftFrontBorder = roofFlatShiftFront + 0.06 - 0.035;
let roofFlatShiftBackBorder = roofFlatShiftBack + 0.06 - 0.035;

let offset=0;
let borderDeltaX = (roofFlatShiftLeftBorder - roofFlatShiftRightBorder)/2;
let borderDeltaZ = (roofFlatShiftFrontBorder - roofFlatShiftBackBorder)/2;
let borderY=2.55;


window.scene.getMeshByName('roofBorder1').position=
new BABYLON.Vector3(0 - borderDeltaX,  borderY, (zBack*-1)*0.001 - roofFlatShiftFrontBorder + 0.075 + 0.025);
window.scene.getMeshByName('roofBorder2').position =
new BABYLON.Vector3(0 - borderDeltaX,  borderY, (zBack)*0.001 + roofFlatShiftBackBorder  - 0.075 - 0.025);
//left right
window.scene.getMeshByName('roofBorder3').position=
new BABYLON.Vector3(xStart-roofFlatShiftLeftBorder + 0.025,  borderY, 0-borderDeltaZ);
window.scene.getMeshByName('roofBorder4').position=
new BABYLON.Vector3(xStart *-1 + roofFlatShiftRightBorder  - 0.025,  borderY, 0-borderDeltaZ);

window.scene.getMeshByName('roofBorder1').scaling.x =  x * 0.001 + roofFlatShiftLeftBorder  + roofFlatShiftRightBorder ;
window.scene.getMeshByName('roofBorder2').scaling.x =  x * 0.001 + roofFlatShiftLeftBorder  + roofFlatShiftRightBorder ;
window.scene.getMeshByName('roofBorder3').scaling.z = z * 0.001  + roofFlatShiftFrontBorder + roofFlatShiftBackBorder  - 0.15;
window.scene.getMeshByName('roofBorder4').scaling.z = z * 0.001  + roofFlatShiftFrontBorder  + roofFlatShiftBackBorder  - 0.15;



//disabling waalls roof2
window.scene.getMeshByName('wall_trap_0_carcas').setEnabled(false);
window.scene.getMeshByName('wall_trap_1_carcas').setEnabled(false);
window.scene.getMeshByName('wall_trap_0').setEnabled(false);
window.scene.getMeshByName('wall_trap_1').setEnabled(false);
window.scene.getMeshByName('wall_trap_0_inside').setEnabled(false);
window.scene.getMeshByName('wall_trap_1_inside').setEnabled(false);


//disable canopy 2
window.scene.getMeshByName('angle_roof_x_bulk').setEnabled(false);

for(let i = 1; i<=9; i++)
{
window.scene.getMeshByName('1meter_balk_roof_' + i).setEnabled(false);
window.scene.getMeshByName('balk_roof_' + i).setEnabled(false);

window.scene.getMeshByName('wall_small_' + i).setEnabled(false);
window.scene.getMeshByName('wall_small_carcas_' + i).setEnabled(false);
}


//disabling 5 roofs
 for(let roofNum=1;roofNum<=5;roofNum++)
 {

//roof wall_roof

window.scene.getMeshByName('wall_roof_' + roofNum).setEnabled(false);
window.scene.getMeshByName('wall_roof_' + roofNum).setEnabled(false);
window.scene.getMeshByName('wall_roof_' + roofNum).setEnabled(false);

window.scene.getMeshByName('wall_roof_carcas_' + roofNum ).setEnabled(false);
window.scene.getMeshByName('wall_roof_carcas_' + roofNum ).setEnabled(false);
window.scene.getMeshByName('wall_roof_carcas_' + roofNum ).setEnabled(false);

window.scene.getMeshByName('wall_roof_clone_' + roofNum).setEnabled(false);
window.scene.getMeshByName('wall_roof_clone_' + roofNum).setEnabled(false);
window.scene.getMeshByName('wall_roof_clone_' + roofNum).setEnabled(false);

window.scene.getMeshByName('wall_roof_carcas_clone_' + roofNum ).setEnabled(false);
window.scene.getMeshByName('wall_roof_carcas_clone_' + roofNum ).setEnabled(false);
window.scene.getMeshByName('wall_roof_carcas_clone_' + roofNum ).setEnabled(false);

window.scene.getMeshByName(roofNum + 'roof_side_left').setEnabled(false);
window.scene.getMeshByName(roofNum + 'roof_side_right').setEnabled(false);

window.scene.getMeshByName(roofNum + 'roof_side_left_small').setEnabled(false);
window.scene.getMeshByName(roofNum + 'roof_side_right_small').setEnabled(false);

window.scene.getMeshByName(roofNum +  'roof_side_left_3').setEnabled(false);
window.scene.getMeshByName(roofNum + 'roof_side_right_3').setEnabled(false);

window.scene.getMeshByName(roofNum + 'roof_wood').setEnabled(false);

window.scene.getMeshByName(roofNum + 'roof_tile1_0_end').setEnabled(false);
window.scene.getMeshByName(roofNum + 'roof_tile1_0_start').setEnabled(false);



// roof tile disabling
  for (let i=0; i<=81; i++)
  {
  window.scene.getMeshByName(roofNum + 'roof_tile_' + i).setEnabled(false);
  window.scene.getMeshByName(roofNum + 'roof_tile1_' + i).setEnabled(false);
  window.scene.getMeshByName(roofNum + 'roof_tile2_' + i).setEnabled(false);
  window.scene.getMeshByName('roof_ridge_' + roofNum + '_' + i).setEnabled(false);
  }

  for (let i=0; i<=41; i++)
  {
  window.scene.getMeshByName(roofNum + 'roof_bulk_' + i).setEnabled(false);
  }

}


//flat roof 15mm array
for(let i=0; i<=26;i++){

window.scene.getMeshByName('flat_roof_15mm' + i).scaling.x= x/1000 + roofFlatShiftLeft + roofFlatShiftRight;
window.scene.getMeshByName('flat_roof_15mm' + i).scaling.z=1.33;

window.scene.getMeshByName('flat_roof_15mm' + i).position.x= (x/1000)/-2 - roofFlatShiftLeft;
window.scene.getMeshByName('flat_roof_15mm' + i).position.z= (z/1000)/2 - (i) * 0.2 + 0.1;
window.scene.getMeshByName('flat_roof_15mm' + i).position.y=2.47;



if(z<((i-1)*200))
window.scene.getMeshByName('flat_roof_15mm' + i).setEnabled(false);
else
window.scene.getMeshByName('flat_roof_15mm' + i).setEnabled(true);

if(z==((i-1)*200) || i==0)
window.scene.getMeshByName('flat_roof_15mm' + i).position.y=2.48;

if(i==0)
{
window.scene.getMeshByName('flat_roof_15mm' + i).scaling.z=3;
window.scene.getMeshByName('flat_roof_15mm' + i).position.z=(z/1000)/2 - (i) * 0.2 + roofFlatShiftBack - 0.225 - 0.09;
}

if(z==((i-1)*200) )
{
window.scene.getMeshByName('flat_roof_15mm' + i).scaling.z=3;
window.scene.getMeshByName('flat_roof_15mm' + i).position.z=(z/1000)/2 - (i-1) * 0.2 - roofFlatShiftFront + 0.225 + 0.09;
}

if(z==((i-1)*200 + 100))
{
window.scene.getMeshByName('flat_roof_15mm' + i).scaling.z=3;
window.scene.getMeshByName('flat_roof_15mm' + i).position.z=(z/1000)/2 - (i-1) * 0.2 - roofFlatShiftFront + 0.225 + 0.09 - 0.1;
}



//console.log(((i-1)*200) + ' ' + ((i-1)*200 + 100) + ' ' + z);

}


//flat roof mid
for (let i=0; i<=41; i++)
{
window.scene.getMeshByName('flat_roof_bulk_' + i).position.x=xStart + i * 0.50;

window.scene.getMeshByName('flat_roof_bulk_' + i).position.z=(z/1000)/-2 - roofFlatShiftFront + 0.10;
window.scene.getMeshByName('flat_roof_bulk_' + i).scaling.x= roofFlatShiftFront + roofFlatShiftBack + z/1000 -0.2;




if (x<(i*500)) window.scene.getMeshByName('flat_roof_bulk_' + i).setEnabled(false);
else window.scene.getMeshByName('flat_roof_bulk_' + i).setEnabled(true);
}


window.scene.getMeshByName("roofPlane").setEnabled(true);
window.scene.getMeshByName("roofPlane").scaling=new BABYLON.Vector3(  x/1000 + roofFlatShiftLeft + roofFlatShiftRight,  1,   z/1000 +  + roofFlatShiftBack + roofFlatShiftFront -0.15);

window.scene.getMeshByName("roofPlane").position.x=(roofFlatShiftLeft - roofFlatShiftRight)/-2;
window.scene.getMeshByName("roofPlane").position.z=(roofFlatShiftFront - roofFlatShiftBack)/-2;
window.scene.getMeshByName("roofPlane").position.y=2.50;

//enabling flaat roof balks
for(let i=1; i<=2;i++)
{
window.scene.getMeshByName('flatRoof' + i + '_left').setEnabled(true);
window.scene.getMeshByName('flatRoof' + i + '_right').setEnabled(true);
window.scene.getMeshByName('flatRoof' + i + '_front').setEnabled(true);
window.scene.getMeshByName('flatRoof' + i + '_back').setEnabled(true);
}

window.scene.getMeshByName('roofBorder1').setEnabled(true);
window.scene.getMeshByName('roofBorder2').setEnabled(true);
window.scene.getMeshByName('roofBorder3').setEnabled(true);
window.scene.getMeshByName('roofBorder4').setEnabled(true);





}

//GROUND
//x=x+30;
window.scene.getMeshByName("groundPlane").scaling=new BABYLON.Vector3(x/1000 + 2, 1, z/1000 + 2);

window.scene.getMaterialByName('groundMaterial').albedoTexture.vScale = 1 * (x/1000 + 2);
window.scene.getMaterialByName('groundMaterial').albedoTexture.uScale = 1 * (z/1000 + 2);

window.scene.getMaterialByName('groundMaterial').bumpTexture.vScale = 1 * (x/1000 + 2);
window.scene.getMaterialByName('groundMaterial').bumpTexture.uScale = 1* (z/1000 + 2);


window.scene.getMaterialByName('RoofTileMaterialFlat').albedoTexture.vScale = 0.65 * (x/1000 );
window.scene.getMaterialByName('RoofTileMaterialFlat').albedoTexture.uScale = 0.65 * (z/1000 );
window.scene.getMaterialByName('RoofTileMaterialFlat').bumpTexture.vScale = 0.65 * (x/1000 );
window.scene.getMaterialByName('RoofTileMaterialFlat').bumpTexture.uScale = 0.65 * (z/1000 );

console.log('sectionWidth: ' + sectionWidth);
window.appState['sectionWidth'] = sectionWidth;




//CREATING BALK ROOF CARKAS
if (window.appState['rooftype'] == 1)
{
for (let i=0; i<=20; i++)
{
window.scene.getMeshByName('liggerDeepth_' + i).setEnabled(false);
}
}

if (window.appState['rooftype'] == 0)
{
  for (let i=0; i<=20; i++)
  {
  window.scene.getMeshByName('liggerDeepth_' + i).setEnabled(false);
  }


for (let i=0; i<5; i++)
{
window.scene.getMeshByName('liggerDeepth_' + i).setEnabled(true);
window.scene.getMeshByName('liggerDeepth_' + (i +5)).setEnabled(true);


let startZ = z/-2000;
let stepZ  = z/5000;
let smallShift = 0.01;

window.scene.getMeshByName('liggerDeepth_' + i).position.x= x/-2000 - window.appState['overhangLeft']/1000 - 0.07 + smallShift;
window.scene.getMeshByName('liggerDeepth_' + (i+5)).position.x= x/2000 - smallShift;

window.scene.getMeshByName('liggerDeepth_' + i).scaling.x = (window.appState['overhangLeft'] + 70)/1000;
window.scene.getMeshByName('liggerDeepth_' + (i+5)).scaling.x = (window.appState['overhangRight'] + 70) /1000;

//window.scene.getMeshByName('liggerDeepth_' + i).setEnabled(true);
//window.scene.getMeshByName('liggerDeepth_' + (i+5)).setEnabled(true);

window.scene.getMeshByName('liggerDeepth_' + i).position.z     = startZ + i * stepZ;
window.scene.getMeshByName('liggerDeepth_' + (i+5)).position.z = startZ + i * stepZ;

}






}


//CREATING BALK UNDER ROOF
if (window.appState['rooftype'] == 0)
{
  window.scene.getMeshByName('roof2_bulk_front').setEnabled(false);
  window.scene.getMeshByName('roof2_bulk_back').setEnabled(false);
}
if (window.appState['rooftype'] == 1)
{
let shift = 0.10;
window.scene.getMeshByName('roof2_bulk_front').position=new BABYLON.Vector3(xStart - shift,  2.375-0.01, (zBack * -1) * 0.001 + 0.01);
window.scene.getMeshByName('roof2_bulk_back').position =new BABYLON.Vector3(xStart - shift,  1.875-0.01, (zBack *  1) * 0.001 - 0.01);
window.scene.getMeshByName('roof2_bulk_front').scaling.x  = x * 0.001 + shift*2;
window.scene.getMeshByName('roof2_bulk_back').scaling.x =   x * 0.001 + shift*2;


window.scene.getMeshByName('roof2_bulk_front').setEnabled(true);
window.scene.getMeshByName('roof2_bulk_back').setEnabled(true);
}



setColor();
//updateSections();
rebuildHouses();
elementsUpdate();
spaceUpdating();



spaceUIupdateSections();

updateUIinfo();

waterpipeUpdate();

draw2d();
calculate();
linkCreate();

if (typeof price === 'function') price();


if (window.appState['uiSpaceID'] != false) spaceOpenUI(window.appState['uiSpaceID']);

if (window.appState['widthLast']!= window.appState['width'] || window.appState['deepthLast']!= window.appState['deepth'])
{

window.appState['widthLast']  = window.appState['width'];
window.appState['deepthLast'] = window.appState['deepth'];

window.scene.getCameraByID('camera1').spinTo("target", new BABYLON.Vector3(0, 1.5, 0), 200);
window.scene.getCameraByID('camera1').spinTo("radius", 9+x/2000, 200);
window.scene.getCameraByID('camera1').lowerRadiusLimit=4+x/2000;
window.scene.getCameraByID('camera1').upperRadiusLimit=20+x/2000;


//window.scene.getCameraByID('camera1').upperBetaLimit=1.6;
}

window.scene.getLightByName('light_point_2').position.x = 4 + x/2000;
window.scene.getLightByName('light_point_2').position.z = 8 + z/2000;


window.scene.getLightByName('light_point_4').position.x = -4 - x/2000;
window.scene.getLightByName('light_point_4').position.z = 8 + z/2000;


window.scene.getLightByName('light_point_3').position.x = -4 - x/2000;
window.scene.getLightByName('light_point_3').position.z = -8 - z/2000;

window.scene.getLightByName('light_point_5').position.x = 4 + x/2000;
window.scene.getLightByName('light_point_5').position.z = -8 - z/2000;

}
function elementsCreating2()
{
}
function elementsCreating()
{

window.appState['house1wall1']=0;
window.appState['house1wall2']=0;
window.appState['house1wall3']=0;
window.appState['house1wall4']=0;

window.appState['house2wall1']=0;
window.appState['house2wall2']=0;
window.appState['house2wall3']=0;
window.appState['house2wall4']=0;


//set default
window.appState['house1wall1']=2;
window.appState['house1wall3']=1;
window.appState['house2wall1']=3;
window.appState['house2wall4']=1;

//window.appState['house1wall1']=5;
//window.appState['house1wall2']=5;
//window.appState['house1wall3']=5;
//window.appState['house1wall4']=5;
//window.appState['house2wall1']=5;
//window.appState['house2wall2']=5;
//window.appState['house2wall3']=5;
//window.appState['house2wall4']=5;



window.scene.getMaterialByName('Wood_Material').clone('Wood_Material_Doors');
window.scene.getMaterialByName('Wood_Material_Doors').metallic = 0;


//glass
var window_glass_material = new BABYLON.PBRMaterial("window_glass_material", window.scene);
window_glass_material.albedoColor = new BABYLON.Color3(0.2, 0.3, 0.3);
window_glass_material.albedoColor = new BABYLON.Color3(0.051, 0.051, 0.051);
//window_glass_material.reflectivityColor = new BABYLON.Color3(1.0, 0.766, 0.336);

//window_glass_material.refractionTexture = new  BABYLON.Texture("models/env.jpg", window.scene);
//window_glass_material.refractionTexture.depth = 4;
//window_glass_material.refractionTexture.coordinatesMode = BABYLON.Texture.SPHERE_MODE;
//window_glass_material.refractionTexture.level = 0.05;
//window_glass_material.indexOfRefraction = 1;
//window_glass_material.metallic = 1;
//window_glass_material.roughness = 0.1;
//window_glass_material.metallic = 0.9;
//window_glass_material.roughness = 0.2;


window_glass_material.albedoColor = new BABYLON.Color3(1,1,1);
window_glass_material.metallic = 0.1;
window_glass_material.roughness = 0.1;
window_glass_material.alpha = 0.2;




var window_glass = BABYLON.MeshBuilder.CreateBox("window_glass", {height: 0.01, width: 0.7, depth: 1});
window.scene.getMeshByName('window_glass').rotation = new BABYLON.Vector3(Math.PI/-2, 0 , 0);
window_glass.material=window.scene.getMaterialByName('window_glass_material');


//singleoor
window.scene.getMeshByName('door_single').scaling.x=10;
window.scene.getMeshByName('door_single').scaling.z=10;
window.scene.getMeshByName('door_single').scaling.y=10;

window.scene.getMeshByName('door_single').rotation = new BABYLON.Vector3(0, Math.PI/-2 , 0);
window.scene.getMeshByName('door_single').bakeCurrentTransformIntoVertices;

window.scene.getMeshByName('door_wood').material=window.scene.getMaterialByName('Wood_Material');
//window.scene.getMeshByName('door_border').material=window.scene.getMaterialByName('Wood_Material_Doors');


//window
window.scene.getMeshByName('window').material=window.scene.getMaterialByName('Wood_Material');

//door_double

//window.scene.getMeshByName('double_door_wood').material=window.scene.getMaterialByName('Wood_Material_Doors');
//window.scene.getMeshByName('double_door_middle').material=window.scene.getMaterialByName('Wood_Material_Doors');
//window.scene.getMeshByName('double_door_border').material=window.scene.getMaterialByName('Wood_Material_Doors');

window.scene.getMeshByName('double_door_wood').material=window.scene.getMaterialByName('Wood_Material');


window.scene.getMeshByName('double_door_hingles').material=window.scene.getMaterialByName('door_hingles');
//window.scene.getMeshByName('double_door_hangle').material=window.scene.getMaterialByName('door_handle');



window.scene.getMeshByName('door_double').scaling.x=10;
window.scene.getMeshByName('door_double').scaling.z=10;
window.scene.getMeshByName('door_double').scaling.y=10;



window.scene.getMeshByName('door_wood').scaling.x=2.7;
window.scene.getMeshByName('double_door_wood').scaling.x=2.7;

for(let i=1; i<=4; i++)
{
window.scene.getMeshByName('door_single').clone('house_1_door_single_left_' + i);
window.scene.getMeshByName('door_single').clone('house_2_door_single_left_' + i);

window.scene.getMeshByName('door_single').clone('house_1_door_single_right_' + i);
window.scene.getMeshByName('door_single').clone('house_2_door_single_right_' + i);

window.scene.getMeshByName('door_double').clone('house_1_door_double_' + i);
window.scene.getMeshByName('door_double').clone('house_2_door_double_' + i);



window.scene.getMeshByName('house_1_door_single_left_' + i).scaling.z=-10;
window.scene.getMeshByName('house_1_door_single_left_' + i).bakeCurrentTransformIntoVertices;
window.scene.getMeshByName('house_1_door_single_left_' + i).position.x=-1;

window.scene.getMeshByName('house_2_door_single_left_' + i).scaling.z=-10;
window.scene.getMeshByName('house_2_door_single_left_' + i).bakeCurrentTransformIntoVertices;
window.scene.getMeshByName('house_2_door_single_left_' + i).position.x=-1;



window.scene.getMeshByName('window').clone('house_1_window_' + i);
window.scene.getMeshByName('window').clone('house_2_window_' + i);


window.scene.getMeshByName('window_glass').clone('house_1_window_glass_' + i);
window.scene.getMeshByName('window_glass').clone('house_2_window_glass_' + i);
}


//hide garbage
window.scene.getMeshByName('window').setEnabled(false);
window.scene.getMeshByName('window_glass').setEnabled(false);
window.scene.getMeshByName('door_double').setEnabled(false);
window.scene.getMeshByName('door_single').setEnabled(false);


//window1
window.scene.getMeshByName('house_1_window_3').rotation = new BABYLON.Vector3(0, Math.PI/-2, 0);
window.scene.getMeshByName('house_1_window_4').rotation = new BABYLON.Vector3(0, Math.PI/-2, 0);
window.scene.getMeshByName('house_2_window_3').rotation = new BABYLON.Vector3(0, Math.PI/-2, 0);
window.scene.getMeshByName('house_2_window_4').rotation = new BABYLON.Vector3(0, Math.PI/-2, 0);


window.scene.getMeshByName('house_1_window_glass_3').rotation = new BABYLON.Vector3(Math.PI/-2, Math.PI/-2, 0);
window.scene.getMeshByName('house_1_window_glass_4').rotation = new BABYLON.Vector3(Math.PI/-2, Math.PI/-2, 0);
window.scene.getMeshByName('house_2_window_glass_3').rotation = new BABYLON.Vector3(Math.PI/-2, Math.PI/-2, 0);
window.scene.getMeshByName('house_2_window_glass_4').rotation = new BABYLON.Vector3(Math.PI/-2, Math.PI/-2, 0);


//single door left
window.scene.getMeshByName('house_1_door_single_left_1').rotation = new BABYLON.Vector3(0, Math.PI/-2 , 0);
window.scene.getMeshByName('house_1_door_single_left_2').rotation = new BABYLON.Vector3(0, Math.PI/2 , 0);
window.scene.getMeshByName('house_1_door_single_left_3').rotation = new BABYLON.Vector3(0, 0 , 0);
window.scene.getMeshByName('house_1_door_single_left_4').rotation = new BABYLON.Vector3(0, Math.PI, 0);

window.scene.getMeshByName('house_2_door_single_left_1').rotation = new BABYLON.Vector3(0, Math.PI/-2 , 0);
window.scene.getMeshByName('house_2_door_single_left_2').rotation = new BABYLON.Vector3(0, Math.PI/2 , 0);
window.scene.getMeshByName('house_2_door_single_left_3').rotation = new BABYLON.Vector3(0, 0 , 0);
window.scene.getMeshByName('house_2_door_single_left_4').rotation = new BABYLON.Vector3(0, Math.PI, 0);


//single door right
window.scene.getMeshByName('house_1_door_single_right_1').rotation = new BABYLON.Vector3(0, Math.PI/-2 , 0);
window.scene.getMeshByName('house_1_door_single_right_2').rotation = new BABYLON.Vector3(0, Math.PI/2 , 0);
window.scene.getMeshByName('house_1_door_single_right_3').rotation = new BABYLON.Vector3(0, 0 , 0);
window.scene.getMeshByName('house_1_door_single_right_4').rotation = new BABYLON.Vector3(0, Math.PI, 0);

window.scene.getMeshByName('house_2_door_single_right_1').rotation = new BABYLON.Vector3(0, Math.PI/-2 , 0);
window.scene.getMeshByName('house_2_door_single_right_2').rotation = new BABYLON.Vector3(0, Math.PI/2 , 0);
window.scene.getMeshByName('house_2_door_single_right_3').rotation = new BABYLON.Vector3(0, 0 , 0);
window.scene.getMeshByName('house_2_door_single_right_4').rotation = new BABYLON.Vector3(0, Math.PI, 0);

//double door

window.scene.getMeshByName('house_1_door_double_1').rotation = new BABYLON.Vector3(0, Math.PI/-2 , 0);
window.scene.getMeshByName('house_1_door_double_2').rotation = new BABYLON.Vector3(0, Math.PI/2 , 0);
window.scene.getMeshByName('house_1_door_double_3').rotation = new BABYLON.Vector3(0, 0 , 0);
window.scene.getMeshByName('house_1_door_double_4').rotation = new BABYLON.Vector3(0, Math.PI, 0);

window.scene.getMeshByName('house_2_door_double_1').rotation = new BABYLON.Vector3(0, Math.PI/-2 , 0);
window.scene.getMeshByName('house_2_door_double_2').rotation = new BABYLON.Vector3(0, Math.PI/2 , 0);
window.scene.getMeshByName('house_2_door_double_3').rotation = new BABYLON.Vector3(0, 0 , 0);
window.scene.getMeshByName('house_2_door_double_4').rotation = new BABYLON.Vector3(0, Math.PI, 0);


//Window Y
window.scene.getMeshByName('house_1_window_1').position.y = 1;
window.scene.getMeshByName('house_1_window_2').position.y = 1;
window.scene.getMeshByName('house_1_window_3').position.y = 1;
window.scene.getMeshByName('house_1_window_4').position.y = 1;

window.scene.getMeshByName('house_2_window_1').position.y = 1;
window.scene.getMeshByName('house_2_window_2').position.y = 1;
window.scene.getMeshByName('house_2_window_3').position.y = 1;
window.scene.getMeshByName('house_2_window_4').position.y = 1;


window.scene.getMeshByName('house_1_window_glass_1').position.y = 1.5;
window.scene.getMeshByName('house_1_window_glass_2').position.y = 1.5;
window.scene.getMeshByName('house_1_window_glass_3').position.y = 1.5;
window.scene.getMeshByName('house_1_window_glass_4').position.y = 1.5;

window.scene.getMeshByName('house_2_window_glass_1').position.y = 1.5;
window.scene.getMeshByName('house_2_window_glass_2').position.y = 1.5;
window.scene.getMeshByName('house_2_window_glass_3').position.y = 1.5;
window.scene.getMeshByName('house_2_window_glass_4').position.y = 1.5;





}

function houseSetUI()
{
for(let houseID=1; houseID<=2; houseID++)
{
for(let wallID=1; wallID<=4; wallID++)
{
  for(let i=0; i<=6; i++)
  {
  document.getElementById('optionHouses_' + houseID + '_' + wallID + '_' + i).classList.remove('optionHousesActive');
  document.getElementById('optionHouses_' + houseID + '_' + wallID + '_' + i).classList.add('optionHousesInactive');

  document.getElementById('houses_' + houseID + '_' + wallID + '_' + i + '_Checkbox').classList.remove('optionHousesCheckboxActive');
  document.getElementById('houses_' + houseID + '_' + wallID + '_' + i + '_Checkbox').classList.add('optionHousesCheckboxInative');



if (window.appState['house' +  houseID + 'wall' + wallID] == i)
{
document.getElementById('optionHouses_' + houseID + '_' + wallID + '_' + i).classList.add('optionHousesActive');
document.getElementById('optionHouses_' + houseID + '_' + wallID + '_' + i).classList.remove('optionHousesInactive');
document.getElementById('houses_' + houseID + '_' + wallID + '_' + i + '_Checkbox').classList.add('optionHousesCheckboxActive');
document.getElementById('houses_' + houseID + '_' + wallID + '_' + i + '_Checkbox').classList.remove('optionHousesCheckboxInative');
}

}
}
}

}

function housesSet(houseID, wallID, elementID)
{
  console.log (window.appState['house' +  houseID + 'wall' + wallID] );
window.appState['house' +  houseID + 'wall' + wallID] = elementID;
buildRound();
  console.log (window.appState['house' +  houseID + 'wall' + wallID] );
}

function elementsUpdate(){
//set off

let x = window.appState['width'];
let z = window.appState['deepth'];
let zBack=z/2000;
let xStart=(x/2)*-0.001;

let house1width = window.appState['house1width']/1000;
let house2width = window.appState['house2width']/1000;

let shiftZ;
if(window.appState['rooftype']==1) shiftZ=1; else shiftZ=0;

let windowAndDoorShift=0;




//window UI enable/disable elements
for(let i=1; i<5; i++)
{
for  (let ii=1; ii<=2; ii++)
{
//console.log('optionHouses_' + ii + '_' + i + ' _4');
document.getElementById('optionHouses_' + ii + '_' + i + '_0').style.cursor='pointer';
document.getElementById('optionHouses_' + ii + '_' + i + '_1').style.cursor='pointer';
document.getElementById('optionHouses_' + ii + '_' + i + '_2').style.cursor='pointer';
document.getElementById('optionHouses_' + ii + '_' + i + '_3').style.cursor='pointer';
document.getElementById('optionHouses_' + ii + '_' + i + '_4').style.cursor='pointer';
document.getElementById('optionHouses_' + ii + '_' + i + '_5').style.cursor='pointer';
document.getElementById('optionHouses_' + ii + '_' + i + '_6').style.cursor='pointer';


document.getElementById('optionHouses_' + ii + '_' + i + '_1').style.filter='none';
document.getElementById('optionHouses_' + ii + '_' + i + '_2').style.filter='none';
document.getElementById('optionHouses_' + ii + '_' + i + '_3').style.filter='none';
document.getElementById('optionHouses_' + ii + '_' + i + '_4').style.filter='none';
document.getElementById('optionHouses_' + ii + '_' + i + '_5').style.filter='none';
document.getElementById('optionHouses_' + ii + '_' + i + '_6').style.filter='none';


document.getElementById('optionHouses_' + ii + '_' + i + '_1').style.opacity=1;
document.getElementById('optionHouses_' + ii + '_' + i + '_2').style.opacity=1;
document.getElementById('optionHouses_' + ii + '_' + i + '_3').style.opacity=1;
document.getElementById('optionHouses_' + ii + '_' + i + '_4').style.opacity=1;
document.getElementById('optionHouses_' + ii + '_' + i + '_5').style.opacity=1;
document.getElementById('optionHouses_' + ii + '_' + i + '_6').style.opacity=1;

if (window.appState['house' + ii + 'width'] < 2500 && (i==1 || i==2))
{
  document.getElementById('optionHouses_' + ii + '_' + i + '_4').style.cursor='default';
  document.getElementById('optionHouses_' + ii + '_' + i + '_5').style.cursor='default';
  document.getElementById('optionHouses_' + ii + '_' + i + '_6').style.cursor='default';

  document.getElementById('optionHouses_' + ii + '_' + i + '_4').style.filter='grayscale(100%)';
  document.getElementById('optionHouses_' + ii + '_' + i + '_5').style.filter='grayscale(100%)';
  document.getElementById('optionHouses_' + ii + '_' + i + '_6').style.filter='grayscale(100%)';

  document.getElementById('optionHouses_' + ii + '_' + i + '_4').style.opacity=0.5;
  document.getElementById('optionHouses_' + ii + '_' + i + '_5').style.opacity=0.5;
  document.getElementById('optionHouses_' + ii + '_' + i + '_6').style.opacity=0.5;
}

if (window.appState['deepth']==3000 && window.appState['rooftype']==1 && (i==3 || i==4))
{

  document.getElementById('optionHouses_' + ii + '_' + i + '_4').style.cursor='default';
  document.getElementById('optionHouses_' + ii + '_' + i + '_5').style.cursor='default';
  document.getElementById('optionHouses_' + ii + '_' + i + '_6').style.cursor='default';

  document.getElementById('optionHouses_' + ii + '_' + i + '_4').style.filter='grayscale(100%)';
  document.getElementById('optionHouses_' + ii + '_' + i + '_5').style.filter='grayscale(100%)';
  document.getElementById('optionHouses_' + ii + '_' + i + '_6').style.filter='grayscale(100%)';

  document.getElementById('optionHouses_' + ii + '_' + i + '_4').style.opacity=0.5;
  document.getElementById('optionHouses_' + ii + '_' + i + '_5').style.opacity=0.5;
  document.getElementById('optionHouses_' + ii + '_' + i + '_6').style.opacity=0.5;

}


if (window.appState['rooftype']==1 && i==2)
{
  document.getElementById('optionHouses_' + ii + '_' + i + '_1').style.cursor='default';
  document.getElementById('optionHouses_' + ii + '_' + i + '_2').style.cursor='default';
  document.getElementById('optionHouses_' + ii + '_' + i + '_3').style.cursor='default';
  document.getElementById('optionHouses_' + ii + '_' + i + '_4').style.cursor='default';
  document.getElementById('optionHouses_' + ii + '_' + i + '_5').style.cursor='default';
  document.getElementById('optionHouses_' + ii + '_' + i + '_6').style.cursor='default';


  document.getElementById('optionHouses_' + ii + '_' + i + '_1').style.filter='grayscale(100%)';
  document.getElementById('optionHouses_' + ii + '_' + i + '_2').style.filter='grayscale(100%)';
  document.getElementById('optionHouses_' + ii + '_' + i + '_3').style.filter='grayscale(100%)';
  document.getElementById('optionHouses_' + ii + '_' + i + '_4').style.filter='grayscale(100%)';
  document.getElementById('optionHouses_' + ii + '_' + i + '_5').style.filter='grayscale(100%)';
  document.getElementById('optionHouses_' + ii + '_' + i + '_6').style.filter='grayscale(100%)';


  document.getElementById('optionHouses_' + ii + '_' + i + '_1').style.opacity=0.5;
  document.getElementById('optionHouses_' + ii + '_' + i + '_2').style.opacity=0.5;
  document.getElementById('optionHouses_' + ii + '_' + i + '_3').style.opacity=0.5;
  document.getElementById('optionHouses_' + ii + '_' + i + '_4').style.opacity=0.5;
  document.getElementById('optionHouses_' + ii + '_' + i + '_5').style.opacity=0.5;
  document.getElementById('optionHouses_' + ii + '_' + i + '_6').style.opacity=0.5;

}




}
// opacity: 0.5;
//  filter: grayscale(100%);
}



if (window.appState['house1width'] < 2500 )
{
if (window.appState['house1wall1']>3)window.appState['house1wall1']=2;
if (window.appState['house1wall2']>3)window.appState['house1wall2']=2;
}

if (window.appState['house2width'] < 2500 )
{
if (window.appState['house2wall1']>3)window.appState['house2wall1']=2;
if (window.appState['house2wall2']>3)window.appState['house2wall2']=2;
}

if (window.appState['deepth']==3000 && window.appState['rooftype']==1)
{

  if (window.appState['house1wall3']>3)window.appState['house1wall3']=2;
  if (window.appState['house1wall4']>3)window.appState['house1wall4']=2;
  if (window.appState['house2wall3']>3)window.appState['house2wall3']=2;
  if (window.appState['house2wall4']>3)window.appState['house2wall4']=2;

}

if(window.appState['rooftype']==1)
{
window.appState['house1wall2']=0;
window.appState['house2wall2']=0;

}

for(let i=1; i<=4; i++)
{
  window.scene.getMeshByName('house_1_window_' + i).setEnabled(false);
  window.scene.getMeshByName('house_2_window_' + i).setEnabled(false);

  window.scene.getMeshByName('house_1_window_glass_' + i).setEnabled(false);
  window.scene.getMeshByName('house_2_window_glass_' + i).setEnabled(false);

  window.scene.getMeshByName('house_1_door_double_' + i).setEnabled(false);
  window.scene.getMeshByName('house_2_door_double_' + i).setEnabled(false);

  window.scene.getMeshByName('house_1_door_single_left_' + i).setEnabled(false);
  window.scene.getMeshByName('house_2_door_single_left_' + i).setEnabled(false);

  window.scene.getMeshByName('house_1_door_single_right_' + i).setEnabled(false);
  window.scene.getMeshByName('house_2_door_single_right_' + i).setEnabled(false);


if (window.appState['house1on']==true)
{
if (window.appState['house1wall' + i] == 1)
{
window.scene.getMeshByName('house_1_window_' + i).setEnabled(true);
window.scene.getMeshByName('house_1_window_glass_' + i).setEnabled(true);
}
if (window.appState['house1wall' + i] == 2) window.scene.getMeshByName('house_1_door_single_left_' + i).setEnabled(true);
if (window.appState['house1wall' + i] == 3) window.scene.getMeshByName('house_1_door_single_right_' + i).setEnabled(true);
if (window.appState['house1wall' + i] == 4) window.scene.getMeshByName('house_1_door_double_' + i).setEnabled(true);

if (window.appState['house1wall' + i] == 5) {
  window.scene.getMeshByName('house_1_door_single_left_' + i).setEnabled(true);
  window.scene.getMeshByName('house_1_window_' + i).setEnabled(true);
  window.scene.getMeshByName('house_1_window_glass_' + i).setEnabled(true);
}

if (window.appState['house1wall' + i] == 6) {
  window.scene.getMeshByName('house_1_door_single_right_' + i).setEnabled(true);
  window.scene.getMeshByName('house_1_window_' + i).setEnabled(true);
  window.scene.getMeshByName('house_1_window_glass_' + i).setEnabled(true);
}

}


if (window.appState['house2on']==true)
{

if (window.appState['house2wall' + i] == 1)
{
window.scene.getMeshByName('house_2_window_' + i).setEnabled(true);
window.scene.getMeshByName('house_2_window_glass_' + i).setEnabled(true);
}

if (window.appState['house2wall' + i] == 2) window.scene.getMeshByName('house_2_door_single_left_' + i).setEnabled(true);
if (window.appState['house2wall' + i] == 3) window.scene.getMeshByName('house_2_door_single_right_' + i).setEnabled(true);
if (window.appState['house2wall' + i] == 4) window.scene.getMeshByName('house_2_door_double_' + i).setEnabled(true);

if (window.appState['house2wall' + i] == 5) {
  window.scene.getMeshByName('house_2_door_single_left_' + i).setEnabled(true);
  window.scene.getMeshByName('house_2_window_' + i).setEnabled(true);
  window.scene.getMeshByName('house_2_window_glass_' + i).setEnabled(true);
}

if (window.appState['house2wall' + i] == 6) {
  window.scene.getMeshByName('house_2_door_single_right_' + i).setEnabled(true);
  window.scene.getMeshByName('house_2_window_' + i).setEnabled(true);
  window.scene.getMeshByName('house_2_window_glass_' + i).setEnabled(true);
}


}

}

let xWindowShift= 0.05;
let zWindowShift= 0.038;
let zDoorsShift = 0.01;
let xDoorsShift = 0.02;

//windows
window.scene.getMeshByName('house_1_window_1').position.x = xStart + (house1width/2);
window.scene.getMeshByName('house_1_window_2').position.x = xStart + (house1width/2);
window.scene.getMeshByName('house_1_window_1').position.z = zBack * -1  + zWindowShift;
window.scene.getMeshByName('house_1_window_2').position.z = zBack +0.01 - zWindowShift;

window.scene.getMeshByName('house_2_window_1').position.x = xStart*-1 - (house2width/2);
window.scene.getMeshByName('house_2_window_2').position.x = xStart*-1 - (house2width/2);
window.scene.getMeshByName('house_2_window_1').position.z = zBack * -1 + zWindowShift;
window.scene.getMeshByName('house_2_window_2').position.z = zBack +0.01 - zWindowShift;


///3 4



window.scene.getMeshByName('house_1_window_3').position.x = xStart - 0.09 + xWindowShift;
window.scene.getMeshByName('house_1_window_4').position.x = xStart + house1width + 0.08 - xWindowShift;
window.scene.getMeshByName('house_2_window_3').position.x = xStart * -1 - house2width - 0.09 + xWindowShift;
window.scene.getMeshByName('house_2_window_4').position.x = xStart * -1  + 0.08 - xWindowShift;

window.scene.getMeshByName('house_1_window_3').position.z = 0-shiftZ/2 ;
window.scene.getMeshByName('house_1_window_4').position.z = 0-shiftZ/2 ;
window.scene.getMeshByName('house_2_window_3').position.z = 0-shiftZ/2 ;
window.scene.getMeshByName('house_2_window_4').position.z = 0-shiftZ/2 ;




//_glass
window.scene.getMeshByName('house_1_window_glass_1').position.x = xStart + (house1width/2);
window.scene.getMeshByName('house_1_window_glass_2').position.x = xStart + (house1width/2);
window.scene.getMeshByName('house_2_window_glass_1').position.x = xStart*-1 - (house2width/2);
window.scene.getMeshByName('house_2_window_glass_2').position.x = xStart*-1 - (house2width/2);

window.scene.getMeshByName('house_1_window_glass_1').position.z = zBack * -1 + zWindowShift;
window.scene.getMeshByName('house_1_window_glass_2').position.z = zBack - zWindowShift;
window.scene.getMeshByName('house_2_window_glass_1').position.z = zBack * -1 + zWindowShift;
window.scene.getMeshByName('house_2_window_glass_2').position.z = zBack - zWindowShift;

// 3 4
window.scene.getMeshByName('house_1_window_glass_3').position.x = xStart - 0.08 + xWindowShift;
window.scene.getMeshByName('house_1_window_glass_4').position.x = xStart + house1width + 0.08 - xWindowShift;
window.scene.getMeshByName('house_2_window_glass_3').position.x = xStart * -1 - house2width - 0.08 + xWindowShift;
window.scene.getMeshByName('house_2_window_glass_4').position.x = xStart * -1  + 0.08 - xWindowShift;


window.scene.getMeshByName('house_1_window_glass_3').position.z = 0-shiftZ/2 ;
window.scene.getMeshByName('house_1_window_glass_4').position.z = 0-shiftZ/2 ;
window.scene.getMeshByName('house_2_window_glass_3').position.z = 0-shiftZ/2 ;
window.scene.getMeshByName('house_2_window_glass_4').position.z = 0-shiftZ/2 ;


//DOOR LEFT
window.scene.getMeshByName('house_1_door_single_left_1').position.x = xStart + (house1width/2);
window.scene.getMeshByName('house_1_door_single_left_2').position.x = xStart + (house1width/2);
window.scene.getMeshByName('house_2_door_single_left_1').position.x = xStart*-1 - (house2width/2);
window.scene.getMeshByName('house_2_door_single_left_2').position.x = xStart*-1 - (house2width/2);

window.scene.getMeshByName('house_1_door_single_left_1').position.z = zBack * -1 - 0.01 + zDoorsShift;
window.scene.getMeshByName('house_1_door_single_left_2').position.z = zBack      + 0.01 - zDoorsShift;
window.scene.getMeshByName('house_2_door_single_left_1').position.z = zBack * -1 - 0.01 + zDoorsShift;
window.scene.getMeshByName('house_2_door_single_left_2').position.z = zBack      + 0.01 - zDoorsShift;

// 3 4
window.scene.getMeshByName('house_1_door_single_left_3').position.x = xStart - 0.08 + xDoorsShift;
window.scene.getMeshByName('house_1_door_single_left_4').position.x = xStart + house1width + 0.08 - xDoorsShift;
window.scene.getMeshByName('house_2_door_single_left_3').position.x = xStart * -1 - house2width - 0.08 + xDoorsShift;
window.scene.getMeshByName('house_2_door_single_left_4').position.x = xStart * -1  + 0.08 - xDoorsShift;


window.scene.getMeshByName('house_1_door_single_left_3').position.z = 0-shiftZ/2 ;
window.scene.getMeshByName('house_1_door_single_left_4').position.z = 0-shiftZ/2 ;
window.scene.getMeshByName('house_2_door_single_left_3').position.z = 0-shiftZ/2 ;
window.scene.getMeshByName('house_2_door_single_left_4').position.z = 0-shiftZ/2 ;

//DOOR right
window.scene.getMeshByName('house_1_door_single_right_1').position.x = xStart + (house1width/2);
window.scene.getMeshByName('house_1_door_single_right_2').position.x = xStart + (house1width/2);
window.scene.getMeshByName('house_2_door_single_right_1').position.x = xStart*-1 - (house2width/2);
window.scene.getMeshByName('house_2_door_single_right_2').position.x = xStart*-1 - (house2width/2);

window.scene.getMeshByName('house_1_door_single_right_1').position.z = zBack * -1 - 0.01 + zDoorsShift;
window.scene.getMeshByName('house_1_door_single_right_2').position.z = zBack      + 0.01 - zDoorsShift;
window.scene.getMeshByName('house_2_door_single_right_1').position.z = zBack * -1 - 0.01 + zDoorsShift;
window.scene.getMeshByName('house_2_door_single_right_2').position.z = zBack      + 0.01 - zDoorsShift;

// 3 4
window.scene.getMeshByName('house_1_door_single_right_3').position.x = xStart - 0.08 + xDoorsShift;
window.scene.getMeshByName('house_1_door_single_right_4').position.x = xStart + house1width + 0.08 - xDoorsShift;
window.scene.getMeshByName('house_2_door_single_right_3').position.x = xStart * -1 - house2width - 0.08 + xDoorsShift;
window.scene.getMeshByName('house_2_door_single_right_4').position.x = xStart * -1  + 0.08 - xDoorsShift;


window.scene.getMeshByName('house_1_door_single_right_3').position.z = 0-shiftZ/2 ;
window.scene.getMeshByName('house_1_door_single_right_4').position.z = 0-shiftZ/2 ;
window.scene.getMeshByName('house_2_door_single_right_3').position.z = 0-shiftZ/2 ;
window.scene.getMeshByName('house_2_door_single_right_4').position.z = 0-shiftZ/2 ;


//
let zDoubleDoorShift =  - 0.011;

//double DOOR
window.scene.getMeshByName('house_1_door_double_1').position.x = xStart + (house1width/2);
window.scene.getMeshByName('house_1_door_double_2').position.x = xStart + (house1width/2);
window.scene.getMeshByName('house_2_door_double_1').position.x = xStart*-1 - (house2width/2);
window.scene.getMeshByName('house_2_door_double_2').position.x = xStart*-1 - (house2width/2);

window.scene.getMeshByName('house_1_door_double_1').position.z = zBack * -1 + zDoubleDoorShift;
window.scene.getMeshByName('house_1_door_double_2').position.z = zBack      - zDoubleDoorShift;
window.scene.getMeshByName('house_2_door_double_1').position.z = zBack * -1 + zDoubleDoorShift;
window.scene.getMeshByName('house_2_door_double_2').position.z = zBack      - zDoubleDoorShift;

zDoubleDoorShift =   0.021;
// 3 4
window.scene.getMeshByName('house_1_door_double_3').position.x = xStart - 0.1 +zDoubleDoorShift;
window.scene.getMeshByName('house_1_door_double_4').position.x = xStart + house1width + 0.1 - zDoubleDoorShift;
window.scene.getMeshByName('house_2_door_double_3').position.x = xStart * -1 - house2width - 0.1 + zDoubleDoorShift;
window.scene.getMeshByName('house_2_door_double_4').position.x = xStart * -1  + 0.1 - zDoubleDoorShift;


window.scene.getMeshByName('house_1_door_double_3').position.z = 0-shiftZ/2 ;
window.scene.getMeshByName('house_1_door_double_4').position.z = 0-shiftZ/2 ;
window.scene.getMeshByName('house_2_door_double_3').position.z = 0-shiftZ/2 ;
window.scene.getMeshByName('house_2_door_double_4').position.z = 0-shiftZ/2 ;


//DOUBLE OPTION
windowAndDoorShift=0.5;

if (window.appState['house1wall1']==5){
windowAndDoorShift=0.5;
window.scene.getMeshByName('house_1_door_single_left_1').position.x-=windowAndDoorShift;
window.scene.getMeshByName('house_1_window_glass_1').position.x+=windowAndDoorShift;
window.scene.getMeshByName('house_1_window_1').position.x += windowAndDoorShift;
}

if (window.appState['house1wall1']==6){
windowAndDoorShift=0.5;
window.scene.getMeshByName('house_1_door_single_right_1').position.x+=windowAndDoorShift;
window.scene.getMeshByName('house_1_window_glass_1').position.x-=windowAndDoorShift;
window.scene.getMeshByName('house_1_window_1').position.x -= windowAndDoorShift;
}

if (window.appState['house1wall2']==5){
windowAndDoorShift=-0.5;
window.scene.getMeshByName('house_1_door_single_left_2').position.x-=windowAndDoorShift;
window.scene.getMeshByName('house_1_window_glass_2').position.x+=windowAndDoorShift;
window.scene.getMeshByName('house_1_window_2').position.x += windowAndDoorShift;
}

if (window.appState['house1wall2']==6){
windowAndDoorShift=-0.5;
window.scene.getMeshByName('house_1_door_single_right_2').position.x+=windowAndDoorShift;
window.scene.getMeshByName('house_1_window_glass_2').position.x-=windowAndDoorShift;
window.scene.getMeshByName('house_1_window_2').position.x -= windowAndDoorShift;
}

//

if (window.appState['house2wall1']==5){
windowAndDoorShift=0.5;
window.scene.getMeshByName('house_2_door_single_left_1').position.x-=windowAndDoorShift;
window.scene.getMeshByName('house_2_window_glass_1').position.x+=windowAndDoorShift;
window.scene.getMeshByName('house_2_window_1').position.x += windowAndDoorShift;
}

if (window.appState['house2wall1']==6){
windowAndDoorShift=0.5;
window.scene.getMeshByName('house_2_door_single_right_1').position.x+=windowAndDoorShift;
window.scene.getMeshByName('house_2_window_glass_1').position.x-=windowAndDoorShift;
window.scene.getMeshByName('house_2_window_1').position.x -= windowAndDoorShift;
}

if (window.appState['house2wall2']==5){
windowAndDoorShift=-0.5;
window.scene.getMeshByName('house_2_door_single_left_2').position.x-=windowAndDoorShift;
window.scene.getMeshByName('house_2_window_glass_2').position.x+=windowAndDoorShift;
window.scene.getMeshByName('house_2_window_2').position.x += windowAndDoorShift;
}

if (window.appState['house2wall2']==6){
windowAndDoorShift=-0.5;
window.scene.getMeshByName('house_2_door_single_right_2').position.x+=windowAndDoorShift;
window.scene.getMeshByName('house_2_window_glass_2').position.x-=windowAndDoorShift;
window.scene.getMeshByName('house_2_window_2').position.x -= windowAndDoorShift;
}


/////3
if (window.appState['house1wall3']==5){
windowAndDoorShift=-0.5;
window.scene.getMeshByName('house_1_door_single_left_3').position.z-=windowAndDoorShift;
window.scene.getMeshByName('house_1_window_glass_3').position.z+=windowAndDoorShift;
window.scene.getMeshByName('house_1_window_3').position.z += windowAndDoorShift;
}

if (window.appState['house1wall3']==6){
windowAndDoorShift=-0.5;
window.scene.getMeshByName('house_1_door_single_right_3').position.z+=windowAndDoorShift;
window.scene.getMeshByName('house_1_window_glass_3').position.z-=windowAndDoorShift;
window.scene.getMeshByName('house_1_window_3').position.z -= windowAndDoorShift;
}
///4
if (window.appState['house1wall4']==5){
windowAndDoorShift=0.5;
window.scene.getMeshByName('house_1_door_single_left_4').position.z-=windowAndDoorShift;
window.scene.getMeshByName('house_1_window_glass_4').position.z+=windowAndDoorShift;
window.scene.getMeshByName('house_1_window_4').position.z += windowAndDoorShift;
}

if (window.appState['house1wall4']==6){
windowAndDoorShift=0.5;
window.scene.getMeshByName('house_1_door_single_right_4').position.z+=windowAndDoorShift;
window.scene.getMeshByName('house_1_window_glass_4').position.z-=windowAndDoorShift;
window.scene.getMeshByName('house_1_window_4').position.z -= windowAndDoorShift;
}

// house 2 , 3 4
if (window.appState['house2wall3']==5){
windowAndDoorShift=-0.5;
window.scene.getMeshByName('house_2_door_single_left_3').position.z-=windowAndDoorShift;
window.scene.getMeshByName('house_2_window_glass_3').position.z+=windowAndDoorShift;
window.scene.getMeshByName('house_2_window_3').position.z += windowAndDoorShift;
}

if (window.appState['house2wall3']==6){
windowAndDoorShift=-0.5;
window.scene.getMeshByName('house_2_door_single_right_3').position.z+=windowAndDoorShift;
window.scene.getMeshByName('house_2_window_glass_3').position.z-=windowAndDoorShift;
window.scene.getMeshByName('house_2_window_3').position.z -= windowAndDoorShift;
}
///4
if (window.appState['house2wall4']==5){
windowAndDoorShift=0.5;
window.scene.getMeshByName('house_2_door_single_left_4').position.z-=windowAndDoorShift;
window.scene.getMeshByName('house_2_window_glass_4').position.z+=windowAndDoorShift;
window.scene.getMeshByName('house_2_window_4').position.z += windowAndDoorShift;
}

if (window.appState['house2wall4']==6){
windowAndDoorShift=0.5;
window.scene.getMeshByName('house_2_door_single_right_4').position.z+=windowAndDoorShift;
window.scene.getMeshByName('house_2_window_glass_4').position.z-=windowAndDoorShift;
window.scene.getMeshByName('house_2_window_4').position.z -= windowAndDoorShift;
}








if (window.appState['rooftype']==0 && z>=4500 )
{
if (z==5000)  windowAndDoorShift=-1.21;
if (z==4500)  windowAndDoorShift=-1.1;
//
  window.scene.getMeshByName('house_2_door_single_left_4').position.z += windowAndDoorShift;
  window.scene.getMeshByName('house_2_door_single_right_4').position.z += windowAndDoorShift;
  window.scene.getMeshByName('house_2_window_glass_4').position.z += windowAndDoorShift;
  window.scene.getMeshByName('house_2_window_4').position.z += windowAndDoorShift;
  window.scene.getMeshByName('house_2_door_double_4').position.z += windowAndDoorShift;

  window.scene.getMeshByName('house_2_door_single_left_3').position.z += windowAndDoorShift;
  window.scene.getMeshByName('house_2_door_single_right_3').position.z += windowAndDoorShift;
  window.scene.getMeshByName('house_2_window_glass_3').position.z += windowAndDoorShift;
  window.scene.getMeshByName('house_2_window_3').position.z += windowAndDoorShift;
  window.scene.getMeshByName('house_2_door_double_3').position.z += windowAndDoorShift;
//
  window.scene.getMeshByName('house_1_door_single_left_4').position.z += windowAndDoorShift;
  window.scene.getMeshByName('house_1_door_single_right_4').position.z += windowAndDoorShift;
  window.scene.getMeshByName('house_1_window_glass_4').position.z += windowAndDoorShift;
  window.scene.getMeshByName('house_1_window_4').position.z += windowAndDoorShift;
  window.scene.getMeshByName('house_1_door_double_4').position.z += windowAndDoorShift;

  window.scene.getMeshByName('house_1_door_single_left_3').position.z += windowAndDoorShift;
  window.scene.getMeshByName('house_1_door_single_right_3').position.z += windowAndDoorShift;
  window.scene.getMeshByName('house_1_window_glass_3').position.z += windowAndDoorShift;
  window.scene.getMeshByName('house_1_window_3').position.z += windowAndDoorShift;
  window.scene.getMeshByName('house_1_door_double_3').position.z += windowAndDoorShift;

}

if (window.appState['house1width'] == window.appState['width'] && window.appState['house1on'] == true)
{
  window.scene.getMeshByName('balk_small_front_left_2').setEnabled(false);
  window.scene.getMeshByName('balk_small_back_left_2').setEnabled(false);
}

if (window.appState['house2width'] == window.appState['width'] && window.appState['house2on'] == true)
{
  window.scene.getMeshByName('balk_small_front_right_2').setEnabled(false);
  window.scene.getMeshByName('balk_small_back_right_2').setEnabled(false);
}


if (window.appState['house1on']==true)
{





}










for(let i=1; i<=4; i++)
{
let iName;
if(i==1) iName = 'front';
if(i==2) iName = 'back';
if(i==3) iName = 'left';
if(i==4) iName = 'right';

//mesh.isEnabled()
for(let ii=1; ii<=2; ii++)
{

//DELETING
if (window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted') != null) window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted').dispose();
if (window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_inside') != null) window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_inside').dispose();
if (window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_carcas') != null) window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_carcas').dispose();

//DELETING


///console.log(window.scene.getMeshByName('house_' + ii +'_window_' + i).isEnabled());



if (window.scene.getMeshByName('house_' + ii +'_window_' + i).isEnabled() == true)
{











  if (window.scene.getMeshByName('wallTempClone') != null) window.scene.getMeshByName('wallTempClone').dispose();
  if (window.scene.getMeshByName('boxCut') != null) window.scene.getMeshByName('boxCut').dispose();
  if (window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted') != null) window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted').dispose();


  window.scene.getMeshByName('wall_house' + ii + '_' + iName).clone('wallTempClone');
  window.scene.getMeshByName('wallTempClone').makeGeometryUnique();
  window.scene.getMeshByName('wallTempClone').bakeCurrentTransformIntoVertices();


  let boxCut = BABYLON.MeshBuilder.CreateBox("boxCut", {height: 0.9, width: 0.8, depth: 0.8});
  boxCut.position.y = 1.5;
  boxCut.position.x = window.scene.getMeshByName('house_' + ii + '_window_' + i).position.x;
  boxCut.position.z = window.scene.getMeshByName('house_' + ii + '_window_' + i).position.z;


  let aCSG = BABYLON.CSG.FromMesh(window.scene.getMeshByName('boxCut'));
  let bCSG = BABYLON.CSG.FromMesh(window.scene.getMeshByName('wallTempClone'));
  let subCSG = bCSG.subtract(aCSG);
  let newMesh = subCSG.toMesh('wall_house' + ii + '_' + iName + '_cuted',   window.scene.getMeshByName('wall_house' + ii + '_' + iName).material, window.scene);
  //newMesh.position = new BABYLON.Vector3(-5, 3, 0);




//CUTING INNER WALL
if (window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_inside') != null) window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_inside').dispose();




//CUTING INNER WALL
if (window.scene.getMeshByName('wall_house' + ii +'_' + iName + '_inside').isEnabled() == true)
{

if (window.scene.getMeshByName('wallTempCloneInside') != null) window.scene.getMeshByName('wallTempCloneInside').dispose();


window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_inside').clone('wallTempCloneInside');

let aCSG = BABYLON.CSG.FromMesh(window.scene.getMeshByName('boxCut'));
let bCSG = BABYLON.CSG.FromMesh(window.scene.getMeshByName('wallTempCloneInside'));

let subCSG = bCSG.subtract(aCSG);

let newMesh = subCSG.toMesh('wall_house' + ii + '_' + iName + '_cuted_inside',   window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_inside').material, window.scene);


if (window.appState['color2']==0)
window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_inside').material=window.scene.getMaterialByName('wood_dark_0');

if (window.appState['color2']==1)
window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_inside').material=window.scene.getMaterialByName('Wood_Material');

if (window.appState['wallInside']==false)
window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_inside').setEnabled(false);

console.log('enter inside status' + window.appState['wallInside']);

window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_inside').setEnabled(false);
window.scene.getMeshByName('wallTempCloneInside').dispose();
}





//CUTING CARCASS
if (window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_carcas') != null) window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_carcas').dispose();


//CUTING CARCASS
if (window.scene.getMeshByName('wall_house' + ii +'_' + iName + '_carcas').isEnabled() == true)
{
//wallTempCloneCarcas
if (window.scene.getMeshByName('wallTempCloneCarcas') != null) window.scene.getMeshByName('wallTempCloneCarcas').dispose();


window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_carcas').clone('wallTempCloneCarcas');

let aCSG = BABYLON.CSG.FromMesh(window.scene.getMeshByName('boxCut'));
let bCSG = BABYLON.CSG.FromMesh(window.scene.getMeshByName('wallTempCloneCarcas'));

let subCSG = bCSG.subtract(aCSG);

let newMesh = subCSG.toMesh('wall_house' + ii + '_' + iName + '_cuted_carcas',   window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_carcas').material, window.scene);



window.scene.getMeshByName('wallTempCloneCarcas').dispose();
}







  window.scene.getMeshByName('wallTempClone').dispose();
  window.scene.getMeshByName('wall_house' + ii + '_' + iName).setEnabled(false);


  window.scene.getMeshByName('boxCut').dispose();


















}

///house_1_door_double_

if (window.scene.getMeshByName('house_' + ii +'_door_double_' + i).isEnabled() == true)
{











  if (window.scene.getMeshByName('wallTempClone') != null) window.scene.getMeshByName('wallTempClone').dispose();
  if (window.scene.getMeshByName('boxCut') != null) window.scene.getMeshByName('boxCut').dispose();
  if (window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted') != null) window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted').dispose();


  window.scene.getMeshByName('wall_house' + ii + '_' + iName).clone('wallTempClone');
  window.scene.getMeshByName('wallTempClone').makeGeometryUnique();
  window.scene.getMeshByName('wallTempClone').bakeCurrentTransformIntoVertices();


  let boxCut = BABYLON.MeshBuilder.CreateBox("boxCut", {height: 2.0, width: 1.8, depth: 1.8});
  boxCut.position.y = 0.98;
  boxCut.position.x = window.scene.getMeshByName('house_' + ii + '_window_' + i).position.x;
  boxCut.position.z = window.scene.getMeshByName('house_' + ii + '_window_' + i).position.z;


  let aCSG = BABYLON.CSG.FromMesh(window.scene.getMeshByName('boxCut'));
  let bCSG = BABYLON.CSG.FromMesh(window.scene.getMeshByName('wallTempClone'));
  let subCSG = bCSG.subtract(aCSG);
  let newMesh = subCSG.toMesh('wall_house' + ii + '_' + iName + '_cuted',   window.scene.getMeshByName('wall_house' + ii + '_' + iName).material, window.scene);
  //newMesh.position = new BABYLON.Vector3(-5, 3, 0);




//CUTING INNER WALL
if (window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_inside') != null) window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_inside').dispose();




//CUTING INNER WALL
if (window.scene.getMeshByName('wall_house' + ii +'_' + iName + '_inside').isEnabled() == true)
{

if (window.scene.getMeshByName('wallTempCloneInside') != null) window.scene.getMeshByName('wallTempCloneInside').dispose();


window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_inside').clone('wallTempCloneInside');

let aCSG = BABYLON.CSG.FromMesh(window.scene.getMeshByName('boxCut'));
let bCSG = BABYLON.CSG.FromMesh(window.scene.getMeshByName('wallTempCloneInside'));

let subCSG = bCSG.subtract(aCSG);

let newMesh = subCSG.toMesh('wall_house' + ii + '_' + iName + '_cuted_inside',   window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_inside').material, window.scene);


if (window.appState['color2']==0)
window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_inside').material=window.scene.getMaterialByName('wood_dark_0');

if (window.appState['color2']==1)
window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_inside').material=window.scene.getMaterialByName('Wood_Material');

if (window.appState['wallInside']==false)
window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_inside').setEnabled(false);

console.log('enter inside status' + window.appState['wallInside']);

window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_inside').setEnabled(false);
window.scene.getMeshByName('wallTempCloneInside').dispose();
}





//CUTING CARCASS
if (window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_carcas') != null) window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_carcas').dispose();


//CUTING CARCASS
if (window.scene.getMeshByName('wall_house' + ii +'_' + iName + '_carcas').isEnabled() == true)
{
//wallTempCloneCarcas
if (window.scene.getMeshByName('wallTempCloneCarcas') != null) window.scene.getMeshByName('wallTempCloneCarcas').dispose();


window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_carcas').clone('wallTempCloneCarcas');

let aCSG = BABYLON.CSG.FromMesh(window.scene.getMeshByName('boxCut'));
let bCSG = BABYLON.CSG.FromMesh(window.scene.getMeshByName('wallTempCloneCarcas'));

let subCSG = bCSG.subtract(aCSG);

let newMesh = subCSG.toMesh('wall_house' + ii + '_' + iName + '_cuted_carcas',   window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_carcas').material, window.scene);



window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_carcas').setEnabled(false);
window.scene.getMeshByName('wallTempCloneCarcas').dispose();
}







  window.scene.getMeshByName('wallTempClone').dispose();
  window.scene.getMeshByName('wall_house' + ii + '_' + iName).setEnabled(false);


  window.scene.getMeshByName('boxCut').dispose();


















}


// house_1_door_single_left_
// house_1_door_single_right_

if (
(
window.scene.getMeshByName('house_' + ii +'_door_single_left_' + i).isEnabled() == true
||
window.scene.getMeshByName('house_' + ii +'_door_single_right_' + i).isEnabled() == true
)

)
{













  if (window.scene.getMeshByName('wallTempClone') != null) window.scene.getMeshByName('wallTempClone').dispose();
  if (window.scene.getMeshByName('boxCut') != null) window.scene.getMeshByName('boxCut').dispose();
//  if (window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted') != null) window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted').dispose();


  if (window.scene.getMeshByName('house_' + ii +'_window_' + i).isEnabled() == false)  window.scene.getMeshByName('wall_house' + ii + '_' + iName).clone('wallTempClone');
  if (window.scene.getMeshByName('house_' + ii +'_window_' + i).isEnabled() == true)   window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted').clone('wallTempClone');


  window.scene.getMeshByName('wallTempClone').makeGeometryUnique();
  window.scene.getMeshByName('wallTempClone').bakeCurrentTransformIntoVertices();


  let boxCut = BABYLON.MeshBuilder.CreateBox("boxCut", {height: 2.0, width: 1.0, depth: 1.0});
  boxCut.position.y = 0.98;

  if (window.scene.getMeshByName('house_' + ii +'_door_single_left_' + i).isEnabled() == true)
{
  boxCut.position.x = window.scene.getMeshByName('house_' + ii + '_door_single_left_' + i).position.x;
  boxCut.position.z = window.scene.getMeshByName('house_' + ii + '_door_single_left_' + i).position.z;
}

if (window.scene.getMeshByName('house_' + ii +'_door_single_right_' + i).isEnabled() == true)
{
boxCut.position.x = window.scene.getMeshByName('house_' + ii + '_door_single_right_' + i).position.x;
boxCut.position.z = window.scene.getMeshByName('house_' + ii + '_door_single_right_' + i).position.z;
}


  let aCSG = BABYLON.CSG.FromMesh(window.scene.getMeshByName('boxCut'));
  let bCSG = BABYLON.CSG.FromMesh(window.scene.getMeshByName('wallTempClone'));
  let subCSG = bCSG.subtract(aCSG);


  if (window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted') != null) window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted').dispose();
  let newMesh = subCSG.toMesh('wall_house' + ii + '_' + iName + '_cuted',   window.scene.getMeshByName('wall_house' + ii + '_' + iName).material, window.scene);
  //newMesh.position = new BABYLON.Vector3(-5, 3, 0);




//CUTING INNER WALL
//if (window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_inside') != null) window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_inside').dispose();




//CUTING INNER WALL
if (window.scene.getMeshByName('wall_house' + ii +'_' + iName + '_inside').isEnabled() == true || window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_inside')!= null)
{
console.log('editing wall');
if (window.scene.getMeshByName('wallTempCloneInside') != null) window.scene.getMeshByName('wallTempCloneInside').dispose();


//window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_inside').clone('wallTempCloneInside');

if (window.scene.getMeshByName('house_' + ii +'_window_' + i).isEnabled() == false)
{
  window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_inside').clone('wallTempCloneInside');
}

if (window.scene.getMeshByName('house_' + ii +'_window_' + i).isEnabled() == true)
{
  window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_inside').clone('wallTempCloneInside');
  window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_inside').dispose();
}




let aCSG = BABYLON.CSG.FromMesh(window.scene.getMeshByName('boxCut'));
let bCSG = BABYLON.CSG.FromMesh(window.scene.getMeshByName('wallTempCloneInside'));

let subCSG = bCSG.subtract(aCSG);

if (window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_inside') != null) window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_inside').dispose();


let newMesh2 = subCSG.toMesh('wall_house' + ii + '_' + iName + '_cuted_inside',   window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_inside').material, window.scene);


if (window.appState['color2']==0) window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_inside').material=window.scene.getMaterialByName('wood_dark_0');
if (window.appState['color2']==1) window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_inside').material=window.scene.getMaterialByName('Wood_Material');

//if (window.appState['wallInside']==false)
window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_inside').setEnabled(false);

window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_inside').setEnabled(true);
window.scene.getMeshByName('wallTempCloneInside').dispose();
}





//CUTING CARCASS
//if (window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_carcas') != null) window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_carcas').dispose();


//CUTING CARCASS
if (window.scene.getMeshByName('wall_house' + ii +'_' + iName + '_carcas').isEnabled() == true)
{
//wallTempCloneCarcas
if (window.scene.getMeshByName('wallTempCloneCarcas') != null) window.scene.getMeshByName('wallTempCloneCarcas').dispose();


//window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_carcas').clone('wallTempCloneCarcas');

if (window.scene.getMeshByName('house_' + ii +'_window_' + i).isEnabled() == false)  window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_carcas').clone('wallTempCloneCarcas');
if (window.scene.getMeshByName('house_' + ii +'_window_' + i).isEnabled() == true)
{

window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_carcas').clone('wallTempCloneCarcas');
window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_carcas').dispose();
}



let aCSG = BABYLON.CSG.FromMesh(window.scene.getMeshByName('boxCut'));
let bCSG = BABYLON.CSG.FromMesh(window.scene.getMeshByName('wallTempCloneCarcas'));

let subCSG = bCSG.subtract(aCSG);

let newMesh = subCSG.toMesh('wall_house' + ii + '_' + iName + '_cuted_carcas',   window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_carcas').material, window.scene);



window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_carcas').setEnabled(false);
//window.scene.getMeshByName('wall_house' + ii + '_' + iName + '_cuted_carcas').setEnabled(false);
window.scene.getMeshByName('wallTempCloneCarcas').dispose();

}







  window.scene.getMeshByName('wallTempClone').dispose();
  window.scene.getMeshByName('wall_house' + ii + '_' + iName).setEnabled(false);
  window.scene.getMeshByName('wall_house' + ii + '_' + iName).setEnabled(false);


  window.scene.getMeshByName('boxCut').dispose();


















}






































}
}





//disabling SMALL triangles
if (window.appState['house1on']==true)
{
//window.scene.getMeshByName('balk_small_back_left_' + i).setEnabled(false);

window.scene.getMeshByName('balk_small_back_left_1').setEnabled(false);
window.scene.getMeshByName('balk_small_back_right_1').setEnabled(false);
window.scene.getMeshByName('balk_small_front_left_1').setEnabled(false);
window.scene.getMeshByName('balk_small_front_right_1').setEnabled(false);

window.scene.getMeshByName('balk_small_back_right_2').setEnabled(false);
window.scene.getMeshByName('balk_small_front_right_2').setEnabled(false);
}

if (window.appState['house2on']==true)
{

let sectionsNumber =window.appState['sectionsNumber'];
let sectionsNumber2 =window.appState['sectionsNumber']+1;


window.scene.getMeshByName('balk_small_back_left_' + sectionsNumber2).setEnabled(false);
window.scene.getMeshByName('balk_small_back_right_'  + sectionsNumber2).setEnabled(false);
window.scene.getMeshByName('balk_small_front_left_' + sectionsNumber2).setEnabled(false);
window.scene.getMeshByName('balk_small_front_right_' + sectionsNumber2).setEnabled(false);

window.scene.getMeshByName('balk_small_back_left_' + sectionsNumber).setEnabled(false);
window.scene.getMeshByName('balk_small_front_left_' + sectionsNumber).setEnabled(false);

}


if (window.appState['house1on']==true && window.appState['house2on']==true)
{
let deltaX = window.appState['width'];
deltaX = deltaX - window.appState['house1width'] - window.appState['house2width'];

if (deltaX == 500)
{
window.scene.getMeshByName('balk_small_back_left_2').setEnabled(false);
window.scene.getMeshByName('balk_small_front_left_2').setEnabled(false);


window.scene.getMeshByName('balk_small_back_right_3').setEnabled(false);
window.scene.getMeshByName('balk_small_front_right_3').setEnabled(false);
}

}



houseSetUI();

}
function createHouses()
{
  //walls for
//BALKS
window.scene.getMeshByName('1meter_balk').clone('house1_balk');
window.scene.getMeshByName('house1_balk' ).rotation=new BABYLON.Vector3(0, Math.PI/-2 , 0);

//cloning TRIANGLE WALLS
for (let i=1; i<=5; i++)
{
window.scene.getMeshByName('wall_roof_' + i).clone('house1_wall_roof_inside_' + i);
window.scene.getMeshByName('wall_roof_clone_' + i  ).clone('house1_wall_roof_' + i);
window.scene.getMeshByName('wall_roof_carcas_' + i ).clone('house1_wall_roof_carcas_' + i );
}

//CARCASS
window.scene.getMeshByName('wall_big_carcas').clone('wall_house1_front_carcas');
window.scene.getMeshByName('wall_big_carcas').clone('wall_house1_back_carcas');
window.scene.getMeshByName('wall_big_carcas').clone('wall_house1_left_carcas');
window.scene.getMeshByName('wall_big_carcas').clone('wall_house1_right_carcas');

window.scene.getMeshByName('wall_house1_front_carcas').makeGeometryUnique();
window.scene.getMeshByName('wall_house1_front_carcas').scaling.z=-1;
window.scene.getMeshByName('wall_house1_front_carcas').bakeCurrentTransformIntoVertices();

window.scene.getMeshByName('wall_house1_left_carcas').makeGeometryUnique();
window.scene.getMeshByName('wall_house1_left_carcas').rotation.y=Math.PI/-2;
window.scene.getMeshByName('wall_house1_left_carcas').bakeCurrentTransformIntoVertices();

window.scene.getMeshByName('wall_house1_right_carcas').makeGeometryUnique();
window.scene.getMeshByName('wall_house1_right_carcas').scaling.z=-1;
window.scene.getMeshByName('wall_house1_right_carcas').rotation.y=Math.PI/-2;
window.scene.getMeshByName('wall_house1_right_carcas').bakeCurrentTransformIntoVertices();

//CARCASS TRAP
window.scene.getMeshByName('wall_trap_1_carcas').clone('house1_trap_carcas');
window.scene.getMeshByName('wall_trap_1').clone('house1_trap');
window.scene.getMeshByName('wall_trap_0').clone('house1_trap_inside');

//WALLS
window.scene.getMeshByName('wall_big').clone('wall_house1_front');
window.scene.getMeshByName('wall_house1_front').makeGeometryUnique();
window.scene.getMeshByName('wall_house1_front').scaling.z=-1;
window.scene.getMeshByName('wall_house1_front').bakeCurrentTransformIntoVertices();
  //window.scene.getMeshByName('wall_house1_front').flipFaces();


  window.scene.getMeshByName('wall_big').clone('wall_house1_back');
  window.scene.getMeshByName('wall_big').clone('wall_house1_left');
  window.scene.getMeshByName('wall_big').clone('wall_house1_right');


  window.scene.getMeshByName('wall_house1_left').makeGeometryUnique();
  window.scene.getMeshByName('wall_house1_left').rotation.y=Math.PI/-2;
  window.scene.getMeshByName('wall_house1_left').bakeCurrentTransformIntoVertices();



  window.scene.getMeshByName('wall_house1_right').makeGeometryUnique();
  window.scene.getMeshByName('wall_house1_right').rotation.y=Math.PI/-2;
  window.scene.getMeshByName('wall_house1_right').scaling.z=-1;
//  window.scene.getMeshByName('wall_house1_right').flipFaces();
  window.scene.getMeshByName('wall_house1_right').bakeCurrentTransformIntoVertices();



  window.scene.getMeshByName('wall_house1_left').clone('wall_house1_right_inside');
  window.scene.getMeshByName('wall_house1_right').clone('wall_house1_left_inside');
  window.scene.getMeshByName('wall_house1_front').clone('wall_house1_back_inside');
  window.scene.getMeshByName('wall_house1_back').clone('wall_house1_front_inside');






///2

//walls for
//BALKS
window.scene.getMeshByName('1meter_balk').clone('house2_balk');
window.scene.getMeshByName('house2_balk' ).rotation=new BABYLON.Vector3(0, Math.PI/-2 , 0);

//cloning TRIANGLE WALLS
for (let i=1; i<=5; i++)
{
//house2_wall_roof_inside_  house2_wall_roof_
window.scene.getMeshByName('wall_roof_' + i).clone('house2_wall_roof_' + i);
window.scene.getMeshByName('wall_roof_clone_' + i  ).clone('house2_wall_roof_inside_' + i);
window.scene.getMeshByName('wall_roof_carcas_' + i ).clone('house2_wall_roof_carcas_' + i );
}

//CARCASS
window.scene.getMeshByName('wall_big_carcas').clone('wall_house2_front_carcas');
window.scene.getMeshByName('wall_big_carcas').clone('wall_house2_back_carcas');
window.scene.getMeshByName('wall_big_carcas').clone('wall_house2_left_carcas');
window.scene.getMeshByName('wall_big_carcas').clone('wall_house2_right_carcas');

window.scene.getMeshByName('wall_house2_front_carcas').makeGeometryUnique();
window.scene.getMeshByName('wall_house2_front_carcas').scaling.z=-1;
window.scene.getMeshByName('wall_house2_front_carcas').bakeCurrentTransformIntoVertices();

window.scene.getMeshByName('wall_house2_left_carcas').makeGeometryUnique();
window.scene.getMeshByName('wall_house2_left_carcas').rotation.y=Math.PI/-2;
window.scene.getMeshByName('wall_house2_left_carcas').bakeCurrentTransformIntoVertices();

window.scene.getMeshByName('wall_house2_right_carcas').makeGeometryUnique();
window.scene.getMeshByName('wall_house2_right_carcas').scaling.z=-1;
window.scene.getMeshByName('wall_house2_right_carcas').rotation.y=Math.PI/-2;
window.scene.getMeshByName('wall_house2_right_carcas').bakeCurrentTransformIntoVertices();

//CARCASS TRAP
window.scene.getMeshByName('wall_trap_1_carcas').clone('house2_trap_carcas');

window.scene.getMeshByName('wall_trap_0').clone('house2_trap');
window.scene.getMeshByName('wall_trap_1').clone('house2_trap_inside');

//WALLS
window.scene.getMeshByName('wall_big').clone('wall_house2_front');
window.scene.getMeshByName('wall_house2_front').makeGeometryUnique();
window.scene.getMeshByName('wall_house2_front').scaling.z=-1;
window.scene.getMeshByName('wall_house2_front').bakeCurrentTransformIntoVertices();
//window.scene.getMeshByName('wall_house2_front').flipFaces();


window.scene.getMeshByName('wall_big').clone('wall_house2_back');
window.scene.getMeshByName('wall_big').clone('wall_house2_left');
window.scene.getMeshByName('wall_big').clone('wall_house2_right');


window.scene.getMeshByName('wall_house2_left').makeGeometryUnique();
window.scene.getMeshByName('wall_house2_left').rotation.y=Math.PI/-2;
window.scene.getMeshByName('wall_house2_left').bakeCurrentTransformIntoVertices();



window.scene.getMeshByName('wall_house2_right').makeGeometryUnique();
window.scene.getMeshByName('wall_house2_right').rotation.y=Math.PI/-2;
window.scene.getMeshByName('wall_house2_right').scaling.z=-1;
//  window.scene.getMeshByName('wall_house2_right').flipFaces();
window.scene.getMeshByName('wall_house2_right').bakeCurrentTransformIntoVertices();



window.scene.getMeshByName('wall_house2_left').clone('wall_house2_right_inside');
window.scene.getMeshByName('wall_house2_right').clone('wall_house2_left_inside');
window.scene.getMeshByName('wall_house2_front').clone('wall_house2_back_inside');
window.scene.getMeshByName('wall_house2_back').clone('wall_house2_front_inside');

}





function rebuildHouses()
{
let x = window.appState['width'];
let z = window.appState['deepth'];
let zBack=z/2;
let xStart=(x/2)*-0.001;
let insideShiftX = 0.00;
let insideShiftZ = 0.00;

let shiftZ;
if(window.appState['rooftype']==1) shiftZ=1; else shiftZ=0;




if (window.appState['house1on']==true)
{
//VISIBILITY
window.scene.getMeshByName('wall_house1_front').setEnabled(true);
window.scene.getMeshByName('wall_house1_back').setEnabled(true);
window.scene.getMeshByName('wall_house1_left').setEnabled(true);
window.scene.getMeshByName('wall_house1_right').setEnabled(true);

window.scene.getMeshByName('house1_balk').setEnabled(true);

window.scene.getMeshByName('wall_house1_front_inside').setEnabled(window.appState['wallInside']);
window.scene.getMeshByName('wall_house1_back_inside').setEnabled(window.appState['wallInside']);
window.scene.getMeshByName('wall_house1_left_inside').setEnabled(window.appState['wallInside']);
window.scene.getMeshByName('wall_house1_right_inside').setEnabled(window.appState['wallInside']);

window.scene.getMeshByName('wall_house1_front_carcas').setEnabled(true);
window.scene.getMeshByName('wall_house1_back_carcas').setEnabled(true);
window.scene.getMeshByName('wall_house1_left_carcas').setEnabled(true);
window.scene.getMeshByName('wall_house1_right_carcas').setEnabled(true);



if (window.appState['rooftype']==0)
{
window.scene.getMeshByName('house1_trap').setEnabled(false);
window.scene.getMeshByName('house1_trap_inside').setEnabled(false);
window.scene.getMeshByName('wall_trap_0_inside').setEnabled(false);
window.scene.getMeshByName('house1_trap_carcas').setEnabled(false);

for (let i=1; i<=5; i++)
{
window.scene.getMeshByName('house1_wall_roof_' + i ).setEnabled(false);
window.scene.getMeshByName('house1_wall_roof_inside_' + i ).setEnabled(false);
window.scene.getMeshByName('house1_wall_roof_carcas_' + i ).setEnabled(false);
}

}

if (window.appState['rooftype']==1)
{
window.scene.getMeshByName('house1_trap').setEnabled(true);
window.scene.getMeshByName('house1_trap_inside').setEnabled(window.appState['wallInside']);
window.scene.getMeshByName('wall_trap_0_inside').setEnabled(window.appState['wallInside']);
window.scene.getMeshByName('house1_trap_carcas').setEnabled(true);
}



if(window.appState['rooftype']==1)
{
window.scene.getMeshByName('wall_house1_back'       ).setEnabled(false);
window.scene.getMeshByName('wall_house1_back_inside').setEnabled(false);
window.scene.getMeshByName('wall_house1_back_carcas'       ).setEnabled(false);
}



//SCALING
window.scene.getMeshByName('wall_house1_front').scaling.x=((window.appState['house1width']-150)/1000)/2.775;
window.scene.getMeshByName('wall_house1_back').scaling.x =((window.appState['house1width']-150)/1000)/2.775;
window.scene.getMeshByName('wall_house1_front_inside').scaling.x=((window.appState['house1width']-150)/1000)/2.775;
window.scene.getMeshByName('wall_house1_back_inside').scaling.x =((window.appState['house1width']-150)/1000)/2.775;

window.scene.getMeshByName('wall_house1_left').scaling.z  =((z - (shiftZ*1000) - 300)/1000)/2.775;
window.scene.getMeshByName('wall_house1_right').scaling.z =((z - (shiftZ*1000) - 300)/1000)/2.775;
window.scene.getMeshByName('wall_house1_left_inside').scaling.z  =((z - (shiftZ*1000) - 300)/1000)/2.775;
window.scene.getMeshByName('wall_house1_right_inside').scaling.z =((z - (shiftZ*1000) - 300)/1000)/2.775;


//POSITIONS
window.scene.getMeshByName('wall_house1_front').position=new BABYLON.Vector3(xStart + 0.075, 0, (zBack*-1)*0.001 + 0.075 - 0.0);
window.scene.getMeshByName('wall_house1_back').position=new BABYLON.Vector3(xStart + 0.075, 0, (zBack*1)*0.001 - 0.075 - 0.0  - shiftZ);
window.scene.getMeshByName('wall_house1_front_inside').position=new BABYLON.Vector3(xStart + 0.075, 0, (zBack*-1)*0.001 + 0.075 - 0.0 + insideShiftZ);
window.scene.getMeshByName('wall_house1_back_inside').position= new BABYLON.Vector3(xStart + 0.075, 0, (zBack* 1)*0.001 - 0.075 - 0.0 - insideShiftZ - shiftZ);

window.scene.getMeshByName('wall_house1_left').position=new BABYLON.Vector3(xStart + 0.01 , 0, (zBack*-1)*0.001 + 0.15 - 0.0);
window.scene.getMeshByName('wall_house1_right').position=new BABYLON.Vector3(  xStart  +  window.appState['house1width']/1000 - 0.01, 0, (zBack*-1)*0.001 + 0.15 - 0.0);
window.scene.getMeshByName('wall_house1_left_inside').position=new BABYLON.Vector3(xStart + 0.01 + insideShiftX, 0, (zBack*-1)*0.001 + 0.15 - 0.0);
window.scene.getMeshByName('wall_house1_right_inside').position=new BABYLON.Vector3(xStart  +  window.appState['house1width']/1000 - 0.01 - insideShiftX, 0, (zBack*-1)*0.001 + 0.15 - 0.0);

//POSITION TRAPETEUM
window.scene.getMeshByName('house1_trap').position        = new BABYLON.Vector3(xStart  +  window.appState['house1width']/1000 - 0.03 - insideShiftX, 0, (z/1000)/ 2 - 1);
window.scene.getMeshByName('house1_trap_inside').position = new BABYLON.Vector3(xStart  +  window.appState['house1width']/1000 - 0.01 - insideShiftX, 0, (z/1000)/ 2 - 1);
window.scene.getMeshByName('house1_trap_carcas').position = new BABYLON.Vector3(xStart  +  window.appState['house1width']/1000 + 0.05 - insideShiftX, 0, (z/1000)/ 2 - 1);


//SCALING CARCASS
window.scene.getMeshByName('wall_house1_left_carcas').scaling.z  =((z - (shiftZ*1000) - 300)/1000)/2.775;
window.scene.getMeshByName('wall_house1_right_carcas').scaling.z =((z - (shiftZ*1000) - 300)/1000)/2.775;
window.scene.getMeshByName('wall_house1_front_carcas').scaling.x=((window.appState['house1width']-150)/1000)/2.775;
window.scene.getMeshByName('wall_house1_back_carcas').scaling.x =((window.appState['house1width']-150)/1000)/2.775;

//POSITION CARCASS
window.scene.getMeshByName('wall_house1_left_carcas').position=new BABYLON.Vector3(xStart + 0.01 , 0, (zBack*-1)*0.001 + 0.15 - 0.0);
window.scene.getMeshByName('wall_house1_right_carcas').position=new BABYLON.Vector3(  xStart  +  window.appState['house1width']/1000 - 0.01, 0, (zBack*-1)*0.001 + 0.15 - 0.0);
window.scene.getMeshByName('wall_house1_front_carcas').position=new BABYLON.Vector3(xStart + 0.075, 0, (zBack*-1)*0.001 + 0.075 - 0.0);
window.scene.getMeshByName('wall_house1_back_carcas').position=new BABYLON.Vector3(xStart + 0.075, 0, (zBack*1)*0.001 - 0.075 - 0.0  - shiftZ);


//ROOF WALL AND CARCASS

for (let i=1; i<=5; i++)
{

window.scene.getMeshByName('house1_wall_roof_' + i).position.x = (x/-2000) + window.appState['house1width']/1000;
window.scene.getMeshByName('house1_wall_roof_' + i).position.y = 2.35;
window.scene.getMeshByName('house1_wall_roof_' + i).position.z = (z/2000)-1.05;

window.scene.getMeshByName('house1_wall_roof_carcas_' + i).position.x = (x/-2000) + window.appState['house1width']/1000;
window.scene.getMeshByName('house1_wall_roof_carcas_' + i).position.y = 2.35;
window.scene.getMeshByName('house1_wall_roof_carcas_' + i).position.z = (z/2000)-1.05;

window.scene.getMeshByName('house1_wall_roof_inside_' + i ).position.x = (x/-2000) + window.appState['house1width']/1000;
window.scene.getMeshByName('house1_wall_roof_inside_' + i ).position.y = 2.35;
window.scene.getMeshByName('house1_wall_roof_inside_' + i ).position.z = (z/2000)-1.05;

}


//BALK
window.scene.getMeshByName('house1_balk').scaling.x  = z * 0.001 - shiftZ;
window.scene.getMeshByName('house1_balk').position=new BABYLON.Vector3(xStart + window.appState['house1width']/1000,  2.2+0.075, (zBack*-1)*0.001);


}

if (window.appState['house1on']==false)
{
window.scene.getMeshByName('wall_house1_front').setEnabled(false);
window.scene.getMeshByName('wall_house1_back').setEnabled(false);
window.scene.getMeshByName('wall_house1_left').setEnabled(false);
window.scene.getMeshByName('wall_house1_right').setEnabled(false);

window.scene.getMeshByName('house1_balk').setEnabled(false);

window.scene.getMeshByName('wall_house1_front_inside').setEnabled(false);
window.scene.getMeshByName('wall_house1_back_inside').setEnabled(false);
window.scene.getMeshByName('wall_house1_left_inside').setEnabled(false);
window.scene.getMeshByName('wall_house1_right_inside').setEnabled(false);

window.scene.getMeshByName('wall_house1_front_carcas').setEnabled(false);
window.scene.getMeshByName('wall_house1_back_carcas').setEnabled(false);
window.scene.getMeshByName('wall_house1_left_carcas').setEnabled(false);
window.scene.getMeshByName('wall_house1_right_carcas').setEnabled(false);


window.scene.getMeshByName('house1_trap').setEnabled(false);
window.scene.getMeshByName('house1_trap_inside').setEnabled(false);
window.scene.getMeshByName('house1_trap_carcas').setEnabled(false);

for (let i=1; i<=5; i++)
{
window.scene.getMeshByName('house1_wall_roof_' + i ).setEnabled(false);
window.scene.getMeshByName('house1_wall_roof_inside_' + i ).setEnabled(false);
window.scene.getMeshByName('house1_wall_roof_carcas_' + i ).setEnabled(false);
}


}

//////////
xStart=(x/2)*0.001 - window.appState['house2width']/1000;

if (window.appState['house2on']==true)
{
//VISIBILITY
window.scene.getMeshByName('wall_house2_front').setEnabled(true);
window.scene.getMeshByName('wall_house2_back').setEnabled(true);
window.scene.getMeshByName('wall_house2_left').setEnabled(true);
window.scene.getMeshByName('wall_house2_right').setEnabled(true);

window.scene.getMeshByName('house2_balk').setEnabled(true);

window.scene.getMeshByName('wall_house2_front_inside').setEnabled(window.appState['wallInside']);
window.scene.getMeshByName('wall_house2_back_inside').setEnabled(window.appState['wallInside']);
window.scene.getMeshByName('wall_house2_left_inside').setEnabled(window.appState['wallInside']);
window.scene.getMeshByName('wall_house2_right_inside').setEnabled(window.appState['wallInside']);

window.scene.getMeshByName('wall_house2_front_carcas').setEnabled(true);
window.scene.getMeshByName('wall_house2_back_carcas').setEnabled(true);
window.scene.getMeshByName('wall_house2_left_carcas').setEnabled(true);
window.scene.getMeshByName('wall_house2_right_carcas').setEnabled(true);



if (window.appState['rooftype']==0)
{
window.scene.getMeshByName('house2_trap').setEnabled(false);
window.scene.getMeshByName('house2_trap_inside').setEnabled(false);
window.scene.getMeshByName('wall_trap_0_inside').setEnabled(false);
window.scene.getMeshByName('house2_trap_carcas').setEnabled(false);

for (let i=1; i<=5; i++)
{
window.scene.getMeshByName('house2_wall_roof_' + i ).setEnabled(false);
window.scene.getMeshByName('house2_wall_roof_inside_' + i ).setEnabled(false);
window.scene.getMeshByName('house2_wall_roof_carcas_' + i ).setEnabled(false);
}

}

if (window.appState['rooftype']==1)
{
window.scene.getMeshByName('house2_trap').setEnabled(true);
window.scene.getMeshByName('house2_trap_inside').setEnabled(window.appState['wallInside']);
window.scene.getMeshByName('wall_trap_1_inside').setEnabled(window.appState['wallInside']);
window.scene.getMeshByName('house2_trap_carcas').setEnabled(true);
}



if(window.appState['rooftype']==1)
{
window.scene.getMeshByName('wall_house2_back'       ).setEnabled(false);
window.scene.getMeshByName('wall_house2_back_inside').setEnabled(false);
window.scene.getMeshByName('wall_house2_back_carcas'       ).setEnabled(false);
}



//SCALING
window.scene.getMeshByName('wall_house2_front').scaling.x=((window.appState['house2width']-150)/1000)/2.775;
window.scene.getMeshByName('wall_house2_back').scaling.x =((window.appState['house2width']-150)/1000)/2.775;
window.scene.getMeshByName('wall_house2_front_inside').scaling.x=((window.appState['house2width']-150)/1000)/2.775;
window.scene.getMeshByName('wall_house2_back_inside').scaling.x =((window.appState['house2width']-150)/1000)/2.775;

window.scene.getMeshByName('wall_house2_left').scaling.z  =((z - (shiftZ*1000) - 300)/1000)/2.775;
window.scene.getMeshByName('wall_house2_right').scaling.z =((z - (shiftZ*1000) - 300)/1000)/2.775;
window.scene.getMeshByName('wall_house2_left_inside').scaling.z  =((z - (shiftZ*1000) - 300)/1000)/2.775;
window.scene.getMeshByName('wall_house2_right_inside').scaling.z =((z - (shiftZ*1000) - 300)/1000)/2.775;


//POSITIONS
window.scene.getMeshByName('wall_house2_front').position=new BABYLON.Vector3(xStart + 0.075, 0, (zBack*-1)*0.001 + 0.075 - 0.0);
window.scene.getMeshByName('wall_house2_back').position=new BABYLON.Vector3(xStart + 0.075, 0, (zBack*1)*0.001 - 0.075 - 0.0  - shiftZ);
window.scene.getMeshByName('wall_house2_front_inside').position=new BABYLON.Vector3(xStart + 0.075, 0, (zBack*-1)*0.001 + 0.075 - 0.0 + insideShiftZ);
window.scene.getMeshByName('wall_house2_back_inside').position= new BABYLON.Vector3(xStart + 0.075, 0, (zBack* 1)*0.001 - 0.075 - 0.0 - insideShiftZ - shiftZ);

window.scene.getMeshByName('wall_house2_left').position=new BABYLON.Vector3(xStart + 0.01 , 0, (zBack*-1)*0.001 + 0.15 - 0.0);
window.scene.getMeshByName('wall_house2_right').position=new BABYLON.Vector3(  xStart  +  window.appState['house2width']/1000 - 0.01, 0, (zBack*-1)*0.001 + 0.15 - 0.0);
window.scene.getMeshByName('wall_house2_left_inside').position=new BABYLON.Vector3(xStart + 0.01 + insideShiftX, 0, (zBack*-1)*0.001 + 0.15 - 0.0);
window.scene.getMeshByName('wall_house2_right_inside').position=new BABYLON.Vector3(xStart  +  window.appState['house2width']/1000 - 0.01 - insideShiftX, 0, (zBack*-1)*0.001 + 0.15 - 0.0);

//POSITION TRAPETEUM
window.scene.getMeshByName('house2_trap').position  =       new BABYLON.Vector3(xStart  + 0.03 - insideShiftX, 0, (z/1000)/ 2 - 1);
window.scene.getMeshByName('house2_trap_inside').position = new BABYLON.Vector3(xStart  - 0.01 - insideShiftX, 0, (z/1000)/ 2 - 1);
window.scene.getMeshByName('house2_trap_carcas').position = new BABYLON.Vector3(xStart  + 0.05 - insideShiftX, 0, (z/1000)/ 2 - 1);


//SCALING CARCASS
window.scene.getMeshByName('wall_house2_left_carcas').scaling.z  =((z - (shiftZ*1000) - 300)/1000)/2.775;
window.scene.getMeshByName('wall_house2_right_carcas').scaling.z =((z - (shiftZ*1000) - 300)/1000)/2.775;
window.scene.getMeshByName('wall_house2_front_carcas').scaling.x=((window.appState['house2width']-150)/1000)/2.775;
window.scene.getMeshByName('wall_house2_back_carcas').scaling.x =((window.appState['house2width']-150)/1000)/2.775;

//POSITION CARCASS
window.scene.getMeshByName('wall_house2_left_carcas').position=new BABYLON.Vector3(xStart + 0.01 , 0, (zBack*-1)*0.001 + 0.15 - 0.0);
window.scene.getMeshByName('wall_house2_right_carcas').position=new BABYLON.Vector3(  xStart  +  window.appState['house2width']/1000 - 0.01, 0, (zBack*-1)*0.001 + 0.15 - 0.0);
window.scene.getMeshByName('wall_house2_front_carcas').position=new BABYLON.Vector3(xStart + 0.075, 0, (zBack*-1)*0.001 + 0.075 - 0.0);
window.scene.getMeshByName('wall_house2_back_carcas').position=new BABYLON.Vector3(xStart + 0.075, 0, (zBack*1)*0.001 - 0.075 - 0.0  - shiftZ);


//ROOF WALL AND CARCASS

for (let i=1; i<=5; i++)
{

window.scene.getMeshByName('house2_wall_roof_' + i).position.x = xStart;
window.scene.getMeshByName('house2_wall_roof_' + i).position.y = 2.35;
window.scene.getMeshByName('house2_wall_roof_' + i).position.z = (z/2000)-1.05;

window.scene.getMeshByName('house2_wall_roof_carcas_' + i).position.x = xStart;
window.scene.getMeshByName('house2_wall_roof_carcas_' + i).position.y = 2.35;
window.scene.getMeshByName('house2_wall_roof_carcas_' + i).position.z = (z/2000)-1.05;

window.scene.getMeshByName('house2_wall_roof_inside_' + i ).position.x = xStart;
window.scene.getMeshByName('house2_wall_roof_inside_' + i ).position.y = 2.35;
window.scene.getMeshByName('house2_wall_roof_inside_' + i ).position.z = (z/2000)-1.05;

}


//BALK
window.scene.getMeshByName('house2_balk').scaling.x  = z * 0.001 - shiftZ;
window.scene.getMeshByName('house2_balk').position=new BABYLON.Vector3(xStart,  2.2+0.075, (zBack*-1)*0.001);


}





if (window.appState['house2on']==false)
{
window.scene.getMeshByName('wall_house2_front').setEnabled(false);
window.scene.getMeshByName('wall_house2_back').setEnabled(false);
window.scene.getMeshByName('wall_house2_left').setEnabled(false);
window.scene.getMeshByName('wall_house2_right').setEnabled(false);

window.scene.getMeshByName('house2_balk').setEnabled(false);

window.scene.getMeshByName('wall_house2_front_inside').setEnabled(false);
window.scene.getMeshByName('wall_house2_back_inside').setEnabled(false);
window.scene.getMeshByName('wall_house2_left_inside').setEnabled(false);
window.scene.getMeshByName('wall_house2_right_inside').setEnabled(false);

window.scene.getMeshByName('wall_house2_front_carcas').setEnabled(false);
window.scene.getMeshByName('wall_house2_back_carcas').setEnabled(false);
window.scene.getMeshByName('wall_house2_left_carcas').setEnabled(false);
window.scene.getMeshByName('wall_house2_right_carcas').setEnabled(false);







window.scene.getMeshByName('house2_trap').setEnabled(false);
window.scene.getMeshByName('house2_trap_inside').setEnabled(false);
window.scene.getMeshByName('house2_trap_carcas').setEnabled(false);

for (let i=1; i<=5; i++)
{
window.scene.getMeshByName('house2_wall_roof_' + i ).setEnabled(false);
window.scene.getMeshByName('house2_wall_roof_inside_' + i ).setEnabled(false);
window.scene.getMeshByName('house2_wall_roof_carcas_' + i ).setEnabled(false);
}


}































if (window.appState['wallInside']==false || window.appState['rooftype']==0)
{
for (let i=1; i<=9; i++)
{
  window.scene.getMeshByName('wall_small_inside_' + i).setEnabled(false);
}
//disable roof inside
for(let i=1;i<=5;i++)
{
window.scene.getMeshByName('wall_roof_inside_' + i).setEnabled(false);
window.scene.getMeshByName('wall_roof_clone_inside_' + i).setEnabled(false);
}
}



if (window.appState['wallInside']==false)
{
//disable roof
for(let i=1;i<=5;i++)
{
window.scene.getMeshByName('house1_wall_roof_inside_' + i ).setEnabled(false);
window.scene.getMeshByName('house2_wall_roof_inside_' + i ).setEnabled(false);
window.scene.getMeshByName('wall_roof_inside_' + i).setEnabled(false);
window.scene.getMeshByName('wall_roof_clone_inside_' + i).setEnabled(false);
}
//disable inner trap
window.scene.getMeshByName('wall_trap_0_inside').setEnabled(false);
window.scene.getMeshByName('wall_trap_1_inside').setEnabled(false);
}







}
function linkCreate()
{
  let obj={};
  obj.rooftype = window.appState['rooftype'];
  obj.roofcolor = window.appState['roofcolor'];
  obj.waterpipe = window.appState['waterpipe'];

  obj.width = window.appState['width'];
  obj.deepth = window.appState['deepth'];

  obj.overhangLeft = window.appState['overhangLeft'];
  obj.overhangRight = window.appState['overhangRight'];
  obj.overhangFront = window.appState['overhangFront'];
  obj.overhangBack = window.appState['overhangBack'];

  obj.house1on = window.appState['house1on'];
  obj.house2on = window.appState['house2on'];

  obj.house1width = window.appState['house1width'];
  obj.house2width = window.appState['house2width'];

  obj.color1 = window.appState['color1'];
  obj.color2 = window.appState['color2'];
  obj.wallInside = window.appState['wallInside'];

  obj.house1wall1 = window.appState['house1wall1'];
  obj.house1wall2 = window.appState['house1wall2'];
  obj.house1wall3 = window.appState['house1wall3'];
  obj.house1wall4 = window.appState['house1wall4'];

  obj.house2wall1 = window.appState['house2wall1'];
  obj.house2wall2 = window.appState['house2wall2'];
  obj.house2wall3 = window.appState['house2wall3'];
  obj.house2wall4 = window.appState['house2wall4'];


  for(let i=0;i<=17; i++){
  obj[i]=window.appSection[i];
  }

let encoded = btoa(JSON.stringify(obj));
//let linkPrefix = "https://freedompix.github.io/3dbuilder_v3/#"
//let linkPrefixAdmin = "https://freedompix.github.io/3dbuilder_v3/admin.html#"

let linkPrefix = ""
let linkPrefixAdmin = ""
//let linkPrefixAdmin = "https://3dvisualcode.github.io/CanopyWebDemo/admin.html#"




window.appState['linkAdmin'] = linkPrefixAdmin + encoded;
//document.getElementById('shareLink').value = location.host + "#" + encoded;
document.getElementById('shareLink').value = linkPrefix + encoded;


}


function linkParse()
{
if(window.appState['customConfig']){
//console.log(111);
let hash =  window.appState['customConfig'];
//test
//hash  = 'eyIwIjp7Im9yaWVudGF0aW9uIjowLCJ3YWxsIjpmYWxzZSwicGxhY2UiOlswLDAsMF19LCIxIjp7Im9yaWVudGF0aW9uIjowLCJ3YWxsIjpmYWxzZSwicGxhY2UiOlswLDAsMF19LCIyIjp7Im9yaWVudGF0aW9uIjowLCJ3YWxsIjpmYWxzZSwicGxhY2UiOlswLDAsMF19LCIzIjp7Im9yaWVudGF0aW9uIjowLCJ3YWxsIjpmYWxzZSwicGxhY2UiOlswLDAsMF19LCI0Ijp7Im9yaWVudGF0aW9uIjowLCJ3YWxsIjpmYWxzZSwicGxhY2UiOlswLDAsMF19LCI1Ijp7Im9yaWVudGF0aW9uIjowLCJ3YWxsIjpmYWxzZSwicGxhY2UiOlswLDAsMF19LCI2Ijp7Im9yaWVudGF0aW9uIjowLCJ3YWxsIjpmYWxzZSwicGxhY2UiOlswLDAsMF19LCI3Ijp7Im9yaWVudGF0aW9uIjowLCJ3YWxsIjpmYWxzZSwicGxhY2UiOlswLDAsMF19LCI4Ijp7Im9yaWVudGF0aW9uIjowLCJ3YWxsIjpmYWxzZSwicGxhY2UiOlswLDAsMF19LCI5Ijp7Im9yaWVudGF0aW9uIjowLCJ3YWxsIjpmYWxzZSwicGxhY2UiOlswLDAsMF19LCIxMCI6eyJvcmllbnRhdGlvbiI6MCwid2FsbCI6ZmFsc2UsInBsYWNlIjpbMCwwLDBdfSwiMTEiOnsib3JpZW50YXRpb24iOjAsIndhbGwiOmZhbHNlLCJwbGFjZSI6WzAsMCwwXX0sIjEyIjp7Im9yaWVudGF0aW9uIjowLCJ3YWxsIjpmYWxzZSwicGxhY2UiOlswLDAsMF19LCIxMyI6eyJvcmllbnRhdGlvbiI6MCwid2FsbCI6ZmFsc2UsInBsYWNlIjpbMCwwLDBdfSwiMTQiOnsib3JpZW50YXRpb24iOjAsIndhbGwiOmZhbHNlLCJwbGFjZSI6WzAsMCwwXX0sIjE1Ijp7Im9yaWVudGF0aW9uIjowLCJ3YWxsIjpmYWxzZSwicGxhY2UiOlswLDAsMF19LCIxNiI6eyJvcmllbnRhdGlvbiI6MCwid2FsbCI6ZmFsc2UsInBsYWNlIjpbMCwwLDBdfSwiMTciOnsib3JpZW50YXRpb24iOjAsIndhbGwiOmZhbHNlLCJwbGFjZSI6WzAsMCwwXX0sInJvb2Z0eXBlIjowLCJyb29mY29sb3IiOjEsIndhdGVycGlwZSI6MCwid2lkdGgiOjY1MDAsImRlZXB0aCI6MzAwMCwib3ZlcmhhbmdMZWZ0IjoyMDAsIm92ZXJoYW5nUmlnaHQiOjIwMCwib3ZlcmhhbmdGcm9udCI6MjAwLCJvdmVyaGFuZ0JhY2siOjIwMCwiaG91c2Uxb24iOmZhbHNlLCJob3VzZTJvbiI6ZmFsc2UsImhvdXNlMXdpZHRoIjozMDAwLCJob3VzZTJ3aWR0aCI6MzAwMCwiY29sb3IxIjowLCJjb2xvcjIiOjAsIndhbGxJbnNpZGUiOmZhbHNlLCJob3VzZTF3YWxsMSI6MiwiaG91c2Uxd2FsbDIiOjAsImhvdXNlMXdhbGwzIjoxLCJob3VzZTF3YWxsNCI6MCwiaG91c2Uyd2FsbDEiOjMsImhvdXNlMndhbGwyIjowLCJob3VzZTJ3YWxsMyI6MCwiaG91c2Uyd2FsbDQiOjF9';
//hash =  window.location.hash;
//console.log(hash);
//console.log(atob(hash));

let oxj = JSON.parse(atob(hash));
console.log(oxj);
  window.appState['rooftype'] =   oxj.rooftype;
  window.appState['roofcolor'] =   oxj.roofcolor;
  window.appState['waterpipe'] =   oxj.waterpipe;

  window.appState['width'] =   oxj.width;
  window.appState['deepth'] =   oxj.deepth;

  window.appState['overhangLeft'] =   oxj.overhangLeft;
  window.appState['overhangRight'] =   oxj.overhangRight;
  window.appState['overhangFront'] =   oxj.overhangFront;
  window.appState['overhangBack'] =   oxj.overhangBack;

  window.appState['house1on'] =   oxj.house1on;
  window.appState['house2on'] =   oxj.house2on;

  window.appState['house1width'] =   oxj.house1width;
  window.appState['house2width'] =   oxj.house2width;





  window.appState['color1'] =   oxj.color1;
  window.appState['color2'] =   oxj.color2;
  window.appState['wallInside'] =   oxj.wallInside;

  window.appState['house1wall1'] =   oxj.house1wall1;
  window.appState['house1wall2'] =   oxj.house1wall2;
  window.appState['house1wall3'] =   oxj.house1wall3;
  window.appState['house1wall4'] =   oxj.house1wall4;

  window.appState['house2wall1'] =   oxj.house2wall1;
  window.appState['house2wall2'] =   oxj.house2wall2;
  window.appState['house2wall3'] =   oxj.house2wall3;
  window.appState['house2wall4'] =   oxj.house2wall4;


  document.getElementById('widthInput').value=  window.appState['width'];
  document.getElementById('deepthInput').value=  window.appState['deepth'];
  document.getElementById("rangeWidth").value=  window.appState['width'];
  document.getElementById("rangeDeepth").value=  window.appState['deepth'];

  document.getElementById('overhangLeft').value=  window.appState['overhangLeft'];
  document.getElementById('overhangRight').value=  window.appState['overhangRight'];
  document.getElementById("overhangFront").value=  window.appState['overhangFront'];
  document.getElementById("overhangBack").value=  window.appState['overhangBack'];


  document.getElementById("house1width").value=  window.appState['house1width'];
  document.getElementById("house2width").value=  window.appState['house2width'];




document.getElementById("waterpipe").checked = false;

if(window.appState['waterpipe']==0)  document.getElementById("waterpipe").checked =false;
if(window.appState['waterpipe']==1)
{
document.getElementById("waterpipe").checked =true;
setWaterpipe();
}



if(oxj.color1==0) color1_1Select();
if(oxj.color1==1) color1_2Select();
if(oxj.color2==0) color2_1Select();
if(oxj.color2==1) color2_2Select();

roofColorSelect(window.appState['roofcolor']);

if(window.appState['rooftype']==1) {buildingType2Select();}

document.getElementById("wallInside").checked = oxj.wallInside;

if(oxj.wallInside == true)
{
document.getElementById("color2optionsDiv").style.display ='block';
}






  if (window.appState['house1on'] == true) {
  document.getElementById("house1on").checked = true;
  }

  if (window.appState['house2on'] == true) {
  document.getElementById("house2on").checked = true;
  }


  if (oxj.house1on == true) {
  document.getElementById("house1on").checked = true;
  }

  if (oxj.house2on == true) {
  document.getElementById("house2on").checked = true;
  }












for(let i=0;i<=17; i++){
window.appSection[i]=oxj[i];
}
//console.log(oxj);
//console.log(666);
}
//console.log(oxj);
setSizes();

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
document.getElementById('uiSpace').style.display='none';
document.getElementById('sectionsList').style.display='block';


for (i=1; i<=8; i++)
{
if (i != id)
{
window.appState['uiMenu'+i]=0;

document.getElementById('builderBlock' + i).classList.remove('builderBlockStyleActive');
document.getElementById('builderBlock' + i).classList.add('builderBlockStyleInactive');

document.getElementById('builderBlockText' + i).classList.remove('builderBlockTextActive');
document.getElementById('builderBlockText' + i).classList.add('builderBlockTextInactive');

document.getElementById('builderOptions' + i).style.display='none';

document.getElementById('builderArrow' + i).classList.remove('builderArrowActive');
document.getElementById('builderArrow' + i).classList.add('builderArrowInactive');
}
}



let newstate=window.appState['uiMenu'+id];
if(window.appState['uiMenu'+id]==1 && id != 0)
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
if (id != 0) window.appState['uiMenu'+id]=newstate;

//disabling section highlight

for(let ii=0;ii<=17;ii++)
{
if (window.appState['uiMenu7'] == 0) window.scene.getMeshByName('sec_' + ii + '_plane').setEnabled(false);
if (window.appState['uiMenu7'] == 1) window.scene.getMeshByName('sec_' + ii + '_plane').setEnabled(true);
}
if (window.appState['uiMenu7'] == 1) spaceUpdating();
if (window.appState['uiMenu7'] == 0) window.appState['uiSpaceID'] = false;

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



function isInt(value) {
  return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value))
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






buildRound();



}
window.appSection=[];
for(let i=0;i<=17;i++)
{
let sectionObj;
sectionObj={};
sectionObj.orientation=0;
sectionObj.wall = false;
sectionObj.place = [];
sectionObj.inner = false;
sectionObj.place[0] = 0;
sectionObj.place[1] = 0;
sectionObj.place[2] = 0;
window.appSection[i] = sectionObj;
}


//window.appState['width']=8000;


//window.appSection[0].place[0]=1;
//window.appSection[0].place[1]=1;
//window.appSection[0].place[2]=4;

//window.appSection[14].place[0]=1;
//window.appSection[14].place[1]=4;



//window.appSection[0].place[2]=1;


//window.appSection[14].place[0]=1;
//window.appSection[14].place[1]=2;
//window.appSection[14].orientation=1;
//window.appSection[14].wall=true;


//window.appSection[0].place[0]=1;
//window.appSection[0].place[1]=2;
//window.appSection[0].orientation=1;
//window.appSection[0].wall=true;

//window.appSection[15].place[0]=1;
//window.appSection[15].place[1]=2;
//window.appSection[15].orientation=1;

//window.appSection[1].wall=true;

//window.appSection[14].place[0]=1;
//window.appSection[14].orientation=0;
//window.appSection[14].wall=true;

//test 2d
//window.appSection[0].wall=true;
//window.appSection[1].wall=true;
//window.appSection[7].wall=true;

//window.appSection[0].place[0]=1;
//window.appSection[0].place[1]=4;


function spaceCreating()
{

  spaceUIupdateSections();
if (window.appState['uiSpaceID'] !== false)  spaceOpenUI(window.appState['uiSpaceID']);


var glass2Material  = new BABYLON.PBRMaterial("glass2Material", window.scene);
glass2Material.albedoColor = new BABYLON.Color3(1,1,1);
glass2Material.metallic = 0.1;
glass2Material.roughness = 0.1;
glass2Material.alpha = 0.2;


var glassBorderMaterial  = new BABYLON.PBRMaterial("glassBorderMaterial", window.scene);
glassBorderMaterial.albedoColor = new BABYLON.Color3(0,0,0);
glassBorderMaterial.metallic = 0.1;
glassBorderMaterial.roughness = 0.8;


//var planeUI = BABYLON.MeshBuilder.CreateBox("planeUI", {height: 0.03, width: 1, depth: 1});
var planeUI =  BABYLON.MeshBuilder.CreatePlane("planeUI", {height:2.2, width: 1, sideOrientation: BABYLON.Mesh.DOUBLESIDE});
planeUI.visibility=0.0;
planeUI.position.y=1.1;


var planeUIMaterial  = new BABYLON.PBRMaterial("planeUIMaterial", window.scene);

planeUIMaterial.albedoColor = new BABYLON.Color3(1,0,0);
planeUIMaterial.metallic = 0;
planeUIMaterial.roughness = 1;
planeUIMaterial.alpha = 0.3;






planeUI.material=planeUIMaterial;


//groundPlane.material=window.scene.getMaterialByName('glass2Material');

window.scene.getMeshByName('window_2').material=window.scene.getMaterialByName('glassBorderMaterial');
window.scene.getMeshByName('window_glass_2').material=window.scene.getMaterialByName('glass2Material');

window.scene.getMeshByName('window_glass_2').scaling.x=0.01;
window.scene.getMeshByName('window_glass_2').scaling.y=0.01;
window.scene.getMeshByName('window_glass_2').scaling.z=0.01;

window.scene.getMeshByName('window_2').scaling.x=0.01;
window.scene.getMeshByName('window_2').scaling.y=0.01;
window.scene.getMeshByName('window_2').scaling.z=0.01;

//
window.scene.getMeshByName('window_1').material=window.scene.getMaterialByName('glassBorderMaterial');
window.scene.getMeshByName('window_glass_1').material=window.scene.getMaterialByName('glass2Material');

window.scene.getMeshByName('window_glass_1').scaling.x=0.01;
window.scene.getMeshByName('window_glass_1').scaling.y=0.01;
window.scene.getMeshByName('window_glass_1').scaling.z=0.01;

window.scene.getMeshByName('window_1').scaling.x=0.01;
window.scene.getMeshByName('window_1').scaling.y=0.01;
window.scene.getMeshByName('window_1').scaling.z=0.01;

/// 4 and 5
//window.scene.getMeshByName('door2m').scaling.x=0.01;
//window.scene.getMeshByName('door2m').scaling.y=0.01;
//window.scene.getMeshByName('door2m').scaling.z=0.01;

//window.scene.getMeshByName('door2m_glass').scaling.x=0.01;
//window.scene.getMeshByName('door2m_glass').scaling.y=0.01;
//window.scene.getMeshByName('door2m_glass').scaling.z=0.01;



//DOOR 2M
window.scene.getMeshByName('door2m').material=window.scene.getMaterialByName('glassBorderMaterial');
window.scene.getMeshByName('door2m_glass').material=window.scene.getMaterialByName('glass2Material');

//DOOR 3M
window.scene.getMeshByName('door3m').material=window.scene.getMaterialByName('glassBorderMaterial');
window.scene.getMeshByName('door3m_glass').material=window.scene.getMaterialByName('glass2Material');

//DOOR 4M
window.scene.getMeshByName('door4m').material=window.scene.getMaterialByName('glassBorderMaterial');
window.scene.getMeshByName('door4m_glass').material=window.scene.getMaterialByName('glass2Material');

//disabling
window.scene.getMeshByName('zhaluzi').setEnabled(false);
window.scene.getMeshByName('planeUI').setEnabled(false);

window.scene.getMeshByName('window_1').setEnabled(false);
window.scene.getMeshByName('window_glass_1').setEnabled(false);

window.scene.getMeshByName('window_2').setEnabled(false);
window.scene.getMeshByName('window_glass_2').setEnabled(false);

window.scene.getMeshByName('door2m').setEnabled(false);
window.scene.getMeshByName('door2m_glass').setEnabled(false);

window.scene.getMeshByName('door3m').setEnabled(false);
window.scene.getMeshByName('door3m_glass').setEnabled(false);

window.scene.getMeshByName('door4m').setEnabled(false);
window.scene.getMeshByName('door4m_glass').setEnabled(false);

// 7 max with 2 house - 5 max with 0
// 7 + 7 =14 + 4

//

var actionManager = [];





for(let i=0;i<=17;i++)
{



//wall, redplane, buttonplane. 4 x 1m bulk
window.scene.getMeshByName('wall_big').clone('sec_' + i + '_wall');
window.scene.getMeshByName('wall_big').clone('sec_' + i + '_wall2');
//window.scene.getMeshByName('sec_' + i + '_wall2').setPivotPoint(new BABYLON.Vector3(0, 0, -0.05 * 10000));



window.scene.getMeshByName('wall_big_carcas').clone('sec_' + i + '_frame');

window.scene.getMeshByName('planeUI').clone('sec_' + i + '_plane');

window.scene.getMeshByName('balk_0').clone('sec_' + i + '_balk_1');
window.scene.getMeshByName('balk_0').clone('sec_' + i + '_balk_2');
window.scene.getMeshByName('balk_0').clone('sec_' + i + '_balk_3');
window.scene.getMeshByName('balk_0').clone('sec_' + i + '_balk_0');

window.scene.getMeshByName('zhaluzi').clone('sec_' + i + '_zhaluzi_0');
window.scene.getMeshByName('zhaluzi').clone('sec_' + i + '_zhaluzi_1');
window.scene.getMeshByName('zhaluzi').clone('sec_' + i + '_zhaluzi_2');

window.scene.getMeshByName('window_1').clone('sec_' + i + '_window_1_1');
window.scene.getMeshByName('window_1').clone('sec_' + i + '_window_1_2');
window.scene.getMeshByName('window_1').clone('sec_' + i + '_window_1_0');

window.scene.getMeshByName('window_2').clone('sec_' + i + '_window_2_1');
window.scene.getMeshByName('window_2').clone('sec_' + i + '_window_2_2');
window.scene.getMeshByName('window_2').clone('sec_' + i + '_window_2_0');

window.scene.getMeshByName('window_glass_1').clone('sec_' + i + '_window_glass_1_1');
window.scene.getMeshByName('window_glass_1').clone('sec_' + i + '_window_glass_1_2');
window.scene.getMeshByName('window_glass_1').clone('sec_' + i + '_window_glass_1_0');

window.scene.getMeshByName('window_glass_2').clone('sec_' + i + '_window_glass_2_1');
window.scene.getMeshByName('window_glass_2').clone('sec_' + i + '_window_glass_2_2');
window.scene.getMeshByName('window_glass_2').clone('sec_' + i + '_window_glass_2_0');


//DOOR 2M
window.scene.getMeshByName('door2m').clone('sec_' + i + '_door2m_0');
window.scene.getMeshByName('door2m').clone('sec_' + i + '_door2m_1');
window.scene.getMeshByName('door2m').clone('sec_' + i + '_door2m_2');

window.scene.getMeshByName('door2m_glass').clone('sec_' + i + '_door2m_glass_0');
window.scene.getMeshByName('door2m_glass').clone('sec_' + i + '_door2m_glass_1');
window.scene.getMeshByName('door2m_glass').clone('sec_' + i + '_door2m_glass_2');


//DOOR 3M
window.scene.getMeshByName('door3m').clone('sec_' + i + '_door3m_0');
window.scene.getMeshByName('door3m').clone('sec_' + i + '_door3m_1');
window.scene.getMeshByName('door3m').clone('sec_' + i + '_door3m_2');

window.scene.getMeshByName('door3m_glass').clone('sec_' + i + '_door3m_glass_0');
window.scene.getMeshByName('door3m_glass').clone('sec_' + i + '_door3m_glass_1');
window.scene.getMeshByName('door3m_glass').clone('sec_' + i + '_door3m_glass_2');

//DOOR 4M
window.scene.getMeshByName('door4m').clone('sec_' + i + '_door4m_0');
window.scene.getMeshByName('door4m').clone('sec_' + i + '_door4m_1');
window.scene.getMeshByName('door4m').clone('sec_' + i + '_door4m_2');

window.scene.getMeshByName('door4m_glass').clone('sec_' + i + '_door4m_glass_0');
window.scene.getMeshByName('door4m_glass').clone('sec_' + i + '_door4m_glass_1');
window.scene.getMeshByName('door4m_glass').clone('sec_' + i + '_door4m_glass_2');






//ROTATIONS
if (i < 7 || i == 16 || i == 17)
{
  window.scene.getMeshByName('sec_' + i + '_wall').makeGeometryUnique();
  window.scene.getMeshByName('sec_' + i + '_wall').scaling.z=-1;
  window.scene.getMeshByName('sec_' + i + '_wall').bakeCurrentTransformIntoVertices();

  window.scene.getMeshByName('sec_' + i + '_frame').makeGeometryUnique();
  window.scene.getMeshByName('sec_' + i + '_frame').scaling.z=-1;
  window.scene.getMeshByName('sec_' + i + '_frame').bakeCurrentTransformIntoVertices();
}


if (i>6 && i<14 || i == 14 || i == 15)
{
  window.scene.getMeshByName('sec_' + i + '_wall2').makeGeometryUnique();
  window.scene.getMeshByName('sec_' + i + '_wall2').scaling.z=-1;
  window.scene.getMeshByName('sec_' + i + '_wall2').bakeCurrentTransformIntoVertices();

//window.scene.getMeshByName('sec_' + i + '_wall2').setPivotPoint(new BABYLON.Vector3(1, 0, -0.09));
// console.log(window.scene.getMeshByName('sec_' + i + '_wall2').getPivotPoint());
// console.log(window.scene.getMeshByName('sec_' + i + '_wall2').getAbsolutePivotPoint());
}


if (i>6 && i<14 || i == 16 || i == 17)
{



//MIRORRIN
for (let ii=0; ii<3; ii++)
{
window.scene.getMeshByName('sec_' + i + '_zhaluzi_' + ii).makeGeometryUnique();
window.scene.getMeshByName('sec_' + i + '_zhaluzi_' + ii).scaling.z = -1;
window.scene.getMeshByName('sec_' + i + '_zhaluzi_' + ii).bakeCurrentTransformIntoVertices();

//WINDOW1
window.scene.getMeshByName('sec_' + i + '_window_1_' + ii).makeGeometryUnique();
window.scene.getMeshByName('sec_' + i + '_window_1_' + ii).scaling.z = -0.01;
window.scene.getMeshByName('sec_' + i + '_window_1_' + ii).bakeCurrentTransformIntoVertices();
window.scene.getMeshByName('sec_' + i + '_window_glass_1_' + ii).makeGeometryUnique();
window.scene.getMeshByName('sec_' + i + '_window_glass_1_' + ii).scaling.z = -0.01;
window.scene.getMeshByName('sec_' + i + '_window_glass_1_' + ii).bakeCurrentTransformIntoVertices();

//WINDOW2
window.scene.getMeshByName('sec_' + i + '_window_2_' + ii).makeGeometryUnique();
window.scene.getMeshByName('sec_' + i + '_window_2_' + ii).scaling.z = -0.01;
window.scene.getMeshByName('sec_' + i + '_window_2_' + ii).bakeCurrentTransformIntoVertices();
window.scene.getMeshByName('sec_' + i + '_window_glass_2_' + ii).makeGeometryUnique();
window.scene.getMeshByName('sec_' + i + '_window_glass_2_' + ii).scaling.z = -0.01;
window.scene.getMeshByName('sec_' + i + '_window_glass_2_' + ii).bakeCurrentTransformIntoVertices();

//DOOR2
window.scene.getMeshByName('sec_' + i + '_door2m_' + ii).makeGeometryUnique();
window.scene.getMeshByName('sec_' + i + '_door2m_' + ii).scaling.z=-1;
window.scene.getMeshByName('sec_' + i + '_door2m_' + ii).bakeCurrentTransformIntoVertices();
window.scene.getMeshByName('sec_' + i + '_door2m_glass_' + ii).makeGeometryUnique();
window.scene.getMeshByName('sec_' + i + '_door2m_glass_' + ii).scaling.z=-1;
window.scene.getMeshByName('sec_' + i + '_door2m_glass_' + ii).bakeCurrentTransformIntoVertices();
//DOOR3
window.scene.getMeshByName('sec_' + i + '_door3m_' + ii).makeGeometryUnique();
window.scene.getMeshByName('sec_' + i + '_door3m_' + ii).scaling.z=-1;
window.scene.getMeshByName('sec_' + i + '_door3m_' + ii).bakeCurrentTransformIntoVertices();
window.scene.getMeshByName('sec_' + i + '_door3m_glass_' + ii).makeGeometryUnique();
window.scene.getMeshByName('sec_' + i + '_door3m_glass_' + ii).scaling.z=-1;
window.scene.getMeshByName('sec_' + i + '_door3m_glass_' + ii).bakeCurrentTransformIntoVertices();
//DOOR4
window.scene.getMeshByName('sec_' + i + '_door4m_' + ii).makeGeometryUnique();
window.scene.getMeshByName('sec_' + i + '_door4m_' + ii).scaling.z=-1;
window.scene.getMeshByName('sec_' + i + '_door4m_' + ii).bakeCurrentTransformIntoVertices();
window.scene.getMeshByName('sec_' + i + '_door4m_glass_' + ii).makeGeometryUnique();
window.scene.getMeshByName('sec_' + i + '_door4m_glass_' + ii).scaling.z=-1;
window.scene.getMeshByName('sec_' + i + '_door4m_glass_' + ii).bakeCurrentTransformIntoVertices();



}







}




//ROTATIONS
if(i>13)
{

  window.scene.getMeshByName('sec_' + i + '_wall').rotation.y =  Math.PI/-2;
  window.scene.getMeshByName('sec_' + i + '_wall2').rotation.y =  Math.PI/-2;

  window.scene.getMeshByName('sec_' + i + '_frame').rotation.y =  Math.PI/-2;

  window.scene.getMeshByName('sec_' + i + '_plane').rotation.y =  Math.PI/2;

window.scene.getMeshByName('sec_' + i + '_zhaluzi_0').rotation.y =  Math.PI/2;
window.scene.getMeshByName('sec_' + i + '_zhaluzi_1').rotation.y =  Math.PI/2;
window.scene.getMeshByName('sec_' + i + '_zhaluzi_2').rotation.y =  Math.PI/2;

window.scene.getMeshByName('sec_' + i + '_window_2_0').rotation.y =  Math.PI/-2;
window.scene.getMeshByName('sec_' + i + '_window_2_1').rotation.y =  Math.PI/-2;
window.scene.getMeshByName('sec_' + i + '_window_2_2').rotation.y =  Math.PI/-2;

window.scene.getMeshByName('sec_' + i + '_window_glass_2_0').rotation.y =  Math.PI/-2;
window.scene.getMeshByName('sec_' + i + '_window_glass_2_1').rotation.y =  Math.PI/-2;
window.scene.getMeshByName('sec_' + i + '_window_glass_2_2').rotation.y =  Math.PI/-2;

window.scene.getMeshByName('sec_' + i + '_window_1_0').rotation.y =  Math.PI/-2;
window.scene.getMeshByName('sec_' + i + '_window_1_1').rotation.y =  Math.PI/-2;
window.scene.getMeshByName('sec_' + i + '_window_1_2').rotation.y =  Math.PI/-2;

window.scene.getMeshByName('sec_' + i + '_window_glass_1_0').rotation.y =  Math.PI/-2;
window.scene.getMeshByName('sec_' + i + '_window_glass_1_1').rotation.y =  Math.PI/-2;
window.scene.getMeshByName('sec_' + i + '_window_glass_1_2').rotation.y =  Math.PI/-2;


//DOOR 2M
window.scene.getMeshByName('sec_' + i + '_door2m_0').rotation.y =  Math.PI/-2;
window.scene.getMeshByName('sec_' + i + '_door2m_1').rotation.y =  Math.PI/-2;
window.scene.getMeshByName('sec_' + i + '_door2m_2').rotation.y =  Math.PI/-2;

window.scene.getMeshByName('sec_' + i + '_door2m_glass_0').rotation.y =  Math.PI/-2;
window.scene.getMeshByName('sec_' + i + '_door2m_glass_1').rotation.y =  Math.PI/-2;
window.scene.getMeshByName('sec_' + i + '_door2m_glass_2').rotation.y =  Math.PI/-2;

//DOOR 3M
window.scene.getMeshByName('sec_' + i + '_door3m_0').rotation.y =  Math.PI/-2;
window.scene.getMeshByName('sec_' + i + '_door3m_1').rotation.y =  Math.PI/-2;
window.scene.getMeshByName('sec_' + i + '_door3m_2').rotation.y =  Math.PI/-2;

window.scene.getMeshByName('sec_' + i + '_door3m_glass_0').rotation.y =  Math.PI/-2;
window.scene.getMeshByName('sec_' + i + '_door3m_glass_1').rotation.y =  Math.PI/-2;
window.scene.getMeshByName('sec_' + i + '_door3m_glass_2').rotation.y =  Math.PI/-2;

//DOOR 4M
window.scene.getMeshByName('sec_' + i + '_door4m_0').rotation.y =  Math.PI/-2;
window.scene.getMeshByName('sec_' + i + '_door4m_1').rotation.y =  Math.PI/-2;
window.scene.getMeshByName('sec_' + i + '_door4m_2').rotation.y =  Math.PI/-2;

window.scene.getMeshByName('sec_' + i + '_door4m_glass_0').rotation.y =  Math.PI/-2;
window.scene.getMeshByName('sec_' + i + '_door4m_glass_1').rotation.y =  Math.PI/-2;
window.scene.getMeshByName('sec_' + i + '_door4m_glass_2').rotation.y =  Math.PI/-2;



}


actionManager[i] = new BABYLON.ActionManager(window.scene);
actionManager[i].registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function(ev){
if (window.appState['uiMenu7']==1)
{
window.scene.getMeshByName('sec_' + i + '_plane').visibility=0.8;
}
}));

actionManager[i].registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger, function(ev){
if (window.appState['uiMenu7']==1)
{
window.scene.getMeshByName('sec_' + i + '_plane').visibility=0.0;
if(i===window.appState['uiSpaceID'] && window.appState['uiSpaceUIEnabled']==true) window.scene.getMeshByName('sec_' + i + '_plane').visibility=0.5;
}

}));

actionManager[i].registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickDownTrigger, function(ev){
if (window.appState['uiMenu7']==1)
{

if (window.appState['uiSpaceID']===i)
{
  console.log('close');
  window.appState['uiSpaceID'] = false;
  spaceCloseUIdiv();

  window.scene.getMeshByName('sec_' + i + '_plane').visibility=0.0;
}
else
{
  console.log('open');
  window.appState['uiSpaceID'] = i;
  spaceOpenUI(i);
  spaceOpenUIdiv(i);
  window.scene.getMeshByName('sec_' + i + '_plane').visibility=0.5;
}
}



}));






//window.scene.getMeshByName('sec_' + i + '_zhaluzi_0').actionManager = actionManager[i];
//window.scene.getMeshByName('sec_' + i + '_zhaluzi_1').actionManager = actionManager[i];
//window.scene.getMeshByName('sec_' + i + '_zhaluzi_2').actionManager = actionManager[i];

//window.scene.getMeshByName('sec_' + i + '_window_glass_1_0').actionManager = actionManager[i];
//window.scene.getMeshByName('sec_' + i + '_window_glass_1_1').actionManager = actionManager[i];
//window.scene.getMeshByName('sec_' + i + '_window_glass_1_2').actionManager = actionManager[i];

//window.scene.getMeshByName('sec_' + i + '_window_glass_2_0').actionManager = actionManager[i];
//window.scene.getMeshByName('sec_' + i + '_window_glass_2_1').actionManager = actionManager[i];
//window.scene.getMeshByName('sec_' + i + '_window_glass_2_2').actionManager = actionManager[i];

window.scene.getMeshByName('sec_' + i + '_plane').actionManager = actionManager[i];
window.scene.getMeshByName('sec_' + i + '_plane').setEnabled(false);

}






}
function spaceSetWall()
{
let id = window.appState['uiSpaceID'];
window.appSection[id].wall = document.getElementById("spaceWall").checked;
if(window.appSection[id].wall == false) window.appSection[id].inner = false;

if(window.appSection[id].wall == false) document.getElementById("spaceInnerWall").checked = false;

////console.log(window.appSection[id].wall);
buildRound();
}

function spaceSetInnerWall()
{
let id = window.appState['uiSpaceID'];
window.appSection[id].inner = document.getElementById("spaceInnerWall").checked;

if(window.appSection[id].wall == false) window.appSection[id].inner = false;
if(window.appSection[id].wall == false) document.getElementById("spaceInnerWall").checked = false;

////console.log(window.appSection[id].wall);
buildRound();
}



function spaceSetDirection()
{
let id = window.appState['uiSpaceID'];
window.appSection[id].orientation = document.getElementById("spaceDirection").checked;
////console.log(window.appSection[id].orientation);
buildRound();

}

function spaceOpenUIdiv(id)
{
window.appState['uiMenu7']=0;
switchUI(7);

window.appState['uiSpaceUIEnabled']=true;
document.getElementById('uiSpace').style.display='block';
document.getElementById('sectionsList').style.display='none';

////console.log('open' + id);

window.appState['uiSpaceID']=id;
buildRound();

//spaceOpenUI(id);
}

function spaceCloseUIdiv()
{
window.appState['uiSpaceUIEnabled']=false;
document.getElementById('uiSpace').style.display='none';
document.getElementById('sectionsList').style.display='block';
////console.log('close');

for(let ip=0; ip<=17; ip++)
{
if(window.scene.getMeshByName('sec_' + ip + '_plane')!=null) window.scene.getMeshByName('sec_' + ip + '_plane').visibility=0.0;
}

}


function spaceOpenUI(id)
{
window.appState['uiSpaceID']=id;


//set red highlight

for(let ip=0; ip<=17; ip++)
{
if(window.scene.getMeshByName('sec_' + ip + '_plane')!=null) window.scene.getMeshByName('sec_' + ip + '_plane').visibility=0.0;


if(ip==id ){
if(window.scene.getMeshByName('sec_' + ip + '_plane')!=null) window.scene.getMeshByName('sec_' + ip + '_plane').visibility=0.8;
}

}




//set all to null
if(window.appSection[id].place[0]==0 && window.appSection[id].place[1]==0 && window.appSection[id].place[2]==0)
{
document.getElementById('spaceBlock1').style.display='block';
document.getElementById('spaceBlock2').style.display='none';
document.getElementById('spaceBlock3').style.display='none';
}







if(window.appSection[id].place[0]!=0 && window.appSection[id].place[1]==0 && window.appSection[id].place[2]==0)
{
document.getElementById('spaceBlock1').style.display='block';
document.getElementById('spaceBlock2').style.display='block';
document.getElementById('spaceBlock3').style.display='none';
}

if(

(window.appSection[id].place[0]!=0 && window.appSection[id].place[1]!=0 && window.appSection[id].place[2]==0)
||
(window.appSection[id].place[0]!=0 && window.appSection[id].place[1]!=0 && window.appSection[id].place[2]!=0)

)
{
document.getElementById('spaceBlock1').style.display='block';
document.getElementById('spaceBlock2').style.display='block';
document.getElementById('spaceBlock3').style.display='block';
}













if(

(window.appSection[id].place[0]!=0 && window.appSection[id].place[1]!=0 && window.appSection[id].place[2]==0)
||
(window.appSection[id].place[0]!=0 && window.appSection[id].place[1]!=0 && window.appSection[id].place[2]!=0)

)
{
document.getElementById('spaceBlock1').style.display='block';
document.getElementById('spaceBlock2').style.display='block';
document.getElementById('spaceBlock3').style.display='block';
}




if(

((window.appSection[id].place[0]!=3 && window.appSection[id].place[1]==3) && window.appSection[id].place[2]==0)
||
(window.appSection[id].place[0]==3 && window.appSection[id].place[1]!=0 && window.appSection[id].place[2]==0)

)
{
document.getElementById('spaceBlock1').style.display='block';
document.getElementById('spaceBlock2').style.display='block';
document.getElementById('spaceBlock3').style.display='none';
}








if(window.appSection[id].place[0]==5 || window.appSection[id].place[0]==6 || window.appSection[id].place[1]==5 || window.appSection[id].place[1]==6 || window.appSection[id].place[2]==5 ||
window.appSection[id].place[2]==6)
{
//document.getElementById('spaceBlock1').style.display='block';
//document.getElementById('spaceBlock2').style.display='none';
//document.getElementById('spaceBlock3').style.display='none';
}


//RENDER BUTTONS




}

function spaceUIupdateSections()
{
for(let i=0;i<=17;i++)
{
let ID=i;
let sectionWidth;

sectionWidth = window.appState['sectionWidth'];



//if ( (sectionWidth < = 3300 && ) ){};


	if (window.appSection[ID].place[2]==3 && window.appSection[ID].place[1]==3) window.appSection[ID].place[2]=0;
	if (window.appSection[ID].place[2]==3 && window.appSection[ID].place[0]==3) window.appSection[ID].place[2]=0;




	if (window.appSection[ID].place[0]==3 && window.appSection[ID].place[1]==3)
	{
		window.appSection[ID].place[1]=window.appSection[ID].place[2];
		window.appSection[ID].place[2]=0;
	}




	if (window.appSection[ID].place[1]==0 && window.appSection[ID].place[2]!=0)
	{
		window.appSection[ID].place[1]=window.appSection[ID].place[2];
		window.appSection[ID].place[2]=0;
	}




	if (window.appSection[ID].place[0]==0 && window.appSection[ID].place[1]!=0)
	{
		window.appSection[ID].place[0]=window.appSection[ID].place[1];
		window.appSection[ID].place[1]=window.appSection[ID].place[2];
		window.appSection[ID].place[2]=0;
	}

	if (window.appSection[ID].place[0]==3 || window.appSection[ID].place[1]==3)
	{
		window.appSection[ID].place[2]=0;
	}

	if (window.appSection[ID].place[0]!=3 && window.appSection[ID].place[1]!=3 && window.appSection[ID].place[2]==3)
	{
		window.appSection[ID].place[2]=0;
	}













/// DISABLING BUTTON
if (ID==window.appState['uiSpaceID'])
{


if (ID < 14) sectionWidth = window.appState['sectionWidth']/1000 - 0.15;
if (ID >= 14)
{

if (window.appState['rooftype']==0 && window.appState['deepth']<4500)
{
	sectionWidth = (window.appState['deepth'])/1000 - 0.3;
}

if (window.appState['rooftype']==0 && window.appState['deepth']>=4500)
{
	sectionWidth = (window.appState['deepth']/2)/1000 - 0.225;
}


if (window.appState['rooftype']==1)
{
 sectionWidth = (window.appState['deepth'] /1000) - 1 - 0.3;
}

}


//console.log(ID);
//console.log(sectionWidth);
//console.log(window.appState['uiSpaceID']);
//console.log(666);


let cursorX = 0;
let sectionFull = false;

document.getElementById('uiSpaceButton0_0').style.cursor = "pointer";
document.getElementById('uiSpaceButton1_0').style.cursor = "pointer";
document.getElementById('uiSpaceButton2_0').style.cursor = "pointer";


for (ii = 0; ii<=2; ii++)
{

if (ii > 0)
{

// BALK DELEMITER
if(
	(window.appSection[ID].place[ii]==1   && (window.appSection[ID].place[ii-1]==2 || window.appSection[ID].place[ii-1]==3 || window.appSection[ID].place[ii-1]==4))
	||
	(window.appSection[ID].place[ii-1]==1 && (window.appSection[ID].place[ii]==2  || window.appSection[ID].place[ii]==3 || window.appSection[ID].place[ii]==4))
	||
	((window.appSection[ID].place[ii-1]==2 || window.appSection[ID].place[ii-1]==3 ) && (window.appSection[ID].place[ii]==4  || window.appSection[ID].place[ii]==5 || window.appSection[ID].place[ii]==6))
	||
	((window.appSection[ID].place[ii]==2 || window.appSection[ID].place[ii]==3 )  && (window.appSection[ID].place[ii-1]==4 || window.appSection[ID].place[ii-1]==5 || window.appSection[ID].place[ii-1]==6))
  ||
(window.appSection[ID].place[ii] == 4 && window.appSection[ID].place[ii-1] == 4)
	)
{
cursorX = cursorX + 0.15;
//console.log(cursorX);
}


		if (window.appSection[ID].place[ii-1]==1) cursorX = cursorX + 1;//
		if (window.appSection[ID].place[ii-1]==2) cursorX = cursorX + 1;
		if (window.appSection[ID].place[ii-1]==3) cursorX = cursorX + 2;//
		if (window.appSection[ID].place[ii-1]==4) cursorX = cursorX + 2;
		if (window.appSection[ID].place[ii-1]==5) cursorX = cursorX + 3;
		if (window.appSection[ID].place[ii-1]==6) cursorX = cursorX + 4;

//console.log('rendering ' + ii);
//console.log('sectionWidth ' + sectionWidth);
//console.log('cursorX ' + cursorX);





let tempCursorX = cursorX;

if (window.appSection[ID].place[ii]==1) tempCursorX = cursorX + 1;//
if (window.appSection[ID].place[ii]==2) tempCursorX = cursorX + 1;
if (window.appSection[ID].place[ii]==3) tempCursorX = cursorX + 2;//
if (window.appSection[ID].place[ii]==4) tempCursorX = cursorX + 2;
if (window.appSection[ID].place[ii]==5) tempCursorX = cursorX + 3;
if (window.appSection[ID].place[ii]==6) tempCursorX = cursorX + 4;

//console.log('tempCursorX ' + tempCursorX);

//disabling block
if ((sectionWidth < tempCursorX + 1) && ii < 2)
{
let idNext = ii + 2;
//console.log('idNext ' + idNext);


document.getElementById('spaceBlock' + idNext).style.display = "none";

//console.log("stop");
}

}

//console.log(cursorX);

//if (sectionWidth => cursorX + 1 &&  window.appSection[ID].place[ii]==1)
//if (sectionWidth < cursorX + 1 &&  window.appSection[ID].place[ii]==1)


let idNextI = ii + 1;



let stopElement = false;

if (sectionWidth < cursorX + 1)
{
//console.log('hide div spaceBlock ' + idNextI);
document.getElementById('spaceBlock' + idNextI).style.display = "none";
}

if (sectionWidth >= cursorX + 1)
{
//console.log('show div spaceBlock ' + idNextI);
//document.getElementById('spaceBlock' + idNextI).style.display = "block";
}


//close next after zero
if (window.appSection[ID].place[ii]==0 && ii<2)
{
//document.getElementById('spaceBlock' + idNextI).style.display = "none";
}







// 1m shutters
if (sectionWidth => cursorX + 1)
{
	document.getElementById('uiSpaceButton' + ii + '_1').style.cursor = "pointer";
	document.getElementById('uiSpaceButton' + ii + '_1').style.webkitFilter = "";
	document.getElementById('uiSpaceButton' + ii + '_1').style.opacity = 1;
	document.getElementById('uiSpaceButton' + ii + '_1').setAttribute('onclick','spaceSetUI(' + ii + ',1)');

;

}
if (sectionWidth < cursorX + 1)
{
	document.getElementById('uiSpaceButton' + ii + '_1').style.cursor = "default";
	document.getElementById('uiSpaceButton' + ii + '_1').style.webkitFilter = "grayscale(100%)";
	document.getElementById('uiSpaceButton' + ii + '_1').style.opacity = 0.5;
	document.getElementById('uiSpaceButton' + ii + '_1').setAttribute('onclick','');

	stopElement = true;
}

// 1m window
if (sectionWidth => cursorX + 1 )
{
	document.getElementById('uiSpaceButton' + ii + '_2').style.cursor = "pointer";
	document.getElementById('uiSpaceButton' + ii + '_2').style.webkitFilter = "";
	document.getElementById('uiSpaceButton' + ii + '_2').style.opacity = 1;
	document.getElementById('uiSpaceButton' + ii + '_2').setAttribute('onclick','spaceSetUI(' + ii + ',2)');

}

if (sectionWidth < cursorX + 1 )
{
	document.getElementById('uiSpaceButton' + ii + '_2').style.cursor = "default";
	document.getElementById('uiSpaceButton' + ii + '_2').style.webkitFilter = "grayscale(100%)";
	document.getElementById('uiSpaceButton' + ii + '_2').style.opacity = 0.5;
	document.getElementById('uiSpaceButton' + ii + '_2').setAttribute('onclick','');

	stopElement = true;
}

// 1m window
if (sectionWidth => cursorX + 2)
{
	document.getElementById('uiSpaceButton' + ii + '_3').style.cursor = "pointer";
	document.getElementById('uiSpaceButton' + ii + '_3').style.webkitFilter = "";
	document.getElementById('uiSpaceButton' + ii + '_3').style.opacity = 1;
	document.getElementById('uiSpaceButton' + ii + '_3').setAttribute('onclick','spaceSetUI(' + ii + ',3)');

}
if (sectionWidth < cursorX + 2)
{
	document.getElementById('uiSpaceButton' + ii + '_3').style.cursor = "default";
	document.getElementById('uiSpaceButton' + ii + '_3').style.webkitFilter = "grayscale(100%)";
	document.getElementById('uiSpaceButton' + ii + '_3').style.opacity = 0.5;
	document.getElementById('uiSpaceButton' + ii + '_3').setAttribute('onclick','');

}

// 2m glass door
if (sectionWidth => cursorX + 1.5  - 0.15 + 0.15)
{
	document.getElementById('uiSpaceButton' + ii + '_4').style.cursor = "pointer";
	document.getElementById('uiSpaceButton' + ii + '_4').style.webkitFilter = "";
	document.getElementById('uiSpaceButton' + ii + '_4').style.opacity = 1;
	document.getElementById('uiSpaceButton' + ii + '_4').setAttribute('onclick','spaceSetUI(' + ii + ',4)');

}
if (sectionWidth < cursorX + 1.5 - 0.15 + 0.15)
{
	document.getElementById('uiSpaceButton' + ii + '_4').style.cursor = "default";
	document.getElementById('uiSpaceButton' + ii + '_4').style.webkitFilter = "grayscale(100%)";
	document.getElementById('uiSpaceButton' + ii + '_4').style.opacity = 0.5;
	document.getElementById('uiSpaceButton' + ii + '_4').setAttribute('onclick','');

}

// 3m glass door
if (sectionWidth => cursorX + 2.5 - 0.15)
{
document.getElementById('uiSpaceButton' + ii + '_5').style.cursor = "pointer";
document.getElementById('uiSpaceButton' + ii + '_5').style.webkitFilter = "";
document.getElementById('uiSpaceButton' + ii + '_5').style.opacity = 1;
document.getElementById('uiSpaceButton' + ii + '_5').setAttribute('onclick','spaceSetUI(' + ii + ',5)');


}
if (sectionWidth < cursorX + 2.5 - 0.15)
{
document.getElementById('uiSpaceButton' + ii + '_5').style.cursor = "default";
document.getElementById('uiSpaceButton' + ii + '_5').style.webkitFilter = "grayscale(100%)";
document.getElementById('uiSpaceButton' + ii + '_5').style.opacity = 0.5;
document.getElementById('uiSpaceButton' + ii + '_5').setAttribute('onclick','');
}


// 4m glass door
if (sectionWidth => cursorX + 3.05)
{
document.getElementById('uiSpaceButton' + ii + '_6').style.cursor = "pointer";
document.getElementById('uiSpaceButton' + ii + '_6').style.webkitFilter = "";
document.getElementById('uiSpaceButton' + ii + '_6').style.opacity = 1;
document.getElementById('uiSpaceButton' + ii + '_6').setAttribute('onclick','spaceSetUI(' + ii + ',6)');

}
if (sectionWidth < cursorX + 3.05)
{
document.getElementById('uiSpaceButton' + ii + '_6').style.cursor = "default";
document.getElementById('uiSpaceButton' + ii + '_6').style.webkitFilter = "grayscale(100%)";
document.getElementById('uiSpaceButton' + ii + '_6').style.opacity = 0.5;
document.getElementById('uiSpaceButton' + ii + '_6').setAttribute('onclick','');

}


if (stopElement == true && ii==1)
{
document.getElementById('spaceBlock3').style.display = "none";
}

}
//end of 3 cycle


//let ii = 0;
//document.getElementById('uiSpaceButton' + ii + '_1').style.display = 'none';


if (window.appSection[ID].place[1]==0) document.getElementById('spaceBlock3').style.display = "none";


}


// end of 17 cycle
}


//SET BORDER HIGHLIGHT
if(window.appState['uiSpaceID']!==false)
{
for(let i=0; i<3; i++)
{

for(let ii=0; ii<7;ii++)
{
let idd = window.appState['uiSpaceID'];
document.getElementById('uiSpaceButton'+ i + '_' + ii).style.borderColor='#CCCCCC';
if (window.appSection[idd].place[i]==ii)
document.getElementById('uiSpaceButton'+ i + '_' + ii).style.borderColor='#FF0000';
}
}
}


}






function spaceSetUI(elementID, value)
{
////console.log(elementID + ' ' + value);
if (window.appState['uiSpaceID']!==false){
let ID = window.appState['uiSpaceID'];


window.appSection[ID].place[elementID]=value;


//SET ALL RO SLIDIN
if (value == 5 || value == 6)
{
//window.appSection[ID].place[0] = value;
//window.appSection[ID].place[1] = 0;
//window.appSection[ID].place[2] = 0;
}


////console.log(window.appSection[ID]);
spaceUIupdateSections();
spaceOpenUI(ID);
buildRound();
}
}
function spaceUpdating()
{
//console.log(window.appState['uiSpaceID']);
//reset sections
if (window.appState['rooftype']==0 && window.appState['deepth']<4500 || window.appState['rooftype']==1)
{
  let sectionObj;
  sectionObj={};
  sectionObj.orientation=0;
  sectionObj.wall = false;
  sectionObj.place = [];
  sectionObj.inner = false;
  sectionObj.place[0] = 0;
  sectionObj.place[1] = 0;
  sectionObj.place[2] = 0;
  window.appSection[15] = sectionObj;
  window.appSection[17] = sectionObj;
}




let x = window.appState['width']/1000;
let z = window.appState['deepth']/1000;

// window.appState['sectionsNumber']


let wallXShift = 0.15;
//if ()
//wallXShift = 0.00;
let wallXScale = 0.15;
let zWall2Shift =  - 0.03;

for(let i=0;i<=17;i++)
{

//wall, redplane, buttonplane. 4 x 1m bulk

window.scene.getMeshByName('sec_' + i + '_balk_1').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_balk_2').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_balk_3').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_balk_0').setEnabled(false);

window.scene.getMeshByName('sec_' + i + '_wall').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_wall2').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_frame').setEnabled(false);

window.scene.getMeshByName('sec_' + i + '_plane').setEnabled(false);

window.scene.getMeshByName('sec_' + i + '_window_1_1').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_window_1_2').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_window_1_0').setEnabled(false);

window.scene.getMeshByName('sec_' + i + '_window_2_1').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_window_2_2').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_window_2_0').setEnabled(false);

window.scene.getMeshByName('sec_' + i + '_window_glass_1_1').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_window_glass_1_2').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_window_glass_1_0').setEnabled(false);

window.scene.getMeshByName('sec_' + i + '_window_glass_2_1').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_window_glass_2_2').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_window_glass_2_0').setEnabled(false);


window.scene.getMeshByName('sec_' + i + '_zhaluzi_0').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_zhaluzi_1').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_zhaluzi_2').setEnabled(false);


window.scene.getMeshByName('sec_' + i + '_door2m_0').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_door2m_1').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_door2m_2').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_door2m_glass_0').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_door2m_glass_1').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_door2m_glass_2').setEnabled(false);


window.scene.getMeshByName('sec_' + i + '_door3m_0').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_door3m_1').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_door3m_2').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_door3m_glass_0').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_door3m_glass_1').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_door3m_glass_2').setEnabled(false);

window.scene.getMeshByName('sec_' + i + '_door4m_0').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_door4m_1').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_door4m_2').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_door4m_glass_0').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_door4m_glass_1').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_door4m_glass_2').setEnabled(false);




document.getElementById('sectionButton' + i).style.display='none';
document.getElementById('sectionButton' + i).style.backgroundColor='#FFFFFF';

let sectionFrontMax = window.appState['sectionsNumber'];

let sectionFull = false;

if (window.appState['house2on']==true) sectionFrontMax--;



if (

(
(i<7) &&
(i<sectionFrontMax) &&
!(window.appState['house1on']==true && i==0)
)

||

(
(i>=7 && i<14) &&
(i<sectionFrontMax+7) &&
!(window.appState['house1on']==true && i==7) &&
window.appState['rooftype']==0
)


||

(
(i==14)  &&
(window.appState['house1on']==false)
)

||

(i==15  && window.appState['house1on']==false && window.appState['deepth'] >= 4500  && window.appState['rooftype']==0)

||

(
(i==16)  &&
(window.appState['house2on']==false)
)

||

(i==17  && window.appState['house2on']==false && window.appState['deepth'] >= 4500 && window.appState['rooftype']==0)



)
//ORIENTATION NORMAL
if (window.appSection[i].orientation==0)
{
{
//START RENDERING SECTION i
//console.log(window.appState['uiSpaceID']);
document.getElementById('sectionButton' + i).style.display='inline-block';


if (i === window.appState['uiSpaceID'])
{
//  console.log(window.appState['uiSpaceID']);
//  console.log(i);
//highlight button
//document.getElementById('sectionButton' + i).style.backgroundColor='#FF0000';
document.getElementById("spaceWall").checked = window.appSection[i].wall;
document.getElementById("spaceInnerWall").checked = window.appSection[i].inner;
document.getElementById("spaceDirection").checked = window.appSection[i].orientation;

//console.log('checked wall: ' + document.getElementById("spaceWall").checked + ' ' + window.appSection[i].wall);
}

//console.log(i);

//ENABLING PLANE HIGLIGHT WHEN MENU OPEN
//window.scene.getMeshByName('sec_' + i + '_plane').setEnabled(true);
if (window.appState['uiMenu7'] == 1) window.scene.getMeshByName('sec_' + i + '_plane').setEnabled(true);




let xID = i;
if (i>=7 && i<=13) xID = i - 7;
//console.log(xID);
let balk1x = xID + 1;
let balk2x = xID + 2;


let balkXposition=[0,0,0,0];
let elementXposition = [0,0,0];

let cursorX=0;
let elementsMax = 3 - 1;


//DECREASE CYCLE FOR 1 ELEMENT
//if (window.appSection[i].place[0]==3 || window.appSection[i].place[1]==3 || window.appSection[i].place[2]==3
//|| window.appSection[i].place[0]==4 || window.appSection[i].place[1]==4 || window.appSection[i].place[2]==4
//) elementsMax = elementsMax - 1;

let stopFlag=false;
let startX;
let sectionWidth;
let tempZ=window.appState['deepth']/1000;

if(i<14)
{
startX = window.scene.getMeshByName('balk_front_' + balk1x).position.x - 0.075;
sectionWidth = window.scene.getMeshByName('balk_front_' + balk2x).position.x - window.scene.getMeshByName('balk_front_' + balk1x).position.x;
//console.log(sectionWidth);
//if (i == 0) console.log('bag ' + window.scene.getMeshByName('1meter_balk_front_1').position.x);
}

if(i == 14 || i == 16)
{

startX=z/-2 - 0.15;
if (window.appState['rooftype']==0 && window.appState['deepth']<4500)
sectionWidth = z - 0.3;


if (window.appState['rooftype']==0 && window.appState['deepth']>=4500)
{
startX = z/-2 - 0.15;
sectionWidth= z/2 - 0.225;

//sectionWidth=z/2;
}


if (window.appState['rooftype']==1)
{
sectionWidth = z-1 - 0.3 ;
}

}

if(i == 15 || i == 17)
{
startX = 0 - 0.075 - 0.15;
sectionWidth=z/2 - 0.225;
//sectionWidth=z/2;
}







//console.log(sectionWidth);

if (window.appSection[i].orientation==0)
{
startX=startX+ 0.15;
//window.scene.getMeshByName('sec_' + i + '_balk_' + 3).setEnabled(true);
}

if (window.appSection[i].orientation==1)
{
startX=startX+ 0.15;
//window.scene.getMeshByName('sec_' + i + '_balk_' + 0).setEnabled(true);
}



for(let ii=0; ii<=elementsMax; ii++)
{
let distanceBetweenElements=0;


//set delimiter balk
if (ii!==0)
{

if(
(window.appSection[i].place[ii]==1   && (window.appSection[i].place[ii-1]==2 || window.appSection[i].place[ii-1]==3 || window.appSection[i].place[ii-1]==4 || window.appSection[i].place[ii-1]==5 || window.appSection[i].place[ii-1]==6 )) || (window.appSection[i].place[ii-1]==1 && (window.appSection[i].place[ii]==2  || window.appSection[i].place[ii]==3 || window.appSection[i].place[ii]==4|| window.appSection[i].place[ii]==5 || window.appSection[i].place[ii]==6))
||
((window.appSection[i].place[ii-1]==2 || window.appSection[i].place[ii-1]==3 ) && (window.appSection[i].place[ii]==4  || window.appSection[i].place[ii]==5 || window.appSection[i].place[ii]==6))
||
((window.appSection[i].place[ii]==2 || window.appSection[i].place[ii]==3 )  && (window.appSection[i].place[ii-1]==4 || window.appSection[i].place[ii-1]==5 || window.appSection[i].place[ii-1]==6))
||
( window.appSection[i].place[ii]==4  && window.appSection[i].place[ii-1]==4 )
)
{
//
if(window.appSection[i].place[ii+1]!=0 && ii < 4)
{}
cursorX = cursorX + 0.15;
window.scene.getMeshByName('sec_' + i + '_balk_' + ii).setEnabled(true);
window.scene.getMeshByName('sec_' + i + '_balk_' + ii).position.x = cursorX - 0.075;
balkXposition[ii]=cursorX;
stopFlag=true;
}else stopFlag=false;

}

elementXposition[ii]=cursorX;
//console.log(window.appState['sectionWidth']/1000 );
//console.log(cursorX + 1 );
//console.log(window.appState['sectionWidth']/1000 > cursorX + 1);

// disable limiter for 4m glass door

//if (ii<3 && i===window.appState['uiSpaceID']) document.getElementById('spaceBlock' + (ii+1)).style.display='none';

let elementIsScaling = 0;
let elementScalingRatio = 0;
let elementScaleDelta = 0;


if
(
(sectionWidth > cursorX + 1 && ( window.appSection[i].place[ii]==1 || window.appSection[i].place[ii]==2))
||
(sectionWidth > cursorX + 2 && window.appSection[i].place[ii]==3)
||
(sectionWidth > cursorX + 2 && window.appSection[i].place[ii]==4)
||
(sectionWidth > cursorX + 3 && window.appSection[i].place[ii]==5)
||
(sectionWidth > cursorX + 4 && window.appSection[i].place[ii]==6)
)

{



















if (ii<3 && i===window.appState['uiSpaceID']) document.getElementById('spaceBlock' + (ii+1)).style.display='block';

if (window.appSection[i].place[ii]==1)
{
window.scene.getMeshByName('sec_' + i + '_zhaluzi_' + ii).setEnabled(true);
cursorX = cursorX + 1;
}

if (window.appSection[i].place[ii]==2)
{
window.scene.getMeshByName('sec_' + i + '_window_glass_1_' + ii).setEnabled(true);
window.scene.getMeshByName('sec_' + i + '_window_1_' + ii).setEnabled(true);
cursorX = cursorX + 1;
}

if (window.appSection[i].place[ii]==3)
{
window.scene.getMeshByName('sec_' + i + '_window_glass_2_' + ii).setEnabled(true);
window.scene.getMeshByName('sec_' + i + '_window_2_' + ii).setEnabled(true);
cursorX = cursorX + 2;
}


if (window.appSection[i].place[ii]==4)
{
window.scene.getMeshByName('sec_' + i + '_door2m_glass_' + ii).setEnabled(true);
window.scene.getMeshByName('sec_' + i + '_door2m_' + ii).setEnabled(true);
cursorX = cursorX + 2;

window.scene.getMeshByName('sec_' + i + '_door2m_glass_' + ii).scaling.x = 1;
window.scene.getMeshByName('sec_' + i + '_door2m_' + ii).scaling.x = 1;
}

if (window.appSection[i].place[ii]==5)
{
window.scene.getMeshByName('sec_' + i + '_door3m_glass_' + ii).setEnabled(true);
window.scene.getMeshByName('sec_' + i + '_door3m_' + ii).setEnabled(true);
cursorX = cursorX + 3;

window.scene.getMeshByName('sec_' + i + '_door3m_glass_' + ii).scaling.x = 1;
window.scene.getMeshByName('sec_' + i + '_door3m_' + ii).scaling.x = 1;
}

if (window.appSection[i].place[ii]==6)
{
window.scene.getMeshByName('sec_' + i + '_door4m_glass_' + ii).setEnabled(true);
window.scene.getMeshByName('sec_' + i + '_door4m_' + ii).setEnabled(true);
cursorX = cursorX + 4;
if (ii < 14) window.scene.getMeshByName('sec_' + i + '_door4m_glass_' + ii).scaling.x = 0.9625;;
if (ii < 14) window.scene.getMeshByName('sec_' + i + '_door4m_' + ii).scaling.x = 0.9625;;
if (ii >= 14)window.scene.getMeshByName('sec_' + i + '_door4m_glass_' + ii).scaling.x = 0.925;
if (ii >= 14) window.scene.getMeshByName('sec_' + i + '_door4m_' + ii).scaling.x = 0.925;


}


/// add here 4 and 5







}
else
{


  if(
        (sectionWidth >= cursorX + 2 - 0.5  && window.appSection[i].place[ii]==4) // +0.15
    ||  (sectionWidth >= cursorX + 3 - 0.5  && window.appSection[i].place[ii]==5)
    ||  (sectionWidth >= cursorX + 4 - 0.95 && window.appSection[i].place[ii]==6)
  )
  {

if (window.appSection[i].place[ii]==4)
{

elementIsScaling = 1;
if (i <14)  elementScaleDelta = sectionWidth - cursorX - 2 + 0.5 - 0.15;
if (i >=14)  elementScaleDelta = sectionWidth - cursorX - 2 + 0.5;
//console.log("scale delta " + elementScaleDelta);
window.scene.getMeshByName('sec_' + i + '_door2m_glass_' + ii).setEnabled(true);
window.scene.getMeshByName('sec_' + i + '_door2m_' + ii).setEnabled(true);
elementScalingRatio = (1.5 + elementScaleDelta) / 2;
window.scene.getMeshByName('sec_' + i + '_door2m_glass_' + ii).scaling.x = elementScalingRatio;
window.scene.getMeshByName('sec_' + i + '_door2m_' + ii).scaling.x = elementScalingRatio;
cursorX = cursorX + 1.5 + elementScaleDelta;
}

if (window.appSection[i].place[ii]==5)
{
elementIsScaling = 1;
if (i <14)  elementScaleDelta = sectionWidth - cursorX - 3 + 0.5 - 0.15;
if (i >=14)  elementScaleDelta = sectionWidth - cursorX - 3 + 0.5;
//console.log("scale delta " + elementScaleDelta);
window.scene.getMeshByName('sec_' + i + '_door3m_glass_' + ii).setEnabled(true);
window.scene.getMeshByName('sec_' + i + '_door3m_' + ii).setEnabled(true);
elementScalingRatio = (2.5 + elementScaleDelta) / 3;
window.scene.getMeshByName('sec_' + i + '_door3m_glass_' + ii).scaling.x = elementScalingRatio;
window.scene.getMeshByName('sec_' + i + '_door3m_' + ii).scaling.x = elementScalingRatio;
cursorX = cursorX + 2.5 + elementScaleDelta;
}

if (window.appSection[i].place[ii]==6)
{
elementIsScaling = 1;
if (i <14)  elementScaleDelta = sectionWidth - cursorX - 4 + 0.95 - 0.15;
if (i >=14)  elementScaleDelta = sectionWidth - cursorX - 4 + 0.95;
//console.log("scale delta " + elementScaleDelta);
window.scene.getMeshByName('sec_' + i + '_door4m_glass_' + ii).setEnabled(true);
window.scene.getMeshByName('sec_' + i + '_door4m_' + ii).setEnabled(true);
elementScalingRatio = (3.05 + elementScaleDelta) / 4;
window.scene.getMeshByName('sec_' + i + '_door4m_glass_' + ii).scaling.x = elementScalingRatio;
window.scene.getMeshByName('sec_' + i + '_door4m_' + ii).scaling.x = elementScalingRatio;
cursorX = cursorX + 3.05 + elementScaleDelta;
}


sectionFull = true;



}

else
{
window.appSection[i].place[ii]=0;
elementsMax = elementsMax-1;
//setTimeout(spaceUpdating(), 100)
//spaceUpdating();
//return false;

//  cursorX = cursorX - 0.15;
//if (ii>1)
window.scene.getMeshByName('sec_' + i + '_balk_' + (ii)).setEnabled(false);
if (stopFlag==true) cursorX = cursorX - 0.15;
}

}



//console.log("case " + ii +" cursor " + cursorX);

}
//








//DRAW FOR X AND Z
for(let ii=0; ii<=elementsMax; ii++)
{

//if (window.appSection[i].orientation == true) startX = startX + cursorX;

//console.log('startX: ' + startX);
let startXTemp = startX;

//FRONT AND BACK
if(i<=13)
{
if (window.appSection[i].orientation == true) startXTemp = startX + (sectionWidth - cursorX) - 0.15;

window.scene.getMeshByName('sec_' + i + '_window_glass_2_' + ii).position.x = startXTemp + elementXposition[ii];
window.scene.getMeshByName('sec_' + i + '_window_2_' + ii).position.x = startXTemp +elementXposition[ii];
window.scene.getMeshByName('sec_' + i + '_window_glass_1_' + ii).position.x = startXTemp +elementXposition[ii];
window.scene.getMeshByName('sec_' + i + '_window_1_' + ii).position.x = startXTemp + elementXposition[ii];
window.scene.getMeshByName('sec_' + i + '_zhaluzi_' + ii).position.x = startXTemp + elementXposition[ii] + 0.5;
window.scene.getMeshByName('sec_' + i + '_balk_' + ii).position.x = startXTemp +  balkXposition[ii] - 0.075;

//DOOR 2
window.scene.getMeshByName('sec_' + i + '_door2m_glass_' + ii).position.x = startXTemp + elementXposition[ii];
window.scene.getMeshByName('sec_' + i + '_door2m_' + ii).position.x = startXTemp +  elementXposition[ii];
//DOOR 3
window.scene.getMeshByName('sec_' + i + '_door3m_glass_' + ii).position.x = startXTemp + elementXposition[ii];
window.scene.getMeshByName('sec_' + i + '_door3m_' + ii).position.x = startXTemp +  elementXposition[ii];
//DOOR 4
window.scene.getMeshByName('sec_' + i + '_door4m_glass_' + ii).position.x = startX + elementXposition[ii];
window.scene.getMeshByName('sec_' + i + '_door4m_' + ii).position.x = startX +  elementXposition[ii];

//window.scene.getMeshByName('sec_' + i + '_door4m_glass_' + ii).scaling.x = 0.9625;
//window.scene.getMeshByName('sec_' + i + '_door4m_' + ii).scaling.x = 0.9625;



let zMultiplicator=1;
if(i > 6 && i < 14) zMultiplicator = -1;

window.scene.getMeshByName('sec_' + i + '_window_glass_2_' + ii).position.z = z/-2 * zMultiplicator;
window.scene.getMeshByName('sec_' + i + '_window_2_' + ii).position.z = z/-2 * zMultiplicator;
window.scene.getMeshByName('sec_' + i + '_window_glass_1_' + ii).position.z = z/-2 * zMultiplicator;
window.scene.getMeshByName('sec_' + i + '_window_1_' + ii).position.z = z/-2 * zMultiplicator;

window.scene.getMeshByName('sec_' + i + '_zhaluzi_' + ii).position.z = (z/-2 + 0.075) * zMultiplicator;


//DOOR 2
window.scene.getMeshByName('sec_' + i + '_door2m_' + ii).position.z = z/-2 * zMultiplicator;
window.scene.getMeshByName('sec_' + i + '_door2m_glass_' + ii).position.z = z/-2 * zMultiplicator;
//DOOR 3
window.scene.getMeshByName('sec_' + i + '_door3m_' + ii).position.z = z/-2 * zMultiplicator;
window.scene.getMeshByName('sec_' + i + '_door3m_glass_' + ii).position.z = z/-2 * zMultiplicator;
//DOOR 4
window.scene.getMeshByName('sec_' + i + '_door4m_' + ii).position.z = z/-2 * zMultiplicator;
window.scene.getMeshByName('sec_' + i + '_door4m_glass_' + ii).position.z = z/-2 * zMultiplicator;


window.scene.getMeshByName('sec_' + i + '_balk_' + ii).position.z = (z/-2 + 0.075) * zMultiplicator;



//PLANE
window.scene.getMeshByName('sec_' + i + '_plane').position.z = (z/-2 + 0.01) * zMultiplicator;
window.scene.getMeshByName('sec_' + i + '_plane').position.x = startX + window.appState['sectionWidth']/2000 - 0.075;
window.scene.getMeshByName('sec_' + i + '_plane').scaling.x = window.appState['sectionWidth']/1000;

//console.log('startX: ' + startX);


//draw LAST or FIRST BALK
if (window.appSection[i].place[0]!=0)
{
//console.log('balk cursor: ' + cursorX);
window.scene.getMeshByName('sec_' + i + '_balk_3').position.x = startXTemp + cursorX + 0.075;
window.scene.getMeshByName('sec_' + i + '_balk_3').setEnabled(true);
window.scene.getMeshByName('sec_' + i + '_balk_3').position.z = (z/-2 + 0.075) * zMultiplicator;

window.scene.getMeshByName('sec_' + i + '_balk_0').position.x = startXTemp - 0.075;
window.scene.getMeshByName('sec_' + i + '_balk_0').setEnabled(true);
window.scene.getMeshByName('sec_' + i + '_balk_0').position.z = (z/-2 + 0.075) * zMultiplicator;


}

//WALL
if(window.appSection[i].wall==true)
{
  let onlyWallxReset=0.0;
  if (window.appSection[i].place[0] == 0) onlyWallxReset=0.15;


  window.scene.getMeshByName('sec_' + i + '_wall').setEnabled(true);
//if(window.appSection[i].inner == true)  window.scene.getMeshByName('sec_' + i + '_wall2').setEnabled(true);
if (window.appState['wallInside'] == true) window.scene.getMeshByName('sec_' + i + '_wall2').setEnabled(true);


  window.scene.getMeshByName('sec_' + i + '_frame').setEnabled(true);
  //INVERSION

  if (window.appSection[i].orientation == false)
  {
  window.scene.getMeshByName('sec_' + i + '_wall').position.x= startXTemp + cursorX + 0.02;//+ 0.075;
  window.scene.getMeshByName('sec_' + i + '_wall2').position.x= startXTemp + cursorX + 0.02;//+ 0.075;
  window.scene.getMeshByName('sec_' + i + '_frame').position.x= startXTemp + cursorX + wallXShift - onlyWallxReset;//+ 0.075;

}

  if (window.appSection[i].orientation == true)
{
window.scene.getMeshByName('sec_' + i + '_wall').position.x= startX - 0.01;//+ 0.075;
window.scene.getMeshByName('sec_' + i + '_wall2').position.x= startX - 0.01;//+ 0.075;
window.scene.getMeshByName('sec_' + i + '_frame').position.x= startX - 0.01;//+ 0.075;
}

  window.scene.getMeshByName('sec_' + i + '_wall').position.z = (z/-2 + 0.075 + 0.01) * zMultiplicator;
  window.scene.getMeshByName('sec_' + i + '_wall').scaling.x = ((window.appState['sectionWidth'])/1000 - cursorX - 0.14) /2.775 ;
  window.scene.getMeshByName('sec_' + i + '_wall2').position.z = (z/-2 + 0.075 + 0.01 + zWall2Shift) * zMultiplicator ;
  window.scene.getMeshByName('sec_' + i + '_wall2').scaling.x = ((window.appState['sectionWidth'])/1000 - cursorX - 0.14) /2.775 ;

  window.scene.getMeshByName('sec_' + i + '_frame').position.z = (z/-2 + 0.075 + 0.01) * zMultiplicator;
  window.scene.getMeshByName('sec_' + i + '_frame').scaling.x = ((window.appState['sectionWidth'])/1000 - cursorX - 0.14 - wallXScale + onlyWallxReset) /2.775 ;
}





}

//LEFT AND RIGHT
if(i>13)
{
startXTemp = startX + 0.15;
//two types
if (window.appSection[i].orientation == true)
{
  startXTemp = startX + (sectionWidth - cursorX) + 0.15;

//if (window.appState['rooftype']==0 && window.appState['deepth']>=4500)
//  startXTemp = startX + (sectionWidth - cursorX) + 0.3 + 0.075;
}



//DOOR 2
window.scene.getMeshByName('sec_' + i + '_door2m_' + ii).position.z = startXTemp + elementXposition[ii];
window.scene.getMeshByName('sec_' + i + '_door2m_glass_' + ii).position.z = startXTemp +elementXposition[ii];
//DOOR 3
window.scene.getMeshByName('sec_' + i + '_door3m_' + ii).position.z = startXTemp + elementXposition[ii];
window.scene.getMeshByName('sec_' + i + '_door3m_glass_' + ii).position.z = startXTemp +elementXposition[ii];
//DOOR 4
window.scene.getMeshByName('sec_' + i + '_door4m_' + ii).position.z = startXTemp + elementXposition[ii];
window.scene.getMeshByName('sec_' + i + '_door4m_glass_' + ii).position.z = startXTemp +elementXposition[ii];

//window.scene.getMeshByName('sec_' + i + '_door4m_glass_' + ii).scaling.x = 0.925;
//window.scene.getMeshByName('sec_' + i + '_door4m_' + ii).scaling.x = 0.925;


window.scene.getMeshByName('sec_' + i + '_window_glass_2_' + ii).position.z = startXTemp + elementXposition[ii];
window.scene.getMeshByName('sec_' + i + '_window_2_' + ii).position.z = startXTemp + elementXposition[ii];
window.scene.getMeshByName('sec_' + i + '_window_glass_1_' + ii).position.z = startXTemp + elementXposition[ii];
window.scene.getMeshByName('sec_' + i + '_window_1_' + ii).position.z = startXTemp + elementXposition[ii];
window.scene.getMeshByName('sec_' + i + '_zhaluzi_' + ii).position.z = startXTemp + elementXposition[ii] + 0.5;
window.scene.getMeshByName('sec_' + i + '_balk_' + ii).position.z = startXTemp +  balkXposition[ii] - 0.075;

let zMultiplicator=1;
if(i == 16 || i == 17) zMultiplicator = -1;

//DOOR 2
window.scene.getMeshByName('sec_' + i + '_door2m_' + ii).position.x = x/-2 * zMultiplicator;
window.scene.getMeshByName('sec_' + i + '_door2m_glass_' + ii).position.x = x/-2 * zMultiplicator;

//DOOR 3
window.scene.getMeshByName('sec_' + i + '_door3m_' + ii).position.x = x/-2 * zMultiplicator;
window.scene.getMeshByName('sec_' + i + '_door3m_glass_' + ii).position.x = x/-2 * zMultiplicator;

//DOOR 4
window.scene.getMeshByName('sec_' + i + '_door4m_' + ii).position.x = x/-2 * zMultiplicator;
window.scene.getMeshByName('sec_' + i + '_door4m_glass_' + ii).position.x = x/-2 * zMultiplicator;

//

window.scene.getMeshByName('sec_' + i + '_window_glass_2_' + ii).position.x = (x/-2 - 0.03) * zMultiplicator;
window.scene.getMeshByName('sec_' + i + '_window_2_' + ii).position.x = (x/-2 - 0.03) * zMultiplicator;
window.scene.getMeshByName('sec_' + i + '_window_glass_1_' + ii).position.x = (x/-2 - 0.03) * zMultiplicator;
window.scene.getMeshByName('sec_' + i + '_window_1_' + ii).position.x = (x/-2 - 0.03) * zMultiplicator;
window.scene.getMeshByName('sec_' + i + '_zhaluzi_' + ii).position.x = x/-2 * zMultiplicator;
window.scene.getMeshByName('sec_' + i + '_balk_' + ii).position.x = x/-2 * zMultiplicator;
window.scene.getMeshByName('sec_' + i + '_plane').position.x = (x/-2 - 0.07) * zMultiplicator;

window.scene.getMeshByName('sec_' + i + '_plane').position.z = 0;
window.scene.getMeshByName('sec_' + i + '_plane').scaling.x = z;


//draw LAST or FIRST BALK
if (window.appSection[i].place[0]!=0)
{
//console.log('cursor: ' + cursorX);
window.scene.getMeshByName('sec_' + i + '_balk_3').position.z = startXTemp + cursorX + 0.075;
window.scene.getMeshByName('sec_' + i + '_balk_3').setEnabled(true);
window.scene.getMeshByName('sec_' + i + '_balk_3').position.x = (x/-2 ) * zMultiplicator;
}



let sectionWidthZ;


if (window.appState['rooftype']==0 && window.appState['deepth']<4500)
{
if(window.appSection[i].wall==true)
{
  let onlyWallxReset=0.0;
  if (window.appSection[i].place[0] == 0) onlyWallxReset=0.15;

  window.scene.getMeshByName('sec_' + i + '_wall').setEnabled(true);
//if(window.appSection[i].inner==true)   window.scene.getMeshByName('sec_' + i + '_wall2').setEnabled(true);
if (window.appState['wallInside'] == true) window.scene.getMeshByName('sec_' + i + '_wall2').setEnabled(true);


  window.scene.getMeshByName('sec_' + i + '_frame').setEnabled(true);

//  window.scene.getMeshByName('sec_' + i + '_wall').position.z = startXTemp + cursorX + 0.01 ;//+ 0.01;//+ 0.075;


  if (window.appSection[i].orientation == false)
  {
  window.scene.getMeshByName('sec_' + i + '_wall').position.z = startXTemp + cursorX + 0.01;//+ 0.01;//+ 0.075;
  window.scene.getMeshByName('sec_' + i + '_wall2').position.z = startXTemp + cursorX + 0.01;//+ 0.01;//+ 0.075;
  window.scene.getMeshByName('sec_' + i + '_frame').position.z = startXTemp + cursorX + 0.01 + wallXShift  - onlyWallxReset;//+ 0.01;//+ 0.075;
}

  if (window.appSection[i].orientation == true)
  {
    window.scene.getMeshByName('sec_' + i + '_wall').position.z = startX + 0.15 - 0.02; //- 0.15;//+ 0.01;//+ 0.075;
    window.scene.getMeshByName('sec_' + i + '_wall2').position.z = startX + 0.15 - 0.02; //- 0.15;//+ 0.01;//+ 0.075;
    window.scene.getMeshByName('sec_' + i + '_frame').position.z = startX + 0.15 - 0.02; //- 0.15;//+ 0.01;//+ 0.075;
}

  window.scene.getMeshByName('sec_' + i + '_wall').position.x = (x/-2 + 0.01 ) * zMultiplicator;
  window.scene.getMeshByName('sec_' + i + '_wall').scaling.x = (sectionWidth - cursorX +0.02)/2.775 ;
  window.scene.getMeshByName('sec_' + i + '_wall2').position.x = (x/-2 + 0.01 + zWall2Shift) * zMultiplicator;
  window.scene.getMeshByName('sec_' + i + '_wall2').scaling.x = (sectionWidth - cursorX +0.02)/2.775 ;

  window.scene.getMeshByName('sec_' + i + '_frame').position.x = (x/-2 + 0.01 ) * zMultiplicator;
  window.scene.getMeshByName('sec_' + i + '_frame').scaling.x = (sectionWidth - cursorX +0.02 - wallXScale + onlyWallxReset)/2.775 ;
}


}


if (window.appState['rooftype']==0 && window.appState['deepth']>=4500)
{




if (i == 14 || i == 16 )
{
window.scene.getMeshByName('sec_' + i + '_plane').position.z = - z/4;
window.scene.getMeshByName('sec_' + i + '_plane').scaling.x = z/2;


}


if (i == 15 || i == 17 )
{
window.scene.getMeshByName('sec_' + i + '_plane').position.z = z/4;
window.scene.getMeshByName('sec_' + i + '_plane').scaling.x = z/2;
//cursorX = cursorX - 0.15;
}


if(window.appSection[i].wall==true)
{
  let onlyWallxReset=0.0;
  if (window.appSection[i].place[0] == 0) onlyWallxReset=0.15;

window.scene.getMeshByName('sec_' + i + '_wall').setEnabled(true);
if (window.appState['wallInside'] == true)
window.scene.getMeshByName('sec_' + i + '_wall2').setEnabled(true);

//  if(window.appSection[i].inner==true) window.scene.getMeshByName('sec_' + i + '_wall2').setEnabled(true);



window.scene.getMeshByName('sec_' + i + '_frame').setEnabled(true);
  //INVERSION
  if (window.appSection[i].orientation == false)
{
  window.scene.getMeshByName('sec_' + i + '_wall').position.z = startXTemp + cursorX ;//+ 0.01;//+ 0.075;
  window.scene.getMeshByName('sec_' + i + '_wall2').position.z = startXTemp + cursorX ;//+ 0.01;//+ 0.075;
  window.scene.getMeshByName('sec_' + i + '_frame').position.z = startXTemp + cursorX + wallXShift  - onlyWallxReset;//+ 0.01;//+ 0.075;
}

  if (window.appSection[i].orientation == true)
{
  window.scene.getMeshByName('sec_' + i + '_wall').position.z = startX + 0.15;//+ 0.15;//+ 0.01;//+ 0.075;
  window.scene.getMeshByName('sec_' + i + '_wall2').position.z = startX + 0.15;//+ 0.15;//+ 0.01;//+ 0.075;
  window.scene.getMeshByName('sec_' + i + '_frame').position.z = startX + 0.15;//+ 0.15;//+ 0.01;//+ 0.075;
}

  window.scene.getMeshByName('sec_' + i + '_wall').position.x = (x/-2 + 0.01) * zMultiplicator;
  window.scene.getMeshByName('sec_' + i + '_wall').scaling.x = (sectionWidth - cursorX + 0.027) /2.775  - 0.01;
  window.scene.getMeshByName('sec_' + i + '_wall2').position.x = (x/-2 + 0.01 + zWall2Shift) * zMultiplicator;
  window.scene.getMeshByName('sec_' + i + '_wall2').scaling.x = (sectionWidth - cursorX + 0.027) /2.775  - 0.01;

  window.scene.getMeshByName('sec_' + i + '_frame').position.x = (x/-2 + 0.01) * zMultiplicator;
  window.scene.getMeshByName('sec_' + i + '_frame').scaling.x = (sectionWidth - cursorX + 0.027  - wallXScale + onlyWallxReset) /2.775  - 0.01;


}



}



if (window.appState['rooftype']==1)
{
window.scene.getMeshByName('sec_' + i + '_plane').scaling.x = z - 1;
window.scene.getMeshByName('sec_' + i + '_plane').position.z = - 0.5;


if(window.appSection[i].wall==true)
{
  let onlyWallxReset=0.0;
  if (window.appSection[i].place[0] == 0) onlyWallxReset=0.15;

  window.scene.getMeshByName('sec_' + i + '_wall').setEnabled(true);
//if(window.appSection[i].inner==true)   window.scene.getMeshByName('sec_' + i + '_wall2').setEnabled(true);
if (window.appState['wallInside'] == true) window.scene.getMeshByName('sec_' + i + '_wall2').setEnabled(true);


  window.scene.getMeshByName('sec_' + i + '_frame').setEnabled(true);

//  window.scene.getMeshByName('sec_' + i + '_wall').position.z = startXTemp + cursorX + 0.01 ;//+ 0.01;//+ 0.075;


if (window.appSection[i].orientation == false)
{
window.scene.getMeshByName('sec_' + i + '_wall').position.z = startXTemp + cursorX  ;//+ 0.01;//+ 0.075;
window.scene.getMeshByName('sec_' + i + '_wall2').position.z = startXTemp + cursorX  ;//+ 0.01;//+ 0.075;
window.scene.getMeshByName('sec_' + i + '_frame').position.z = startXTemp + cursorX + wallXShift  - onlyWallxReset;//+ 0.01;//+ 0.075;
}
if (window.appSection[i].orientation == true)
{
window.scene.getMeshByName('sec_' + i + '_wall').position.z = startX + 0.15 - 0.02; //- 0.15;//+ 0.01;//+ 0.075;
window.scene.getMeshByName('sec_' + i + '_wall2').position.z = startX + 0.15 - 0.02; //- 0.15;//+ 0.01;//+ 0.075;
window.scene.getMeshByName('sec_' + i + '_frame').position.z = startX + 0.15 - 0.02; //- 0.15;//+ 0.01;//+ 0.075;
}

window.scene.getMeshByName('sec_' + i + '_wall').position.x = (x/-2 + 0.01 ) * zMultiplicator;
window.scene.getMeshByName('sec_' + i + '_wall').scaling.x = (sectionWidth - cursorX)/2.775 ;
window.scene.getMeshByName('sec_' + i + '_wall2').position.x = (x/-2 + 0.01 + zWall2Shift) * zMultiplicator;
window.scene.getMeshByName('sec_' + i + '_wall2').scaling.x = (sectionWidth - cursorX)/2.775 ;
window.scene.getMeshByName('sec_' + i + '_frame').position.x = (x/-2 + 0.01 ) * zMultiplicator;
window.scene.getMeshByName('sec_' + i + '_frame').scaling.x = (sectionWidth - cursorX  - wallXScale  + onlyWallxReset)/2.775 ;


}




}




}



///DISABLING BULK
if (window.appSection[i].place[0]!=0 || window.appSection[i].place[1]!=0 || window.appSection[i].place[2]!=0 || window.appSection[i].wall==true)
{
if(i<=6)
{
window.scene.getMeshByName('balk_small_front_right_' + (i + 2)).setEnabled(false);
window.scene.getMeshByName('balk_small_front_left_'  + (i + 1)).setEnabled(false);
}
if(i > 6 && i < 14)
{
window.scene.getMeshByName('balk_small_back_right_' + (i - 5)).setEnabled(false);
window.scene.getMeshByName('balk_small_back_left_'  + (i - 6)).setEnabled(false);
}





if (i == 14)
{
window.scene.getMeshByName('balk_small_front_right_' + 1).setEnabled(false);
if (window.appState['rooftype'] == 0 && window.appState['deepth'] >= 4500)
window.scene.getMeshByName("balk_small_center_left_1").setEnabled(false);
else
window.scene.getMeshByName('balk_small_back_right_' + 1).setEnabled(false);
}



if (i == 15)
{
window.scene.getMeshByName('balk_small_back_right_' + 1).setEnabled(false);
window.scene.getMeshByName('balk_small_center_right_' + 1).setEnabled(false);
}

if (i == 16)
{
  let sectionsNumberTemp = window.appState['sectionsNumber'] + 1;
  window.scene.getMeshByName('balk_small_front_left_' + sectionsNumberTemp).setEnabled(false);
  if (window.appState['rooftype'] == 0 && window.appState['deepth'] >= 4500)
  window.scene.getMeshByName("balk_small_center_left_0").setEnabled(false);
  else
  window.scene.getMeshByName('balk_small_back_left_' + sectionsNumberTemp).setEnabled(false);
}


if (i == 17)
{
let sectionsNumberTemp = window.appState['sectionsNumber'] + 1;
window.scene.getMeshByName('balk_small_back_left_' + sectionsNumberTemp).setEnabled(false);
window.scene.getMeshByName('balk_small_center_right_0').setEnabled(false);
}



}







}

if (window.appSection[i].orientation==true) window.scene.getMeshByName('sec_' + i + '_balk_3').setEnabled(false);
if (window.appSection[i].orientation==false) window.scene.getMeshByName('sec_' + i + '_balk_0').setEnabled(false);
if (window.appSection[i].orientation==true && window.appSection[i].place[0]!=0) window.scene.getMeshByName('sec_' + i + '_balk_0').setEnabled(true);

if (window.appSection[i].place[0]==6)
{
//window.scene.getMeshByName('sec_' + i + '_balk_' + ii).setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_balk_3').setEnabled(false);
}

if (sectionFull == true || window.scene.getMeshByName('sec_' + i + '_wall').scaling.x <0.04) {
//console.log('walldisabled');
window.scene.getMeshByName('sec_' + i + '_wall').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_wall2').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_frame').setEnabled(false);

}


if (sectionFull == true && window.appSection[i].orientation==false) window.scene.getMeshByName('sec_' + i + '_balk_3').setEnabled(false);
if (sectionFull == true && window.appSection[i].orientation==true) window.scene.getMeshByName('sec_' + i + '_balk_0').setEnabled(false);

}
}

//ORIENTATION INVERT
if (window.appSection[i].orientation==1)
{
{
//START RENDERING SECTION i
//console.log(window.appState['uiSpaceID']);
document.getElementById('sectionButton' + i).style.display='inline-block';


if (i === window.appState['uiSpaceID'])
{
//  console.log(window.appState['uiSpaceID']);
//  console.log(i);
//highlight button
//document.getElementById('sectionButton' + i).style.backgroundColor='#FF0000';
document.getElementById("spaceWall").checked = window.appSection[i].wall;
document.getElementById("spaceInnerWall").checked = window.appSection[i].inner;
document.getElementById("spaceDirection").checked = window.appSection[i].orientation;

//console.log('checked wall: ' + document.getElementById("spaceWall").checked + ' ' + window.appSection[i].wall);
}

//console.log(i);

//ENABLING PLANE HIGLIGHT WHEN MENU OPEN
//window.scene.getMeshByName('sec_' + i + '_plane').setEnabled(true);
if (window.appState['uiMenu7'] == 1) window.scene.getMeshByName('sec_' + i + '_plane').setEnabled(true);




let xID = i;
if (i>=7 && i<=13) xID = i - 7;
//console.log(xID);
let balk1x = xID + 1;
let balk2x = xID + 2;


let balkXposition=[0,0,0,0];
let elementXposition = [0,0,0];

let cursorX=0;
let elementsMax = 3 - 1;
//if (window.appSection[i].place[0]==3 || window.appSection[i].place[1]==3 || window.appSection[i].place[2]==3
//|| window.appSection[i].place[0]==4 || window.appSection[i].place[1]==4 || window.appSection[i].place[2]==4
//) elementsMax = elementsMax - 1;

let stopFlag=false;

let startX;
let startX2;

let sectionWidth;
let tempZ=window.appState['deepth']/1000;

if(i<14)
{
startX = window.scene.getMeshByName('balk_front_' + balk2x).position.x + 0.075;
startX2 = window.scene.getMeshByName('balk_front_' + balk1x).position.x + 0.075;

//console.log('START ' + window.scene.getMeshByName('balk_front_' + balk2x).position.x);
sectionWidth = window.scene.getMeshByName('balk_front_' + balk2x).position.x - window.scene.getMeshByName('balk_front_' + balk1x).position.x;
console.log(sectionWidth);
//if (i == 0) console.log('bag ' + window.scene.getMeshByName('1meter_balk_front_1').position.x);
}

if(i == 14 || i == 16)
{
startX = z/2 + 0.15;
startX2 = z/-2 - 0.15;

if (window.appState['rooftype']==0 && window.appState['deepth']<4500)
sectionWidth = z - 0.3;


if (window.appState['rooftype']==0 && window.appState['deepth']>=4500)
{
startX = 0 + 0.15 + 0.075;
startX2 = z/-2 - 0.15;

sectionWidth= z/2 - 0.225;

//sectionWidth=z/2;
}


if (window.appState['rooftype']==1)
{
sectionWidth = z-1 - 0.3 ;
startX =  z/2 + 0.15 -1 ;//+ 0.15;
//startX2 = 0 - 0.075 - 0.15 -1;
startX2 = z/-2  + 0.5 - 0.35;
}

}

if(i == 15 || i == 17)
{
startX =  z/2 + 0.15;
startX2 = 0 - 0.075 - 0.15;

sectionWidth=z/2 - 0.225;
//sectionWidth=z/2;
}







//console.log(sectionWidth);

if (window.appSection[i].orientation==0)
{
startX=startX - 0.15 ;//- 0.075 - 0.075;
//window.scene.getMeshByName('sec_' + i + '_balk_' + 3).setEnabled(true);
}

if (window.appSection[i].orientation==1)
{
startX=startX - 0.15 ;//- 0.075 - 0.075;
//window.scene.getMeshByName('sec_' + i + '_balk_' + 0).setEnabled(true);
}



for(let ii=0; ii<=elementsMax; ii++)
{

let distanceBetweenElements=0;
window.scene.getMeshByName('sec_' + i + '_balk_' + ii).setEnabled(false);

//set delimiter balk
if (ii!==0)
{

if(
  (window.appSection[i].place[ii]==1   && (window.appSection[i].place[ii-1]==2 || window.appSection[i].place[ii-1]==3 || window.appSection[i].place[ii-1]==4 || window.appSection[i].place[ii-1]==5 || window.appSection[i].place[ii-1]==6 ))
  || (window.appSection[i].place[ii-1]==1 && (window.appSection[i].place[ii]==2  || window.appSection[i].place[ii]==3 || window.appSection[i].place[ii]==4|| window.appSection[i].place[ii]==5 || window.appSection[i].place[ii]==6))
  ||
  ((window.appSection[i].place[ii-1]==2 || window.appSection[i].place[ii-1]==3 ) && (window.appSection[i].place[ii]==4  || window.appSection[i].place[ii]==5 || window.appSection[i].place[ii]==6))
  ||
  ((window.appSection[i].place[ii]==2 || window.appSection[i].place[ii]==3 )  && (window.appSection[i].place[ii-1]==4 || window.appSection[i].place[ii-1]==5 || window.appSection[i].place[ii-1]==6))
  ||
  ( window.appSection[i].place[ii]==4  && window.appSection[i].place[ii-1]==4 )


)
{
//
if(window.appSection[i].place[ii+1]!=0 && ii < 4)
{}
cursorX = cursorX + 0.15;


window.scene.getMeshByName('sec_' + i + '_balk_' + ii).setEnabled(true);

window.scene.getMeshByName('sec_' + i + '_balk_' + ii).position.x = cursorX - 0.075; // need
balkXposition[ii]=cursorX;

//console.log ('flag true: ' + ii);
stopFlag=true;
}else stopFlag=false;

}

elementXposition[ii]=cursorX;
if (ii==0) balkXposition[0]=0;
//console.log(window.appState['sectionWidth']/1000 );
//console.log(cursorX + 1 );
//console.log(window.appState['sectionWidth']/1000 > cursorX + 1);

// disable limiter for 4m glass door

//if (ii<3 && i===window.appState['uiSpaceID']) document.getElementById('spaceBlock' + (ii+1)).style.display='none';

let elementIsScaling = 0;
let elementScalingRatio = 0;
let elementScaleDelta = 0;


if
(
(sectionWidth > cursorX + 1 && ( window.appSection[i].place[ii]==1 || window.appSection[i].place[ii]==2))
||
(sectionWidth > cursorX + 2 && window.appSection[i].place[ii]==3)
||
(sectionWidth > cursorX + 2 && window.appSection[i].place[ii]==4)
||
(sectionWidth > cursorX + 3 && window.appSection[i].place[ii]==5)
||
(sectionWidth > cursorX + 4 && window.appSection[i].place[ii]==6)
)

{



















if (ii<3 && i===window.appState['uiSpaceID']) document.getElementById('spaceBlock' + (ii+1)).style.display='block';

if (window.appSection[i].place[ii]==1)
{
window.scene.getMeshByName('sec_' + i + '_zhaluzi_' + ii).setEnabled(true);
cursorX = cursorX + 1;
}

if (window.appSection[i].place[ii]==2)
{
window.scene.getMeshByName('sec_' + i + '_window_glass_1_' + ii).setEnabled(true);
window.scene.getMeshByName('sec_' + i + '_window_1_' + ii).setEnabled(true);
cursorX = cursorX + 1;
}

if (window.appSection[i].place[ii]==3)
{
window.scene.getMeshByName('sec_' + i + '_window_glass_2_' + ii).setEnabled(true);
window.scene.getMeshByName('sec_' + i + '_window_2_' + ii).setEnabled(true);
cursorX = cursorX + 2;
}


if (window.appSection[i].place[ii]==4)
{
window.scene.getMeshByName('sec_' + i + '_door2m_glass_' + ii).setEnabled(true);
window.scene.getMeshByName('sec_' + i + '_door2m_' + ii).setEnabled(true);
cursorX = cursorX + 2;

window.scene.getMeshByName('sec_' + i + '_door2m_glass_' + ii).scaling.x = 1;
window.scene.getMeshByName('sec_' + i + '_door2m_' + ii).scaling.x = 1;
}

if (window.appSection[i].place[ii]==5)
{
window.scene.getMeshByName('sec_' + i + '_door3m_glass_' + ii).setEnabled(true);
window.scene.getMeshByName('sec_' + i + '_door3m_' + ii).setEnabled(true);
cursorX = cursorX + 3;

window.scene.getMeshByName('sec_' + i + '_door3m_glass_' + ii).scaling.x = 1;
window.scene.getMeshByName('sec_' + i + '_door3m_' + ii).scaling.x = 1;
}

if (window.appSection[i].place[ii]==6)
{
window.scene.getMeshByName('sec_' + i + '_door4m_glass_' + ii).setEnabled(true);
window.scene.getMeshByName('sec_' + i + '_door4m_' + ii).setEnabled(true);
cursorX = cursorX + 4;
if (ii < 14) window.scene.getMeshByName('sec_' + i + '_door4m_glass_' + ii).scaling.x = 0.9625;;
if (ii < 14) window.scene.getMeshByName('sec_' + i + '_door4m_' + ii).scaling.x = 0.9625;;
if (ii >= 14)window.scene.getMeshByName('sec_' + i + '_door4m_glass_' + ii).scaling.x = 0.925;
if (ii >= 14) window.scene.getMeshByName('sec_' + i + '_door4m_' + ii).scaling.x = 0.925;


}


/// add here 4 and 5







}
else
{



  if(
        (sectionWidth >= cursorX + 2 - 0.75 && window.appSection[i].place[ii]==4) // +0.15
    ||  (sectionWidth >= cursorX + 3 - 0.75 && window.appSection[i].place[ii]==5)
    ||  (sectionWidth >= cursorX + 4 - 0.95 && window.appSection[i].place[ii]==6)
  )
  {

if (window.appSection[i].place[ii]==4)
{
elementIsScaling = 1;
if (i <14)  elementScaleDelta = sectionWidth - cursorX - 2 + 0.75 - 0.15;
if (i >=14)  elementScaleDelta = sectionWidth - cursorX - 2 + 0.75;
//console.log("scale delta " + elementScaleDelta);
window.scene.getMeshByName('sec_' + i + '_door2m_glass_' + ii).setEnabled(true);
window.scene.getMeshByName('sec_' + i + '_door2m_' + ii).setEnabled(true);
elementScalingRatio = (1.25 + elementScaleDelta) / 2;
window.scene.getMeshByName('sec_' + i + '_door2m_glass_' + ii).scaling.x = elementScalingRatio;
window.scene.getMeshByName('sec_' + i + '_door2m_' + ii).scaling.x = elementScalingRatio;
cursorX = cursorX + 1.25 + elementScaleDelta;
}

if (window.appSection[i].place[ii]==5)
{
elementIsScaling = 1;
if (i <14)  elementScaleDelta = sectionWidth - cursorX - 3 + 0.75 - 0.15;
if (i >=14)  elementScaleDelta = sectionWidth - cursorX - 3 + 0.75;
//console.log("scale delta " + elementScaleDelta);
window.scene.getMeshByName('sec_' + i + '_door3m_glass_' + ii).setEnabled(true);
window.scene.getMeshByName('sec_' + i + '_door3m_' + ii).setEnabled(true);
elementScalingRatio = (2.25 + elementScaleDelta) / 3;
window.scene.getMeshByName('sec_' + i + '_door3m_glass_' + ii).scaling.x = elementScalingRatio;
window.scene.getMeshByName('sec_' + i + '_door3m_' + ii).scaling.x = elementScalingRatio;
cursorX = cursorX + 2.25 + elementScaleDelta;
}

if (window.appSection[i].place[ii]==6)
{
elementIsScaling = 1;
if (i <14)  elementScaleDelta = sectionWidth - cursorX - 4 + 0.95 - 0.15;
if (i >=14)  elementScaleDelta = sectionWidth - cursorX - 4 + 0.95;
//console.log("scale delta " + elementScaleDelta);
window.scene.getMeshByName('sec_' + i + '_door4m_glass_' + ii).setEnabled(true);
window.scene.getMeshByName('sec_' + i + '_door4m_' + ii).setEnabled(true);
elementScalingRatio = (3.05 + elementScaleDelta) / 4;
window.scene.getMeshByName('sec_' + i + '_door4m_glass_' + ii).scaling.x = elementScalingRatio;
window.scene.getMeshByName('sec_' + i + '_door4m_' + ii).scaling.x = elementScalingRatio;
cursorX = cursorX + 3.05 + elementScaleDelta;
}


sectionFull = true;



}

else
{
window.appSection[i].place[ii]=0;
elementsMax = elementsMax-1;
//setTimeout(spaceUpdating(), 100)
//spaceUpdating();
//return false;

//  cursorX = cursorX - 0.15;
//if (ii>1)
window.scene.getMeshByName('sec_' + i + '_balk_' + (ii)).setEnabled(false);
if (stopFlag==true) cursorX = cursorX - 0.15;
}

}



//console.log("case " + ii +" cursor " + cursorX);

}
//








//DRAW FOR X AND Z
for(let ii=0; ii<=elementsMax; ii++)
{

//if (window.appSection[i].orientation == true) startX = startX + cursorX;

//console.log('startX: ' + startX);
let startXTemp = startX;
let startXTemp2 = startX2;

//FRONT AND BACK
if(i<=13)
{
//if (window.appSection[i].orientation == true) startXTemp = startX + (sectionWidth - cursorX) - 0.15;

window.scene.getMeshByName('sec_' + i + '_window_glass_2_' + ii).position.x = startXTemp - elementXposition[ii] - 2;
window.scene.getMeshByName('sec_' + i + '_window_2_' + ii).position.x = startXTemp - elementXposition[ii] - 2;
window.scene.getMeshByName('sec_' + i + '_window_glass_1_' + ii).position.x = startXTemp - elementXposition[ii] - 1;
window.scene.getMeshByName('sec_' + i + '_window_1_' + ii).position.x = startXTemp - elementXposition[ii] - 1;
window.scene.getMeshByName('sec_' + i + '_zhaluzi_' + ii).position.x = startXTemp - elementXposition[ii] + 0.5 - 1;

window.scene.getMeshByName('sec_' + i + '_balk_' + ii).position.x = startXTemp -  balkXposition[ii] + 0.075 ;//+ 0.15;

//DOOR 2
window.scene.getMeshByName('sec_' + i + '_door2m_glass_' + ii).position.x = startXTemp - elementXposition[ii] - (window.scene.getMeshByName('sec_' + i + '_door2m_' + ii).scaling.x * 2);
window.scene.getMeshByName('sec_' + i + '_door2m_' + ii).position.x = startXTemp -  elementXposition[ii] - (window.scene.getMeshByName('sec_' + i + '_door2m_' + ii).scaling.x * 2);
//DOOR 3
window.scene.getMeshByName('sec_' + i + '_door3m_glass_' + ii).position.x = startXTemp - elementXposition[ii] - (window.scene.getMeshByName('sec_' + i + '_door3m_' + ii).scaling.x * 3);
window.scene.getMeshByName('sec_' + i + '_door3m_' + ii).position.x = startXTemp -  elementXposition[ii] - (window.scene.getMeshByName('sec_' + i + '_door3m_' + ii).scaling.x * 3);
//DOOR 4
window.scene.getMeshByName('sec_' + i + '_door4m_glass_' + ii).position.x = startX - elementXposition[ii] - (window.scene.getMeshByName('sec_' + i + '_door4m_' + ii).scaling.x * 4);;
window.scene.getMeshByName('sec_' + i + '_door4m_' + ii).position.x = startX - elementXposition[ii] - (window.scene.getMeshByName('sec_' + i + '_door4m_' + ii).scaling.x * 4);;

//window.scene.getMeshByName('sec_' + i + '_door4m_glass_' + ii).scaling.x = 0.9625;
//window.scene.getMeshByName('sec_' + i + '_door4m_' + ii).scaling.x = 0.9625;



let zMultiplicator=1;
if(i > 6 && i < 14) zMultiplicator = -1;

window.scene.getMeshByName('sec_' + i + '_window_glass_2_' + ii).position.z = z/-2 * zMultiplicator;
window.scene.getMeshByName('sec_' + i + '_window_2_' + ii).position.z = z/-2 * zMultiplicator;
window.scene.getMeshByName('sec_' + i + '_window_glass_1_' + ii).position.z = z/-2 * zMultiplicator;
window.scene.getMeshByName('sec_' + i + '_window_1_' + ii).position.z = z/-2 * zMultiplicator;

window.scene.getMeshByName('sec_' + i + '_zhaluzi_' + ii).position.z = (z/-2 + 0.075) * zMultiplicator;


//DOOR 2
window.scene.getMeshByName('sec_' + i + '_door2m_' + ii).position.z = z/-2 * zMultiplicator;
window.scene.getMeshByName('sec_' + i + '_door2m_glass_' + ii).position.z = z/-2 * zMultiplicator;
//DOOR 3
window.scene.getMeshByName('sec_' + i + '_door3m_' + ii).position.z = z/-2 * zMultiplicator;
window.scene.getMeshByName('sec_' + i + '_door3m_glass_' + ii).position.z = z/-2 * zMultiplicator;
//DOOR 4
window.scene.getMeshByName('sec_' + i + '_door4m_' + ii).position.z = z/-2 * zMultiplicator;
window.scene.getMeshByName('sec_' + i + '_door4m_glass_' + ii).position.z = z/-2 * zMultiplicator;


window.scene.getMeshByName('sec_' + i + '_balk_' + ii).position.z = (z/-2 + 0.075) * zMultiplicator;



//PLANE
window.scene.getMeshByName('sec_' + i + '_plane').position.z = (z/-2 + 0.01) * zMultiplicator;
//window.scene.getMeshByName('sec_' + i + '_plane').position.x = startX2 + window.appState['sectionWidth']/2000 - 0.075 - window.appState['sectionWidth']/1000;
window.scene.getMeshByName('sec_' + i + '_plane').position.x = startX2 + window.appState['sectionWidth']/2000 - 0.075;
window.scene.getMeshByName('sec_' + i + '_plane').scaling.x = window.appState['sectionWidth']/1000;

//console.log('startX: ' + startX);


//draw LAST or FIRST BALK
if (window.appSection[i].place[0]!=0)
{
//console.log('balk cursor: ' + cursorX);
window.scene.getMeshByName('sec_' + i + '_balk_3').position.x = startXTemp - cursorX - 0.075;
window.scene.getMeshByName('sec_' + i + '_balk_3').setEnabled(true);
window.scene.getMeshByName('sec_' + i + '_balk_3').position.z = (z/-2 + 0.075) * zMultiplicator;

window.scene.getMeshByName('sec_' + i + '_balk_0').position.x = startXTemp - 0.075;
window.scene.getMeshByName('sec_' + i + '_balk_0').setEnabled(true);
window.scene.getMeshByName('sec_' + i + '_balk_0').position.z = (z/-2 + 0.075) * zMultiplicator;


}

//WALL
if(window.appSection[i].wall==true)
{
  let onlyWallxReset=0.0;
  if (window.appSection[i].place[0] == 0) onlyWallxReset=0.15;


  window.scene.getMeshByName('sec_' + i + '_wall').setEnabled(true);
//if(window.appSection[i].inner == true)  window.scene.getMeshByName('sec_' + i + '_wall2').setEnabled(true);
if (window.appState['wallInside'] == true) window.scene.getMeshByName('sec_' + i + '_wall2').setEnabled(true);


window.scene.getMeshByName('sec_' + i + '_frame').setEnabled(true);
  //INVERSION



//  if (window.appSection[i].orientation == true)

window.scene.getMeshByName('sec_' + i + '_wall').position.x= startX2 - 0.01;//+ 0.075;
window.scene.getMeshByName('sec_' + i + '_wall2').position.x= startX2 - 0.01;//+ 0.075;
window.scene.getMeshByName('sec_' + i + '_frame').position.x= startX2 - 0.01;//+ 0.075;


  window.scene.getMeshByName('sec_' + i + '_wall').position.z = (z/-2 + 0.075 + 0.01) * zMultiplicator;
  window.scene.getMeshByName('sec_' + i + '_wall').scaling.x = ((window.appState['sectionWidth'])/1000 - cursorX - 0.14) /2.775 ;
  window.scene.getMeshByName('sec_' + i + '_wall2').position.z = (z/-2 + 0.075 + 0.01 + zWall2Shift) * zMultiplicator ;
  window.scene.getMeshByName('sec_' + i + '_wall2').scaling.x = ((window.appState['sectionWidth'])/1000 - cursorX - 0.14) /2.775 ;

  window.scene.getMeshByName('sec_' + i + '_frame').position.z = (z/-2 + 0.075 + 0.01) * zMultiplicator;
  window.scene.getMeshByName('sec_' + i + '_frame').scaling.x = ((window.appState['sectionWidth'])/1000 - cursorX - 0.14 - wallXScale + onlyWallxReset) /2.775 ;
}





}

//LEFT AND RIGHT
if(i>13)
{
startXTemp = startX - 0.15;
//two types
//if (window.appSection[i].orientation == true) startXTemp = startX - (sectionWidth - cursorX) + 0.15;




//DOOR 2
window.scene.getMeshByName('sec_' + i + '_door2m_' + ii).position.z = startXTemp - elementXposition[ii] - (window.scene.getMeshByName('sec_' + i + '_door2m_' + ii).scaling.x * 2);
window.scene.getMeshByName('sec_' + i + '_door2m_glass_' + ii).position.z = startXTemp -elementXposition[ii] - (window.scene.getMeshByName('sec_' + i + '_door2m_' + ii).scaling.x * 2) ;
//DOOR 3
window.scene.getMeshByName('sec_' + i + '_door3m_' + ii).position.z = startXTemp - elementXposition[ii] - (window.scene.getMeshByName('sec_' + i + '_door3m_' + ii).scaling.x * 3);
window.scene.getMeshByName('sec_' + i + '_door3m_glass_' + ii).position.z = startXTemp -elementXposition[ii] - (window.scene.getMeshByName('sec_' + i + '_door3m_' + ii).scaling.x * 3);
//DOOR 4
window.scene.getMeshByName('sec_' + i + '_door4m_' + ii).position.z = startXTemp - elementXposition[ii] - (window.scene.getMeshByName('sec_' + i + '_door4m_' + ii).scaling.x * 4);
window.scene.getMeshByName('sec_' + i + '_door4m_glass_' + ii).position.z = startXTemp - elementXposition[ii] - (window.scene.getMeshByName('sec_' + i + '_door4m_' + ii).scaling.x * 4);

//window.scene.getMeshByName('sec_' + i + '_door4m_glass_' + ii).scaling.x = 0.925;
//window.scene.getMeshByName('sec_' + i + '_door4m_' + ii).scaling.x = 0.925;


window.scene.getMeshByName('sec_' + i + '_window_glass_2_' + ii).position.z = startXTemp - elementXposition[ii] - 2;
window.scene.getMeshByName('sec_' + i + '_window_2_' + ii).position.z = startXTemp - elementXposition[ii] - 2;
window.scene.getMeshByName('sec_' + i + '_window_glass_1_' + ii).position.z = startXTemp - elementXposition[ii] - 1;
window.scene.getMeshByName('sec_' + i + '_window_1_' + ii).position.z = startXTemp - elementXposition[ii] - 1;
window.scene.getMeshByName('sec_' + i + '_zhaluzi_' + ii).position.z = startXTemp - elementXposition[ii] + 0.5 - 1;
window.scene.getMeshByName('sec_' + i + '_balk_' + ii).position.z = startXTemp - balkXposition[ii] + 0.075;

let zMultiplicator=1;
if(i == 16 || i == 17) zMultiplicator = -1;

//DOOR 2
window.scene.getMeshByName('sec_' + i + '_door2m_' + ii).position.x = x/-2 * zMultiplicator;
window.scene.getMeshByName('sec_' + i + '_door2m_glass_' + ii).position.x = x/-2 * zMultiplicator;

//DOOR 3
window.scene.getMeshByName('sec_' + i + '_door3m_' + ii).position.x = x/-2 * zMultiplicator;
window.scene.getMeshByName('sec_' + i + '_door3m_glass_' + ii).position.x = x/-2 * zMultiplicator;

//DOOR 4
window.scene.getMeshByName('sec_' + i + '_door4m_' + ii).position.x = x/-2 * zMultiplicator;
window.scene.getMeshByName('sec_' + i + '_door4m_glass_' + ii).position.x = x/-2 * zMultiplicator;

//

window.scene.getMeshByName('sec_' + i + '_window_glass_2_' + ii).position.x = (x/-2 - 0.03) * zMultiplicator;
window.scene.getMeshByName('sec_' + i + '_window_2_' + ii).position.x = (x/-2 - 0.03) * zMultiplicator;
window.scene.getMeshByName('sec_' + i + '_window_glass_1_' + ii).position.x = (x/-2 - 0.03) * zMultiplicator;
window.scene.getMeshByName('sec_' + i + '_window_1_' + ii).position.x = (x/-2 - 0.03) * zMultiplicator;
window.scene.getMeshByName('sec_' + i + '_zhaluzi_' + ii).position.x = x/-2 * zMultiplicator;
window.scene.getMeshByName('sec_' + i + '_balk_' + ii).position.x = x/-2 * zMultiplicator;
window.scene.getMeshByName('sec_' + i + '_plane').position.x = (x/-2 - 0.07) * zMultiplicator;

window.scene.getMeshByName('sec_' + i + '_plane').position.z = 0;
window.scene.getMeshByName('sec_' + i + '_plane').scaling.x = z;


//draw LAST or FIRST BALK
if (window.appSection[i].place[0]!=0)
{
//console.log('cursor: ' + cursorX);
window.scene.getMeshByName('sec_' + i + '_balk_3').position.z = startXTemp - cursorX - 0.075;
window.scene.getMeshByName('sec_' + i + '_balk_3').setEnabled(true);
window.scene.getMeshByName('sec_' + i + '_balk_3').position.x = (x/-2 ) * zMultiplicator;
}



let sectionWidthZ;


if (window.appState['rooftype']==0 && window.appState['deepth']<4500)
{
if(window.appSection[i].wall==true)
{
  let onlyWallxReset=0.0;
  if (window.appSection[i].place[0] == 0) onlyWallxReset=0.15;

  window.scene.getMeshByName('sec_' + i + '_wall').setEnabled(true);
//if(window.appSection[i].inner==true)   window.scene.getMeshByName('sec_' + i + '_wall2').setEnabled(true);
if (window.appState['wallInside'] == true) window.scene.getMeshByName('sec_' + i + '_wall2').setEnabled(true);


  window.scene.getMeshByName('sec_' + i + '_frame').setEnabled(true);

//  window.scene.getMeshByName('sec_' + i + '_wall').position.z = startXTemp + cursorX + 0.01 ;//+ 0.01;//+ 0.075;


  if (window.appSection[i].orientation == false)
{
}

  if (window.appSection[i].orientation == true)
  {
    window.scene.getMeshByName('sec_' + i + '_wall').position.z = startX + 0.15 - 0.02 - cursorX; //- 0.15;//+ 0.01;//+ 0.075;
    window.scene.getMeshByName('sec_' + i + '_wall2').position.z = startX + 0.15 - 0.02 - cursorX; //- 0.15;//+ 0.01;//+ 0.075;
    window.scene.getMeshByName('sec_' + i + '_frame').position.z = startX + 0.15 - 0.02 - cursorX; //- 0.15;//+ 0.01;//+ 0.075;

    window.scene.getMeshByName('sec_' + i + '_wall').position.z = startX2 + 0.3 - 0.015 - 0.005; //- 0.15;//+ 0.01;//+ 0.075;
    window.scene.getMeshByName('sec_' + i + '_wall2').position.z = startX2 + 0.3 - 0.015 - 0.005; //- 0.15;//+ 0.01;//+ 0.075;
    window.scene.getMeshByName('sec_' + i + '_frame').position.z = startX2 + 0.3 - 0.015 - 0.005; //- 0.15;//+ 0.01;//+ 0.075;



}

  window.scene.getMeshByName('sec_' + i + '_wall').position.x = (x/-2 + 0.01 ) * zMultiplicator;
  window.scene.getMeshByName('sec_' + i + '_wall').scaling.x = (sectionWidth - cursorX +0.02)/2.775 ;
  window.scene.getMeshByName('sec_' + i + '_wall2').position.x = (x/-2 + 0.01 + zWall2Shift) * zMultiplicator;
  window.scene.getMeshByName('sec_' + i + '_wall2').scaling.x = (sectionWidth - cursorX +0.02)/2.775 ;

  window.scene.getMeshByName('sec_' + i + '_frame').position.x = (x/-2 + 0.01 ) * zMultiplicator;
  window.scene.getMeshByName('sec_' + i + '_frame').scaling.x = (sectionWidth - cursorX +0.02 - wallXScale + onlyWallxReset)/2.775 ;
}


}

////////////////// 4500
if (window.appState['rooftype']==0 && window.appState['deepth']>=4500)
{

if (i == 14 || i == 16 )
{
window.scene.getMeshByName('sec_' + i + '_plane').position.z = - z/4;
window.scene.getMeshByName('sec_' + i + '_plane').scaling.x = z/2;
}


if (i == 15 || i == 17 )
{
window.scene.getMeshByName('sec_' + i + '_plane').position.z = z/4;
window.scene.getMeshByName('sec_' + i + '_plane').scaling.x = z/2;
//cursorX = cursorX - 0.15;
}


if(window.appSection[i].wall==true)
{
  let onlyWallxReset=0.0;
  if (window.appSection[i].place[0] == 0) onlyWallxReset=0.15;

window.scene.getMeshByName('sec_' + i + '_wall').setEnabled(true);
if (window.appState['wallInside'] == true) window.scene.getMeshByName('sec_' + i + '_wall2').setEnabled(true);

//  if(window.appSection[i].inner==true) window.scene.getMeshByName('sec_' + i + '_wall2').setEnabled(true);



window.scene.getMeshByName('sec_' + i + '_frame').setEnabled(true);
  //INVERSION

  window.scene.getMeshByName('sec_' + i + '_wall').position.z = startX2 + 0.25  + 0.05;//+ 0.15;//+ 0.01;//+ 0.075;
  window.scene.getMeshByName('sec_' + i + '_wall2').position.z = startX2 + 0.25 + 0.05;//+ 0.15;//+ 0.01;//+ 0.075;
  window.scene.getMeshByName('sec_' + i + '_frame').position.z = startX2 + 0.25 + 0.05;//+ 0.15;//+ 0.01;//+ 0.075;


  window.scene.getMeshByName('sec_' + i + '_wall').position.x = (x/-2 + 0.01) * zMultiplicator;
  window.scene.getMeshByName('sec_' + i + '_wall').scaling.x = (sectionWidth - cursorX + 0.027) /2.775  - 0.01;
  window.scene.getMeshByName('sec_' + i + '_wall2').position.x = (x/-2 + 0.01 + zWall2Shift) * zMultiplicator;
  window.scene.getMeshByName('sec_' + i + '_wall2').scaling.x = (sectionWidth - cursorX + 0.027) /2.775  - 0.01;

  window.scene.getMeshByName('sec_' + i + '_frame').position.x = (x/-2 + 0.01) * zMultiplicator;
  window.scene.getMeshByName('sec_' + i + '_frame').scaling.x = (sectionWidth - cursorX + 0.027  - wallXScale + onlyWallxReset) /2.775  - 0.01;


}



}



if (window.appState['rooftype']==1)
{
window.scene.getMeshByName('sec_' + i + '_plane').scaling.x = z - 1;
window.scene.getMeshByName('sec_' + i + '_plane').position.z = - 0.5;


if(window.appSection[i].wall==true)
{
  let onlyWallxReset=0.0;
  if (window.appSection[i].place[0] == 0) onlyWallxReset=0.15;

window.scene.getMeshByName('sec_' + i + '_wall').setEnabled(true);
//if(window.appSection[i].inner==true)   window.scene.getMeshByName('sec_' + i + '_wall2').setEnabled(true);
if (window.appState['wallInside'] == true) window.scene.getMeshByName('sec_' + i + '_wall2').setEnabled(true);


window.scene.getMeshByName('sec_' + i + '_frame').setEnabled(true);

//  window.scene.getMeshByName('sec_' + i + '_wall').position.z = startXTemp + cursorX + 0.01 ;//+ 0.01;//+ 0.075;


window.scene.getMeshByName('sec_' + i + '_wall').position.z = startX2; //- 0.15;//+ 0.01;//+ 0.075;
window.scene.getMeshByName('sec_' + i + '_wall2').position.z = startX2; //- 0.15;//+ 0.01;//+ 0.075;
window.scene.getMeshByName('sec_' + i + '_frame').position.z = startX2; //- 0.15;//+ 0.01;//+ 0.075;


window.scene.getMeshByName('sec_' + i + '_wall').position.x = (x/-2 + 0.01 ) * zMultiplicator;
window.scene.getMeshByName('sec_' + i + '_wall').scaling.x = (sectionWidth - cursorX)/2.775 ;
window.scene.getMeshByName('sec_' + i + '_wall2').position.x = (x/-2 + 0.01 + zWall2Shift) * zMultiplicator;
window.scene.getMeshByName('sec_' + i + '_wall2').scaling.x = (sectionWidth - cursorX)/2.775 ;
window.scene.getMeshByName('sec_' + i + '_frame').position.x = (x/-2 + 0.01 ) * zMultiplicator;
window.scene.getMeshByName('sec_' + i + '_frame').scaling.x = (sectionWidth - cursorX  - wallXScale  + onlyWallxReset)/2.775 ;


}




}




}



///DISABLING BULK
if (window.appSection[i].place[0]!=0 || window.appSection[i].place[1]!=0 || window.appSection[i].place[2]!=0 || window.appSection[i].wall==true)
{
if(i<=6)
{
window.scene.getMeshByName('balk_small_front_right_' + (i + 2)).setEnabled(false);
window.scene.getMeshByName('balk_small_front_left_'  + (i + 1)).setEnabled(false);
}
if(i > 6 && i < 14)
{
window.scene.getMeshByName('balk_small_back_right_' + (i - 5)).setEnabled(false);
window.scene.getMeshByName('balk_small_back_left_'  + (i - 6)).setEnabled(false);
}





if (i == 14)
{
window.scene.getMeshByName('balk_small_front_right_' + 1).setEnabled(false);
if (window.appState['rooftype'] == 0 && window.appState['deepth'] >= 4500)
window.scene.getMeshByName("balk_small_center_left_1").setEnabled(false);
else
window.scene.getMeshByName('balk_small_back_right_' + 1).setEnabled(false);
}



if (i == 15)
{
window.scene.getMeshByName('balk_small_back_right_' + 1).setEnabled(false);
window.scene.getMeshByName('balk_small_center_right_' + 1).setEnabled(false);
}

if (i == 16)
{
  let sectionsNumberTemp = window.appState['sectionsNumber'] + 1;
  window.scene.getMeshByName('balk_small_front_left_' + sectionsNumberTemp).setEnabled(false);
  if (window.appState['rooftype'] == 0 && window.appState['deepth'] >= 4500)
  window.scene.getMeshByName("balk_small_center_left_0").setEnabled(false);
  else
  window.scene.getMeshByName('balk_small_back_left_' + sectionsNumberTemp).setEnabled(false);
}


if (i == 17)
{
let sectionsNumberTemp = window.appState['sectionsNumber'] + 1;
window.scene.getMeshByName('balk_small_back_left_' + sectionsNumberTemp).setEnabled(false);
window.scene.getMeshByName('balk_small_center_right_0').setEnabled(false);
}



}







}

if (window.appSection[i].orientation==1)  window.scene.getMeshByName('sec_' + i + '_balk_3').setEnabled(true);


if (window.appSection[i].orientation==false) window.scene.getMeshByName('sec_' + i + '_balk_0').setEnabled(false);
if (window.appSection[i].orientation==true && window.appSection[i].place[0]!=0) window.scene.getMeshByName('sec_' + i + '_balk_0').setEnabled(true);//need

if (window.appSection[i].place[0]==6)
{
//window.scene.getMeshByName('sec_' + i + '_balk_' + ii).setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_balk_3').setEnabled(false);
}

if (sectionFull == true || window.scene.getMeshByName('sec_' + i + '_wall').scaling.x <0.04) {
//console.log('walldisabled');
window.scene.getMeshByName('sec_' + i + '_wall').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_wall2').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_frame').setEnabled(false);

}


if (sectionFull == true)
{
window.scene.getMeshByName('sec_' + i + '_balk_3').setEnabled(false);
window.scene.getMeshByName('sec_' + i + '_balk_0').setEnabled(false);
}

//window.scene.getMeshByName('sec_' + i + '_balk_3').setEnabled(true);

if (window.appSection[i].place[0] == 0 && window.appSection[i].place[1] == 0 && window.appSection[i].place[2] == 0)
{
  window.scene.getMeshByName('sec_' + i + '_balk_0').setEnabled(false);
  window.scene.getMeshByName('sec_' + i + '_balk_1').setEnabled(false);
  window.scene.getMeshByName('sec_' + i + '_balk_2').setEnabled(false);
  window.scene.getMeshByName('sec_' + i + '_balk_3').setEnabled(false);
}



}
}



}









}
function switch2D()
{
document.getElementById('renderCanvas').style.display='none';
document.getElementById('canvas2d').style.display='block';
document.getElementById('canvas2Ddiv').style.display='block';

document.getElementById('icon2D').style.backgroundImage='url("css/icon_2d_active.png")';
document.getElementById('icon3D').style.backgroundImage='url("css/icon_3d_inactive.png")';



document.getElementById('iconZoomIn').style.display='none';
document.getElementById('iconZoomOut').style.display='none';
window.engine.resize();
}

function switch3D()
{
document.getElementById('renderCanvas').style.display='block';
document.getElementById('canvas2d').style.display='none';
document.getElementById('canvas2Ddiv').style.display='none';

document.getElementById('icon2D').style.backgroundImage='url("css/icon_2d_inactive.png")';
document.getElementById('icon3D').style.backgroundImage='url("css/icon_3d_active.png")';

document.getElementById('iconZoomIn').style.display='block';
document.getElementById('iconZoomOut').style.display='block';
window.engine.resize();
}



function draw2d()
{
//let canvas = document.getElementById('canvas2d');
//let ctx = canvas.getContext('2d');

//svgClear
let svg = document.getElementById('canvas2d');
svg.innerHTML='';
scale2d();


let scaleWidth = window.appState['width']/1000;
let scale = (1-(scaleWidth - 3)/17) * 1.5 + 1 ; //range from 0 to 1
//canvas.style.transform = 'scale(' + scale + ')';
//console.log(scale);



let x = window.appState['width'] /20 + 7.5;
let z = window.appState['deepth']/20;


let xl = window.appState['overhangLeft']/20;
let xr = window.appState['overhangRight']/20;
let zd = window.appState['overhangFront']/20;
let zu = window.appState['overhangBack']/20;


if (window.appState['rooftype']==0)
{
xl = window.appState['overhangLeft']/20;
xr = window.appState['overhangRight']/20;
zd = window.appState['overhangFront']/20;
zu = window.appState['overhangBack']/20;
}

if (window.appState['rooftype']==1)
{
xl = 200/20;
xr = 200/20;
zd = 200/20;
zu = 200/20;
}


let center=600;


//ctx.clearRect(0, 0, canvas.width, canvas.height);

//ctx.beginPath();

//ctx.moveTo(center - x/2 - xl, center - z/2 - zd);
//ctx.lineTo(center - x/2 - xl, center + z/2 + zu);

//ctx.moveTo(center + x/2 + xr, center - z/2 - zd);
//ctx.lineTo(center + x/2 + xr, center + z/2 + zu);

//ctx.moveTo(center - x/2 - xl - 2, center + z/2 + zu + 2);
//ctx.lineTo(center + x/2 + xr + 2, center + z/2 + zu + 2);

//ctx.moveTo(center - x/2 - xl - 2, center - z/2 - zd - 2);
//ctx.lineTo(center + x/2 + xr + 2, center - z/2 - zd - 2);



//ctx.setLineDash([4, 4]);


//ctx.strokeStyle = "#CCCCCC";
//ctx.lineWidth = 4;

//ctx.strokeRect(
//center - x/2 - xl,
//center - z/2 - zu,
//x + xr + xl,
//z + zd + zu
//);


drawSvgRectangle(  center - x/2 - xl,  center - z/2 - zu,  x + xr + xl,  z + zd + zu,  "gray", "rectangle1", 4, null);



//ctx.stroke();


for (let i=1; i <= window.appState['sectionsNumber']+1; i++)
{
//ctx.beginPath();
//ctx.lineWidth = 3;
//ctx.strokeStyle = "#000000";

let widthD;
let xBalk = window.scene.getMeshByName('balk_front_' + i).position.x * 50 - 3.25;
let yBalk = window.scene.getMeshByName('balk_front_' + i).position.z * 50 + 3.25;

drawSvgRectangle(center + xBalk, center - yBalk, 7.5, 7.5, "black", "bulk" + i, 3, "black");
//ctx.fillRect(center + xBalk, center - yBalk, 7.5, 7.5);




xBalk = window.scene.getMeshByName('balk_back_' + i).position.x * 50 - 3.25;
yBalk = window.scene.getMeshByName('balk_back_' + i).position.z * 50 + 3.25;
//ctx.strokeRect(center + xBalk, center - yBalk, 7.5, 7.5);
//ctx.fillRect(center + xBalk, center - yBalk, 7.5, 7.5);

drawSvgRectangle(center + xBalk, center - yBalk, 7.5, 7.5, "black", "bulk_" + i, 3, "black");



if (window.appState['rooftype']==1)
{
if (i == 1 || i == window.appState['sectionsNumber']+1){}
//ctx.strokeRect(center + xBalk, center - yBalk - 50, 7.5, 7.5);
//ctx.fillRect(center + xBalk, center - yBalk - 50, 7.5, 7.5);

drawSvgRectangle(center + xBalk, center - yBalk - 50, 7.5, 7.5, "black", "bulk_roof_" + i, 3, "black");

}
//ctx.closePath();

if (window.appState['rooftype']==0 && window.appState['deepth']>=4500)
{
//ctx.beginPath();
//ctx.strokeRect(center - x/2 + 1, center, 7.5, 7.5);
//ctx.fillRect(  center - x/2 + 1, center, 7.5, 7.5);

drawSvgRectangle(center - x/2 + 1, center, 7.5, 7.5, "black", "bulk_mid_1", 3, "black");


//ctx.strokeRect(center + x/2 - 7.5, center, 7.5, 7.5);
//ctx.fillRect(  center + x/2 - 7.5, center, 7.5, 7.5);

drawSvgRectangle(center + x/2 - 7.5, center, 7.5, 7.5, "black", "bulk_mid_2", 3, "black");


//ctx.closePath();
}



// FRONT SECTIONS
if (i <= window.appState['sectionsNumber'] && !(window.appState['house1on']==true && i==1) && !(window.appState['house2on']==true && i==window.appState['sectionsNumber']))
{
let widthD =(window.scene.getMeshByName('balk_front_' + (i + 1)).position.x - window.scene.getMeshByName('balk_front_' + i).position.x) * 50;
if (window.appSection[i-1].wall == true  || window.appSection[i-1].place[0]==6)
{
//  //ctx.beginPath();
//  //ctx.strokeStyle = "#000000";
//  if (window.appSection[i-1].place[0]==6)  //ctx.strokeStyle = "#3399FF";
//  //ctx.moveTo(center + xBalk + 6, center + z/2 );
//  //ctx.lineTo(center + xBalk + widthD, center + z/2 );
//  //ctx.stroke();
//  //ctx.closePath();

  let colorwall = 'black';
  if (window.appSection[i-1].place[0]==6) colorwall = "#3399FF";


  drawSvgLine(center + xBalk + 6, center + z/2 ,     center + xBalk + widthD, center + z/2 ,      colorwall, 'section_wall_'+i, 3);


}
}
// BACK SECTIONS
if (window.appState['rooftype']==0)
{
  if (i <= window.appState['sectionsNumber'] && !(window.appState['house1on']==true && i==1) && !(window.appState['house2on']==true && i==window.appState['sectionsNumber']))
  {
  let widthD =(window.scene.getMeshByName('balk_front_' + (i + 1)).position.x - window.scene.getMeshByName('balk_front_' + i).position.x) * 50;
  if (window.appSection[i+6].wall == true || window.appSection[i+6].place[0]==6)
  {
//    //ctx.beginPath();
//    //ctx.strokeStyle = "#000000";
//    if (window.appSection[i+6].place[0]==6)  //ctx.strokeStyle = "#3399FF";
//    //ctx.moveTo(center + xBalk + 6, center - z/2 + 1);
//    //ctx.lineTo(center + xBalk + widthD, center - z/2 + 1);
//    //ctx.stroke();
//    //ctx.closePath();

let colorwall = 'black';
if (window.appSection[i-1].place[0]==6) colorwall = "#3399FF";
drawSvgLine(center + xBalk + 6, center - z/2 + 1, center + xBalk + widthD, center - z/2 + 1,  colorwall, 'section_wallback_'+i, 3);


  }
  }
}








}


// back WALL roof2
if (window.appState['rooftype']==1)
{
//  //ctx.beginPath();
//  //ctx.lineWidth = 3;
//  //ctx.strokeStyle = "#000000";

//ctx.moveTo(center - x/2  - 1, center - z/2 +1);
//ctx.lineTo(center + x/2  - 2, center - z/2 +1);
drawSvgLine(center - x/2  - 1, center - z/2 +1, center + x/2  - 2, center - z/2 +1, 'black', 'wallBack1', 3);

//ctx.moveTo(center - x/2  + 1, center - z/2 +1);
//ctx.lineTo(center - x/2  + 1, center - z/2 - 2 + 53);
drawSvgLine(center - x/2  + 1, center - z/2 +1, center - x/2  + 1, center - z/2 - 2 + 53, 'black', 'wallBack2', 3);

//ctx.moveTo(center + x/2  , center - z/2 +1);
//ctx.lineTo(center + x/2  , center - z/2 - 2 + 53);
drawSvgLine(center + x/2, center - z/2 +1, center + x/2, center - z/2 - 2 + 53, 'black', 'wallBack3', 3);

//ctx.stroke();
//ctx.closePath();
}

if (window.appState['house1on']==true)
{
//  //ctx.beginPath();
//  //ctx.lineWidth = 3;
//  //ctx.strokeStyle = "#000000";


//  //ctx.moveTo(center - x/2  + 1, center - z/2 +1);
//  //ctx.lineTo(center - x/2  + 1, center + z/2 );

drawSvgLine(center - x/2  + 1, center - z/2 +1, center - x/2  + 1, center + z/2, 'black', 'house1_wall1', 3);


  let xBalk = window.scene.getMeshByName('balk_front_' + 2).position.x * 50 + 3.25;
  let xBalkZero = window.scene.getMeshByName('balk_front_' + 1).position.x * 50 + 3.25;
  let xWallCenter = (xBalk + xBalkZero)/2;



//  //ctx.moveTo(center + xBalk, center - z/2 +1);
//  //ctx.lineTo(center + xBalk, center + z/2 );
drawSvgLine(center + xBalk, center - z/2 +1, center + xBalk, center + z/2, 'black', 'house1_wall2', 3);



//  //ctx.moveTo(center - x/2  + 1, center - z/2 +1);
//  //ctx.lineTo(center + xBalk, center - z/2 +1);
drawSvgLine(center - x/2  + 1, center - z/2 +1, center + xBalk, center - z/2 +1, 'black', 'house1_wall3', 3);



//  //ctx.moveTo(center - x/2  + 1, center + z/2);
//  //ctx.lineTo(center + xBalk, center + z/2);

drawSvgLine(center - x/2  + 1, center + z/2, center + xBalk, center + z/2, 'black', 'house1_wall4', 3);


//ctx.stroke();
//ctx.closePath();


//front WALL 1 1 DOOR
if (window.appState['house1wall1'] == 2 || window.appState['house1wall1'] == 4 || window.appState['house1wall1'] == 5)
{
//ctx.beginPath();


let shift = 0;

if (window.appState['house1wall1'] == 4) shift = -25;
if (window.appState['house1wall1'] == 5) shift = -30.0;

let centerWall= (center - x/2  + 1 ) + (window.appState['house1width']/20)/2 + 3.5;
drawDoor(centerWall + shift, center + z/2, Math.PI/-2, true);
}

if (window.appState['house1wall1'] == 3 || window.appState['house1wall1'] == 4 || window.appState['house1wall1'] == 6)
{
let shift = 0;
if (window.appState['house1wall1'] == 4) shift = 25;
if (window.appState['house1wall1'] == 6) shift = 30.0;
let centerWall= (center - x/2  + 1 ) + (window.appState['house1width']/20)/2 + 3.5;
drawDoor(centerWall + shift, center + z/2, Math.PI/-2, false);
}

//front WALL 1 2 DOOR
if (window.appState['house1wall2'] == 2 || window.appState['house1wall2'] == 4 || window.appState['house1wall2'] == 5)
{
//ctx.beginPath();
let shift = 0;

if (window.appState['house1wall2'] == 4) shift = -25;
if (window.appState['house1wall2'] == 5) shift = -30.0;

let centerWall= (center - x/2  + 1 ) + (window.appState['house1width']/20)/2 + 3.5;
drawDoor(centerWall - shift, center - z/2 +1, Math.PI/2, true);
}

if (window.appState['house1wall2'] == 3 || window.appState['house1wall2'] == 4 || window.appState['house1wall2'] == 6)
{
let shift = 0;
if (window.appState['house1wall2'] == 4) shift = 25;
if (window.appState['house1wall2'] == 6) shift = 30.0;
let centerWall= (center - x/2  + 1 ) + (window.appState['house1width']/20)/2 + 3.5;
drawDoor(centerWall - shift, center - z/2 +1, Math.PI/2, false);
}



//front WALL 1 3 DOOR
if (window.appState['house1wall3'] == 2 || window.appState['house1wall3'] == 4 || window.appState['house1wall3'] == 5)
{
//ctx.beginPath();
let shift = 0;

if (window.appState['house1wall3'] == 4) shift = 25;
if (window.appState['house1wall3'] == 5) shift = 30.0;

if (window.appState['rooftype']==1) shift = shift - 25;
if (window.appState['rooftype']==0 && window.appState['deepth'] == 4500) shift = shift - 56;
if (window.appState['rooftype']==0 && window.appState['deepth'] == 5000) shift = shift - 62.5;

let centerWall= (center - x/2  + 1 ) + (window.appState['house1width']/20)/2;
drawDoor(center - x/2  + 1, center - shift, Math.PI, true);
}

if (window.appState['house1wall3'] == 3 || window.appState['house1wall3'] == 4 || window.appState['house1wall3'] == 6)
{
let shift = 0;
if (window.appState['house1wall3'] == 4) shift = -25;
if (window.appState['house1wall3'] == 6) shift = -30.0;

if (window.appState['rooftype']==1) shift = shift - 25;
if (window.appState['rooftype']==0 && window.appState['deepth'] == 4500) shift = shift - 56;
if (window.appState['rooftype']==0 && window.appState['deepth'] == 5000) shift = shift - 62.5;

let centerWall= (center - x/2  + 1 ) + (window.appState['house1width']/20)/2;
drawDoor(center - x/2  + 1, center - shift, Math.PI, false);
}


//front WALL 1 4 DOOR
if (window.appState['house1wall4'] == 2 || window.appState['house1wall4'] == 4 || window.appState['house1wall4'] == 5)
{
//ctx.beginPath();
let shift = 0;

if (window.appState['house1wall4'] == 4) shift = -25;
if (window.appState['house1wall4'] == 5) shift = -30.0;

if (window.appState['rooftype']==1) shift = shift - 25;
if (window.appState['rooftype']==0 && window.appState['deepth'] == 4500) shift = shift - 56;
if (window.appState['rooftype']==0 && window.appState['deepth'] == 5000) shift = shift - 62.5;

let centerWall= (center - x/2  + 1 ) + (window.appState['house1width']/20)/2;
drawDoor(center - x/2  + 1  + (window.appState['house1width']/20)  + 5.5, center - shift, Math.PI * 2, true);
}

if (window.appState['house1wall4'] == 3 || window.appState['house1wall4'] == 4 || window.appState['house1wall4'] == 6)
{
let shift = 0;
if (window.appState['house1wall4'] == 4) shift = 25;
if (window.appState['house1wall4'] == 6) shift = 30.0;

if (window.appState['rooftype']==1) shift = shift - 25;
if (window.appState['rooftype']==0 && window.appState['deepth'] == 4500) shift = shift - 56;
if (window.appState['rooftype']==0 && window.appState['deepth'] == 5000) shift = shift - 62.5;

let centerWall= (center - x/2  + 1 ) + (window.appState['house1width']/20)/2;
drawDoor(center - x/2  + 1  + (window.appState['house1width']/20) + 5.5, center - shift, Math.PI * 2 , false);
}


//WINDOW wall 1 1


if (window.appState['house1wall1'] == 1 || window.appState['house1wall1'] == 5 || window.appState['house1wall1'] == 6)
{
//ctx.closePath();

//ctx.beginPath();
let shift = 0;

if (window.appState['house1wall1'] == 6) shift = -30.0;
if (window.appState['house1wall1'] == 5) shift = 30.0;

let centerWall = (center - x/2  + 1 ) + (window.appState['house1width']/20)/2 + 3.5;

//ctx.strokeStyle = "#3399FF";
//ctx.moveTo(centerWall - 15 + shift, center + z/2 );
//ctx.lineTo(centerWall + 15 + shift, center + z/2 );

//ctx.closePath();
//ctx.lineWidth = 3;
//ctx.stroke();
//ctx.strokeStyle = "#000000";


drawSvgLine(centerWall - 15 + shift, center + z/2, centerWall + 15 + shift, center + z/2, "#3399FF", 'house1_window1', 3);



//ctx.stroke();
}



if (window.appState['house1wall2'] == 1 || window.appState['house1wall2'] == 5 || window.appState['house1wall2'] == 6)
{
//ctx.closePath();

//ctx.beginPath();
let shift = 0;

if (window.appState['house1wall2'] == 6) shift = 30.0;
if (window.appState['house1wall2'] == 5) shift = -30.0;

let centerWall= (center - x/2  + 1 ) + (window.appState['house1width']/20)/2;

//ctx.strokeStyle = "#3399FF";
//ctx.moveTo(centerWall - 15 + shift, center - z/2 + 1.5);
//ctx.lineTo(centerWall + 15 + shift, center - z/2 + 1.5);

//ctx.closePath();
//ctx.lineWidth = 3;
//ctx.stroke();
//ctx.strokeStyle = "#000000";


drawSvgLine(centerWall - 15 + shift, center - z/2 + 1.5, centerWall + 15 + shift, center - z/2 + 1.5, "#3399FF", 'house1_window2', 3);

//ctx.stroke();
}

/// WINDOW 3
if (window.appState['house1wall3'] == 1 || window.appState['house1wall3'] == 5 || window.appState['house1wall3'] == 6)
{
//ctx.beginPath();
let shift = 0;

if (window.appState['house1wall3'] == 6) shift =  30.0;
if (window.appState['house1wall3'] == 5) shift = - 30.0;

if (window.appState['rooftype']==1) shift = shift - 25;
if (window.appState['rooftype']==0 && window.appState['deepth'] == 4500) shift = shift - 56;
if (window.appState['rooftype']==0 && window.appState['deepth'] == 5000) shift = shift - 62.5;

let centerWall= (center - x/2  + 1 ) + (window.appState['house1width']/20)/2;


//ctx.strokeStyle = "#3399FF";
//ctx.moveTo(center - x/2  + 1, center - shift - 15);
//ctx.lineTo(center - x/2  + 1, center - shift + 15);

//ctx.closePath();
//ctx.lineWidth = 3;
//ctx.stroke();
//ctx.strokeStyle = "#000000";



drawSvgLine(center - x/2  + 1, center - shift - 15, center - x/2  + 1, center - shift + 15, "#3399FF", 'house1_window3', 3);

}



/// WINDOW 4
if (window.appState['house1wall4'] == 1 || window.appState['house1wall4'] == 5 || window.appState['house1wall4'] == 6)
{
//ctx.beginPath();
let shift = 0;

if (window.appState['house1wall4'] == 6) shift = -30.0;
if (window.appState['house1wall4'] == 5) shift =  30.0;

if (window.appState['rooftype']==1) shift = shift - 25;
if (window.appState['rooftype']==0 && window.appState['deepth'] == 4500) shift = shift - 56;
if (window.appState['rooftype']==0 && window.appState['deepth'] == 5000) shift = shift - 62.5;

let centerWall= (center - x/2  + 1 ) + (window.appState['house1width']/20)/2;


//ctx.strokeStyle = "#3399FF";
//ctx.moveTo(center - x/2 + (window.appState['house1width']/20) + 7, center - shift - 15);
//ctx.lineTo(center - x/2 + (window.appState['house1width']/20) + 7, center - shift + 15);

//ctx.closePath();
//ctx.lineWidth = 3;
//ctx.stroke();
//ctx.strokeStyle = "#000000";


drawSvgLine(center - x/2 + (window.appState['house1width']/20) + 7, center - shift - 15, center - x/2 + (window.appState['house1width']/20) + 7, center - shift + 15, "#3399FF", 'house1_window4', 3);
}
}


if (window.appState['house2on']==true)
{
  //ctx.beginPath();
  //ctx.lineWidth = 3;
  //ctx.strokeStyle = "#000000";


let lastBalk1 = window.appState['sectionsNumber'];
let lastBalk2 = window.appState['sectionsNumber']+1;

let xBalk1 = window.scene.getMeshByName('balk_front_' + lastBalk1).position.x * 50 - 3.25;
let xBalk2 = window.scene.getMeshByName('balk_front_' + lastBalk2).position.x * 50 + 3.25;


//  //ctx.moveTo(center + xBalk1, center - z/2 +1);
//  //ctx.lineTo(center + xBalk1, center + z/2 );


drawSvgLine(center + xBalk1, center - z/2 +1, center + xBalk1, center + z/2, "#000000", 'house2_wall1', 3);


//  //ctx.moveTo(center + xBalk2, center - z/2 +1);
//  //ctx.lineTo(center + xBalk2, center + z/2 );
drawSvgLine(center + xBalk2, center - z/2 +1, center + xBalk2, center + z/2, "#000000", 'house2_wall2', 3);


//  //ctx.moveTo(center + xBalk1, center - z/2 +1);
//  //ctx.lineTo(center + xBalk2, center - z/2 +1);

drawSvgLine(center + xBalk1, center - z/2 +1, center + xBalk2, center - z/2 +1, "#000000", 'house2_wall3', 3);



//  //ctx.moveTo(center + xBalk1, center + z/2);
//  //ctx.lineTo(center + xBalk2, center + z/2);

drawSvgLine(center + xBalk1, center + z/2,  center + xBalk2, center + z/2, "#000000", 'house2_wall3', 4);

//ctx.stroke();



//front WALL 2 1 DOOR
if (window.appState['house2wall1'] == 2 || window.appState['house2wall1'] == 4 || window.appState['house2wall1'] == 5)
{
//ctx.beginPath();


let shift = 0;

if (window.appState['house2wall1'] == 4) shift = -25;
if (window.appState['house2wall1'] == 5) shift = -30.0;

let centerWall= (center + x/2  + 1 ) - (window.appState['house2width']/20)/2 + 3.5;
drawDoor(centerWall + shift, center + z/2, Math.PI/-2, true);
}

if (window.appState['house2wall1'] == 3 || window.appState['house2wall1'] == 4 || window.appState['house2wall1'] == 6)
{
let shift = 0;
if (window.appState['house2wall1'] == 4) shift = 25;
if (window.appState['house2wall1'] == 6) shift = 30.0;
let centerWall= (center + x/2  + 1 ) - (window.appState['house2width']/20)/2 + 3.5;
drawDoor(centerWall + shift, center + z/2, Math.PI/-2, false);
}

//front WALL 2 2 DOOR
if (window.appState['house2wall2'] == 2 || window.appState['house2wall2'] == 4 || window.appState['house2wall2'] == 5)
{
//ctx.beginPath();
let shift = 0;

if (window.appState['house2wall2'] == 4) shift = -25;
if (window.appState['house2wall2'] == 5) shift = -30.0;

let centerWall= (center + x/2  + 1 ) - (window.appState['house2width']/20)/2 + 3.5;
drawDoor(centerWall - shift, center - z/2 +1, Math.PI/2, true);
}

if (window.appState['house2wall2'] == 3 || window.appState['house2wall2'] == 4 || window.appState['house2wall2'] == 6)
{
let shift = 0;
if (window.appState['house2wall2'] == 4) shift = 25;
if (window.appState['house2wall2'] == 6) shift = 30.0;
let centerWall= (center + x/2  + 1 ) - (window.appState['house2width']/20)/2 + 3.5;
drawDoor(centerWall - shift, center - z/2 +1, Math.PI/2, false);
}



//front WALL 2 3 DOOR
if (window.appState['house2wall3'] == 2 || window.appState['house2wall3'] == 4 || window.appState['house2wall3'] == 5)
{
//ctx.beginPath();
let shift = 0;

if (window.appState['house2wall3'] == 4) shift = 25;
if (window.appState['house2wall3'] == 5) shift = 30.0;

if (window.appState['rooftype']==1) shift = shift - 25;
if (window.appState['rooftype']==0 && window.appState['deepth'] == 4500) shift = shift - 56;
if (window.appState['rooftype']==0 && window.appState['deepth'] == 5000) shift = shift - 62.5;

let centerWall= (center - x/2  + 1 ) + (window.appState['house2width']/20)/2;
drawDoor(center + x/2 -(window.appState['house2width']/20) -7, center - shift, Math.PI, true);
}

if (window.appState['house2wall3'] == 3 || window.appState['house2wall3'] == 4 || window.appState['house2wall3'] == 6)
{
let shift = 0;
if (window.appState['house2wall3'] == 4) shift = -25;
if (window.appState['house2wall3'] == 6) shift = -30.0;

if (window.appState['rooftype']==1) shift = shift - 25;
if (window.appState['rooftype']==0 && window.appState['deepth'] == 4500) shift = shift - 56;
if (window.appState['rooftype']==0 && window.appState['deepth'] == 5000) shift = shift - 62.5;

let centerWall= (center + x/2  + 1 ) - (window.appState['house2width']/20)/2;
drawDoor(center + x/2 -(window.appState['house2width']/20) -7, center - shift, Math.PI, false);
}

//front WALL 2 4 DOOR
if (window.appState['house2wall4'] == 2 || window.appState['house2wall4'] == 4 || window.appState['house2wall4'] == 5)
{
//ctx.beginPath();
let shift = 0;

if (window.appState['house2wall4'] == 4) shift = -25;
if (window.appState['house2wall4'] == 5) shift = -30.0;

if (window.appState['rooftype']==1) shift = shift - 25;
if (window.appState['rooftype']==0 && window.appState['deepth'] == 4500) shift = shift - 56;
if (window.appState['rooftype']==0 && window.appState['deepth'] == 5000) shift = shift - 62.5;

let centerWall= (center - x/2  + 1 ) + (window.appState['house2width']/20)/2;
drawDoor(center + x/2    , center - shift, Math.PI * 2, true);
}

if (window.appState['house2wall4'] == 3 || window.appState['house2wall4'] == 4 || window.appState['house2wall4'] == 6)
{
let shift = 0;
if (window.appState['house2wall4'] == 4) shift = 25;
if (window.appState['house2wall4'] == 6) shift = 30.0;

if (window.appState['rooftype']==1) shift = shift - 25;
if (window.appState['rooftype']==0 && window.appState['deepth'] == 4500) shift = shift - 56;
if (window.appState['rooftype']==0 && window.appState['deepth'] == 5000) shift = shift - 62.5;

let centerWall = (center + x/2  + 1 ) - (window.appState['house2width']/20)/2;
drawDoor(center + x/2   , center - shift, Math.PI * 2 , false);
}


//WINDOW 1

if (window.appState['house2wall1'] == 1 || window.appState['house2wall1'] == 5 || window.appState['house2wall1'] == 6)
{
//ctx.closePath();

//ctx.beginPath();
let shift = 0;

if (window.appState['house2wall1'] == 6) shift = -30.0;
if (window.appState['house2wall1'] == 5) shift = 30.0;

let centerWall= (center + x/2  + 1 ) - (window.appState['house2width']/20)/2 + 3.5;

//ctx.strokeStyle = "#3399FF";
//ctx.moveTo(centerWall - 15 + shift, center + z/2 );
//ctx.lineTo(centerWall + 15 + shift, center + z/2 );

//ctx.closePath();
//ctx.lineWidth = 3;
//ctx.stroke();
//ctx.strokeStyle = "#000000";


//
drawSvgLine(centerWall - 15 + shift, center + z/2, centerWall + 15 + shift, center + z/2, "#3399FF", 'house2_window1', 3);

//ctx.stroke();
}


//WINDOW 2
if (window.appState['house2wall2'] == 1 || window.appState['house2wall2'] == 5 || window.appState['house2wall2'] == 6)
{
//ctx.closePath();

//ctx.beginPath();
let shift = 0;

if (window.appState['house2wall2'] == 6) shift = 30.0;
if (window.appState['house2wall2'] == 5) shift = -30.0;

let centerWall = (center + x/2  + 1 ) - (window.appState['house2width']/20)/2;

//ctx.strokeStyle = "#3399FF";
//ctx.moveTo(centerWall - 15 + shift, center - z/2 + 1.5);
//ctx.lineTo(centerWall + 15 + shift, center - z/2 + 1.5);

//ctx.closePath();
//ctx.lineWidth = 3;
//ctx.stroke();
//ctx.strokeStyle = "#000000";


///
drawSvgLine(centerWall - 15 + shift, center - z/2 + 1.5, centerWall + 15 + shift, center - z/2 + 1.5, "#3399FF", 'house2_window2', 3);

//ctx.stroke();
}

/// WINDOW 3
if (window.appState['house2wall3'] == 1 || window.appState['house2wall3'] == 5 || window.appState['house2wall3'] == 6)
{
//ctx.beginPath();
let shift = 0;

if (window.appState['house2wall3'] == 6) shift =  30.0;
if (window.appState['house2wall3'] == 5) shift = - 30.0;

if (window.appState['rooftype']==1) shift = shift - 25;
if (window.appState['rooftype']==0 && window.appState['deepth'] == 4500) shift = shift - 56;
if (window.appState['rooftype']==0 && window.appState['deepth'] == 5000) shift = shift - 62.5;

let centerWall= (center - x/2  + 1 ) + (window.appState['house2width']/20)/2;


//ctx.strokeStyle = "#3399FF";
//ctx.moveTo(center + x/2 - (window.appState['house2width']/20) -7, center - shift - 15);
//ctx.lineTo(center + x/2 - (window.appState['house2width']/20) -7, center - shift + 15);

//ctx.closePath();
//ctx.lineWidth = 3;
//ctx.stroke();
//ctx.strokeStyle = "#000000";


//
drawSvgLine(center + x/2 - (window.appState['house2width']/20) -7, center - shift - 15, center + x/2 - (window.appState['house2width']/20) -7, center - shift + 15, "#3399FF", 'house2_window3', 3);
}



/// WINDOW 4
if (window.appState['house2wall4'] == 1 || window.appState['house2wall4'] == 5 || window.appState['house2wall4'] == 6)
{
//ctx.beginPath();
let shift = 0;

if (window.appState['house2wall4'] == 6) shift = -30.0;
if (window.appState['house2wall4'] == 5) shift =  30.0;

if (window.appState['rooftype']==1) shift = shift - 25;
if (window.appState['rooftype']==0 && window.appState['deepth'] == 4500) shift = shift - 56;
if (window.appState['rooftype']==0 && window.appState['deepth'] == 5000) shift = shift - 62.5;

let centerWall= (center - x/2  + 1 ) + (window.appState['house2width']/20)/2;


//ctx.strokeStyle = "#3399FF";
//ctx.moveTo(center + x/2  , center - shift - 15);
//ctx.lineTo(center + x/2  , center - shift + 15);

//ctx.closePath();
//ctx.lineWidth = 3;
//ctx.stroke();
//ctx.strokeStyle = "#000000";

//
drawSvgLine(center + x/2  , center - shift - 15, center + x/2  , center - shift + 15, "#3399FF", 'house2_window4', 3);



}






}




}




function drawDoor(x, y, angle1, left)
{

let x1=0;
let y1=25;

let x1new = x1 * Math.cos(angle1) - y1 * Math.sin(angle1) ;
let y1new = x1 * Math.sin(angle1) + y1 * Math.cos(angle1);

let x2=0;
let y2=-25;

let x2new = x2 * Math.cos(angle1) - y2 * Math.sin(angle1) ;
let y2new = x2 * Math.sin(angle1) + y2 * Math.cos(angle1);


let x31=-3;
let y31=25;
let x32=3;
let y32=25;

let x31new = x31 * Math.cos(angle1) - y31 * Math.sin(angle1);
let y31new = x31 * Math.sin(angle1) + y31 * Math.cos(angle1);
let x32new = x32 * Math.cos(angle1) - y32 * Math.sin(angle1);
let y32new = x32 * Math.sin(angle1) + y32 * Math.cos(angle1);

let x41=-3;
let y41=-25;
let x42=3;
let y42=-25;

let x41new = x41 * Math.cos(angle1) - y41 * Math.sin(angle1);
let y41new = x41 * Math.sin(angle1) + y41 * Math.cos(angle1);
let x42new = x42 * Math.cos(angle1) - y42 * Math.sin(angle1);
let y42new = x42 * Math.sin(angle1) + y42 * Math.cos(angle1);



//ctx.moveTo(x + x1new, y - y1new);
//ctx.lineTo(x + x2new, y - y2new);
drawSvgLine(x + x1new, y - y1new, x + x2new, y - y2new, 'black', 'door_' + Math.random(), 3);




//ctx.moveTo(x + x31new, y - y31new);
//ctx.lineTo(x + x32new, y - y32new);
drawSvgLine(x + x31new, y - y31new , x + x32new, y - y32new, 'black', 'door_' + Math.random(), 3);



//ctx.moveTo(x + x41new, y - y41new);
//ctx.lineTo(x + x42new, y - y42new);
drawSvgLine(x + x41new, y - y41new, x + x42new, y - y42new, 'black', 'door_' + Math.random(), 3);




let x1open, y1open, angle3, x1openNew, y1openNew;

if (left == false)
{
// open angle left
x1open = x2new - x1new;
y1open = y2new - y1new;

angle3 = 0.3;

x1openNew = x1open * Math.cos(angle3) - y1open * Math.sin(angle3);
y1openNew = x1open * Math.sin(angle3) + y1open * Math.cos(angle3);

x1openNew = x1openNew + x1new;
y1openNew = y1openNew + y1new;

//ctx.moveTo(x + x1new, y - y1new);
//ctx.lineTo(x + x1openNew, y - y1openNew);


drawSvgLine(x + x1new, y - y1new, x + x1openNew, y - y1openNew , 'black', 'door_' + Math.random(), 3);


}

else
{
// open angle left
x1open = x1new - x2new;
y1open = y1new - y2new;

angle3 = - 0.3;

x1openNew = x1open * Math.cos(angle3) - y1open * Math.sin(angle3);
y1openNew = x1open * Math.sin(angle3) + y1open * Math.cos(angle3);

x1openNew = x1openNew + x2new;
y1openNew = y1openNew + y2new;


//ctx.moveTo(x + x2new, y - y2new);
//ctx.lineTo(x + x1openNew, y - y1openNew);

drawSvgLine(x + x2new, y - y2new , x + x1openNew, y - y1openNew, 'black', 'door_' + Math.random(), 3);

}





//ctx.moveTo(0, 30);
//ctx.lineTo(20, 70);

}


function drawSvgLine(x1, y1, x2, y2, color, id, strokeWidth)
{
let canvas2d = document.getElementById('canvas2d');
let newLine = document.createElementNS('http://www.w3.org/2000/svg','line');
newLine.setAttribute('id',id);
newLine.setAttribute('x1',x1);
newLine.setAttribute('y1',y1);
newLine.setAttribute('x2',x2);
newLine.setAttribute('y2',y2);
newLine.setAttribute("stroke", color);
newLine.setAttribute("stroke-width", strokeWidth);
canvas2d.append(newLine);
}


function drawSvgRectangle(x1, y1, x2, y2, color, id, strokeWidth, fillColor)
{

let canvas2d = document.getElementById('canvas2d');
let rect = document.createElementNS('http://www.w3.org/2000/svg','rect');
rect.setAttribute('x',  x1);
rect.setAttribute('y', y1);
rect.setAttribute('width', x2);
rect.setAttribute('height', y2);
rect.setAttribute("stroke", color);
rect.setAttribute("stroke-width", strokeWidth);
if (fillColor!=null) rect.setAttribute('fill', fillColor);
if (fillColor==null) rect.setAttribute('fill', 'none');
canvas2d.appendChild(rect);
}



function scale2d()
{
let vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
let vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
let vmin = Math.min(vh, vw);
let vmax = Math.max(vh, vw);

let scale_main = vmin/1200;
let svg = document.getElementById('canvas2d');

let scaleWidth = window.appState['width']/1000;
let scale = (1-(scaleWidth - 3)/17) * 1.5 + 1 ; //range from 0 to 1

svg.style.transform = 'scale(' + (scale_main * scale) + ')';


}
function roofColorSelect(id)
{
for (let i=1; i<=5;i++)
{
	document.getElementById('roofColor'+i).classList.remove('optionColorActive');
  document.getElementById('roofColor'+i).classList.add('optionColorInactive');

	document.getElementById('roofColorCheckbox'+i).classList.remove('optionColorCheckboxActive');
  document.getElementById('roofColorCheckbox'+i).classList.add('optionColorCheckboxInative');
}

//set color
document.getElementById('roofColor'+id).classList.add('optionColorActive');
document.getElementById('roofColor'+id).classList.remove('optionColorInactive');

document.getElementById('roofColorCheckbox'+id).classList.add('optionColorCheckboxActive');
document.getElementById('roofColorCheckbox'+id).classList.remove('optionColorCheckboxInative');


if (id == 1)
{
window.appState['roofcolor']=1;
	window.scene.getMaterialByName('RoofTileMaterial').albedoColor = new BABYLON.Color3(0.019607843831181526,0.019607843831181526,0.019607843831181526);
window.scene.getMaterialByName('RoofTileMaterial').metallic=1;
window.scene.getMaterialByName('RoofTileMaterial').roughness=0.83;
}

if (id == 2)
{
window.appState['roofcolor']=2;
window.scene.getMaterialByName('RoofTileMaterial').albedoColor = new BABYLON.Color3(0.7,0.20,0.10);
window.scene.getMaterialByName('RoofTileMaterial').metallic=1;
window.scene.getMaterialByName('RoofTileMaterial').roughness=0.76;
}


if (id == 3)
{
window.appState['roofcolor']=3;
window.scene.getMaterialByName('RoofTileMaterial').albedoColor = new BABYLON.Color3(0.0,0.0,0.0);
window.scene.getMaterialByName('RoofTileMaterial').metallic=1;
window.scene.getMaterialByName('RoofTileMaterial').roughness=0.83;
}

if (id == 4)
{
window.appState['roofcolor']=4;
window.scene.getMaterialByName('RoofTileMaterial').albedoColor = new BABYLON.Color3(0.019607843831181526,0.019607843831181526,0.019607843831181526);
window.scene.getMaterialByName('RoofTileMaterial').metallic=0.2;
window.scene.getMaterialByName('RoofTileMaterial').roughness=0.23;



}


if (id == 5)
{
window.appState['roofcolor']=5;
window.scene.getMaterialByName('RoofTileMaterial').albedoColor = new BABYLON.Color3(0.7,0.20,0.10);
window.scene.getMaterialByName('RoofTileMaterial').metallic  = 0.2;
window.scene.getMaterialByName('RoofTileMaterial').roughness = 0.23;
}

for(let roofNum=1;roofNum<=5;roofNum++)
{
for (let i=0; i<=81; i++)
{
window.scene.getMeshByName(roofNum +'roof_tile_'  + i).material=window.scene.getMaterialByName('roofMaterial' + window.appState['roofcolor']);
window.scene.getMeshByName(roofNum +'roof_tile1_' + i).material=window.scene.getMaterialByName('roofMaterial' + window.appState['roofcolor']);
window.scene.getMeshByName(roofNum +'roof_tile2_' + i).material=window.scene.getMaterialByName('roofMaterial' + window.appState['roofcolor']);
window.scene.getMeshByName('roof_ridge_1_' + i).material=window.scene.getMaterialByName('roofMaterial' + window.appState['roofcolor']);

}

window.scene.getMeshByName(roofNum +'roof_tile1_0_end').material   = window.scene.getMaterialByName('roofMaterial' + window.appState['roofcolor']);
window.scene.getMeshByName(roofNum +'roof_tile1_0_start').material = window.scene.getMaterialByName('roofMaterial' + window.appState['roofcolor']);



}

//for(let roofNum=1;roofNum<=5;roofNum++)
//{
//for (let i=1; i<=81; i++)
//{
//window.scene.getMeshByName(roofNum+'roof_tile_' + i).material.
//}
//}

buildRound();
}
function waterpipeCreate()
{

var pipeMaterial = new BABYLON.PBRMaterial("pipeMaterial", window.scene);
pipeMaterial.albedoColor = new BABYLON.Color3(0.6,0.6,0.55);
//pipeMaterial.albedoColor = new BABYLON.Color3(1.0,1.0,1.0);
pipeMaterial.metallic=1.0;
pipeMaterial.roughness=0.4;
pipeMaterial.backFaceCulling = false;

//pipeMaterial.albedoTexture = new BABYLON.Texture("models/waterpipe/waterpipe_BaseColor.png", window.scene);
pipeMaterial.bumpTexture   = new BABYLON.Texture("models/waterpipe/waterpipe_Normal.png", window.scene);
pipeMaterial.metallicTexture= new BABYLON.Texture("models/waterpipe/waterpipe_Metallic.png", window.scene);

pipeMaterial.clone('pipeMaterialHorisontal');
pipeMaterial.clone('pipeMaterialEnd');
window.scene.getMaterialByName('pipeMaterialEnd').bumpTexture.vScale = 0.3;
window.scene.getMaterialByName('pipeMaterialEnd').bumpTexture.uScale = 0.3;

var pipeKeeperMaterial = new BABYLON.PBRMaterial("pipeKeeperMaterial", window.scene);
pipeKeeperMaterial.albedoColor = new BABYLON.Color3(0,0,0);
pipeKeeperMaterial.metallic=1;
pipeKeeperMaterial.roughness=0.83;

//
var pipePlastic = new BABYLON.PBRMaterial("pipePlastic", window.scene);
pipePlastic.albedoColor = new BABYLON.Color3(0.4,0.4,0.4)
pipePlastic.metallic=0.3;
pipePlastic.roughness=0.5;
pipePlastic.backFaceCulling = false;



window.scene.getMeshByName('holder_big').material = pipeMaterial;
window.scene.getMeshByName('holder_small').material = pipeMaterial;
window.scene.getMeshByName('keeper').material = pipeMaterial;


window.scene.getMeshByName('end_left').material = window.scene.getMaterialByName('pipeMaterialEnd');
window.scene.getMeshByName('end_right').material = window.scene.getMaterialByName('pipeMaterialEnd');

window.scene.getMeshByName('pipe_horisontal').material = pipeMaterial;
window.scene.getMeshByName('pipe_vertical').material = pipeMaterial;

window.scene.getMeshByName('pipe_vertical_back').material = pipeMaterial;
window.scene.getMeshByName('keeper_back').material = pipeMaterial;





window.scene.getMeshByName('end_left').scaling=new BABYLON.Vector3(0.001,0.001,0.001);
window.scene.getMeshByName('end_right').scaling=new BABYLON.Vector3(0.001,0.001,0.001);
window.scene.getMeshByName('holder_big').scaling=new BABYLON.Vector3(0.001,0.001,0.001);
window.scene.getMeshByName('holder_small').scaling=new BABYLON.Vector3(0.001,0.001,0.001);
window.scene.getMeshByName('keeper').scaling=new BABYLON.Vector3(0.001,0.001,0.001);
window.scene.getMeshByName('pipe_horisontal').scaling=new BABYLON.Vector3(0.001,0.001,0.001);
window.scene.getMeshByName('pipe_vertical').scaling=new BABYLON.Vector3(0.001,0.001,0.001);

window.scene.getMeshByName('pipe_vertical_back').scaling=new BABYLON.Vector3(0.001,0.001,0.001);
window.scene.getMeshByName('keeper_back').scaling=new BABYLON.Vector3(0.001,0.001,0.001);



//window.scene.getMeshByName('holder_big').clone('holder_big_0');
window.scene.getMeshByName('holder_big').clone('holder_big_1');

window.scene.getMeshByName('holder_big').clone('holder_big_back');
window.scene.getMeshByName('holder_big').clone('holder_big_1_back');
window.scene.getMeshByName('pipe_horisontal').clone('pipe_horisontal_back');
window.scene.getMeshByName('holder_small').clone('holder_small_back');
window.scene.getMeshByName('end_left').clone('end_left_back');
window.scene.getMeshByName('end_right').clone('end_right_back');

window.scene.getMeshByName('pipe_horisontal').material = window.scene.getMaterialByName('pipeMaterialHorisontal');
window.scene.getMeshByName('pipe_horisontal_back').material = window.scene.getMaterialByName('pipeMaterialHorisontal');




//FLIPPING
window.scene.getMeshByName('holder_big').makeGeometryUnique();
window.scene.getMeshByName('holder_big').scaling.z=-0.001;
window.scene.getMeshByName('holder_big').bakeCurrentTransformIntoVertices();
window.scene.getMeshByName('holder_big').flipFaces();

window.scene.getMeshByName('holder_big_1').makeGeometryUnique();
window.scene.getMeshByName('holder_big_1').scaling.z=-0.001;
window.scene.getMeshByName('holder_big_1').bakeCurrentTransformIntoVertices();
window.scene.getMeshByName('holder_big_1').flipFaces();

window.scene.getMeshByName('pipe_horisontal_back').makeGeometryUnique();
window.scene.getMeshByName('pipe_horisontal_back').scaling.z=-0.001;
window.scene.getMeshByName('pipe_horisontal_back').bakeCurrentTransformIntoVertices();
window.scene.getMeshByName('pipe_horisontal_back').flipFaces();

window.scene.getMeshByName('holder_small').makeGeometryUnique();
window.scene.getMeshByName('holder_small').scaling.z=-0.001;
window.scene.getMeshByName('holder_small').bakeCurrentTransformIntoVertices();
window.scene.getMeshByName('holder_small').flipFaces();

window.scene.getMeshByName('end_left_back').makeGeometryUnique();
window.scene.getMeshByName('end_left_back').scaling.z=-0.001;
window.scene.getMeshByName('end_left_back').bakeCurrentTransformIntoVertices();
window.scene.getMeshByName('end_left_back').flipFaces();

window.scene.getMeshByName('end_right_back').makeGeometryUnique();
window.scene.getMeshByName('end_right_back').scaling.z=-0.001;
window.scene.getMeshByName('end_right_back').bakeCurrentTransformIntoVertices();
window.scene.getMeshByName('end_right_back').flipFaces();

}

function waterpipeUpdate()
{
if(window.appState['rooftype']==1 && window.appState['waterpipe']==true)
{
let z = window.appState['deepth']/2000;
let x = window.appState['width']/2000;

let posX= -0.77;
posX=x+posX;

// window.scene.getMeshByName('end_left').bakeCurrentTransformIntoVertices;
// window.scene.getMeshByName('end_right').bakeCurrentTransformIntoVertices;
// window.scene.getMeshByName('holder_big').bakeCurrentTransformIntoVertices;
// window.scene.getMeshByName('holder_small').bakeCurrentTransformIntoVertices;
// window.scene.getMeshByName('keeper').bakeCurrentTransformIntoVertices;
// window.scene.getMeshByName('pipe_horisontal').bakeCurrentTransformIntoVertices;
// window.scene.getMeshByName('pipe_vertical').bakeCurrentTransformIntoVertices;


window.scene.getMeshByName('end_left').setEnabled(true);
window.scene.getMeshByName('end_right').setEnabled(true);
window.scene.getMeshByName('holder_small').setEnabled(true);
window.scene.getMeshByName('keeper').setEnabled(true);
window.scene.getMeshByName('pipe_horisontal').setEnabled(true);
window.scene.getMeshByName('pipe_vertical').setEnabled(true);
window.scene.getMeshByName('holder_big').setEnabled(true);
window.scene.getMeshByName('holder_big_1').setEnabled(true);

window.scene.getMeshByName('pipe_vertical_back').setEnabled(true);
window.scene.getMeshByName('keeper_back').setEnabled(true);
window.scene.getMeshByName('end_left_back').setEnabled(true);
window.scene.getMeshByName('end_right_back').setEnabled(true);
window.scene.getMeshByName('holder_small_back').setEnabled(true);
window.scene.getMeshByName('pipe_horisontal_back').setEnabled(true);
window.scene.getMeshByName('holder_big_back').setEnabled(true);
window.scene.getMeshByName('holder_big_1_back').setEnabled(true);


//2  + 3.25 = 5.25
//-2 shiftZ
let shiftZ = - 7.25;







//UPDATED Z
let zShift=0.29;
window.scene.getMeshByName('pipe_horisontal').position.z = z*-1 - zShift;
window.scene.getMeshByName('end_left').position.z= z*-1 - zShift;
window.scene.getMeshByName('end_right').position.z = z*-1 - zShift;
window.scene.getMeshByName('holder_small').position.z = z*-1 - zShift;
window.scene.getMeshByName('holder_big').position.z = z*-1 - zShift;
window.scene.getMeshByName('holder_big_1').position.z = z*-1 - zShift;

window.scene.getMeshByName('keeper').position.z= z *-1 - 0.1;
window.scene.getMeshByName('pipe_vertical').position.z= z*-1 - 0.1;

// BACK Z
window.scene.getMeshByName('pipe_horisontal_back').position.z = z + zShift;
window.scene.getMeshByName('end_left_back').position.z= z + zShift;
window.scene.getMeshByName('end_right_back').position.z = z + zShift;
window.scene.getMeshByName('holder_small_back').position.z = z + zShift;
window.scene.getMeshByName('holder_big_back').position.z = z + zShift;
window.scene.getMeshByName('holder_big_1_back').position.z = z + zShift;
window.scene.getMeshByName('keeper_back').position.z= z * 1 + 0.1;
window.scene.getMeshByName('pipe_vertical_back').position.z= z * 1 + 0.1;



//UPDATED Y

let tempY=2.395;
tempY=2.295;
let tempYshift = 0.05;
//tempY=2.295;
//tempY=2.41;


window.scene.getMeshByName('keeper').position.y = 0.27 + tempYshift;
window.scene.getMeshByName('pipe_vertical').position.y=0.27 -0.1 + tempYshift;
window.scene.getMeshByName('pipe_horisontal').position.y = tempY + tempYshift;
window.scene.getMeshByName('end_left').position.y = tempY + tempYshift;
window.scene.getMeshByName('end_right').position.y = tempY + tempYshift;
window.scene.getMeshByName('holder_small').position.y = tempY + tempYshift;
window.scene.getMeshByName('holder_big').position.y = tempY + tempYshift;
window.scene.getMeshByName('holder_big_1').position.y = tempY + tempYshift;

// Y BACK
let backYshift=0.55;
//backYshift=0.65;
window.scene.getMeshByName('pipe_vertical_back').position.y=0.27 - backYshift - 0.1  + tempYshift;
window.scene.getMeshByName('keeper_back').position.y = 0.27 - backYshift + tempYshift;
window.scene.getMeshByName('pipe_horisontal_back').position.y = tempY  - backYshift + tempYshift;
window.scene.getMeshByName('end_left_back').position.y = tempY  - backYshift + tempYshift;
window.scene.getMeshByName('end_right_back').position.y = tempY  - backYshift + tempYshift;
window.scene.getMeshByName('holder_small_back').position.y = tempY  - backYshift + tempYshift;
window.scene.getMeshByName('holder_big_back').position.y = tempY  - backYshift + tempYshift;
window.scene.getMeshByName('holder_big_1_back').position.y = tempY  - backYshift + tempYshift;




//X FRONT
let pipeShift = 0.22;
let dummyShift = 0.01;
window.scene.getMeshByName('pipe_vertical').position.x=x;
window.scene.getMeshByName('keeper').position.x=x;
window.scene.getMeshByName('holder_big').position.x=x/-2;
window.scene.getMeshByName('holder_big_1').position.x=x/2;
window.scene.getMeshByName('holder_small').position.x=0;
window.scene.getMeshByName('pipe_horisontal').scaling.x= (x*2 + pipeShift*2) *0.001;
window.scene.getMeshByName('pipe_horisontal').position.x = x*-1 - pipeShift;
window.scene.getMeshByName('end_left').position.x = x*-1 - pipeShift + dummyShift;
window.scene.getMeshByName('end_right').position.x = x + pipeShift - dummyShift;

//X BACK

window.scene.getMeshByName('pipe_vertical_back').position.x=x;
window.scene.getMeshByName('keeper_back').position.x=x;
window.scene.getMeshByName('holder_big_back').position.x=x/-2;
window.scene.getMeshByName('holder_big_1_back').position.x=x/2;
window.scene.getMeshByName('holder_small_back').position.x=0;
window.scene.getMeshByName('pipe_horisontal_back').scaling.x= (x*2 + pipeShift*2) * 1;
window.scene.getMeshByName('pipe_horisontal_back').position.x = x*-1 - pipeShift;
window.scene.getMeshByName('end_left_back').position.x = x*-1 - pipeShift + dummyShift;
window.scene.getMeshByName('end_right_back').position.x = x + pipeShift - dummyShift;


//textureScaling
window.scene.getMaterialByName('pipeMaterialHorisontal').bumpTexture.vScale = window.appState['width']/1000;


}
else
{
//FRONT
window.scene.getMeshByName('end_left').setEnabled(false);
window.scene.getMeshByName('end_right').setEnabled(false);
window.scene.getMeshByName('holder_big').setEnabled(false);
window.scene.getMeshByName('holder_big_1').setEnabled(false);
window.scene.getMeshByName('holder_small').setEnabled(false);
window.scene.getMeshByName('keeper').setEnabled(false);
window.scene.getMeshByName('pipe_horisontal').setEnabled(false);
window.scene.getMeshByName('pipe_vertical').setEnabled(false);



//BACK
window.scene.getMeshByName('end_left_back').setEnabled(false);
window.scene.getMeshByName('end_right_back').setEnabled(false);
window.scene.getMeshByName('holder_big_back').setEnabled(false);
window.scene.getMeshByName('holder_big_1_back').setEnabled(false);
window.scene.getMeshByName('holder_small_back').setEnabled(false);
window.scene.getMeshByName('keeper_back').setEnabled(false);
window.scene.getMeshByName('pipe_horisontal_back').setEnabled(false);
window.scene.getMeshByName('pipe_vertical_back').setEnabled(false);


}




}




function setWaterpipe()
{

if (document.getElementById("waterpipe").checked == false)
{
window.appState['waterpipe']=false;
document.getElementById('waterpipeColorDiv').style.display='none';
}

 if (document.getElementById("waterpipe").checked == true)
{
window.appState['waterpipe']=true;
document.getElementById('waterpipeColorDiv').style.display='block';
}

buildRound();


}


function waterpipeColorSelect(id)
{

for (let i=1; i<=2;i++)
{
document.getElementById('waterpipeColor'+i).classList.remove('optionColorActive');
document.getElementById('waterpipeColor'+i).classList.add('optionColorInactive');

document.getElementById('waterpipeColorCheckbox'+i).classList.remove('optionColorCheckboxActive');
document.getElementById('waterpipeColorCheckbox'+i).classList.add('optionColorCheckboxInative');
}



document.getElementById('waterpipeColor'+id).classList.add('optionColorActive');
document.getElementById('waterpipeColor'+id).classList.remove('optionColorInactive');

document.getElementById('waterpipeColorCheckbox'+id).classList.add('optionColorCheckboxActive');
document.getElementById('waterpipeColorCheckbox'+id).classList.remove('optionColorCheckboxInative');






if (id == 1)
{
//window.scene.getMaterialByName('pipeMaterial').albedoColor = new BABYLON.Color3(0.5,0.5,0.4);
//window.scene.getMaterialByName('pipeMaterial').metallic=0.7;
//window.scene.getMaterialByName('pipeMaterial').roughness=0.15;

window.scene.getMeshByName('end_left').material = window.scene.getMaterialByName('pipeMaterial');
window.scene.getMeshByName('end_right').material = window.scene.getMaterialByName('pipeMaterial');
window.scene.getMeshByName('holder_small').material = window.scene.getMaterialByName('pipeMaterial');
window.scene.getMeshByName('keeper').material = window.scene.getMaterialByName('pipeMaterial');
window.scene.getMeshByName('pipe_horisontal').material = window.scene.getMaterialByName('pipeMaterialHorisontal');
window.scene.getMeshByName('pipe_vertical').material = window.scene.getMaterialByName('pipeMaterial');
window.scene.getMeshByName('holder_big').material = window.scene.getMaterialByName('pipeMaterial');
window.scene.getMeshByName('holder_big_1').material = window.scene.getMaterialByName('pipeMaterial');

window.scene.getMeshByName('pipe_vertical_back').material = window.scene.getMaterialByName('pipeMaterial');
window.scene.getMeshByName('keeper_back').material = window.scene.getMaterialByName('pipeMaterial');
window.scene.getMeshByName('end_left_back').material = window.scene.getMaterialByName('pipeMaterial');
window.scene.getMeshByName('end_right_back').material = window.scene.getMaterialByName('pipeMaterial');
window.scene.getMeshByName('holder_small_back').material = window.scene.getMaterialByName('pipeMaterial');
window.scene.getMeshByName('pipe_horisontal_back').material = window.scene.getMaterialByName('pipeMaterialHorisontal');
window.scene.getMeshByName('holder_big_back').material = window.scene.getMaterialByName('pipeMaterial');
window.scene.getMeshByName('holder_big_1_back').material = window.scene.getMaterialByName('pipeMaterial');



}

if (id == 2)
{

//window.scene.getMaterialByName('pipeMaterial').albedoColor = new BABYLON.Color3(0.0,0.0,0.0)
//window.scene.getMaterialByName('pipeMaterial').metallic=0.3;
//window.scene.getMaterialByName('pipeMaterial').roughness=0.5;

window.scene.getMeshByName('end_left').material = window.scene.getMaterialByName('pipePlastic');
window.scene.getMeshByName('end_right').material = window.scene.getMaterialByName('pipePlastic');
window.scene.getMeshByName('holder_small').material = window.scene.getMaterialByName('pipePlastic');
window.scene.getMeshByName('keeper').material = window.scene.getMaterialByName('pipePlastic');
window.scene.getMeshByName('pipe_horisontal').material = window.scene.getMaterialByName('pipePlastic');
window.scene.getMeshByName('pipe_vertical').material = window.scene.getMaterialByName('pipePlastic');
window.scene.getMeshByName('holder_big').material = window.scene.getMaterialByName('pipePlastic');
window.scene.getMeshByName('holder_big_1').material = window.scene.getMaterialByName('pipePlastic');

window.scene.getMeshByName('pipe_vertical_back').material = window.scene.getMaterialByName('pipePlastic');
window.scene.getMeshByName('keeper_back').material = window.scene.getMaterialByName('pipePlastic');
window.scene.getMeshByName('end_left_back').material = window.scene.getMaterialByName('pipePlastic');
window.scene.getMeshByName('end_right_back').material = window.scene.getMaterialByName('pipePlastic');
window.scene.getMeshByName('holder_small_back').material = window.scene.getMaterialByName('pipePlastic');
window.scene.getMeshByName('pipe_horisontal_back').material = window.scene.getMaterialByName('pipePlastic');
window.scene.getMeshByName('holder_big_back').material = window.scene.getMaterialByName('pipePlastic');
window.scene.getMeshByName('holder_big_1_back').material = window.scene.getMaterialByName('pipePlastic');


}



}
function roundToCent(value)
{
return (Math.round(value*100))/100;
}

function calculate()
{
let totalSection = window.appState['sectionsNumber'];
let sectionWidth = Math.floor(window.appState['sectionWidth']);
let sectionWidthLR = window.appState['deepth'];

let house1width = window.appState['house1width'];
let house2width = window.appState['house2width'];


let item_vertical_beam=0;
let item_house1_vertical_beam=0;
let item_house2_vertical_beam=0;


let item_side_vertical_beam = 2;
let item_side_vertical_beam_size = window.appState['deepth'];

let item_roofbeams_m = window.appState['deepth'];
let item_roofbeams = window.appState['width']/500 + window.appState['deepth']/500 +2;
if (window.appState['rooftype']==1) item_roofbeams = window.appState['width']/500 + 1;




let item_frame = 0;
if (window.appState['rooftype']==1)
{
  item_frame = totalSection;
  if (window.appState['house1on'] == true) item_frame + 3;
  if (window.appState['house2on'] == true) item_frame + 3;
}

if (window.appState['rooftype']==0)
{
  if (window.appState['house1on'] == true) item_frame + 4;
  if (window.appState['house2on'] == true) item_frame + 4;
}


//item_side_vertical_beam = totalSection * 2;

if (window.appState['house1on'] == true) item_side_vertical_beam ++;
if (window.appState['house2on'] == true) item_side_vertical_beam ++;
if (window.appState['rooftype']==0 && window.appState['deepth']>=4500)
{
item_side_vertical_beam = item_side_vertical_beam * 2;
item_side_vertical_beam_size = item_side_vertical_beam_size / 2;
}
if (window.appState['rooftype']==1) item_side_vertical_beam_size = item_side_vertical_beam_size - 1000;





if (window.appState['rooftype']==0 && window.appState['deepth']>=4500)
{
  totalSection + 1;
  sectionWidthLR = sectionWidthLR/2;

}

if (window.appState['rooftype']==0 && window.appState['deepth']>=4500)
{
sectionWidthLR = sectionWidthLR - 1000;
}

let item_inner_beam = totalSection;

//new

let item_total_bo = 0;
let totalSideBeam;


let totalhorisontalBeam = 0;

if (window.appState['rooftype'] == 0) totalhorisontalBeam = totalSection * 2;
if (window.appState['rooftype'] == 1) totalhorisontalBeam = totalSection * 3;
//adding sides
totalhorisontalBeam = totalhorisontalBeam + 2;
if(window.appState['rooftype']==0 && window.appState['deepth']>=4500) totalhorisontalBeam = totalhorisontalBeam + 2;
//if(window.appState['rooftype']==0 && window.appState['deepth']>=4500) totalhorisontalBeam = totalhorisontalBeam + 2;


//if (window.appState['rooftype']==1) totalhorisontalBeam = totalSection * 3;


if (window.appState['rooftype']==0) item_vertical_beam = (totalSection + 1) * 2;
if (window.appState['rooftype']==1) item_vertical_beam = (totalSection + 1) * 3;
if (window.appState['rooftype']==0 && window.appState['deepth']>=4500) item_vertical_beam = item_vertical_beam + 2;




// fix main bulk
if (window.appState['rooftype']==0)  item_total_bo = totalhorisontalBeam;


















//

document.getElementById('item_canopy_l').style.display = 'none';
document.getElementById('item_canopy_r').style.display = 'none';
document.getElementById('item_balks').style.display = 'block';


if (sectionWidth == 0) document.getElementById('item_balks').style.display = 'none';



if (window.appState['house1on'] == true)
{
document.getElementById('item_canopy_l').style.display = 'block';
document.getElementById('item_horisontal_beam_l_m').innerHTML = house1width + ' mm';
document.getElementById('item_horisontal_beam_l').innerHTML = 2;
item_inner_beam = item_inner_beam - 1;
//totalSideBeam = totalSideBeam + 1;
totalhorisontalBeam = totalhorisontalBeam + 1;
if (window.appState['rooftype']==0 && window.appState['deepth']>=4500) totalhorisontalBeam = totalhorisontalBeam + 1;
if (window.appState['rooftype']==0 && window.appState['deepth']>=4500) totalSideBeam = totalSideBeam + 1;
if (window.appState['rooftype']==0 && window.appState['deepth']>=4500) item_vertical_beam = item_vertical_beam + 1;


//if (window.appState['rooftype']==1) totalhorisontalBeam = totalhorisontalBeam + 1;
}




if (window.appState['house2on'] == true)
{
document.getElementById('item_canopy_r').style.display = 'block';
document.getElementById('item_horisontal_beam_r_m').innerHTML = house1width + ' mm';
document.getElementById('item_horisontal_beam_r').innerHTML = 2;
item_inner_beam = item_inner_beam - 1;
//totalSideBeam = totalSideBeam + 1;
totalhorisontalBeam = totalhorisontalBeam + 1;
if (window.appState['rooftype']==0 && window.appState['deepth']>=4500) totalhorisontalBeam = totalhorisontalBeam + 1;
if (window.appState['rooftype']==0 && window.appState['deepth']>=4500) totalSideBeam = totalSideBeam + 1;
if (window.appState['rooftype']==0 && window.appState['deepth']>=4500) item_vertical_beam = item_vertical_beam + 1;



//if (window.appState['rooftype']==1) totalhorisontalBeam = totalhorisontalBeam + 1;
}

//if (window.appState['rooftype']==0 && window.appState['deepth']>=4500) totalSideBeam = totalSideBeam * 2; //adding left and right

//fix fundament
let item_vertical_beam_fundament = item_vertical_beam;

let item_window = 0;
let item_door_left = 0;
let item_door_right = 0;
let item_door_double = 0;

let item_rails = 0;

//CALCULATE HOUSES
for(let i=1; i<=4; i++)
{
  for(let ii=1; ii<=2; ii++)
  {
if(window.scene.getMeshByName('house_' + ii + '_window_' + i).isEnabled() == true) item_window++;
if(window.scene.getMeshByName('house_' + ii + '_door_single_left_' + i).isEnabled() == true) item_door_left++;
if(window.scene.getMeshByName('house_' + ii + '_door_single_right_' + i).isEnabled() == true) item_door_right++;
if(window.scene.getMeshByName('house_' + ii + '_door_double_' + i).isEnabled() == true) item_door_double++;
  }
}

//CALC SECTIONS
let secBalks = 0;
let item_shutter = 0;
let item_window1m = 0;
let item_window2m = 0;
let item_door2m = 0;
let item_door3m = 0;
let item_door4m = 0;

let totalWall = 0;

if (window.appState['rooftype']==1) totalWall = totalSection + 2;
if (window.appState['wallInside'] == true ) totalWall = totalWall * 2;


if (window.appState['house1on'] == true)
{
totalWall = totalWall +4;
if (window.appState['rooftype']==1) totalWall = totalWall - 1; // deleting back
if (window.appState['rooftype']==1) totalWall = totalWall + 1; // add triangle
if (window.appState['rooftype']==0 && window.appState['deepth']>=4500) totalWall = totalWall + 2; //adding left and right

if (window.appState['wallInside'] == true )
{
  totalWall = totalWall +4;
  if (window.appState['rooftype']==1) totalWall = totalWall - 1; // deleting back
  if (window.appState['rooftype']==1) totalWall = totalWall + 1; // add triangle
  if (window.appState['rooftype']==0 && window.appState['deepth']>=4500) totalWall = totalWall + 2; //adding left and right

}

}

if (window.appState['house2on'] == true)
{
totalWall = totalWall + 4;
if (window.appState['rooftype']==1) totalWall = totalWall - 1;
if (window.appState['rooftype']==1) totalWall = totalWall + 1; // add triangle

if (window.appState['rooftype']==0 && window.appState['deepth']>=4500) totalWall = totalWall + 2;

if (window.appState['wallInside'] == true )
{
  totalWall = totalWall +4;
  if (window.appState['rooftype']==1) totalWall = totalWall - 1; // deleting back
  if (window.appState['rooftype']==1) totalWall = totalWall + 1; // add triangle


  if (window.appState['rooftype']==0 && window.appState['deepth']>=4500) totalWall = totalWall + 2; //adding left and right

}

}


let item_glass_element = 0;

for(let i=0;i<=17;i++)
{
if(window.scene.getMeshByName('sec_' + i + '_wall').isEnabled() == true) totalWall ++;

for(let ii=0;ii<=2;ii++)
{




if(window.scene.getMeshByName('sec_' + i + '_balk_'+ ii).isEnabled() == true) item_vertical_beam++;

if(window.scene.getMeshByName('sec_' + i + '_zhaluzi_'+ ii).isEnabled() == true) item_shutter++;
if(window.scene.getMeshByName('sec_' + i + '_window_1_'+ ii).isEnabled() == true) {item_window1m++; }
if(window.scene.getMeshByName('sec_' + i + '_window_2_'+ ii).isEnabled() == true) {item_window2m++; }

if(window.scene.getMeshByName('sec_' + i + '_door2m_'+ ii).isEnabled() == true) { item_door2m++; item_rails++; item_glass_element = item_glass_element +2;}
if(window.scene.getMeshByName('sec_' + i + '_door3m_'+ ii).isEnabled() == true) { item_door3m++; item_rails++; item_glass_element = item_glass_element +3;}
if(window.scene.getMeshByName('sec_' + i + '_door4m_'+ ii).isEnabled() == true) { item_door4m++; item_rails++; item_glass_element = item_glass_element +4;}


}
if(window.scene.getMeshByName('sec_' + i + '_balk_3').isEnabled() == true) item_vertical_beam++;

}

let sideSize = 0;
//liggers perimm
let liggersPerimm = 0;
let ligerQuantiW =  window.appState['width'] / 500 +1;
if (window.appState['rooftype']==0)
{

  let width =  (window.appState['width']  + window.appState['overhangLeft']  + window.appState['overhangRight']) / 1000;
  let deepth = (window.appState['deepth'] + window.appState['overhangFront'] + window.appState['overhangBack']) / 1000;
  let widthNoOverhang =  (window.appState['width']) / 1000;
  let deepthNoOverhang = (window.appState['deepth']) / 1000;



//liggersPerimm = width * 2 + deepth * 2 + (ligerQuantiW  * deepth) ;
liggersPerimm = widthNoOverhang * 2 + (ligerQuantiW  * deepth) +  (window.appState['overhangLeft'] / 1000 * 6) + (window.appState['overhangRight'] / 1000 * 6);
}

if (window.appState['rooftype']==1)
{
let width =  (window.appState['width']  + 200) / 1000;
let innerDeepth = window.appState['deepth'] /1000 - 1;




if(window.appState['deepth']==3000) sideSize = 1.155 + 2.309;
if(window.appState['deepth']==3500) sideSize = 1.443 + 2.598;
if(window.appState['deepth']==4000) sideSize = 1.732 + 2.887;
if(window.appState['deepth']==4500) sideSize = 2.021 + 3.175;
if(window.appState['deepth']==5000) sideSize = 2.309 + 3.464;

//perim + inner
// old
//liggersPerimm =  (sideSize * 2 + width * 2 + (ligerQuantiW * (innerDeepth));
liggersPerimm =  width * 3 + (ligerQuantiW * sideSize) + (ligerQuantiW * innerDeepth);
}

//console.log("liggersPerimm: " + roundToCent(liggersPerimm));
document.getElementById('liggersmm').innerHTML =  roundToCent(liggersPerimm);


//BOEOI
let boidelMm = 0;

if (window.appState['rooftype']==1)
{
  if(window.appState['deepth']==3000) boidelMm = 1.155 + 2.309;
  if(window.appState['deepth']==3500) boidelMm = 1.443 + 2.598;
  if(window.appState['deepth']==4000) boidelMm = 1.732 + 2.887;
  if(window.appState['deepth']==4500) boidelMm = 2.021 + 3.175;
  if(window.appState['deepth']==5000) boidelMm = 2.309 + 3.464;
  boidelMm = boidelMm * 2;
}

if (window.appState['rooftype']==0)
{
boidelMm = boidelMm + (window.appState['width'] + window.appState['overhangLeft']  + window.appState['overhangRight']) / 1000;
boidelMm = boidelMm + (window.appState['width'] + window.appState['overhangLeft']  + window.appState['overhangRight']) / 1000;
boidelMm = boidelMm + (window.appState['deepth'] + window.appState['overhangFront'] + window.appState['overhangBack']) / 1000 ;
boidelMm = boidelMm + (window.appState['deepth'] + window.appState['overhangFront'] + window.appState['overhangBack']) / 1000;
}


//console.log('boi: ' + boidelMm);


//ALUMIIM TRIM

let alumTrimMmNew = 0;
if (window.appState['rooftype']==0)
{
alumTrimMmNew = boidelMm;
}


if (window.appState['rooftype']==1)
{
alumTrimMmNew = "--";
document.getElementById('item_alum_mm').innerHTML =  alumTrimMmNew;
document.getElementById('boimm').innerHTML =  roundToCent(boidelMm * 2);
}

if (window.appState['rooftype']==0)
{
document.getElementById('item_alum_mm').innerHTML =  roundToCent(alumTrimMmNew);
document.getElementById('boimm').innerHTML =  roundToCent(boidelMm * 2);
}


//RABAT


///// NEW FRAME
let totalWallNew = 0;
if (window.appState['rooftype']==1) totalWallNew = totalSection + 2;
if (window.appState['house1on'] == true)
{
totalWallNew = totalWallNew +4;
if (window.appState['rooftype']==1) totalWallNew = totalWallNew - 1; // deleting back
if (window.appState['rooftype']==1) totalWallNew = totalWallNew + 1; // add triangle
if (window.appState['rooftype']==0 && window.appState['deepth']>=4500) totalWallNew = totalWallNew + 1; //adding left and right
}

if (window.appState['house2on'] == true)
{
totalWallNew = totalWallNew + 4;
if (window.appState['rooftype']==1) totalWallNew = totalWallNew - 1;
if (window.appState['rooftype']==1) totalWallNew = totalWallNew + 1; // add triangle
if (window.appState['rooftype']==0 && window.appState['deepth']>=4500) totalWallNew = totalWallNew + 1;
}


//frame
let frameMm = 0;

if (window.appState['rooftype']==1)
{
frameMm = frameMm + (window.appState['width']/1000) - 0.3 - (window.appState['sectionsNumber'] - 1) * 0.15; //длинна зад
frameMm = frameMm + 1 - 0.15 - 0.075; //left triangle
frameMm = frameMm + 1 - 0.15 - 0.075; //right triangle
}

if (window.appState['rooftype']==0)
{
}

//console.log('frameMm: ' + frameMm);


if (window.appState['house1on'] == true)
{
if (window.appState['rooftype']==1)
{
frameMm = frameMm + (window.appState['deepth']/1000 - 1 - 0.15 - 0.075);
frameMm = frameMm + (window.appState['deepth']/1000 - 0.3 - 0.075);
//frameMm = frameMm + (window.appState['house1width']/1000 - 0.15 - 075);
frameMm = frameMm + (window.appState['house1width']/1000 - 0.15 - 0.075);
}


if (window.appState['rooftype']==0)
{
frameMm = frameMm + (window.appState['deepth']/1000 - 0.3);
frameMm = frameMm + (window.appState['deepth']/1000 - 0.3);

if(window.appState['deepth']>=4500) frameMm = frameMm - 0.15; // ninus one bulk


frameMm = frameMm + (window.appState['house1width']/1000 - 0.15 - 0.075);
frameMm = frameMm + (window.appState['house1width']/1000 - 0.15 - 0.075);
}

}

//console.log('frameMm: ' + frameMm);


if (window.appState['house2on'] == true)
{
if (window.appState['rooftype']==1)
{
frameMm = frameMm + (window.appState['deepth']/1000 - 1 - 0.15 - 0.075);
frameMm = frameMm + (window.appState['deepth']/1000 - 0.3 - 0.075);
//frameMm = frameMm + (window.appState['house2width']/1000 - 0.15 - 075);
frameMm = frameMm + (window.appState['house2width']/1000 - 0.15 - 0.075);
}

if (window.appState['rooftype']==0)
{
  frameMm = frameMm + (window.appState['deepth']/1000) - 0.3;
  frameMm = frameMm + (window.appState['deepth']/1000) - 0.3;

if(window.appState['deepth']>=4500) frameMm = frameMm - 0.15; // ninus one bulk

  frameMm = frameMm + (window.appState['house2width']/1000 - 0.15 - 0.075);
  frameMm = frameMm + (window.appState['house2width']/1000 - 0.15 - 0.075);
}

}

//console.log('frameMm: ' + frameMm);




//console.log('frameMm: ' + frameMm);

let sectionFrameM = 0;
let sectionFrameInnerM = 0;
let sectionFrameQ = 0;
let sectionFrameQbulks = totalWallNew;

for(let i=0;i<=17;i++)
{
if(window.scene.getMeshByName('sec_' + i + '_wall').isEnabled() == true)
{
sectionFrameM = sectionFrameM +  window.scene.getMeshByName('sec_' + i + '_frame').scaling.x * 2.775;
if (window.appSection[i].inner==true) sectionFrameInnerM = sectionFrameInnerM +  window.scene.getMeshByName('sec_' + i + '_frame').scaling.x * 2.775;
totalWallNew++;
if (window.scene.getMeshByName('sec_' + i + '_frame').scaling.x * 2.775 > 1) sectionFrameQbulks ++;

}
}

//console.log('frameMm: ' + frameMm);
//add vert
let rabbat = (frameMm + sectionFrameM ) * 12 ;




//ad angles and vert
frameMm = frameMm + sectionFrameM + (totalWallNew * (2.2 *4 )) + ((sectionFrameQbulks) * (0.70 * 4));
//console.log('frameMm: ' + frameMm);




//frameMm = frameMm + sectionFrameM;

rabbat = (Math.round(rabbat*100))/100;
frameMm = (Math.round(frameMm*100))/100;

let rabbatBlack = 0;
let rabbatWhite = 0;

if (window.appState['color1'] == 0) rabbatBlack = rabbat;
if (window.appState['color1'] == 1) rabbatWhite = rabbat;


if (window.appState['wallInside'] == true )
{
//  rabbat = rabbat * 2;
  if (window.appState['color2'] == 0) rabbatBlack = rabbatBlack + rabbat;
  if (window.appState['color2'] == 1) rabbatWhite = rabbatWhite + rabbat;
}


document.getElementById('itemframe_mm').innerHTML =  frameMm;
document.getElementById('rabat_mm').innerHTML =  rabbatBlack;
document.getElementById('rabat_mm2').innerHTML =  rabbatWhite;

//console.log('frameMm: ' + frameMm);







//getElements
document.getElementById('rabat').innerHTML =  roundToCent(totalWall * 12);
document.getElementById('item_ringbalk').innerHTML =  roundToCent(totalhorisontalBeam);
document.getElementById('item_total_bo').innerHTML =  roundToCent(item_total_bo);
document.getElementById('item_alum_total').innerHTML =  roundToCent(item_total_bo);



document.getElementById('item_window').innerHTML = item_window;
document.getElementById('item_door_left').innerHTML = item_door_left;
document.getElementById('item_door_right').innerHTML = item_door_right;
document.getElementById('item_door_double').innerHTML = item_door_double;

document.getElementById('item_horisontal_beam_m').innerHTML = sectionWidth + ' mm';
document.getElementById('item_horisontal_beam').innerHTML = item_inner_beam * 2;

document.getElementById('item_horisontal_beam_m').innerHTML = sectionWidth + ' mm';
document.getElementById('item_horisontal_beam').innerHTML = item_inner_beam * 2;

document.getElementById('item_horisontal_beam_side_m').innerHTML = item_side_vertical_beam_size + ' mm';
document.getElementById('item_horisontal_beam_side').innerHTML = item_side_vertical_beam;

//document.getElementById('item_roofbeams_m').innerHTML = item_roofbeams_m + ' x 50 x 150 mm';
document.getElementById('item_roofbeams_m').innerHTML = '5 x 15 cm';
document.getElementById('item_roofbeams').innerHTML = item_roofbeams;

//document.getElementById('item_frame').innerHTML = item_frame;
document.getElementById('item_frame').innerHTML = totalWall;







document.getElementById('item_shutter').innerHTML = item_shutter;
document.getElementById('item_window1m').innerHTML = item_window1m;
document.getElementById('item_window2m').innerHTML = item_window2m;
document.getElementById('item_door2m').innerHTML = item_door2m;
document.getElementById('item_door3m').innerHTML = item_door3m;
document.getElementById('item_door4m').innerHTML = item_door4m;

document.getElementById('item_glass_element').innerHTML = item_glass_element;



document.getElementById('item_vertical_beam').innerHTML = item_vertical_beam;
//document.getElementById('item_vertical_beam_fundament').innerHTML = item_vertical_beam_fundament;
document.getElementById('item_vertical_beam_fundament').innerHTML = item_vertical_beam;

document.getElementById('item_rails_1').innerHTML = item_rails;
document.getElementById('item_rails_2').innerHTML = item_rails;

if (window.appState['rooftype']==1)
{
document.getElementById('squarem').innerHTML = roundToCent((window.appState['width']/1000 + 0.4 ) * sideSize);
document.getElementById('squarem_ii').innerHTML = roundToCent((window.appState['width']/1000 + 0.4 ) * sideSize);
//document.getElementById('perimm').innerHTML = Math.round((((window.appState['deepth']/1000 * 2) + (window.appState['width']/1000 * 2 ))*100)/100);
document.getElementById('perimm').innerHTML = "--";


document.getElementById('item_alum1M').innerHTML = '--';
document.getElementById('item_alum2M').innerHTML = '--';
document.getElementById('item_alum1').innerHTML = '0';
document.getElementById('item_alum2').innerHTML = '0';

document.getElementById('item_borders1M').innerHTML = '--';
document.getElementById('item_borders2M').innerHTML = '--';
document.getElementById('item_borders1').innerHTML = '0';
document.getElementById('item_borders2').innerHTML = '0';

}

if (window.appState['rooftype']==0)
{

let width =  window.appState['width']  + window.appState['overhangLeft']  + window.appState['overhangRight'];
let deepth = window.appState['deepth'] + window.appState['overhangFront'] + window.appState['overhangBack'];
//console.log (width);
//console.log ( window.appState['width']  + window.appState['overhangLeft']  + window.appState['overhangRight']);

document.getElementById('squarem').innerHTML = (Math.round(((width/1000) * (deepth/1000))*100)/100)   ;
document.getElementById('squarem_ii').innerHTML = (Math.round(((width/1000) * (deepth/1000))*100)/100)   ;


document.getElementById('perimm').innerHTML = (Math.round(((width/1000 * 2) + (deepth/1000 * 2))*100)/100)   ;



document.getElementById('item_alum1M').innerHTML = width + ' x 75 x 75 mm';
document.getElementById('item_alum2M').innerHTML = deepth + ' x 75 x 75 mm';
document.getElementById('item_alum1').innerHTML = '2';
document.getElementById('item_alum2').innerHTML = '2';

document.getElementById('item_borders1M').innerHTML = width  + ' x 75 x 75 mm';
document.getElementById('item_borders2M').innerHTML = deepth + ' x 180 x 12 mm';
document.getElementById('item_borders1').innerHTML = '4';
document.getElementById('item_borders2').innerHTML = '4';

}







}
