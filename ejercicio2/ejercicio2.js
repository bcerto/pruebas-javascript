let free = false;

const validarCliente = (time) => {
    let edad = prompt("Cual es tu edad?");

    if (edad > 18) {
        if (time >= 2 && time < 7 && free == false){
            alert ("Podes pasar gratis");
            free = true;
        } else {
            alert(`Son las ${time}:00Hs, podes pasar pero tenes que pagar la entrada`);
        }
    } else {
        alert("Sos menor de edad, no podes ingresar")
    }
}

validarCliente (23);
validarCliente (24);
validarCliente (1);
validarCliente (2);
validarCliente (3);
validarCliente (4);