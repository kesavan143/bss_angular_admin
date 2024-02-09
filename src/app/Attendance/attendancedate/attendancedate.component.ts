import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';
import {formatDate } from '@angular/common';

@Component({
  selector: 'app-attendancedate',
  templateUrl: './attendancedate.component.html',
  styleUrls: ['./attendancedate.component.scss']
})
export class AttendancedateComponent implements OnInit {
 
  today:any;
  date:string;
datas:any;

constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) { 

  this.today = new Date();
  this.date = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  console.log(this.date);

}

ngOnInit() { 
  this.http.post('https://bssservice.herokuapp.com/Attendance/dailystatus',{"date":this.date}).subscribe((data:any) => {
  this.datas = data.data;
  });
}

dateChange(data){
    this.http.post('https://bssservice.herokuapp.com/Attendance/dailystatus',{"date":data}).subscribe((data:any) => {
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

