import { Component, OnInit,Inject } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';
import {formatDate, NumberSymbol } from '@angular/common';
import {LOCAL_STORAGE,  WebStorageService } from 'angular-webstorage-service';


@Component({
  selector: 'app-paymentdetails',
  templateUrl: './paymentdetails.component.html',
  styleUrls: ['./paymentdetails.component.scss']
})
export class PaymentdetailsComponent implements OnInit {
  titles = [];

  payment_details:any;

  datas: any;
  cliid:string;
  model: form1model;
  employee_id:string;
  tbasic:number = 0;
  tda:number= 0;
  taddhousr:number =0;
  tothers:number =0;
  tleave:number = 0;
  tbouns:number =0;
  tweekly:number =0;
  tgross:number =0;
  tepf:number =0;
  tesi:number =0;
  tnet:number =0;


  tbasic1:number = 0;
  tda1:number= 0;
  taddhousr1:number =0;
  tothers1:number =0;
  tleave1:number = 0;
  tbouns1:number =0;
  tweekly1:number =0;
  tgross1:number =0;
  tepf1:number =0;
  tesi1:number =0;
  tnet1:number =0;

  date:string;



  uniform:number = 0;
  adv:number =0;
  mess:number=0;
  rent:number=0;
  atm:number=0;
  other:number=0;
  loan:number=0;
  phone:number=0;
  numberday:number = 0 ;

  totaldection:number=0;
  protax:number=0;


  emi:any;
  start_date:string;
  end_date:string;

  additonal_dutys:number;
  duty_amounts:number;
  total_amount:number;
  







  


  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,private http: HttpClient ,private route: ActivatedRoute, private router: Router) {
    this.start_date = formatDate(new Date(), 'yyyy-MM', 'en');
    var j = formatDate(new Date(), 'yyyy-MM', 'en');
    this.date = formatDate(new Date(), 'yyyy-MM', 'en');

    this.start_date = j +"-01" ;
    this.end_date =  j +"-31" ;
    this.payment_details = this.getFromLocal('payrollpayments');
    console.log(this.payment_details);
   
    this.http.post('https://bssservice.herokuapp.com/authentication/employee_id',{employee_id:""+this.payment_details[0].employee_id}).subscribe((data:any)  => {
      this.datas = data.data;
      console.log(this.datas);   
      });

      this.http.post('https://bssservice.herokuapp.com/advance/monthlyfetch',{ 
        "employee_id":this.payment_details[0].employee_id,
        "start_date":this.start_date,
        "end_date": this.end_date
        }).subscribe((data:any) => {
     this.emi = data.data;
    for(let j=0; j<this.emi.length; j++){
      console.log(this.emi[j].advance_type)
      if(this.emi[j].advance_type == 'Advance'){
        this.adv = this.adv + this.emi[j].pamount
      }else if(this.emi[j].advance_type == 'Loan'){
        this.loan = this.loan + this.emi[j].pamount
      }else if(this.emi[j].advance_type == 'Uniform'){
        this.uniform = this.uniform + this.emi[j].pamount
      }else if(this.emi[j].advance_type == 'Mess'){
        this.mess = this.mess + this.emi[j].pamount
      }else if(this.emi[j].advance_type == 'Rent'){
        this.rent = this.rent + this.emi[j].pamount
      }else if(this.emi[j].advance_type == 'ATM Card'){
        this.atm = this.atm + this.emi[j].pamount
      }else if(this.emi[j].advance_type == 'Others'){
        this.other = this.other + this.emi[j].pamount
      }else if(this.emi[j].advance_type == 'Phone'){
        this.phone = this.phone + this.emi[j].pamount
      }
    }
    this.calculation();
     console.log(this.emi);
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
    this.calculation1();
    let now = new Date();
    let a  = new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
    console.log(a);
    this.numberday = this.payment_details.length;
    this.additonal_dutys =  a  -  this.numberday;
    for(let i = 0;i < a ;i++ ){
             this.tbasic = this.tbasic + this.payment_details[i].basic;
             this.taddhousr = this.taddhousr + this.payment_details[i].addhours;
             this.tbouns = this.tbouns + this.payment_details[i].bouns;
             this.tda = this.tda + this.payment_details[i].da;
             this.tepf = this.tepf + this.payment_details[i].epf;
             this.tesi = this.tesi + this.payment_details[i].esi;
             this.tgross = this.tgross + this.payment_details[i].gross;
             this.tleave = this.tleave + this.payment_details[i].leave;
             this.tnet = this.tnet + this.payment_details[i].net;
             this.tothers = this.tothers + this.payment_details[i].other;
             this.tweekly = this.tweekly + this.payment_details[i].weekly;
          } 
          this.calculation();

    }


    calculation(){
      this.tgross = this.tbasic + this.tda + this.taddhousr + this.tothers;
      console.log(this.protax,this.uniform,this.adv,this.mess,this.rent,this.atm,this.other,this.loan,this.phone,this.tepf,this.tesi)
      console.log(this.protax + this.uniform+ this.adv + this.mess + this.rent + this.atm + this.other + this.loan + this.phone + this.tepf + this.tesi )
      this.totaldection =  this.protax + this.uniform+ this.adv + this.mess + this.rent + this.atm + this.other + this.loan + this.phone + this.tepf + this.tesi;
      this.tnet  = this.tgross -  this.totaldection;
      console.log(this.tbasic);
      this.total()
    }

    calculation1(){
      let now = new Date();
      let a  = new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
      console.log(a);
      for(let i = a;i < this.payment_details.length;i++ ){
        this.tbasic1 = this.tbasic1 + this.payment_details[i].basic;
        this.taddhousr1 = this.taddhousr1 + this.payment_details[i].addhours;
        this.tbouns1 = this.tbouns1 + this.payment_details[i].bouns;
        this.tda1 = this.tda1 + this.payment_details[i].da;
        this.tepf1 = this.tepf1 + this.payment_details[i].epf;
        this.tesi1 = this.tesi1 + this.payment_details[i].esi;
        this.tgross1 = this.tgross1 + this.payment_details[i].gross;
        this.tleave1 = this.tleave1 + this.payment_details[i].leave;
        this.tnet1 = this.tnet1 + this.payment_details[i].net;
        this.tothers1 = this.tothers1 + this.payment_details[i].other;
        this.tweekly1 = this.tweekly1 + this.payment_details[i].weekly;
     } 
     this.calculation2();
    }

    calculation2(){
      console.log(this.tbasic1,this.taddhousr1,this.tda1,this.tepf1,this.tesi1,this.tgross1,this.tleave1,this.tnet1,this.tothers1,this.tweekly1);
      this.tnet1 = this.tbasic1 + this.taddhousr1 + this.tbouns1 + this.tda1 + this.tepf1 + this.tesi1 + this.tgross1 + this.tleave1 + this.tnet1 + this.tothers1 + this.tweekly1 ;
      console.log(this.tnet1);
      this.total()
    }


    total(){
      this.total_amount = this.tnet + this.tnet1;
    }




    process(){
      console.log(this.date)
      this.http.post('/payroll/addsalaryprocess',{ 
                    "employee_name":""+this.datas.Name,
                    "employee_type":""+this.datas.employee_type,
                    "employee_id":""+this.datas.id,
                    "bank_name":""+this.datas.bankname,
                    "account_number":""+this.datas.a_c,
                    "ifscnumber": ""+this.datas.ifsc,
                    "phonenumber":""+this.datas.Mobile_No,
                    "emailid": ""+this.datas.Email_ID,
                    "basic": +this.tbasic,
                    "da":+this.tda ,
                    "hra": +this.taddhousr ,
                    "others":  +this.tothers ,
                    "leave":  +this.tleave,
                    "bouns": +this.tbouns ,
                    "weeklyoff":  +this.tweekly ,
                    "noofdays":  +this.numberday ,
                    "gross":  +this.tgross ,
                    "pf":  +this.tepf ,
                    "esi":  +this.tesi ,
                    "prtax":  +this.protax ,
                    "adv":  +this.adv,
                    "uniform":  +this.uniform ,
                    "mess": +this.mess ,
                    "rent":  +this.rent ,
                    "atm":  +this.atm,
                    "loan":  +this.loan ,
                    "otherss":  +this.other ,
                    "totaldedcation":  +this.totaldection ,
                    "netamount": +this.tnet ,
                    "site_name": ""+this.datas.site_name,
                    "date": ""+this.date,
                    "additional_duty":+this.additonal_dutys,
                    "duty_amount":+this.tnet1,
                    "total_amount":+this.total_amount
        }).subscribe((data:any) => {
          this.router.navigate(['main/payrollemployeestatus'])
        alert("Process completed");
       });






    }
    

}


class form1model {
  Email_id: "1";
}

