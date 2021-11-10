import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', 
    children: [
        {
        path: 'clientes',
        loadChildren: () => import('./components/clientes/clientes.module').then(m => m.ClientesModule),
        }
    ]
  } ,
  {
    path: '', 
    children: [
        {
        path: 'contratos',
        loadChildren: () => import('./components/contratos/alta.contratos.module').then(m => m.AltaContratosModule),
        }
    ]
  },
  {
    path: '', 
    children: [
        {
        path: 'soporte',
        loadChildren: () => import('./components/soporte/soporte.module').then(m => m.SoporteModule),
        }
    ]
  },
  {
    path: '', 
    children: [
        {
        path: 'prospeccion',
        loadChildren: () => import('./components/prospeccion/prospeccion.module').then(m => m.ProspeccionModule),
        }
    ]
  }
];
  
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutingContratoModule { }