import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { OverlayRef } from '@angular/cdk/overlay';

@Component({
  selector: 'idb-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.css'],
  
})
export class TimepickerComponent implements OnInit {
  @Input() hora: string = "";

  @Output() horaNueva = new EventEmitter<string>();

  horaRespaldo: string = "";
  hour: number;
  minute: number;
  ampm: string;
  hoursArr: Array<number> = [];
  minutesArr: Array<number> = [];
  ampmArr: Array<string> = ["AM", "PM"];
  overlayRef: OverlayRef;
  display: boolean = true;
  open : boolean = true;
  ok: boolean;
  strRechazar: String = "horarios.cancel";
  strAceptar: String = "horarios.accept";
  wheelClass: string;

  event_tmp: any;

  ngOnInit(): void {
    if ( this.hora == null || this.hora == "") {
      this.hora = Date().toString().split(" ")[4];
    }
    var horaArr: Array<any> = String(this.hora).split(":");
    if ( horaArr.length > 1 ) {
      this.hour = Number(horaArr[0])%12;
      this.minute = Number(horaArr[1]);
      this.ampm=Number(horaArr[0])<12?"AM":"PM";
    }
    this.horaRespaldo = this.hora;
    this.setHours();
    this.setMinutes();
    this.setAmpm();
  }

  refuse() {
    this.hora = this.horaRespaldo;
    this.open = true;
    this.display = false;
    this.horaNueva.emit(this.hora);
    this.overlayRef.detach();
  }

  acept() {
    this.hora=('0'+(this.ampm=="AM"?this.hour:this.hour+12)).slice(-2)+":"+('0'+this.minute).slice(-2);
    this.ok = true;
    this.open = true;
    this.display = false;
    this.horaNueva.emit(this.hora);
    this.overlayRef.detach();
  }

  @HostListener('mousewheel', ['$event'])
  onMousewheel(event) {
    this.event_tmp=event;
    this.wheelClass=this.event_tmp.target.parentElement.attributes.class.value;
    let increment=0;
    if(event.wheelDelta>0){
      increment=-1;
    }
    if(event.wheelDelta<0){
      increment=1;
    }
    
    switch ( this.wheelClass ) {
      case "wheeltpHours":
        this.hour=(this.hour+increment+11)%12+1;
        this.setHours();
      break;
      case "wheelMinutes":
        this.minute=(this.minute+increment+60)%60;
        this.setMinutes();
      break;
      case "wheelAmPm":
        if ( this.ampm == "PM" && increment<0 ) {
          this.ampm="AM";
          this.setAmpm();
        } else if ( this.ampm == "AM" && increment>0 ) {
          this.ampm="PM";
          this.setAmpm();
        }
      break;
    }

    return false;
  }

  @HostListener('click', ['$event'])
  onClick(event) {
    this.event_tmp=event;
    this.wheelClass=this.event_tmp.target.parentElement.attributes.class.value;
    
    switch ( this.wheelClass ) {
      case "wheeltpHours":
//console.log("wheeltpHours srcElement.innerText", event.srcElement.innerText);
        this.hour=Number( event.srcElement.innerText );
        this.setHours();
      break;
      case "wheelMinutes":
//console.log("wheelMinutes srcElement.innerText", event.srcElement.innerText);
        this.minute=Number( event.srcElement.innerText );
        this.setMinutes();
      break;
      case "wheelAmPm":
//console.log("wheelAmPm srcElement.innerText", event.srcElement.innerText);
        if ( event.srcElement.innerText != "" ) {
          this.ampm=event.srcElement.innerText;
          this.setAmpm();
        }
      break;
    }
  }

  setHours() {
    this.hoursArr=[];
    for ( let i=-3; i<4; i++)  {
      this.hoursArr.push( (i+this.hour)%12==0?12:(i+this.hour+12)%12 );
    }
  }

  setMinutes() {
    this.minutesArr=[];
    for ( let i=-3; i<4; i++)  {
      this.minutesArr.push( (i+this.minute+60)%60 );
    }
  }

  setAmpm() {
    if ( this.ampm == "AM" ) {
      this.ampmArr=["&nbsp;", "&nbsp;", "&nbsp;", "AM", "PM", "&nbsp;", "&nbsp;"];
    } else {
      this.ampmArr=["&nbsp;", "&nbsp;", "AM", "PM", "&nbsp;", "&nbsp;", "&nbsp;"];
    }
  }

}
