import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-muestra-nombre',
  templateUrl: './muestra-nombre.component.html',
  styles: [
  ]
})
export class MuestraNombreComponent {

  @Input() nombre!: string;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    
  }

}
