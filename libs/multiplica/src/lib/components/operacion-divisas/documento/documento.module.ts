
import { RouterModule, Routes } from '@angular/router';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'mis-cron',
        component: TableComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class DocumentoModule { }
