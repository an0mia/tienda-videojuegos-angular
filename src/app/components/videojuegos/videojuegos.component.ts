import { Component, Input, OnInit } from '@angular/core';
import { isEmpty } from 'rxjs';
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

  constructor(private videojuegosService: VideojuegosService) { }

  ngOnInit(): void {
    if(this.videojuegos != null) {
      this.pagActual = 1;
    }
    this.cargarVideojuegos();
    console.log(this.videojuegos);
   
  }
  
  cargarVideojuegos(): void {
    this.videojuegosService.getVideojuegos().subscribe(
      (data) => {
        console.log(data);
        this.videojuegos = data.videojuegos;
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

  buscarJuego(busqueda: string){
    console.log(busqueda);
    this.radioSeleccionado = "Todos";
    if(busqueda == null || busqueda.trim().length == 0){
      this.videojuegos = [];
      this.cargarVideojuegos();
    }else{
      this.videojuegos = [];
      this.cargarVideojuegosPorNombre(busqueda);
    }
  }

  cargarVideojuegosPorNombre(nombre: string): void {
    
    this.videojuegosService.getVideojuegoPorNombre(nombre).subscribe(
      (data) => {
        console.log(data);
        this.videojuegos = data.videojuegos;
        this.cargaPaginado();

        this.cargaVideojuegosPorPagina();
      },
      (error) => {
        this.videojuegos = [];
        this.cargaPaginado();
        this.cargaVideojuegosPorPagina();
      }
    );
  }
 

  getTotalVideojuegos(): number {
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
