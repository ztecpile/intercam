/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ContenedorComponent } from './components/contenedor/contenedor.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

//rutas
import { AppRoutingModule } from './app.routing';

//modulos - librerias
import { ModelModule } from '@intercam/model';
import { ShredComponentsModule } from '@intercam/shred-components';
import { ContratoModule } from '@intercam/contrato';
import { MultiplicaModule } from '../../../../libs/multiplica/src/lib/multiplica.module';

import { CustomHttpInterceptor } from './Interceptor/CustomHttpInterceptor';
import { TranslocoRootModule } from './transloco/transloco-root.module';
import { MaterialModule } from './material-module';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SpinnerInterceptor } from './Interceptor/SpinnerInterceptor';

//Archivos Lottie
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { ProspeccionModule } from 'libs/contrato/src/lib/components/prospeccion/prospeccion.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MenuComponent } from './components/menu/menu.component';
import { SubMenuComponent } from './components/sub-menu/sub-menu.component';
import { DialogPreciosComponent } from './components/dialog-precios/dialog-precios.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FilterMenuPipe } from './filter/filter-menu.pipe';
import { AssumptionsComponent } from './pages/assumptions/assumptions.component';
export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    ContenedorComponent,
    SpinnerComponent,
    MenuComponent,
    SubMenuComponent,
    DialogPreciosComponent,
    LoginComponent,
    HomeComponent,
    FilterMenuPipe,
    AssumptionsComponent
  ],
  imports: [
  BrowserModule,
    MatTabsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    ModelModule,
    ShredComponentsModule,
    ContratoModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TranslocoRootModule,
    LottieModule.forRoot({ player: playerFactory }),
    ProspeccionModule,
    MultiplicaModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpInterceptor,
      multi: true,
    },
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  exports: [MenuComponent]
})
export class AppModule {}
