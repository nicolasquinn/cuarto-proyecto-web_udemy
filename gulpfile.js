const {src, dest} = require("gulp") // Llamo a las funciones de GULP
const sass = require("gulp-sass")(require('sass')) // Esto lo que hace es usar gulp-sass, pero en realidad lo que hace es ir y buscar la dependencia SASS que es la que tiene todo el "conocimiento"

function css(callback) {

    src('src/scss/app.scss') // Importo/identifico la ruta del archivo SCSS a compilar, a su vez pongo un pipe.
        .pipe(sass()) // Aplico SASS/compilación
        .pipe(dest("build/css")) // Envío/guardo todo lo compilado en la ruta asignada.
        
    callback()
}

exports.css = css; // Llamo la función con la sintaxis de Node exports.