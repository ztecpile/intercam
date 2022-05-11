import { Component, Input } from '@angular/core';

@Component({
  selector: 'intercam-tab-contenedor',
  templateUrl: './tab-contenedor.component.html',
  styleUrls: ['./tab-contenedor.component.scss']
})
export class TabContenedorComponent {

  @Input('tabTitle') title: string;
  @Input() name: string;
  @Input() isCliente = false;
  @Input() active = false;
  @Input() isCloseable = false;
  @Input() template;
  @Input() dataContext;

}
