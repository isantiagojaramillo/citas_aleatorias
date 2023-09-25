let boton = document.getElementById('boton-cambiar-cita');
let citaElemento = document.getElementById('cita');
let autorElemento = document.getElementById('autor');

function generarEnteroAleatoris(min, max) {
    return Math.floor( Math.random() * (max - min) + min);
}

function cambiarCita() {
    let indiceAleatorio = generarEnteroAleatoris(0, citas.length);
    citaElemento.innerText = `${citas[indiceAleatorio].texto}`;
    autorElemento.innerHTML = citas[indiceAleatorio].autor;
}

cambiarCita();

boton.addEventListener('click', cambiarCita);







