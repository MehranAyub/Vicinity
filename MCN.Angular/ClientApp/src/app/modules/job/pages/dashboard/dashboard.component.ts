import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isHideFilterCard:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

  SearchFilterClick(value:boolean){
    if(value==true){
      this.isHideFilterCard=true;
    }else{
      this.isHideFilterCard=false;
    }
   
  }
}
