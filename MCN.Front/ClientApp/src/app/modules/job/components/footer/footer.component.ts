import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  activItem:number=1;
  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  NavItemEvent(value:number){
    this.activItem=value;
    if(value==1){
      this._router.navigateByUrl('/job/home');
    }
    else if(value==4){
      this._router.navigateByUrl('/job/style');
    }
    else if(value==3){      
      this._router.navigateByUrl('/job/dashboard');
    }
  }
}
