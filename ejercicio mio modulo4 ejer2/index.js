
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

if (informacion !== false) {
	
	document.write(`Alumnos presentes en <b>${informacion[1]}</b> es: <b style="color:red">${informacion[0]}</b><br>
		
		`);
}