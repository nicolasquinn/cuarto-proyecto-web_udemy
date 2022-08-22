document.addEventListener('DOMContentLoaded', function() { // DOM Content loader para cargar todos los elementos HTML
    iniciarApp();
})

function iniciarApp() {
    crearGaleria();
}

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes') // Asigno a "galeria" como objeto y declaro que es un elemento HTML con su correspondiente clase .galeria-imagenes.
    for (i = 1; i <= 12; i++) { // Creo un bucle for para iterar sobre la cantidad de imágenes totales, como tengo 12 imágenes entonces arranca en 1 y termina en 12.
        const imagen = document.createElement('picture'); // Asigno a "imagen" como objeto y declaro que este lo que va a hacer es crear elementos HTML tipo 'picture'
        imagen.innerHTML = `
        <source srcset="build/img/thumb/${i}.avif" type="image/avif">
        <source srcset="build/img/thumb/${i}.webp" type="image/webp">
        <img loading="lazy" width="200" height="300" src="build/img/thumb/${i}.jpg" alt="Imagen galería">      
        ` // Declaro el código HTML con innerHTML con que voy a insertar en mi documento HTML
        galeria.appendChild(imagen) // Creo el elemento.
    }
}