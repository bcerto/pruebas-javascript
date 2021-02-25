class Celular {
    constructor(color,peso,rdp,rdc, ram) {
        this.color = color;
        this.peso = peso;
        this.resolucionDePantalla = rdp;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }
    precionarBotonEncendido (){
        if (this.encendido == false) {
            alert("celular prendido");
            this.encendido = true;
        } else {
            alert("celular apagado");
            this.encendido = false;
        }
    }
    reiniciar () {
        if (this.encendido == true) {
            alert("reiniciando celular");
        } else {
            alert("el celular esta apagado");
        }
    }

    tomarFotos () {
        alert(`foto tomada en una resolucion de: ${this.resolucionDeCamara}`);
    }

    grabarVideo () {
        alert(`grabando video en una resolucion de: ${this.resolucionDeCamara}`);
    }

    mobileInfo(){
        return `
        Color: <b>${this.color}<b/><br>
        Peso: <b>${this.peso}<b/><br>
        Tamaño: <b>${this.resolucionDePantalla}<b/><br>
        Resolucion de camara: <b>${this.resolucionDeCamara}<b/><br>
        Memoria Ram: <b>${this.memoriaRam}<b/><br>
        `
    }
}

class CelularAltaGama extends Celular {
    constructor(color, peso, rdp, rdc, ram, rdce) {
        super(color,peso,rdp,rdc,ram);
        this.resolucionDeCamaraExtra = rdce;
    }
    
    grabarVideoLento () {
        alert("estas grabando en camara lenta");
    }

    reconocimientoFacial () {
        alert("vamos a iniciar un reconocimiento facial")
    }

    infoAltaGama() {
        return this.mobileInfo () + `Resolucion de camara extra: ${this.resolucionDeCamaraExtra}`; 
    }
}

/*
celular1 = new Celular("rojo", "150 gramos", "5 pulgadas", "hd","2GB");
celular2 = new Celular("negro", "180 gramos", "6 pulgadas", "full hd","4GB");
celular3 = new Celular("blanco", "250 gramos", "8 pulgadas", "full hd","6GB");
*/

/*
celular1.precionarBotonEncendido();
celular1.tomarFotos();
celular1.grabarVideo();
celular1.reiniciar();
celular1.precionarBotonEncendido();

*/

celular4 = new CelularAltaGama("verde", "160 gramos", "5 pulgadas", "full hd","6GB", "4K");
celular5 = new CelularAltaGama("celeste", "190 gramos", "7 pulgadas", "full hd","8GB", "8k");

/*
document.write(`
${celular1.mobileInfo()} <br>
${celular2.mobileInfo()} <br>
${celular3.mobileInfo()} <br>
`);

*/


document.write(`
${celular4.infoAltaGama()} <br><br>
${celular5.infoAltaGama()} <br>
`)
