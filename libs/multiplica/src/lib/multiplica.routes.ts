import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', 
    children: [
        {
        path: 'factura',
        loadChildren: () => import('./components/operacion-divisas/facturas/facturas.module').then(m => m.FacturasModule),
        }
    ]
  }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AppRoutingMultiplicaModule { }