import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './login/login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountComponent } from '../account/account.component';
import { ControlMessagesComponent } from 'src/app/shared/components/control-message/control-message.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from 'src/app/shared/_helpers/jwt.interceptor';
import { ErrorInterceptor } from 'src/app/shared/_helpers/error.interceptor';
import { EmailVerifyComponent } from './email-verify/email-verify.component';

@NgModule({
  declarations: [ EmailVerifyComponent,LoginComponent,UserRegisterComponent, AccountComponent,ControlMessagesComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule ,
    ReactiveFormsModule,
  ]
})
export class AccountModule { }
