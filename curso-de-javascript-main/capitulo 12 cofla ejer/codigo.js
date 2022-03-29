/* supuestamente esta informacion esta en un servidor no aca yeaaa*/
const materiasHTML = document.querySelector(".materias");

const materias = [
  {
    nombre: "Fisica 4",
    nota: 7,
  },
  {
    nombre: "Calculo 3",
    nota: 8,
  },
  {
    nombre: "Bases de datos 3",
    nota: 9,
  },
  {
    nombre: "Matematicas discretas 2",
    nota: 7,
  },
  {
    nombre: "Programacion 4",
    nota: 8,
  },
];

const obtenerMateria = (id) => {
  return new Promise((resolve, reject) => {
    materia = materias[id];
    if (materia == undefined) reject("La materia no existe");
    else
      setTimeout(() => {
        resolve(materia);
      },Math.random()*1400);
  });
};
//funciones asincronas mas modernas

const devolverMaterias = async () => {
  let materia = [];
  for (let i = 0; i < materias.length; i++) {
    materia[i] = await obtenerMateria(i);
    //materia[i].then(mat => console.log(mat)) da error
    //console.log(materia[i]) asi va bien
    //ingresamos tabla
    let newHTMLCode = `
             <div class="materia">
            <div class="nombre">${materia[i].nombre}</div>
            <div class="nota">${materia[i].nota}</div>
         </div>
        `;
        materiasHTML.innerHTML += newHTMLCode;
  }
};

devolverMaterias();

//fuciones sincronas
// ontenerMateria(1).then(res => console.log(res))
// ontenerMateria(2).then(res => console.log(res))
// ontenerMateria(3).then(res => console.log(res))
// ontenerMateria(4).then(res => console.log(res))
