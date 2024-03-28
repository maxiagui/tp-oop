import { LibroImpreso } from "./LibroImpreso";
export class Biblioteca{
    private libros: LibroImpreso[] =[];

    agregarLibro(libro: LibroImpreso):LibroImpreso{
        this.libros.push(libro);
        console.log(`Libro agregrado correctamente.`)
        console.log(libro.obtenerResumen())
        return libro
    }

    mostrarCatalogo(): LibroImpreso[]{
        console.log("")
        console.log("     -------------------------------------------------------")
        console.log("                    Catálogo de la biblioteca   ")
        console.log("     -------------------------------------------------------")
        this.libros.map((catlibro) => {console.log(catlibro.obtenerResumen())})
        return this.libros
    }
}