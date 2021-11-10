import { Component, OnInit, ViewChild, ElementRef, Input, Renderer2 } from '@angular/core';
import { AlertType } from '../alert/alertType';
import {ImageAlert} from './imagesAlert';

@Component({
  selector: 'idb-alert-images',
  templateUrl: './alert-images.component.html',
  styleUrls: ['./alert-images.component.css']
})
export class AlertImagesComponent implements OnInit {
  @ViewChild("alert") alert : ElementRef;
  @ViewChild("icon") icon : ElementRef;
  @ViewChild("component") component : ElementRef;

  _show : boolean;
  @Input() set show(value : boolean) {
    this._show = value;
    this.showAlert();
  }
  _message:string;
  @Input() set message(value : string) {
    this._message = value;
    this.showAlert();
  }
  _type:string;
  @Input() set type (value : AlertType) {
    this._type = value;
    this.showAlert();
  }
  _params : Map<string, string>;
  @Input() set params(value : Map<string, string>) {
    this._params = value;
    this.showAlert();
  }
  @Input() images : ImageAlert[]; 

  classSuccess : string = "alert alert-success";
  iconSuccess : string = "ico_success";
  messageSuccess : string = "Alert.Success";
  classInfo : string = "alert alert-info";
  iconInfo : string = "ico_info";
  messageInfo : string = "Alert.Info";
  classWarning : string = "alert alert-warning";
  iconWarning : string = "ico_warning";
  messageWarning : string = "Alert.Warning";
  classDanger : string = "alert alert-danger";
  iconDanger : string = "ico_danger";
  messageDanger : string = "Alert.Danger";
  classAlert : string;
  iconAlert : string;
  typeAlert : string;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {
  }

  selectType(event) {
    this._show = true;
    this.showAlert();
  }

  showAlert() {
    if(this.component != undefined) {
      if(this._show) {
        this.renderer.setStyle(this.component.nativeElement, "display", "block");
        this.setValues();
      } else {
        this.renderer.setStyle(this.component.nativeElement, "display", "none");
      }
    }
  }

  setValues() : void {
    switch(this._type) {
      case AlertType.Success:
        this.classAlert = this.classSuccess;
        this.iconAlert = this.iconSuccess;
        this.typeAlert = this.messageSuccess;
      break;
      case AlertType.Info:
        this.classAlert = this.classInfo;
        this.iconAlert = this.iconInfo;
        this.typeAlert = this.messageInfo;
      break;
      case AlertType.Warning:
        this.classAlert = this.classWarning;
        this.iconAlert = this.iconWarning;
        this.typeAlert = this.messageWarning;
      break;
      case AlertType.Danger:
        this.classAlert = this.classDanger;
        this.iconAlert = this.iconDanger;
        this.typeAlert = this.messageDanger;
      break;
    }
  }
}
