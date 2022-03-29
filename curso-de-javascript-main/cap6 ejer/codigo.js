const contenedor = document.querySelector(".flex-container");

function crearLlave(nombre,modelo,precio){
    img = "llave.png";
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3>${modelo}</h3>`;
    precio = `<p>Precio: <b>$${precio}</b></p>`;

    return [nombre,modelo,precio,img];
}

const llave = crearLlave("Llave1","modelo blindada", "33");

document.write(llave[0], llave[1], llave[2])

contenedor.innerHTML = llave