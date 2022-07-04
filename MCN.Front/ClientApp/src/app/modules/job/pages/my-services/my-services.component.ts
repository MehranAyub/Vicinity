import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonComponent } from 'src/app/shared/components/common/common.component';
import { AnimationService, AnimationType } from 'src/app/shared/services/animation/animation.service';
import { NotificationTypeEnum, SnackBarService } from 'src/app/shared/snack-bar.service';
import { UserInterestDto } from '../../models/User';
import { JobService } from '../../service/jobService';

@Component({
  selector: 'app-my-services',
  templateUrl: './my-services.component.html',
  styleUrls: ['./my-services.component.scss']
})
export class MyServicesComponent extends CommonComponent implements OnInit {
  userId:number=null;
  Services:any;
  interestDto:UserInterestDto={interestId:null,userId:null}
    constructor(_router:Router,animationService:AnimationService,private jobService:JobService,private _snackbarService:SnackBarService) {
      super(_router,animationService);
      let user=JSON.parse(localStorage.getItem('currentUser'));
     this.userId=user.user.id;
    this.interestDto.userId=this.userId;
     }
  
  
    ngOnInit(): void {
      this.GetServices();
    }
    GetServices(){
  this.jobService.GetUserServices(this.userId).subscribe((res)=>{
  if(res){
    
  this.Services=res.data;
  }
  })
  }
  RemoveService(id){
    this.interestDto.interestId=id;
    this.jobService.RemoveService(this.interestDto).subscribe((res)=>{
      this._snackbarService.openSnack("Service Removed Successfully",NotificationTypeEnum.Warning); 
     this.ngOnInit();
  })
}  
  goToBack(event){
    this.navigateToRoute('/job/profile',null,AnimationType.slideToRight);
  }
  }
