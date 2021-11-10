import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { AlertService } from '../alert/alert.service';

@Component({
  selector: 'idb-alert-login',
  templateUrl: './alert-login.component.html',
  styleUrls: ['./alert-login.component.css']
})
export class AlertLoginComponent implements OnInit {
  @Input() messageAlert : string = '';
  
  constructor(private service : AlertService, private cdRef : ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.service.getChangeDataSubject().subscribe(data => {
      this.messageAlert = data.message;
      this.cdRef.detectChanges();
    });
  }

}
