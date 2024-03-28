"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biblioteca = void 0;
class Biblioteca {
    constructor() {
        this.libros = [];
    }
    agregarLibro(libro) {
        this.libros.push(libro);
        console.log(`Libro agregrado correctamente.`);
        console.log(libro.obtenerResumen());
        return libro;
    }
    mostrarCatalogo() {
        console.log("");
        console.log("     -------------------------------------------------------");
        console.log("                    Catálogo de la biblioteca   ");
        console.log("     -------------------------------------------------------");
        this.libros.map((catlibro) => { console.log(catlibro.obtenerResumen()); });
        return this.libros;
    }
}
exports.Biblioteca = Biblioteca;
