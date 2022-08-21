// Funciones Gulp
const {src, dest, watch, parallel} = require("gulp"); // Llamo a las funciones de GULP

// Compilación CSS
const sass = require("gulp-sass")(require('sass')); // Esto lo que hace es usar gulp-sass, pero en realidad lo que hace es ir y buscar la dependencia SASS que es la que tiene todo el "conocimiento"
const plumber = require("gulp-plumber"); 

// Imágenes 
const cache = require("gulp-cache");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const avif = require("gulp-avif");

function css(callback) {

    src('src/scss/**/*.scss') // Importo/identifico la ruta del archivo SCSS a compilar, a su vez pongo un pipe.
        .pipe(plumber())
        .pipe(sass()) // Aplico SASS/compilación
        .pipe(dest("build/css")) // Envío/guardo todo lo compilado en la ruta asignada.
    callback();
}

function imagenes(callback) {

    const opciones = {
        optimizationLevel: 3
    }
    src('src/img/**/*.{jpg,png}')
        .pipe (cache(imagemin(opciones)))
        .pipe(dest('build/img'))
    callback();

}

function versionWebp(callback) {

    const opciones = {
        quality: 50
    }
    src('src/img/**/*.{jpg,png}')
        .pipe(webp(opciones))
        .pipe(dest('build/img'))
    callback();

}

function versionAvif(callback) {
    const opciones = {
        quality: 50
    }
    src('src/img/**/*.{jpg,png}')
        .pipe(avif(opciones))
        .pipe(dest('build/img'))
    callback();
}

function dev(callback) { // Creo la función Watch para compilar en "vivo"

    watch('src/scss/**/*.scss', css); // Ejecuto la función indicando primero la ubicación del archivo y la función de compilación a ejecutar
    callback();

}

exports.css = css; // Llamo la función con la sintaxis de Node exports.
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.dev = parallel(imagenes, versionWebp, versionAvif, dev);