import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';
import {formatDate } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-manual-entry-unit',
  templateUrl: './manual-entry-unit.component.html',
  styleUrls: ['./manual-entry-unit.component.scss']
})
export class ManualEntryUnitComponent implements OnInit {

company:string;
unit_code:string;
option:string;
salary_type:string;
salary_type_amount:string;

unit_name:string;
day_month:string;
day_month_date:string;

pf_cover:any;
pf_amount:string;
pf_amount_amount:string;

esi_cover:any;
esi_amount:string;
esi_code:string;
esi_district:string;
esi_protax:any;
pf_basic:any;
pf_da:any;
pf_hra:any;
pf_trv:any;
esi_basic:any;
esi_da:any;
esi_hra:any;
esi_trv:any;
prtax_basic:any;
prtax_da:any;
prtax_hra:any;
prtax_trv:any;
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
///////////////////////////////////////////////////////
ids:number;
id:number;
update1: boolean;
add: boolean;


constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router,private formBuilder: FormBuilder) {
   this.hours = false;
   this.days = false;
   this.pf_rules = false;
   this.submitbtton = false;
   this.updatebtton = false;
   this.pf_basic = undefined;
this.update1 = false;
this.add = true;




    
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

    }else {
      this.esi_district = data
      this.esi_code = data
      this.esi_protax = data

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
if (data === 'Hours'){
    this.hours = true;
  }
}
///////////////////
option_type(data){
  console.log(data);
  this.option = ""+data;
}
////////////
day_types(data){
 if (data === 'Custom'){
    this.days = true;
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
 if (data === 'Custom'){
    this.pf_rules = true;
  }
}
////////////////
// toggleEditable1(event) {
//   if ( event.target.checked ) {
//       this.esi_cover = ""+true;
//       console.log(this.esi_cover)
//  }else{
//   this.esi_cover = ""+false;
//   console.log(this.esi_cover)
//  }
// }
toggleEditable11(event){
  if ( event.target.checked ) {
    this.esi_cover = ""+true;
    console.log(this.esi_cover)
}else{
this.esi_cover = ""+false;
console.log(this.esi_cover)
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
    this.esi_trv = ""+true,
    this.prtax_basic = ""+true;
    this.prtax_da = ""+true;
    this.prtax_hra = ""+true;
    this.prtax_trv = ""+true;
  }
 
  if(this.salary_type === 'Day'){
    this.salary_type_amount = '0'
  }else if(this.salary_type === 'Monthly'){
    this.salary_type_amount = '1'
  }else if(this.salary_type === 'Hours'){
    this.salary_type_amount = this.salary_type_amount
  } 
  if(this.day_month === 'Default'){
    let now = new Date();
    let a  = new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
    console.log(a);
    this.day_month_date = ""+a;
  }else if(this.day_month === 'Dynamic'){
    this.day_month_date = '1'
  }else if(this.day_month === 'Custom'){
    this.day_month_date = this.day_month_date;
  }
  if(this.pf_amount === 'Default'){
    this.pf_amount_amount = '0'
  }else if(this.pf_amount === 'Dynamic'){
    this.pf_amount_amount = '1'
  }else if(this.pf_amount === 'Custom'){
    this.pf_amount_amount =   this.pf_amount_amount;
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
    this.prtax_basic,
    this.prtax_da,
    this.prtax_hra,
    this.prtax_trv,
    this.pf_amount_amount,
    this.day_month_date,
    this.salary_type_amount
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
    "esi_protax":""+ this.esi_protax,
    "pf_amount_amount":""+this.pf_amount_amount,
    "day_month_date":""+this.day_month_date,
    "salary_type_amount":""+this.salary_type_amount,
    "prtax_basic": ""+this.prtax_basic,
    "prtax_da": ""+this.prtax_da,
    "prtax_hra":""+this.prtax_hra,
    "prtax_trv": ""+this.prtax_trv
  }).subscribe((data:any) => {
     alert("Added Successfully");
     console.log(data.data)
     this.unit_ids =  data.data.id;
     let ucode  = data.data.unit_code
     console.log(this.unit_ids);
     this.fetchalreadyregister(ucode);
  });
}
  ngOnInit() {
 

  }
  tablereload(data) {
  this.http.post('https://bssservice.herokuapp.com/manual_entry/manual_entry_rate_list', {"id":+data}).subscribe((data:any) => {
  this.datas = data.data;
  this.unit_ids = this.datas[0].unit_id
  console.log(this.datas);
  });
  }

  delete(data){
    console.log(data);
    this.http.post('https://bssservice.herokuapp.com/manual_entry/manual_entry_rate_delete', {"id":data.id}).subscribe((data:any) => {
       alert("deleted");
      this.tablereloads(this.unit_ids);
      });
  }
  edit(data) {

    this.update1 = true;
    this.add = false;
    console.log(data);
    this.id = data.id;
    this.rank = data.rank;
    this.basic = data.basic;
    this.da = data.da;
    this.hra = data.hra;
    this.trv_exp = data.trv_exp;
    this.others = data.others;
    this.medical = data.medical;
    this.others1 = data.others1;
    this.others2 = data.others2;
    this.others3 = data.others3;
    this.others4 = data.others4;
    this.total_pay = data.total_pay;
    this.pf = data.pf;
    this.total = data.total;
    this.unit_id = data.unit_id;
  }
  clear(){
    this.rank = '';
    this.basic = 0;
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
  }
  updatepayment() {
    this.update1 = false;
    this.add = true;
    if(this.unit_ids  ===  undefined){
      alert("create Unit First");
    }
    console.log(this.option)
    if(this.option === 'Standard'){
      let gross = this.basic + this.da;
      let a = gross - (gross * .12);
      let gross1 = this.basic + this.da + this.hra;
      let b = gross1 - (gross1 * .0175);
      this.pf =  Math.round(gross - a);
      this.esi =  Math.round(gross1 - b);
      this.dec =  Math.round(this.pf + this.esi);
      this.total = this.total_pay - this.dec;
    }
    else if (this.option === 'User'){

      let gross = this.basic + this.da;
      let a = gross - (gross * .12);
      let gross1 = this.basic + this.da + this.hra;
      let b = gross1 - (gross1 * .0175);
      this.pf =  Math.round(gross - a);
      this.esi = Math.round(gross1 - b);
      this.dec = Math.round(this.pf + this.esi);
      this.total = this.total_pay - this.dec;
      
 
    }
    console.log(this.pf_cover,this.esi_cover,this.esi)
    if(this.pf_cover === undefined){
       this.pf = 0 ; 
       this.dec = this.esi;
       this.total = this.total_pay - this.dec;
       console.log(this.pf_cover,this.dec,this.esi,this.total,this.total_pay)
    }
    if(this.esi_cover === undefined){
      console.log()
      this.esi = 0 ;
      this.dec = this.pf;
      this.total = Math.round(this.total_pay - this.dec);
      console.log(this.pf_cover,this.dec,this.esi,this.total,this.total_pay)
    }
    if(this.esi_cover === undefined && this.pf_cover === undefined){
      this.dec = 0;
      this.esi = 0 ;
      this.pf = 0 ;
      this.total = this.total_pay;
    }
    if(this.pf_amount  === 'Default'){
      let gross = this.basic + this.da;
      let a = gross - (gross * .12);
      let gross1 = this.basic + this.da + this.hra;
      let b = gross1 - (gross1 * .0175);
      this.pf =  Math.round(gross - a);
      this.esi = Math.round(gross1 - b);
      this.dec = Math.round(this.pf + this.esi);
      this.total = this.total_pay - this.dec;
    }
    if(this.pf_amount === 'Custom'){
      if(+this.total_pay  >  +this.pf_amount_amount){
        console.log(this.pf_amount_amount)
        let gross = this.basic + this.da;
        let a = gross - (gross * .12);
        let gross1 = +this.pf_amount_amount;
        let b = gross1 - (gross1 * .0175);
        this.pf =  Math.round(gross - a);
        this.esi = Math.round(gross1 - b);
        this.dec = Math.round(this.pf + this.esi);
        this.total = Math.round(this.total_pay - this.dec);
      }
    }

    console.log(this.rank,this.basic,this.da,this.hra,this.trv_exp,this.others,this.medical,this.others1,this.others2,this.others3,this.others4,this.total_pay,this.pf,this.esi,this.dec,this.total,this.unit_ids);
    this.http.post('https://bssservice.herokuapp.com/manual_entry/manual_entry_rate_update', {
      'id': +this.id,
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
       alert("Payment update successfully");
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
  calculate(){
    this.total_pay =  this.basic + this.da + this.hra + this.trv_exp + this.others + this.medical + this.others1 + this.others2 + this.others3 +this.others4 ;
  }
   
 addpayment()
    {
    if(this.unit_ids  ===  undefined){
      alert("create Unit First");
    }
    console.log(this.option)
    if(this.option === 'Standard'){
      let gross = this.basic + this.da;
      let a = gross - (gross * .12);
      let gross1 = this.basic + this.da + this.hra;
      let b = gross1 - (gross1 * .0175);
      this.pf =  Math.round(gross - a);
      this.esi =  Math.round(gross1 - b);
      this.dec =  Math.round(this.pf + this.esi);
      this.total = this.total_pay - this.dec;
    }
    else if (this.option === 'User'){

      let gross = this.basic + this.da;
      let a = gross - (gross * .12);
      let gross1 = this.basic + this.da + this.hra;
      let b = gross1 - (gross1 * .0175);
      this.pf =  Math.round(gross - a);
      this.esi = Math.round(gross1 - b);
      this.dec = Math.round(this.pf + this.esi);
      this.total = this.total_pay - this.dec;
      
 
    }
    console.log(this.pf_cover,this.esi_cover,this.esi)
    if(this.pf_cover === undefined){
       this.pf = 0 ; 
       this.dec = this.esi;
       this.total = this.total_pay - this.dec;
       console.log(this.pf_cover,this.dec,this.esi,this.total,this.total_pay)
    }
    if(this.esi_cover === undefined){
      console.log()
      this.esi = 0 ;
      this.dec = this.pf;
      this.total = Math.round(this.total_pay - this.dec);
      console.log(this.pf_cover,this.dec,this.esi,this.total,this.total_pay)
    }
    if(this.esi_cover === undefined && this.pf_cover === undefined){
      this.dec = 0;
      this.esi = 0 ;
      this.pf = 0 ;
      this.total = this.total_pay;
    }
    if(this.pf_amount  === 'Default'){
      let gross = this.basic + this.da;
      let a = gross - (gross * .12);
      let gross1 = this.basic + this.da + this.hra;
      let b = gross1 - (gross1 * .0175);
      this.pf =  Math.round(gross - a);
      this.esi = Math.round(gross1 - b);
      this.dec = Math.round(this.pf + this.esi);
      this.total = this.total_pay - this.dec;
    }
    if(this.pf_amount === 'Custom'){
      if(+this.total_pay  >  +this.pf_amount_amount){
        console.log(this.pf_amount_amount)
        let gross = this.basic + this.da;
        let a = gross - (gross * .12);
        let gross1 = +this.pf_amount_amount;
        let b = gross1 - (gross1 * .0175);
        this.pf =  Math.round(gross - a);
        this.esi = Math.round(gross1 - b);
        this.dec = Math.round(this.pf + this.esi);
        this.total = Math.round(this.total_pay - this.dec);
      }
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
    console.log(this.unitdetails)
    if(this.unitdetails.length === 0) {
      this.submitbtton = true;
      this.updatebtton = false;
      this.option = undefined;
      this.salary_type = undefined;
      this.salary_type_amount = undefined;
      this.day_month = undefined;
      this.day_month_date = undefined;
      this.pf_cover = undefined;
      this.pf_amount = undefined;
      this.pf_amount_amount = undefined;
      this.esi_cover = undefined;
      this.esi_amount = undefined;
      this.pf_basic = undefined;
      this.pf_da = undefined;
      this.pf_hra = undefined;
      this.pf_trv = undefined;
      this.esi_basic = undefined;
      this.esi_da = undefined;
      this.esi_hra = undefined;
      this.esi_trv = undefined;
      this.prtax_basic = undefined;
      this.prtax_da = undefined;
      this.prtax_hra = undefined;
      this.prtax_trv = undefined;
    }else if(this.unitdetails.length > 0) {
    this.submitbtton = false;
    this.updatebtton = true;
    this.unit_ids = this.unitdetails[0].id;
    this.salary_type_amount = this.unitdetails[0].salary_type_amount;
    this.option = this.unitdetails[0].option;
    this.salary_type = this.unitdetails[0].salary_type;
    this.day_month = this.unitdetails[0].day_month;
    this.pf_cover = this.unitdetails[0].pf_cover == 'true' ? true : false;
    this.pf_amount = this.unitdetails[0].pf_amount;
    this.pf_amount_amount = this.unitdetails[0].pf_amount_amount;
    this.esi_cover = this.unitdetails[0].esi_cover == 'true' ? true : false;
    this.esi_amount =  this.unitdetails[0].esi_amount;
    this.esi_code = this.unitdetails[0].esi_code;
    this.esi_district =  this.unitdetails[0].esi_district;
    this.esi_protax =  this.unitdetails[0].esi_protax == 'true' ? true : false;
    this.pf_basic =  this.unitdetails[0].pf_basic == 'true' ? true : false;
    this.pf_da =  this.unitdetails[0].pf_da == 'true' ? true : false;
    this.pf_hra =  this.unitdetails[0].pf_hra == 'true' ? true : false;
    this.pf_trv =  this.unitdetails[0].pf_trv == 'true' ? true : false;
    this.esi_basic =  this.unitdetails[0].esi_basic == 'true' ? true : false;
    this.esi_da =  this.unitdetails[0].esi_da == 'true' ? true : false;
    this.esi_hra =  this.unitdetails[0].esi_hra == 'true' ? true : false;
    this.esi_trv =  this.unitdetails[0].esi_trv == 'true' ? true : false;
    this.prtax_basic =  this.unitdetails[0].prtax_basic == 'true' ? true : false;
    this.prtax_hra =  this.unitdetails[0].prtax_hra == 'true' ? true : false;
    this.prtax_da =  this.unitdetails[0].da == 'true' ? true : false;
    this.prtax_trv =  this.unitdetails[0].prtax_trv == 'true' ? true : false;
    if(this.pf_cover === 'undefined'){
      this.pf_cover = undefined;
    } 
    if(this.esi_cover === 'undefined'){
      this.esi_cover = undefined;
    }
    if(this.pf_cover === 'false'){
      this.pf_cover = undefined;
    } 
    if(this.esi_cover === 'false'){
      this.esi_cover = undefined;
    }
    if(this.salary_type === 'Hours'){
      this.hours = true;
      this.salary_type_amount = this.unitdetails[0].salary_type_amount;
    }
    if(this.pf_amount === 'Custom'){
      this.pf_rules = true;
      this.pf_amount_amount = this.unitdetails[0].pf_amount_amount;
    }
    if(this.day_month === 'Custom'){
      this.days = true;
      this.day_month_date = this.unitdetails[0].day_month_date;
    }
    if(this.pf_basic === 'undefined'){
      this.pf_basic  = undefined;
    }
    if(this.pf_da === 'undefined'){
      this.pf_da  = undefined;
    }
    if(this.pf_hra === 'undefined'){
      this.pf_hra  = undefined;
    }
    if(this.pf_trv === 'undefined'){
      this.pf_trv  = undefined;
    }
    if(this.esi_basic === 'undefined'){
      this.esi_basic  = undefined;
    }
    if(this.esi_da === 'undefined'){
      this.esi_da = undefined;
    }
    if(this.esi_hra === 'undefined'){
      this.esi_hra  = undefined;
    }
    if(this.esi_trv === 'undefined'){
      this.esi_trv  = undefined;
    }
    if(this.prtax_basic === 'undefined'){
      this.prtax_basic  = undefined;
    }
    if(this.prtax_da === 'undefined'){
      this.prtax_da  = undefined;
    }
    if(this.prtax_hra === 'undefined'){
      this.prtax_hra  = undefined;
    }
    if(this.prtax_trv === 'undefined'){
      this.prtax_trv  = undefined;
    }
    console.log(this.unit_ids);
    this.tablereloads(this.unit_ids);
    }
    });
}
tablereloads(data){
  console.log('in');
  this.http.post('https://bssservice.herokuapp.com/manual_entry/manual_entry_rate_list', {"id":+data}).subscribe((data:any) => {
    this.datas = data.data;
    console.log(this.datas);
    });
}
update(){
  console.log("in");
  if(this.option === 'Standard'){
    this.pf_basic= ""+true,
    this.pf_da = ""+true,
    this.pf_hra  = ""+true,
    this.pf_trv = ""+true, 
    this.esi_basic = ""+true,
    this.esi_da = ""+true,
    this.esi_hra = ""+true,
    this.esi_trv = ""+true,
    this.prtax_basic = ""+true;
    this.prtax_da = ""+true;
    this.prtax_hra = ""+true;
    this.prtax_trv = ""+true;
  }
  if(this.salary_type === 'Day'){
    this.salary_type_amount = '0'
  }else if(this.salary_type === 'Monthly'){
    this.salary_type_amount = '1'
  }else if(this.salary_type === 'Hours'){
    this.salary_type_amount = this.salary_type_amount
  } 
  if(this.day_month === 'Default'){
    this.day_month_date = '0'
  }else if(this.day_month === 'Dynamic'){
    this.day_month_date = '1'
  }else if(this.day_month === 'Custom'){
    this.day_month_date = this.day_month_date;
  }
  if(this.pf_amount === 'Default'){
    this.pf_amount_amount = '0'
  }else if(this.pf_amount === 'Dynamic'){
    this.pf_amount_amount = '1'
  }else if(this.pf_amount === 'Custom'){
    this.pf_amount_amount =   this.pf_amount_amount;
  }
  // console.log(
  //   ""+this.company,
  //   ""+this.unit_code,
  //   ""+this.option,
  //   ""+this.salary_type,
  //   ""+this.unit_namess,
  //   ""+this.day_month,
  //   ""+this.pf_cover,
  //   ""+this.pf_amount,
  //   ""+this.esi_cover,
  //   ""+this.esi_amount,
  //   ""+this.esi_code,
  //   ""+this.esi_district,
  //   ""+this.esi_protax,
  //   ""+this.pf_basic,
  //   ""+this.pf_da,
  //   ""+this.pf_hra,
  //   ""+this.pf_trv,
  //   ""+this.esi_basic,
  //   ""+this.esi_da,
  //   ""+this.esi_hra,
  //   ""+this.esi_trv,
  //   this.prtax_basic,
  //   this.prtax_da,
  //   this.prtax_hra,
  //   this.prtax_trv,
  //   this.pf_amount_amount,
  //   this.day_month_date,
  //   this.salary_type_amount
  // )


  console.log(
    this.unit_ids,
    this.company,
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
    this.salary_type_amount,
    this.day_month_date,
    this.pf_amount_amount,
    )




  this.http.post('https://bssservice.herokuapp.com/manual_entry/manual_entry_unit_update', {
    "id":+this.unit_ids,
    "company": ""+this.company, 
    "unit_code": ""+this.unit_code, 
    "option":""+this.option,
    "salary_type": ""+this.salary_type,
    "unit_name": ""+this.unit_namess,
    "day_month": ""+this.day_month,
    "pf_cover": ""+this.pf_cover,
    "pf_amount": ""+this.pf_amount,
    "esi_cover":""+this.esi_cover,
    "esi_amount": ""+this.esi_amount,
    "esi_code": ""+ this.esi_code,
    "esi_district":""+this.esi_district,
    "esi_protax": ""+this.esi_protax,
    "pf_basic": ""+this.pf_basic,
    "pf_da": ""+this.pf_da,
    "pf_hra": ""+this.pf_hra,
    "pf_trv":""+this.pf_trv,
    "esi_basic":  ""+this.esi_basic,
    "esi_da": ""+this.esi_da,
    "esi_hra": ""+this.esi_hra,
    "esi_trv": ""+this.esi_trv,
    "salary_type_amount":""+this.salary_type_amount,
    "day_month_date": ""+this.day_month_date,
    "pf_amount_amount": ""+this.pf_amount_amount,
    "prtax_basic": ""+this.prtax_basic,
    "prtax_da": ""+this.prtax_da,
    "prtax_hra":""+this.prtax_hra,
    "prtax_trv": ""+this.prtax_trv
  }).subscribe((data:any) => {
     alert("Updated Successfully");
     console.log(data.data)
     this.unit_ids =  data.data.unit_code;
     console.log(this.unit_ids);
     this.fetchalreadyregister(this.unit_ids);
  });
}


}
