import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { Subscription } from 'rxjs';
import { Marker } from '../../models/mapService';
declare var $:any;

const Marker = {
  position: {
    lat: 37.3382,
    lng: -121.8863,
  },
  title: '',
  options: {
    animation: google.maps.Animation.DROP,
    icon: {
      url: 'assets/img/PickPin.svg',
    },
  },
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild(GoogleMap, { static: false }) googleMap: GoogleMap;

  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow;
  
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
  public markers:Marker[] = [];
  public latLong=[{firstName:'Niazi',lastName:'Town',lat:33.599239344482179,long:73.009821019136709},{firstName:'Misrial',lastName:'Chowk',lat:33.602050353186954,long:72.98370354939469}];

  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';
  imageBounds: google.maps.LatLngBoundsLiteral = {
    east: 10,
    north: 10,
    south: -10,
    west: -10,
  };
  vertices: google.maps.LatLngLiteral[] = [];
  
  constructor() { 

    
  }

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


   navigator.geolocation.getCurrentPosition((position) => {
    this.center = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    }
  });
  
   this.latLong.forEach((item)=>{

    this.markers.push({
      position: {
        lat: item.lat,
        lng: item.long,
      },
      title:'Marker title '+ item.firstName+item.lastName,
      label: {
        color: 'red',
        text: 'Marker label ' + (this.markers.length + 1),
      },
      info: 'Marker info ' + (this.markers.length + 1),

      option: {
        animation: google.maps.Animation.DROP,
        icon: {
          url: 'assets/img/PickPin.svg',
        },
      },
    });
   })



  }

  infoContent = ''
  openInfoWindow(marker: MapMarker) {
    this.infoContent = "Faisal Ayub here <br/> ABCEFBERIV"
    this.info.open(marker);
  }

}
