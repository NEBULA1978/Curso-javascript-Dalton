//solo 1 vez a los 2segundos
// setTimeout(()=>{
//     document.write("hola")
// },2000);

//cada 2 segundos
// setInterval(()=>{
//     document.write(" hola ")
// },2000);

//para parar ejecucion
// const intervalo = setInterval(()=>{
//      document.write(" hola ")
//  },2000);

// clearInterval(intervalo)

//ejecuta el tiempo el ultimo valor los segundos le diga y el 1º cada x segundos le diga ejeje
// si le pongo 7 segundos abajo y 2arriba haria 3veces hola y pararia 
 const intervalo = setInterval(()=>{
     document.write(" hola ")
 },2000);

 setTimeout(()=>{
     clearInterval(intervalo);
 },7000)