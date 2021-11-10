import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'idb-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.css']
})
export class LightboxComponent implements OnInit {
  @ViewChild("lightbox") lightbox: ElementRef;

  constructor(private renderer: Renderer2) { 
  }

  @Output() propagar = new EventEmitter<boolean>();
  _show : boolean;
  @Input() set show (value :boolean){
    this._show = value;
    this.modal();
  }
  @Input() title : string;
  @Input() body : string[];
  @Input() sumaryTitle : string;
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

  showModal() {
    this._show = true;
    this.modal();
  }

  modal():void {
    if(this.lightbox != undefined) {
      if(this._show) {
        let body = document.getElementsByTagName("body");
        body[0].appendChild(this.lightbox.nativeElement);
        this.renderer.setStyle(this.lightbox.nativeElement, "display", "block");
      } else {
        this.renderer.setStyle(this.lightbox.nativeElement, "display", "none");
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

}