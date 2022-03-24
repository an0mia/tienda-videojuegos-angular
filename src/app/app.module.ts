import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
<<<<<<< HEAD
import { VideojuegosComponent } from './components/videojuegos/videojuegos.component';
import { FiltroComponent } from './components/videojuegos/filtro/filtro.component';
=======
import { CarouselComponent } from './components/carousel/carousel.component';
>>>>>>> c7f30ddddf9e7f7a95fe89e2d2a7f107c3ce0a93

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
<<<<<<< HEAD
    VideojuegosComponent,
    FiltroComponent
=======
    CarouselComponent
>>>>>>> c7f30ddddf9e7f7a95fe89e2d2a7f107c3ce0a93
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
