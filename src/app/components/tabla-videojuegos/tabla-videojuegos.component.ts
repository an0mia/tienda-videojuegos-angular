import { Component, Input, OnInit } from '@angular/core';
import { Videojuego } from 'src/app/models/Videojuego';
import { VideojuegosService } from 'src/app/services/videojuegos.service';

@Component({
  selector: 'app-tabla-videojuegos',
  templateUrl: './tabla-videojuegos.component.html',
})
export class TablaVideojuegosComponent implements OnInit {

  @Input() videojuegos: Videojuego[] = [];

  constructor(private videojuegosService: VideojuegosService) { }

  ngOnInit(): void {
    this.cargarVideojuegos();
  }

  cargarVideojuegos(): void {
    this.videojuegosService.getVideojuegos().subscribe(
      (data) => {
        console.log(data);
        this.videojuegos = data.videojuegos;
      }
    );
  }

}
