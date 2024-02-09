import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-manual-entry-emp',
  templateUrl: './manual-entry-emp.component.html',
  styleUrls: ['./manual-entry-emp.component.scss']
})
export class ManualEntryEmpComponent implements OnInit {

  id: number;
  company_name: string;
  unit_name: string;
  date: string;
  ecode: string;
  ename: string;
  etype: string;
  eac: string;
  ebankname: string;
  eifsc: string;
  designation: string;
  present: number = 0;
  dutyoff: number = 0;
  add_duties: number = 0;
  payment_type: string = "Bank";
  paymode: string = "Process";
  total_duties: number = 0;
  basic: number = 0;
  da: number = 0;
  hra: number = 0;
  trv_ex: number = 0;
  others: number = 0;
  medical: number = 0;
  others1: number = 0;
  others2: number = 0;
  others3: number = 0;
  others4: number = 0;
  waesi: number = 0;
  ewdays: number = 0;
  ewamount: number = 0;
  gross: number = 0;
  advance: number = 0;
  loan: number = 0;
  uniform: number = 0;
  mess: number = 0;
  rent: number = 0;
  atm: number = 0;
  phone: number = 0;
  otherss: number = 0;
  advance1: number = 0;
  loan1: number = 0;
  uniform1: number = 0;
  mess1: number = 0;
  rent1: number = 0;
  atm1: number = 0;
  phone1: number = 0;
  otherss1: number = 0;
  pf: number = 0;
  esi: number = 0;
  pr_tax: number = 0;
  staff_wellfare: number = 0;
  total_dec: number = 0;
  ner_pay: number = 0;
  add_amount: number = 0;
  ///////////////////////////////////////////////////
  companylist: any;
  site_names: any;
  site_details: any;
  datas: any;
  unitdetails: any;
  employee_details: any;
  ///////////////////////////////////////////////////
  unit_code: string;
  ////////////////////////
  start_date: string;
  end_date: string;
  emi: any;
  emi1: any;
  date_count: number;
  ////////////////////////////////////////////////////
  abasic: number;
  ada: number;
  adec: number;
  aesi: number;
  ahra: number;
  amedical: number;
  aothers: number;
  aothers1: number;
  aothers2: number;
  aothers3: number;
  aothers4: number;
  apf: number;
  atotal: number;
  atotal_pay: number;
  atrv_exp: number;
  ////////////////////////
  bbasic: number;
  bda: number;
  bdec: number;
  besi: number;
  bhra: number;
  bmedical: number;
  bothers: number;
  bothers1: number;
  bothers2: number;
  bothers3: number;
  bothers4: number;
  bpf: number;
  btotal: number;
  btotal_pay: number;
  btrv_exp: number;
  //////////////////////
  current_date: string;
  add_duties_gross: number;
  total_cash: number = 0;
  /////////////////////////////
  entry_pay: any;
  entry_pre_count: number = 0;
  entry_date: string;
  ////////////////////////////
  datatables1: any;
  datatables2: any;
  ////////////////////////////
  gstrength: number = 0;
  gnoofday: number = 0;
  got: number = 0;
  gtotal: number = 0;
  ////////////////////////////
  padvance: number = 0;
  ploan: number = 0;
  puniform: number = 0;
  pmess: number = 0;
  prent: number = 0;
  patm: number = 0;
  pphone: number = 0;


  lock: boolean;
  unlock: boolean;


  fixed_rank: string;


  buttonState: boolean = false;

  advance_id: number = 0;
  loan_id: number = 0;
  uniform_id: number = 0;
  mess_id: number = 0;
  rent_id: number = 0;
  atmcard_id: number = 0;
  others_id: number = 0;
  phone_id: number = 0;



  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) {

    this.lock = false;
    this.http.post('https://bssservice.herokuapp.com/company/companylists', { "id": 0 }).subscribe((data: any) => {
      this.companylist = data.data;
      console.log(data.data);
    });
    var dateObj = new Date();

    var month: any = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    month = formatDate(new Date(dateObj), 'MM', 'en');
    this.date = year + '-' + month;
    console.log(this.date);
    this.datess();
  }
  cancel() {
    this.buttonState = false;
    console.log('in');
    this.designation = '';
    this.fixed_rank = '';
    this.ename = '';
    this.ecode = '';
    this.eac = '';
    this.present = 0;
    this.dutyoff = 0;
    this.add_duties = 0;
    this.payment_type = 'Bank';
    this.paymode = 'Process';
    this.total_duties = 0;
    this.basic = 0;
    this.da = 0;
    this.hra = 0;
    this.trv_ex = 0;
    this.others = 0;
    this.medical = 0;
    this.others1 = 0;
    this.others2 = 0;
    this.others3 = 0;
    this.others4 = 0;
    this.waesi = 0;
    this.ewdays = 0;
    this.ewamount = 0;
    this.gross = 0;
    this.advance = 0;
    this.loan = 0;
    this.uniform = 0;
    this.mess = 0;
    this.rent = 0;
    this.atm = 0;
    this.phone = 0;
    this.otherss = 0;
    this.advance1 = 0;
    this.loan1 = 0;
    this.uniform1 = 0;
    this.mess1 = 0;
    this.rent1 = 0;
    this.atm1 = 0;
    this.phone1 = 0;
    this.otherss1 = 0;
    this.pf = 0;
    this.esi = 0;
    this.pr_tax = 0;
    this.staff_wellfare = 0;
    this.total_dec = 0;
    this.ner_pay = 0;
    this.add_amount = 0;
    this.total_cash = 0;
    this.entry_pre_count = 0;
    this.gstrength = 0;
    this.gnoofday = 0;
    this.got = 0;
    this.gtotal = 0;
    this.padvance = 0;
    this.ploan = 0;
    this.puniform = 0;
    this.pmess = 0;
    this.prent = 0;
    this.patm = 0;
    this.pphone = 0;
  }
  ranks() {
    console.log(this.unit_code);
    console.log(this.ecode);
    console.log(this.designation);
    console.log(this.date);
    this.http.post('https://bssservice.herokuapp.com/manual_entry/fetch_payment_entry', { 'unit_code': '' + this.unit_code, 'ecode': '' + this.ecode, 'designation': '' + this.designation, 'date': '' + this.date }).subscribe((data: any) => {
      console.log(data.data);
      if (data.data[0].message === 'null') {
        this.buttonState = false;
        this.present = 0;
        this.dutyoff = 0;
        this.add_duties = 0;
        this.payment_type = 'Bank';
        this.paymode = 'Process';
        this.total_duties = 0;
        this.basic = 0;
        this.da = 0;
        this.hra = 0;
        this.trv_ex = 0;
        this.others = 0;
        this.medical = 0;
        this.others1 = 0;
        this.others2 = 0;
        this.others3 = 0;
        this.others4 = 0;
        this.waesi = 0;
        this.ewdays = 0;
        this.ewamount = 0;
        this.gross = 0;
        // this.advance = 0;
        // this.loan = 0;
        // this.uniform = 0;
        // this.mess = 0;
        // this.rent = 0;
        // this.atm = 0;
        // this.phone = 0;
        // this.otherss = 0;
        // this.advance1 = 0;
        // this.loan1 = 0;
        // this.uniform1 = 0;
        // this.mess1 = 0;
        // this.rent1 = 0;
        // this.atm1 = 0;
        // this.phone1 = 0;
        // this.otherss1 = 0;
        this.pf = 0;
        this.esi = 0;
        this.pr_tax = 0;
        this.staff_wellfare = 0;
        this.total_dec = 0;
        this.ner_pay = 0;
        this.add_amount = 0;
        this.total_cash = 0;
        this.entry_pre_count = 0;
        this.gstrength = 0;
        this.gnoofday = 0;
        this.got = 0;
        this.gtotal = 0;
        this.padvance = 0;
        this.ploan = 0;
        this.puniform = 0;
        this.pmess = 0;
        this.prent = 0;
        this.patm = 0;
        this.pphone = 0;
        this.search(this.ecode);
      } else {
        this.edit(data.data[0]);
        if (this.buttonState === true) {
          this.entry_pre_count = this.date_count - data.data[0].present;
        } else if (this.buttonState === false) {
          this.entry_pre_count = this.date_count + data.data[0].present;
        }
      }
    });
  }
  remove() {

  }
  fetchsite(data) {
    console.log(data);
    this.company_name = data;
    this.http.post('https://bssservice.herokuapp.com/company/fetchcompanysite', { "company_name": data }).subscribe((data: any) => {
      this.site_names = data.data;
      console.log(this.site_names)
    });
  }

  Contract_list(data) {
    this.http.post('https://bssservice.herokuapp.com/client/fetchsite', { "id": "" + data }).subscribe((data: any) => {
      this.site_details = data.data;
      console.log(this.site_details)
      this.unit_code = this.site_details[0].sitelogin;
      this.fetchalreadyregister(this.unit_code);
    });
  }
  lockunlock(data) {
    let a = data;
    console.log(a);
    if (a == 'true') {
      this.lock = true;
      this.unlock = false;
      console.log(this.lock, this.unlock);
    } else if (a == 'false') {
      this.lock = false;
      this.unlock = true;
      console.log(this.lock, this.unlock);
    }
  }
  datess() {

    this.entry_date = this.date;
    this.current_date = this.date + "-01";
    let j = formatDate(new Date(this.current_date), 'MM', 'en');
    // console.log(j);
    var i = formatDate(new Date(this.current_date), 'yyyy', 'en');
    console.log(i);
    if (j == '01') {
      var b = +i - 1;
      console.log(b);
      var end_date = i + "-" + j + "-20";
      let a = 12;
      var start_date = b + "-" + a + "-20";
      console.log(start_date, end_date);
    } else {
      var end_date = i + "-" + j + "-20";
      var a = +j - 1;
      var start_date = i + "-0" + a + "-20";
      console.log(start_date, end_date);
    }
  }
  dates(data) {
    data = this.date;

    this.entry_date = data;
    this.current_date = data + "-01";
    let j = formatDate(new Date(this.current_date), 'MM', 'en');
    // console.log(j);
    var i = formatDate(new Date(this.current_date), 'yyyy', 'en');
    console.log(i);
    if (j == '01') {
      var b = +i - 1;
      console.log(b);
      var end_date = i + "-" + j + "-20";
      let a = 12;
      var start_date = b + "-" + a + "-20";
      console.log(start_date, end_date);
    } else {
      var end_date = i + "-" + j + "-20";
      var a = +j - 1;
      var start_date = i + "-0" + a + "-20";
      console.log(start_date, end_date);
    }
  }
  delete(data) {
    console.log(data);
    this.http.post('https://bssservice.herokuapp.com/manual_entry/manual_entry_emp_delete', { "id": data }).subscribe((data: any) => {
      alert('Deleted Successfully')
      this.view();
    });
  }

  fetchalreadyregister(data) {
    this.datas = [];
    console.log(data);
    this.http.post('https://bssservice.herokuapp.com/manual_entry/manual_entry_unit_list', { "id": "" + data }).subscribe((data: any) => {
      this.unitdetails = data.data;
      console.log(this.unitdetails[0])
      console.log(this.unitdetails.lenth);
      if (this.unitdetails[0] === undefined) {
        this.datas = [];
      }
      if (this.unitdetails[0].day_month === 'Default') {
        let now = new Date(this.current_date);
        let a = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
        this.date_count = a;
        console.log(this.date_count);
      } else if (this.unitdetails[0].day_month === 'Dynamic') {
        // let now = new Date(this.current_date);
        // let a  = new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
        // this.date_count = a;
        // console.log(this.date_count);

        // var j = formatDate(new Date(this.current_date), 'MM', 'en');
        // var i = formatDate(new Date(this.current_date), 'yyyy', 'en');
        // var start_date = i+"-"+j+"-25";
        // let a = +j + 1;
        // var end_date = i +"-0"+a+"-25";
        let j = formatDate(new Date(this.current_date), 'MM', 'en');
        // console.log(j);
        var i = formatDate(new Date(this.current_date), 'yyyy', 'en');
        console.log(i);
        if (j == '01') {
          var b = +i - 1;
          console.log(b);
          var end_date = i + "-" + j + "-20";
          let a = 12;
          var start_date = b + "-" + a + "-20";
          console.log(start_date, end_date);
        } else {
          var end_date = i + "-" + j + "-20";
          var a = +j - 1;
          var start_date = i + "-0" + a + "-20";
          console.log(start_date, end_date);
        }
        console.log(start_date, end_date)
        var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        var firstDate = new Date(start_date);
        var secondDate = new Date(end_date);
        var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));
        console.log(diffDays);
        this.date_count = +diffDays;




      } else if (this.unitdetails[0].day_month === 'Custom') {
        this.date_count = this.unitdetails[0].day_month_date
        console.log(this.date_count)
      }
      let datas = this.unitdetails[0].id;
      this.tablereloads(datas);
    });
  }

  tablereloads(data) {
    this.http.post('https://bssservice.herokuapp.com/manual_entry/manual_entry_rate_list', { "id": +data }).subscribe((data: any) => {
      this.datas = data.data;
      console.log(this.datas);
    });
  }

  search(datass) {
    this.entry_pre_count = 0;
    this.ecode = datass;
    console.log(datass);

    this.http.post('https://bssservice.herokuapp.com/authentication/employee_id1', { employee_id: "" + datass }).subscribe((data: any) => {
      this.employee_details = data.data;
      console.log(this.employee_details);
      this.ename = this.employee_details.Name;
      this.etype = this.employee_details.employee_type;
      this.eac = this.employee_details.a_c;
      if (this.eac == "" || this.eac == null) {
        this.payment_type = "Cash";
      }
      this.ebankname = this.employee_details.bankname;
      this.eifsc = this.employee_details.ifcs;




      this.start_date = this.entry_date + "-01";
      this.end_date = this.entry_date + "-31";

      console.log(this.start_date, this.end_date, this.entry_date)
      this.advance = 0;
      this.loan = 0;
      this.emi = 0;
      this.uniform = 0;
      this.rent = 0;
      this.atm = 0;
      this.phone = 0;
      this.otherss = 0;
      this.mess = 0;

      this.http.post('https://bssservice.herokuapp.com/advance/monthlyfetch', {
        "employee_id": "" + datass,
        "start_date": this.start_date,
        "end_date": this.end_date
      }).subscribe((data: any) => {
        console.log(data.data);
        this.emi = data.data;
        for (let j = 0; j < this.emi.length; j++) {
          console.log(this.emi[j].advance_type)
          if (this.emi[j].advance_type == 'Advance') {
            this.advance = this.advance + this.emi[j].pbalanceamount;
            this.advance_id = this.emi[j].id;
            console.log(this.advance_id);
          } else if (this.emi[j].advance_type == 'Loan') {
            this.loan = this.loan + this.emi[j].pbalanceamount;
            this.loan_id = this.emi[j].id;
            console.log(this.loan_id);
          } else if (this.emi[j].advance_type == 'Uniform') {
            this.uniform = this.uniform + this.emi[j].pbalanceamount;
            this.uniform_id = this.emi[j].id;
            console.log(this.uniform_id);
          } else if (this.emi[j].advance_type == 'Mess') {
            this.mess = this.mess + this.emi[j].pbalanceamount;
            this.mess_id = this.emi[j].id;
            console.log(this.mess_id);
          } else if (this.emi[j].advance_type == 'Rent') {
            this.rent = this.rent + this.emi[j].pbalanceamount;
            this.rent_id = this.emi[j].id;
            console.log(this.rent_id);
          } else if (this.emi[j].advance_type == 'ATM Card') {
            this.atm = this.atm + this.emi[j].pbalanceamount;
            this.atmcard_id = this.emi[j].id;
            console.log(this.atmcard_id);
          } else if (this.emi[j].advance_type == 'Phone') {
            this.phone = this.phone + this.emi[j].pbalanceamount;
            this.phone_id = this.emi[j].id;
            console.log(this.phone_id);
          } else if (this.emi[j].advance_type == 'Others') {
            this.otherss = this.otherss + this.emi[j].pbalanceamount;
            this.others_id = this.emi[j].id;
            console.log(this.others_id);
          }
        }
        console.log(this.emi, this.advance, this.loan, this.uniform, this.mess, this.rent, this.atm, this.phone, this.otherss);

        this.http.post('https://bssservice.herokuapp.com/manual_entry/manual_entry_emp_fetch', {
          "ecode": "" + datass,
          "date": "" + this.entry_date
        }).subscribe((data: any) => {
          this.entry_pay = data.data;
          console.log(this.entry_pay);
          this.entry_pre_count;
          for (let i = 0; i < this.entry_pay.length; i++) {
            this.entry_pre_count = this.entry_pre_count + this.entry_pay[i].present;
            if (this.advance == this.entry_pay[i].advance) {
              this.advance = 0;
            }
            if (this.loan == this.entry_pay[i].loan) {
              this.loan = 0;
            }
            if (this.atm == this.entry_pay[i].atm) {
              this.atm = 0;
            }
            if (this.mess == this.entry_pay[i].mess) {
              this.mess = 0;
            }
            if (this.rent == this.entry_pay[i].rent) {
              this.rent = 0;
            }
            if (this.uniform == this.entry_pay[i].uniform) {
              this.uniform = 0;
            }
            if (this.phone == this.entry_pay[i].phone) {
              this.phone = 0;
            }
            if (this.otherss == this.entry_pay[i].otherss) {
              this.otherss = 0;
            }
            console.log(this.entry_pre_count);
          }
        });
      });

      this.advance1 = 0;
      this.loan1 = 0;
      this.emi1 = 0;
      this.uniform1 = 0;
      this.rent1 = 0;
      this.atm1 = 0;
      this.phone1 = 0;
      this.otherss1 = 0;
      this.mess1 = 0;

      this.http.post('https://bssservice.herokuapp.com/advance/monthlyfetch1', {
        "employee_id": "" + datass
      }).subscribe((data: any) => {
        console.log(data);
        this.emi1 = data.data;
        for (let j = 0; j < this.emi1.length; j++) {
          console.log(this.emi1[j].advance_type)
          if (this.emi1[j].advance_type == 'Advance') {
            this.advance1 = this.advance1 + this.emi1[j].pbalanceamount
          } else if (this.emi1[j].advance_type == 'Loan') {
            this.loan1 = this.loan1 + this.emi1[j].pbalanceamount
          } else if (this.emi1[j].advance_type == 'Uniform') {
            this.uniform1 = this.uniform1 + this.emi1[j].pbalanceamount
          } else if (this.emi1[j].advance_type == 'Mess') {
            this.mess1 = this.mess1 + this.emi1[j].pbalanceamount
          } else if (this.emi1[j].advance_type == 'Rent') {
            this.rent1 = this.rent1 + this.emi1[j].pbalanceamount
          } else if (this.emi1[j].advance_type == 'ATM Card') {
            this.atm1 = this.atm1 + this.emi1[j].pbalanceamount
          } else if (this.emi1[j].advance_type == 'Phone') {
            this.phone1 = this.phone1 + this.emi1[j].pbalanceamount
          } else if (this.emi1[j].advance_type == 'Others') {
            this.otherss1 = this.otherss1 + this.emi1[j].pbalanceamount
          }
        }
        console.log(this.emi1, this.advance, this.loan, this.uniform, this.mess, this.rent, this.atm, this.phone, this.otherss);
      });
    });
  }

  onRanks(data) {

    this.ranks();
    this.designation = data;
    for (let i = 0; i < this.datas.length; i++) {
      if (data === this.datas[i].rank) {
        this.abasic = this.datas[i].basic / this.date_count;
        this.ada = this.datas[i].da / this.date_count;
        this.adec = this.datas[i].dec / this.date_count;
        this.aesi = this.datas[i].esi / this.date_count;
        this.ahra = this.datas[i].hra / this.date_count;
        this.amedical = this.datas[i].medical / this.date_count;
        this.aothers = this.datas[i].others / this.date_count;
        this.aothers1 = this.datas[i].others1 / this.date_count;
        this.aothers2 = this.datas[i].others2 / this.date_count;
        this.aothers3 = this.datas[i].others3 / this.date_count;
        this.aothers4 = this.datas[i].others4 / this.date_count;
        this.apf = this.datas[i].pf / this.date_count;
        this.atotal = this.datas[i].total / this.date_count;
        this.atotal_pay = this.datas[i].total_pay / this.date_count;
        this.atrv_exp = this.datas[i].trv_exp / this.date_count;
      }
    }


    this.datas.forEach(element => {
      if (this.designation == element.rank) {
        this.fixed_rank = element.total_pay;
        console.log(this.fixed_rank);
      }
    });

  }
  changes1(value, valueType) {
    console.log(value, valueType);
  }

  changes() {
    if (this.otherss == undefined) {
      this.otherss = 0;
    }
    this.total_dec = this.pf + this.esi + this.pr_tax + this.advance + this.loan + this.uniform + this.mess + this.rent + this.atm + this.phone + this.otherss;
    this.ner_pay = this.total_cash - this.total_dec;
    console.log(this.pf, this.esi, this.pr_tax, this.advance, this.loan, this.uniform, this.mess, this.rent, this.atm, this.phone, this.otherss,
      this.ner_pay, this.total_cash, this.total_dec);

  }

  presents(present) {
    console.log(this.present)

    this.present = +present;
    // if ( this.buttonState === true) {
    //   this.entry_pre_count = this.date_count - this.present;
    // } else if ( this.buttonState === false) {
    //   this.entry_pre_count = this.date_count + this.present;
    // }

    // let check = +this.entry_pre_count;
    let check = +this.entry_pre_count + +present;
    console.log(check)
    if (check > this.date_count) {
      alert("You have Enter above Duties Range. This Unit Duties Range is " + this.date_count)
    } else {
      this.basic = Math.round(this.abasic * this.present);
      this.da = Math.round(this.ada * this.present);
      this.hra = Math.round(this.ahra * this.present);
      this.trv_ex = Math.round(this.atrv_exp * this.present);
      this.medical = Math.round(this.amedical * this.present);
      this.others = Math.round(this.aothers * this.present);
      this.others1 = Math.round(this.aothers1 * this.present);
      this.others2 = Math.round(this.aothers2 * this.present);
      this.others3 = Math.round(this.aothers3 * this.present);
      this.others4 = Math.round(this.aothers4 * this.present);
      this.pf = Math.round(this.apf * this.present);
      this.esi = Math.round(this.aesi * this.present);
      console.log(this.basic, this.da, this.hra, this.trv_ex, this.medical, this.others, this.others1, this.others2, this.others3, this.others4, this.pf, this.esi);
      this.gross = Math.round(this.basic + this.da + this.hra + this.trv_ex + this.medical + this.others + this.others1 + this.others2 + this.others3 + this.others4 + this.add_amount);
      this.total_cash = this.gross
      this.total_duties = this.present;
      if (this.gross >= 3501 && this.gross <= 5000) {
        this.pr_tax = 23;
      } else if (this.gross >= 5001 && this.gross <= 9000) {
        this.pr_tax = 53;
      } else if (this.gross >= 9001 && this.gross <= 10000) {
        this.pr_tax = 115;
      } else if (this.gross >= 10001 && this.gross <= 12500) {
        this.pr_tax = 171;
      } else if (this.gross >= 12501 && this.gross <= 300000) {
        this.pr_tax = 208;
      }
      if (this.otherss == undefined) {
        this.otherss = 0;
      }

      this.total_dec = this.pf + this.esi + this.pr_tax + this.advance + this.loan + this.uniform + this.mess + this.rent + this.atm + this.phone + this.otherss;
      this.ner_pay = this.total_cash - this.total_dec;
      console.log(this.total_dec, this.pf, this.esi, this.pr_tax, this.advance, this.loan, this.uniform, this.mess, this.rent, this.atm, this.phone, this.otherss,
        this.ner_pay, this.total_cash, this.total_dec);

    }
  }


  add_dutiess() {
    if (this.total_duties === (+this.present + +this.add_duties)) {
      alert('Can not add same additional duties');
    } else if (this.add_duties < 0) {
      alert('Can not add negative additional duties');
    } else {
      this.total_duties = +this.present + +this.add_duties;
      console.log(this.total_duties, this.present, this.add_duties);
      console.log(this.abasic, this.add_duties);
      this.bbasic = Math.round(this.abasic * this.add_duties);
      this.bda = Math.round(this.ada * this.add_duties);
      this.bhra = Math.round(this.ahra * this.add_duties);
      this.btrv_exp = Math.round(this.atrv_exp * this.add_duties);
      this.bmedical = Math.round(this.amedical * this.add_duties);
      this.bothers = Math.round(this.aothers * this.add_duties);
      this.bothers1 = Math.round(this.aothers1 * this.add_duties);
      this.bothers2 = Math.round(this.aothers2 * this.add_duties);
      this.bothers3 = Math.round(this.aothers3 * this.add_duties);
      this.bothers4 = Math.round(this.aothers4 * this.add_duties);
      this.bpf = Math.round(this.apf * this.add_duties);
      this.besi = Math.round(this.aesi * this.add_duties);
      console.log(this.bbasic, this.bda, this.bhra, this.btrv_exp, this.bmedical, this.bothers, this.bothers1, this.bothers2, this.bothers3, this.bothers4, this.bpf, this.besi);
      this.add_duties_gross = Math.round(this.bbasic + this.bda + this.bhra + this.btrv_exp + this.bmedical + this.bothers + this.bothers1 + this.bothers2 + this.bothers3 + this.bothers4);
      this.total_cash = this.gross + this.add_duties_gross;
      this.ewdays = this.add_duties;
      this.ewamount = this.add_duties_gross;
      this.ner_pay = this.total_cash - this.total_dec;
      this.gross = this.ner_pay + this.total_dec;
      this.changes();
    }
  }
  ngOnInit() {

  }

  view() {
    this.datatables1 = [];
    this.datatables2 = [];

    this.http.post('https://bssservice.herokuapp.com/manual_entry/manual_entry_emp_list', {
      "date": "" + this.entry_date,
      "unit_name": this.site_details[0].title
    }).subscribe((data: any) => {
      this.datatables1 = data.data;
      console.log(this.datatables1);
    });

    this.http.post('https://bssservice.herokuapp.com/manual_entry/manual_entry_emp_list1', {
      "date": "" + this.entry_date,
      "unit_name": this.site_details[0].title
    }).subscribe((data: any) => {
      this.datatables2 = data.data;
      console.log(this.datatables2);
      this.gstrength = 0;
      this.gnoofday = 0;
      this.got = 0;
      this.gtotal = 0;
      for (let i = 0; i < this.datatables2.length; i++) {
        this.gstrength = +this.gstrength + +this.datatables2[i].strength;
        this.gnoofday = this.gnoofday + this.datatables2[i].present;
        this.got = this.got + this.datatables2[i].add_duties;
        this.gtotal = this.gtotal + this.datatables2[i].total_duties
      }
    });
  }

  edit(data) {
    this.buttonState = true;
    console.log(data);
    this.http.post('https://bssservice.herokuapp.com/manual_entry/manual_entry_emp_fetch_id', {
      "id": data.id,
    }).subscribe((data: any) => {
      // if ( this.buttonState === true) {
      //   this.present=data.data.present;
      //   this.date_count = this.date_count - this.present;
      // } else if ( this.buttonState !== true) {
      //   this.present=data.data.present;
      // }
      console.log(data.data);
      this.present = data.data.present;
      this.dutyoff = data.data.dutyoff;
      this.add_duties = data.data.add_duties;
      this.total_duties = data.data.total_duties;
      this.basic = data.data.basic;
      this.da = data.data.da;
      this.hra = data.data.hra;
      this.trv_ex = data.data.trv_ex;
      this.others = data.data.others;
      this.medical = data.data.medical;
      this.others1 = data.data.others1;
      this.others2 = data.data.others2;
      this.others3 = data.data.others3;
      this.others4 = data.data.others4;
      this.waesi = data.data.waesi;
      this.ewdays = data.data.ewdays;
      this.ewamount = data.data.ewamount;
      this.gross = data.data.gross;
      this.advance = data.data.advance;
      this.loan = data.data.loan;
      this.uniform = data.data.uniform;
      this.mess = data.data.mess;
      this.rent = data.data.rent;
      this.atm = data.data.atm;
      this.phone = data.data.phone;
      this.otherss = data.data.others;
      // this.advance1=data.data.advance;
      // this.loan1=data.data.id;
      // this.uniform1=data.data.id;
      // this.mess1=data.data.id;
      // this.rent1=data.data.id;
      // this.atm1=data.data.id;
      // this.phone1=data.data.id;
      this.pf = data.data.pf;
      this.esi = data.data.esi;
      this.pr_tax = data.data.pr_tax;
      this.staff_wellfare = data.data.staff_wellfare;
      this.total_dec = data.data.total_dec;
      this.ner_pay = data.data.net_pay;
      this.add_amount = data.data.add_amount;
      this.designation = data.data.designation;
      this.ecode = data.data.ecode;
      this.ename = data.data.ename;
      this.eac = data.data.eac;
      this.id = data.data.id;
      console.log(this.id)
      this.view();
      // this.http.post('https://bssservice.herokuapp.com/manual_entry/manual_entry_emp_delete', {"id":data.data.id}).subscribe((data:any) => {
      //   this.view();
      // });
    });
  }

  add_amnt(data) {
    console.log();
    this.presents(this.present);
  }



  save() {
    console.log(
      this.company_name,
      this.site_details[0].title,
      this.date,
      this.ecode,
      this.ename,
      this.etype,
      this.eac,
      this.ebankname,
      this.eifsc,
      this.designation,
      this.present,
      this.dutyoff,
      this.add_duties,
      this.payment_type,
      this.paymode,
      this.total_duties,
      this.basic,
      this.da,
      this.hra,
      this.trv_ex,
      this.others,
      this.medical,
      this.others1,
      this.others2,
      this.others3,
      this.others4,
      this.waesi,
      this.ewdays,
      this.ewamount,
      this.gross,
      this.advance,
      this.loan,
      this.uniform,
      this.mess,
      this.rent,
      this.atm,
      this.phone,
      this.otherss,
      this.pf,
      this.esi,
      this.pr_tax,
      this.staff_wellfare,
      this.total_dec,
      this.ner_pay,

      this.advance_id,
      this.loan_id,
      this.uniform_id,
      this.mess_id,
      this.rent_id,
      this.atmcard_id,
      this.phone_id,
      this.others_id







    )
    if (this.designation == '') {
      alert('Designation should not be empty')
    }
    if (this.ner_pay < 0) {
      alert('Negative salary please check NET PAY')
    } else if (this.ner_pay >= 0) {

      this.http.post('https://bssservice.herokuapp.com/manual_entry/manual_entry_emp_add', {
        company_name: "" + this.company_name,
        unit_name: this.site_details[0].title,
        date: "" + this.date,
        ecode: "" + this.ecode,
        ename: "" + this.ename,
        etype: "" + this.etype,
        eac: "" + this.eac,
        ebankname: "" + this.ebankname,
        eifsc: "" + this.eifsc,
        designation: "" + this.designation,
        present: +this.present,
        dutyoff: +this.dutyoff,
        add_duties: +this.add_duties,
        payment_type: "" + this.payment_type,
        paymode: "" + this.paymode,
        total_duties: +this.total_duties,
        basic: +this.basic,
        da: +this.da,
        hra: +this.hra,
        trv_ex: +this.trv_ex,
        others: +this.otherss,
        medical: +this.medical,
        others1: +this.others1,
        others2: +this.others2,
        others3: +this.others4,
        others4: +this.others4,
        waesi: +this.waesi,
        ewdays: +this.ewdays,
        ewamount: +this.ewamount,
        gross: +this.gross,
        advance: +this.advance,
        loan: +this.loan,
        uniform: +this.uniform,
        mess: +this.mess,
        rent: +this.rent,
        atm: +this.atm,
        phone: +this.phone,
        otherss: +this.otherss,
        pf: +this.pf,
        esi: +this.esi,
        pr_tax: +this.pr_tax,
        staff_wellfare: +this.staff_wellfare,
        total_dec: +this.total_dec,
        ner_pay: +this.ner_pay,
        add_amount: +this.add_amount,
        advance_id: +this.advance_id,
        loan_id: +this.loan_id,
        uniform_id: +this.uniform_id,
        mess_id: +this.mess_id,
        rent_id: +this.rent_id,
        atmcard_id: +this.atmcard_id,
        phone_id: +this.phone_id,
        others_id: +this.others_id
      }).subscribe((data: any) => {
        console.log(data);
        alert("Payment added successfully");
        this.designation = '';
        this.present = 0;
        this.etype = "";
        this.eac = "";
        this.ebankname = "";
        this.eifsc = "";
        this.present = 0;
        this.dutyoff = 0;
        this.add_duties = 0;
        this.payment_type = "";
        this.paymode = "";
        this.total_duties = 0;
        this.basic = 0;
        this.da = 0;
        this.hra = 0;
        this.trv_ex = 0;
        this.others = 0;
        this.medical = 0;
        this.others1 = 0;
        this.others2 = 0;
        this.others3 = 0;
        this.others4 = 0;
        this.waesi = 0;
        this.ewdays = 0;
        this.ewamount = 0;
        this.gross = 0;
        this.advance = 0;
        this.loan = 0;
        this.uniform = 0;
        this.mess = 0;
        this.rent = 0;
        this.atm = 0;
        this.phone = 0;
        this.otherss = 0;
        this.pf = 0;
        this.esi = 0;
        this.pr_tax = 0;
        this.staff_wellfare = 0;
        this.total_dec = 0;
        this.ner_pay = 0;
        this.total_cash = 0;
        this.add_amount = 0;

        this.advance_id = 0;
        this.loan_id = 0;
        this.uniform_id = 0;
        this.mess_id = 0;
        this.rent_id = 0;
        this.atmcard_id = 0;
        this.phone_id = 0;
        this.others_id = 0;
      });
    }
  }



  // updateone(uamount,upayment){
  //   this.udate = formatDate(this.udate, 'yyyy-MM-dd', 'en-US', '+0530');
  //   console.log(this.uamount,this.udate,this.upayment,this.ustatus)
  //   this.http.post('https://bssservice.herokuapp.com/advance/updateoneinstalment',{
  //   "id":this.deleteoneid,
  //   "date":this.date,
  //   "amount":+this.uamount,
  //   "dpaytype":this.upayment,
  //   "status": this.ustatus
  //   }).subscribe((data:any) => {
  //   alert("Updated This Instalment");
  //   this.click();
  //   });
  //   }



  onUpdate() {
    if (this.ner_pay < 0) {
      alert('Negative salary please check NET PAY')
    } else if (this.ner_pay >= 0) {
      this.http.post('https://bssservice.herokuapp.com/manual_entry/manual_entry_emp_update', {
        id: +this.id,
        company_name: "" + this.company_name,
        unit_name: this.site_details[0].title,
        date: "" + this.date,
        ecode: "" + this.ecode,
        ename: "" + this.ename,
        etype: "" + this.etype,
        eac: "" + this.eac,
        ebankname: "" + this.ebankname,
        eifsc: "" + this.eifsc,
        designation: "" + this.designation,
        present: +this.present,
        dutyoff: +this.dutyoff,
        add_duties: +this.add_duties,
        payment_type: "" + this.payment_type,
        paymode: "" + this.paymode,
        total_duties: +this.total_duties,
        basic: +this.basic,
        da: +this.da,
        hra: +this.hra,
        trv_ex: +this.trv_ex,
        others: +this.otherss,
        medical: +this.medical,
        others1: +this.others1,
        others2: +this.others2,
        others3: +this.others4,
        others4: +this.others4,
        waesi: +this.waesi,
        ewdays: +this.ewdays,
        ewamount: +this.ewamount,
        gross: +this.gross,
        advance: +this.advance,
        loan: +this.loan,
        uniform: +this.uniform,
        mess: +this.mess,
        rent: +this.rent,
        atm: +this.atm,
        phone: +this.phone,
        otherss: +this.others,
        pf: +this.pf,
        esi: +this.esi,
        pr_tax: +this.pr_tax,
        staff_wellfare: +this.staff_wellfare,
        total_dec: +this.total_dec,
        ner_pay: +this.ner_pay,
        add_amount: +this.add_amount,
        advance_id: +this.advance_id,
        loan_id: +this.loan_id,
        uniform_id: +this.uniform_id,
        mess_id: +this.mess_id,
        rent_id: +this.rent_id,
        atmcard_id: +this.atmcard_id,
        phone_id: +this.phone_id,
        others_id: +this.others_id
      }).subscribe((data: any) => {
        console.log(data);
        let datass = data.data.ecode;
        this.search(datass);
        alert("Payment updated successfully");
        this.designation = '';
        this.present = 0;
        this.etype = "";
        this.eac = "";
        this.ebankname = "";
        this.eifsc = "";
        this.present = 0;
        this.dutyoff = 0;
        this.add_duties = 0;
        this.payment_type = "";
        this.paymode = "";
        this.total_duties = 0;
        this.basic = 0;
        this.da = 0;
        this.hra = 0;
        this.trv_ex = 0;
        this.others = 0;
        this.medical = 0;
        this.others1 = 0;
        this.others2 = 0;
        this.others3 = 0;
        this.others4 = 0;
        this.waesi = 0;
        this.ewdays = 0;
        this.ewamount = 0;
        this.gross = 0;
        this.advance = 0;
        this.loan = 0;
        this.uniform = 0;
        this.mess = 0;
        this.rent = 0;
        this.atm = 0;
        this.phone = 0;
        this.otherss = 0;
        this.pf = 0;
        this.esi = 0;
        this.pr_tax = 0;
        this.staff_wellfare = 0;
        this.total_dec = 0;
        this.ner_pay = 0;
        this.total_cash = 0;
        this.add_amount = 0;

        this.advance_id = 0;
        this.loan_id = 0;
        this.uniform_id = 0;
        this.mess_id = 0;
        this.rent_id = 0;
        this.atmcard_id = 0;
        this.phone_id = 0;
        this.others_id = 0;
      });
    }
  }


}


