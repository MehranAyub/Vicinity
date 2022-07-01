import { NgModule } from '@angular/core';
import { SellerComponent } from './seller.component';
import { SellerProfileComponent } from './pages/seller-profile/seller-profile.component';
import { JobModule } from '../job/job.module';
import { SellerRoutingModule } from './seller-routing.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    SellerComponent, 
    SellerProfileComponent
  ],

  imports: [
    CommonModule,
    SellerRoutingModule,
    JobModule
   
  ]
})
export class SellerModule { }
