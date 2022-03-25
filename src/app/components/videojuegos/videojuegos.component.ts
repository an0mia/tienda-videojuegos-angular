import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/Categoria';
import { Videojuego } from 'src/app/models/Videojuego';

@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html',
  styleUrls: ['./videojuegos.component.css']
})
export class VideojuegosComponent implements OnInit {

  listaVideojuegos: Videojuego[] = [
    {id: 1, nombre: '', version: '',precio: 990, edad: 1, fecha: '', url: '', categoria: new Categoria},
    {id: 1, nombre: '', version: '',precio: 990, edad: 1, fecha: '', url: '', categoria: new Categoria},
    {id: 1, nombre: '', version: '',precio: 990, edad: 1, fecha: '', url: '', categoria: new Categoria},
    {id: 1, nombre: '', version: '',precio: 990, edad: 1, fecha: '', url: '', categoria: new Categoria},
    {id: 1, nombre: '', version: '',precio: 990, edad: 1, fecha: '', url: '', categoria: new Categoria},
    {id: 1, nombre: '', version: '',precio: 990, edad: 1, fecha: '', url: '', categoria: new Categoria},
    {id: 1, nombre: '', version: '',precio: 990, edad: 1, fecha: '', url: '', categoria: new Categoria},
    {id: 1, nombre: '', version: '',precio: 990, edad: 1, fecha: '', url: '', categoria: new Categoria},
    {id: 1, nombre: '', version: '',precio: 990, edad: 1, fecha: '', url: '', categoria: new Categoria},
    {id: 1, nombre: '', version: '',precio: 990, edad: 1, fecha: '', url: '', categoria: new Categoria},
    {id: 1, nombre: '', version: '',precio: 990, edad: 1, fecha: '', url: '', categoria: new Categoria},
    {id: 1, nombre: '', version: '',precio: 990, edad: 1, fecha: '', url: '', categoria: new Categoria},
    {id: 1, nombre: '', version: '',precio: 990, edad: 1, fecha: '', url: '', categoria: new Categoria},
    {id: 1, nombre: '', version: '',precio: 990, edad: 1, fecha: '', url: '', categoria: new Categoria},
    {id: 1, nombre: '', version: '',precio: 990, edad: 1, fecha: '', url: '', categoria: new Categoria},
    {id: 1, nombre: '', version: '',precio: 990, edad: 1, fecha: '', url: '', categoria: new Categoria},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getTotalVidejuegos(): number {
    return this.listaVideojuegos.length;
  }

}
