import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'idb-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {
  @Input() message : string;
  constructor() { }

  ngOnInit(): void {
  }

}
