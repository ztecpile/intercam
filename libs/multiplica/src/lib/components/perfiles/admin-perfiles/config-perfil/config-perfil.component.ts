import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'intercam-config-perfil',
  templateUrl: './config-perfil.component.html',
  styleUrls: ['./config-perfil.component.scss']
})
export class ConfigPerfilComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  divisas = [
    {
      name: 'USD -  DOLARES AMERICANOS',
      activo: true,
      sl: false
    },
    {
      name: 'EUR - EURO UNIT',
      activo: false,
      sl: false
    },
    {
      name: 'CSU - CORONA SUECA',
      activo: false,
      sl: false
    },
    {
      name: 'JPY - YEN JAPONES',
      activo: false,
      sl: false
    },
    {
      name: 'CHF - FRANCO SUIZO',
      activo: false,
      sl: false
    },
    {
      name: 'GBP - LIBRA ESTERLINA',
      activo: false,
      sl: false
    },
    {
      name: 'CAD - DOLARES CANADIENSES',
      activo: false,
      sl: false
    },
    {
      name: 'MN - MONEDA NACIONAL',
      activo: false,
      sl: false
    },
    {
      name: 'HID - HIDALGO',
      activo: false,
      sl: false
    },
    {
      name: 'H50 - 1/2 HIDALGO(ORO)',
      activo: false,
      sl: false
    },
    {
      name: 'ORO - PESOS ORO',
      activo: false,
      sl: false
    },
    {
      name: 'XAU - ONZA ORO',
      activo: false,
      sl: false
    },
    {
      name: 'AUD - DOLAR AUSTRALIANO',
      activo: false,
      sl: false
    },
    {
      name: 'CNO - CORONA NORUEGA',
      activo: false,
      sl: false
    },
    {
      name: 'CDA - CORONA DANESA',
      activo: false,
      sl: false
    },
  ]

  seleccion = [
    {
      name: 'Administración',
      activo: true,
    },
    {
      name: 'Monitoreo',
      activo: false,
    },
    {
      name: 'Relacionadas',
      activo: false,
    },
    {
      name: 'Metales',
      activo: false,
    },
    {
      name: '',
      activo: false,
    },
  ]

  form: FormGroup = new FormGroup({});

  constructor() { }

  ngOnInit(): void {
  }

  initFormulario() {
    this.form = new FormGroup({

    });
  }

}

