import { Component } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { Jugador } from '../Jugador';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  jugadores: Jugador[] = [];
  constructor(private service: ServicioService) { }

  ngOnInit(): void {
    this.getJugadores();
  }
  getJugadores(): void {
    this.service.getJugadores()
    .subscribe(jugadores => this.jugadores = jugadores);
  }


}
