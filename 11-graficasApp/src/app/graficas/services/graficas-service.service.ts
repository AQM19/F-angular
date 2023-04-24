import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraficasServiceService {

  constructor(private http: HttpClient) { }

  getUsuariosRedesSociales() {
    return this.http.get('http://localhost:3000/grafica');
  }

  getUsuariosRedesSocialesDonaData() {
    return this.getUsuariosRedesSociales()
      .pipe(
        map(data => {
          const labels = Object.keys(data);
          const values = Object.values(data);

          return {labels, values};
        })
      )
  }
}
