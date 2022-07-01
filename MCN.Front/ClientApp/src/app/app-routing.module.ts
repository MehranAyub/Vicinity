import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/_helpers/auth.guard';

const routes: Routes = [
 
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'account'
      },
      {
        path: 'account',
        loadChildren: () =>
          import('./modules/account/account.module').then(
            (m) => m.AccountModule
          )
      },
      {
        path: 'job',
        loadChildren: () =>
          import('./modules/job/job.module').then(
            (m) => m.JobModule
          ),
          
          canActivate:[AuthGuard]
      }
      ,
      {
        path: 'seller',
        loadChildren: () =>
          import('./modules/seller/seller.module').then(
            (m) => m.SellerModule
          ),
          canActivate:[AuthGuard]
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
