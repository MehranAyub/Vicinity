import { Component, OnInit } from '@angular/core';
import { JobService } from '../../service/jobService';

@Component({
  selector: 'app-add-services',
  templateUrl: './add-services.component.html',
  styleUrls: ['./add-services.component.scss']
})
export class AddServicesComponent implements OnInit {
userId:number=null;
Services:any;
  constructor(private jobService:JobService) {
    let user=JSON.parse(localStorage.getItem('currentUser'));
    console.log(user.user)
    this.userId=user.user.id;
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
}
