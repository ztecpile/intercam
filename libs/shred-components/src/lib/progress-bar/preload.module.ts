import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreloadRoutingModule } from './preload-routing.module';
import { PreloadComponent } from './preload.component';
import { TranslocoModule } from '@ngneat/transloco';


@NgModule({
  declarations: [PreloadComponent],
  imports: [
    CommonModule,
    // PreloadRoutingModule,
    TranslocoModule
    
  ]
})
export class PreloadModule { }
