import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TerceroFondosComponent } from './tercero-fondos/tercero-fondos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { ShredComponentsModule } from '../../../../../../shred-components/src/lib/shred-components.module';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'libs/multiplica/src/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'tercero-fondos',
        component: TerceroFondosComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [TerceroFondosComponent],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    SharedModule,
    ShredComponentsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class TerceroFondosModule {}