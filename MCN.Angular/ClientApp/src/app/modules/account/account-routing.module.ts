import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { UserRegisterComponent } from './user-register/user-register.component';


const routes: Routes = [ 
  {
    path:'',
    component:AccountComponent,
    children: [ 
    {
      path: 'login',
      component: EmailVerificationComponent
    },
    {
      path: 'register',
      component: UserRegisterComponent
    },
]
}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
