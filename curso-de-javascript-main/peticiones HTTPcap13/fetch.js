//tiene get por defecto
peticion = fetch("https://reqres.in/api/unknown/2");

peticion
    //.then(res=>(res.text())
    .then(res=>(res.json())//me devuelve json
    //.then(res=>console.log( typeof JSON.parse(res))))//asi es un objeto
    .then(res=>console.log(res)))//asi es un objeto

console.log(peticion)


//NO ME VAAAAAAA
// fetch("https://reqres.in/api/unknown/2");
//     .then(res=>(res.text())
//     .then(res=>console.log(res)))