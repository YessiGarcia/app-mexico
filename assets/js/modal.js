/*
 * Archivo principal de funcionalidad de JS
 */
var imagenesWork=document.getElementsByClassName("imgwork");
var overlays=document.getElementsByClassName("overlay-content");
var btncierre=document.getElementsByClassName('botonCierre');
for(var i = 0 ;i<imagenesWork.length;i++){
  imagenesWork[i].addEventListener("click",openOverlay);
}
for (var i = 0; i < btncierre.length; i++) {
  btncierre[i].addEventListener("click",closeOverlay)
}
function openOverlay(){
  var i=this.id
  document.getElementsByClassName("overlay")[i].style.width = "100%";
}
function closeOverlay(){
  var id= this.id;
  console.log(id);
  var id=id.split("-");
  console.log(id);
  var id=Number(id[1]);
  console.log(id);
  document.getElementsByClassName("overlay")[id].style.width = "0";
}
