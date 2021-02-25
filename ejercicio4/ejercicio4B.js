//------------PROGRAMA DE INSCRIPCION DE ALUMNOS A MATERIAS---------------

let materias =  {
        Fisica: ["Guglielmi", "Bruno", "Pepe", "Juan", "Maria"],
        Programacion: ["Sanchez", "Bruno", "Pepe", "Juan"],
        Logica: ["Cagnolatti", "Bruno", "Pepe", "Juan", "Pedro", "Maria"],
        Quimica: ["Perez", "Bruno", "Pepe", "Juan", "Pedro", "Maria"],
    }

    const inscribir = (alumno,materia)=>{
        personas = materias[materia];
        if (personas.length >= 21) {
            document.write(`lo siento ${alumno}, las clases de ${materia} ya estan llenas<br><br>`);
        } else {
            personas.push(alumno);
            if (materia == "fisica") {
                materias = {
                    Fisica: personas,
                    Programacion: materias['Programacion'],
                    Logica: materias['Logica'],
                    Quimica:materias['Quimica']
                }
            }
            else if (materia == "Programacion") {
                materias = {
                    Fisica: materias['Fisica'],
                    Programacion: personas,
                    Logica: materias['Logica'],
                    Quimica:materias['Quimica']
                }
            }else if (materia == "Logica") {
                materias = {
                    Fisica: materias['Fisica'],
                    Programacion: materia['Programacion'],
                    Logica: personas,
                    Quimica:materias['Quimica']
                }
            }else if (materia == "Quimica") {
                materias = {
                    Fisica: materias['Fisica'],
                    Programacion: materia['Programacion'],
                    Logica: materias['Logica'],
                    Quimica: personas
                }
            }
            document.write(`¡Felicidades ${alumno}! te has inscrito a ${materia} correctamente.<br><br>`);
        }
    }

inscribir("Pedrito", "Fisica");
inscribir("Pedrito", "Fisica");
inscribir("Pedrito", "Fisica");
inscribir("Pedrito", "Fisica");
inscribir("Pedrito", "Fisica");
inscribir("Pedrito", "Fisica");
inscribir("Pedrito", "Fisica");
inscribir("Pedrito", "Fisica");
inscribir("Pedrito", "Fisica");
inscribir("Pedrito", "Fisica");
inscribir("Pedrito", "Fisica");
inscribir("Pedrito", "Fisica");
inscribir("Pedrito", "Fisica");
inscribir("Pedrito", "Fisica");
inscribir("Pedrito", "Fisica");
inscribir("Pedrito", "Fisica");
inscribir("Pedrito", "Fisica");
inscribir("Pedrito", "Fisica");
inscribir("Pedrito", "Fisica");
inscribir("Pedrito", "Fisica");
inscribir("Pedrito", "Fisica");
inscribir("Pedrito", "Fisica");
  