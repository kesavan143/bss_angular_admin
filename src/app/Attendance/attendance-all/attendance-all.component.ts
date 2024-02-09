import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';
import {formatDate } from '@angular/common';

@Component({
  selector: 'app-attendance-all',
  templateUrl: './attendance-all.component.html',
  styleUrls: ['./attendance-all.component.scss']
})
export class AttendanceAllComponent implements OnInit {

 
datas:any;

constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) { 

}

ngOnInit() {
  this.http.post('https://bssservice.herokuapp.com/Attendance/Allstatus',{"id":"1"}).subscribe((data:any) => {
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

