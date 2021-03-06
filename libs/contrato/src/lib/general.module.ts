import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
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
import { MatTabsModule } from '@angular/material/tabs';
import { ModelModule } from '@intercam/model';
import { CierreCasaBolsaModule } from './components/cierre-casa-bolsa/cierre-casa-bolsa.module';
import { SectorEconomicoComponent } from './components/sector-economico/sector-economico.component';
import { SectorEconomicoService } from './services/sector-economico.services';
import { TiposRelacionComponent } from './components/tipo-relacion/tipo-relacion.component';
import { AcctionButtonsComponent } from 'libs/shred-components/src/lib/form/acction-buttons/acction-buttons.component';
import { HomologacionClientesComponent } from './components/homologacion-clientes/homologacion-clientes.component';
import { HomologacionClientes } from './components/homologacion-clientes/homologacion-clientes.module';
import { SimuladorFondosInversionComponent } from './components/simulador-fondos-inversion/simulador-fondos-inversion.component';
import { SimuladorComponent } from './components/simulador-fondos-inversion/simulador/simulador.component';
import { BusquedaComponent } from './components/simulador-fondos-inversion/busqueda/busqueda.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgChartsModule } from 'ng2-charts';
import { MonitorOperacionesInterbancariasComponent } from './components/monitor-operaciones-interbancarias/monitor-operaciones-interbancarias.component';
import { AsignarAsistenteComponent } from './components/asignar-asistente/asignar-asistente.component';
import { ABCParametrosComponent } from './components/parametros-abc/abc-parametros.component';
import { ConfiguracionLimitesHorariosComponent } from './components/configuracion-limites-horarios/configuracion-limites-horarios.component';

import { EnvioMasivoFacturasComponent } from './components/envio-masivo-facturas/envio-masivo-facturas.component';
import { EnvioMasivoFacturasService } from './services/envio-masivo-factura.service';
import { EnvioMasivoFacturasModule } from './components/envio-masivo-facturas/envio-masivo-facturas.module';
import { ReutersAdministracionPerfilesComponent } from './components/reuters-administracion-perfiles/reuters-administracion-perfiles.component';
import { BitacoraPreciosComponent } from './components/bitacora-precios/bitacora-precios.component';
import { CustomPaginator } from './util/ConfiguracionPaginador';
import {MatSortModule} from '@angular/material/sort';
import {MatSelectModule} from '@angular/material/select';
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
  },
  {
    path: '',
    children: [
      {
        path: 'envio-masivo-facturas',
        component: EnvioMasivoFacturasComponent
      }

    ]
  }
  ,
  {
    path: '',
    children: [
      {
        path: 'simulador-fondos',
        component: SimuladorFondosInversionComponent
      }

    ]
  },
  {
    path: '',
    children: [
      {
        path: 'monitor-operacion',
        component: MonitorOperacionesInterbancariasComponent
      }

    ]
  },
  {
    path: '',
    children: [
      {
        path: 'asignar-asistente',
        component: AsignarAsistenteComponent
      }

    ]
  },
  {
    path: '',
    children: [
      {
        path: 'abc-parametros',
        component: ABCParametrosComponent
      }

    ]
  },
  {
    path: '',
    children: [
      {
        path: 'limite-horarios',
        component: ConfiguracionLimitesHorariosComponent
      }

    ]
  },
  {
    path: '',
    children: [
      {
        path: 'reuters-administracion-perfiles',
        component: ReutersAdministracionPerfilesComponent
      }

    ]
  },
  {
    path: '',
    children: [
      {
        path: 'bitacora-precios',
        component: BitacoraPreciosComponent
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
  EnvioMasivoFacturasService
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
    HomologacionClientes,
    MatExpansionModule,
    NgChartsModule,
    EnvioMasivoFacturasModule,
    MatSortModule,
    MatSelectModule


  ],
  providers: [CurrencyPipe,  { provide: MatPaginatorIntl, useValue: CustomPaginator()}],
  declarations: [
    AdministracionCierreExcepcionComponent,
    FxReferenciasComponent,
    ProfesionesComponent,
    EntidadesComponent,
    ColoniasComponent,
    AcctionButtonsComponent,
    TiposRelacionComponent,
    SimuladorFondosInversionComponent,
    SimuladorComponent,
    BusquedaComponent,
    MonitorOperacionesInterbancariasComponent,
    AsignarAsistenteComponent,
    ABCParametrosComponent,
    ConfiguracionLimitesHorariosComponent,
    ReutersAdministracionPerfilesComponent,
    SectorEconomicoComponent,
    BitacoraPreciosComponent
  

  ]
})
export class GeneralModule {
}




