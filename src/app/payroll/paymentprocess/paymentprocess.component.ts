import { Component, OnInit,Inject } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';
import {formatDate } from '@angular/common';

import {LOCAL_STORAGE,  WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-paymentprocess',
  templateUrl: './paymentprocess.component.html',
  styleUrls: ['./paymentprocess.component.scss']
})
export class PaymentprocessComponent implements OnInit {
  titles = [];
  datas: any;
  cliid:string;
  model: form1model;
  employee_id:string;

  start_date:string;
  end_date:string;


  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,private http: HttpClient ,private route: ActivatedRoute, private router: Router) {

    let date = new Date();
    let firstDay = formatDate(new Date(date.getFullYear(), date.getMonth(), 1), ' yyyy-MM-dd ', 'en-US', '+0530');
    let lastDay  = formatDate(new Date(date.getFullYear(), date.getMonth() + 1, 0), ' yyyy-MM-dd ', 'en-US', '+0530');
    this.route.params.subscribe(params => {
      this.employee_id = params['id']; // (+) converts string 'id' to a number
      console.log('this id: ' + this.employee_id);
      this.http.post('https://bssservice.herokuapp.com/Attendance/fetchdetails',{
        "employee_id": this.employee_id,
        "start_date":firstDay +" 00:00:00-07",
        "end_date":lastDay +" 00:00:00-07",
      }).subscribe((data:any)  => {
       this.datas = data.data;
       console.log(this.datas);
      });
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

  ngOnInit() {

    }

    month(dates){
      console.log(dates)
      let a = dates+"-00"
      let b = dates+"-31"
      this.http.post('https://bssservice.herokuapp.com/payroll/salaryprocesstatus',{
        "date": ""+dates
      }).subscribe((data:any)  => {
       this.datas = data.data;
       this.saveInLocal('payrollpayments',this.datas);
       console.log(this.datas);
      });
    }
    
    view(){
      this.router.navigate(['main/payrollpaymentdetails']) 
    }
}


class form1model {
  Email_id: "1";
}

