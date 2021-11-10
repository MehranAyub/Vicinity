import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'job'
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
          )
      }
     
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
