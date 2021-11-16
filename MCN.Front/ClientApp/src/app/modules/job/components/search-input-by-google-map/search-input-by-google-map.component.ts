import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Marker } from '../../models/mapService';
const marker:Marker = {
  position: {
    lat: 33.599239344482179,
    lng: 73.0098210191367093,
  },
  title: '',
  label:{color:'red',text:'text 123'},
  options: {
    animation: google.maps.Animation.DROP,
    draggable:true,
    icon: {
      url: 'assets/img/PickPin.svg',
    },
  },
};

@Component({
  selector: 'app-search-input-by-google-map',
  templateUrl: './search-input-by-google-map.component.html',
  styleUrls:['./search-input-by-google-map.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SearchInputByGoogleMapComponent implements AfterViewInit {
  public placeItem:any={};
  constructor(private _bottomSheetRef: MatBottomSheetRef<SearchInputByGoogleMapComponent>){
    
  }
  ngAfterViewInit(){
    // function initMap(): void {
      const map = new google.maps.Map(
        document.getElementById("map") as HTMLElement,
        {
          center: { lat: 40.749933, lng: -73.98633 },
          zoom: 13,
          mapTypeControl: false,
        }
      );
      const card = document.getElementById("pac-card") as HTMLElement;
      const input = document.getElementById("pac-input") as HTMLInputElement;
      const biasInputElement = document.getElementById(
        "use-location-bias"
      ) as HTMLInputElement;
      const strictBoundsInputElement = document.getElementById(
        "use-strict-bounds"
      ) as HTMLInputElement;
      const options = {
        fields: ["formatted_address", "geometry", "name"],
        strictBounds: false,
        types: ["establishment"],
      };
    
      map.controls[google.maps.ControlPosition.TOP_LEFT].push(card);
    
      const autocomplete = new google.maps.places.Autocomplete(input, options);
    
      // Bind the map's bounds (viewport) property to the autocomplete object,
      // so that the autocomplete requests use the current map bounds for the
      // bounds option in the request.
      autocomplete.bindTo("bounds", map);
    
      const infowindow = new google.maps.InfoWindow();
      const infowindowContent = document.getElementById(
        "infowindow-content"
      ) as HTMLElement;
    
      infowindow.setContent(infowindowContent);
    
      const marker = new google.maps.Marker({
        map,
        anchorPoint: new google.maps.Point(0, -29),
      });
    
      autocomplete.addListener("place_changed", () => {
        infowindow.close();
        marker.setVisible(false);
    
        const place = autocomplete.getPlace();
    
        if (!place.geometry || !place.geometry.location) {
          // User entered the name of a Place that was not suggested and
          // pressed the Enter key, or the Place Details request failed.
          window.alert("No details available for input: '" + place.name + "'");
          return;
        }
    
        // If the place has a geometry, then present it on a map.
        if (place.geometry.viewport) {
          map.fitBounds(place.geometry.viewport);
        } else {
          map.setCenter(place.geometry.location);
          map.setZoom(17);
        }
        this.placeItem=place;
        console.log(this.placeItem)
        marker.setPosition(place.geometry.location);
        marker.setVisible(true);
        marker.setDraggable(true);
        infowindowContent.children["place-name"].textContent = place.name;
        infowindowContent.children["place-address"].textContent =
          place.formatted_address;
        infowindow.open(map, marker);
      });
    
      // Sets a listener on a radio button to change the filter type on Places
      // Autocomplete.
      function setupClickListener(id, types) {
        const radioButton = document.getElementById(id) as HTMLInputElement;
    
        radioButton.addEventListener("click", () => {
          autocomplete.setTypes(types);
          input.value = "";
        });
      }
    
      setupClickListener("changetype-all", []);
      setupClickListener("changetype-address", ["address"]);
      setupClickListener("changetype-establishment", ["establishment"]);
      setupClickListener("changetype-geocode", ["geocode"]);
      setupClickListener("changetype-cities", ["(cities)"]);
      setupClickListener("changetype-regions", ["(regions)"]);
    
      biasInputElement.addEventListener("change", () => {
        if (biasInputElement.checked) {
          autocomplete.bindTo("bounds", map);
        } else {
          // User wants to turn off location bias, so three things need to happen:
          // 1. Unbind from map
          // 2. Reset the bounds to whole world
          // 3. Uncheck the strict bounds checkbox UI (which also disables strict bounds)
          autocomplete.unbind("bounds");
          autocomplete.setBounds({ east: 180, west: -180, north: 90, south: -90 });
          strictBoundsInputElement.checked = biasInputElement.checked;
        }
    
        input.value = "";
      });
    
      strictBoundsInputElement.addEventListener("change", () => {
        autocomplete.setOptions({
          strictBounds: strictBoundsInputElement.checked,
        });
    
        if (strictBoundsInputElement.checked) {
          biasInputElement.checked = strictBoundsInputElement.checked;
          autocomplete.bindTo("bounds", map);
        }
    
        input.value = "";
      });
    // }

    

    google.maps.event.addListener(marker,'dragend',function(event) 
        {
    console.log(event);
    // this.placeItem.geometry.location.lat =event.latLng.lat();
    // this.placeItem.geometry.location.lat =event.latLng.lng();
    console.log(marker);
    
});



  }


  Accept(){
    this._bottomSheetRef.dismiss({code:'200',data:this.placeItem});    
  }
//   @ViewChild('mapSearchField') searchField:ElementRef;
//   @ViewChild(GoogleMap) map:GoogleMap;
   
//   center: google.maps.LatLngLiteral = { lat: 33.599239344482179, lng: 73.009821019136709 };
   
 
//   zoom = 12;
//   options: google.maps.MapOptions = {
//     zoom: 12,
//     mapTypeId: 'roadmap',
//     panControl: false,
//     zoomControl: false,
//     mapTypeControl: false,
//     scaleControl: false,
//     streetViewControl: false,
//     rotateControl: false,
//     fullscreenControl: false,
//     center: new google.maps.LatLng(37.3382, -121.8863),
//   };

//   public markers:Marker[]=[{title:'title 123...',options:{animation:google.maps.Animation.DROP,icon:{
//     url: 'assets/img/PickPin.svg',
//   }},position:{lat:this.center.lat,lng:this.center.lng},info:'info 123',label:{color:'red',text:'text 123'}}];

//   // public markers:Marker[]=[];
//   mapConfigurations={
//     disableDefaultUI:false,
//     fullscreenControl:false,
//     zoomControl:false
//   }
//   constructor() { }

//   ngAfterViewInit(): void {
//     const searchBox=new google.maps.places.SearchBox(
//       this.searchField.nativeElement,
//     );
//     this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(
//       this.searchField.nativeElement,
//     );

//     searchBox.addListener('places_changed',()=>{ 
//       this.markers=[];
//       const places=searchBox.getPlaces();
//       if(places.length===0){
//         return;
//       }

//       const bounds=new google.maps.LatLngBounds();
//       places.forEach(place=>{
//         if(!place.geometry || !place.geometry.location){
//           return;
//         }
//         if(place.geometry.viewport){
//           //only geocodes have viwewport
//           bounds.union(place.geometry.viewport);
//         }else{
//           bounds.extend(place.geometry.location);
//         }
        

//       }); 


//       let lat=bounds.getCenter().lat();
//       let lng= bounds.getCenter().lng();
// const mark = { ...marker };
// mark.position = {
//   lat: lat,
//   lng: lng,
// };

// this.center = {
//   lat: lat,
//   lng: lng,
// };
// this.options.center=this.center;
// mark.label={color:'red',text:'text 123'};
// mark.options={
//   animation: google.maps.Animation.DROP,
//   icon: {
//     url: 'assets/img/PickPin.svg',
//   },
// };
// mark.title = 'Current Location';
// this.markers.push(mark);
 
// bounds.extend(mark.position);

// const cardinalBounds = bounds.toJSON();
//     const newBounds = {
//       north: cardinalBounds?.north + 0.1,
//       east: cardinalBounds?.east,
//       west: cardinalBounds?.west,
//       south: cardinalBounds?.south - 0.1,
//     };
//     if (this.map) {
//       this.map.fitBounds(newBounds);
//       this.map.panToBounds(newBounds);
//       this.map.panBy(0, 100);
//     } 
      
//     })
//   }



//   private setCurrentPosition() {
//     if ('geolocation' in navigator) {
//       navigator.geolocation.getCurrentPosition((position) => {
//         this.markers[0].position.lat = position.coords.latitude;
//         this.markers[0].position.lng = position.coords.longitude;
//         this.zoom = 12;
//       });
//     }
//   }

//   initiateMarker(lat:any,lng:any){
//     this.markers.push({
//       position: {
//         lat: +lat,
//         lng: +lng,
//       },
//       title:'Marker title ',
//       label: {
//         color: 'red',
//         text: 'Marker label ',
//       },
//       info: 'Marker info ',

//       options: {
//         animation: google.maps.Animation.DROP,
//         icon: {
//           url: 'assets/img/PickPin.svg',
//         },
//       },
//     });

//     // this.markers[0].position={lat:lat,lng:lng};

//    const bounds= this.getBounds(this.markers);
//     // this.map.googleMap.fitBounds(bounds);
    
//   }

//   getBounds(markers){
//     let north;
//     let south;
//     let east;
//     let west;
  
//     for (const marker of markers){
//       // set the coordinates to marker's lat and lng on the first run.
//       // if the coordinates exist, get max or min depends on the coordinates.
//       north = north !== undefined ? Math.max(north, marker.position.lat) : marker.position.lat;
//       south = south !== undefined ? Math.min(south, marker.position.lat) : marker.position.lat;
//       east = east !== undefined ? Math.max(east, marker.position.lng) : marker.position.lng;
//       west = west !== undefined ? Math.min(west, marker.position.lng) : marker.position.lng;
//     };
  
//     const bounds = { north, south, east, west };
  
//     return bounds;
//   }
}
