import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideojuegosComponent } from './components/videojuegos/videojuegos.component';

const routes: Routes = [
  { path: 'videojuegos', component: VideojuegosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
