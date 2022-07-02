import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
declare var $:any;
@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  constructor(private auth:AuthService,private route:Router) { 
    let currentUser=JSON.parse(localStorage.getItem('currentUser'));
    if(currentUser){

    }
    else{
      this.route.navigate(['account/login'])
    }
  }

  ngOnInit(): void {

    $(document).ready(function(){
      /* Filter button */
   $('.filter-close').on('click', function () {
       if ($('body').hasClass('filter-open') === true) {
         $('body').removeClass('filter-open');
       }
   });
   });
  }
Logout(){
  this.auth.logout();
}
}
