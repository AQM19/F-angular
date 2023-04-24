import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})

export class ErrorMsgDirective implements OnInit, OnChanges{

  htmlElement: ElementRef<HTMLElement>;
  @Input() set color(valor: string) {
    this.htmlElement.nativeElement.style.color = valor;
  }
  @Input() mensaje: string = 'Este campo es requerido';
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
    this.setColor();
    this.setMensaje();
    this.setClase();
  }

  setColor(): void{
    this.htmlElement.nativeElement.style.color = this.color;
  }

  setMensaje(): void {
    this.htmlElement.nativeElement.innerHTML = this.mensaje;
  }

  setClase(): void {
    this.htmlElement.nativeElement.classList.add(this.clase);
  }
}
