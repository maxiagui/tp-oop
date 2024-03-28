"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibroImpreso = void 0;
class LibroImpreso {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }
    obtenerResumen() {
        return `El libro es "${this.titulo}" del autor ${this.autor.apellido}, ${this.autor.nombre}`;
    }
}
exports.LibroImpreso = LibroImpreso;
