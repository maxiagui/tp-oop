"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Autor_1 = require("./entities/Autor");
const Biblioteca_1 = require("./entities/Biblioteca");
const LibroImpreso_1 = require("./entities/LibroImpreso");
const galeano = new Autor_1.Autor("Eduardo", "Galeano");
const neruda = new Autor_1.Autor("Pablo", "Neruda");
const borges = new Autor_1.Autor("Jorge Luis", "Borges");
const aleph = new LibroImpreso_1.LibroImpreso("El Aleph", borges);
const venasabiertas = new LibroImpreso_1.LibroImpreso("Las venas abiertas de latinoamérica", galeano);
const confieso = new LibroImpreso_1.LibroImpreso("Confieso que he vivido", neruda);
const biblioteca = new Biblioteca_1.Biblioteca();
biblioteca.agregarLibro(venasabiertas);
biblioteca.agregarLibro(aleph);
biblioteca.agregarLibro(confieso);
biblioteca.mostrarCatalogo();
