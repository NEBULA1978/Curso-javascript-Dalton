const obtenerInformacion = (materia)=>{
	materias = {
		fisica: ["Perez","pedro","pepito","cofla","maria"],
		programacion: ["Dalto","pedro","juan","pepito"],
		logica: ["Hernandez","pedro","juan","pepito","cofla","maria"],
		quimica: ["Rodriguez","pedro","juan","pepito","cofla","maria"]
	}
	//en caso de que la materia no este definida 
	if (materias[materia] !== undefined){
		return [materias[materia],materia];
	} else {
		//mostramos 
		return false;
	}
}

let informacion = obtenerInformacion("fisica");
let programacion = obtenerInformacion("programacion");
let logica = obtenerInformacion("logica");
let quimica = obtenerInformacion("quimica");


if (informacion !== false) {
	let profesor = obtenerInformacion("fisica")[0][0];
	alumnos = obtenerInformacion("fisica")[0];
	alumnos.shift();
	document.write(`El profesor de <b>${informacion[1]}</b> es: <b style="color:red">${profesor}</b><br>
		Los alumnos son: <b style="color:blue">${alumnos}</b><br><br>
		`);
}

if (programacion !== false) {
	let profesor = obtenerInformacion("programacion")[0][0];
	alumnos = obtenerInformacion("programacion")[0];
	alumnos.shift();
	document.write(`El profesor de <b>${programacion[1]}</b> es: <b style="color:red">${profesor}</b><br>
		Los alumnos son: <b style="color:blue">${alumnos}</b><br><br>
		`);
}

if (logica !== false) {
	let profesor = obtenerInformacion("logica")[0][0];
	alumnos = obtenerInformacion("logica")[0];
	alumnos.shift();
	document.write(`El profesor de <b>${logica[1]}</b> es: <b style="color:red">${profesor}</b><br>
		Los alumnos son: <b style="color:blue">${alumnos}</b><br><br>
		`);
}

if (quimica !== false) {
	let profesor = obtenerInformacion("quimica")[0][0];
	alumnos = obtenerInformacion("quimica")[0];
	alumnos.shift();
	document.write(`El profesor de <b>${quimica[1]}</b> es: <b style="color:red">${profesor}</b><br>
		Los alumnos son: <b style="color:blue">${alumnos}</b><br><br>
		`);
}