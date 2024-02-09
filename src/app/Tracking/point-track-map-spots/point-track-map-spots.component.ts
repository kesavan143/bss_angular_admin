import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-point-track-map-spots',
  templateUrl: './point-track-map-spots.component.html',
  styleUrls: ['./point-track-map-spots.component.scss']
})
export class PointTrackMapSpotsComponent  {

 // google maps zoom level

 zoom: number = 8 ;
 // initial center position for the map
 lats: number ;
 lngs: number ;
 Name: string;
 label:string;
 perosondata:any;
 PointTrackMaprefid:number;
 markers: marker[] = [
 ];
datas:any;
 constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) {
  this.route.params.subscribe(params => {
    this.PointTrackMaprefid = +params['id']; // (+) converts string 'id' to a number
    console.log('this id: ' + this.PointTrackMaprefid);
    this.http.post('https://bssservice.herokuapp.com/mapTracking/PointTrackMapSpotlist',{PointTrackMaprefid:this.PointTrackMaprefid}).subscribe((data:any)  => {
      this.datas = data.data;
      console.log(this.datas);
     });
 });
 }



 view(event, data)
{

console.log(data.id);
this.http.post('https://bssservice.herokuapp.com/mapTracking/FetchMapSpot',{"id": data.id}).subscribe((data:any) => {
      this.perosondata = data.data[0];
      this.lats = +this.perosondata.lat;
      this.lngs = +this.perosondata.lon;
      this.Name = this.perosondata.title;
      console.log(this.Name);
     console.log(this.lats,this.lngs);
   }); 
}




}
// just an interface for type safety.
interface marker {
lat: number;
lng: number;
label?: string;
draggable: boolean;
}


// constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) {
// this.http.post('https://bssservice.herokuapp.com/authentication/Trackinglist',{"client_ID":"1"}).subscribe((data:any) => {
//   this.datas = data.data;
 // data.data.forEach(element => {
 //   let d = {
 //   lat: +element.Lat,
 //   lng: +element.Long,
 //   Name: element.Name,
 //   draggable: true

 //   };
 //   this.markers.push(d);
 //   console.log(this.markers)  
 // });
 
// }); 
