
import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ChangeDetectorRef, Inject } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { and } from '@angular/router/src/utils/collection';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-employeehistroy',
  templateUrl: './employeehistroy.component.html',
  styleUrls: ['./employeehistroy.component.scss']
})
export class EmployeehistroyComponent {
  // google maps zoom level
  zoom: number = 16;
  total: number;
  employee_id: string;
  date: string;
  firstdate: string;
  datass: any[];
  lati: number;
  long: number;
  updatedate: string;

  employee_details: any;


  start_date: string;
  end_date: string;

  datas: any[];
  currentPos: point;
  points: point[] = [];
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService, private cref: ChangeDetectorRef, private http: HttpClient, private route: ActivatedRoute, private router: Router) {



    this.employee_details = this.getFromLocal('employeetrackdetail');

    console.log(this.employee_details);



  }
  ngOnInit() {

    this.start_date = "";
    this.end_date = "";
    this.firstdate = formatDate(new Date(), 'dd-MM-yyyy', 'en-US', '+0530');
    console.log(this.firstdate);

    this.route.params.subscribe(params => {
      this.employee_id = params['id']; // (+) converts string 'id' to a number
      console.log('this id: ' + this.employee_id);
      this.http.post('https://bssservice.herokuapp.com/employee_tracking/fetchTrackinglist', { Employee_id: "" + this.employee_id, }).subscribe((data: any) => {
        this.datas = data.data;
        console.log(this.datas);
        this.updatedate = this.datas[this.datas.length - 1].updated_at;
        this.datass = [];
        console.log(this.datas.length)
        for (let i = 0; i < this.datas.length; i++) {
          this.date = formatDate(this.datas[i].updated_at, 'dd-MM-yyyy', 'en-US', '+0530');
          console.log(this.date)
          if (this.date >= this.firstdate && this.date <= this.firstdate) {
            let point = {
              'lat': +this.datas[i].Lat,
              'lng': +this.datas[i].Long,
              'date': this.datas[i].updated_at,
            }
            this.points.push(point);
            this.currentPos = point;
          }
        }
        this.total = +this.points.length;
        if (this.total == 0) {
          let point = {
            'lat': 12.9430969,
            'lng': 80.2067707
          }
          this.currentPos = point;
        }
        else {

          console.log(this.total);
          this.lati = +this.points[+this.total - 1].lat;
          this.long = +this.points[+this.total - 1].lng;
          console.log(this.lati, this.long)
          console.log(this.points)
        }




      });
    });
  }



  dateChange1(start_date) {
    this.start_date = formatDate(start_date, 'dd-MM-yyyy', 'en-US', '+0530');
  }
  dateChange2(end_date) {
    this.end_date = formatDate(end_date, 'dd-MM-yyyy', 'en-US', '+0530');
  }

  saveInLocal(key, val): void {
    console.log('recieved= key:' + key + 'value:' + val);
    this.storage.set(key, val);
  }
  getFromLocal(key): any {
    console.log('recieved= key:' + key);
    return this.storage.get(key);
  }






  search() {
    console.log(this.start_date, this.end_date);
    if (this.start_date == '' && this.end_date == '') {
      alert("Please Enter the Start and End Date");
    } else {
      this.datass = [];
      for (let i = 0; i < this.datas.length; i++) {
        this.date = formatDate(this.datas[i].updated_at, 'dd-MM-yyyy', 'en-US', '+0530');
        if (this.date >= this.start_date && this.date <= this.end_date) {
          let point = {
            'lat': +this.datas[i].Lat,
            'lng': +this.datas[i].Long,
            'date': this.datas[i].updated_at
          }
          this.points.push(point);
          this.currentPos = point;
          this.cref.markForCheck();
        }
      }
      this.total = +this.points.length;
      console.log(this.total);
      this.lati = +this.points[+this.total - 1].lat;
      this.long = +this.points[+this.total - 1].lng;
      console.log(this.lati, this.long)
      console.log(this.points)
    }
  }


























}

// just an interface for type safety.
interface point {
  lat: number;
  lng: number;
}
