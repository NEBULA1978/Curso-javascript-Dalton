let peticion;

if (window.XMLHttpRequest) peticion = new XMLHttpRequest();
else peticion = new ActiveXObject("Microsoft.XMLHTTP");

peticion.addEventListener("load", () => {
  //creamos variable respuesta e inicializamos abajo
  let respuesta;
  if (peticion.status == 200 || peticion.status == 201) respuesta = peticion.response;
  else respuesta = "Lo siento no se ha encontrado el recurso";
  console.log(JSON.parse(respuesta));
});

peticion.open("POST","https://reqres.in/api/users");

peticion.setRequestHeader("Content-type","application/json;charset=UTF8")

peticion.send(
  JSON.stringify({
    nombre: "Ramon",
    trabajo: "campotube",
  })
);

//asi hacemos objeto con parse cuando viene del servidor
//tengo JSON deserializado
// console.log(JSON.parse(respuesta));
//tengo JSON para serializado
//   console.log(JSON.stringify(respuesta));

// console.log(peticion.readyState);
