import { Categoria } from "./Categoria";

export class Videojuego {
    id: number = 0;
    nombre: string = '';
    plataforma: string = '';
    calificacion: number = 0;
    anio: string = '';
    url: string = '';
    precio: number = 0;
    categoria: any;
    
    constructor() {
    }
}