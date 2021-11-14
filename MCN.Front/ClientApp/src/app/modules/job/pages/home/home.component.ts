import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { Subscription } from 'rxjs';
import { Marker, SearchFilter, SearchResultDto } from '../../models/mapService';
import { JobService } from '../../service/jobService';
declare var $:any;

const marker:Marker = {
  position: {
    lat: 37.3382,
    lng: -121.8863,
  },
  title: '',
  options: {
    animation: google.maps.Animation.DROP,
    draggable:false,
    icon: {
      url: 'assets/img/PickPin.svg',
    },
  },
  icon:'assets/img/PickPin.svg',
  data:{id:0,title:'',gender:'',email:'',distance:0,lastName:'',firstName:'',longitude:0,latitude:0}
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;

  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow;
  
  center: google.maps.LatLngLiteral = { lat: 0, lng: 0 };
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
  public latLongs:SearchResultDto[]=[];
  // =[{firstName:'Niazi',lastName:'Town',lat:33.599239344482179,long:73.009821019136709},{firstName:'Misrial',lastName:'Chowk',lat:33.602050353186954,long:72.98370354939469}];

  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';
  imageBounds: google.maps.LatLngBoundsLiteral = {
    east: 10,
    north: 10,
    south: -10,
    west: -10,
  };
  vertices: google.maps.LatLngLiteral[] = [];
  
  constructor(private _jobService:JobService) { 

    
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


   navigator?.geolocation?.getCurrentPosition((position) => {
    this.center = {
      lat: position?.coords?.latitude,
      lng: position?.coords?.longitude,
    }
    this.setPinLocation();
  });
  // this.loadLatLng()
  }

  setPinLocation(){
    const bounds = new google.maps.LatLngBounds();
    const mark = { ...marker };
    mark.position=this.center;
    mark.data={latitude:this.center.lat,longitude:this.center.lng,firstName:'Pin',lastName:'Point',distance:0,email:'',gender:'',id:0,title:''}
    this.zoom=12;
    bounds.extend(mark.position);
    this.markers.push(mark);
    console.log("markers",this.markers)
    console.log("bounds",bounds)
    this.center = {
      lat: bounds?.getCenter()?.lat(),
      lng: bounds?.getCenter()?.lng(),
    };
    this.map.fitBounds(bounds);
  }
  loadLatLng(){
    this.markers=[];
    const bounds = new google.maps.LatLngBounds();
    this.latLongs.forEach((item)=>{

      this.markers.push({
        position: {
          lat: item.latitude,
          lng: item.longitude,
        },
        title:item.title,
        label: {
          color: 'red',
          text: ''
        },
        data:item,
        options: {
          animation: google.maps.Animation.DROP,
          draggable:false,
          icon:'assets/img/PickPin.svg'
        },
      }); 
     })

     this.markers.forEach((marker) => {
      bounds.extend(marker.position);
    });
    this.center = {
      lat: bounds?.getCenter()?.lat(),
      lng: bounds?.getCenter()?.lng(),
    };

    this.map.fitBounds(bounds);
    // this.map.panToBounds(bounds);
  }

  infoContent = ''
  openInfoWindow(marker: MapMarker,item:Marker) {
    console.log(item);
    this.infoContent ='1- '+item?.data?.firstName +' '+ item?.data?.lastName+'<br/>2- Title:- <b>'+item?.data?.title +'</b><br/>3- Email <b>'+item.data?.email+'</b><br/>4- Distance (km) <b>'+item?.data?.distance.toFixed(2)+'</b><br/>5- Position <b>'+item.data.latitude +' '+item?.data?.longitude+'</b>';
    this.info.open(marker);
  }

  searchCriteria(event:SearchFilter){
    console.log(event);
    this._jobService.GetResults(event).subscribe((res)=>{
      console.log(res);
      this.latLongs=res;
      this.loadLatLng();
    })
  }
}
