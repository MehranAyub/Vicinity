import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { profile } from 'console';
import { UserService } from 'src/app/modules/account/userServices/user.service';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  chatData:any[]=[];
  public sellerId:number=0;
  public sendText:string="";
  public currentUser:any;
  constructor(private chatService:ChatService,private activatedRouter:ActivatedRoute,private router:Router,private userService:UserService) { 
    this.currentUser=JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit(): void {
    this.activatedRouter.queryParams.subscribe(params => {
      this.sellerId = (params['sellerId'] || 0);
      if(this.sellerId>0){
        this.getChats();
      } 
    }); 
    this.getSellerProfile()
  }
    sellerProfile:any;
  getSellerProfile(){
    this.userService.GetSellerProfile(this.sellerId).subscribe((response)=>{
      console.log(response);
      if(response?.statusCode==200){ 
        this.sellerProfile=response.data;
      }
    })
  }

  send(){ 
    this.chatService.create(this.sendText,this.sellerId).subscribe((res) => {
      if(res.statusCode==200){
        this.sendText="";
        this.getChats();
      }
    });
  }

  getChats(){
    this.chatService.GetChats(this.sellerId).subscribe((res) => {
      if(res.statusCode==200){
        this.chatData=res.data;
       }
  });
  }
  goBack(){
    this.router.navigate(['seller/seller-profile'], { queryParams: { id: this.sellerId }});
  }
}

