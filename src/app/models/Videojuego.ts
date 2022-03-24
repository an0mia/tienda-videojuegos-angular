import { Categoria } from "./Categoria";

export class Videojuego {
    id: number;
    nombre: string;
    version: string;
    precio: number;
    edad: number;
    fecha: string;
    url: string;
    categoria: Categoria;
    
    constructor(id: number, nombre: string, version: string, precio: number, edad: number, fecha: string, url: string, categoria: Categoria) {
        this.id = id;
        this.nombre = nombre;
        this.version = version;
        this.precio =  precio;
        this.edad = edad;
        this.fecha = fecha;
        this.url = url;
        this.categoria = categoria;
    }
}