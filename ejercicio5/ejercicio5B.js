//--------EJERCICIO QUE EN CONSOLA MUESTRA 14 DIAS SEPARADOS EN GRUPOS Y TAREAS------------

let tp = "100 minutos de hacer trabajos practicos";
let estudio = "100 minutos de estudio";
let trabajo = "240 minutos de trabajo";
let homework = "30 minutos de cosas de la casa";
let descanso = "10 minutos de descanso";

console.log("TAREAS");

for (i = 0; i < 14; i++) {
    if (i == 0) {
        console.groupCollapsed("semana 1")
    }
    console.group("dia " + (i + 1));
    console.log(trabajo);
    console.log(descanso);
    console.log(estudio);
    console.log(tp);
    console.log(homework);
    console.groupEnd();

    if (i == 6) {

        console.groupEnd();
        console.groupCollapsed("semana 2")

    }

}

console.groupEnd();
console.groupEnd();