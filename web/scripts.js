let indiceImagen = 0;

function mostrarImagen(indice) {
    const imagenes = document.querySelectorAll('.carrusel-images img');
    if (indice >= imagenes.length) {
        indiceImagen = 0;
    } else if (indice < 0) {
        indiceImagen = imagenes.length - 1;
    } else {
        indiceImagen = indice;
    }
    const offset = -indiceImagen * 100;
    document.querySelector('.carrusel-images').style.transform = `translateX(${offset}%)`;
}

function cambiarImagen(direccion) {
    mostrarImagen(indiceImagen + direccion);
}

// Inicializar el carrusel mostrando la primera imagen
mostrarImagen(indiceImagen);
