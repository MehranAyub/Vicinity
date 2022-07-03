import { Component, OnInit } from '@angular/core';
import { UserInterestDto } from '../../models/User';
import { JobService } from '../../service/jobService';

@Component({
  selector: 'app-add-services',
  templateUrl: './add-services.component.html',
  styleUrls: ['./add-services.component.scss']
})
export class AddServicesComponent implements OnInit {
userId:number=null;
Services:any[]=null;
interestDto:UserInterestDto={interestId:null,userId:null}
  constructor(private jobService:JobService) {
    let user=JSON.parse(localStorage.getItem('currentUser'));
   this.userId=user.user.id;
    this.interestDto.userId=user.user.id;
   }

  ngOnInit(): void {
    this.GetServices();
  }
  GetServices(){
this.jobService.GetServices(this.userId).subscribe((res)=>{
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
      console.log(res.data);
   
  }})
  }
}


