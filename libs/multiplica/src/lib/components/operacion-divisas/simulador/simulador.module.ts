import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { SimuladorContainnerComponent } from './simulador-containner/simulador-containner.component';
import { FondosInversionComponent } from './fondos-inversion/fondos-inversion.component';
import {CierreBancoInversionesComponent} from './cierre-banco-inversiones/cierre-banco-inversiones.component'
import { CasaBolsaComponent } from './casa-bolsa/casa-bolsa.component';

const routes: Routes = [
  {
      path: '', 
      children: [
          {
          path: 'mis-simulador',
          component:SimuladorContainnerComponent
          }
      ]
  }
];

@NgModule({
  declarations: [SimuladorContainnerComponent, FondosInversionComponent, CierreBancoInversionesComponent, CasaBolsaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatTabsModule,
    MatInputModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class SimuladorModule { }
