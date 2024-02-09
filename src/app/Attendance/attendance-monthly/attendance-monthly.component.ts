import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';
import {formatDate } from '@angular/common';

@Component({
  selector: 'app-attendance-monthly',
  templateUrl: './attendance-monthly.component.html',
  styleUrls: ['./attendance-monthly.component.scss']
})
export class AttendanceMonthlyComponent implements OnInit {

 today:any;
 start_date:any;
 start_end:any;
 datas:any;

constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) { 
  this.today = new Date();
  this.start_date = formatDate(new Date(), 'yyyy-MM', 'en');
  var j = formatDate(new Date(), 'yyyy-MM', 'en');
  this.start_date = j +"-01" ;
  this.start_end =  j +"-30" ;
  console.log([this.start_date,this.start_end]);
  this.http.post('https://bssservice.herokuapp.com/Attendance/Weeklystatus',{"start_date":this.start_date,"end_date":this.start_end}).subscribe((data:any) => {
  this.datas = data.data;
  }); 
}

ngOnInit() {
}


dateChange(data){
  var j = data+"-01";
  this.start_date = j ;
  var i = data+"-31";
  this.start_end = i ;
  this.http.post('https://bssservice.herokuapp.com/Attendance/Weeklystatus',{"start_date":this.start_date,"end_date":this.start_end}).subscribe((data:any) => {
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

