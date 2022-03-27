import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VideojuegosComponent } from './components/videojuegos/videojuegos.component';
import { FiltroComponent } from './components/videojuegos/filtro/filtro.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TablaVideojuegosComponent } from './components/tabla-videojuegos/tabla-videojuegos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VideojuegosComponent,
    FiltroComponent,
    CarouselComponent,
    NosotrosComponent,
    TablaVideojuegosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
