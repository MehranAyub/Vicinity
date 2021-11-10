export interface Marker{
    position?:Position;
    title?:string;
    options?:Option;
    info?:string;
    label?:Label;
}

export interface Position{
    lat:number;
    lng:number;
}

export interface Option{
animation:any;
icon:any
}
export interface Label{
    color:any;
    text:any;
}

export interface SearchFilter{
     Keyword:string 
     MinDistance:number 
     MaxDistance:number 
     Interests:number[] 
     SearchLat:number 
     SearchLng:number 
}


// public class SearchFilter
// { 
//     public string Keyword { get; set; }
//     public double MinDistance { get; set; }
//     public double MaxDistance { get; set; }
//     public List<int> Interests { get; set; }
//     public double SearchLat { get; set; }
//     public double SearchLng { get; set; }

// }
// this.markers.push({
//     position: {
//       lat: item.lat,
//       lng: item.long,
//     },
//     title: item.firstName+item.lastName,
//     options: {
//       animation: null,
//       icon: {
//         url: 'assets/Images/icons/PickPin.svg',
//       },
//     },
//   });