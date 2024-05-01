import { Component, OnInit } from '@angular/core';
import * as mapbox from 'mapbox-gl';
import mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css'
})
export class MapaComponent implements OnInit{

  mapa!: mapboxgl.Map;

  constructor(){}

  ngOnInit(){
    this.crearMapa();
  }


  crearMapa(){

  (mapboxgl as any).accessToken='pk.eyJ1IjoiY2FtaW9zbzEyMyIsImEiOiJjbHZsbTcxMGsxdjl1MmlraHB2bGNxcWNpIn0.dSVNhil2eirE_Lbskd76tQ';
    this.mapa = new mapbox.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-75.75512993582937, 45.349977429009954],
      zoom: 15.8

    });


  }
}
