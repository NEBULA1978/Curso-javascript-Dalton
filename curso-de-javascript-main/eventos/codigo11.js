//al pulsar haceaccion boton y luego no funciona
const button = document.querySelector(".button");
const contenedor1 = document.querySelector(".contenedor-1");
const contenedor2 = document.querySelector(".contenedor-2");


// button.addEventListener("dblclick",(e)=>{
//     alert(" di click en un boton")
//     // e.stopPropagation()//para que no sigan mas eventos
// });


 contenedor2.addEventListener("mouseover",(e)=>{     
    alert("di click en el contenedor azul")
 });

// contenedor1.addEventListener("click",(e)=>{
//     alert("di click en el contenedor rojo")
// },true);//en el que pongo true se ejecuta primero

// });

