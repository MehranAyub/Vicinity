import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
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
  constructor(private http: HttpClient,
    public _elementRef: ElementRef,private _authService:AuthService,private _bottomSheet: MatBottomSheet,private userService:UserService,
    private _snackbarService:SnackBarService,router:Router,animationService:AnimationService,private dataService:DataService) {
      super(router,animationService)
 
   }
   SelectedFile:File=null;
   image:any=null;
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
      this.userService.GetProfileImg(this.user.id).subscribe((response)=>{
        if(response?.data){
          this.image=response.data;
      
        }
      })
    }
  }
  browseImg(){
    let dataInput = this._elementRef.nativeElement.querySelector("#browseImage");
    dataInput.click();
  }
  onFileSelected(event){
    this.SelectedFile=<File>event.target.files[0];
    console.log(this.SelectedFile);
    if(this.SelectedFile!=undefined){
      this.onUpload();
    }
  }

  onUpload(){ 
    const form = new FormData();
    form.append('image',this.SelectedFile,this.SelectedFile.name);
  
    this.http.post('http://localhost:62489/api/Users/UserImg/'+this.user.id, form,{responseType: 'text'}).subscribe((res)=>{
      console.log(res);
this.image=res;
 
          })


  }
}


