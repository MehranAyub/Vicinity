import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CommonComponent } from 'src/app/shared/components/common/common.component';
import { AnimationService, AnimationType } from 'src/app/shared/services/animation/animation.service';
import { DataService } from '../../service/data.service';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends CommonComponent implements OnInit {
  @Input() userData: any;
  @Output() anchorLinkClick = new EventEmitter();
  constructor(_router:Router,animationService:AnimationService,private dataService:DataService) {
    super(_router,animationService);
   }

  ngOnInit(): void {
    this.anchorLinkClick.emit({LastName:'Ayub',Cast:'Deol'})
    console.log(this.userData);
    this.dataService.updateData.subscribe((res)=>{
      console.log(res);
    })
    // document.querySelector("body")?.classList.add("faisal")
    $(document).ready(function(){
    $('.menu-btn').on('click', function () {
      if ($('body').hasClass('menu-open') === true) {
        $('body').removeClass('menu-open');
        $('bodyParent').removeClass('menu-open');
      } else {
        $('body').addClass('menu-open');
        $('bodyParent').addClass('menu-open');
      }

      return false;
  });
}); 
  }

  profile(){
    this.anchorLinkClick.emit({lastName:'Faisal',Specialization:'Software Enginerring'})
    // this.navigateToRoute('/job/profile',null,AnimationType.slideToLeft);
  }
  dashboard(){
    this.navigateToRoute('/job/dashboard',null,AnimationType.slideToTop);
  } 

}
