import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ShredComponentsModule } from '@intercam/shred-components';
import { AdministracionCierreExcepcionComponent } from './components/administracion-cierre-excepcion/administracion-cierre-excepcion.component';
import { FxReferenciasComponent } from './components/fx-referencias/fx-referencias.component';
import { BancosComponent } from './components/bancos/bancos.component';
import { AdministracionCierreExcepcionService } from './services/admin-cierre-excepcion.service';
import { BancoService } from './services/bancos.service';
import { ReferenciasService } from './services/referencias.service';
import { TranslocoModule } from '@ngneat/transloco';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { BancosComponentModule } from './components/bancos/bancos.module';
import { ProfesionesComponent } from './components/profesiones/profesiones.component';
import { EntidadesComponent, EntidadResponse } from './components/entidades/entidades.component';
import { ColoniasComponent } from './components/colonias/colonias.component';
import { ColoniasServices } from './services/colonias.services';
import { ProfesionService } from './services/profesion.service';
import { EntidadServices } from './services/entidades.services';
import { CierreBancoInversionesModule } from './components/cierre-banco-inversiones/cierre-banco-inversiones.module';
import { CedesInversionesComponent } from './components/cierre-banco-inversiones/cedes/cedes.component';
import { CierreBancoInversiones } from './components/cierre-banco-inversiones/cierre-banco-inversiones/cierre-banco-inversiones.component';
import { CierreCasaBolsaComponent } from './components/cierre-casa-bolsa/cierre-casa-bolsa.component';
import { CierreBancoInversionesServices } from './services/cierre-banco-inversiones.services';
import { CierreCasaBolsaService } from './services/cierre-casa-bolsa.service';
import {MatTabsModule} from '@angular/material/tabs';
import { ModelModule } from '@intercam/model';
import { CierreCasaBolsaModule } from './components/cierre-casa-bolsa/cierre-casa-bolsa.module';
import { SectorEconomicoComponent } from './components/sector-economico/sector-economico.component';
import { SectorEconomicoModule } from './components/sector-economico/sector-economico.module';
import { SectorEconomicoService } from './services/sector-economico.services';
import { TiposRelacionComponent } from './components/tipo-relacion/tipo-relacion.component';
import { AcctionButtonsComponent } from 'libs/shred-components/src/lib/form/acction-buttons/acction-buttons.component';
import { HomologacionClientesComponent } from './components/homologacion-clientes/homologacion-clientes.component';
import { HomologacionClientes } from './components/homologacion-clientes/homologacion-clientes.module';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'admon-cierre-excepcion',
        component: AdministracionCierreExcepcionComponent
      }

    ]
  },
  {
    path: '',
    children: [
      {
        path: 'contrato-referencia',
        component: FxReferenciasComponent
      }

    ]
  },
  {
    path: '',
    children: [
      {
        path: 'bancos-abc',
        component: BancosComponent
      }

    ]
  },
  {
    path: '',
    children: [
      {
        path: 'profesiones',
        component: ProfesionesComponent
      }

    ]
  },
  {
    path: '',
    children: [
      {
        path: 'entidades',
        component: EntidadesComponent
      }

    ]
  },
  {
    path: '',
    children: [
      {
        path: 'colonias',
        component: ColoniasComponent
      }

    ]
  },
  {
    path: '',
    children: [
      {
        path: 'cedes',
        component: CedesInversionesComponent
      }

    ]
  },
  {
    path: '',
    children: [
      {
        path: 'cierre-banco-inversion',
        component: CierreBancoInversiones
      }

    ]
  },
  {
    path: '',
    children: [
      {
        path: 'cierre-casa-bolsa',
        component: CierreCasaBolsaComponent
      }

    ]
  },
  {
    path: '',
    children: [
      {
        path: 'sector-economico',
        component: SectorEconomicoComponent
      }

    ]
  },
  {
    path: '',
    children: [
      {
        path: 'tipo-relacion',
        component: TiposRelacionComponent
      }

    ]
  },
  {
    path: '',
    children: [
      {
        path: 'homologacion-clientes',
        component: HomologacionClientesComponent
      }

    ]
  }
];
providers: [
  AdministracionCierreExcepcionService,
  BancoService,
  ReferenciasService,
  ColoniasServices,
  ProfesionService,
  EntidadServices,
  CierreBancoInversionesServices,
  CierreCasaBolsaService,
  SectorEconomicoService,
]
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ShredComponentsModule,
    MatTableModule,
    MatTableModule,
    MatPaginatorModule,
    TranslocoModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule,
    BancosComponentModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    ModelModule,
    MatTabsModule,
    CierreBancoInversionesModule,
    CierreCasaBolsaModule,
    SectorEconomicoModule,
    HomologacionClientes


  ],
  declarations: [
    AdministracionCierreExcepcionComponent,
    FxReferenciasComponent,
    ProfesionesComponent,
    EntidadesComponent,
    ColoniasComponent,
    AcctionButtonsComponent,
    TiposRelacionComponent,
       
  ]
})
export class GeneralModule {
}




