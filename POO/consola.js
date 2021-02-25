//---------- MANEJO DE LA CONSOLA -----------------


//------ Funciones de registro -------------------

console.clear(); // Limpia la consola

console.error(); // Muestra un error en la consola

console.info(); // Emite un mensaje informativo en la consola

console.log(); // Emite un mensaje de depuracion en la consola

console.table([3,5,6,3,5,8,10,2,4,5]) // creamos un elemento o array y nos devuelve una tabla

console.warn() // Imprime un mensaje de advertencia en la consola web


//--------- Funciones de conteo --------------------------


console.count() // Registra el numero de veces que se llama a count(). Esta funcion toma como argumento opcional una etiqueta.

console.countReset () // Resetea el contador console.count ()


//--------- Funciones de agrupacion --------------------------

console.group ("frutas") // Crea un grupo con el nombre de "frutas" en el registro de la consola web

console.groupEnd () // Remueve un grupo en la linea en el registro de la consola web

console.groupCollapsed () // Crea un grupo en linea pero contraido, el usuario debe expandirlo para verlo

//--------- Funciones de temporizacion --------------------------

console.time () // 

console.timeLog () // Nos imprime en pantalla cuanto tiempo transcurre desde que se inició

console.timeEnd () // 

