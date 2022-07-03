import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldComponent } from '../components/input-field/input-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { GoogleMapsModule } from '@angular/google-maps';
import { SlideToggleComponent } from '../components/slide-toggle/slide-toggle.component';
import { NavigationHeaderComponent } from '../components/navigation-header/navigation-header.component';

const components = [ 
  InputFieldComponent,
  SlideToggleComponent,
  NavigationHeaderComponent
];

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,    
    GoogleMapsModule,
  ],
  exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    GoogleMapsModule,
    components
  ]
})
export class SharedModule { }
