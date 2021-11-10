import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { SearchFilter } from '../../models/mapService';
declare var $:any;
@Component({
  selector: 'app-filter-right-navbar',
  templateUrl: './filter-right-navbar.component.html',
  styleUrls: ['./filter-right-navbar.component.scss']
})
export class FilterRightNavbarComponent implements OnInit {

  autoTicks = true;
  disabled = false;
  invert = false;
  max = 500;
  min = 0;
  showTicks = true;
  step = 1;
  thumbLabel = true;
  value = 0;
  vertical = false;
  tickInterval = 1;
  public searchFilter:SearchFilter={Keyword:'',MinDistance:0,MaxDistance:500,Interests:[],SearchLat:0,SearchLng:0};
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

//   public requestAutocompleteItems = (text: string): Observable<any> => {
//     const url = `https://api.github.com/search/repositories?q=${text}`;
//     return this.http
//         .get(url)
//         .map((data: any) => data.items.map(item => item.full_name));
// };

  // DismissCardEvent(){
  //   this.isHide=true;
  //   this.onDismissEvent.emit(true);
  // }

}
