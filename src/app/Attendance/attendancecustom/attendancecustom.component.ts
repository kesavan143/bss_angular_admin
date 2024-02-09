import { Component, OnInit } from '@angular/core';

import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';
import {formatDate } from '@angular/common';

@Component({
  selector: 'app-attendancecustom',
  templateUrl: './attendancecustom.component.html',
  styleUrls: ['./attendancecustom.component.scss']
})
export class AttendancecustomComponent implements OnInit {
 
start_date:any;
end_date:any;
today:any;
 
datas:any;

constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) { 
  this.today = new Date();
  this.start_date = formatDate(new Date(), 'yyyy-MM-dd', 'en');
}

ngOnInit() {
}
dateChange1(start_date)
{
 this.start_date = start_date;
 this.end_date = "";
 console.log(this.start_date,this.end_date);
}

dateChange2(end_date)
{
  this.end_date = end_date;
  if(this.start_date == this.end_date)
  {
    alert("Can't Select the Same  start and End Dates")
  }else{
  this.http.post('https://bssservice.herokuapp.com/Attendance/Weeklystatus',{"start_date":this.start_date,"end_date":this.end_date}).subscribe((data:any) => {
  this.datas = data.data;
  console.log(this.datas);
  }); 
}
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

