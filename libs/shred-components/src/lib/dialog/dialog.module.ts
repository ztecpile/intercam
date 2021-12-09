import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormModule } from '../form/form.module';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslocoModule } from '@ngneat/transloco';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';

import { DialogBuscaPersonaComponent } from './dialog-busca-persona/dialog-busca-persona.component';
import { DialogCierreRapidaComponent } from './dialog-cierre-rapida/dialog-cierre-rapida.component';


@NgModule({
  declarations: [
    DialogBuscaPersonaComponent,
    DialogCierreRapidaComponent
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
    DialogCierreRapidaComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DialogModule { }
