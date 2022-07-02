import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material/material.module';
import { AuthService } from './shared/services/auth/auth.service';
import { SnackBarService } from './shared/snack-bar.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { JwtInterceptor } from './shared/_helpers/jwt.interceptor';
import { ErrorInterceptor } from './shared/_helpers/error.interceptor';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,       
    FormsModule, ReactiveFormsModule,    
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    LoadingBarModule,
  
  ], 
  providers: [SnackBarService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
