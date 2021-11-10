import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
    @Input() title : string;
    @Input() subtitle : string;
    @Input() errorpossible : string;
    @Input() errormsg1 : string;
    @Input() errormsg2 : string;
    @Input() errormsg3 : string;
    @Input() returnErr : string;
    @Input() imageErrorUrl: string;

    constructor(){
    }

	ngOnInit(): void {
  }

}
