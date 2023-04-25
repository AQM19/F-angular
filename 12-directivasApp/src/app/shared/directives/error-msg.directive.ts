import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})

export class ErrorMsgDirective implements OnInit, OnChanges {

  private _color: string = 'red';
  private _mensaje: string = 'Este campo es requerido';

  htmlElement: ElementRef<HTMLElement>;
  
  @Input() set color(valor: string) {
    this._color = valor;
    this.setColor();
  }
  
  @Input() set mensaje(valor: string) {
    this._mensaje = valor;
    this.setMensaje();
  }

  @Input() set valido(valor: boolean) {
    if(valor) {
      this.htmlElement.nativeElement.classList.add('hidden');
    } else {
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
  }

  @Input() clase: string = 'form-text';

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    const mensaje = changes['mensaje'].currentValue;
    this.htmlElement.nativeElement.innerText = mensaje;

  }

  ngOnInit(): void {
    console.log('ngOnInit directiva');
    // this.setColor();
    // this.setMensaje();
    this.setClase();
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMensaje(): void {
    this.htmlElement.nativeElement.innerHTML = this._mensaje;
  }

  setClase(): void {
    this.htmlElement.nativeElement.classList.add(this.clase);
  }
}
