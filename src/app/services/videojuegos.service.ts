import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Videojuego } from '../models/Videojuego';

@Injectable({
  providedIn: 'root'
})
export class VideojuegosService {

  urlEndPoint: string = 'http://localhost:8080/store/videojuegos';
  private httpHeaders = new HttpHeaders({'Content-type' : 'application/json'});

  constructor(private http: HttpClient, private router: Router) { }

  getVideojuegos(): Observable<any> {
    return this.http.get<any>(this.urlEndPoint);
  }

  getVideojuego(id: number): Observable<any> {
    return this.http.get<Videojuego>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e => {
        this.router.navigate([`/videojuegos`]);
        console.log(e.error.mensaje);
        return throwError(() => e);
      }),
    );
  }

  createVidejuego(videojuego: Videojuego): Observable<any> {
    return this.http.post(this.urlEndPoint, videojuego, {headers: this.httpHeaders}).pipe(
      map((response: any) => response.videojuego as Videojuego),
      catchError (e => {
        console.log(e.error.mensaje);
        return throwError(() => e);
      }),  
    );
  }

  updateVideojuego(videojuego: Videojuego): Observable<any> {
    return this.http.put<any>(`${this.urlEndPoint}/${videojuego.id}`, videojuego, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        console.log(e.error.mensaje);
        return throwError( () => e);
      }),
    );
  }

  deleteVideojuego(id: number): Observable<any> {
    return this.http.delete<any>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        console.log(e.error.mensaje);
        return throwError(() => e);
      }),
    );
  }
}
