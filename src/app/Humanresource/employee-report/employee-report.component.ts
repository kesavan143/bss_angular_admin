import { Component, OnInit ,Inject} from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';
import {LOCAL_STORAGE,  WebStorageService } from 'angular-webstorage-service';
import {formatDate } from '@angular/common';

@Component({
  selector: 'app-employee-report',
  templateUrl: './employee-report.component.html',
  styleUrls: ['./employee-report.component.scss']
})
export class EmployeeReportComponent implements OnInit {

  allbutton:boolean;
  dailybutton:boolean;
  weeklybutton:boolean;
  monthlybutton:boolean;
  yearlybutton:boolean;
  custombutton:boolean;
  datas:any;
  model:form1model;
  employeelist:any;
  letfemployeelist:any;
  resignemployeelist:any;

  date:string;
  start_date:any;
  start_end:any;
  end_date:any;



  
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,private http: HttpClient ,private route: ActivatedRoute, private router: Router) {
    this.model = new form1model();  
  }



  


  ngOnInit() {
    this.addapi1();
  }


  addapi1(){
    this.allbutton =true;
    this.dailybutton =false;
    this.weeklybutton =false;
    this.monthlybutton =false;
    this.yearlybutton =false;
    this.custombutton =false;
    this.http.post('https://bssservice.herokuapp.com/authentication/employeelist', this.model).subscribe((data:any) => {
      this.datas = data.data;
      console.log(this.datas)
      this.employeelist=[];
      this.resignemployeelist=[];
      this.letfemployeelist=[];
      for (let index = 0; index < this.datas.length; index++) {
        const element = this.datas[index];
        if(element.resigned !== 'resigned' || element.resigned !== 'left')
          this.employeelist.push(element);
      }
      for (let index = 0; index < this.datas.length; index++) {
        const element = this.datas[index];
        if(element.resigned === 'resigned')
          this.resignemployeelist.push(element);
      }
      for (let index = 0; index < this.datas.length; index++) {
        const element = this.datas[index];
        if(element.resigned === 'left')
          this.letfemployeelist.push(element);
      }
      console.log(this.employeelist)
      console.log(this.resignemployeelist)
      console.log(this.letfemployeelist)
    }); 
  }

  addapi2(){
    this.allbutton =false;
    this.dailybutton =true;
    this.weeklybutton =false;
    this.monthlybutton =false;
    this.yearlybutton =false;
    this.custombutton =false;
  }

  dateChange2(date){
      console.log("date");
     this.date = formatDate(date, 'yyyy-MM-dd', 'en');
     console.log(this.date);
      this.http.post('https://bssservice.herokuapp.com/employee/dailyreport',{"date":this.date}).subscribe((data:any) => {
        this.datas = data.data;
      console.log(this.datas)
      this.employeelist=[];
      this.resignemployeelist=[];
      this.letfemployeelist=[];
      for (let index = 0; index < this.datas.length; index++) {
        const element = this.datas[index];
        if(element.resigned !== 'resigned' || element.resigned !== 'left')
          this.employeelist.push(element);
      }
      for (let index = 0; index < this.datas.length; index++) {
        const element = this.datas[index];
        if(element.resigned === 'resigned')
          this.resignemployeelist.push(element);
      }
      for (let index = 0; index < this.datas.length; index++) {
        const element = this.datas[index];
        if(element.resigned === 'left')
          this.letfemployeelist.push(element);
      }
      console.log(this.employeelist)
      console.log(this.resignemployeelist)
      console.log(this.letfemployeelist)
    }); 
  }


  dateChange3(date){
    let curr = new Date(date); // get current date  
    let first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
    let last = first + 6; // last day is the first day + 6
    let firstday = new Date(curr.setDate(first)); // 06-Jul-2014
    let lastday = new Date(curr.setDate(last)); //12-Jul-2014
    let i = formatDate(new Date(firstday), 'yyyy-MM-dd', 'en');
    let j = formatDate(new Date(lastday), 'yyyy-MM-dd', 'en');
    console.log(""+i,""+j);
    this.http.post('https://bssservice.herokuapp.com/employee/Weeklyreort',{"start_date":""+i,"end_date":""+j}).subscribe((data:any) => {
    this.datas = data.data;
    console.log(this.datas)
    this.employeelist=[];
    this.resignemployeelist=[];
    this.letfemployeelist=[];
    for (let index = 0; index < this.datas.length; index++) {
    const element = this.datas[index];
    if(element.resigned !== 'resigned' || element.resigned !== 'left')
      this.employeelist.push(element);
     }
     for (let index = 0; index < this.datas.length; index++) {
    const element = this.datas[index];
    if(element.resigned === 'resigned')
      this.resignemployeelist.push(element);
    }
    for (let index = 0; index < this.datas.length; index++) {
    const element = this.datas[index];
    if(element.resigned === 'left')
      this.letfemployeelist.push(element);
     }
  console.log(this.employeelist)
  console.log(this.resignemployeelist)
  console.log(this.letfemployeelist)
}); 
  }


  dateChange4(data){
    var j = data+"-01";
    this.start_date = j ;
    var i = data+"-31";
    this.start_end = i ;
    console.log([this.start_date,this.start_end]);
    this.http.post('https://bssservice.herokuapp.com/employee/Weeklyreort',{"start_date":""+this.start_date,"end_date":""+this.start_end}).subscribe((data:any) => {
      this.datas = data.data;
      console.log(this.datas)
      this.employeelist=[];
      this.resignemployeelist=[];
      this.letfemployeelist=[];
      for (let index = 0; index < this.datas.length; index++) {
        const element = this.datas[index];
        if(element.resigned !== 'resigned' || element.resigned !== 'left')
          this.employeelist.push(element);
      }
      for (let index = 0; index < this.datas.length; index++) {
        const element = this.datas[index];
        if(element.resigned === 'resigned')
          this.resignemployeelist.push(element);
      }
      for (let index = 0; index < this.datas.length; index++) {
        const element = this.datas[index];
        if(element.resigned === 'left')
          this.letfemployeelist.push(element);
      }
      console.log(this.employeelist)
      console.log(this.resignemployeelist)
      console.log(this.letfemployeelist)
    }); 


  }

  dateChange5(data){
    this.start_date = formatDate(new Date(data), 'yyyy', 'en');
    this.end_date = formatDate(new Date(data), 'yyyy', 'en');
    this.start_date = this.start_date+"-01-01";
    this.end_date = this.end_date+"-12-31";
    console.log(this.start_date,this.end_date);
    this.http.post('https://bssservice.herokuapp.com/employee/Weeklyreort',{"start_date":this.start_date,"end_date":this.end_date}).subscribe((data:any) => {
      this.datas = data.data;
      console.log(this.datas)
      this.employeelist=[];
      this.resignemployeelist=[];
      this.letfemployeelist=[];
      for (let index = 0; index < this.datas.length; index++) {
        const element = this.datas[index];
        if(element.resigned !== 'resigned' || element.resigned !== 'left')
          this.employeelist.push(element);
      }
      for (let index = 0; index < this.datas.length; index++) {
        const element = this.datas[index];
        if(element.resigned === 'resigned')
          this.resignemployeelist.push(element);
      }
      for (let index = 0; index < this.datas.length; index++) {
        const element = this.datas[index];
        if(element.resigned === 'left')
          this.letfemployeelist.push(element);
      }
      console.log(this.employeelist)
      console.log(this.resignemployeelist)
      console.log(this.letfemployeelist)
    }); 




  }






  addapi3(){
    this.allbutton =false;
    this.dailybutton =false;
    this.weeklybutton =true;
    this.monthlybutton =false;
    this.yearlybutton =false;
    this.custombutton =false;
  }


  addapi4(){
    this.allbutton =false;
    this.dailybutton =false;
    this.weeklybutton =false;
    this.monthlybutton =true;
    this.yearlybutton =false;
    this.custombutton =false;
  }


  addapi5(){
    this.allbutton =false;
    this.dailybutton =false;
    this.weeklybutton =false;
    this.monthlybutton =false;
    this.yearlybutton =true;
    this.custombutton =false;
  }

  public view(event, item) {
    console.log(item.id);
    this.router.navigate(['main/employeedetails/' + item.id])
  }

  printComponent(cmpName) {

    let printContents = document.getElementById(cmpName).innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
}























}

class form1model {
  Email_id: "1";
}