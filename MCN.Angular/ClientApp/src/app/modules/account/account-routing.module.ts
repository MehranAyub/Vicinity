import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';
import { UserRegisterComponent } from './user-register/user-register.component';


const routes: Routes = [ 
  {
    path:'',
    component:AccountComponent,
    children: [ 
    {
      path: 'login',
      component: LoginComponent
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
