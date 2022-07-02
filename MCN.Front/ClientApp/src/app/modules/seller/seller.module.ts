import { NgModule } from '@angular/core';
import { SellerComponent } from './seller.component';
import { SellerProfileComponent } from './pages/seller-profile/seller-profile.component';
import { JobModule } from '../job/job.module';
import { SellerRoutingModule } from './seller-routing.module';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './pages/chat/chat.component';
import { FormsModule } from '@angular/forms';
import { DateAgoPipe } from 'src/app/shared/pipes/date-ago.pipe';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { TagInputModule } from 'ngx-chips';


@NgModule({
  declarations: [
    SellerComponent, 
    SellerProfileComponent,
     ChatComponent,
     DateAgoPipe
  ],

  imports: [
    CommonModule,
    FormsModule,
    SellerRoutingModule, 
    SharedModule,
    TagInputModule,
  ]
})
export class SellerModule { }
