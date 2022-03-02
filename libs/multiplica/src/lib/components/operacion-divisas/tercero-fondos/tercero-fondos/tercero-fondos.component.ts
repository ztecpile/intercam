import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cierre-banco-inversiones',
  templateUrl: './tercero-fondos.component.html',
  styleUrls: ['./tercero-fondos.component.scss']
})
export class TerceroFondosComponent implements OnInit {

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
      nombre: "CARLOS GARCIA AGUILAR",
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
      nombre: "CARLOS GARCIA SA DE CV",
      cuenta: "",
      fecha:"10/11/2017",
      usuario:"AMARIN",
      estatus:"ACTIVO"
    },
    {
      nombre: "Marco Lopez Garcia",
      cuenta: "",
      fecha:"10/11/2017",
      usuario:"AMARIN",
      estatus:"ACTIVO"
    },
    {
      nombre: "Este si es valido",
      cuenta: "001993840013",
      fecha:"28/12/2017",
      usuario:"VINEGRETE",
      estatus:"ACTIVO"
    },
    {
      nombre: "Prueba con cuenta",
      cuenta: "34534535",
      fecha:"04/01/2018",
      usuario:"JRINCON",
      estatus:"SOLICITUD"
    },
  ];
}
