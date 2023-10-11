import { Component, Input } from '@angular/core';
import { Jugador } from '../Jugador';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-nuevo-jugador',
  templateUrl: './nuevo-jugador.component.html',
  styleUrls: ['./nuevo-jugador.component.css']
})
export class NuevoJugadorComponent {
  @Input()
  nuevoJugador: Jugador = {
    nombre: "",
    id: -1,
    posicion: "",
    image: ""
  };

  constructor(private service: ServicioService) { }

  postJugadores()
  {
    this.service.postJugador(this.nuevoJugador.id as number , this.nuevoJugador.nombre as string, this.nuevoJugador.posicion , this.nuevoJugador.image )
  }

}
