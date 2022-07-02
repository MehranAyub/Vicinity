import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/modules/account/userServices/user.service';
import { UserDto } from 'src/app/modules/job/models/User';
import { CommonComponent } from 'src/app/shared/components/common/common.component';
import { AnimationService } from 'src/app/shared/services/animation/animation.service';
import { AuthService } from 'src/app/shared/services/auth/auth.service';


@Component({
  selector: 'app-seller-profile',
  templateUrl: './seller-profile.component.html',
  styleUrls: ['./seller-profile.component.scss']
})
export class SellerProfileComponent extends CommonComponent implements OnInit {
  public user:UserDto;
  public Interests:any;
  sellerId:number=0;
  id:number;
    constructor(private userService:UserService,router:Router,animationService:AnimationService,private route: ActivatedRoute) {
        super(router,animationService)
       
     }
  
    ngOnInit(): void {
      // this.id = Number(this.route.snapshot.paramMap.get('id'))
      // console.log('id got in seller profile'+this.id)
      // this.GetSellerProfile(this.id);

     this.route.queryParams.subscribe(params => {
        this.sellerId = (params['id'] || 0);
        if(this.sellerId>0){
          this.GetSellerProfile(this.sellerId);
        }
        else{
          this.router.navigate(['/job/home'])
        }
      });

    }

    GetSellerProfile(id){
this.userService.GetSellerProfile(id).subscribe((res=>{
  console.log(res.data);
  this.user=res.data;
this.Interests=res.data.interests;

}))
    }

    
    GoToChat(){
      this.router.navigate(['seller/chat'], { queryParams: { sellerId: this.sellerId }});
    }
    
}
