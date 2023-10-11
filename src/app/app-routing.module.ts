import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JugadorComponent } from './jugador/jugador.component';
import { ListadoComponent } from './listado/listado.component';
import { NuevoJugadorComponent } from './nuevo-jugador/nuevo-jugador.component';

const routes: Routes = [
  { path: '', component: ListadoComponent },
  { path: 'jugador/:id', component: JugadorComponent },
  { path: 'nuevoJugador', component: NuevoJugadorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
