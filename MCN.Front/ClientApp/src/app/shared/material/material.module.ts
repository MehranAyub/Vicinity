import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule } from '@angular/material/dialog'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatInputModule } from '@angular/material/input'
import { MatBottomSheetModule } from '@angular/material/bottom-sheet'
import {MatSliderModule} from '@angular/material/slider';
// import {
//   MatButtonModule,
//   MatCardModule,
//   MatDialogModule,
//   MatInputModule,
//   MatTableModule,
//   MatSortModule,
//   MatToolbarModule,
//   MatMenuModule,
//   MatIconModule,
//   MatProgressSpinnerModule,
//   MatCheckboxModule,
//   MatDividerModule,
//   MatProgressBarModule,
//   MatStepperModule,
//   MatFormFieldModule,
//   MatDatepickerModule,
//   MatNativeDateModule,
//   MatRadioModule,
//   MatOptionModule,
//   MatSlideToggleModule,
//   MatSliderModule,
//   MatAutocompleteModule,
//   MatExpansionModule,
//   MatSidenavModule,
//   MatTabsModule,
//   MatSnackBarModule,
//   MatPaginatorModule,
//   MatTooltipModule,
//   MatListModule, 
//   MatBottomSheetModule,
//   MatChipsModule
// } from '@angular/material'

import {
  MatSelectModule
} from '@angular/material/select'
import { MatSnackBarModule } from '@angular/material/snack-bar'


@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatFormFieldModule, 
    MatSnackBarModule, 
    MatBottomSheetModule,
    MatSliderModule,    
    MatSlideToggleModule,
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatFormFieldModule, 
    MatSnackBarModule, 
    MatBottomSheetModule,
    MatSliderModule,
    MatSlideToggleModule,
  ]
})
export class MaterialModule { }