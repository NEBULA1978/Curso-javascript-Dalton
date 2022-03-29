//con . para seleccionar una clase

//asi no se hace actualmente
// const button = document.querySelector(".button");

// button.onclick = ()=>{
//     alert("hola")
// }

const button = document.querySelector(".button");

button.addEventListener("click",saludar);

 function saludar(){
     alert("hola")
 }
