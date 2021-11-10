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

import { ProspeccionComponent } from './prospeccion/prospeccion.component';
import { BuscaProspectoComponent } from './busca-prospecto/busca-prospecto.component';
import { AltaProspectoComponent } from './alta-prospecto/alta-prospecto.component';

import { TabsDynamicComponent } from '../util/tabs/tabs-dynamic.component';
import { TabDynamicComponent } from '../util/tabs/tab-dynamic.component';
import { DynamicTabsDirective } from '../util/tabs/dynamic-tabs.directive';
import { BusquedaProspectoComponent } from './busca-prospecto/busqueda-prospecto/busqueda-prospecto.component';
import { ResultadoProspectoComponent } from './busca-prospecto/resultado-prospecto/resultado-prospecto.component';

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
    TabsDynamicComponent,
    TabDynamicComponent,
    DynamicTabsDirective,
    BusquedaProspectoComponent,
    ResultadoProspectoComponent
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
    MatListModule
  ]
})
export class ProspeccionModule { }
