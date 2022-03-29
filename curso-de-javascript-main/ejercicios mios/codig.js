let alto = window.screen.availHeight;
let ancho = window.screen.availWidth;
//lo mismo que arriba hace
// let alto = window.screen.height;
// let ancho = window.screen.width;

comprar = confirm(`El alto es: ${alto}, el ancho es: ${ancho} ¿ Deseas Comprar ?`)

//preguntar compra

if(comprar){
    alert("compra realizada exitosamente")
}else{
    alert("compra cancelada")
    
}