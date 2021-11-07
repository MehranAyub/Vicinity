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