import { Component, OnInit, ViewChild, ElementRef, Renderer2, Input, ChangeDetectorRef } from '@angular/core';
import { AlertService } from './alert.service';
import { AlertType } from './alertType';

@Component({
  selector: 'idb-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @ViewChild("alert") alert : ElementRef;
  @ViewChild("icon") icon : ElementRef;
  @ViewChild("component") component : ElementRef;

  _show : boolean;
  @Input() set show(value : boolean) {
    this._show = value;
    this.showAlert();
  }
  _message: Array<string>;
  @Input() set message(value : string | Array<string>) {
    let tmp : Array<string>;
    if(typeof value === "string") {
      tmp = new Array<string>();
      tmp[0] = value;
    } else {
      tmp = value;
    }
    this._message = tmp;
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

  @Input() size: 'pop' | 'normal' = 'normal';

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
//  typeAlert : string;
  classRecommendation : string = "alert alert-warning";
  iconRecommendation : string = "ico_recommendation";
  messageRecommendation : string = "Alert.Recommendation";

  constructor(private renderer: Renderer2, private service : AlertService, private cdRef : ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.service.getChangeDataSubject().subscribe(data => {
      let tmp = new Array<string>();
      tmp[0] = data.message;
      this._message = tmp;
      this._show = data.show;
      this._type = data.type;
      this.showAlert();
      this.cdRef.detectChanges();
    });
    this.service.getShowSubject().subscribe(data => {
      this._show = data;
    });
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
    if(this.size == 'pop') {
      this.classAlert = "alert-pop "
    } else {
      this.classAlert = ""
    }
    switch(this._type) {
      case AlertType.Success:
        this.classAlert += this.classSuccess;
        this.iconAlert = this.iconSuccess;
//        this.typeAlert = this.messageSuccess;
      break;
      case AlertType.Info:
        this.classAlert += this.classInfo;
        this.iconAlert = this.iconInfo;
//        this.typeAlert = this.messageInfo;
      break;
      case AlertType.Warning:
        this.classAlert += this.classWarning;
        this.iconAlert = this.iconWarning;
//        this.typeAlert = this.messageWarning;
      break;
      case AlertType.Danger:
        this.classAlert += this.classDanger;
        this.iconAlert = this.iconDanger;
//        this.typeAlert = this.messageDanger;
      break;
      case AlertType.Recommendation:
        this.classAlert += this.classRecommendation;
        this.iconAlert = this.iconRecommendation;
//        this.typeAlert = this.messageRecommendation;
      break;
    }
  }
}
