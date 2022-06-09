import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingContratoModule } from './contrato.routes';
import { ClientesModule } from './components/clientes/clientes.module';
import { AltaContratosModule } from './components/contratos/alta.contratos.module';
import { SoporteModule } from './components/soporte/soporte.module';
import { ProspeccionModule } from './components/prospeccion/prospeccion.module';
import { ShredComponentsModule } from '@intercam/shred-components';
import { UtilModule } from './components/util/util.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatRadioModule } from "@angular/material/radio";
import { TranslocoModule } from "@ngneat/transloco";
import { ReactiveFormsModule } from '@angular/forms';
import { GeneralModule } from './general.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingContratoModule,
    ClientesModule,
    AltaContratosModule,
    SoporteModule,
    ProspeccionModule,
    ShredComponentsModule,
    UtilModule,
    MatTableModule,
    MatTableModule,
    MatPaginatorModule,
    TranslocoModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatRadioModule,
    ReactiveFormsModule,
    GeneralModule
  ],
  declarations: [
    
  ]
})
export class ContratoModule {
}
