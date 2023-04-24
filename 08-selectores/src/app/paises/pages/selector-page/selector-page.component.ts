import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PaisesService } from '../../services/paises.service';
import { Pais, PaisSmall } from '../../interfaces/paises.interfaces';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [
  ]
})
export class SelectorPageComponent implements OnInit {

  public miFormulario: FormGroup = this.fb.group({
    region: ['', Validators.required],
    pais: ['', Validators.required],
    frontera: ['', Validators.required]
  });

  // llenar selectores
  public regiones: string[] = [];
  public paises: PaisSmall[] = [];
  // public fronteras: string[] = [];
  public fronteras: PaisSmall[] = [];

  // UI
  public cargando: boolean = false;

  constructor(
    private fb: FormBuilder,
    private paisesService: PaisesService
  ) { }

  ngOnInit(): void {
    this.regiones = this.paisesService.regiones;

    this.miFormulario.get('region')?.valueChanges
      .pipe(
        tap((_) => {
          this.miFormulario.get('pais')?.reset('');
          this.cargando = true;
        }),
        switchMap(region => this.paisesService.getPaisesPorRegion(region))
      )
      .subscribe(paises => {
        this.cargando = false;
        this.paises = paises.map(pais => ({
          name: pais.name,
          cca3: pais.cca3
        }));

      });

    this.miFormulario.get('pais')?.valueChanges
      .pipe(
        tap(() => {
          this.cargando = true;
          this.miFormulario.get('frontera')?.reset('');
        }),
        switchMap(code => this.paisesService.getPaisPorCodigo(code)),
        switchMap(pais => this.paisesService.getPaisesPorCodigos(pais ? pais[0]?.borders : []))
      )
      .subscribe( paises => {
        console.log(paises);
        this.fronteras = paises;
        this.cargando = false;
      })
  }

  guardar() {
    console.log(this.miFormulario.value);
  }

}
