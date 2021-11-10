import { Component, OnInit, Input, Renderer2, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragStart } from '@angular/cdk/drag-drop';

@Component({
  selector: 'idb-cajas-drag',
  templateUrl: './cajas-drag.component.html',
  styleUrls: ['./cajas-drag.component.css'],
//  providers:  [
//    { provide: LOCALE_ID, useValue: 'es-MX' },
//  ],
})
export class CajasDragComponent implements OnInit {
  @Input() data: any;
  @Input() restringe_fechas_horas: Boolean = false;
  @Input() titulosRestricciones: any;
  _disponibles: any = [];
  _agregados: any = [];
  _isValid: boolean = true;

  @Output() isValidChange = new EventEmitter<boolean>();

//  public value: Date = new Date(10, 10, 10, 10, 10, 10);
  public value: Date = new Date();
  
  @Input() set disponibles(disponibles: any) {
    this._disponibles = disponibles;
  }
  get disponibles() {
    return this._disponibles;
  }
  
  @Input() set agregados(agregados: any) {
    this._agregados = agregados;
  }
  get agregados() {
    return this._agregados;
  }

  @Input() set isValid(isValid: any) {
    this._isValid = isValid;
console.log("Drag isValid set:", this.isValid);
  }
  get isValid() {
//console.log("Drag isValid get:", this.isValid);
    return this._isValid;
  }

  isSingleClick: boolean = true;
  restring: boolean = false;
  titulos: any;

  itemIndex2: number;

  constructor(
    private render: Renderer2,
  ) {}

  ngOnInit(): void {
    this.titulos=this.titulosRestricciones;
    if ( this.restringe_fechas_horas ) {
      this.disponibles.forEach(element => {
        element.dataRestricciones.display = false;
      });
      this.agregados.forEach(element => {
        element.dataRestricciones.display = false;
      });
    }

  }

  drop(event: CdkDragDrop<string[]>) {
console.log("drop event:", event);
    if (event.previousContainer != event.container) {
      event.previousContainer.data[event.previousIndex]['select'] = false;
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
    this.isValid = true;
    this.isValidChange.emit(this._isValid);
  }

  clickSelect(itemIndex, event: any , origin: string) {
    this.isSingleClick = true;
    setTimeout(()=>{
      if(this.isSingleClick && !this.restring){
        if ( !this[origin][itemIndex].select ) {
          this[origin][itemIndex].select = true;
        } else {
          this[origin][itemIndex].select = false;
        }
      }
    },250)
  }

  dblclickMove(itemIndex, origin: string, destiny: string) {
console.log("dblclickMove itemIndex, origin, destiny:", itemIndex, origin, destiny);
    this.isSingleClick = false;
    this[origin][itemIndex]['select']=false;
    this[destiny].push( this[origin][itemIndex] );
    this[origin].splice(itemIndex, 1);
    this.isValid = true;
    this.isValidChange.emit(this._isValid);
  }

  assignSelected() {
    var i=0;
    while ( i < this.disponibles.length ) {
      if ( this.disponibles[i]['select'] ) {
        this.disponibles[i]['select']=false;
        this.agregados.push( this.disponibles[i] );
        this.disponibles.splice(i, 1);
        this.isValid = true;
        this.isValidChange.emit(this._isValid);
      } else {
        i++;
      }
    }
  }

  unassignSelected() {
    var i=0;
    while ( i < this.agregados.length ) {
      if ( this.agregados[i]['select'] ) {
        this.agregados[i]['select']=false;
        this.disponibles.push( this.agregados[i] );
        this.agregados.splice(i, 1);
      } else {
        i++;
      }
    }
  }

  assignAll() {
    this.agregados = this.agregados.concat(this.disponibles);
    this.disponibles = [];
    this.isValid = true;
    this.isValidChange.emit(this._isValid);
  }

  unassignAll() {
    this.disponibles = this.disponibles.concat(this.agregados);
    this.agregados = [];
  }

  restringeHoras( itemIndex ) {
console.log("restringeHoras itemIndex", itemIndex);
  }

}
