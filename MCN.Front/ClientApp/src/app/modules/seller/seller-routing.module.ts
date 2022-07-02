import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/shared/_helpers/auth.guard';
import { ChatComponent } from './pages/chat/chat.component';
import { SellerProfileComponent } from './pages/seller-profile/seller-profile.component';
import { SellerComponent } from './seller.component';

const routes: Routes = [ 
  {
  path:'',
  component:SellerComponent,
  children: [
  {
  path: 'seller-profile',
  component: SellerProfileComponent,
  canActivate:[AuthGuard]
  },
  {
    path: 'chat',
    component: ChatComponent,
    canActivate:[AuthGuard]
    }
  
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
