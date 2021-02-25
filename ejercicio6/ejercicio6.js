const contenedor = document.querySelector (".flex-container");
let contador = 0;

function crearLlave (nombre, modelo, precio) {
    contador++;
    img = "<img class='llave-img' src='llave.png'>";
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3>${modelo}</h3>`;
    precio = `<p>Precio: <b>$${precio}</b></p>`;
    return [nombre, modelo, precio, img]
}

let documentFragment = document.createDocumentFragment();

for (i=1; i<=20; i++) {
    let modeloRandom = Math.round(Math.random()*10000);
    let precioRandom = Math.round(Math.random()*10+30);
    let llave = crearLlave (`Llave ${i}`, `Modelo ${modeloRandom}`, precioRandom);
    let div = document.createElement("DIV");
    div.classList.add(`item-${i}`, 'flex-item')
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
   documentFragment.appendChild(div);

}

contenedor.appendChild(documentFragment);