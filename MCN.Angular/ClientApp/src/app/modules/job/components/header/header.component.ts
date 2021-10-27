import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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

}
