import { Autor } from "./entities/Autor";
import { Biblioteca } from "./entities/Biblioteca";
import { LibroImpreso } from "./entities/LibroImpreso";

const galeano = new Autor("Eduardo", "Galeano")
const neruda = new Autor("Pablo", "Neruda")
const borges = new Autor("Jorge Luis", "Borges")

const aleph = new LibroImpreso("El Aleph", borges)
const venasabiertas = new LibroImpreso("Las venas abiertas de latinoamérica", galeano)
const confieso =new LibroImpreso("Confieso que he vivido", neruda)

const biblioteca = new Biblioteca()
biblioteca.agregarLibro(venasabiertas)
biblioteca.agregarLibro(aleph)
biblioteca.agregarLibro(confieso)

biblioteca.mostrarCatalogo()
