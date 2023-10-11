import { Component } from '@angular/core';
import { Jugador } from '../Jugador';
import { ActivatedRoute } from '@angular/router';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent {
  jugador: Jugador | undefined;
  jugadores: Jugador[] = [];

  constructor(private route: ActivatedRoute, private service: ServicioService) { }

  ngOnInit(): void {
    this.getJugador();
  }
  getJugador(): void {
    const jugadorId = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getJugador(jugadorId)
    .subscribe(jugador=> this.jugador = jugador);
  }
}
