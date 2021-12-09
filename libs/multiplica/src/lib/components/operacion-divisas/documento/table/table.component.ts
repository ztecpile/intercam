import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

tables = [
  {
    cabezera: 'Nombre',
  },
  {
    cabezera: 'Estatus',
  },
  {
    cabezera: 'Nombre Job',
  }
];

data = [
  {
    nombre: "juan",
    status: "active",
    job:"actualizar"
  },
  {
    nombre: 'pedro',
    status: "active",
    job:"admin"

  },
  {
    nombre: 'luis',
    status: "active",
    job:"carga"

  }
];
}