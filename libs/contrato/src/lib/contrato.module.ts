import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingContratoModule } from './contrato.routes';
import { ClientesModule } from './components/clientes/clientes.module';
import { AltaContratosModule } from './components/contratos/alta.contratos.module';
import { SoporteModule } from './components/soporte/soporte.module';
import { ProspeccionModule } from './components/prospeccion/prospeccion.module';
import { ShredComponentsModule } from '@intercam/shred-components';
import { UtilModule } from './components/util/util.module';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingContratoModule,
    ClientesModule,
    AltaContratosModule,
    SoporteModule,
    ProspeccionModule,
    ShredComponentsModule,
    UtilModule
  ],
  declarations: []
})
export class ContratoModule {
}
