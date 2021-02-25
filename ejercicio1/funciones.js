/*
function saludar (){ // Declaramos la funcion "saludar" para luego poder utilizarla cuantas veces queramos
    respuesta = prompt("Hola Bruno, como estas?");

    if (respuesta == "bien") {
        alert ("Me alegro")
    } else {
        alert ("Una pena")
    }
}

saludar () // Utilizamos la funcion

*/
/*
let num1;
let num2;

function suma(num1, num2) {
    let res = num1 + num2;
    document.write(res);
    document.write("<br>");
}

suma (12,91);

suma (10,30); */

/*
const saludar = function(nombre) { // Funcion normal
    let frase = `Hola ${nombre} Como estas?`;
    document.write(frase);
}

saludar ("Pedro"); */



const saludar = nombre => {
    document.write("Hola como estas?" +" " + nombre) // Funcion en flecha
 }
 saludar ("Pedro");