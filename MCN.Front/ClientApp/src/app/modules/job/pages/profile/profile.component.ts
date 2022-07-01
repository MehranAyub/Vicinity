import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { UserService } from 'src/app/modules/account/userServices/user.service';
import { CommonComponent } from 'src/app/shared/components/common/common.component';
import { ResponseStatus } from 'src/app/shared/enums/response-status';
import { AnimationService } from 'src/app/shared/services/animation/animation.service';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { NotificationTypeEnum, SnackBarService } from 'src/app/shared/snack-bar.service';
import { UserDto } from '../../models/User';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent extends CommonComponent implements OnInit {
public user:UserDto;
  constructor(private _authService:AuthService,private _bottomSheet: MatBottomSheet,private userService:UserService,
    private _snackbarService:SnackBarService,router:Router,animationService:AnimationService,private dataService:DataService) {
      super(router,animationService)
 
   }

  ngOnInit(): void {
    this.ProfileInitiate();
  }
  updateProfile(){
    this.dataService.updateData.next({id:2,name:this.user.firstName});
   //this.isDisable=true;
    this.userService.UpdateUser(this.user).subscribe((res)=>{
        console.log(res.data);
        if(res.statusCode==200){

        let currentUser=JSON.parse(localStorage.getItem('currentUser'));
         localStorage.setItem('currentUser',JSON.stringify({token:currentUser.token,user:res?.data}));
         this.ProfileInitiate();
         this._authService.currentUserSubject.next({token:currentUser.token,user:res?.data});
          this._snackbarService.openSnackFromComponent(res.swallText.html,NotificationTypeEnum.Success);
        }else{
          this._snackbarService.openSnackFromComponent('Something went wrong',ResponseStatus.Error);
        }
    })
  }

  dataReceivedByEvent(event){
    console.log("event",event);
  }
  ProfileInitiate(){
    let currentUser=JSON.parse(localStorage.getItem('currentUser'));
    if(currentUser){
      this.user=currentUser.user;
    }
  }
}


