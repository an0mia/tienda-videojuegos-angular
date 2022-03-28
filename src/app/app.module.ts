import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VideojuegosComponent } from './components/videojuegos/videojuegos.component';
import { FiltroComponent } from './components/videojuegos/filtro/filtro.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';



import { TablaVideojuegosComponent } from './components/tabla-videojuegos/tabla-videojuegos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormularioComponent } from './components/tabla-videojuegos/formulario/formulario.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VideojuegosComponent,
    FiltroComponent,
    CarouselComponent,
    NosotrosComponent,
    TablaVideojuegosComponent,
    FormularioComponent
  
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
