import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';
import {formatDate } from '@angular/common';

@Component({
  selector: 'app-attendanceweekly',
  templateUrl: './attendanceweekly.component.html',
  styleUrls: ['./attendanceweekly.component.scss']
})
export class AttendanceweeklyComponent implements OnInit {
  
datas:any;

constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) { 
}

ngOnInit() {
  var curr = new Date(); // get current date  
  var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
  var last = first + 6; // last day is the first day + 6
  var firstday = new Date(curr.setDate(first)); // 06-Jul-2014
  var lastday = new Date(curr.setDate(last)); //12-Jul-2014
  var i = formatDate(new Date(firstday), 'yyyy-MM-dd', 'en');
  var j = formatDate(new Date(lastday), 'yyyy-MM-dd', 'en');
console.log(i,j);
this.http.post('https://bssservice.herokuapp.com/Attendance/Weeklystatus',{"start_date":i,"end_date":j}).subscribe((data:any) => {
  this.datas = data.data;
  }); 
}

dateChange(date){
  var curr = new Date(date); // get current date  
  var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
  var last = first + 6; // last day is the first day + 6
  var firstday = new Date(curr.setDate(first)); // 06-Jul-2014
  var lastday = new Date(curr.setDate(last)); //12-Jul-2014
  var i = formatDate(new Date(firstday), 'yyyy-MM-dd', 'en');
  var j = formatDate(new Date(lastday), 'yyyy-MM-dd', 'en');
console.log(i,j);
this.http.post('https://bssservice.herokuapp.com/Attendance/Weeklystatus',{"start_date":i,"end_date":j}).subscribe((data:any) => {
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

