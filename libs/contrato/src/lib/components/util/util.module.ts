import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogBusquedaCoincidenciasComponent } from './dialog-busqueda-coincidencias/dialog-busqueda-coincidencias.component';
import { DialogReporte24hrsComponent } from './dialog-reporte24hrs/dialog-reporte24hrs.component';
import { DialogPipelineBitacoraComponent } from './dialog-pipeline-bitacora/dialog-pipeline-bitacora.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ShredComponentsModule } from '@intercam/shred-components';
import { MatDialogModule } from '@angular/material/dialog';
import { OnlyNumberDirective } from './directive/only-number.directive';
import { DialogBusquedaCpComponent } from './dialog-busqueda-cp/dialog-busqueda-cp.component';

@NgModule({
  declarations: [
    DialogBusquedaCoincidenciasComponent,
    DialogReporte24hrsComponent,
    DialogPipelineBitacoraComponent,
    OnlyNumberDirective,
    DialogBusquedaCpComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatTooltipModule,
    ShredComponentsModule,
  ],
  exports: [
    OnlyNumberDirective
  ]
})
export class UtilModule { }
