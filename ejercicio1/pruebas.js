/*let pc1 = {
    nombre: "BrunoPC",
    procesador: "Intel i7",
    memoria: "16gb",
    espacio: "256gb",
}; 

let nombre = pc1 ["nombre"];
let procesador = pc1 ["procesador"];
let memoria = pc1 ["memoria"];
let espacio = pc1 ["espacio"];

frase = `El nombre de mi pc es: <b>${nombre}</b> <br>
         El procesador es: <b>${procesador}</b> <br> 
         La memoria es: <b>${memoria}</b> <br> 
         El espacio de disco es: <b>${espacio}</b> <br>`;

document.write(frase); */

let numero = 0;

/*while (numero < 1000) { //bucle while mientras el numero sea menor a 1000, se va a repetir hasta el numero 10
    numero++;
    document.write(numero);
    if (numero == 10) {
        break; // termina de ejecutar el bucle y continua con el programa
    }
} */

let animales = ["gato", "perro", "tiranosaurio rex"];

for (animal in animales) { // el "in" me devuelve el indice o posicion de cada uno de los elementos
    document.write(animal + "<br>");
}

document.write ("<br>");

for (animal of animales) { // el "of" me devuelve el nombre del elemento que esta en cada posicion
    document.write(animal + "<br>");
}