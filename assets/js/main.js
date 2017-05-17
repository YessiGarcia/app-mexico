var espacioImagen = document.getElementById("modal");
var imgMostrar = document.getElementById("imagenNueva");
var imagenes = document.getElementsByClassName("imgMx");
var span = document.getElementById("close");
var spans = document.getElementsByTagName("span");
var texto = document.getElementById("textoNuevo");

span.addEventListener("click",cerrar);

for (var i = 0; i > spans.length; i++) {
  var listaTexto = span[i].addEventListener("click",mostrar)
}

for(var i=0;i<imagenes.length;i++){
  var listaImagenes = imagenes[i].addEventListener("click",mostrar);
}

function mostrar(){
  espacioImagen.style.display="block";
  texto.style.display="block";
  imgMostrar.src=this.name;
  spans.src=this.name;
};
function cerrar(){
  espacioImagen.style.display="none";
};
