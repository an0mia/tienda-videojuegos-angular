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
  paginas: number[] =  [];
  cantidadPorPag: number = 2;
  pagActual: number = 1;

  @Input() videojuegos: Videojuego[] = [];

  videojuegosPorPag: Videojuego[] = [];

 /*  listaVideojuegos: Videojuego[] = [
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
  ]; */

  constructor(private videjuegosService: VideojuegosService) { }

  ngOnInit(): void {
    this.pagActual = 1;
    this.cargarVideojuegos();
   
  }

  cargarVideojuegos(): void {
    this.videjuegosService.getVideojuegos().subscribe(
      (data) => {
        console.log(data);
        this.videojuegos = data.videojuego;
        this.cargaPaginado();
        this.cargaVideojuegosPorPagina();
      }
    );
  }
  cargaPaginado(){
    let videoJuegosPorCategoria:Videojuego[] = this.videojuegos;
    if(this.radioSeleccionado != "Todos"){
      videoJuegosPorCategoria = this.videojuegos.filter(vj => vj.categoria.nombreCategoria === this.radioSeleccionado);
    }
    let cantPag: number = Math.floor(videoJuegosPorCategoria.length / this.cantidadPorPag);
    if( (cantPag * this.cantidadPorPag) <  videoJuegosPorCategoria.length){
      cantPag = cantPag +1;
    }
    this.paginas = [];
    for(let i=1; i<= cantPag; i++){
      this.paginas.push(i);
    }
  }
  cargaVideojuegosPorPagina(){

    let videoJuegosPorCategoria:Videojuego[] = this.videojuegos;
    if(this.radioSeleccionado != "Todos"){
      videoJuegosPorCategoria = this.videojuegos.filter(vj => vj.categoria.nombreCategoria === this.radioSeleccionado);
    }

    let inicio = (this.pagActual -1) * this.cantidadPorPag;
    let fin = (this.pagActual) * this.cantidadPorPag;
    if(fin > videoJuegosPorCategoria.length){
      fin =  videoJuegosPorCategoria.length
    }
    console.log("inicio :" +inicio);
    console.log("fin :" +fin);
    this.videojuegosPorPag = [];
    for(let i=inicio; i< fin; i++){
      this.videojuegosPorPag.push(videoJuegosPorCategoria[i]);
    }
  }

  radioChangeReceiver(radioSelec: string): void {
    this.radioSeleccionado = radioSelec;
    console.log(this.radioSeleccionado);
    this.pagActual = 1;
    this.cargaPaginado();
    this.cargaVideojuegosPorPagina();

  }
 

  getTotalVidejuegos(): number {
    return this.videojuegos.length;
  }

  getTotalAventura(): number {
    return this.videojuegos.filter(vj => vj.categoria.nombreCategoria === 'Aventura').length;
  }

  getTotalBaile(): number {
    return this.videojuegos.filter(vj => vj.categoria.nombreCategoria === 'Baile').length;
  }

  getTotalCarreras(): number {
    return this.videojuegos.filter(vj => vj.categoria.nombreCategoria === 'Carreras').length;
  }

  getTotalDeportes(): number {
    return this.videojuegos.filter(vj => vj.categoria.nombreCategoria === 'Deportes').length;
  }

  getTotalDisparos(): number {
    return this.videojuegos.filter(vj => vj.categoria.nombreCategoria === 'Disparos').length;
  }

  getTotalPeleas(): number {
    return this.videojuegos.filter(vj => vj.categoria.nombreCategoria === 'Peleas').length;
  }
  
  pagelink(pag: number){
    console.log(pag)
    this.pagActual = pag;
    this.cargaVideojuegosPorPagina();
  }
  prevPag(){
    if(this.pagActual == 1){
      return;
    }
    this.pagActual = this.pagActual-1;
    this.cargaVideojuegosPorPagina();
    console.log("prev");
  }
  nextPag(){

    if(this.pagActual == this.paginas.length){
      return;
    }
    this.pagActual = this.pagActual+1;
    this.cargaVideojuegosPorPagina();
    console.log("next");
  }
}
