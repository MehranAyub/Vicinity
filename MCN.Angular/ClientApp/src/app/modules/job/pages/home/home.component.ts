import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // @ViewChild(GoogleMap, { static: false }) map: GoogleMap;
  center: google.maps.LatLngLiteral = { lat: 37.3382, lng: -121.8863 };
  zoom = 12;
  options: google.maps.MapOptions = {
    zoom: 12,
    mapTypeId: 'roadmap',
    panControl: false,
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: false,
    center: new google.maps.LatLng(37.3382, -121.8863),
  };
  public markers = [];

  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';
  imageBounds: google.maps.LatLngBoundsLiteral = {
    east: 10,
    north: 10,
    south: -10,
    west: -10,
  };
  vertices: google.maps.LatLngLiteral[] = [];
  
  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){
      /* Filter button */
      $('.filter-btn').on('click', function () {
       if ($('body').hasClass('filter-open') === true) {
         $('body').removeClass('filter-open');
       } else {
         $('body').addClass('filter-open');
       } 
       return false;
   });
   });
  }

}
