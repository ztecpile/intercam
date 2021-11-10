import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'idb-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent implements OnInit {
  @Input() titulo1: string;
  @Input() titulo2: string;
  @Input() subtitulo: string;

  constructor() {}

  ngOnInit(): void {
  }
  
}
