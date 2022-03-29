//al pulsar haceaccion boton y luego no funciona
const button = document.querySelector(".button");

button.addEventListener("click",(e)=>{
    console.log(e.target)
});
