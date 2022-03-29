//al pulsar haceaccion boton y luego no funciona
const button = document.querySelector(".button");

button.addEventListener("click",saludar);

 function saludar(){
    alert("hola");
    button.removeEventListener("click",saludar)
 }