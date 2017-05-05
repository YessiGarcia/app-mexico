var espacioImagen = document.getElementById("modal");
var imgMostrar = document.getElementById("imagenNueva");
var imagenes = document.getElementsByClassName("imgWork");
var span = document.getElementById("close");

span.addEventListener("click",cerrar);

for(var i=0;i<imagenes.length;i++){
  var listaImagenes = imagenes[i].addEventListener("click",mostrar);
}

function mostrar(){
  espacioImagen.style.display="block";
  imgMostrar.src=this.src;
};
function cerrar(){
  espacioImagen.style.display="none";
};
