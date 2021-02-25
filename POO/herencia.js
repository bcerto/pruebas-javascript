//--------Programacion orientada a objetos Herencia--------------

class Animal {
    constructor (especie, edad, color) {
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }

    verInformacion(){
        document.write(this.info + "<br>")
    }
}

class Perro extends Animal {
    constructor(especie, edad, color, raza) {
        super(especie, edad)
        
        this.raza = raza;
    }
}

let perro = new Perro("perro", 5, "marron", "salchicha");
let gato = new Animal("gato", 2, "gris");
let pajaro = new Animal("pajaro", 1, "verde");

perro.verInformacion();
gato.verInformacion();
pajaro.verInformacion();

//-----------------------------------------------------