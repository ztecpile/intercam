import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-preload',
  templateUrl: './preload.component.html',
  styleUrls: ['./preload.component.css']
})
export class PreloadComponent implements OnInit {
    title : string;
  @Input() value2: number = 0;
  @ViewChild("preload") preload: ElementRef;
  @Input() set instructions(values : string []) {
    this.setValues(values);
  };


  constructor(private renderer: Renderer2) {

  }

  @Output() propagar = new EventEmitter<boolean>();
  _show : boolean;
  @Input() set show (value :boolean){
    this._show = value;
    this.modal();

  }

  _sumary : any;
  @Input() set sumary (value : any) {
    this._sumary = value;
    this.isAmountSumary = isNaN(value) ? false : true;
  }
  @Input() currency : string;
  @Input() actionSuccess : any;
  @Input() actionRefuse : any;
  isAmountSumary : boolean;

  ngOnInit(): void {
  }
  setValues(values : string []) {

    

  }
  showModal() {

    this._show = true;
    this.modal();
  }

  modal():void {
     this.incrementa();
    if(this.preload != undefined) {
      if(this._show) {
        this.incrementa();

      }
    }
  }

  actionSuccessModal() : void {
    this.closeModal();
    this.actionSuccess();
  }

  actionRefuseModal() : void {
    this.closeModal();
    if(this.actionRefuse != undefined) {
      this.actionRefuse();
    }
  }

  closeModal() {
    this._show = false;
    this.modal();
    this.propagar.emit(false);
  }


 incrementa() {
   if(this.value2<100)
      this.value2=this.value2+5;
     return this.value2;
   }



}

