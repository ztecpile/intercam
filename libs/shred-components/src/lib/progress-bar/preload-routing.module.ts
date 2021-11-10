import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreloadComponent } from './preload.component';

const routes: Routes = [{ path: '', component: PreloadComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreloadRoutingModule { }
