import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'idb-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.css']
})
export class ChipsComponent implements OnInit {
//  @Input() data: any;

  _cuentasRetiro: any;
  _cuentasRetiroAlta: any;



  @Input() set cuentasRetiro(cuentasRetiro: any) {
    this._cuentasRetiro = cuentasRetiro;
//    console.log("chips cuentasRetiro:", this.cuentasRetiro);
  }
  get cuentasRetiro() {
    return this._cuentasRetiro;
  }

  @Input() set cuentasRetiroAlta(cuentasRetiroAlta: any) {
    this._cuentasRetiroAlta = cuentasRetiroAlta;
//    console.log("chips cuentasRetiro:", this.cuentasRetiro);
  }
  get cuentasRetiroAlta() {
    return this._cuentasRetiroAlta;
  }

  get sortChips() {
    return this.cuentasRetiroAlta.sort((a, b) => {
      return a.cuenta < b.cuenta;
    });
  }

  get sortList() {
    return this.cuentasRetiro.sort((a, b) => {
      return a.cuenta < b.cuenta;
    });
  }

  constructor() {}

  ngOnInit(): void {
//    console.log("chips cuentasRetiro:", this.cuentasRetiro);
  }

  add(cuentaAdd: string): void {
    const index = this._cuentasRetiro.findIndex((cuentasRetiro: any) => cuentasRetiro.cuenta === cuentaAdd);
    if (index >= 0) {
      this._cuentasRetiroAlta.push(this._cuentasRetiro[index]);
      this._cuentasRetiro.splice(index, 1);
    }
  }

  delete(cuentaDelete: string): void {
    const index = this._cuentasRetiroAlta.findIndex((cuentasRetiroAlta: any) => cuentasRetiroAlta.cuenta === cuentaDelete);
    if (index >= 0) {
      this._cuentasRetiro.push(this._cuentasRetiroAlta[index]);
      this._cuentasRetiroAlta.splice(index, 1);
    }
  }
  
}
