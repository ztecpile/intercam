import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';

import { MonitorPipelineComponent } from './monitor-pipeline/monitor-pipeline.component';
import { Routes, RouterModule } from '@angular/router';

import { ModelModule } from '@intercam/model';
import { ShredComponentsModule } from '@intercam/shred-components';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatTabsModule} from '@angular/material/tabs'
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';

import { ProspeccionComponent } from './prospeccion/prospeccion.component';
import { BuscaProspectoComponent } from './busca-prospecto/busca-prospecto.component';
import { AltaProspectoComponent } from './alta-prospecto/alta-prospecto.component';

import { BusquedaProspectoComponent } from './busca-prospecto/busqueda-prospecto/busqueda-prospecto.component';
import { ResultadoProspectoComponent } from './busca-prospecto/resultado-prospecto/resultado-prospecto.component';
import { FilterProspectosPipe } from '../util/filter/filter-prospectos.pipe';
import { MatIconModule } from '@angular/material/icon';
import { UtilModule } from '../util/util.module';

const routes: Routes = [
  {
      path: '', 
      children: [
          {
          path: 'monitor-pipeline',
          component:MonitorPipelineComponent
          },
          {
            path: 'prospeccion',
            component:ProspeccionComponent
          }
      ]
  }
];

@NgModule({
  declarations: [
    MonitorPipelineComponent,
    ProspeccionComponent,
    BuscaProspectoComponent,
    AltaProspectoComponent,
    BusquedaProspectoComponent,
    ResultadoProspectoComponent,
    FilterProspectosPipe
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ModelModule,
    MatTableModule,
    ShredComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    TranslocoModule,
    MatTabsModule,
    MatPaginatorModule,
    HttpClientModule,
    MatButtonModule,
    MatStepperModule,
    MatTooltipModule,
    MatDialogModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    UtilModule
  ]
})
export class ProspeccionModule { }
