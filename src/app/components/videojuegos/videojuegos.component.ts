import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/Categoria';
import { Videojuego } from 'src/app/models/Videojuego';

@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html',
  styleUrls: ['./videojuegos.component.css']
})
export class VideojuegosComponent implements OnInit {

  radioSeleccionado: string = "todos";

  listaVideojuegos: Videojuego[] = [
    {id: 1, nombre: 'Donkey Kong Country', plataforma: 'Super Nintendo',precio: 9990, calificacion: 5, anio: '1990', url: 'https://i.ytimg.com/vi/ddGMF9kt2bM/hqdefault.jpg', categoria: new Categoria},
    {id: 1, nombre: 'Donkey Kong Country', plataforma: 'Super Nintendo',precio: 9990, calificacion: 5, anio: '1990', url: 'https://i.ytimg.com/vi/ddGMF9kt2bM/hqdefault.jpg', categoria: new Categoria},
    {id: 1, nombre: 'Donkey Kong Country', plataforma: 'Super Nintendo',precio: 9990, calificacion: 5, anio: '1990', url: 'https://i.ytimg.com/vi/ddGMF9kt2bM/hqdefault.jpg', categoria: new Categoria},
    {id: 1, nombre: 'Donkey Kong Country', plataforma: 'Super Nintendo',precio: 9990, calificacion: 5, anio: '1990', url: 'https://i.ytimg.com/vi/ddGMF9kt2bM/hqdefault.jpg', categoria: new Categoria},
    {id: 1, nombre: 'Donkey Kong Country', plataforma: 'Super Nintendo',precio: 9990, calificacion: 5, anio: '1990', url: 'https://i.ytimg.com/vi/ddGMF9kt2bM/hqdefault.jpg', categoria: new Categoria},
    {id: 1, nombre: 'Donkey Kong Country', plataforma: 'Super Nintendo',precio: 9990, calificacion: 5, anio: '1990', url: 'https://i.ytimg.com/vi/ddGMF9kt2bM/hqdefault.jpg', categoria: new Categoria},
    {id: 1, nombre: 'Donkey Kong Country', plataforma: 'Super Nintendo',precio: 9990, calificacion: 5, anio: '1990', url: 'https://i.ytimg.com/vi/ddGMF9kt2bM/hqdefault.jpg', categoria: new Categoria},
    {id: 1, nombre: 'Donkey Kong Country', plataforma: 'Super Nintendo',precio: 9990, calificacion: 5, anio: '1990', url: 'https://i.ytimg.com/vi/ddGMF9kt2bM/hqdefault.jpg', categoria: new Categoria},
    {id: 1, nombre: 'Donkey Kong Country', plataforma: 'Super Nintendo',precio: 9990, calificacion: 5, anio: '1990', url: 'https://i.ytimg.com/vi/ddGMF9kt2bM/hqdefault.jpg', categoria: new Categoria},
    {id: 1, nombre: 'Donkey Kong Country', plataforma: 'Super Nintendo',precio: 9990, calificacion: 5, anio: '1990', url: 'https://i.ytimg.com/vi/ddGMF9kt2bM/hqdefault.jpg', categoria: new Categoria},
    {id: 1, nombre: 'Donkey Kong Country', plataforma: 'Super Nintendo',precio: 9990, calificacion: 5, anio: '1990', url: 'https://i.ytimg.com/vi/ddGMF9kt2bM/hqdefault.jpg', categoria: new Categoria},
    {id: 1, nombre: 'Donkey Kong Country', plataforma: 'Super Nintendo',precio: 9990, calificacion: 5, anio: '1990', url: 'https://i.ytimg.com/vi/ddGMF9kt2bM/hqdefault.jpg', categoria: new Categoria},
    {id: 1, nombre: 'Donkey Kong Country', plataforma: 'Super Nintendo',precio: 9990, calificacion: 5, anio: '1990', url: 'https://i.ytimg.com/vi/ddGMF9kt2bM/hqdefault.jpg', categoria: new Categoria},
    {id: 1, nombre: 'Donkey Kong Country', plataforma: 'Super Nintendo',precio: 9990, calificacion: 5, anio: '1990', url: 'https://i.ytimg.com/vi/ddGMF9kt2bM/hqdefault.jpg', categoria: new Categoria},
    {id: 1, nombre: 'Donkey Kong Country', plataforma: 'Super Nintendo',precio: 9990, calificacion: 5, anio: '1990', url: 'https://i.ytimg.com/vi/ddGMF9kt2bM/hqdefault.jpg', categoria: new Categoria},
    {id: 1, nombre: 'Donkey Kong Country', plataforma: 'Super Nintendo',precio: 9990, calificacion: 5, anio: '1990', url: 'https://i.ytimg.com/vi/ddGMF9kt2bM/hqdefault.jpg', categoria: new Categoria},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getTotalVidejuegos(): number {
    return this.listaVideojuegos.length;
  }

  getTotalAventura(): number {
    return this.listaVideojuegos.filter(vj => vj.categoria === 'aventura').length;
  }

  getTotalCarreras(): number {
    return this.listaVideojuegos.filter(vj => vj.categoria === 'Carreras').length;
  }

  getTotalDeportes(): number {
    return this.listaVideojuegos.filter(vj => vj.categoria === 'Deportes').length;
  }

  getTotalDisparos(): number {
    return this.listaVideojuegos.filter(vj => vj.categoria === 'Disparos').length;
  }

  getTotalPeleas(): number {
    return this.listaVideojuegos.filter(vj => vj.categoria === 'Peleas').length;
  }

}
