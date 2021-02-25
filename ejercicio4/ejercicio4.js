//------------PROGRAMA DE PROFESORES,ALUMNOS Y MATERIAS---------------

const obtenerInformacion = (materia) => {
    materias = {
        Fisica: ["Guglielmi", "Bruno", "Pepe", "Juan", "Maria"],
        Programacion: ["Sanchez", "Bruno", "Pepe", "Juan"],
        Logica: ["Cagnolatti", "Bruno", "Pepe", "Juan", "Pedro", "Maria"],
        Quimica: ["Perez", "Bruno", "Pepe", "Juan", "Pedro", "Maria"],
    }

    if (materias [materia] !== undefined) {
        return [materias [materia], materia, materias];
    } else {
        return materias;
    }
}

const mostrarInformacion = (materia)=>{
	let informacion = obtenerInformacion(materia);

if (informacion !== false) {
	let profesor = informacion[0][0];
	alumnos = informacion[0];
	alumnos.shift();
	document.write(`El profesor de <b>${informacion[1]}</b> es: <b style="color:red">${profesor}</b><br>
		Los alumnos son: <b style="color:blue">${alumnos}</b><br><br>
		`);
}
}

const cantidadDeClases = (alumno)=>{
	let informacion = obtenerInformacion();
	let clasesPresentes = [];
	let cantidadTotal = 0;
	for (info in informacion) {
		if (informacion[info].includes(alumno)) {
			cantidadTotal++;
			clasesPresentes.push(" "+ info);
		}
	}
	return `<b style='color:blue'>
	${alumno}</b> está en <b>${cantidadTotal} clases: <b style='color:green'>${clasesPresentes}</b>
	<br><br>
	`;
}

mostrarInformacion ("Fisica");
mostrarInformacion ("Programacion");
mostrarInformacion ("Logica");
mostrarInformacion ("Quimica");

document.write(cantidadDeClases("Bruno"))
document.write(cantidadDeClases("Pepe"))
document.write(cantidadDeClases("Juan"))
document.write(cantidadDeClases("Maria"))
document.write(cantidadDeClases("Pedro"))


//----EL PROGRAMA DEVUELVE LO SIGUIENTE------

/*

El profesor de Fisica es: Guglielmi
Los alumnos son: Bruno, Pepe,Juan,Maria

El profesor de Programacion es: Sanchez
Los alumnos son: Bruno,Pepe,Juan

El profesor de Logica es: Cagnolatti
Los alumnos son: Bruno,Pepe,Juan,Pedro,Maria

El profesor de Quimica es: Perez
Los alumnos son: Bruno,Pepe,Juan,Pedro,Maria

Bruno está en 4 clases: Fisica, Programacion, Logica, Quimica

Pepe está en 3 clases: Programacion, Logica, Quimica

Juan está en 4 clases: Fisica, Programacion, Logica, Quimica

Maria está en 3 clases: Fisica, Logica, Quimica

Pedro está en 2 clases: Logica, Quimica 

*/