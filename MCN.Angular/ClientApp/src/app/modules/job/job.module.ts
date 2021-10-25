import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobRoutingModule } from './job-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { JobComponent } from './job.component';
import { FilterRightNavbarComponent } from './components/filter-right-navbar/filter-right-navbar.component';


@NgModule({
  declarations: [
    DashboardComponent,
    JobComponent,
    FilterRightNavbarComponent
  ],
  imports: [
    CommonModule,
    JobRoutingModule
  ]
})
export class JobModule { }
