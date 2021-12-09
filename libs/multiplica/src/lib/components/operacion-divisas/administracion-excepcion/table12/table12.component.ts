import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table12',
  templateUrl: './table12.component.html',
  styleUrls: ['./table12.component.scss']
})
export class Table12Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tables = [
    {
      cabezera: 'Clave Operador',
    },
    {
      cabezera: 'Nombre',
    },
    {
      cabezera: 'Clave Sucursal',
    },
    {
      cabezera: 'Habilitado Cierre',
    }
  ];
  
  data = [
    {
      nombre: "UTAPIA",
      status: "URZULA TAPIA LOPEZ",
      job:"INMTZ",
      cierre:"SI"
    },
    {
      nombre: "CGALVAN",
      status: "CLAUDIA GALVAN",
      job:"INMTZ",
      cierre:"SI"
    },
    {
      nombre: "LKURI",
      status: "LUIS JAVIER KURI GONZALES",
      job:"INFOL",
      cierre:"NO"
    },
   
  
    
    
  
  ]
}
