
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';

import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addclietn2',
  templateUrl: './addclietn2.component.html',
  styleUrls: ['./addclietn2.component.scss']
})
export class Addclietn2Component implements OnInit {

  datas: any; 
  cliid:any;
  addempreq: Addclient;
  constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router)  {
    this.addempreq = new Addclient();
    this.route.params.subscribe(params => {
    
   //  this.email_id = params['id']; // (+) converts string 'id' to a number
   //  console.log('this id: ' + this.email_id);
    this.addempreq.cliid = params['id'];
    console.log(this.addempreq.cliid);
 });

  }

  ngOnInit() {
   
  }

  



  addapi(){
    let a = (50 * this.addempreq.salary_am )/100;
    this.addempreq.am_bss = a ;
    console.log(this.addempreq.am_bss);

    let b = (50 * this.addempreq.salary_am )/100;
    this.addempreq.am_employee = b ;
    console.log(this.addempreq.am_employee);

    let c = this.addempreq.salary_am/30;
    this.addempreq.am_30days = c ;
    console.log(this.addempreq.am_30days);

    let d = this.addempreq.salary_am/31;
    this.addempreq.am_31days = d ;
    console.log(this.addempreq.am_31days);

    let  e = this.addempreq.salary_am/28;
    this.addempreq.am_28days = e ;
    console.log(this.addempreq.am_28days);

    let  f = this.addempreq.salary_am/29;
    this.addempreq.am_29days = f ;
    console.log(this.addempreq.am_29days);

    let g = (50 * this.addempreq.over_time_am)/100;
    this.addempreq.am_ot_bss = g ;
    console.log(this.addempreq.am_ot_bss);

    let h = (50 * this.addempreq.over_time_am)/100;
    this.addempreq.am_ot_employee = h ;
    console.log(this.addempreq.am_ot_employee);

    let a1 = (50 * this.addempreq.salary_as)/100;
    this.addempreq.as_bss = a1 ;
    console.log(this.addempreq.as_bss);

    let b1 = (50 * this.addempreq.salary_as)/100;
    this.addempreq.as_employee = b1 ;
    console.log(this.addempreq.as_employee);

    let c1 = this.addempreq.salary_as/30;
    this.addempreq.as_30days = c1 ;
    console.log(this.addempreq.as_30days);

    let d1 = this.addempreq.salary_as/31;
    this.addempreq.as_31days = d1 ;
    console.log(this.addempreq.as_31days);

    let  e1 = this.addempreq.salary_as/28;
    this.addempreq.as_28days = e1 ;
    console.log(this.addempreq.as_28days);

    let  f1 = this.addempreq.salary_as/29;
    this.addempreq.as_29days = f1 ;
    console.log(this.addempreq.as_29days);

    let g1 = (50 * +this.addempreq.over_time_as)/100;
    this.addempreq.as_ot_bss = g1 ;
    console.log(this.addempreq.as_ot_bss);

    let h1 = (50 * this.addempreq.over_time_as)/100;
    this.addempreq.as_ot_employee = h1 ;
    console.log(this.addempreq.as_ot_employee);

    let a2 = (50 * this.addempreq.salary_s )/100;
    this.addempreq.s_bss = a2 ;
    console.log(this.addempreq.s_bss);

    let b2 = (50 * this.addempreq.salary_s )/100;
    this.addempreq.s_employee = b2 ;
    console.log(this.addempreq.s_employee);

    let c2 = this.addempreq.salary_s/30;
    this.addempreq.s_30days = c2 ;
    console.log(this.addempreq.s_30days);

    let d2 = this.addempreq.salary_s/31;
    this.addempreq.s_31days = d2 ;
    console.log(this.addempreq.s_31days);

    let  e2 = this.addempreq.salary_s/28;
    this.addempreq.s_28days = e2 ;
    console.log(this.addempreq.s_28days);

    let  f2 = this.addempreq.salary_s/29;
    this.addempreq.s_29days = f2 ;
    console.log(this.addempreq.s_29days);

    let g2 = (50 * this.addempreq.over_time_s)/100;
    this.addempreq.s_ot_bss = g2 ;
    console.log(this.addempreq.s_ot_bss);

    let h2 = (50 * this.addempreq.over_time_s)/100;
    this.addempreq.s_ot_employee = h2 ;
    console.log(this.addempreq.s_ot_employee);

   let tot =  ( this.addempreq.salary_am + this.addempreq.salary_as + this.addempreq.salary_s);
   this.addempreq.total_amount = tot ; 
   console.log(this.addempreq.total_amount);

   let am_tot = ( this.addempreq.salary_am * this.addempreq.No_am )
   this.addempreq.am_tot = am_tot ; 
   console.log(this.addempreq.am_tot);

   let as_tot = ( this.addempreq.salary_as * this.addempreq.No_as )
   this.addempreq.as_tot = as_tot ; 
   console.log(this.addempreq.as_tot);

   let s_tot =  ( this.addempreq.salary_s * this.addempreq.No_s ) 
   this.addempreq.s_tot = s_tot ; 
   console.log(this.addempreq.s_tot);



    this.cliid = (this.addempreq.cliid);

    
    console.log(this.addempreq)
    this.http.post('https://bssservice.herokuapp.com/authentication/addclients1', this.addempreq).subscribe(data => {
      this.datas = data;
      console.log(this.datas);
      if(this.datas.data == "Success"){
        console.log("this is my"+this.cliid);
        alert("Added Successfully");
        this.router.navigate(['main/salesbilling/'+this.cliid])
      }else{

      }
      });
   
  }

}

class Addclient{

  cliid: string;
 
  No_am:number;
  No_as:number;
  No_s:number;

  shift_type:string;
  hour_type:string;
  payment_type:string;

  salary_am:number;
  am_bss:number;
  am_employee:number;
  am_30days:number;
  am_31days:number;
  am_28days:number;
  am_29days:number;
  over_time_am:number;
  am_ot_bss:number;
  am_ot_employee:number;

  salary_as:number;
  as_bss:number;
  as_employee:number;
  as_30days:number;
  as_31days:number;
  as_28days:number;
  as_29days:number;
  over_time_as:number;
  as_ot_bss:number;
  as_ot_employee:number;

  salary_s:number;
  s_bss:number;
  s_employee:number;
  s_30days:number;
  s_31days:number;
  s_28days:number;
  s_29days:number;
  over_time_s:number;
  s_ot_bss:number;
  s_ot_employee:number;

  total_amount:number;

  am_tot:number;
  as_tot:number;
  s_tot:number;

}
