document.addEventListener('DOMContentLoaded', function() { // DOM Content loader para cargar todos los elementos HTML
    iniciarApp();
})

function iniciarApp() {
    crearGaleria();
}

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes') // Asigno a "galeria" como objeto y declaro que es un elemento HTML con su correspondiente clase .galeria-imagenes.
    for (i = 1; i <= 12; i++) { // Creo un bucle for para iterar sobre la cantidad de imágenes totales, como tengo 12 imágenes entonces arranca en 1 y termina en 12.
        const imagen = document.createElement('PICTURE'); // Asigno a "imagen" como objeto y declaro que este lo que va a hacer es crear elementos HTML tipo 'picture'
        imagen.innerHTML = `
        <source srcset="build/img/thumb/${i}.avif" type="image/avif">
        <source srcset="build/img/thumb/${i}.webp" type="image/webp">
        <img loading="lazy" width="200" height="300" src="build/img/thumb/${i}.jpg" alt="Imagen galería">      
        ` // Declaro el código HTML con innerHTML con que voy a insertar en mi documento HTML
        galeria.appendChild(imagen) // Creo el elemento.
        imagen.index = i;
        imagen.onclick = function() { // Creo una función sobre el objeto imagen, utilizando el método onclick.
            mostrarImagen(imagen.index); // Llamo la función mostrarImagen, con parámetro "i"
        }
    }
}

function mostrarImagen(id) { // Creo la función con un parámetro
    const imagen = document.createElement('PICTURE'); // Asigno a "imagen" como objeto y declaro que este lo que va a hacer es crear elementos HTML tipo 'picture'
    imagen.innerHTML = `
    <source srcset="build/img/grande/${id}.avif" type="image/avif">
    <source srcset="build/img/grande/${id}.webp" type="image/webp">
    <img loading="lazy" width="200" height="300" src="build/img/grande/${id}.jpg" alt="Imagen galería">      
    `;
    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');

    const body = document.querySelector('body');
    body.appendChild(overlay)
}
