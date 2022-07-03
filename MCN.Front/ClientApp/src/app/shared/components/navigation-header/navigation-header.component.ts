import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'navigation-header',
  templateUrl: './navigation-header.component.html',
  styleUrls: ['./navigation-header.component.scss']
})
export class NavigationHeaderComponent implements OnInit {
  @Output() back:EventEmitter<any>=new EventEmitter();
  @Input() header: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
