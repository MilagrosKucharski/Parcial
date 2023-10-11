import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoComponent } from './listado/listado.component';
import { JugadorComponent } from './jugador/jugador.component';
import { NuevoJugadorComponent } from './nuevo-jugador/nuevo-jugador.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    JugadorComponent,
    NuevoJugadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
