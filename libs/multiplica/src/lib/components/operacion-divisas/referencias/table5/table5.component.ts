import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table5',
  templateUrl: './table5.component.html',
  styleUrls: ['./table5.component.scss']
})
export class Table5Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  tables = [
    {
      cabezera: 'No. Contrato',
    },
    {
      cabezera: 'Nombre del cliente',
    },
    {
      cabezera: 'Perfil',
    },
    {
      cabezera: 'Tipo de contrato',
    }
  ];
  
  data = [
    {
      no: "1371794",
      nombre: "SEGUROS USA",
      perfil:"TITULAR",
      contrato:"DIVISAS BANCO"
    },
    {
      no: "",
      nombre: "",
      perfil:"",
      contrato:""
    },
  ];

  // -----------SEGUNDA TABLA--------

  tabla = [
    {
      cabezera: 'Divisas',
    },
    {
      cabezera: 'Banco',
    },
    {
      cabezera: 'Nombre Convenio',
    },
    {
      cabezera: 'Convenio/Cuenta',
    },
    {
      cabezera: 'Referencia',
    },
  ];

  date = [
    {
      divisas: "MN",
      banco: "BANCO NACIONAL",
      conveniol:"CUENTA",
      cuenta:"7004-26373681",
      referencia:"0017603490"
    },
    {
      divisas: "MN",
      banco: "BANCO SANTANDER",
      conveniol:"CUENTA",
      cuenta:"65503059576",
      referencia:"0017603490"
    },
    {
      divisas: "MN",
      banco: "BANORTE, S.A.",
      conveniol:"CEP",
      cuenta:"2621",
      referencia:"0017603490"
    },
    {
      divisas: "USD",
      banco: "BBVA BANCOMER, S.A.",
      conveniol:"CIE",
      cuenta:"1254405",
      referencia:"0017603490"
    },
  ];
}
