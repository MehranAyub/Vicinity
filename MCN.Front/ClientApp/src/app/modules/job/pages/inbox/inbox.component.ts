import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from 'src/app/modules/seller/services/chat.service';
import { AnimationService } from 'src/app/shared/services/animation/animation.service';
import { SnackBarService } from 'src/app/shared/snack-bar.service';
import { JobService } from '../../service/jobService';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {
chats:any=[];
  constructor(private chatService:ChatService,private _snackbarService:SnackBarService,router:Router,animationService:AnimationService) {
 
   }
  ngOnInit(): void {
    this.GetInbox();
  }

  dataReceivedByEvent(event){
    console.log("event",event);
  }
  GetInbox(){
    let currentUser=JSON.parse(localStorage.getItem('currentUser'));
    if(currentUser){
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
console.log(id);
  }
}
