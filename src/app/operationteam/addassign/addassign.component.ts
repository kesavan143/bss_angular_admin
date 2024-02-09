
import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';
import {formatDate } from '@angular/common';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';


  

@Component({
  selector: 'app-addassign',
  templateUrl: './addassign.component.html',
  styleUrls: ['./addassign.component.scss']
})
export class AddassignComponent implements OnInit {
  myForm: FormGroup;

  selectcount:any;



  titles = [];
  datas: any;
  datas1: any;
  alert:string;
  datas2:any;


  contract_start_date:string;
  contract_end_date:string;



  Client_data:any;
  Client_details:any;
  site_data:any;
  site_details:any;
  hrs:string;
  contract_data:any;
  Contract_details:any;
  employee_type:any;
  employee_details:any;
  employee_count:string;
  emp_type:string;
  employees_list:any;







  start_date:string;
  end_date:string;


 













  Employee_data:any;
  userid:string;
  moral:string;
  model: form1model;

  constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router,private fb: FormBuilder) {
    this.emp_type = "Man Power"
  

    
    this.datas=[];
    this.http.post('https://bssservice.herokuapp.com/authentication/clientlist',{"Email_id":"1"}).subscribe((data:any) => {
    this.Client_data = data.data;    
  });

  this.myForm = this.fb.group({
    useremail: this.fb.array([])
  });
  }

  ngOnInit() {
    this.model = new form1model();
    }
    dateChange(dates){
    this.model.date = dates;
  }


  Clientfetch(data){
    this.model.client_id = +data;
     this.http.post('https://bssservice.herokuapp.com/authentication/fetchclient',{"id":""+this.model.client_id}).subscribe((data:any) => {
    this.Client_details = data.data;
   });
   this.http.post('https://bssservice.herokuapp.com/client/sitelist', {"client_id":data}).subscribe((data:any) => {
    this.site_data = data.data;
  });
  }


  Sitefetch(data){
    this.model.client_id = +data;
     this.http.post('https://bssservice.herokuapp.com/client/fetchsite',{"id":""+this.model.client_id}).subscribe((data:any) => {
    this.site_details = data.data;
   });
   this.http.post('https://bssservice.herokuapp.com/client/contractlist', {"site_id":data}).subscribe((data:any) => {
    this.contract_data = data.data;
  });
  }

  contract(data){
    this.model.client_id = +data;
     this.http.post('https://bssservice.herokuapp.com/client/fetchcontract',{"id":""+this.model.client_id}).subscribe((data:any) => {
    this.Contract_details = data.data;
    console.log(this.Contract_details);
    this.contract_start_date = this.Contract_details[0].contract_start_date;
    this.contract_end_date = this.Contract_details[0].contract_end_date;

   });
   this.model.client_id = +data;
    this.http.post('https://bssservice.herokuapp.com/requirement/reqlist',{"site_id":""+this.model.client_id}).subscribe((data:any) => {
   this.employee_type = data.data;
  });
  }


  type_detail(data){
    this.model.client_id = +data;
     this.http.post('https://bssservice.herokuapp.com/requirement/reqfetch',{"id":""+this.model.client_id}).subscribe((data:any) => {
    this.employee_details = data.data;
    this.employee_count = this.employee_details[0].no_of_employee;
    this.emp_type = this.employee_details[0].employee_type;
    this.hrs =  this.employee_details[0].hrs;
   });
  }


  startdate(startdate){

    this.start_date =  startdate;
   console.log(this.start_date);


  }

  enddate(enddate){

    this.end_date = enddate;
    console.log(this.end_date);

  }




















  search(){
    
     let startdate = formatDate(this.start_date, ' yyyy-MM-dd ', 'en-US', '+0530');
     let enddate = formatDate(this.end_date, ' yyyy-MM-dd ', 'en-US', '+0530');
     this.http.post('http://localhost:84/employeecheck/checkemployee',{
      "employee_type": this.emp_type,
      "start_date": startdate+" 00:00:00-07",
      "end_date":  enddate+" 00:00:00-07"
      }).subscribe((data:any) => {
      this.employees_list = data.data;
      });
  }

  addassign(){
       



    this.datas1 = formatDate(this.start_date, ' dd-MM-yyyy ', 'en-US', '+0530'); 
    this.datas2 = formatDate(this.end_date, ' dd-MM-yyyy ', 'en-US', '+0530'); 
    console.log(this.datas1)
    console.log(this.datas2)
    if(this.selectcount.length == this.employee_count){
      for(let i = 0; i< this.selectcount.length;i++ ){
        this.http.post('http://localhost:84/assigningemployee/assignemployeeadd',{
        "employee_id": ""+this.selectcount[i].id,
        "employee_name":  ""+this.selectcount[i].Name,
        "client_id":  ""+this.Client_details[0].id,
        "client_name": ""+this.Client_details[0].company_name,
        "hrs":  ""+this.hrs,
        "site_id":  ""+this.site_details[0].id,
        "site_name":  ""+this.site_details[0].title,
        "contract_id":""+this.Contract_details[0].id,
        "startdate": this.datas1,
        "todate": this.datas2,
        "status": ""+'Done',
        "employee_type":""+this.emp_type
          }).subscribe((data:any) => {
        console.log(data.data)
        alert("Added Successfully");
        });
      }
    }else if(this.selectcount.length < this.employee_count){
     alert("Select  total"+ this.employee_count + " No of " + this.emp_type)
    }else{
      alert("Select Only " + this.employee_count + " No of " + this.emp_type )
    }
    
  
   









  }

  onChange(data:any, isChecked: boolean) {
    const emailFormArray = <FormArray>this.myForm.controls.useremail;
    if(isChecked) {
      emailFormArray.push(new FormControl(data));
    } else {
      let index = emailFormArray.controls.findIndex(x => x.value == data)
      emailFormArray.removeAt(index);
    }

    this.selectcount = emailFormArray.value;

  }
  
}


class form1model {
  client_id: number;
  employee_id: number;
  date: string;
  Employee_name: string;
  Client_Name: string;
}

