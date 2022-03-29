"use strict"
//funcion flecha
// const saludar = ()=>{
//     document.write("Hola");
//     document.write(`<br>`);
//     document.write("¿Como estas?");

// }

// saludar();

// document.write(resultado);





//funcion normal
// const saludar2 = function(){return nombre = "pedro2"};
// resultado2 = saludar2();
// document.write(resultado2)



//FUNCION FLECHA le estoy diciendo que esta funcion me va a retornar esta expresion
// const saludar = ()=> nombre = "pedro";
// document.write(`<br>`);
// resultado = saludar();
// document.write(resultado)


//con este me da error si quito parentesis sino no
// const saludar = function (res) {return nombre = res};

//con use strict me da fallo ojo
// const saludar = res => nombre = res;
// resultado = saludar("Hola Ramon");


// document.write(resultado)

//template string buenoo va ien con use strict
// const objeto = {
//     nombre : "Ramon",
//     saludar : function(){document.write(`Hola ${this.nombre}`)}
// }

// objeto.saludar()

//no se puede usar como constructor
// const objeto = {
//   nombre: "Ramon",
//   saludar: function () {
//     document.write(`Hola ${this.nombre}`);
//   },
// };

// const objeto2 = {
//   nombre: "Ramon",
//   saludar:()=>{document.write(`Hola ${this.nombre}`)}
// };

// window.nombre ="Ramon2"
// objeto.saludar();
// document.write(`<br>`);
// objeto2.saludar();


//creando un constructor
// function constructorPersona(nombre,apellido){
//     this.nombre = nombre;
//     this.apellido = apellido;
// }

// const persona = new constructorPersona("Ramon","Pascual");

// document.write(`Hola ${persona.nombre} ${persona.apellido}`);


//this

this.nombre = "Ramon";

document.write(window.nombre);