import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table7',
  templateUrl: './table7.component.html',
  styleUrls: ['./table7.component.scss']
})
export class Table7Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
tables = [
  {
    cabezera: 'Mesa',
  },
  {
    cabezera: 'Monto Maximo',
  },
  {
    cabezera: 'Horario',
  },
  {
    cabezera: 'Estatus',
  }
];

data = [
  {
    mesa: "1",
    maximo: "100.00.00",
    horario:"21:00",
    estatus:"Activa"
  },
  {
    mesa: "1",
    maximo: "100.00.00",
    horario:"21:00",
    estatus:"Activa"
  },
  {
    mesa: "1",
    maximo: "100.00.00",
    horario:"21:00",
    estatus:"Activa"
  },
  {
    mesa: "1",
    maximo: "100.00.00",
    horario:"21:00",
    estatus:"Activa"
  },
];
}
