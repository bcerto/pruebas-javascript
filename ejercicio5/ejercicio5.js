/*const materias = {
    fisica: [90, 6, 4, "Fisica"],
    matematica: [84, 8, 2, "Matematica"],
    logica: [92, 8, 4, "Logica"],
    quimica: [96, 8, 4, "Quimica"],
    calculo: [91, 6, 3, "Calculo"],
    programacion: [79, 7, 4, "Programacion"],
    biologia: [75, 9, 2, "Biologia"],
    bbdd: [98, 9, 1, "Bbdd"],
    algebra: [100, 10, 4, "Algebra"]
}

const aprobo = ()=> {
    for (materia in materias) {
        let asistencias = materias[materia][0];
        if (asistencias >=90) {
            console.log(materias[materia][3]);
            console.log("%c   Aprobado", "color:green");
        } else {
            console.log(materias[materia][3]);
            console.log("%c   Desaprobado", "color:red");
        }
    }
}

aprobo()
*/

const materias = {
    fisica: [90, 6, 4, "Fisica"],
    matematica: [84, 8, 2, "Matematica"],
    logica: [92, 8, 4, "Logica"],
    quimica: [96, 8, 4, "Quimica"],
    calculo: [91, 6, 3, "Calculo"],
    programacion: [79, 7, 4, "Programacion"],
    biologia: [75, 9, 2, "Biologia"],
    bbdd: [98, 9, 1, "Bbdd"],
    algebra: [100, 10, 4, "Algebra"]
}

const aprobo = ()=> {
    for (materia in materias) {

        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajosPracticos = materias[materia][2];

        console.log(materias[materia][3]);

        if (asistencias >=90) {
            console.log("%c   Asistencias en orden", "color:green");

        } else {
            console.log("%c   Falta de asistencias", "color:red");
        }

        if (promedio >= 7) {
            console.log("%c   Promedio en orden", "color:green");

        } else {
            console.log("%c   Promedio desaprobado", "color:red");    
        }

        if (trabajosPracticos >= 3) {
            console.log("%c   Trabajos practicos en orden", "color:green");

        } else {
            console.log("%c   Faltan trabajos practicos", "color:red");
        }
    }
}

aprobo()