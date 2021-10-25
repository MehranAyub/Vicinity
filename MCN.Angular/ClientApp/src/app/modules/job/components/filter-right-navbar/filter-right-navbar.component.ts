import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-filter-right-navbar',
  templateUrl: './filter-right-navbar.component.html',
  styleUrls: ['./filter-right-navbar.component.scss']
})
export class FilterRightNavbarComponent implements OnInit {

  @Input() isHide:boolean=true;
  @Output() onDismissEvent:EventEmitter<boolean>=new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {

  }

  DismissCardEvent(){
    this.isHide=true;
    this.onDismissEvent.emit(true);
  }

}
