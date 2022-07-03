import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ApiService } from 'src/app/shared/services/common/api.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private  url="Chat/";

 
  params:HttpParams = new HttpParams();
  
    constructor(private apiService: ApiService) { }
   
  create(message:string,receiverId:number): Observable<any> {
  this.params = new HttpParams().set('message',message).set('SellerId',receiverId.toString())
      return this.apiService.get(this.url+'Create',this.params);
  }


  GetChats(sellerId): Observable<any> {
  this.params = new HttpParams().set('sellerId',sellerId)
  return this.apiService.get(this.url+'GetChats',this.params);
}

GetInbox(userId): Observable<any> {
  this.params = new HttpParams().set('userId',userId)
  return this.apiService.get(this.url+'GetInbox',this.params);
}
}
