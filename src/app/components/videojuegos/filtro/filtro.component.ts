import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {

  @Input() todos: number;
  @Input() aventura: number;
  @Input() carreras: number;
  @Input() deportes: number; 
  @Input() disparos: number;
  @Input() peleas: number;
  @Input() baile: number;
  
  @Output() radioChange = new EventEmitter<string>();

  radioSeleccionado: string = "todos";

  constructor() { 
    this.todos = 0;
    this.aventura = 0;
    this.carreras = 0;
    this.deportes = 0;
    this.disparos = 0;
    this.peleas = 0;
    this.baile = 0;
  }

  ngOnInit(): void { }

  radioChangeEmmitter(): void {
    this.radioChange.emit(this.radioSeleccionado);
  }

}
