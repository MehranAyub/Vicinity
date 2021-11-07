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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isEmailVerify:boolean=false
  isEmailVerifyWithAuthToken:boolean=false;
  loginDto:LoginDto={email:'',password:''};
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
    this.createUserDto.Email=this.loginDto.email;
      this._authService.ValidateEmail(this.loginDto.email).subscribe(response=>{
        console.log(response);
        if(response.statusCode==200){
          //this._snackbarService.openSnack(re.ksponse.swallText.title,NotificationTypeEnum.Success,'top');         
          this.isEmailVerify=true;
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
  this._authService.ValidateEmailPassword(this.loginDto.password,this.loginDto.email).subscribe((response)=>{
  console.log(response);  
  this.isLoading=false;
  if(response.statusCode==200){
    this.isEmailVerify=true;
    this.isEmailVerifyWithAuthToken=true;
    this.router.navigateByUrl('/job/home');
    this._snackbarService.openSnack(response.swallText.html,NotificationTypeEnum.Success);  

  }else{
    this._snackbarService.openSnack(response?.swallText?.html,NotificationTypeEnum.Danger);
  }
});
  }

  
  

  closeModal(){

  }

  showErrorAlert(param1:any,param2:any){
    alert(param1);
  }

  isEmailValidate:boolean=false;
  emailRegExp: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  validateEmail(email: string) {
    this.isEmailValidate=this.emailRegExp.test(email);
  }
}
