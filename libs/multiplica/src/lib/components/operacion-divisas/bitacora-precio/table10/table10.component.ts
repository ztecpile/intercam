import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table10',
  templateUrl: './table10.component.html',
  styleUrls: ['./table10.component.scss']
})
export class Table10Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tables = [
    {
      cabezera: 'Instrumento',
    },
    {
      cabezera: 'Compra',
    },
    {
      cabezera: 'Venta',
    },
    {
      cabezera: 'Compra',
    },
    {
      cabezera: 'Venta',
    },
    {
      cabezera: 'Compra',
    },
    {
      cabezera: 'Compra',
    },
    {
      cabezera: 'Venta',
    },
    {
      cabezera: 'Compra',
    },
    {
      cabezera: 'Venta',
    },
  ];
  
  data = [
    {
      intrumento: "TRANSFER",
      compra: "0.000000",
      venta:"0.000000",
      compra1: "0.000000",
      venta1:"0.000000",
      compra2: "0.000000",
      venta2:"0.000000",
      compra3: "0.000000",
      venta3:"0.000000",
      compra4: "0.000000",
      venta4:"0.000000",
    },
    {
      intrumento: "EFECTIVO",
      compra: "0.000000",
      venta:"0.000000",
      compra1: "0.000000",
      venta1:"0.000000",
      compra2: "0.000000",
      venta2:"0.000000",
      compra3: "0.000000",
      venta3:"0.000000",
      compra4: "0.000000",
      venta4:"0.000000",
  
    },
    {
      intrumento: "MEX",
      compra: "0.000000",
      venta:"0.000000",
      compra1: "0.000000",
      venta1:"0.000000",
      compra2: "0.000000",
      venta2:"0.000000",
      compra3: "0.000000",
      venta3:"0.000000",
      compra4: "0.000000",
      venta4:"0.000000",
    },
    {
      intrumento: "CASH BACK",
      compra: "0.000000",
      venta:"0.000000",
      compra1: "0.000000",
      venta1:"0.000000",
      compra2: "0.000000",
      venta2:"0.000000",
      compra3: "0.000000",
      venta3:"0.000000",
      compra4: "0.000000",
      venta4:"0.000000",
    },
  ];
}
