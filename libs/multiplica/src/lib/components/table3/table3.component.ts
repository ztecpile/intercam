import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table3',
  templateUrl: './table3.component.html',
  styleUrls: ['./table3.component.scss']
})
export class Table3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tables = [
    {cabezera: 'Nombre o Razon Social'
    },
    {
      cabezera: 'Cuenta',
    },
    {
      cabezera: 'Fecha Alta',
    },
    {
      cabezera: 'Usuario Alta',
    },
    {
      cabezera: 'Estatus',
    },
  ];
  
  data = [
    {
      nombre: "Carlos Garcia",
      cuenta: "",
      fecha:"10/11/2017",
      usuario:"AMARIN",
      estatus:"SUSPENDIDO"
    },
    {
      nombre: "XXXXXXXX",
      cuenta: "001994660019",
      fecha:"10/11/2017",
      usuario:"AMARIN",
      estatus:"ACTIVO"
    },
    {
      nombre: "Carlos Garcia",
      cuenta: "",
      fecha:"10/11/2017",
      usuario:"AMARIN",
      estatus:"ACTIVO"
    },
  ];
}
