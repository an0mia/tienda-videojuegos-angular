import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { FormularioComponent } from './components/tabla-videojuegos/formulario/formulario.component';
import { TablaVideojuegosComponent } from './components/tabla-videojuegos/tabla-videojuegos.component';
import { VideojuegosComponent } from './components/videojuegos/videojuegos.component';


const routes: Routes = [
  { path: '', component: CarouselComponent },
  { path: 'videojuegos', component: VideojuegosComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'tabla', component:TablaVideojuegosComponent},
  { path: 'tabla/form', component: FormularioComponent},
  { path: 'inicio', component: CarouselComponent },
  { path: 'videojuegos', component: VideojuegosComponent },
  { path: 'nosotros', component: NosotrosComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
