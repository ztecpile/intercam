import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizatedGuard } from './core/guards/authorizated.guard';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: '', component: HomeComponent, 
    canActivate: [AuthorizatedGuard],
    children: [
      {
        path: 'contrato',
        loadChildren: () =>
          import('@intercam/contrato').then((m) => m.ContratoModule),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
