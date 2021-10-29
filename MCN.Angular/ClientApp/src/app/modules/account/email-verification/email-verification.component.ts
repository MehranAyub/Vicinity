import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from 'src/app/shared/services/common/ValidationService'; 
import { emailDto, LoginDto, CreateUserDto } from '../models/UserLogin';
import { SnackBarService, NotificationTypeEnum } from 'src/app/shared/snack-bar.service';
import { DialogService } from 'src/app/shared/services/common/dialog.service';
import { UserRegisterComponent } from '../user-register/user-register.component';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.scss']
})
export class EmailVerificationComponent implements OnInit {

  isEmailVerify:boolean=false
  userLogin:emailDto={userName:''};
  loginDto:LoginDto={email:'',passcode:''};
  createUserDto:CreateUserDto={Address:'',BaseURL:'',Country:'',Email:'',FirstName:'',Gender:'',IpAddress:'',LastName:'',Password:'',Phone:''};

  isLoading = false;
  formResetToggle = true;
  modalClosedCallback!: () => void;
  loginStatusSubscription: any;

  statusCode:boolean=false;
  @Input()
  isModal = false;


  
  constructor(private _authService:AuthService,
    private router:Router,
    private formBuilder: FormBuilder,
    private _snackbarService:SnackBarService,
    private dialogService:DialogService,
    private aroute: ActivatedRoute)
    {

      this.userForm = this.formBuilder.group({

        email: ['', [Validators.required, ValidationService.emailValidator]]

      }); 

    }
    ngOnInit(){
      
    }

    userForm:any;
  OnVerifyEmailAddress() {
    this.isLoading=true; 
      this._authService.ReGenerateEmailVerificationMail(this.createUserDto).subscribe(response=>{
        console.log(response);
        if(response.statusCode==1){
          this._snackbarService.openSnack(response.swallText.title,NotificationTypeEnum.Success);         
          this.statusCode=true;
          this.loginDto.email=this.userLogin.userName;
        }else{
          this._snackbarService.openSnack(response.swallText.html,NotificationTypeEnum.Danger);
        }
        this.isLoading=false;
        // this.vm=x;
        // console.log(this.vm);
        // if(this.vm.statusCode==200)
        // {
        //   if(this.paramData.formUrl==undefined||this.paramData.formUrl=='')
        //   {
        //     this.router.navigateByUrl("password",{state: { Email:emailId }});
        //   }
        //   else
        //   {
        //     this.router.navigateByUrl(this.paramData.formUrl+"/"+"password",{state: { Email:emailId }});
        //   }
        // }
      });
    // }
  }

Login(){
  this.isLoading=true;
  this._authService.VerifyEmailPasscode(this.loginDto.passcode,this.loginDto.email).subscribe((response)=>{
  console.log(response);  
  this.isLoading=false;
  if(response.statusCode==200){
    this._snackbarService.openSnack(response.swallText.html,NotificationTypeEnum.Success);  
    this.dialogService.clear();

  }else{
    this._snackbarService.openSnack(response.swallText.html,NotificationTypeEnum.Danger);
  }
});
  }

  registerUser(){
    this.dialogService.clear();
    this.dialogService.open(UserRegisterComponent);
  }
  cancel(){
    this.dialogService.clear();
  }

  closeModal(){

  }

  showErrorAlert(param1:any,param2:any){
    alert(param1);
  }
}
