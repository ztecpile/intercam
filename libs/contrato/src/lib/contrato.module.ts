import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingContratoModule } from './contrato.routes';
import { ClientesModule } from './components/clientes/clientes.module';
import { AltaContratosModule } from './components/contratos/alta.contratos.module';
import { SoporteModule } from './components/soporte/soporte.module';
import { ProspeccionModule } from './components/prospeccion/prospeccion.module';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ShredComponentsModule } from '@intercam/shred-components';
import { DialogBusquedaCoincidenciasComponent } from './components/util/dialog-busqueda-coincidencias/dialog-busqueda-coincidencias.component';
import { DialogReporte24hrsComponent } from './components/util/dialog-reporte24hrs/dialog-reporte24hrs.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingContratoModule,
    ClientesModule,
    AltaContratosModule,
    SoporteModule,
    ProspeccionModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatTooltipModule,
    ShredComponentsModule,
  ],
  declarations: [
    DialogBusquedaCoincidenciasComponent,
    DialogReporte24hrsComponent,
  ]
})
export class ContratoModule {
}
