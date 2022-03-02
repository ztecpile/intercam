import { Component, OnInit } from '@angular/core';
import { Document } from '../../../../models/documents.interface';
import { DocumentsService } from 'libs/multiplica/src/lib/services/documents.service';

@Component({
  selector: 'app-fondos-inversion',
  templateUrl: './fondos-inversion.component.html',
  styleUrls: ['./fondos-inversion.component.scss'],
})
export class FondosInversionComponent implements OnInit {
  tables = [
    { cabezera: 'Fondo' },
    {
      cabezera: 'Plazo máximo',
    },
    {
      cabezera: 'En el año',
    },
    {
      cabezera: 'En el mes',
    },
    {
      cabezera: '7 días',
    },
    {
      cabezera: '28 días',
    },
    {
      cabezera: '12 meses',
    },
  ];

  data = [
    {
      fondo: 'Some fondo',
      plazo: '1 año',
      en_anio: '2022',
      en_mes: '02',
      dias_7: '500',
      dias_28: '3500',
      meses: '12',
    },
    {
      fondo: 'Other Fondo',
      plazo: '2 años',
      en_anio: '2022',
      en_mes: '02',
      dias_7: '500',
      dias_28: '3500',
      meses: '12',
    },
    {
      fondo: 'Next fondo',
      plazo: '3 años',
      en_anio: '2022',
      en_mes: '02',
      dias_7: '500',
      dias_28: '3500',
      meses: '12',
    },
  ];

  table_detalle = [
    { cabezera: 'Fondo' },
    {
      cabezera: 'Tipo',
    },
    {
      cabezera: '%',
    },
  ];

  data_detalle = [
    {
      fondo: 'Some fondo',
      tipo: 'some',
      porcentaje: 'some',
    },
    {
      fondo: 'Some fondo',
      tipo: 'some',
      porcentaje: 'some',
    },
    {
      fondo: 'Some fondo',
      tipo: 'some',
      porcentaje: 'some',
    },
  ];

  total = 0;

  constructor() {}

  ngOnInit(): void {}
}
