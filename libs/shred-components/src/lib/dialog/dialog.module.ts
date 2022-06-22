import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormModule } from '../form/form.module';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslocoModule } from '@ngneat/transloco';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';

import { DialogBuscaPersonaComponent } from './dialog-busca-persona/dialog-busca-persona.component';
import { DialogBuscaEjecutivoComponent } from './dialog-busca-ejecutivo/dialog-busca-ejecutivo.component';
import { DialogPickListComponent } from './dialog-pick-list/dialog-pick-list.component';
import { DialogBuscarClienteComponent } from './dialog-buscar-cliente/buscar-cliente.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { DialogDealInfoComponent } from './dialog-deal/dialog-deal.component';
import { BuscarEmpleadoComponet } from './dialog-buscar-empleado/dialog-buscar-empleado.component';
import {MatPaginatorModule} from '@angular/material/paginator';
@NgModule({
  declarations: [
    DialogBuscaPersonaComponent,
    DialogBuscaEjecutivoComponent,
    DialogPickListComponent,
    DialogBuscarClienteComponent,
    DialogDealInfoComponent,
    BuscarEmpleadoComponet
  ],
  imports: [
    MatCheckboxModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormModule,
    MatDialogModule,
    TranslocoModule,
    MatTableModule,
    MatRadioModule,
    MatPaginatorModule
  ],
  exports:[
    DialogBuscaPersonaComponent,
    DialogBuscaEjecutivoComponent,
    DialogPickListComponent
  ]
})
export class DialogModule { }
