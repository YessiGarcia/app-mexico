var espacioImagen = document.getElementById("modal");
var imgMostrar = document.getElementById("imagenNueva");
var imagenes = document.getElementsByClassName("imgMx");
var span = document.getElementById("close");
var spans = document.getElementsByClassName("textoModal");
var texto = document.getElementById("textoNuevo");
var texto2= document.getElementsByClassName("texto")[0];

span.addEventListener("click",cerrar);

for (var i = 0; i < spans.length; i++) {
  var listaTexto = spans[i].addEventListener("click",mostrar)
}

for(var i=0;i<imagenes.length;i++){
  var listaImagenes = imagenes[i].addEventListener("click",mostrar);
}

function mostrar(){
  espacioImagen.style.display="block";
  imgMostrar.src=this.name;
  texto2.innerHTML=this.alt;
};
function cerrar(){
  espacioImagen.style.display="none";
};
