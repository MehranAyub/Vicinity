import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators, ValidationErrors } from '@angular/forms'; 
import { UserService } from '../userServices/user.service';
import { SnackBarService, NotificationTypeEnum } from 'src/app/shared/snack-bar.service';
import { Router } from '@angular/router';
import { DialogService } from 'src/app/shared/services/common/dialog.service';
import { User } from '../models/user';
import { Role } from '../models/role';
import { SearchInputByGoogleMapComponent } from '../../job/components/search-input-by-google-map/search-input-by-google-map.component';
import { Subscription } from 'rxjs/internal/Subscription';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { AccountDataService } from '../services/accountDataService';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit,OnDestroy {
  createUserForm:any;
  isEmailVerify:boolean=false;
  userCreate:User={id:0,email:'',firstName:'',gender:'',lastName:'',password:'',role:Role.User,username:'',token:'',latitude:0,longitude:0,address:'',phone:''};
  constructor(private _dataService:AccountDataService ,private formBuilder: FormBuilder,private _bottomSheet: MatBottomSheet,private router:Router,private userService:UserService,private snackbarService:SnackBarService,private dialogService:DialogService) { 

    this.createUserForm=this.formBuilder.group({
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      phone:['',[Validators.required]],
      address:['',[Validators.required]],
      password:['',[Validators.required]],
      confirmPassword:['',[Validators.required]]
    });
  }

  ngOnInit() {
  }

  getFormValidationErrors() {
    Object.keys(this.createUserForm.controls).forEach(key => {

    const controlErrors: ValidationErrors = this.createUserForm.get(key).errors;
    if (controlErrors != null) {
          Object.keys(controlErrors).forEach(keyError => {
            console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
          });
        }
      });
    }
    showConfirmPassword:boolean=false;
    onKey(event: any) { // without type info
      //this.values += event.target.value + ' | ';
  
  
      if(this.createUserForm.controls['password'].value!=event.target.value)
      {
        this.showConfirmPassword=true;
      }
      else
      {
        this.showConfirmPassword=false;
      }
  
    }

  OnUserCreation() {

    this.getFormValidationErrors();

    if (this.createUserForm.dirty && this.createUserForm.valid)
    {
      if(this.createUserForm.controls['password'].value==this.createUserForm.controls['confirmPassword'].value)
      {
      this.userCreate.email=this.createUserForm.controls['email'].value;  
      this.userCreate.firstName=this.createUserForm.controls['firstName'].value;  
      this.userCreate.lastName=this.createUserForm.controls['lastName'].value;
      this.userCreate.password=this.createUserForm.controls['password'].value;
      this.userCreate.address=this.createUserForm.controls['address'].value;
      this.userCreate.phone=this.createUserForm.controls['phone'].value;
      this._dataService._emailPasscode.email=this.userCreate.email;
        this.userService.register(this.userCreate).subscribe((response)=>{
          console.log(response);
          if(response.statusCode==200){
            this.router.navigateByUrl('/account/email-verify'); 
            this.snackbarService.openSnack(response.swallText.title,NotificationTypeEnum.Success);
          }else{
            this.snackbarService.openSnack("Something went wrong",NotificationTypeEnum.Danger);
          }
        });

    }
     
    }
  } 


  // registerUser(){
  //   this.dialogService.clear();
  //   this.dialogService.open(SearchInputByGoogleMapComponent,{
  //     height: '80vh',
  //     width: '95vw',
  //     panelClass: 'SearchInputByGoogleMapComponent-dialog' 
  //   });
  // }


  
  private _bottomSheetDismissSubscription: Subscription;
  private _bottomSheetRef: MatBottomSheetRef;
  // actionConfirmData: ActionConfirmModel = {
  //   acceptLabel: "Login",
  //   rejectLabel: "",
  //   id: "verifyPin",
  //   heading: "Account found",
  //   description: "An account already exists for this phone number."
  // }

  registerUser(): void {
    this._bottomSheetRef = this._bottomSheet.open(SearchInputByGoogleMapComponent, {
      data: null,
      disableClose: false,
      panelClass: 'bottomsheet-container'
    });

    this._bottomSheetDismissSubscription = this._bottomSheetRef
      .afterDismissed()
      .subscribe((response: any) => {
        console.log(response);
        if (response?.code =='200' ) {
          this.createUserForm.controls.address.setValue(response?.data?.formatted_address);
          // this.createUserForm.controls['address'].setValue=response?.data?.formatted_address;
          this.userCreate.latitude=response?.data?.geometry?.location?.lat();
          this.userCreate.longitude=response?.data?.geometry?.location?.lng();
          console.log(this.userCreate);
        }
      });
  }

  ngOnDestroy(): void {
    this._bottomSheetRef = null;
    if (this._bottomSheetDismissSubscription) {
      this._bottomSheetDismissSubscription.unsubscribe();
    }
  }


  
  cancel(){
    this.dialogService.clear();
  }
 
}
