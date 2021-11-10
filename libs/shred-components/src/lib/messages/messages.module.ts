import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';

import { AlertComponent } from './alert/alert.component';
import { LightboxComponent } from './lightbox/lightbox.component';
import { ErrorComponent } from './error/error.component';
import { AlertImagesComponent } from './alert-images/alert-images.component';
import { PopDirective } from './pop-caja/pop-caja.directive';
import { PreloaderComponent } from './preloader/preloader.component';
import { LightboxConfDirective  } from './lightboxConf/lightboxConf.directive';
import { PestanaComponent } from './pestana/pestana.component';
import { LightboxConfComponent } from './lightboxConf/lightboxConf.component';
import { AlertLoginComponent } from './alert-login/alert-login.component';


@NgModule({
  declarations: [
    AlertComponent,
    LightboxComponent,
    //CierreComponent,
    ErrorComponent,
    AlertImagesComponent,
    PopDirective,
    PreloaderComponent,
    LightboxConfDirective,
    LightboxConfComponent,
    PestanaComponent,
    AlertLoginComponent,

  ],
  providers: [],
  imports: [CommonModule, FormsModule, TranslocoModule],
  exports: [
    LightboxComponent,
    //CierreComponent,
    AlertComponent,
    ErrorComponent,
    AlertImagesComponent,
    PopDirective,
    PreloaderComponent,
    LightboxConfDirective,
    PestanaComponent,
    AlertLoginComponent
  ],
})
export class MessagesModule {}
