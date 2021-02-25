//--------Introduccion Programacion orientada a objetos--------------

class animal {
    constructor (especie, edad, color) {
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }

    verInformacion(){
        document.write(this.info + "<br>")
    }

    ladrar (){
        if (this.especie == "perro") {
            document.write("¡Guau Guau!" + "<br>");
        } else {
            document.write("No puedo ladrar porque soy un " + this.especie + "<br>");
        }
    }
}



let perro = new animal("perro", 5, "marron");
let gato = new animal("gato", 2, "gris");
let pajaro = new animal("pajaro", 1, "verde");

/*document.write(perro.info + "<br>");
document.write(gato.info + "<br>");
document.write(pajaro.info + "<br>"); */

/*
perro.verInformacion();
gato.verInformacion();
pajaro.verInformacion();
*/

perro.ladrar();
gato.ladrar();
pajaro.ladrar();

//-----------------------------------------------------