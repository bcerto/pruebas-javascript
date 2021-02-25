//------------------METODOS-------------------

/*
sqrt() Devuelve la raiz cuadrada positiva de un numero
cbrt () Devuelve la raiz cubica de un numero
max () Devuelve el mayor numero desde cero en adelante
min () Devuelve el mas pequeño de cero o mas numeros
random () Devuelve un numero pseudo-aleatorio entre 0 y 1
round () Devuelve le valor de un numero redondeado al numero entero mas cercano
fround () Devuelve la representacion flotante de precision simple mas cercana de un numero
floor () Devuelve el mayor entero menor que o igual a un numero
trunc () Devuelve la parte entera del numero x, la eliminacion de los digitos fraccionarios

---------------PROPIEDADES----------------------

PI - Ratio de la circunferencia de un circulo respecto a su diametro
E - Constante de Euler, la base de los logaritmos naturales, aproximadamente 2.718
LN2 - Logaritmo natural de 2, aproximadamente 0.693
LN10 - Logaritmo natural de 10, aproximadamente 2.303
LOG2E - Logaritmo de E en base 2, aproximadamente 1.443
LOG10E - Logaritmo de E en base 10, aproximadamente 0.434

*/

numero = Math.sqrt(16);
document.write (numero + "<br><br>");

numero = Math.cbrt(125);
document.write (numero + "<br><br>");

numero = Math.max(125, 1, 9, 200, 45, 55);
document.write (numero + "<br><br>");

numero = Math.min(125, 1, 9, 200, 45, 55);
document.write (numero + "<br><br>");

numero = Math.random()*100; // genera numeros aleatorios entre 0 y 100, pero con decimales
numero = Math.round(numero); // rectifica el numero y devuelve el entero mas proximo
document.write (numero + "<br><br>");

numero = Math.PI;
document.write (numero + "<br><br>");

numero = Math.E;
document.write (numero + "<br><br>");