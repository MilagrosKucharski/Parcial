import { Injectable } from '@angular/core';
import { Jugador } from './Jugador';
import { Observable, of } from 'rxjs';
import { Jugadores } from './data';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {


  constructor() { }

  getJugadores(): Observable<Jugador[]> {
    const jugadores = of(Jugadores);
    return jugadores;
  }
  getJugador(id: number): Observable<Jugador> {
    const jugador = Jugadores.find(h => h.id === id)!;
    return of(jugador);
  }
  postJugador(id: number, nombre: string, posicion: string, image: string){
    const jugadorNuevo: Jugador = {id, nombre, posicion, image};
    Jugadores.push(jugadorNuevo);
  }

  }
