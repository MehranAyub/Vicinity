import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-filter-right-navbar',
  templateUrl: './filter-right-navbar.component.html',
  styleUrls: ['./filter-right-navbar.component.scss']
})
export class FilterRightNavbarComponent implements OnInit {

  // @Input() isHide:boolean=true;
  // @Output() onDismissEvent:EventEmitter<boolean>=new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {

    $(document).ready(function(){
   $('.filter-close').on('click', function () {
       if ($('body').hasClass('filter-open') === true) {
         $('body').removeClass('filter-open');
       }
   });
   });
  }

  // DismissCardEvent(){
  //   this.isHide=true;
  //   this.onDismissEvent.emit(true);
  // }

}
