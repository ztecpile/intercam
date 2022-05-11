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


@NgModule({
  declarations: [
    DialogBuscaPersonaComponent,
    DialogBuscaEjecutivoComponent,
    DialogPickListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormModule,
    MatDialogModule,
    TranslocoModule,
    MatTableModule,
    MatRadioModule
  ],
  exports:[
    DialogBuscaPersonaComponent,
    DialogBuscaEjecutivoComponent,
    DialogPickListComponent
  ]
})
export class DialogModule { }
