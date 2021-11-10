import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef, TemplateRef } from '@angular/core';
import { OverlayRef } from '@angular/cdk/overlay';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'idb-restringe-fecha-hora',
  templateUrl: './restringe-fecha-hora.component.html',
  styleUrls: ['./restringe-fecha-hora.component.css',]
})
export class RestringeFechaHoraComponent implements OnInit {
  @Input() titulos: any;
  @Input() data: any;
  @Input() overlayRef: OverlayRef;
  @Output() close = new EventEmitter<boolean>();
  dataRespaldo: any;
  ok: boolean;

  tituloFechasInhabiles: String;
  tituloRestringeHoras: String;
  strHoraInicio: String;
  strHoraFin: String;
  strSi: String;
  strNo: String;
  strRechazar: String;
  strAceptar: String;

  strToday: String;
  strNow: String;

  showAlert: String;
  messageAlert: String;
  typeAlert: String;
  timeError: String = "";

  operaFechaInhabil : number;
  restringeHorario : number;

  form = new FormGroup({
    operaFechaInhabil: new FormControl(true),
    restringeHorario: new FormControl(false),
    horaInicial: new FormControl('00:01'),
    horaFinal: new FormControl('23:59'),
  });

  constructor(private cdr: ChangeDetectorRef ){ 
  }

  ngOnInit(): void {
//    this.dataRespaldo = this.data;
    this.dataRespaldo = {
      "operaFechaInhabil": this.data.operaFechaInhabil,
      "restringeHorario": this.data.restringeHorario,
      "horaInicial": this.data.horaInicial,
      "horaFinal": this.data.horaFinal
    };
    
    this.tituloFechasInhabiles = this.titulos.tituloFechasInhabiles;
    this.tituloRestringeHoras = this.titulos.tituloRestringeHoras;
    this.strHoraInicio = this.titulos.horaInicio;
    this.strHoraFin = this.titulos.horaFin;
    this.strSi = this.titulos.si;
    this.strNo = this.titulos.no;
    this.strRechazar = this.titulos.cancelar;
    this.strAceptar = this.titulos.aceptar;
    this.strToday="horarios.today";
    this.strNow="horarios.now";

    this.form.patchValue({
      operaFechaInhabil: this.data.operaFechaInhabil==true?1:0,
      restringeHorario: this.data.restringeHorario==true?1:0,
      horaInicial: this.data.horaInicial,
      horaFinal: this.data.horaFinal,
      });
  }

  ngAfterViewInit() {
    this.operaFechaInhabil=this.data.operaFechaInhabil==true?1:0;
    if(this.data.restringeHorario) {
      this.restringeHorario = 1;
      const horarios = document.querySelector('#horarios');
      horarios.setAttribute("style", "display: block")
    } else {
      this.restringeHorario = 0;
    }
    this.cdr.detectChanges();
  }
  
  refuse() {
//console.log ("this.form 2", this.form.value);
    this.data.operaFechaInhabil = this.dataRespaldo.operaFechaInhabil,
    this.data.restringeHorario = this.dataRespaldo.restringeHorario,
    this.data.horaInicial = this.dataRespaldo.horaInicial,
    this.data.horaFinal = this.dataRespaldo.horaFinal
    this.data.display = false;
    this.close.emit(false);
    this.overlayRef.detach();
//console.log ("this.data 2", this.data);
  }

  acept() {
console.log ("this.form 1", this.form.value);
    this.ok = false;
    if ( this.form.value.restringeHorario==1 ) {
      if ( this.form.value.horaInicial == "" || typeof this.form.value.horaInicial == 'undefined' || this.form.value.horaInicial == null || 
           this.form.value.horaFinal == "" || typeof this.form.value.horaFinal == 'undefined' || this.form.value.horaFinal == null ) {
        this.timeError = "wrongHours";
      } else if ( this.form.value.horaFinal < this.form.value.horaInicial ) {
        this.timeError = "orderHours";
      } else {
        this.ok = true;
        this.timeError = "";
      }
    } else {
      this.ok = true;
      this.form.value.horaInicial = "";
      this.form.value.horaFinal = "";
    }
    if ( this.ok ) {
      this.data.operaFechaInhabil = this.operaFechaInhabil == 1 ? true : false;
      this.data.restringeHorario = this.restringeHorario == 1 ? true : false;
//      this.data.horaInicial = this.form.value.horaInicial!=""?formatDate(this.form.value.horaInicial, 'HH:mm', 'es-MX'):null;
//      this.data.horaFinal = this.form.value.horaFinal!=""?formatDate(this.form.value.horaFinal,'HH:mm', 'es-MX'):null;
      this.data.horaInicial = this.form.value.horaInicial;
      this.data.horaFinal = this.form.value.horaFinal;
      this.data.display = false;
      this.close.emit(true);
      this.overlayRef.detach();
    }
//console.log ("this.data 1", this.data);
  }

  onFechasChange(value: boolean){
    this.operaFechaInhabil=value==true?1:0;
  }

  onHorariosChange(value: boolean){
    const horarios = document.querySelector('#horarios');
    if ( value === true ) {
      horarios.setAttribute("style", "display: block")
      this.restringeHorario = 1;
    } else {
      horarios.setAttribute("style", "display: none")
      this.restringeHorario = 0;
      this.timeError = "";
    }
  }

  onHorasChange() {
    this.timeError = "";
  }

  tpHoraInicial(newHour) {
    console.log("tpHoraFInal", newHour);
    this.form.patchValue({
      horaInicial: newHour,
      });
  }

  tpHoraFInal(newHour) {
    console.log("tpHoraFInal", newHour);
    this.form.patchValue({
      horaFinal: newHour,
      });
  }

}
