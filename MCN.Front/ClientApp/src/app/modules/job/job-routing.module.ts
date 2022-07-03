import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/_helpers/auth.guard';
import { JobComponent } from './job.component';
import { AddServicesComponent } from './pages/add-services/add-services.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { InboxComponent } from './pages/inbox/inbox.component';
import { MyServicesComponent } from './pages/my-services/my-services.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { StyleComponent } from './pages/style/style.component';

const routes: Routes = [ 
  {
  path:'',
  component:JobComponent,
  children: [
  {
  path: '',
  component: HomeComponent,
  canActivate:[AuthGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'inbox',
    component: InboxComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'add-services',
    component: AddServicesComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'my-services',
    component: MyServicesComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'style',
    component: StyleComponent
  }
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobRoutingModule { }
