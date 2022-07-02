import { NgModule } from '@angular/core';
import { SellerComponent } from './seller.component';
import { SellerProfileComponent } from './pages/seller-profile/seller-profile.component';
import { JobModule } from '../job/job.module';
import { SellerRoutingModule } from './seller-routing.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { TagInputModule } from 'ngx-chips';


@NgModule({
  declarations: [
    SellerComponent, 
    SellerProfileComponent
  ],

  imports: [
    CommonModule,
    SellerRoutingModule,
    JobModule,
    SharedModule,
    TagInputModule,
  ]
})
export class SellerModule { }
