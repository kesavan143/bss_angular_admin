import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';
import {formatDate } from '@angular/common';

@Component({
  selector: 'app-attendanceyearly',
  templateUrl: './attendanceyearly.component.html',
  styleUrls: ['./attendanceyearly.component.scss']
})
export class AttendanceyearlyComponent implements OnInit {


today:any;
start_date:any;
end_date:any;
datas:any;

constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) { 
  this.today = new Date();
  this.start_date = formatDate(new Date(), 'yyyy', 'en');
  this.end_date = formatDate(new Date(), 'yyyy', 'en');
  this.start_date = this.start_date+"-01-01";
  this.end_date = this.end_date+"-12-31";
  console.log(this.start_date,this.end_date);
  this.http.post('https://bssservice.herokuapp.com/Attendance/Weeklystatus',{"start_date":this.start_date,"end_date":this.end_date}).subscribe((data:any) => {
  this.datas = data.data;
  }); 
}

ngOnInit() {
}


dateChange(data){
  this.today = new Date(data);
  this.start_date = formatDate(new Date(data), 'yyyy', 'en');
  this.end_date = formatDate(new Date(data), 'yyyy', 'en');
  this.start_date = this.start_date+"-01-01";
  this.end_date = this.end_date+"-12-31";
  console.log(this.start_date,this.end_date);
  this.http.post('https://bssservice.herokuapp.com/Attendance/Weeklystatus',{"start_date":this.start_date,"end_date":this.end_date}).subscribe((data:any) => {
  this.datas = data.data;
  }); 
}
addapi1(){
  this.router.navigate(['main/Attendanceall'])
}


addapi2(){
  this.router.navigate(['main/Attendancedate'])
}

addapi3(){
  this.router.navigate(['main/Attendanceweekly'])
}

addapi4(){
  this.router.navigate(['main/AttendanceMonthly'])
}

addapi5(){
  this.router.navigate(['main/Attendanceyearly'])
}

addapi6(){
  this.router.navigate(['main/Attendancecustom'])
}
}

