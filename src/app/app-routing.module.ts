import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { VideojuegosComponent } from './components/videojuegos/videojuegos.component';


const routes: Routes = [
  { path: 'Inicio', component: CarouselComponent },
  { path: 'Videojuegos', component: VideojuegosComponent },
  { path: 'Nosotros', component: NosotrosComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
