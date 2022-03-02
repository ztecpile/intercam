import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingMultiplicaModule } from './multiplica.routes';
import { ContratacionDocumentosModule } from './components/contratos/contratacion-documentos/contratacion-documentos.module'
import { TipoDocumentoModule } from './components/contratos/contratacion-tipo-documento/tipo-documento.module'
import { ContratacionActividadesModule } from './components/contratos/contratacion-actividades/contratacion-actividades.module'
import { PorfesionesModule } from './components/contratos/contratacion-profesiones/porfesiones.module'
import { FacturasModule } from './components/operacion-divisas/facturas/facturas.module'
import { TerceroFondosModule } from './components/operacion-divisas/tercero-fondos/tercero-fondos.module'
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RelacionDocumentoModule } from './components/contratos/contratacion-relacion-documentos/relacion-documento.module'
import { ContratacionEntidadModule } from './components/contratos/contratacion-entidad/contratacion-entidad.module'
import { ColoniasModule } from './components/contratos/contratacion-colonias/colonias.module';
import { RequirimientoModule } from './components/contratos/contratacion-requrimiento-documento/requirimiento.module'
import { AdministracionExcepcionModule } from './components/operacion-divisas/administracion-excepcion/administracion-excepcion.module';
import { BitacaPrecioModule } from './components/operacion-divisas/bitacora-precio/bitaca-precio.module';
import { ConfiguracionLimitesModule } from './components/operacion-divisas/configuracion-limites/configuracion-limites.module';
import { ConsultaOperacionesModule } from './components/operacion-divisas/consulta-operaciones/consulta-operaciones.module';
import { DocumentoModule } from './components/operacion-divisas/documento/documento.module';
import { ReferenciasModule } from './components/operacion-divisas/referencias/referencias.module';
import { SimuladorModule } from './components/operacion-divisas/simulador/simulador.module';
import { AdminPerfilesModule } from './components/perfiles/admin-perfiles/admin-perfiles.module';

@NgModule({
  imports: [
    AppRoutingMultiplicaModule,
    CommonModule,
    ContratacionDocumentosModule ,
    TipoDocumentoModule,
    ContratacionActividadesModule ,
    PorfesionesModule,
    FacturasModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RelacionDocumentoModule,
    ContratacionEntidadModule,
    ColoniasModule,
    RequirimientoModule,
    AdministracionExcepcionModule,
    BitacaPrecioModule,
    ConfiguracionLimitesModule,
    ConsultaOperacionesModule,
    DocumentoModule,
    ReferenciasModule,
    SimuladorModule,
    AdminPerfilesModule,
    TerceroFondosModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  declarations: [
  
  ]
})
export class MultiplicaModule {
}
