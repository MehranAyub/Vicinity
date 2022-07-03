import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from 'src/app/modules/seller/services/chat.service';
import { CommonComponent } from 'src/app/shared/components/common/common.component';
import { AnimationService, AnimationType } from 'src/app/shared/services/animation/animation.service';
import { SnackBarService } from 'src/app/shared/snack-bar.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent extends CommonComponent implements OnInit {
chats:any=[];
firstName:string;
  constructor(private chatService:ChatService,private _snackbarService:SnackBarService,public router:Router,animationService:AnimationService) {
    super(router,animationService);
   }
  ngOnInit(): void {
    this.GetInbox();
  }

  goToBack(event){
    this.navigateToRoute('/job/profile',null,AnimationType.slideToRight);
  }
  GetInbox(){
    let currentUser=JSON.parse(localStorage.getItem('currentUser'));
    if(currentUser){
      this.firstName=currentUser.user.firstName;
      let userId=currentUser.user.id;
      this.chatService.GetInbox(userId).subscribe((response)=>{
        if(response?.data){
          this.chats=response.data;
      console.log(response.data);
        }
      })
    }
  }
  getChat(id){
    this.router.navigate(['seller/chat'], { queryParams: { sellerId:id,inbox:true }}),AnimationType.slideToRight;
    // this.navigateToRoute('/job/dashboard',null,AnimationType.slideToTop);
  }
}
