import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(){}

  ngOnInit(): void {
    console.log('app-component');
    (mapboxgl as any).accessToken = environment.mapboxToken;
  }

}
