/**

let miFoto = document.getElementById("mifoto");


miFoto.onclick = function(){

    mifoto.src= "/img/14.jpg";
   

}

*/
var imagenes=new Array(
    'img/3.png',
    'img/66.png',
    'img/118.png',
    'img/124.png'
);

/**
* Funcion para cambiar la imagen
*/
function rotarImagenes()
{
    // obtenemos un numero aleatorio entre 0 y la cantidad de imagenes que hay
    var index=Math.floor((Math.random()*imagenes.length));

    // cambiamos la imagen
    document.getElementById("mifoto").src=imagenes[index];
}

/**
* Función que se ejecuta una vez cargada la página
*/
onload=function()
{
    // Cargamos una imagen aleatoria
    rotarImagenes();

    // Indicamos que cada 5 segundos cambie la imagen
    setInterval(rotarImagenes,4000);
}



