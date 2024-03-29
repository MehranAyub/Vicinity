import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonComponent } from 'src/app/shared/components/common/common.component';
import { AnimationService, AnimationType } from 'src/app/shared/services/animation/animation.service';
import { NotificationTypeEnum, SnackBarService } from 'src/app/shared/snack-bar.service';
import { UserInterestDto } from '../../models/User';
import { JobService } from '../../service/jobService';

@Component({
  selector: 'app-add-services',
  templateUrl: './add-services.component.html',
  styleUrls: ['./add-services.component.scss']
})
export class AddServicesComponent extends CommonComponent implements OnInit {
userId:number=null;
Services:any;
interestDto:UserInterestDto={interestId:null,userId:null}
  constructor(_router:Router,animationService:AnimationService,private jobService:JobService,private _snackbarService:SnackBarService) {
    super(_router,animationService);
    let user=JSON.parse(localStorage.getItem('currentUser'));
   this.userId=user.user.id;
    this.interestDto.userId=user.user.id;
   }


  ngOnInit(): void {
    this.GetServices();
  }
  GetServices(){
this.jobService.GetServices().subscribe((res)=>{
if(res){
  console.log(res.data);
this.Services=res.data;
}
})
}
AddService(id){
  console.log('added',id)
  this.interestDto.interestId=id;
  this.jobService.AddService(this.interestDto).subscribe((res)=>{
    if(res){
      this._snackbarService.openSnack("Service added Successfully",NotificationTypeEnum.Success); 
   
  }})
  }

goToBack(event){
  this.navigateToRoute('/job/profile',null,AnimationType.slideToRight);
}
}


