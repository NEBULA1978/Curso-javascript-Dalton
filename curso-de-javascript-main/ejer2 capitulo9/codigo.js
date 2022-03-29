let alumnos = [
  {
    nombre: "Ramon Pascual",
    email: "rpascualet@mail.com",
    materia: "Javascript1",
  },
  {
    nombre: "Ramon2 Pascual",
    email: "rpascuddalet@mail.com",
    materia: "Javascript2",
  },
  {
    nombre: "Ram2sdon Pascual",
    email: "rpassdfdsfcualet@mail.com",
    materia: "Javascript3",
  },
  {
    nombre: "Ramasdasdon Pascual",
    email: "rpascgghhfgualet@mail.com",
    materia: "Javascript4",
  },
  {
    nombre: "Ramgfhfgon Pascual",
    email: "rpasfgfghfghcualet@mail.com",
    materia: "Javascript5",
  },
];

const boton = document.querySelector(".boton-confirmar");
const contenedor = document.querySelector(".grid-container");

//una manera con array
// for (alumno in alumnos){
//     for(datos in alumnos[alumno]){
//         console.log(alumnos[alumno][datos])
//     }
// }


for (alumno in alumnos) {
  let datos = alumnos[alumno];
  let nombre = datos["nombre"];
  let email = datos["email"];
  let materia = datos["materia"];

  let htmlCode = `
        <div class="grid-item nombre">${nombre}</div>
      <div class="grid-item email">${email}</div>
      <div class="grid-item materia">${materia}</div>
      <div class="grid-item semana">
        <select class="semana-elegida">
          <option value="Semana 1">Semana 1</option>
          <option value="Semana 2">Semana 2</option>
        </select>
      </div>`;
  contenedor.innerHTML += htmlCode;
}

//cuando pulsamos al boton

boton.addEventListener("click", () => {
    let confirmar = confirm("¿realmente quieres confirmar las mesas?");
    if(confirmar){
        document.body.removeChild(boton)
        let elementos = document.querySelectorAll(".semana");
        let semanasElegidas = document.querySelectorAll(".semana-elegida");
        for (elemento in elementos) {
          semana = elementos[elemento];
          semana.innerHTML = semanasElegidas[elemento].value;
        }

    }
});
