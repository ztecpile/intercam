import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingMultiplicaModule } from './multiplica.routes';
import { ContratacionDocumentosModule } from './components/contratos/contratacion-documentos/contratacion-documentos.module'
import { TipoDocumentoModule } from './components/contratos/contratacion-tipo-documento/tipo-documento.module'
import { ContratacionActividadesModule } from './components/contratos/contratacion-actividades/contratacion-actividades.module'
import { PorfesionesModule } from './components/contratos/contratacion-profesiones/porfesiones.module'
import { FacturasModule } from './components/operacion-divisas/facturas/facturas.module'
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RelacionDocumentoModule } from './components/contratos/contratacion-relacion-documentos/relacion-documento.module'
import { ContratacionEntidadModule } from './components/contratos/contratacion-entidad/contratacion-entidad.module'
import { ColoniasModule } from './components/contratos/contratacion-colonias/colonias.module';
import { RequirimientoModule } from './components/contratos/contratacion-requrimiento-documento/requirimiento.module'

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
    RequirimientoModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  declarations: [
  
  ]
})
export class MultiplicaModule {
}
