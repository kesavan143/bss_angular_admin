import { NgModule, Pipe, Component, OnInit, Attribute } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { formatDate } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
      selector: 'app-updatepayment',
      templateUrl: './updatepayment.component.html',
      styleUrls: ['./updatepayment.component.scss']
})
export class UpdatepaymentComponent implements OnInit {


      cliid: number;
      site_id: string;
      datas: any;
      Addpayment: Addpayment;
      datass: any;
      amount: number;


      employee_datass: any;
      employee_amount: number;



      constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
            this.Addpayment = new Addpayment();

      }



      ngOnInit() {
            this.Addpayment = new Addpayment();
            this.route.params.subscribe(params => {
                  this.Addpayment.id = params['id']; // (+) converts string 'id' to a number
                  console.log('this id: ' + this.Addpayment.id);
                  this.http.post('https://bssservice.herokuapp.com/payment/payfetch', { "id": "" + this.Addpayment.id }).subscribe((data: any) => {
                        this.Addpayment = data.data[0];
                        this.amount = data.data[0].rounded_off;
                        console.log(this.amount);

                  });
            });
      }

      addapi() {

            if (this.amount == this.Addpayment.rounded_off) {

                  if (this.Addpayment.employee_type == null || this.Addpayment.employee_type == undefined) {
                        this.Addpayment.employee_type = "";
                  }
                  if (this.Addpayment.basic == null || this.Addpayment.basic == undefined) {
                        this.Addpayment.basic = 0;
                  }
                  if (this.Addpayment.da == null || this.Addpayment.da == undefined) {
                        this.Addpayment.da = 0;
                  }
                  if (this.Addpayment.additional_hours == null || this.Addpayment.additional_hours == undefined) {
                        this.Addpayment.additional_hours = 0;
                  }
                  if (this.Addpayment.others == null || this.Addpayment.others == undefined) {
                        this.Addpayment.others = 0;
                  }
                  if (this.Addpayment.subtotala == null || this.Addpayment.subtotala == undefined) {
                        this.Addpayment.subtotala = 0;
                  }
                  if (this.Addpayment.leave == null || this.Addpayment.leave == undefined) {
                        this.Addpayment.leave = 0;
                  }
                  if (this.Addpayment.subtotalb == null || this.Addpayment.subtotalb == undefined) {
                        this.Addpayment.subtotalb = 0;
                  }
                  if (this.Addpayment.pf == null || this.Addpayment.pf == undefined) {
                        this.Addpayment.pf = 0;
                  }
                  if (this.Addpayment.esi == null || this.Addpayment.esi == undefined) {
                        this.Addpayment.esi = 0;
                  }
                  if (this.Addpayment.gratuity == null || this.Addpayment.gratuity == undefined) {
                        this.Addpayment.gratuity = 0;
                  }
                  if (this.Addpayment.bouns == null || this.Addpayment.bouns == undefined) {
                        this.Addpayment.bouns = 0;
                  }
                  if (this.Addpayment.subtotalc == null || this.Addpayment.subtotalc == undefined) {
                        this.Addpayment.subtotalc = 0;
                  }
                  if (this.Addpayment.total == null || this.Addpayment.total == undefined) {
                        this.Addpayment.total = 0;
                  }
                  if (this.Addpayment.weekly_off == null || this.Addpayment.weekly_off == undefined) {
                        this.Addpayment.weekly_off = 0;
                  }
                  if (this.Addpayment.agency_charges == null || this.Addpayment.agency_charges == undefined) {
                        this.Addpayment.agency_charges = 0;
                  }
                  if (this.Addpayment.subtotal == null || this.Addpayment.subtotal == undefined) {
                        this.Addpayment.subtotal = 0;
                  }
                  if (this.Addpayment.rounded_off == null || this.Addpayment.rounded_off == undefined) {
                        this.Addpayment.rounded_off = 0;
                  } if (this.Addpayment.ebasic == null || this.Addpayment.ebasic == undefined) {
                        this.Addpayment.ebasic = 0;
                  }
                  if (this.Addpayment.eda == null || this.Addpayment.eda == undefined) {
                        this.Addpayment.eda = 0;
                  }
                  if (this.Addpayment.eadditional_hours == null || this.Addpayment.eadditional_hours == undefined) {
                        this.Addpayment.eadditional_hours = 0;
                  }
                  if (this.Addpayment.eothers == null || this.Addpayment.eothers == undefined) {
                        this.Addpayment.eothers = 0;
                  }
                  if (this.Addpayment.esubtotala == null || this.Addpayment.esubtotala == undefined) {
                        this.Addpayment.esubtotala = 0;
                  }
                  if (this.Addpayment.eleave == null || this.Addpayment.eleave == undefined) {
                        this.Addpayment.eleave = 0;
                  }
                  if (this.Addpayment.esubtotalb == null || this.Addpayment.esubtotalb == undefined) {
                        this.Addpayment.esubtotalb = 0;
                  }
                  if (this.Addpayment.epf == null || this.Addpayment.epf == undefined) {
                        this.Addpayment.pf = 0;
                  }
                  if (this.Addpayment.eesi == null || this.Addpayment.eesi == undefined) {
                        this.Addpayment.eesi = 0;
                  }
                  if (this.Addpayment.egratuity == null || this.Addpayment.egratuity == undefined) {
                        this.Addpayment.egratuity = 0;
                  }
                  if (this.Addpayment.ebound == null || this.Addpayment.ebound == undefined) {
                        this.Addpayment.ebound = 0;
                  }
                  if (this.Addpayment.esubtotalc == null || this.Addpayment.esubtotalc == undefined) {
                        this.Addpayment.esubtotalc = 0;
                  }
                  if (this.Addpayment.etotal == null || this.Addpayment.etotal == undefined) {
                        this.Addpayment.etotal = 0;
                  }
                  if (this.Addpayment.eweekly_off == null || this.Addpayment.eweekly_off == undefined) {
                        this.Addpayment.eweekly_off = 0;
                  }
                  if (this.Addpayment.eagency_charges == null || this.Addpayment.eagency_charges == undefined) {
                        this.Addpayment.agency_charges = 0;
                  }
                  if (this.Addpayment.esubtotal == null || this.Addpayment.esubtotal == undefined) {
                        this.Addpayment.subtotal = 0;
                  }
                  if (this.Addpayment.erounded_off == null || this.Addpayment.erounded_off == undefined) {
                        this.Addpayment.erounded_off = 0;
                  }
                  console.log(this.Addpayment);
                  this.http.post('https://bssservice.herokuapp.com/payment/payupdate', this.Addpayment).subscribe(data => {
                        this.datas = data;
                        alert("Updated Successfully")
                        this.router.navigate(['main/paymentpage/' + this.Addpayment.site_id])
                  });
            } else {
                  alert("The Rounded Off Value is Not Equal to Employee Required Amount. Employee Required Amount is:" + this.amount)
                  alert("Pls Update the Employee Required Amount in Requirement Table")
            }
      }



      cal1() {
            this.Addpayment.subtotala = this.Addpayment.basic + this.Addpayment.da + this.Addpayment.additional_hours + this.Addpayment.others;
            this.Addpayment.subtotalb = this.Addpayment.subtotala + this.Addpayment.leave;
            this.Addpayment.subtotalc = this.Addpayment.pf + this.Addpayment.esi + this.Addpayment.gratuity + this.Addpayment.bouns;
            this.Addpayment.total = this.Addpayment.subtotalc + this.Addpayment.subtotalb;
            this.Addpayment.subtotal = this.Addpayment.total + this.Addpayment.weekly_off + this.Addpayment.agency_charges;
            this.Addpayment.rounded_off = Math.round(this.Addpayment.subtotal)
      }

      cal2() {
            this.Addpayment.esubtotala = this.Addpayment.ebasic + this.Addpayment.eda + this.Addpayment.eadditional_hours + this.Addpayment.eothers;
            this.Addpayment.esubtotalb = this.Addpayment.esubtotala + this.Addpayment.eleave;
            this.Addpayment.esubtotalc = this.Addpayment.egratuity + this.Addpayment.ebound;
            this.Addpayment.etotal = this.Addpayment.esubtotalc + this.Addpayment.esubtotalb;
            this.Addpayment.esubtotal = this.Addpayment.etotal + this.Addpayment.eweekly_off + this.Addpayment.eagency_charges;
            let a = this.Addpayment.esubtotala - (this.Addpayment.esubtotala * .14);
            let b = this.Addpayment.esubtotala - (this.Addpayment.esubtotala * .08);
            this.Addpayment.epf = this.Addpayment.esubtotala - a;
            this.Addpayment.eesi = this.Addpayment.esubtotala - b;
            console.log(this.Addpayment.epf, this.Addpayment.eesi);
            this.Addpayment.esubtotal = this.Addpayment.esubtotal - this.Addpayment.epf - this.Addpayment.eesi;
            this.Addpayment.erounded_off = Math.round(this.Addpayment.esubtotal)
      }








      eadd1() {
            this.Addpayment.esubtotala = this.Addpayment.ebasic + this.Addpayment.eda + this.Addpayment.eadditional_hours + this.Addpayment.eothers;
      }
      eadd2() {
            this.Addpayment.esubtotalb = this.Addpayment.esubtotala + this.Addpayment.eleave;
      }
      eadd3() {
            this.Addpayment.esubtotalc = this.Addpayment.egratuity + this.Addpayment.ebound;
            this.Addpayment.etotal = this.Addpayment.esubtotalc + this.Addpayment.esubtotalb;
      }
      eadd4() {
            this.eadd1();
            this.eadd2();
            this.eadd3();
            this.Addpayment.esubtotal = this.Addpayment.etotal + this.Addpayment.eweekly_off + this.Addpayment.eagency_charges;
            this.Addpayment.esubtotal = this.Addpayment.esubtotal - this.Addpayment.epf - this.Addpayment.eesi;
            this.Addpayment.erounded_off = Math.round(this.Addpayment.esubtotal)
      }






}



class Addpayment {
      id: number;
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
      ebasic: number;
      eda: number;
      eadditional_hours: number;
      eothers: number;
      esubtotala: number;
      eleave: number;
      esubtotalb: number;
      epf: number;
      egratuity: number;
      eesi: number;
      ebound: number;
      esubtotalc: number;
      etotal: number;
      eweekly_off: number;
      eagency_charges: number;
      esubtotal: number;
      erounded_off: number;
}



