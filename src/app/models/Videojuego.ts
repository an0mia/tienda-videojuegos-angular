import { Categoria } from "./Categoria";

export class Videojuego {
    id: number;
    nombre: string;
    plataforma: string;
    precio: number;
    calificacion: number;
    anio: string;
    url: string;
    categoria: string;
    
    constructor(id: number, nombre: string, plataforma: string, precio: number, calificacion: number, anio: string, url: string, categoria: string) {
        this.id = id;
        this.nombre = nombre;
        this.plataforma = plataforma;
        this.precio =  precio;
        this.calificacion = calificacion;
        this.anio = anio;
        this.url = url;
        this.categoria = categoria;
    }
}