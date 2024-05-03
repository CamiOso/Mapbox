import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';


import { MapaComponent } from './components/mapa/mapa.component';
import { environment } from '../environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(environment.socketConfig)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
