import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobRoutingModule } from './job-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { JobComponent } from './job.component';


@NgModule({
  declarations: [
    DashboardComponent,
    JobComponent
  ],
  imports: [
    CommonModule,
    JobRoutingModule
  ]
})
export class JobModule { }
