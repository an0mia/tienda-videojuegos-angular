import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './components/carousel/carousel.component';
import { VideojuegosComponent } from './components/videojuegos/videojuegos.component';

const routes: Routes = [
  { path: '', component: CarouselComponent},
  { path: 'videojuegos', component: VideojuegosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
