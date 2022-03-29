//objeto para peticionar con get o post
const peticion = new XMLHttpRequest();

peticion.addEventListener("load", () => {
  //creamos variable respuesta e inicializamos abajo
  let respuesta;
  if (peticion.status == 200) {
    respuesta = peticion.response;
  } else respuesta = "Lo siento no se ha encontrado el recurso";

  //asi hacemos objeto con parse cuando viene del servidor
  //tengo JSON deserializado
  console.log(JSON.parse(respuesta));
  //tengo JSON para serializado
//   console.log(JSON.stringify(respuesta));

  // console.log(peticion.readyState);
});

peticion.open("GET", "informacion.txt");

peticion.send();

// console.log(peticion)
