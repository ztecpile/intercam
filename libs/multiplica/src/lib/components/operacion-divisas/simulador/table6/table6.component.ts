import { Component, OnInit } from '@angular/core';
import { Document } from '../../../../models/documents.interface';
import { DocumentsService } from 'libs/multiplica/src/lib/services/documents.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
// const ELEMENT_DATA: Facturas[] = [];
@Component({
  selector: 'app-table6',
  templateUrl: './table6.component.html',
  styleUrls: ['./table6.component.scss']
})
export class Table6Component implements OnInit {
  dataDocuments: Document[] = [];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor(private documentsService: DocumentsService) { }

  ngOnInit(): void {
    // this.initForm();
    this.documentsService.getDocuments().subscribe((res) => {
      this.dataDocuments = res;
    });
  }

  tables = [
    {
      cabezera: '',
    },
    {
      cabezera: 'Operacion/Ingreso',
    },
    {
      cabezera: 'Monto',
    },
    {
      cabezera: 'Divisa',
    },
    {
      cabezera: 'Instrumento',
    },
  ];

  data = [
    {
      check: "",
      ingreso: "",
      monto:"",
      divisa: "",
      instrumento:""
    },
    {
      check: "",
      ingreso: "",
      monto:"",
      divisa: "",
      instrumento:""
    },
    {
      check: "",
      ingreso: "",
      monto:"",
      divisa: "",
      instrumento:""
    },
    {
      check: "",
      ingreso: "",
      monto:"",
      divisa: "",
      instrumento:""
    },
    {
      check: "",
      ingreso: "",
      monto:"",
      divisa: "",
      instrumento:""
    },
    {
      check: "",
      ingreso: "",
      monto:"",
      divisa: "",
      instrumento:""
    },
    {
      check: "",
      ingreso: "",
      monto:"",
      divisa: "",
      instrumento:""
    },
  ];

  // ------------SEGUNDA TABLA-------

  table = [
    {
      cabezera: '',
    },
    {
      cabezera: 'Cuentas de Correo',
    },

  ];

  date = [
    {
      check: "",
      correo: "",
    },
    {
      check: '',
      correo: "",

    },
    {
      check: '',
      correo: "",
    },
    {
      check: '',
      correo: "",
    },
    {
      check: '',
      correo: "",
    },
    {
      check: '',
      correo: "",
    },
    {
      check: '',
      correo: "",
    },
  ];
}
