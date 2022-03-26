import { Component, Input, OnInit } from '@angular/core';
import { Videojuego } from 'src/app/models/Videojuego';
import { VideojuegosService } from 'src/app/services/videojuegos.service';

@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html',
  styleUrls: ['./videojuegos.component.css']
})
export class VideojuegosComponent implements OnInit {

  radioSeleccionado: string = "Todos";

  @Input() videojuegos: Videojuego[] = [];

  listaVideojuegos: Videojuego[] = [
    {id: 1, nombre: 'Donkey Kong Country', plataforma: 'Super Nintendo',precio: 9990, calificacion: 5, anio: '1990', url: 'https://i.ytimg.com/vi/ddGMF9kt2bM/hqdefault.jpg', categoria: 'Aventura'},
    {id: 1, nombre: 'Donkey Kong Country', plataforma: 'Super Nintendo',precio: 9990, calificacion: 5, anio: '1990', url: 'https://i.ytimg.com/vi/ddGMF9kt2bM/hqdefault.jpg', categoria: 'Aventura'},
    {id: 1, nombre: 'Donkey Kong Country', plataforma: 'Super Nintendo',precio: 9990, calificacion: 5, anio: '1990', url: 'https://i.ytimg.com/vi/ddGMF9kt2bM/hqdefault.jpg', categoria: 'Aventura'},
    {id: 1, nombre: 'Donkey Kong Country', plataforma: 'Super Nintendo',precio: 9990, calificacion: 5, anio: '1990', url: 'https://i.ytimg.com/vi/ddGMF9kt2bM/hqdefault.jpg', categoria: 'Peleas'},
    {id: 1, nombre: 'Donkey Kong Country', plataforma: 'Super Nintendo',precio: 9990, calificacion: 5, anio: '1990', url: 'https://i.ytimg.com/vi/ddGMF9kt2bM/hqdefault.jpg', categoria: 'Carreras'},
    {id: 1, nombre: 'Donkey Kong Country', plataforma: 'Super Nintendo',precio: 9990, calificacion: 5, anio: '1990', url: 'https://i.ytimg.com/vi/ddGMF9kt2bM/hqdefault.jpg', categoria: 'Aventura'},
    {id: 1, nombre: 'Donkey Kong Country', plataforma: 'Super Nintendo',precio: 9990, calificacion: 5, anio: '1990', url: 'https://i.ytimg.com/vi/ddGMF9kt2bM/hqdefault.jpg', categoria: 'Disparos'},
    {id: 1, nombre: 'Donkey Kong Country', plataforma: 'Super Nintendo',precio: 9990, calificacion: 5, anio: '1990', url: 'https://i.ytimg.com/vi/ddGMF9kt2bM/hqdefault.jpg', categoria: 'Aventura'},
    {id: 1, nombre: 'Donkey Kong Country', plataforma: 'Super Nintendo',precio: 9990, calificacion: 5, anio: '1990', url: 'https://i.ytimg.com/vi/ddGMF9kt2bM/hqdefault.jpg', categoria: 'Peleas'},
    {id: 1, nombre: 'Donkey Kong Country', plataforma: 'Super Nintendo',precio: 9990, calificacion: 5, anio: '1990', url: 'https://i.ytimg.com/vi/ddGMF9kt2bM/hqdefault.jpg', categoria: 'Peleas'},
    {id: 1, nombre: 'Donkey Kong Country', plataforma: 'Super Nintendo',precio: 9990, calificacion: 5, anio: '1990', url: 'https://i.ytimg.com/vi/ddGMF9kt2bM/hqdefault.jpg', categoria: 'Aventura'},
    {id: 1, nombre: 'Donkey Kong Country', plataforma: 'Super Nintendo',precio: 9990, calificacion: 5, anio: '1990', url: 'https://i.ytimg.com/vi/ddGMF9kt2bM/hqdefault.jpg', categoria: 'Aventura'},
    {id: 1, nombre: 'Donkey Kong Country', plataforma: 'Super Nintendo',precio: 9990, calificacion: 5, anio: '1990', url: 'https://i.ytimg.com/vi/ddGMF9kt2bM/hqdefault.jpg', categoria: 'Deportes'},
    {id: 1, nombre: 'Donkey Kong Country', plataforma: 'Super Nintendo',precio: 9990, calificacion: 5, anio: '1990', url: 'https://i.ytimg.com/vi/ddGMF9kt2bM/hqdefault.jpg', categoria: 'Disparos'},
    {id: 1, nombre: 'Donkey Kong Country', plataforma: 'Super Nintendo',precio: 9990, calificacion: 5, anio: '1990', url: 'https://i.ytimg.com/vi/ddGMF9kt2bM/hqdefault.jpg', categoria: 'Disparos'},
    {id: 1, nombre: 'Donkey Kong Country', plataforma: 'Super Nintendo',precio: 9990, calificacion: 5, anio: '1990', url: 'https://i.ytimg.com/vi/ddGMF9kt2bM/hqdefault.jpg', categoria: 'Aventura'},
  ];

  constructor(private videjuegosService: VideojuegosService) { }

  ngOnInit(): void {
    this.cargarVideojuegos();
  }

  cargarVideojuegos(): void {
    this.videjuegosService.getVideojuegos().subscribe(
      (data) => {
        console.log(data);
        this.videojuegos = data.videojuego;
      }
    );
  }

  radioChangeReceiver(radioSelec: string): void {
    this.radioSeleccionado = radioSelec;
  }

  getTotalVidejuegos(): number {
    return this.videojuegos.length;
  }

  getTotalAventura(): number {
    return this.videojuegos.filter(vj => vj.categoria === 'Aventura').length;
  }

  getTotalBaile(): number {
    return this.videojuegos.filter(vj => vj.categoria === 'Baile').length;
  }

  getTotalCarreras(): number {
    return this.videojuegos.filter(vj => vj.categoria === 'Carreras').length;
  }

  getTotalDeportes(): number {
    return this.videojuegos.filter(vj => vj.categoria === 'Deportes').length;
  }

  getTotalDisparos(): number {
    return this.videojuegos.filter(vj => vj.categoria === 'Disparos').length;
  }

  getTotalPeleas(): number {
    return this.videojuegos.filter(vj => vj.categoria === 'Peleas').length;
  }

}
