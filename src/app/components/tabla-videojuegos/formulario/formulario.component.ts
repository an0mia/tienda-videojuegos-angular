import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Videojuego } from 'src/app/models/Videojuego';
import { VideojuegosService } from 'src/app/services/videojuegos.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  videojuego: Videojuego = new Videojuego();

  submitted: boolean = false;

  form: FormGroup = new FormGroup({
    nombre: new FormControl(''),
    plataforma: new FormControl(''),
    calificacion: new FormControl(''),
    anio: new FormControl(''),
    url: new FormControl(''),
    precio: new FormControl(''),
    categoria: new FormControl('')
  });

  constructor(private videojuegosService: VideojuegosService, private router: Router, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getVideojuego();
    this.form = this.formBuilder.group(
      {
        nombre: ['',
          [
            Validators.required, Validators.minLength(2), Validators.maxLength(50)
          ]
        ],
        plataforma: ['',
          [
            Validators.required, Validators.minLength(2), Validators.maxLength(50)
          ],
        ],
        calificacion: ['',
          [
            Validators.required, Validators.min(1), Validators.max(5)
          ]
        ],
        anio: ['',
          [
            Validators.required, Validators.maxLength(4)
          ]
        ],
        url: ['',
          [
            Validators.required
          ]
        ],
        precio: ['',
          [
            Validators.required
          ]
        ],
        categoria: ['',
          [
            Validators.required
          ]
        ]
      }
    );
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.createVideojuego();
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  public createVideojuego(): void {
    this.videojuegosService.createVidejuego(this.videojuego).subscribe(
      videojuego => {
        this.router.navigate(['/videojuegos']);
      }
    );
  }

  public getVideojuego(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if (id) {
        this.videojuegosService.getVideojuego(id).subscribe(
          (videojuego) => this.videojuego = videojuego
        );
      }
    });
  }

  public updateVideojuego(): void {
    this.videojuegosService.updateVideojuego(this.videojuego).subscribe(
      videojuego => {
        this.router.navigate(['/videojuegos']);
      }
    );
  }




}
