import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material/material.module';
import { AuthService } from './shared/services/auth/auth.service';
import { SnackBarService } from './shared/snack-bar.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomSnackBarComponent } from './shared/components/custom-snack-bar/custom-snack-bar.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,       
    FormsModule, ReactiveFormsModule
  ],
  providers: [SnackBarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
