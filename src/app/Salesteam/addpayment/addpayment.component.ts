import { NgModule,Pipe,Component, OnInit ,Attribute} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {formatDate } from '@angular/common';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-Addpayment',
  templateUrl: './addpayment.component.html',
  styleUrls: ['./addpayment.component.scss']
})
export class AddpaymentComponent implements OnInit {
  
  cliid:number;
  site_id:string;
  datas: any;
  Addpayment : Addpayment;



  constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) { 
    this.Addpayment = new Addpayment();
    console.log(this.Addpayment);
 
    }

 

  ngOnInit() {
    this.Addpayment = new Addpayment();
    this.route.params.subscribe(params => {
      this.site_id = params['id']; // (+) converts string 'id' to a number
      console.log('this id: ' + this.site_id);
  });

  }

    addapi(){
      this.Addpayment.site_id = ""+this.site_id;
      if(this.Addpayment.employee_type == null || this.Addpayment.employee_type == undefined )
      {
            this.Addpayment.employee_type = "";
      }
      if(this.Addpayment.basic == null || this.Addpayment.basic == undefined )
      {
            this.Addpayment.basic = 0;
      }
      if(this.Addpayment.da == null || this.Addpayment.da == undefined )
      {
            this.Addpayment.da = 0;
      }
      if(this.Addpayment.additional_hours == null || this.Addpayment.additional_hours == undefined )
      {
            this.Addpayment.additional_hours = 0;
      }
      if(this.Addpayment.others == null || this.Addpayment.others == undefined )
      {
            this.Addpayment.others = 0;
      }
      if(this.Addpayment.subtotala == null || this.Addpayment.subtotala == undefined )
      {
            this.Addpayment.subtotala = 0;
      }
      if(this.Addpayment.leave == null || this.Addpayment.leave == undefined )
      {
            this.Addpayment.leave = 0;
      }
      if(this.Addpayment.subtotalb == null || this.Addpayment.subtotalb == undefined )
      {
            this.Addpayment.subtotalb = 0;
      }
      if(this.Addpayment.pf == null || this.Addpayment.pf == undefined )
      {
            this.Addpayment.pf = 0;
      }
      if(this.Addpayment.esi == null || this.Addpayment.esi == undefined )
      {
            this.Addpayment.esi = 0;
      }
      if(this.Addpayment.gratuity == null || this.Addpayment.gratuity == undefined )
      {
            this.Addpayment.gratuity = 0;
      }
      if(this.Addpayment.bouns == null || this.Addpayment.bouns == undefined )
      {
            this.Addpayment.bouns = 0;
      }
      if(this.Addpayment.subtotalc == null || this.Addpayment.subtotalc == undefined )
      {
            this.Addpayment.subtotalc = 0;
      }
      if(this.Addpayment.total == null || this.Addpayment.total == undefined )
      {
            this.Addpayment.total = 0;
      }
      if(this.Addpayment.weekly_off == null || this.Addpayment.weekly_off == undefined )
      {
            this.Addpayment.weekly_off = 0;
      }
      if(this.Addpayment.agency_charges == null || this.Addpayment.agency_charges == undefined )
      {
            this.Addpayment.agency_charges = 0;
      }
      if(this.Addpayment.subtotal == null || this.Addpayment.subtotal == undefined )
      {
            this.Addpayment.subtotal = 0;
      }
      if(this.Addpayment.rounded_off == null || this.Addpayment.rounded_off == undefined )
      {
            this.Addpayment.rounded_off = 0;
      }
      console.log(this.Addpayment);
      this.http.post('https://bssservice.herokuapp.com/payment/payadd', this.Addpayment).subscribe(data => {
        this.datas = data; 
        alert("Added Successfully");
        this.router.navigate(['main/paymentpage/' + this.site_id])
      });
    }



    add1(){
      this.Addpayment.subtotala = this.Addpayment.basic + this.Addpayment.da + this.Addpayment.additional_hours + this.Addpayment.others;
    }
    add2(){
      this.Addpayment.subtotalb = this.Addpayment.subtotala + this.Addpayment.leave ;
    }
    add3(){
      this.Addpayment.subtotalc =  this.Addpayment.pf + this.Addpayment.esi + this.Addpayment.gratuity + this.Addpayment.bouns;
      this.Addpayment.total =  this.Addpayment.subtotalc + this.Addpayment.subtotalb;
    }
    add4(){
      this.Addpayment.subtotal =  this.Addpayment.total + this.Addpayment.weekly_off + this.Addpayment.agency_charges;
      this.Addpayment.rounded_off =  Math.round(this.Addpayment.subtotal)
    }

}



class Addpayment{
  site_id: string;
  employee_type: string;
  basic: number;
  da: number;
  additional_hours: number;
  others: number;
  subtotala: number;
  leave: number;
  subtotalb: number;
  pf: number;
  gratuity: number;
  esi: number;
  bouns: number;
  subtotalc: number;
  total: number;
  weekly_off: number;
  agency_charges: number;
  subtotal: number;
  rounded_off: number;
}
