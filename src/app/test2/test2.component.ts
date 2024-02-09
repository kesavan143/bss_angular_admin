import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';
import {formatDate } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component {
 
company:string;
unit_code:string;
option:string;
salary_type:string;
unit_name:string;
day_month:string;
pf_cover:string;
pf_amount:string;
esi_cover:string;
esi_amount:string;
esi_code:string;
esi_district:string;
esi_protax:string;
pf_basic:string;
pf_da:string;
pf_hra:string;
pf_trv:string;
esi_basic:string;
esi_da:string;
esi_hra:string;
esi_trv:string;
prtax_basic:string;
prtax_da:string;
prtax_hra:string;
prtax_trv:string;
//////////////////////////////////////////////////////
rank:string;
basic:number=0;
da:number=0;
hra:number=0;
trv_exp:number=0;
day_months:number=0;
others:number=0;
medical:number=0;
others1:number=0;
others2:number=0;
others3:number=0;
others4:number=0;
total_pay:number=0;
pf:number=0;
esi:number=0;
dec:number=0;
total:number=0;
unit_id:number=0;
/////////////////////////////////////////////////////
companylist:any;
site_names:any;
site_details:any;

/////////////////////////////////////////////////////
hours:boolean;
days:boolean;
pf_rules:boolean;
options_types:string;
unit_namess:string;
unit_codess:string;
unit_ids:string;
datas:any;
employee_type:any;
unitdetails:any;
submitbtton:boolean;
updatebtton:boolean;






constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router,private formBuilder: FormBuilder) {
   this.hours = false;
   this.days = false;
   this.pf_rules = false;
   this.submitbtton = false;
   this.updatebtton = false;


    
    // let day = 1;
    // let counter = 0;
    // let date = new Date(year, month, day);
    // while (date.getMonth() === month) {
    //     if (date.getDay() === 0) { // Sun=0, Mon=1, Tue=2, etc.
    //         counter += 1;
    //     }
    //     day += 1;
    //     date = new Date(year, month, day);
    // }
    // return counter;



   this.http.post('https://bssservice.herokuapp.com/employee/emptypelist', {"id":0}).subscribe((data:any) => {
    this.employee_type = data.data;
    console.log(this.employee_type);
  });


  this.http.post('https://bssservice.herokuapp.com/company/companylists', {"id":0}).subscribe((data:any) => {
      this.companylist = data.data;
  });

   }

   fetchsite(data){
     if(data === 'BSS'){
       this.esi_district = 'CHENNAI'
       this.esi_code = 'BSS'
       this.esi_protax = 'CHENNAI'
     }else if(data === 'BSSPL'){
      this.esi_district = 'BSSPL'
      this.esi_code = 'BSSPL'
      this.esi_protax = 'BSSPL'

     }else if(data === 'BSSB'){
      this.esi_district = 'BANGALORE'
      this.esi_code = 'BSSB'
      this.esi_protax = 'BANGALORE'

    }else if(data === 'BSSC'){
      this.esi_district = 'COIMBATORE'
      this.esi_code = 'BSSC'
      this.esi_protax = 'COIMBATORE'

    }else if(data === 'BSSK'){
      this.esi_district = 'KERALA'
      this.esi_code = 'BSSK'
      this.esi_protax = 'KERALA'

    }else if(data === 'BSSPA'){
      this.esi_district = 'BSSPA'
      this.esi_code = 'BSSPA'
      this.esi_protax = 'BSSPA'

    }else if(data === 'BSSR'){
      this.esi_district = 'SATHANUR'
      this.esi_code = 'BSSR'
      this.esi_protax = 'SATHANUR'

    }else if(data === 'BSST'){
      this.esi_district = 'THRUPPUR'
      this.esi_code = 'BSST'
      this.esi_protax = 'THRUPPUR'

    }else if(data === 'MMSPL'){
      this.esi_district = 'MMSPL'
      this.esi_code = 'MMSPL'
      this.esi_protax = 'MMSPL'

    }else if(data === 'BSTR'){
      this.esi_district = 'THIRUKOVILUR'
      this.esi_code = 'BSTR'
      this.esi_protax = 'THIRUKOVILUR'

    }
    console.log(data);
    this.http.post('https://bssservice.herokuapp.com/company/fetchcompanysite', {"company_name":data}).subscribe((data:any) => {
      this.site_names = data.data;
      console.log(this.site_names)
  });
   }
   Contract_list(data){
    
  
     
    this.http.post('https://bssservice.herokuapp.com/client/fetchsite', {"id":""+data}).subscribe((data:any) => {
    this.site_details = data.data;
    console.log(this.site_details)
    this.unit_code = this.site_details[0].sitelogin;
    this.unit_namess =  this.site_details[0].title;
    this.fetchalreadyregister(this.unit_code);
     });
    }
////////////
salary_types(data){
  if(data ==='Day'){
    this.hours = false;
    this.salary_type = "";
    this.salary_type = "26";
    console.log(this.salary_type)
  }else if(data === 'Monthly') {
    this.hours = false;
    this.salary_type = "";
    let now = new Date();
    let a  = new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
    this.salary_type = ""+a;
    console.log(this.salary_type)
  }else if (data === 'Hours'){
    this.hours = true;
    this.salary_type = "";
    console.log(this.salary_type)
  }else{
    this.salary_type = ""+this.salary_type;
    console.log(this.salary_type)
  }
}
///////////////////
option_type(data){
  console.log(data);
  this.option = ""+data;
}
////////////
day_types(data){
  if(data ==='Default'){
    this.days = false;
    this.day_month = "";
    this.day_month = "26";
    console.log(this.day_month)
  }else if(data === 'Dynamic') {
    this.days = false;
    this.day_month = "";
    let now = new Date();
    let a  = new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
    this.day_month = ""+a;
    console.log(this.day_month)
  }else if (data === 'Custom'){
    this.days = true;
    this.day_month = "";
    console.log(this.day_month)
  }else{
    this.day_month = ""+this.day_month;
    console.log(this.day_month)
  }
}
////////////////
toggleEditable(event) {
  if ( event.target.checked ) {
      this.pf_cover = ""+true;
      console.log(this.pf_cover)
 }else{
  this.pf_cover = ""+false;
  console.log(this.pf_cover)
 }
}
////////////
pf_type(data){
  if(data ==='Default'){
    this.pf_rules = false;
    this.pf_amount = "";
    this.pf_amount = "26";
    console.log(this.pf_amount)
  }else if(data === 'Dynamic') {
    this.pf_rules = false;
    this.pf_amount = "";
    let now = new Date();
    let a  = new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
    this.pf_amount = ""+a;
    console.log(this.pf_amount)
  }else if (data === 'Custom'){
    this.pf_rules = true;
    this.pf_amount = "";
    console.log(this.pf_amount)
  }else{
    this.pf_amount = ""+this.pf_amount;
    console.log(this.pf_amount)
  }
}
////////////////
toggleEditable1(event) {
  if ( event.target.checked ) {
      this.esi_cover = ""+true;
      console.log(this.pf_cover)
 }else{
  this.esi_cover = ""+false;
  console.log(this.pf_cover)
 }
}
///////
esi_type(data){
  if(data ==='Normal'){
    this.esi_amount = "Normal";
    console.log(this.esi_amount)
  }else if(data === 'Variant') {
    this.esi_amount = "Variant";
    console.log(this.esi_amount)
  }
}
//////////
esi_dis(data){
  this.esi_district = data;
  console.log(this.esi_district)
}
//////////////
pro_tax(data){
  this.esi_protax = data;
}
    


submit(){
  console.log("in");
  if(this.option === 'Standard'){
    this.pf_basic= ""+true,
    this.pf_da = ""+true,
    this.pf_hra  = ""+true,
    this.pf_trv = ""+true, 
    this.esi_basic = ""+true,
    this.esi_da = ""+true,
    this.esi_hra = ""+true,
    this.esi_trv = ""+true
  }
  console.log(this.company,
    this.unit_code,
    this.option,
    this.salary_type,
    this.unit_namess,
    this.day_month,
    this.pf_cover,
    this.pf_amount,
    this.esi_cover,
    this.esi_amount,
    this.esi_code,
    this.esi_district,
    this.esi_protax,
    this.pf_basic,
    this.pf_da,
    this.pf_hra,
    this.pf_trv,
    this.esi_basic,
    this.esi_da,
    this.esi_hra,
    this.esi_trv,
  )
  this.http.post('https://bssservice.herokuapp.com/manual_entry/manual_entry_unit_add', {
    "company": ""+this.company,
    "unit_code": ""+this.unit_code,
    "option": ""+this.option,
    "salary_type": ""+this.salary_type,
    "unit_name": ""+this.unit_namess,
    "day_month": ""+this.day_month,
    "pf_cover": ""+this.pf_cover,
    "pf_amount": ""+this.pf_amount,
    "esi_cover": ""+this.esi_cover,
    "esi_amount": ""+this.esi_amount,
    "esi_code": ""+ this.esi_code,
    "esi_district": ""+this.esi_district,
    "pf_basic": ""+this.pf_basic,
    "pf_da": ""+this.pf_da,
    "pf_hra": ""+this.pf_hra,
    "pf_trv": ""+ this.pf_trv,
    "esi_basic": ""+this.esi_basic,
    "esi_da": ""+this.esi_da,
    "esi_hra": ""+this.esi_hra,
    "esi_trv": ""+this.esi_trv,
    "esi_protax":""+ this.esi_protax
  }).subscribe((data:any) => {
     alert("Added Successfully");
     console.log(data.data)
     this.unit_ids =  data.data.id;
     console.log(this.unit_ids);
  });
}
  ngOnInit() {
    // this.tablereload();
  }
  tablereload(data){
  this.http.post('https://bssservice.herokuapp.com/manual_entry/manual_entry_rate_list', {"id":+data}).subscribe((data:any) => {
  this.datas = data.data;
  this.unit_ids = this.datas[0].unit_id
  console.log(this.datas);
  });
  }

  delete(data){
    console.log(data)
    this.http.post('https://bssservice.herokuapp.com/manual_entry/manual_entry_rate_delete', {"id":data.id}).subscribe((data:any) => {
       alert("deleted");
      this.tablereloads(this.unit_ids);
      });
  }

  calculate(){
    this.total_pay =  this.basic + this.da + this.hra + this.trv_exp + this.others + this.medical + this.others1 + this.others2 + this.others3 +this.others4 ;
  }
   
 addpayment()
    {
    if(this.unit_ids  ===  undefined){
      alert("create Unit First");
    }
    if(this.option === 'Standard'){
      let gross = this.basic + this.da + this.hra + this.trv_exp ;
      let a = gross - (gross * .12);
      let b = gross - (gross * .0175);
      this.pf =  gross - a;
      this.esi = gross - b;
      this.dec = this.pf + this.esi;
      this.total = this.total_pay - this.dec;
    }
    else if (this.option === 'User'){
      




    }
    if(this.pf_cover === "false"){
       this.pf = 0 ; 
    }
    if(this.esi_cover === 'false'){
      this.esi = 0 ;
    }



    console.log(this.rank,this.basic,this.da,this.hra,this.trv_exp,this.others,this.medical,this.others1,this.others2,this.others3,this.others4,this.total_pay,this.pf,this.esi,this.dec,this.total,this.unit_ids)
    this.http.post('https://bssservice.herokuapp.com/manual_entry/manual_entry_rate_add', {
      "rank": ""+this.rank,
      "basic": +this.basic,
      "da": +this.da,
      "hra": +this.hra,
      "trv_exp": +this.trv_exp,
      "others": +this.others,
      "medical": +this.medical,
      "others1": +this.others1,
      "others2": +this.others2,
      "others3": +this.others3,
      "others4": +this.others4,
      "total_pay": +this.total_pay,
      "pf": +this.pf,
      "esi": +this.esi,
      "dec": +this.dec,
      "total": +this.total,
      "unit_id": +this.unit_ids
    }).subscribe((data:any) => {
       alert("Payment added successfully");
       this.rank = "";
       this.basic = 0
       this.da = 0;
       this.hra = 0;
       this.trv_exp = 0;
       this.others = 0;
       this.medical = 0;
       this.others1 = 0;
       this.others2 = 0;
       this.others3 = 0;
       this.others4 = 0;
       this.total_pay = 0;
       this.pf = 0;
       this.esi = 0;
       this.dec = 0;
       this.total = 0;
       this.unit_ids = this.unit_ids
       this.tablereloads(this.unit_ids);
          });
  }
//////////////////////////////////////////
fetchalreadyregister(data){
  console.log(data);
  this.http.post('https://bssservice.herokuapp.com/manual_entry/manual_entry_unit_list', {"id":""+data}).subscribe((data:any) => {
    this.unitdetails = data.data;
    console.log(this.unitdetails[0])
    if(this.unitdetails.length === 0){
      this.submitbtton = true;
      this.updatebtton = false;
    }else{
      this.submitbtton = false;
      this.updatebtton = true;
    }
    let datas = this.unitdetails[0].id;
    this.tablereloads(datas); 
    });
}
tablereloads(data){
  this.http.post('https://bssservice.herokuapp.com/manual_entry/manual_entry_rate_list', {"id":+data}).subscribe((data:any) => {
    this.datas = data.data;
    console.log(this.datas);
    this.unit_ids = this.datas[0].unit_id
    });
}

}