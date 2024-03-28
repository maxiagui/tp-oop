import { Autor } from "./Autor";
import { Libro } from "./Libro";

export class LibroImpreso implements Libro{
    titulo: string;
    autor: Autor;
    constructor(titulo: string, autor: Autor){
        this.titulo=titulo;
        this.autor=autor;
        
    }
   obtenerResumen(): string{
        return `El libro es "${this.titulo}" del autor ${this.autor.apellido}, ${this.autor.nombre}`
    }
}