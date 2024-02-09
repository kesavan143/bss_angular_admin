import { Component, OnInit ,ViewEncapsulation,Inject} from '@angular/core';
import { MouseEvent } from '@agm/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';
import {LOCAL_STORAGE,  WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-employeetracking',
  templateUrl: './employeetracking.component.html',
  styleUrls: ['./employeetracking.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeetrackingComponent {
     datas:any;
    constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,private http: HttpClient ,private route: ActivatedRoute, private router: Router) {
    }
    ngOnInit() {
      this.http.get('https://bssservice.herokuapp.com/employee_tracking/fetchemployees').subscribe((data:any) => {
        this.datas = data.data;
     });
    }
view(data) {
  console.log(data.id)
  this.saveInLocal('employeetrackdetail',data);
  this.router.navigate(['main/employeetrackinghistory/'+data.id]) 
}


delete(data) {
  this.http.post('https://bssservice.herokuapp.com/employee_tracking/deleteEmployeeTracking', {'id': data.id}).subscribe(( data: any) => {
      alert('Employee tracking deleted successfully');
      this.ngOnInit();
  });
}
saveInLocal(key, val): void {
  console.log('recieved= key:' + key + 'value:' + val);
  this.storage.set(key, val);
 }
 getFromLocal(key): any {
  console.log('recieved= key:' + key);
  return this.storage.get(key);
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