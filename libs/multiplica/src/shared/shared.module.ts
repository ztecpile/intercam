import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrowDerModule } from './components/arrow-der/arrow-der.module';
import { ArrowIzqModule } from './components/arrow-izq/arrow-izq.module';
import { LoadingModule } from './components/loading/loading.module';
import { TableModule } from './components/table/table.module';



@NgModule({
  declarations: [],
  imports: [
    ArrowDerModule,
    ArrowIzqModule,
    CommonModule,
    LoadingModule,
    TableModule,
  ],
  exports: [
    ArrowDerModule,
    ArrowIzqModule,
    LoadingModule,
    TableModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class SharedModule { }
