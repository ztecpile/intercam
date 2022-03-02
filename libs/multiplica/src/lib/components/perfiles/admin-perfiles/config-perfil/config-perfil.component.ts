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

