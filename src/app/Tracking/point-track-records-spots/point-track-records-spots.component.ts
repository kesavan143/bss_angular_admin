import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-point-track-records-spots',
  templateUrl: './point-track-records-spots.component.html',
  styleUrls: ['./point-track-records-spots.component.scss']
})
export class PointTrackRecordsSpotsComponent  {
// google maps zoom level

zoom: number = 60 ;
// initial center position for the map
lats: number ;
lngs: number ;
Name: string;
label:string;
perosondata:any;
PointTrackRecordsid:number;






markers: marker[] = [
];



zoom1: number = 60 ;
// initial center position for the map
lats1: number ;
lngs1: number ;
Name1: string;
label1:string;
perosondata1:any;
PointTrackRecordsid1:number;






markers1: marker[] = [
];
datas:any;
constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) {
 this.route.params.subscribe(params => {
   this.PointTrackRecordsid = +params['id']; // (+) converts string 'id' to a number
   console.log('this id: ' + this.PointTrackRecordsid);
   this.http.post('https://bssservice.herokuapp.com/mapTracking/PointTrackRecordsSpotlist',{PointTrackRecordsid:this.PointTrackRecordsid}).subscribe((data:any)  => {
     this.datas = data.data;
     console.log(this.datas);
    });
});
}

view(event, data)
{

console.log(data.id);
this.http.post('https://bssservice.herokuapp.com/mapTracking/FetchMapSpotrecord',{"id": data.id}).subscribe((data:any) => {
      this.perosondata = data.data[0];
      this.lats = +this.perosondata.lat;
      this.lngs = +this.perosondata.lon;
      this.Name = this.perosondata.title;

      this.lats1 = +this.perosondata.marked_lat;
      this.lngs1 = +this.perosondata.marked_lon;
      this.Name1 = this.perosondata.marked_by;
      
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


interface marker1 {
  lat1: number;
  lng1: number;
  label1?: string;
  draggable1: boolean;
  }


