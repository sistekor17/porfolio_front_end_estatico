import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() text: string = "";
  @Input() color: string = "";
  @Output() btnClick = new EventEmitter();

  onClick(){
    this.btnClick.emit();
  }

}
// para verificar si el binding de la funcion onClick se puede pedir un retorno a consola (console.log("Mensaje de verificacion")) y verificarlo en la terminal del navegador. 
// EventEmitter es una clase que esta predefinida en Angular, sirve para emitir hacia afuera del componente una accion.
