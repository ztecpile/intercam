
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { DatePipe } from '@angular/common'
// tslint:disable-next-line:no-duplicate-imports
//import {default as _rollupMoment} from 'moment';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';


//const moment = _moment; // _rollupMoment || _moment;
const sminerr = 'La fecha mínima debe ser ';
const nminerr = 'Minimum date should be';
const smaxerr = 'La fecha máxima debe ser';
const nmaxerr = 'Maximum date should be ';
const sparerr = 'no es una fecha valida';
const nparerr = 'is not a valid date!';

export const MY_FORMATS = {
  parse: {
    dateInput: 'l',
  },
  display: {
    dateInput: 'l',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'idb-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css'],
  providers: [
    {
      provide: DateAdapter, useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    { provide: MAT_DATE_LOCALE, useValue: 'en-USA' },
  ],
})
export class CalendarioComponent implements OnInit {

  @Input() fecha: Date = null;// string= "";
  //@Input() fecha= new Date();
  @Input() min = '';
  @Input() max = '';
  @Input() etiqueta = 'FECHA';
  @Input() lenguaje = 'es'
  @Input() control: FormControl;
  // @Output() fechaSeleccionada: Date;
  // @Output() newItemEvent = new EventEmitter<string>();
  @Output() fechaSeleccionada = new EventEmitter<Date>();

  minDate: Date = null;
  maxDate: Date = null;
  date: FormControl;
  ierr: string;
  xerr: string;
  perr: string;
  hoy: Date = new Date();

  constructor(
    private _adapter: DateAdapter<any>, public datepipe: DatePipe
  ) {

  }
  seleccion(event: MatDatepickerInputEvent<Date>) {
    // this.events.push(`${type}: ${event.value}`);
    // this.fechaSeleccionada = new Date(event.value);
    this.nuevaSeleccion(new Date(event.value));
    //console.log('fechaSeleccionada', this.fechaSeleccionada);
  }

  nuevaSeleccion(value: Date) {
    this.fechaSeleccionada.emit(value);
  }


  ngOnInit(): void {
    // console.log("calendar this.fecha", this.fecha)
    this._adapter.setLocale(this.lenguaje);

    const latest_date = this.datepipe.transform(this.hoy, 'dd/MM/yyyy');
    //console.log(latest_date);
    if (this.lenguaje == 'en') {
      this.ierr = nminerr + latest_date;
      this.xerr = nmaxerr;
      this.perr = nparerr;
    } else {
      this.ierr = sminerr + latest_date;
      this.xerr = smaxerr;
      this.perr = sparerr;
    }
    if (this.fecha == null) {
      //console.log("la fecha es nula", this.fecha);
      this.fecha = new Date();
      this.date = new FormControl(this.fecha);
    }
    else {
      // console.log("la fecha no es nula", this.fecha);
      this.fecha = new Date(this.fecha);
      this.date = new FormControl(this.fecha);
      if (this.min != null && this.min != "") {
        // console.log("min no es nul ni vacio", this.min);
        const arrmin = this.min.split('-');
        // console.log("arrmin", arrmin);
        // console.log("this.fecha.getFullYear()", this.fecha.getFullYear());
        this.fecha.getFullYear();
        this.minDate = new Date(this.fecha.getFullYear()
          - (parseInt(arrmin[0])),
          (this.fecha.getMonth() - parseInt(arrmin[1])),
          (this.fecha.getDate() - parseInt(arrmin[2])));
      }
      // console.log("this.minDate", this.minDate);
      // console.log("this.fecha.getFullYear()", this.fecha.getFullYear());
      // console.log("this.fecha.getMonth", this.fecha.getMonth());
      // console.log("this.fecha.getDate()", this.fecha.getDate());
      if (this.max != null && this.max != "") {
        const arrmax = this.max.split('-');
        this.maxDate = new Date(this.fecha.getFullYear()
          + parseInt(arrmax[0]),
          this.fecha.getMonth() + parseInt(arrmax[1]),
          this.fecha.getDate() + parseInt(arrmax[2]));
      }
      // console.log("this.maxDate", this.maxDate);  
    }
  }

   generateKeyUpEvent(value: string): KeyboardEvent {
    const event: KeyboardEvent = new KeyboardEvent('keyup', { bubbles: true, cancelable: true });
    Object.defineProperty(event, 'target', { value: { value } });
    return event;
}
}
