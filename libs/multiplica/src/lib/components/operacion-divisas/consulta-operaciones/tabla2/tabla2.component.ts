import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla2',
  templateUrl: './tabla2.component.html',
  styleUrls: ['./tabla2.component.scss']
})
export class Tabla2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tables = [
    {cabezera: 'Tipo',},
    {
      cabezera: 'Fecha',
    },
    {
      cabezera: 'Orden',
    },
    {
      cabezera: 'Fondo',
    },
    {
      cabezera: 'Titulos',
    },
    {
      cabezera: 'Precio',
    },
    {
      cabezera: 'Importe Operacion',
    },
    {
      cabezera: 'Importe Liquidacion',
    },
    {
      cabezera: 'Importe Dolares',
    },
    {
      cabezera: 'Estatus',
    },
  ];
  
  data = [
    {
      tipo: "Compra",
      fecha: "09/06/2021",
      orden:"2781318",
      fondo:"+TASAUSM2",
      titulos:"237",
      precios:"1.900286",
      operacion:"450.36",
      liquidacion:"451.67",
      dolares:"20.00",
      estatus:"atendida"
    },
    {
      tipo: "",
      fecha: "",
      orden:"",
      fondo:"",
      titulos:"",
      precios:"",
      operacion:"",
      liquidacion:"",
      dolares:"",
      estatus:""
    },
    {
      tipo: "",
      fecha: "",
      orden:"",
      fondo:"",
      titulos:"",
      precios:"",
      operacion:"",
      liquidacion:"",
      dolares:"",
      estatus:""
    },
    {
      tipo: "",
      fecha: "",
      orden:"",
      fondo:"",
      titulos:"",
      precios:"",
      operacion:"",
      liquidacion:"",
      dolares:"",
      estatus:""
    },
    {
      tipo: "",
      fecha: "",
      orden:"",
      fondo:"",
      titulos:"",
      precios:"",
      operacion:"",
      liquidacion:"",
      dolares:"",
      estatus:""
    },
    {
      tipo: "",
      fecha: "",
      orden:"",
      fondo:"",
      titulos:"",
      precios:"",
      operacion:"",
      liquidacion:"",
      dolares:"",
      estatus:""
    },
    {
      tipo: "",
      fecha: "",
      orden:"",
      fondo:"",
      titulos:"",
      precios:"",
      operacion:"",
      liquidacion:"",
      dolares:"",
      estatus:""
    },
    {
      tipo: "",
      fecha: "",
      orden:"",
      fondo:"",
      titulos:"",
      precios:"",
      operacion:"",
      liquidacion:"",
      dolares:"",
      estatus:""
    },
    {
      tipo: "",
      fecha: "",
      orden:"",
      fondo:"",
      titulos:"",
      precios:"",
      operacion:"",
      liquidacion:"",
      dolares:"",
      estatus:""
    },
    {
      tipo: "",
      fecha: "",
      orden:"",
      fondo:"",
      titulos:"",
      precios:"",
      operacion:"",
      liquidacion:"",
      dolares:"",
      estatus:""
    },

  ];
}
