import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';
import {formatDate } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { listdetail } from 'app/Salesteam/view-training-reoprt/view-training-reoprt.component';

@Component({
  selector: 'app-manualpayroll',
  templateUrl: './manualpayroll.component.html',
  styleUrls: ['./manualpayroll.component.scss']
})
export class ManualpayrollComponent implements OnInit {
  datass:any;
  companylist:any;
  site_names:any;

  site_details:any;

  contract_list:any;
  contract_title:string;

  adduser:Adduser;
  datasss:any;


  company_name:string;
  unit_name:string;
  unit_id:string;
  contract_id:string;
  Emp_id:string;
  Emp_type:string;
  employee_name:string;
  no_of_duty:number;
  date:string;

  





  bank:string;
  a_c:string;









  constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router,private formBuilder: FormBuilder) {
   this.adduser = new Adduser();

    // this.http.post('https://bssservice.herokuapp.com/employee/emptypelist', {"id":0}).subscribe((data:any) => {
    //   this.datass = data.data;
    //   console.log(this.datass);
    // });

  this.http.post('https://bssservice.herokuapp.com/company/companylists', {"id":0}).subscribe((data:any) => {
      this.companylist = data.data;
  
  });


   }

   fetchsite(data){
    console.log(data);
    this.http.post('https://bssservice.herokuapp.com/company/fetchcompanysite', {"company_name":data}).subscribe((data:any) => {
      this.site_names = data.data;
  });
   }

   Contract_list(data){
    this.http.post('https://bssservice.herokuapp.com/client/fetchsite', {"id":""+data}).subscribe((data:any) => {
    this.site_details = data.data;
    this.unit_id  =  this.site_details[0].id;
    this.unit_name = this.site_details[0].title;
     });

     
 

      console.log(data);
      this.http.post('https://bssservice.herokuapp.com/client/contractlist', {"site_id":data}).subscribe((data:any) => {
      this.contract_list = data.data[0];
      this.contract_title = ""+ this.contract_list.contract_start_date +"-"+""+ this.contract_list.contract_end_date;
      this.contract_id = ""+ this.contract_list.id
      this.employee_type();
    });
  }

  employee_type(){

    this.http.post('https://bssservice.herokuapp.com/requirement/reqlist',{"site_id":""+this.contract_id}).subscribe((data:any) => {
      this.datass = data.data;
      console.log(this.datass)
     });

  }

  ngOnInit() {

  }


  search(data){
    console.log(data);
    this.http.post('https://bssservice.herokuapp.com/authentication/employee_id',{employee_id:""+data}).subscribe((data:any)  => {
      this.datasss = data.data;
      this.Emp_id = this.datasss.id;
      this.employee_name = this.datasss.Name;
      this.bank = this.datasss.bankname;
      this.a_c = this.datasss.a_c;
      
    });
  }

  submit(){
    console.log(this.company_name,this.unit_name,this.contract_id,this.Emp_id,this.employee_name,this.Emp_type,this.no_of_duty,this.date)

    this.company_name = this.adduser.company_name;
    this.unit_name = this.unit_name;
    this.contract_id = this.contract_id;
    this.Emp_id = this.Emp_id;
    this.employee_name = this.employee_name ;
    this.Emp_type = this.adduser.employee_type;
    this.no_of_duty = this.no_of_duty;
    this.date =  this.date+"-01"; 

    if(this.company_name == null){
      alert("Select Company")
    }
    else if(this.unit_name == null){
      alert("Select unit name")
    }
   else if(this.Emp_id == null){
      alert("Enter Employee ID")
    }
   else if(this.no_of_duty == null){
      alert("Enter No of Duty")
    }
   else if(this.date == null){
      alert("Enter Date")
    }
    else{
      console.log(this.company_name,this.unit_name,this.contract_id,this.Emp_id,this.employee_name,this.Emp_type,this.no_of_duty,this.date)
      for(let i = 0 ; i < this.no_of_duty ; i++ ){
        this.http.post('https://bssservice.herokuapp.com/Attendance/manualAttendancecheck', {
                      "employee_id" : ""+this.Emp_id,
                      "employee_name": ""+ this.employee_name,
                      "client_id": "0",
                      "client_name": ""+this.company_name,
                      "site_id": ""+this.unit_id,
                      "site_name": ""+this.unit_name,
                      "contract_id":""+this.contract_id,
                      "date": ""+this.date,
                      "employee_type": ""+this.Emp_type,
                      "hrs": "8 hrs",
                      "status": "present",
                      "time_in": "00:00:00 AM",
                      "time_out":"00:00:00 PM",
                      "duration": "8 hrs",
        }).subscribe((data:any) => {
          this.site_names = data.data;
        console.log(this.site_names);
      })
      }
      alert("Inserted SuccessFully");
    }
  }


}

class Adduser {
  company_name:string;
  site_name:string;
  employee_type:string;






}
